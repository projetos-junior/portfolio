# Checklist de pré-deploy — Release candidate 2

> **Responsável:** DEPLOY + VALE + SHIELD
> **Ambiente:** Produção
> **Data:** 2026-07-15
> **Security Score:** 95/100

## Bloqueantes

- [x] Security Score igual ou superior a 85.
- [x] Nenhuma vulnerabilidade crítica ou alta aberta.
- [x] Nenhum segredo encontrado no código ou histórico.
- [x] `.env` ignorado e `.env.example` documentado.
- [x] PRD e spec disponíveis.
- [x] Andamento reflete o estado real.
- [x] QA aprovado para deploy.
- [x] Relatório de segurança concluído.
- [x] Branch local sem conflitos.
- [x] Nenhum `console.log` ou log sensível no frontend.
- [x] Validação local sem erro de console ou rede.
- [x] Commits aprovados enviados para `origin/main`.
- [x] Deploy automático concluído.
- [x] Headers defensivos confirmados na nova release em produção.

## Itens importantes

- [x] Runbook e procedimento de rollback documentados.
- [x] Tempo estimado de rollback definido.
- [x] Banco, migrations e backup marcados como não aplicáveis.
- [x] Variáveis de ambiente marcadas como não aplicáveis no MVP.
- [ ] Uptime externo configurado — melhoria não bloqueante.

## Smoke test pós-deploy

- [x] Home e assets retornam HTTP 200.
- [x] Menu desktop e mobile funcionam.
- [x] `Escape` fecha o menu e devolve o foco.
- [x] Âncoras e CTAs funcionam.
- [x] Currículo responde como PDF.
- [x] Console e rede não apresentam erro.
- [x] CSP e demais headers estão presentes.
- [x] Conteúdo publicado corresponde ao commit aprovado.

## Resultado

**Deploy aprovado e concluído.** A release candidate 2 foi publicada e passou
no smoke test de produção em 2026-07-15.
