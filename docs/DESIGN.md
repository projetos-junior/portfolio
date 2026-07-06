# Design System — Portfólio QA

> **Quem preenche:** LUMI (UX/UI) com suporte de CANVAS (canvas-design-system.md)
> **Quando:** Antes de qualquer implementação de frontend
> **Consumido por:** FORGE (implementação), VALE (validação)
> **Versão:** 1.1 | **Status:** Direção visual definida e primeira implementação iniciada

---

## Identidade Visual

| Campo | Valor |
|-------|-------|
| **Nome do Produto** | Portfólio Pessoal de QA |
| **Personalidade** | profissional, precisa, tecnológica, confiável e contemporânea |
| **Tom Visual** | dark-first com contraste alto, acento verde menta e superfícies sóbrias |
| **Anti-padrões** | visual genérico de template, excesso de gradientes aleatórios, blocos muito coloridos, animações pesadas, linguagem visual de portfólio de designer sem adaptação para QA |

### Direção criativa
O visual deve aproveitar a energia das referências com hero forte, foto em destaque e blocos modulares, mas traduzido para uma narrativa de qualidade de software. A sensação geral precisa ser de confiança técnica: menos autopromoção genérica e mais clareza de processo, organização e precisão.

### Conceito escolhido
**Precision Editorial**

Um layout dark-first com presença editorial, recortes geométricos assimétricos, notas flutuantes de contexto e uma grade visual que lembra organização de fluxo e leitura de sinal. A diferenciação principal não está em efeitos chamativos, e sim em composição: hero com retrato em moldura autoral, faixa de provas rápidas, blocos de especialidade com pesos diferentes e cases em trilha vertical.

---

## Paleta de Cores

> Base extraída e adaptada de `referencias/stileGuide.jpg`.

### Cores Primárias
| Token | HEX | HSL | Uso |
|-------|-----|-----|-----|
| `color-primary` | `#00E4A1` | `hsl(162 100% 45%)` | CTAs, links, destaques |
| `color-primary-dark` | `#00D495` | `hsl(162 100% 42%)` | Hover e active |
| `color-primary-light` | `#B8FFE7` | `hsl(153 100% 86%)` | Fundos leves, badges, detalhes |

### Cores Neutras
| Token | HEX | HSL | Uso |
|-------|-----|-----|-----|
| `color-bg` | `#252644` | `hsl(239 29% 21%)` | Fundo principal |
| `color-surface` | `#34355B` | `hsl(239 26% 28%)` | Cards e painéis |
| `color-surface-2` | `#2C2D4E` | `hsl(239 28% 24%)` | Blocos alternados |
| `color-border` | `#464875` | `hsl(238 24% 37%)` | Bordas e divisores |
| `color-text` | `#F5F7FA` | `hsl(216 29% 97%)` | Texto principal |
| `color-text-muted` | `#C6CBDA` | `hsl(223 21% 82%)` | Texto secundário |

### Cores de Estado
| Token | HEX | Uso |
|-------|-----|-----|
| `color-success` | `#00D495` | Confirmações e feedback positivo |
| `color-warning` | `#FFBE00` | Alertas e atenção |
| `color-error` | `#FF316D` | Erros e falhas |
| `color-info` | `#63A4FF` | Informações neutras |

---

## Tipografia

### Fontes
| Papel | Família | Pesos | Origem |
|-------|---------|-------|--------|
| Heading | Maven Pro | 600, 700, 800 | Google Fonts |
| Body | Maven Pro | 400, 500, 600 | Google Fonts |
| Mono | JetBrains Mono | 400, 500 | Google Fonts |

### Escala Tipográfica
| Token | Tamanho | Line-height | Uso |
|-------|---------|-------------|-----|
| `text-xs` | 12px | 1.4 | Labels, captions |
| `text-sm` | 14px | 1.5 | Texto auxiliar |
| `text-base` | 16px | 1.6 | Texto principal |
| `text-lg` | 18px | 1.5 | Subtítulos |
| `text-xl` | 20px | 1.4 | Títulos de bloco |
| `text-2xl` | 24px | 1.3 | Títulos de seção |
| `text-3xl` | 32px | 1.15 | Headline secundária |
| `text-4xl` | 44px | 1.05 | Hero mobile |
| `text-5xl` | 64px | 1.0 | Hero desktop |

### Regras tipográficas
- Headline principal com peso 800 e palavras-chave em `color-primary`.
- Corpo de texto curto e escaneável, evitando blocos extensos.
- Uso pontual de mono para nomes de ferramentas, métricas ou tags técnicas.

---

## Espaçamento e Grid

