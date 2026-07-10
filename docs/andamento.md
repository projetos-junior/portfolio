# Andamento do projeto

> **Atualizado por:** ORION
> **Última atualização:** 2026-07-10

## Status geral

| Campo | Valor |
|---|---|
| Fase atual | MVP publicado e validado em produção |
| Sprint atual | Sprint 2 — Hardening, evidências e publicação |
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

## Última entrega

| ID | Descrição | Agente | Critério de conclusão |
|---|---|---|---|
| T14 | Sincronizar Vercel e executar smoke test | DEPLOY/VALE | Concluída em 2026-07-10 |

## Backlog não bloqueante

| ID | Descrição | Responsável |
|---|---|---|
| B01 | Avaliar divisão futura do HTML com processo de build mínimo | ORION/FORGE |

## Métricas do gate local

| Métrica | Baseline | Após correções |
|---|---:|---:|
| Lighthouse performance | 71 | 98 em produção |
| Acessibilidade | 100 | 100 |
| Boas práticas | 96 | 100 |
| SEO | 100 | 100 |
| LCP | 22.509 ms | 1.360 ms em produção |
| Console | 1 erro | 0 erros |

## Decisões

- Manter o MVP como monólito modular estático, sem framework ou backend.
- Manter o HTML como documento único para preservar conteúdo sem JavaScript.
- Dividir o HTML somente quando existir um build mínimo que não complique o MVP.
- Usar WebP para entrega e preservar os PNGs como fontes originais.
- Hospedar Maven Pro na mesma origem para reduzir latência e dependência externa.
- Bloquear o encerramento do gate até confirmar headers e paridade do deploy.
- Publicar os cases sem métricas, usando apenas evidências qualitativas reais.
