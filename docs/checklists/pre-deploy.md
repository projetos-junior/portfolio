# Checklist de Pré-Deploy

> **Responsável:** DEPLOY (deploy-handoff.md) + SENTINEL (sentinel-security-audit-agent.md)
> **Quando:** Obrigatório antes de qualquer deploy em qualquer ambiente
> **Regra:** Nenhum item 🔴 pode estar pendente para prosseguir

---

## Identificação

| Campo | Valor |
|-------|-------|
| **Versão** | _[ex: 1.0.0]_ |
| **Ambiente** | Homologação / Produção |
| **Data** | AAAA-MM-DD |
| **Responsável** | |
| **Security Score** | _[do último SENTINEL]_ |

---

## 🔴 Bloqueantes (obrigatórios — não prosseguir sem eles)

### Segurança
- [ ] Security Score >= 85 (produção) ou >= 70 (homologação)
- [ ] Nenhuma vulnerabilidade crítica ou alta aberta
- [ ] Nenhum segredo no código ou repositório
- [ ] `.env` não versionado

### Documentação
- [ ] `docs/PRD.md` aprovado
- [ ] `docs/andamento.md` atualizado com estado real
- [ ] `docs/revisoes/qa-report.md` com status "Aprovado"
- [ ] `docs/revisoes/security-report.md` com score registrado
- [ ] `.env.example` com todas as variáveis necessárias

### Código
- [ ] Branch principal atualizada sem conflitos
- [ ] Nenhum `console.log` / `dd()` / `dump()` em produção
- [ ] Todos os testes passando
- [ ] Build de produção gerado sem erros

---

## 🟡 Importantes (resolver antes se possível)

### Infraestrutura
- [ ] Variáveis de ambiente configuradas no ambiente destino
- [ ] Banco de dados com migrations aplicadas
- [ ] Backup recente confirmado
- [ ] Monitoramento ativo (logs, alertas, uptime)

### Rollback
- [ ] Plano de rollback documentado em `docs/handoff/runbook.md`
- [ ] Procedimento de rollback testado
- [ ] Tempo estimado de rollback definido

### Comunicação
- [ ] Stakeholders notificados sobre o deploy
- [ ] Janela de deploy definida (fora do horário de pico, se possível)

---

## 🟢 Pós-Deploy (smoke tests)

Execute após o deploy e marque:

- [ ] Login/autenticação funcionando
- [ ] Fluxo principal do produto executado com sucesso
- [ ] APIs respondendo (verificar rotas críticas)
- [ ] Banco de dados acessível e íntegro
- [ ] Logs sem erros críticos
- [ ] Monitoramento recebendo dados normalmente

---

## Resultado Final

- [ ] ✅ **Deploy aprovado e concluído** — registrar em `docs/andamento.md`
- [ ] ❌ **Deploy revertido** — registrar motivo em `docs/andamento.md` e acionar ORION

---

## Histórico de Deploys

| Versão | Data | Ambiente | Score | Resultado | Responsável |
|--------|------|----------|-------|-----------|-------------|
| — | — | — | — | — | — |
