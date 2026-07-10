# Checklist de pré-deploy — Release candidate 1

> **Responsável:** DEPLOY + SENTINEL
> **Ambiente:** Produção
> **Data:** 2026-07-10
> **Security Score:** 93/100

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
- [ ] Commits aprovados enviados para `origin/main`.
- [ ] Deploy automático concluído.
- [ ] Headers defensivos confirmados em produção.

## Itens importantes

- [x] Runbook e procedimento de rollback documentados.
- [x] Tempo estimado de rollback definido.
- [x] Banco, migrations e backup marcados como não aplicáveis.
- [x] Variáveis de ambiente marcadas como não aplicáveis no MVP.
- [ ] Uptime externo configurado — melhoria não bloqueante.

## Smoke test pós-deploy

- [ ] Home e assets retornam HTTP 200.
- [ ] Menu desktop e mobile funcionam.
- [ ] `Escape` fecha o menu e devolve o foco.
- [ ] Âncoras e CTAs funcionam.
- [ ] Currículo responde como PDF.
- [ ] Console e rede não apresentam erro.
- [ ] CSP e demais headers estão presentes.
- [ ] Conteúdo publicado corresponde ao commit aprovado.

## Resultado

**Aguardando deploy e smoke test.** ORION encerra o gate somente após marcar
todos os itens pós-deploy aplicáveis.
