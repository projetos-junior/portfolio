# docs/specs/ — Especificações Técnicas

> **Quem cria:** FORGE (Desenvolvedor)
> **Quando:** Antes de escrever qualquer código para uma feature
> **Formato:** Um arquivo Markdown por feature ou módulo

---

## Como Usar Esta Pasta

1. FORGE cria um arquivo aqui **antes de implementar** qualquer feature
2. O nome do arquivo segue o padrão: `[nome-do-modulo].md` (ex: `auth.md`, `users.md`)
3. VALE e SHIELD consultam estes arquivos para validação e revisão de segurança
4. ORION verifica se a spec existe antes de liberar a implementação

---

## Estrutura de Cada Spec

Cada arquivo de spec deve conter:

```markdown
# Spec Técnica — [Nome da Feature]

## Contexto
Referência ao requisito do PRD (ID da funcionalidade).

## Arquitetura de Arquivos
- Arquivos a criar
- Arquivos a editar
- Arquivos a remover

## Modelagem de Dados
Tabelas, campos, tipos, índices e relacionamentos.

## API / Endpoints
Rotas, métodos HTTP, parâmetros, respostas e erros.

## Regras de Negócio
Validações, fluxos e exceções desta feature.

## Riscos Identificados
Dependências, breaking changes, impacto em outras features.

## Critério de Conclusão
Como verificar que a implementação está completa e correta.
```

---

## Arquivos desta Pasta

| Arquivo | Feature | Agente | Status |
|---------|---------|--------|--------|
| _(vazio — aguardando FORGE)_ | | | |

---

> 💡 **Regra:** Nenhum código é escrito sem a spec correspondente aqui.
