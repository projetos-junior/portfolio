# Andamento do projeto

> **Atualizado por:** ORION
> **Última atualização:** 2026-07-15

## Status geral

| Campo | Valor |
|---|---|
| Fase atual | Manutenção pós-MVP e sincronização documental |
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

## Última entrega

| ID | Descrição | Agente | Critério de conclusão |
|---|---|---|---|
| T14 | Sincronizar Vercel e executar smoke test | DEPLOY/VALE | Concluída em 2026-07-10 |

## Trabalho atual

| ID | Descrição | Agente | Status |
|---|---|---|---|
| T16–T19 | Sincronizar PRD, design, spec e andamento com o estado publicado | ORION e agentes documentais | Em andamento |
| T20–T22 | Modularizar o CSS, validar e revisar segurança do frontend | FORGE → VALE → SHIELD | Em andamento — CSS autorizado em 2026-07-15 |

## Manutenção documental

| Data | Descrição | Evidência |
|---|---|---|
| 2026-07-15 | Briefing inicial regularizado retrospectivamente com base no PRD v1.6 e autorização do usuário | `docs/briefing.md` |

## Backlog não bloqueante

| ID | Descrição | Responsável |
|---|---|---|
| B01 | Avaliar divisão futura do HTML com processo de build mínimo | Incorporado à decisão condicional da Sprint 3 |

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
- Não iniciar a modularização do frontend sem autorização explícita do usuário.
- Se autorizada, executar a manutenção na ordem FORGE → VALE → SHIELD.
- Restringir a modularização autorizada ao CSS, mantendo o HTML único e sem processo de build.
