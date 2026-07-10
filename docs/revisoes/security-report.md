# Relatório de segurança — Frontend estático

> **Produzido por:** SENTINEL
> **Versão:** 1.0
> **Status:** Aprovado para deploy e verificação em produção
> **Data:** 2026-07-10

## Identificação

| Campo | Valor |
|---|---|
| Tipo | Frontend e pre-deploy audit |
| Escopo | HTML, CSS, JavaScript, assets, histórico Git e Vercel |
| Security Score | 95/100 |
| Decisão | Liberado para produção com smoke test dos headers |

## Sumário executivo

O frontend não processa entrada do usuário, não possui backend, autenticação,
cookies ou armazenamento local. A busca não encontrou segredos, sinks de DOM
XSS, execução dinâmica, mensagens entre janelas ou tokens no histórico Git.

O ambiente publicado já usa HTTPS e HSTS. A auditoria encontrou ausência dos
demais headers defensivos na versão anterior. `frontend/vercel.json` agora
define CSP, proteção contra framing, `nosniff`, política de referrer e política
de permissões. A presença desses headers deve ser confirmada após o deploy.

## Score por categoria

| Categoria | Score | Observação |
|---|---:|---|
| Frontend | 10/10 | Sem sinks perigosos ou dados sensíveis |
| Segredos | 10/10 | Nenhum segredo encontrado; `.env` ignorado |
| Dependências | 10/10 | Sem dependência JavaScript em runtime |
| Transporte | 10/10 | HTTPS e HSTS ativos |
| Headers | 10/10 | Confirmados na resposta de produção |
| Links externos | 9/10 | HTTPS e `noreferrer`; dependem de terceiros |
| Dados e privacidade | 10/10 | Não coleta dados do visitante |
| Configuração | 10/10 | Vercel declarativa e versionada |
| Operação | 8/10 | Rollback ainda não foi ensaiado |
| Rastreabilidade | 8/10 | Primeiro gate formal do projeto |
| **Total** | **95/100** | |

## Achados

### SEC-01 — Headers defensivos ausentes

- **Severidade:** Média.
- **Local:** resposta da URL de produção antes deste gate.
- **Evidência:** apenas `Strict-Transport-Security` estava presente.
- **Impacto:** menor defesa em profundidade contra XSS, framing e MIME sniffing.
- **Correção:** headers declarados em `frontend/vercel.json`.
- **Validação pendente:** confirmar a resposta HTTP após a publicação.

### SEC-02 — Dependência externa de fonte

- **Severidade:** Baixa.
- **Local:** `frontend/index.html`.
- **Evidência:** no baseline, CSS e fonte eram carregados de Google Fonts.
- **Impacto:** disponibilidade, privacidade de metadados e cadeia de suprimentos.
- **Correção:** Maven Pro passou a ser servida pela mesma origem.
- **Status:** corrigida.

## Controles confirmados

- Nenhum segredo ou `.env` versionado.
- Nenhum `innerHTML`, `eval`, `document.write` ou `javascript:`.
- Nenhum `localStorage`, `sessionStorage` ou `postMessage`.
- Nenhum script de terceiro.
- Links externos usam HTTPS e `noreferrer` quando abrem nova aba.
- CSP não usa `unsafe-inline` ou `unsafe-eval`.
- Currículo e imagens são arquivos estáticos da mesma origem.

## Decisão final

**Deploy liberado.** ORION deve bloquear o encerramento do gate se os headers
configurados não estiverem presentes na resposta de produção.
