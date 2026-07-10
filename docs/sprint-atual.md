# Sprint atual

> **Gerenciada por:** ORION
> **Atualizada em:** 2026-07-10

## Identificação

| Campo | Valor |
|---|---|
| Nome | Sprint 2 — Hardening, evidências e publicação |
| Objetivo | Fechar o gate técnico e sincronizar a release na Vercel |
| Status | Concluída |
| Início | 2026-07-10 |
| Fim previsto | 2026-07-12 |
| Responsável | ORION |

## Critérios de sucesso

- [x] Spec técnica `as built` criada.
- [x] QA funcional, mobile e por teclado executado.
- [x] Lighthouse local registrado.
- [x] Imagens críticas otimizadas.
- [x] Auditoria de segurança concluída.
- [x] Headers defensivos configurados.
- [x] Runbook e `.env.example` atualizados.
- [x] Deploy corresponde ao commit aprovado.
- [x] Smoke test de produção aprovado.

## Tasks

| ID | Task | Agente | Status |
|---|---|---|---|
| T09 | Documentar spec da landing page | FORGE | Concluída |
| T10 | Executar QA e Lighthouse | VALE | Concluída |
| T11 | Otimizar mídia e interação mobile | FORGE | Concluída |
| T12 | Auditar e endurecer segurança | SENTINEL | Concluída |
| T13 | Atualizar relatórios e runbook | ORION/DEPLOY | Concluída |
| T14 | Publicar e executar smoke test | DEPLOY/VALE | Concluída |
| T15 | Definir abordagem de evidências dos cases | Usuário/VERA | Concluída — sem métricas |

## Riscos ativos

| Risco | Impacto | Resposta |
|---|---|---|
| Deploy automático não acompanhar `main` | Alto | Comparar produção com o commit |
| LCP variar acima de 2,5 s | Médio | Medir novamente na produção |
| Cases sem métricas publicáveis | Baixo | Usar evidências qualitativas reais |

## Sprint anterior

A Sprint 1 — Estratégia e base visual foi encerrada em 2026-07-10 com PRD,
design system, conteúdo e implementação do MVP concluídos.