### Escala de Espaçamento (base 4px)
| Token | Valor | Uso comum |
|-------|-------|-----------|
| `space-1` | 4px | microajustes |
| `space-2` | 8px | gaps pequenos |
| `space-3` | 12px | ícone + label |
| `space-4` | 16px | padding padrão |
| `space-6` | 24px | cards e blocos |
| `space-8` | 32px | espaço entre agrupamentos |
| `space-12` | 48px | seções menores |
| `space-16` | 64px | seções principais |
| `space-24` | 96px | respiro do hero desktop |

### Grid e Breakpoints
| Breakpoint | Largura | Colunas | Padding lateral |
|------------|---------|---------|-----------------|
| Mobile | < 768px | 1 | 20px |
| Tablet | 768–1024px | 2 | 24px |
| Desktop | > 1024px | 12 | 32px |
| Max-width | — | — | 1200px |

### Regras de composição
- Alternar seções com variações sutis de superfície para manter ritmo visual.
- Hero com composição assimétrica: texto à esquerda, foto em destaque à direita no desktop.
- Usar uma única moldura visual forte para a foto principal, evitando avatar solto em card genérico.
- Inserir notas contextuais flutuantes em pontos estratégicos para reforçar repertório técnico.
- Evitar grade homogênea; especialidades devem ter variação de altura/largura.

---

## Border Radius
| Token | Valor | Uso |
|-------|-------|-----|
| `radius-sm` | 8px | badges, chips |
| `radius-md` | 14px | botões, inputs |
| `radius-lg` | 20px | cards |
| `radius-xl` | 28px | blocos hero e painéis especiais |
| `radius-full` | 9999px | avatares, tags arredondadas |

---

## Sombras
| Token | Valor CSS | Uso |
|-------|-----------|-----|
| `shadow-sm` | `0 8px 20px rgba(0, 0, 0, 0.12)` | hover leve |
| `shadow-md` | `0 18px 40px rgba(0, 0, 0, 0.18)` | cards |
| `shadow-lg` | `0 28px 60px rgba(0, 0, 0, 0.24)` | hero e painéis de destaque |

---

## Componentes

### Botões
| Variante | Uso | Estilo visual |
|----------|-----|---------------|
| Primary | CTA principal | fundo `color-primary`, texto escuro, peso 700 |
| Secondary | CTA secundário | borda `color-primary`, texto claro, fundo transparente |
| Ghost | Links e ações discretas | sem borda, fundo transparente, hover com leve surface |
| Tag | ferramentas e especialidades | pill com fundo translúcido e borda suave |

### Estados dos Botões
| Estado | Comportamento |
|--------|--------------|
| Default | contraste alto e leitura imediata |
| Hover | leve elevação + escurecimento/clareamento controlado |
| Focus | outline visível em `color-primary-light` |
| Active | redução sutil de escala ou sombra |
| Loading | spinner simples, sem deslocamento de layout |
| Disabled | opacidade reduzida e sem sombra |

### Inputs
| Campo | Valor |
|-------|-------|
| Border-radius | `radius-md` |
| Padding interno | `12px 16px` |
| Estado de foco | borda `color-primary` + glow externo suave |
| Estado de erro | borda `color-error` + texto auxiliar |
| Placeholder | `color-text-muted` |

### Cards
| Campo | Valor |
|-------|-------|
| Background | `color-surface` |
| Border-radius | `radius-lg` |
| Padding | `space-6` |
| Sombra | `shadow-md` |
| Hover | leve translateY negativo + brilho sutil de borda |

### Bloco de especialidade QA
Cada card de especialidade deve combinar um ícone simples, um título curto e uma descrição de uma frase. Exemplos: testes funcionais, automação, API testing, regressão, qualidade de processo, documentação e evidência.

### Moldura de retrato
- Fundo em superfície escura com brilho verde sutil
- Recorte assimétrico com raio mais aberto em um dos cantos
- Halo circular ou linha técnica ao redor como detalhe de profundidade
- Suportar notas flutuantes sobrepostas sem perder legibilidade

### Faixa de prova rápida
- Bloco horizontal com 3 mensagens curtas
- Cada item deve misturar rótulo curto e evidência objetiva
- Separação por linhas finas, sem virar grade de KPI genérica

### Card de projeto/case
Cada item deve conter:
- título do projeto ou contexto
- desafio resumido
- atuação em QA
- resultado ou ganho percebido
- stack ou ferramentas usadas

### Card de case implementado no MVP
- Estrutura em trilha vertical com índice numérico
- Destaque do título acima
- Corpo enxuto com contexto e atuação
- Lista curta de ganhos ou sinais de valor

