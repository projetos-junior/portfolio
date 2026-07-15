# Runbook — Portfólio QA

> **Responsável:** DEPLOY
> **Versão:** 1.1
> **Atualizado:** 2026-07-15

## Arquitetura

O produto é um monólito modular frontend-first composto por HTML, CSS,
JavaScript e assets estáticos. Não existem backend, banco de dados,
autenticação, jobs ou variáveis de ambiente no MVP.

```text
Navegador → Vercel CDN → frontend/index.html e assets
                     └→ links externos de contato
```

## URLs e repositório

| Recurso | Valor |
|---|---|
| Produção | `https://edson-junior-qa.vercel.app/` |
| Repositório | `https://github.com/projetos-junior/portfolio` |
| Branch de produção | `main` |
| Diretório publicado | `frontend` |

## Release atual

| Campo | Valor |
|---|---|
| Release | Candidate 2 — modularização CSS e correção de overflow |
| Commit funcional publicado | `a2d058e` |
| Data | 2026-07-15 |
| Smoke test | Aprovado em produção |

## Execução local

```powershell
python -m http.server 4173 --directory frontend
```

Acesse `http://127.0.0.1:4173/`. O MVP não exige instalação, build ou `.env`.

## Deploy

1. Confirme que `main` está limpa e sincronizada.
2. Verifique QA, segurança e checklist de pré-deploy.
3. Envie os commits aprovados para `origin/main`.
4. Aguarde o deploy automático da Vercel.
5. Execute o smoke test na URL de produção.
6. Registre commit, data e resultado em `docs/andamento.md`.

## Smoke test

1. Confirme HTTP 200 na home, CSS, JavaScript, WebP e PDF.
2. Confirme CSP, HSTS, `nosniff`, proteção contra framing e referrer policy.
3. Abra a home em desktop e mobile.
4. Teste menu, `Escape`, âncoras, WhatsApp, LinkedIn e currículo.
5. Confirme ausência de erro no console e na rede.
6. Compare um marcador do HTML publicado com o commit aprovado.

## Rollback

Use o painel da Vercel para promover o deployment anterior ou reverta o commit
de release com `git revert`, envie para `main` e aguarde um novo deploy.

Tempo estimado: 5 a 10 minutos. Execute novo smoke test após o rollback.

## Variáveis de ambiente

Nenhuma variável é necessária no MVP. `.env.example` registra essa decisão.
Qualquer variável futura deve ser documentada antes do uso e configurada no
ambiente da Vercel sem versionar valores reais.

## Monitoramento

O MVP depende dos logs e analytics operacionais da Vercel. Recomenda-se
adicionar monitoramento de uptime após a primeira release estável.
