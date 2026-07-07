# Relatório de Segurança

> **Produzido por:** SHIELD (durante desenvolvimento) / SENTINEL (auditoria formal)
> **Quando:** SHIELD — durante cada sprint; SENTINEL — antes de homologação e produção
> **Versão:** 0.1 | **Status:** A preencher

---

## Identificação da Auditoria

| Campo | Valor |
|-------|-------|
| **Tipo** | Quick Scan / Full Audit / Pre-Deploy Audit / API Audit / Frontend Audit |
| **Agente** | SHIELD / SENTINEL |
| **Data** | AAAA-MM-DD |
| **Escopo** | _[o que foi analisado: feature, módulo, sprint, projeto completo]_ |
| **Security Score** | _[0–100]_ |
| **Decisão de Deploy** | 🔴 Bloqueado (<70) / 🟡 Homologação apenas (70–84) / 🟢 Liberado para produção (≥85) |

---

## Sumário Executivo

_[SHIELD/SENTINEL resume os achados principais em 2-3 parágrafos]_

---

## Security Score por Categoria

| Categoria | Score (0–10) | Observação |
|-----------|-------------|------------|
| Autenticação / Autorização | /10 | |
| APIs | /10 | |
| Frontend | /10 | |
| Infraestrutura | /10 | |
| Dependências | /10 | |
| Segredos | /10 | |
| Upload | /10 | N/A se não houver upload |
| Logs | /10 | |
| Configuração | /10 | |
| Multi-tenant | /10 | N/A se não aplicável |
| **TOTAL** | **/100** | |

---

## Vulnerabilidades Encontradas

### 🔴 Críticas (bloquear imediatamente)

| ID | Descrição | Evidência | Impacto | Recomendação |
|----|-----------|-----------|---------|--------------|
| SEC01 | | | | |

### 🟠 Altas (corrigir antes do deploy)

| ID | Descrição | Evidência | Impacto | Recomendação |
|----|-----------|-----------|---------|--------------|
| SEC10 | | | | |

### 🟡 Médias (corrigir na próxima sprint)

| ID | Descrição | Recomendação |
|----|-----------|--------------|
| SEC20 | | |

### 🔵 Baixas / Informativas

| ID | Descrição | Observação |
|----|-----------|------------|
| SEC30 | | |

---

## Checklist de Segurança

### Autenticação
- [ ] JWT com tempo de expiração adequado
- [ ] Refresh token implementado corretamente
- [ ] Senhas com hash (bcrypt ou argon2)
- [ ] Rate limiting no endpoint de login
- [ ] Logout invalida token no servidor

### Autorização
- [ ] Controle de acesso horizontal (usuário só acessa seus próprios dados)
- [ ] Controle de acesso vertical (roles e permissões corretas)
- [ ] Endpoints admin protegidos

### APIs
- [ ] CORS configurado corretamente (não wildcard em produção)
- [ ] Rate limiting nas rotas públicas
- [ ] Swagger/OpenAPI protegido ou desabilitado em produção
- [ ] Validação de input em todos os endpoints
- [ ] Sem SQL Injection possível
- [ ] Proteção CSRF implementada

### Segredos
- [ ] Nenhum segredo hardcoded no código
- [ ] `.env` não está no repositório
- [ ] `.env.example` documentado

### Frontend
- [ ] CSP (Content Security Policy) configurado
- [ ] Sem dados sensíveis no LocalStorage
- [ ] XSS protegido (sanitização de outputs)
- [ ] HTTPS obrigatório

### Infraestrutura
- [ ] Docker sem containers privilegiados desnecessários
- [ ] Portas desnecessárias fechadas
- [ ] Variáveis de ambiente configuradas no ambiente (não no código)

---

## Recomendações de Arquitetura de Segurança

_[SHIELD/SENTINEL lista melhorias estruturais de médio/longo prazo]_

---

## Decisão Final

- [ ] 🔴 **Score < 70** — Deploy BLOQUEADO. Retornar para FORGE e corrigir issues críticas.
- [ ] 🟡 **Score 70–84** — Deploy permitido apenas em **homologação**. Não vai para produção.
- [ ] 🟢 **Score ≥ 85** — Deploy **liberado para produção**. DEPLOY pode prosseguir.

---

## Histórico de Auditorias

| Versão | Data | Tipo | Score | Agente |
|--------|------|------|-------|--------|
| 0.1 | — | — | — | — |
