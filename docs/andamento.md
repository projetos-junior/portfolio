# Andamento do Projeto

> **Quem atualiza:** Todos os agentes ao concluir uma task
> **Frequência:** Ao final de cada task ou sessão de trabalho
> **Referência:** Ver modelo em `agents-optional/modelo-andamento.md`

---

## Status Geral

| Campo | Valor |
|-------|-------|
| **Fase atual** | Implementação inicial + refinamento visual |
| **Sprint atual** | Sprint 1 — Estratégia e base visual |
| **Progresso geral** | 82% |
| **Última atualização** | 2026-07-07 |
| **Responsável** | Codex com VERA/LUMI/CANVAS |

---

## Tasks Concluídas

> Liste em ordem cronológica. Inclua o commit semântico associado.

| ID | Descrição | Camada | Agente | Commit | Data |
|----|-----------|--------|--------|--------|------|
| T01 | Definição inicial do PRD do portfólio pessoal de QA | Docs | VERA | _pendente_ | 2026-07-06 |
| T02 | Definição inicial do design system e wireframe textual | Docs | LUMI/CANVAS | _pendente_ | 2026-07-06 |
| T04 | Consolidação da copy inicial da home com base no currículo | Docs | VERA | _pendente_ | 2026-07-06 |
| T05 | Estruturação inicial da landing page e organização de assets | Frontend | FORGE | commits locais aplicados | 2026-07-06 |
| T06 | Ajustes de CTA, contatos, hero, header e composição da seção sobre | Frontend | FORGE/LUMI | commits locais aplicados | 2026-07-07 |
| T07 | Consolidação textual inicial dos cases com narrativa mais forte e fiel ao currículo | Conteúdo | VERA | commits locais aplicados | 2026-07-07 |

---

## Tasks em Andamento

| ID | Descrição | Camada | Agente | Iniciado em |
|----|-----------|--------|--------|-------------|
| T03 | Implementação e refinamento da landing page estática em HTML, CSS e JavaScript | Frontend | FORGE/LUMI | 2026-07-06 |

---

## Bloqueios

| ID | Bloqueio | Impacto | Quem Resolve | Status |
|----|---------|---------|--------------|--------|
| B01 | Ainda faltam métricas publicáveis para enriquecer os cases | Médio | Usuário | Aberto |
| B02 | Os cases já têm narrativa consolidada, mas ainda podem ganhar força com métricas ou resultados publicáveis | Médio | Usuário + VERA | Aberto |

---

## Próximos Passos

1. Validar se há métricas, resultados ou exemplos adicionais que possam ser publicados nos cases.
2. Validar responsividade, acessibilidade e consistência visual da home.
3. Atualizar `docs/sprint-atual.md` com o avanço das tasks de conteúdo e frontend.
4. Preparar publicação inicial do portfólio.

---

## Riscos Ativos

| ID | Risco | Probabilidade | Impacto | Mitigação |
|----|-------|---------------|---------|-----------|
| R01 | Falta de conteúdo concreto para os projetos reduzir a força do portfólio | Média | Alto | Estruturar cases com problema, ação e resultado |
| R02 | Excesso de inspiração visual desalinhar com posicionamento de QA | Média | Médio | Priorizar clareza técnica e narrativa objetiva |

---

## Decisões Tomadas Nesta Sessão

| Decisão | Motivo | Impacto |
|---------|--------|---------|
| Usar o style guide como base oficial da paleta e tipografia | Garantir consistência visual | Acelera design e implementação |
| Priorizar one-page no MVP | Reduz escopo e acelera entrega | Facilita primeira publicação |
| Usar foto profissional no hero | Reforça confiança e memorabilidade | Melhora presença pessoal |
| Usar HTML5 semântico, CSS3 moderno e JavaScript ES6+ no frontend | Manter stack simples, portátil e fácil de evoluir | Reduz complexidade inicial |
| Usar o currículo enviado como fonte factual inicial do conteúdo | Aumentar aderência do portfólio à trajetória real | Reduz suposições no planejamento |
| Criar a copy inicial da home antes da implementação | Acelerar frontend com narrativa já definida | Reduz retrabalho na montagem da interface |
| Definir o e-mail final de contato antes da implementação | Evitar placeholder no frontend | Fecha o bloco principal de contato |
| Adotar a direção visual "Precision Editorial" no layout | Fugir do visual genérico de portfólio e reforçar assinatura visual | Aumenta memorabilidade do projeto |

---

## Histórico de Sprints

| Sprint | Objetivo | Status | Período |
|--------|----------|--------|---------|
| Sprint 1 | Definir PRD, design system e wireframe base | Em andamento | 2026-07-06 a 2026-07-12 |
