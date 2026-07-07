# Sprint Atual

> **Quem gerencia:** ORION
> **Atualizado por:** ORION + todos os agentes ao concluir tasks
> **Referência:** `agents-optional/template-sprint-tasks.md`

---

## Identificação

| Campo | Valor |
|-------|-------|
| **Nome** | Sprint 1 — Estratégia e base visual |
| **Objetivo** | Definir posicionamento, estrutura do MVP e direção visual do portfólio de QA |
| **Status** | Em andamento |
| **Início** | 2026-07-06 |
| **Fim previsto** | 2026-07-12 |
| **Agente responsável** | ORION |

---

## Objetivo da Sprint

Ao final desta sprint, o projeto terá PRD inicial, design system definido, wireframe textual das seções principais, home implementada e refinada visualmente para validação final.

---

## Critérios de Sucesso

- [x] PRD inicial preenchido com escopo, MVP e priorização.
- [x] Design system inicial preenchido com paleta, tipografia e componentes.
- [x] Estrutura de seções e wireframe textual definidos.
- [x] Conteúdo base do currículo incorporado ao planejamento.
- [x] Copy inicial da home estruturada.
- [x] E-mail final de contato definido.
- [ ] Conteúdo real de projetos e contatos consolidado.
- [x] Implementação da home iniciada.

---

## Tasks da Sprint

### ✅ Concluídas

| ID | Título | Camada | Agente | Commit |
|----|--------|--------|--------|--------|
| T01 | Criar PRD inicial do portfólio QA | Docs | VERA | _pendente_ |
| T02 | Criar design system e wireframe textual | Docs | LUMI/CANVAS | _pendente_ |
| T03 | Iniciar a implementação da landing page | Frontend | FORGE/LUMI | _pendente_ |

### 🔄 Em Andamento

| ID | Título | Camada | Agente | Progresso |
|----|--------|--------|--------|-----------|
| T04 | Implementar hero, sobre, especialidades e navegação | Frontend | FORGE/LUMI | 85% |

### 📋 Planejadas

| ID | Título | Camada | Agente | Dependências |
|----|--------|--------|--------|--------------|
| T05 | Refinar projetos, stack, responsividade e CTA final | Frontend | FORGE | T04 |
| T06 | Validar responsividade, acessibilidade e QA visual | QA | VALE | T05 |
| T07 | Preparar publicação inicial | Deploy | ORION | T06 |

---

## Template de Task

> Copie e preencha para cada nova task:

```markdown
### T[XX] — [Título da Task]

| Campo | Valor |
|-------|-------|
| **ID** | T[XX] |
| **Camada** | Backend / Frontend / Integração / Docs / QA |
| **Agente** | FORGE / LUMI / VERA / VALE / SHIELD |
| **Dependências** | T[YY] ou nenhuma |
| **Status** | Planejado / Em andamento / Bloqueado / Concluído |

**Descrição:** O que deve ser feito e por quê.

**Critério de Conclusão:**
- [ ] [Critério verificável 1]
- [ ] [Critério verificável 2]

**Commit sugerido:** `tipo(escopo): descrição`
```

---

## Riscos desta Sprint

| ID | Risco | Probabilidade | Impacto | Plano |
|----|-------|---------------|---------|-------|
| R01 | Falta de conteúdo definitivo para cases | Média | Alto | Validar conteúdo real antes da implementação final |
| R02 | Desvio entre referências visuais e posicionamento de QA | Média | Médio | Revisar copy e hierarquia visual durante implementação |

---

## Dependências Externas

- Consolidação do conteúdo real dos projetos/cases do MVP
- Validação de métricas ou resultados que possam ser publicados
- Revisão visual final do layout implementado

---

## Notas e Decisões

| Decisão | Motivo | Data |
|---------|--------|------|
| MVP será uma one-page responsiva | Melhor equilíbrio entre escopo e valor | 2026-07-06 |
| A paleta seguirá o style guide fornecido | Coerência visual e rapidez de execução | 2026-07-06 |
| `foto2.png` será a referência preferencial para o hero | Melhor enquadramento para composição principal | 2026-07-06 |
| Frontend inicial usará HTML5 semântico, CSS3 moderno e JavaScript ES6+ | Simplificar a implementação inicial sem perder qualidade | 2026-07-06 |
| O currículo anexado será a fonte inicial de conteúdo validado | Melhorar consistência entre apresentação e trajetória real | 2026-07-06 |
| A home será implementada com uma copy inicial já estruturada no PRD | Facilitar execução visual e alinhamento de conteúdo | 2026-07-06 |
| O e-mail final do portfólio será `edson.junior.qa@gmail.com` | Fechar o contato principal antes da implementação | 2026-07-06 |
| A direção visual executada seguirá o conceito "Precision Editorial" | Tornar o layout moderno, dinâmico e memorável sem exagero visual | 2026-07-06 |
| O CTA principal da home abrirá conversa direta no WhatsApp | Reduzir atrito de contato na primeira dobra | 2026-07-06 |
| A navegação superior seguirá em barra sticky destacada, sem competir com o hero | Melhorar orientação e presença visual do topo | 2026-07-07 |
