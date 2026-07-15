# Relatório de segurança — Frontend estático

> **Produzido por:** SENTINEL + SHIELD
> **Versão:** 1.2
> **Status:** SHIELD aprovou a release CSS e a correção de overflow para deploy
> **Data:** 2026-07-15

## Identificação

| Campo | Valor |
|---|---|
| Tipo | Frontend audit e revisão incremental SHIELD |
| Escopo | HTML, CSS modularizado, correção de overflow, assets, histórico Git e Vercel |
| Security Score | 95/100 |
| Decisão | Liberado para deploy; requer smoke test de produção |

## Sumário executivo

O frontend não processa entrada do usuário, não possui backend, autenticação,
cookies ou armazenamento local. A busca não encontrou segredos, sinks de DOM
XSS, execução dinâmica, mensagens entre janelas ou tokens no histórico Git.

O ambiente publicado já usa HTTPS e HSTS. A auditoria encontrou ausência dos
demais headers defensivos na versão anterior. `vercel.json` agora
define CSP, proteção contra framing, `nosniff`, política de referrer e política
de permissões. Esses headers foram confirmados na resposta de produção.

## Revisão incremental SHIELD — 2026-07-15

- A alteração reorganiza somente CSS e referências `<link>` da mesma origem.
- A CSP existente mantém `style-src 'self'` e não exige ampliação de permissão.
- Nenhum `@import`, URL externa, estilo inline ou dependência foi introduzido.
- Nenhum segredo, sink de DOM XSS ou mecanismo de armazenamento foi encontrado.
- Os seis links com `target="_blank"` mantêm `rel="noreferrer"`.
- Todas as treze folhas CSS responderam sem erro no teste local.

**Resultado incremental:** aprovado sem novo achado. O Security Score permanece
95/100; a confirmação de headers da nova release deve ocorrer após o deploy.

## Revisão incremental SHIELD — overflow horizontal

- A correção adiciona apenas `overflow-x: clip` à fundação global do `body`.
- Nenhuma URL, dependência, permissão de CSP ou lógica JavaScript foi alterada.
- Não houve introdução de estilo inline, `@import`, segredo ou entrada de usuário.
- A contenção evita deslocamento horizontal sem ampliar a superfície de ataque.

**Resultado:** aprovado sem novo achado; Security Score mantido em 95/100.

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
- **Local:** resposta da URL de produção no baseline deste gate.
- **Evidência:** apenas `Strict-Transport-Security` estava presente.
- **Impacto:** menor defesa em profundidade contra XSS, framing e MIME sniffing.
- **Correção:** headers declarados em `vercel.json`.
- **Status:** corrigida e confirmada em produção.

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

**Deploy aprovado.** Não existem vulnerabilidades críticas ou altas abertas.
A produção atual permanece segura; a nova release exige smoke test dos headers.
