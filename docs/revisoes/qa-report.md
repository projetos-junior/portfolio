# Relatório de QA — Landing page

> **Produzido por:** VALE
> **Versão:** 1.0
> **Status:** Aprovado em produção
> **Data:** 2026-07-10

## Sumário executivo

| Campo | Valor |
|---|---|
| Sprint | Sprint 2 — Hardening, evidências e publicação |
| Escopo | Landing page estática, desktop e mobile |
| Cenários executados | 9 |
| Passou | 9 |
| Falhou | 0 |
| Bloqueado | 0 |
| Status geral | Aprovado em produção |

O baseline encontrou LCP de 22,5 segundos, imagens com 3,84 MiB, ausência de
favicon e divergência entre texto visível e nome acessível da marca. Após as
correções, o Lighthouse local registrou performance 98, acessibilidade 100,
boas práticas 100 e SEO 100. O LCP caiu para 2,52 segundos em uma execução
móvel simulada. A fonte foi hospedada localmente para remover a última cadeia
externa bloqueante. A medição final em produção confirmou a meta do PRD.

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

**Aprovado em produção.** HTTP, headers, console, assets e correspondência com
o commit foram validados em 2026-07-10.
