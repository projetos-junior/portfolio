# Revisão de UX/UI — Landing page

> **Produzido por:** LUMI
> **Versão:** 1.0
> **Status:** Aprovada
> **Data:** 2026-07-10

## Sumário executivo

A implementação segue a direção Precision Editorial definida no design system.
A hierarquia conduz da proposta de valor para provas de atuação, cases,
ferramentas e contato. O fluxo funciona em desktop e mobile sem depender de
hover e preserva a leitura quando JavaScript não está disponível.

## Jornada validada

```text
Hero → sinais de atuação → sobre → especialidades → cases → ferramentas → contato
```

| Área | Status | Observação |
|---|---|---|
| Hero | Aprovada | Proposta, foto e CTA aparecem na primeira etapa |
| Navegação | Aprovada | Âncoras no desktop e menu compacto no mobile |
| Sobre | Aprovada | Narrativa e diferenciais possuem leitura escaneável |
| Especialidades | Aprovada | Quatro frentes com hierarquia consistente |
| Cases | Aprovada | Contexto, atuação e valor seguem sequência previsível |
| Ferramentas | Aprovada | Agrupamento por uso reduz leitura de lista genérica |
| Contato | Aprovada | Ações diretas e identificáveis |

## Acessibilidade e movimento

- O conteúdo usa landmarks, títulos hierárquicos e textos alternativos.
- O `skip-link` permite saltar para o conteúdo principal.
- O foco é visível e o menu mobile responde a teclado e `Escape`.
- A implementação respeita `prefers-reduced-motion`.
- O Lighthouse registrou acessibilidade 100 após as correções.

## Pontos futuros

- Validar a narrativa com recrutadores reais.
- Adicionar métricas aos cases somente quando forem publicáveis e verificáveis.
- Fonte Maven Pro hospedada localmente e confirmada na implementação.
