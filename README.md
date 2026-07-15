# `Edson Junior | QA Portfolio`

Portfólio pessoal de QA construído como uma landing page estática, com foco
em clareza técnica, narrativa profissional, responsividade e contato rápido.

## `Visão geral`

Este projeto apresenta o perfil profissional de Edson Junior como Analista de
Qualidade de Software, destacando:

- atuação em testes ponta a ponta;
- validação de APIs e integrações;
- rastreabilidade com Jira e Xray;
- contexto de operação, bots, URA e IA;
- canais de contato e download de currículo.

## `Destaques`

- `HTML5` semântico para estrutura clara e acessível
- `CSS3` moderno com design system próprio
- `JavaScript ES6+` para navegação, menu mobile e efeitos de reveal
- layout responsivo para desktop, tablet e mobile
- atalho direto para WhatsApp, LinkedIn, GitHub e currículo em PDF

## `Stack`

- `Frontend:` HTML5, CSS3, JavaScript ES6+
- `Fonte:` Maven Pro
- `Hospedagem sugerida:` Netlify, Vercel, ou GitHub Pages

## `Estrutura do projeto`

```text
portfolio/
├─ frontend/
│  ├─ assets/
│  │  ├─ docs/
│  │  ├─ images/
│  │  ├─ js/
│  │  └─ styles/
│  └─ index.html
├─ docs/
├─ .gitignore
└─ README.md
```

## `Ícones rápidos`

- `💬` WhatsApp direto no hero
- `🔗` LinkedIn profissional
- `🐙` GitHub
- `📄` Download do currículo em PDF

## `Como executar localmente`

Como o projeto é estático, você pode servir a pasta `frontend` com um servidor
local simples.

1. Entre na pasta do projeto.
2. Execute um servidor estático apontando para `frontend`.
3. Abra a URL local no navegador.

Exemplo com Python:

```bash
cd frontend
python -m http.server 4173
```

Depois, acesse:

```text
http://localhost:4173
```

## `Arquivos principais`

- `frontend/index.html`: estrutura principal da landing page
- `frontend/assets/styles/tokens.css`: tokens visuais do design system
- `frontend/assets/styles/base.css`: fonte, reset e fundações globais
- `frontend/assets/styles/navigation.css`: cabeçalho e navegação
- `frontend/assets/styles/components.css`: botões, links e componentes compartilhados
- `frontend/assets/styles/motion.css`: reveal, movimento reduzido e menu responsivo
- `frontend/assets/styles/*.css`: módulos de hero, sobre, especialidades, cases, ferramentas, contato e responsividade
- `frontend/assets/js/main.js`: menu mobile, links ativos e animações de reveal

## `Documentação de apoio`

- `docs/PRD.md`: visão do produto, MVP e decisões de conteúdo
- `docs/DESIGN.md`: direção visual e design system
- `docs/andamento.md`: status geral do projeto
- `docs/sprint-atual.md`: acompanhamento da sprint atual

## `Publicação`

O projeto está publicado em `https://edson-junior-qa.vercel.app/`. Os cases
usam evidências qualitativas baseadas no currículo e não exibem métricas
numéricas sem validação.

## `Observações`

- As imagens e o currículo usados pela interface já estão dentro de
  `frontend/assets/`.
- Pastas locais de apoio, agentes e referências estão ignoradas no
  `.gitignore`.
- O projeto foi organizado para evolução simples, sem dependência de framework.
