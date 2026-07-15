# Andamento do projeto

> **Atualizado por:** ORION
> **Última atualização:** 2026-07-15

## Status geral

| Campo | Valor |
|---|---|
| Fase atual | Release CSS publicada e validada em produção |
| Sprint atual | Sprint 3 — Sincronização documental e manutenção |
| Progresso geral | 100% do MVP |
| Gate | Aprovado em produção |
| Responsável | ORION |

## Entregas concluídas

| ID | Entrega | Agente | Evidência |
|---|---|---|---|
| T01–T08 | PRD, design, conteúdo, MVP e validação visual inicial | Equipe | Histórico Git |
| T09 | Spec técnica da landing page | FORGE | `docs/specs/landing-page.md` |
| T10 | QA automatizado e exploratório | VALE | `docs/revisoes/qa-report.md` |
| T11 | Otimização de imagens e menu mobile | FORGE | Lighthouse e commits |
| T12 | Auditoria e headers defensivos | SENTINEL | `security-report.md` |
| T13 | Runbook e documentação de release | DEPLOY/ORION | `docs/handoff/runbook.md` |
| T14 | Sincronização da Vercel e smoke test | DEPLOY/VALE | Produção aprovada em 2026-07-10 |
| T15 | Evidências qualitativas dos cases | VERA/usuário | PRD v1.6 |
| T16–T19 | Sincronização documental pós-MVP | VERA/LUMI/FORGE/ORION | PRD, DESIGN, spec e andamento |
| T20 | Modularização do CSS por responsabilidade | FORGE | Commit de frontend e spec v1.1 |
| T21 | Regressão da modularização | VALE | `docs/revisoes/qa-report.md` v1.1 |
| T22 | Revisão incremental de segurança | SHIELD | `docs/revisoes/security-report.md` v1.1 |
| T23 | Correção da rolagem horizontal | FORGE | `frontend/assets/styles/base.css` |
| T24 | Regressão visual e responsiva | VALE | `docs/revisoes/qa-report.md` v1.2 |
| T25 | Revisão de segurança da correção | SHIELD | `docs/revisoes/security-report.md` v1.2 |
| T26 | Publicação e smoke test da release CSS | DEPLOY/VALE | Produção aprovada em 2026-07-15 |

## Última entrega

| ID | Descrição | Agente | Critério de conclusão |
|---|---|---|---|
| T26 | Publicar e executar smoke test da release CSS | DEPLOY/VALE | Concluída em produção em 2026-07-15 |

## Trabalho atual

| ID | Descrição | Agente | Status |
|---|---|---|---|
| T16–T19 | Sincronizar PRD, design, spec e andamento com o estado publicado | ORION e agentes documentais | Concluído |
| T20–T22 | Modularizar o CSS, validar e revisar segurança do frontend | FORGE → VALE → SHIELD | Concluído e publicado |
| T23–T25 | Corrigir overflow horizontal e revalidar a release | FORGE → VALE → SHIELD | Concluído e publicado |
| T26 | Publicar release e executar smoke test | DEPLOY/VALE | Concluído em produção |

## Manutenção documental

| Data | Descrição | Evidência |
|---|---|---|
| 2026-07-15 | Briefing inicial regularizado retrospectivamente com base no PRD v1.6 e autorização do usuário | `docs/briefing.md` |
| 2026-07-15 | Sprint 3 concluída com documentação sincronizada, CSS modularizado e gates VALE/SHIELD aprovados | `docs/sprint-atual.md` |
| 2026-07-15 | Overflow horizontal corrigido e release revalidada antes da publicação | Relatórios QA e segurança v1.2 |
| 2026-07-15 | Release candidate 2 publicada e aprovada em produção | Checklist de pré-deploy e runbook |

## Backlog não bloqueante

| ID | Descrição | Responsável |
|---|---|---|
| B01 | Avaliar divisão futura do HTML com processo de build mínimo | Adiado; HTML permanece único por decisão da Sprint 3 |

## Métricas do gate

| Métrica | Baseline | Produção atual | Release local |
|---|---:|---:|---:|
| Lighthouse performance | 71 | 100 | 99 |
| Acessibilidade | 100 | 100 | 100 |
| Boas práticas | 96 | 100 | 100 |
| SEO | 100 | 100 | 100 |
| LCP | 22.509 ms | 1.217 ms | 1.966 ms |
| Console | 1 erro | 0 erros | 0 erros |

## Decisões

- Manter o MVP como monólito modular estático, sem framework ou backend.
- Manter o HTML como documento único para preservar conteúdo sem JavaScript.
- Dividir o HTML somente quando existir um build mínimo que não complique o MVP.
- Usar WebP para entrega e preservar os PNGs como fontes originais.
- Hospedar Maven Pro na mesma origem para reduzir latência e dependência externa.
- Bloquear o encerramento do gate até confirmar headers e paridade do deploy.
- Publicar os cases sem métricas, usando apenas evidências qualitativas reais.
- Não iniciar a modularização do frontend sem autorização explícita do usuário.
- Se autorizada, executar a manutenção na ordem FORGE → VALE → SHIELD.
- Restringir a modularização autorizada ao CSS, mantendo o HTML único e sem processo de build.
- Modularização CSS aprovada localmente com Lighthouse 99/100/100/100 e Security Score mantido em 95/100.
- Overflow horizontal contido com `overflow-x: clip`, preservando full-bleed e header sticky.