---

## Estados de Interface

| Estado | Componente visual | Mensagem padrão |
|--------|------------------|-----------------|
| Loading | Skeleton discreto em superfície escura | — |
| Empty | Bloco com ícone e texto orientativo | "Conteúdo em atualização" |
| Error | Banner compacto com `color-error` | "Não foi possível carregar este conteúdo." |
| Success | Feedback pontual em `color-success` | "Ação concluída com sucesso." |
| Offline | Banner de aviso | "Você está sem conexão no momento." |

---

## Iconografia

| Campo | Valor |
|-------|-------|
| **Biblioteca** | Lucide Icons |
| **Tamanho inline** | 18px a 20px |
| **Tamanho standalone** | 24px a 28px |
| **Estilo** | outline consistente |
| **Regra** | usar uma única família visual e evitar ícones excessivamente decorativos |

---

## Navegação

| Plataforma | Padrão |
|------------|--------|
| Mobile | menu compacto com CTA persistente |
| Desktop | top nav com âncoras para seções |
| Breadcrumb | não usar no MVP |
| Tabs | usar apenas se houver categorização de projetos no futuro |

### Itens sugeridos de navegação
- Início
- Sobre
- Especialidades
- Projetos
- Ferramentas
- Contato

---

## Animações e Transições

| Tipo | Duração | Easing | Uso |
|------|---------|--------|-----|
| Hover | 160ms | ease-out | botões, cards, links |
| Reveal | 280ms | ease-out | entrada sutil de seções |
| Fade | 220ms | ease | overlays, menus |
| Float decorativo | 4s | ease-in-out | formas de fundo discretas |

### Regras de movimento
- Movimento sempre complementar à leitura, nunca protagonista.
- Evitar animações contínuas em excesso.
- Respeitar `prefers-reduced-motion`.

---

## Acessibilidade

- Contraste mínimo AA para textos e elementos interativos.
- Foco visível em links, botões e controles.
- Toda imagem com texto alternativo contextual.
- Hero deve permanecer legível mesmo sem imagem.
- CTAs não podem depender apenas de cor para serem percebidos.

---

## Wireframe Textual

### 1. Hero
- topo com logo/nome e menu
- selo curto como "QA Analyst"
- headline forte com seu nome e proposta de valor
- parágrafo curto explicando como você ajuda times a entregar software com qualidade
- dois CTAs: contato principal e ver projetos
- foto profissional em destaque, preferencialmente `foto2.png` para o hero por enquadramento mais natural de meio corpo
- moldura de retrato assimétrica com notas flutuantes "Atual" e "Foco"

### 2. Sobre
- bloco em duas colunas no desktop
- mini resumo profissional
- diferenciais de trabalho: visão analítica, documentação, colaboração com dev e produto, prevenção de falhas
- pequenos indicadores de confiança como anos de experiência, número de projetos ou frentes atendidas, se disponíveis
- foto secundária `foto1.png` em painel lateral com blocos de contexto

### 3. Especialidades
- grid de 4 cards com variação de altura e largura
- cada card com uma competência de QA
- foco em legibilidade e variação intencional de layout

### 4. Projetos / Cases
- trilha vertical de cards com mini narrativa
- idealmente 2 a 4 cases
- opção futura de expandir para detalhe interno

### 5. Ferramentas e Stack
- blocos em formato tag/cloud
- separar por categorias: gestão, automação, API, observabilidade, documentação

### 6. CTA final
- frase objetiva de fechamento
- links de contato
- reforço visual do botão principal

---

## Mapa de Seções

```text
Header
└─ Navegação por âncoras

Main
├─ Hero
├─ Sobre
├─ Especialidades QA
├─ Projetos / Cases
├─ Ferramentas e Stack
└─ CTA Final / Contato

Footer
└─ Links profissionais
```

---

## Referências Visuais Utilizadas

| Referência | URL | O que inspirou |
|------------|-----|----------------|
| `referencias/stileGuide.jpg` | local | paleta, tipografia Maven Pro e contraste geral |
| `referencias/13e53ed0470902a4e63049ce80403f41.jpg` | local | hero forte com foto em destaque e seções em cards |
| `referencias/9f42e46ad5ae9d863738748dd2b3c1e8.jpg` | local | estrutura simples e legibilidade do topo |
| `referencias/548abf66155c7d0f69a5635cceb35994.jpg` | local | presença fotográfica com halo e camadas escuras sofisticadas |
| `referencias/9540b7f221e1c346b93c6f1a600382fa.jpg` | local | ritmo visual com padrão de fundo e hero de alta presença |
