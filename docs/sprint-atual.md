# Sprint atual

> **Gerenciada por:** ORION
> **Atualizada em:** 2026-07-15

## Identificação

| Campo | Valor |
|---|---|
| Nome | Sprint 3 — Sincronização documental e manutenção |
| Objetivo | Alinhar a documentação ao estado publicado e preparar, sem executar, uma possível modularização do frontend |
| Status | Em andamento |
| Início | 2026-07-15 |
| Fim previsto | 2026-07-17 |
| Responsável | ORION |

## Escopo autorizado — Fase A

- Sincronizar os critérios de aceite do PRD com as evidências aprovadas pelo QA.
- Atualizar o status do design system e remover referências visuais ou tipográficas superadas.
- Corrigir a spec `as built` para refletir a árvore real de assets e os três cases publicados.
- Manter código, layout, conteúdo público e configuração de produção inalterados.

## Escopo condicional — Fase B

A modularização foi autorizada pelo usuário em 2026-07-15 exclusivamente para o
CSS. O HTML permanecerá único e a execução seguirá obrigatoriamente esta ordem:

```text
FORGE → VALE → SHIELD
```

- **FORGE:** criar ou atualizar a spec técnica e modularizar sem introduzir nova tecnologia desnecessária.
- **VALE:** executar regressão funcional, responsiva, por teclado e de performance.
- **SHIELD:** executar Frontend Security Audit após a aprovação do QA.

## Critérios de sucesso

- [ ] PRD, DESIGN, spec, QA e andamento descrevem o mesmo estado do produto.
- [ ] Nenhuma informação factual ou métrica é adicionada sem evidência.
- [ ] Nenhum código de frontend é alterado durante a Fase A.
- [ ] A decisão sobre modularização fica registrada como aprovada ou adiada.
- [ ] Se a Fase B for aprovada, FORGE, VALE e SHIELD concluem suas etapas em sequência.
- [ ] Git termina limpo, com commits semânticos e focados por camada.

## Tasks

| ID | Fase | Task | Agente | Camada | Status |
|---|---|---|---|---|---|
| T16 | A | Sincronizar critérios de aceite do PRD com o QA aprovado | VERA | Documentação | Pendente |
| T17 | A | Atualizar estado do design system e referências superadas | LUMI | Documentação | Pendente |
| T18 | A | Corrigir a spec técnica conforme a implementação `as built` | FORGE | Documentação | Pendente |
| T19 | A | Revisar consistência final e registrar decisão de manutenção | ORION | Documentação | Pendente |
| T20 | B | Especificar e implementar modularização do CSS | FORGE | Frontend | Em andamento — autorizada em 2026-07-15 |
| T21 | B | Executar regressão completa da modularização | VALE | QA | Bloqueada por T20 |
| T22 | B | Executar revisão de segurança do frontend | SHIELD | Segurança | Bloqueada por T21 |

## Riscos e respostas

| Risco | Impacto | Resposta |
|---|---|---|
| Documentação continuar divergente do código | Médio | Concluir T16–T19 antes de qualquer manutenção técnica |
| Modularização alterar comportamento ou performance | Alto | Exigir spec, regressão VALE e revisão SHIELD |
| Introdução de processo de build desnecessário | Médio | Priorizar a pilha atual e exigir aprovação para nova tecnologia |
| Mistura de documentação e frontend no mesmo commit | Médio | Separar commits por camada e responsabilidade |

## Critério de encerramento

A Sprint 3 pode ser encerrada após T16–T19 se a modularização for adiada. Se a
Fase B for autorizada, o encerramento exige também T20–T22 concluídas e aprovadas.

## Sprint anterior

A Sprint 2 — Hardening, evidências e publicação foi encerrada em 2026-07-10 com
QA, auditoria de segurança, deploy e smoke test de produção aprovados.
