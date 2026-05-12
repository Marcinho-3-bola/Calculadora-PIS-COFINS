'use strict';

const REGIMES = {
  lp: { nome: 'Lucro Presumido', pis: 0.0065,  cofins: 0.03,  tag: 'tag-lp' },
  lr: { nome: 'Lucro Real',      pis: 0.0165,  cofins: 0.076, tag: 'tag-lr' }
};

let historico = [];

// ── Format helpers ──────────────────────────────────────────────────────────
function fmtBRL(v) {
  return 'R$ ' + v.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function fmtPct(v) {
  return (v * 100).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + '%';
}

// ── Input mask ───────────────────────────────────────────────────────────────
const input = document.getElementById('base-input');

input.addEventListener('input', function () {
  const raw = this.value.replace(/\D/g, '');
  if (!raw) { this.value = ''; return; }
  const num = parseInt(raw, 10) / 100;
  this.value = num.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
});

input.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') calcular();
});

// ── Regime buttons ───────────────────────────────────────────────────────────
document.querySelectorAll('input[name="regime"]').forEach(radio => {
  radio.addEventListener('change', updateRegimeBtns);
});

function updateRegimeBtns() {
  const val = document.querySelector('input[name="regime"]:checked').value;
  document.getElementById('btn-lp').className = 'regime-btn' + (val === 'lp' ? ' active-lp' : '');
  document.getElementById('btn-lr').className = 'regime-btn' + (val === 'lr' ? ' active-lr' : '');
}

// ── Calculate ────────────────────────────────────────────────────────────────
function calcular() {
  const raw  = input.value.replace(/\./g, '').replace(',', '.');
  const base = parseFloat(raw);

  if (!base || base <= 0) {
    input.classList.add('error');
    setTimeout(() => input.classList.remove('error'), 700);
    input.focus();
    return;
  }

  const regime = document.querySelector('input[name="regime"]:checked').value;
  const r      = REGIMES[regime];
  const pis    = base * r.pis;
  const cofins = base * r.cofins;
  const total  = pis + cofins;

  // Populate result card
  document.getElementById('res-base-label').textContent  = 'Base: ' + fmtBRL(base);
  const tag = document.getElementById('res-regime-tag');
  tag.textContent = r.nome;
  tag.className   = 'regime-tag ' + r.tag;

  document.getElementById('res-pis-aliq').textContent    = fmtPct(r.pis);
  document.getElementById('res-cofins-aliq').textContent = fmtPct(r.cofins);
  document.getElementById('res-total-aliq').textContent  = fmtPct(r.pis + r.cofins);

  document.getElementById('res-pis').textContent         = fmtBRL(pis);
  document.getElementById('res-cofins').textContent      = fmtBRL(cofins);
  document.getElementById('res-total').textContent       = fmtBRL(total);

  document.getElementById('res-pis-pct').textContent     = fmtPct(r.pis)    + ' s/ base';
  document.getElementById('res-cofins-pct').textContent  = fmtPct(r.cofins) + ' s/ base';

  const card = document.getElementById('results-card');
  card.style.display   = 'block';
  card.style.animation = 'none';
  void card.offsetWidth;
  card.style.animation = '';

  // Add to history
  historico.unshift({ regime: r.nome, base, pis, cofins, total, tag: r.tag });
  if (historico.length > 8) historico.pop();
  salvarHistorico();
  renderHistorico();
}

// ── History ──────────────────────────────────────────────────────────────────
function renderHistorico() {
  const card = document.getElementById('history-card');
  const list = document.getElementById('history-list');

  if (!historico.length) { card.style.display = 'none'; return; }

  card.style.display = 'block';
  list.innerHTML = historico.map((h, i) => `
    <li class="history-item" data-index="${i}">
      <div>
        <div class="hist-regime">${h.regime} · PIS ${fmtBRL(h.pis)} · COFINS ${fmtBRL(h.cofins)}</div>
        <div class="hist-base">${fmtBRL(h.base)}</div>
      </div>
      <div class="hist-total">${fmtBRL(h.total)}</div>
    </li>
  `).join('');

  list.querySelectorAll('.history-item').forEach(item => {
    item.addEventListener('click', () => recarregar(parseInt(item.dataset.index, 10)));
  });
}

function recarregar(i) {
  const h      = historico[i];
  const regime = h.tag === 'tag-lp' ? 'lp' : 'lr';
  document.querySelector(`input[name="regime"][value="${regime}"]`).checked = true;
  updateRegimeBtns();
  input.value = h.base.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  calcular();
}

function salvarHistorico() {
  chrome.storage.local.set({ historico });
}

function limparHistorico() {
  historico = [];
  chrome.storage.local.remove('historico');
  renderHistorico();
}

// ── Init ─────────────────────────────────────────────────────────────────────
document.getElementById('calc-btn').addEventListener('click', calcular);
document.getElementById('clear-btn').addEventListener('click', limparHistorico);

updateRegimeBtns();

chrome.storage.local.get('historico', (data) => {
  if (data.historico && Array.isArray(data.historico)) {
    historico = data.historico;
    renderHistorico();
  }
});
