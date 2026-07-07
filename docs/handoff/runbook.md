# Runbook — Guia de Operação do Sistema

> **Produzido por:** DEPLOY (deploy-handoff.md)
> **Quando:** Antes do primeiro deploy em produção
> **Atualizado:** A cada mudança de infraestrutura ou processo

---

## Identificação do Projeto

| Campo | Valor |
|-------|-------|
| **Projeto** | _[nome do projeto]_ |
| **Versão** | _[versão atual]_ |
| **Última atualização** | AAAA-MM-DD |
| **Responsável técnico** | _[nome/contato]_ |

---

## Visão Geral da Arquitetura

_[Descreva em 2-3 parágrafos a arquitetura do sistema: frontend, backend, banco, serviços externos]_

```
[Diagrama simplificado se necessário]
Frontend → API → Banco de Dados
                → Serviço externo A
                → Serviço externo B
```

---

## Pré-requisitos para Operar

### Acesso necessário
- [ ] Acesso ao repositório Git
- [ ] Credenciais do ambiente (desenvolvimento, homologação, produção)
- [ ] Acesso ao provedor de cloud/hosting
- [ ] Acesso ao painel de monitoramento
- [ ] Acesso ao banco de dados (somente produção — restrito)

### Ferramentas necessárias
| Ferramenta | Versão mínima | Instalação |
|------------|---------------|------------|
| _[ex: Node.js]_ | _[ex: 20.x]_ | _[ex: nodejs.org]_ |
| _[ex: Docker]_ | _[ex: 24.x]_ | _[ex: docker.com]_ |
| _[ex: Git]_ | _[ex: 2.x]_ | _[ex: git-scm.com]_ |

---

## Setup Local (Desenvolvimento)

```bash
# 1. Clonar o repositório
git clone [url-do-repositorio]
cd [nome-do-projeto]

# 2. Copiar e configurar variáveis de ambiente
cp .env.example .env
# Preencha as variáveis no .env

# 3. Instalar dependências
# [comando conforme stack — ex: npm install / composer install]

# 4. Preparar banco de dados
# [ex: npx prisma migrate dev / php artisan migrate]

# 5. Iniciar a aplicação
# [ex: npm run dev / php artisan serve]
```

---

## Deploy — Passo a Passo

### Pré-deploy
1. Verificar `docs/checklists/pre-deploy.md` — todos os itens marcados
2. Confirmar Security Score >= 85 em `docs/revisoes/security-report.md`
3. Notificar stakeholders sobre o deploy

### Processo de Deploy

```bash
# [Adapte conforme sua stack e provedor]

# 1. Atualizar branch principal
git checkout main
git pull origin main

# 2. Build de produção
# [ex: npm run build]

# 3. Aplicar migrations (se houver)
# [ex: npx prisma migrate deploy]

# 4. Deploy na plataforma
# [ex: vercel deploy --prod / railway up / docker compose up -d]
```

### Verificação Pós-Deploy (Smoke Tests)
1. Acessar a URL de produção
2. Testar login/autenticação
3. Executar o fluxo principal
4. Verificar logs nos primeiros 10 minutos

---

## Rollback

### Quando executar rollback
- Erros críticos nos logs após o deploy
- Fluxos principais quebrados (smoke tests falhando)
- Degradação significativa de performance
- Decisão do responsável técnico ou stakeholder

### Processo de Rollback

```bash
# [Adapte conforme a plataforma]

# Opção 1: Reverter para versão anterior (Git tag)
git checkout tags/v[versao-anterior]
# [redeployar]

# Opção 2: Rollback pela plataforma
# [comandos específicos do provedor]
```

### Tempo estimado de rollback
_[ex: 5-10 minutos para reverter e redeployar]_

---

## Variáveis de Ambiente

> Para os valores reais, consulte o gerenciador de segredos do projeto (nunca no repositório).

| Variável | Ambiente | Descrição |
|----------|----------|-----------|
| _[VARIAVEL_1]_ | Todos | _[descrição]_ |
| _[VARIAVEL_2]_ | Produção | _[descrição]_ |
| _[VARIAVEL_3]_ | Dev/Staging | _[descrição]_ |

---

## Monitoramento e Alertas

| O que monitorar | Ferramenta | Limite de alerta |
|----------------|------------|------------------|
| Uptime | _[ex: UptimeRobot]_ | < 99.5% |
| Erros de API | _[ex: Sentry]_ | > 5 erros/minuto |
| Performance | _[ex: Datadog]_ | P95 > 2s |
| Banco de dados | _[ex: logs da plataforma]_ | Conexões esgotadas |

---

## Contatos de Emergência

| Situação | Contato | Canal |
|----------|---------|-------|
| Incidente de segurança | _[nome]_ | _[email/slack]_ |
| Infraestrutura fora do ar | _[nome]_ | _[email/slack]_ |
| Banco de dados | _[nome]_ | _[email/slack]_ |

---

## Serviços Externos e Dependências

| Serviço | Finalidade | URL de Status | Plano |
|---------|-----------|---------------|-------|
| _[ex: Stripe]_ | Pagamentos | _[status page]_ | _[plano]_ |
| _[ex: SendGrid]_ | Emails transacionais | _[status page]_ | _[plano]_ |

---

## Histórico de Deploys

| Versão | Data | Ambiente | Notas | Responsável |
|--------|------|----------|-------|-------------|
| — | — | — | Criação do runbook | — |
