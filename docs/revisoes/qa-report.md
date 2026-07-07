# Relatório de QA

> **Produzido por:** VALE
> **Quando:** Após validação de cada entrega ou sprint
> **Versão:** 0.1 | **Status:** A preencher

---

## Sumário Executivo

| Campo | Valor |
|-------|-------|
| **Sprint / Feature** | _[nome]_ |
| **Data da validação** | AAAA-MM-DD |
| **Total de cenários** | _[número]_ |
| **Passou** | _[número]_ |
| **Falhou** | _[número]_ |
| **Bloqueado** | _[número]_ |
| **Status geral** | ✅ Aprovado / ⚠️ Aprovado com ressalvas / ❌ Reprovado |

---

## Critérios de Aceite Validados

| ID | Critério (do PRD) | Status | Evidência |
|----|------------------|--------|-----------|
| CA01 | | ✅ / ❌ / ⚠️ | |
| CA02 | | | |

---

## Cenários de Teste (Gherkin)

### Cenário 1 — [Nome]
```gherkin
Dado que [contexto/pré-condição]
Quando [ação do usuário]
Então [resultado esperado]
```
**Status:** ✅ Passou / ❌ Falhou  
**Evidência:** _[print, log, descrição]_

---

### Cenário 2 — [Nome]
```gherkin
Dado que [contexto]
Quando [ação]
Então [resultado]
```
**Status:**  
**Evidência:**

---

## Issues Encontradas

| ID | Tipo | Descrição | Severidade | Status |
|----|------|-----------|------------|--------|
| QA01 | Bug | | Crítica / Alta / Média / Baixa | Aberto |
| QA02 | Melhoria | | | |

### Classificação de Severidade
- **Crítica:** Impede o uso — bloqueia o deploy
- **Alta:** Impacto significativo — deve ser corrigido antes do deploy
- **Média:** Reduz a qualidade — corrigir na próxima sprint
- **Baixa:** Melhoria desejável — priorizar conforme backlog

---

## Testes de Segurança Básicos

| Teste | Status | Observação |
|-------|--------|------------|
| SQL Injection nos inputs | ✅ / ❌ / N/A | |
| XSS em campos de texto | ✅ / ❌ / N/A | |
| Acesso sem autenticação | ✅ / ❌ / N/A | |
| Acesso sem autorização (IDOR) | ✅ / ❌ / N/A | |
| Dados sensíveis em logs | ✅ / ❌ / N/A | |

---

## Teste Exploratório

| Área | Duração | Issues Encontradas | Lições |
|------|---------|-------------------|--------|
| | | | |

---

## Recomendações

> O que VALE sugere antes do próximo passo:

- _[recomendação 1]_
- _[recomendação 2]_

---

## Decisão Final

- [ ] ✅ **Aprovado para próxima fase** — todos os critérios críticos atendidos
- [ ] ⚠️ **Aprovado com ressalvas** — issues não-críticas documentadas, prosseguir com cautela
- [ ] ❌ **Reprovado** — issues críticas encontradas, retornar para FORGE

---

## Histórico

| Versão | Data | Alterações |
|--------|------|------------|
| 0.1 | — | Criação do template |
