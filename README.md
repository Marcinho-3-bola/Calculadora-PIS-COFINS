# 🧮 Calculadora PIS / COFINS — Extensão para Chrome

[![Manifest V3](https://img.shields.io/badge/Manifest-V3-blue?style=flat-square)](https://developer.chrome.com/docs/extensions/mv3/intro/)
[![Versão](https://img.shields.io/badge/Versão-1.0.0-green?style=flat-square)]()
[![Licença](https://img.shields.io/badge/Licença-GNU-3.0-yellow?style=flat-square)](LICENSE)
[![100% Offline](https://img.shields.io/badge/Offline-100%25-brightgreen?style=flat-square)]()

Extensão para Google Chrome que calcula **PIS** e **COFINS** nos regimes de **Lucro Presumido** e **Lucro Real** de forma rápida, sem sair da página.

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

## 🚀 Instalação local (desenvolvimento)

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/calculadora-pis-cofins.git

# 2. Abra o Chrome e acesse
chrome://extensions

# 3. Ative o "Modo do desenvolvedor" (toggle superior direito)

# 4. Clique em "Carregar sem compactação"

# 5. Selecione a pasta do repositório
```

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

## 🔒 Privacidade e permissões

A extensão solicita apenas **uma permissão**:

| Permissão | Motivo |
|-----------|--------|
| `storage` | Salvar o histórico de cálculos localmente no navegador |

Nenhum dado pessoal é coletado, armazenado remotamente ou transmitido. Consulte o arquivo [PRIVACY.md](PRIVACY.md) para mais detalhes.

---

## 🛠️ Tecnologias

- **HTML / CSS / JavaScript** puro — sem dependências externas
- **Manifest V3** — padrão atual do Chrome Extensions
- **chrome.storage.local** — persistência local do histórico
- Fontes carregadas do Google Fonts (`Syne` + `DM Mono`)

---

## 📦 Publicar na Chrome Web Store

1. Gere o arquivo ZIP com o conteúdo da pasta raiz:
   ```bash
   zip -r pis-cofins-extension.zip manifest.json popup.html popup.css popup.js icons/
   ```
2. Acesse o [Chrome Developer Dashboard](https://chrome.google.com/webstore/devconsole)
3. Pague a taxa única de desenvolvedor: **US$ 5,00**
4. Clique em **Novo item** e faça upload do `.zip`
5. Preencha os metadados, adicione as capturas de tela e envie para revisão
6. Aprovação leva entre **1 a 3 dias úteis**

---

## 📄 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---

> **Aviso:** Esta extensão é uma ferramenta de estimativa. Para fins contábeis e fiscais oficiais, consulte sempre um contador ou profissional tributário habilitado.
