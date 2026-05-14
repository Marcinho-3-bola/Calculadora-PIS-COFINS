# 🧮 Calculadora PIS / COFINS — Extensão para Chrome

[![Manifest V3](https://img.shields.io/badge/Manifest-V3-blue?style=flat-square)](https://developer.chrome.com/docs/extensions/mv3/intro/)
[![Versão](https://img.shields.io/badge/Versão-1.0.0-green?style=flat-square)]()
[![Licença](https://img.shields.io/badge/Licença-GNU-yellow?style=flat-square)](LICENSE)
[![100% Offline](https://img.shields.io/badge/Offline-100%25-brightgreen?style=flat-square)]()

Extensão para Chrome Web Store que calcula **PIS** e **COFINS** nos regimes de **Lucro Presumido** e **Lucro Real** de forma rápida, sem sair da página.

---

## ✨ Funcionalidades

- **Seleção de regime** — alterna entre Lucro Presumido (cumulativo) e Lucro Real (não cumulativo)
- **Resultado detalhado** — PIS e COFINS exibidos separadamente, com alíquota e valor em reais
- **Máscara automática** — campo de valor formatado como moeda brasileira (R$) em tempo real
- **Histórico persistente** — últimos 8 cálculos salvos via `chrome.storage.local`; clique em qualquer item para recarregar
- **100% offline** — nenhum dado é enviado a servidores externos

---

## 📊 Alíquotas utilizadas

| Regime | PIS | COFINS | Total | Tipo |
|--------|-----|--------|-------|------|
| **Lucro Presumido** | 0,65% | 3,00% | **3,65%** | Cumulativo |
| **Lucro Real** | 1,65% | 7,60% | **9,25%** | Não cumulativo |

> Alíquotas gerais conforme legislação vigente. Setores específicos (financeiro, farmacêutico, combustíveis etc.) podem ter alíquotas diferenciadas. A extensão não considera aproveitamento de créditos.

---

## 🚀 Instalação

### Via Chrome Web Store
Disponível na [Chrome Web Store](https://chromewebstore.google.com/detail/calculadora-pis-cofins/hckidamilnaomccjjkbjchmbhhjmgiml).

### Manualmente (modo desenvolvedor)
1. Baixe o [release](https://github.com/Marcinho-3-bola/Calculadora-PIS-COFINS/releases) mais recente.
2. Acesse `chrome://extensions` no Navegador.
3. Ative o **Modo do desenvolvedor** (canto superior direito).
4. Clique em **"Carregar sem compactação"**.
5. Selecione a pasta `cnae-extension`.


O ícone da extensão aparecerá na barra de ferramentas do Chrome.

---

## 📁 Estrutura do projeto

```
calculadora-pis-cofins/
├── manifest.json       ← Configuração da extensão (Manifest V3)
├── popup.html          ← Interface do popup
├── popup.css           ← Estilos
├── popup.js            ← Lógica, cálculos e histórico
├── icons/
│   ├── icon16.png
│   ├── icon32.png
│   ├── icon48.png
│   └── icon128.png
├── README.md
└── PRIVACY.md
```

---

Nenhum dado pessoal é coletado, armazenado remotamente ou transmitido. Consulte o arquivo [PRIVACY.md](PRIVACY.md) para mais detalhes.

---

## 🛠️ Tecnologias

- **HTML / CSS / JavaScript** puro — sem dependências externas
- **Manifest V3** — padrão atual do Chrome Extensions
- **chrome.storage.local** — persistência local do histórico
- Fontes carregadas do Google Fonts (`Syne` + `DM Mono`)

---

## 📄 Licença

Este projeto está licenciado sob a [GNU General Public License v3.0](LICENSE).

---

> **Aviso:** Esta extensão é uma ferramenta de estimativa. Para fins contábeis e fiscais oficiais, consulte sempre um contador ou profissional tributário habilitado.
