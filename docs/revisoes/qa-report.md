# Relatório de QA — Landing page

> **Produzido por:** VALE
> **Versão:** 1.1
> **Status:** Modularização CSS aprovada para deploy
> **Data:** 2026-07-15

## Sumário executivo

| Campo | Valor |
|---|---|
| Sprint | Sprint 2 — Hardening, evidências e publicação |
| Escopo | Landing page estática e regressão da modularização CSS |
| Cenários executados | 15 |
| Passou | 15 |
| Falhou | 0 |
| Bloqueado | 0 |
| Status geral | Aprovado para deploy |

O baseline encontrou LCP de 22,5 segundos, imagens com 3,84 MiB, ausência de
favicon e divergência entre texto visível e nome acessível da marca. Após as
correções, o Lighthouse local registrou performance 98, acessibilidade 100,
boas práticas 100 e SEO 100. O LCP caiu para 2,52 segundos em uma execução
móvel simulada. A fonte foi hospedada localmente para remover a última cadeia
externa bloqueante. A medição final em produção confirmou a meta do PRD.

## Regressão da modularização CSS — 2026-07-15

| Verificação | Resultado |
|---|---|
| Paridade das regras antes e depois da divisão | Passou — conteúdo CSS preservado |
| Desktop 1440 × 1000 | Passou — hero e navegação sem regressão visual |
| Mobile 390 × 844 | Passou — conteúdo legível e sem corte essencial |
| Menu mobile e tecla `Escape` | Passou — fecha e devolve foco ao botão |
| Console e rede | Passou — 0 erros, 0 avisos e todos os assets CSS com 200/304 |
| Lighthouse local | 99 performance, 100 acessibilidade, 100 boas práticas e 100 SEO |

- LCP local: 1.969 ms.
- TBT: 0 ms.
- CLS: 0.
- Treze folhas CSS carregadas na mesma origem, sem dependências novas.

### Cenários Gherkin incrementais

```gherkin
Cenário: Carregar os módulos CSS no fluxo principal
  Dado que o visitante acessa a landing page
  Quando o navegador carrega os estilos da mesma origem
  Então todas as folhas CSS devem responder sem erro
  E a página deve preservar hierarquia, conteúdo e layout

Cenário: Navegar pelo menu em viewport móvel
  Dado que a página está em 390 por 844 pixels
  Quando o visitante abre o menu e pressiona Escape
  Então o menu deve fechar
  E o foco deve retornar ao botão Menu

Cenário: Manter a experiência quando movimento é reduzido
  Dado que o visitante prefere movimento reduzido
  Quando a página é exibida
  Então o conteúdo deve permanecer visível sem depender de animações
```

## Critérios de aceite validados

| ID | Critério | Status | Evidência |
|---|---|---|---|
| F01 | Hero legível com nome, proposta, foto e CTA | Passou | Snapshot desktop e mobile |
| F02 | Trajetória e forma de trabalho compreensíveis | Passou | Árvore acessível |
| F03 | Especialidades principais presentes | Passou | Quatro cards no DOM |
| F04 | Cases apresentam contexto, atuação e valor | Passou | Três cases no DOM |
| F05 | Ferramentas organizadas por contexto | Passou | Seis grupos no DOM |
| F06 | Canais de contato disponíveis | Passou | E-mail, WhatsApp, LinkedIn e GitHub |
| F07 | Responsividade e acessibilidade base | Passou | 390 x 844 e Lighthouse 100 |
| F08 | Navegação por âncoras e menu mobile | Passou | Menu abre, fecha e responde a `Escape` |
| F09 | Currículo disponível | Passou | PDF local responde com HTTP 200 |

## Cenários executados

1. Carregar a home em viewport desktop.
2. Carregar a home em viewport móvel de 390 x 844.
3. Abrir e fechar o menu mobile.
4. Fechar o menu com `Escape` e devolver o foco ao botão.
5. Validar a ordem semântica e os títulos da página.
6. Validar textos alternativos das imagens.
7. Validar âncoras internas e ausência de IDs duplicados.
8. Validar carregamento dos assets e ausência de erro no console.
9. Executar Lighthouse nas quatro categorias do gate.

## Issues encontradas e tratadas

| ID | Severidade | Descrição | Status |
|---|---|---|---|
| QA01 | Alta | LCP de 22,5 segundos por imagens PNG grandes | Corrigida |
| QA02 | Baixa | Requisição de favicon retornava 404 | Corrigida |
| QA03 | Baixa | Nome acessível da marca não incluía o texto visível | Corrigida |
| QA04 | Baixa | Menu mobile não fechava com `Escape` | Corrigida |

## Evidências técnicas

- Navegador: Chromium controlado por Playwright CLI.
- Console após correções: 0 erros e 0 avisos.
- Lighthouse em produção: 98 / 100 / 100 / 100.
- LCP em produção: 1.360 ms.
- FCP em produção: 1.060 ms.
- TBT: 0 ms.
- CLS: 0,0596.
- Assets principais convertidos para WebP: aproximadamente 73 KiB no total.

## Decisão final

**Aprovado para deploy.** A produção anterior permanece aprovada; a versão com
CSS modularizado requer publicação e smoke test para nova confirmação em produção.
