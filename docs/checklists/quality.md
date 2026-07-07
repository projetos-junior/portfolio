# Quality Guidelines — Padrões de Qualidade

> **Referência para:** FORGE (ao implementar) e VALE (ao validar)
> **Princípios:** Clean Code, SOLID, separação de camadas, segurança by design

---

## Princípios Gerais

1. **Legibilidade primeiro** — código é lido muito mais do que escrito
2. **Uma responsabilidade por componente** — classes, funções e arquivos focados
3. **Não duplique lógica** — DRY (Don't Repeat Yourself)
4. **Fail fast** — validar entradas o quanto antes, retornar erros cedo
5. **Sem surpresas** — funções fazem o que o nome diz, nada além
6. **Teste o comportamento, não a implementação** — testes orientados a resultado

---

## Checklist de Código (FORGE aplica, VALE valida)

### Estrutura e Organização
- [ ] Arquivos na pasta correta conforme `project-structure.md`
- [ ] Nenhuma mistura de camadas no mesmo arquivo
- [ ] Funções com menos de 30 linhas (idealmente)
- [ ] Arquivos com menos de 250-300 linhas (idealmente)
- [ ] Nomes de variáveis e funções descritivos

### Segurança
- [ ] Nenhum segredo hardcoded
- [ ] Inputs validados em todas as entradas de API
- [ ] Queries SQL com prepared statements / ORM
- [ ] Outputs sanitizados antes de exibir no frontend
- [ ] Sem dados sensíveis em logs

### Backend
- [ ] Regra de negócio nos services/actions, não nos controllers/rotas
- [ ] Controllers finos (recebem, delegam, respondem)
- [ ] Erros tratados de forma centralizada
- [ ] HTTP status codes corretos (200, 201, 400, 401, 403, 404, 422, 500)
- [ ] Respostas de erro não expõem detalhes internos do sistema

### Frontend
- [ ] Componentes pequenos e focados
- [ ] Estado reutilizável em composables/hooks
- [ ] Acesso à API apenas por services/adapters
- [ ] Loading, error e empty states implementados
- [ ] Responsividade testada (mobile → desktop)

### Versionamento
- [ ] Commits semânticos e atômicos
- [ ] Um tipo de mudança por commit
- [ ] `.gitignore` e `.env.example` atualizados
- [ ] Nenhum arquivo sensível versionado

---

## Padrões de Nomenclatura

| Contexto | Padrão | Exemplo |
|----------|--------|---------|
| Variáveis e funções | camelCase | `getUserById` |
| Classes e tipos | PascalCase | `UserService` |
| Constantes | UPPER_SNAKE_CASE | `MAX_LOGIN_ATTEMPTS` |
| Arquivos de componente | PascalCase | `UserCard.vue` |
| Arquivos de serviço | kebab-case | `user-service.ts` |
| Pastas | kebab-case | `user-management/` |
| Endpoints de API | kebab-case | `/api/user-profiles` |

---

## Tratamento de Erros

### Backend
```
// ✅ Correto: mensagem de erro genérica para o cliente
{ "error": "Credenciais inválidas" }

// ❌ Errado: expõe detalhes internos
{ "error": "SELECT * FROM users WHERE email = 'x' failed: connection refused" }
```

### Frontend
- Sempre exibir feedback ao usuário (nunca falhar silenciosamente)
- Mensagens de erro em linguagem do usuário, não técnica
- Logs de erro detalhados apenas no console/servidor (nunca visíveis ao usuário)

---

## Comentários no Código

- **Comentar o "por quê"**, não o "o quê" (o código já diz o quê)
- Funções complexas merecem JSDoc / docstring
- Remover TODO e FIXME antes de concluir a task (ou registrar como issue)
- Código comentado deve ser removido, não mantido "por segurança"

---

## Performance Básica

- Evitar N+1 queries (usar eager loading quando necessário)
- Paginar listas grandes (nunca retornar tudo de uma vez)
- Índices de banco nos campos de busca frequente
- Lazy loading de componentes pesados no frontend
- Imagens otimizadas (tamanho e formato adequados)

---

## Acessibilidade (Frontend)

- Todos os inputs com `<label>` associado
- Textos alternativos em imagens e ícones (`alt`, `aria-label`)
- Foco visível em todos os elementos interativos
- Contraste mínimo AA (4.5:1 para texto)
- Navegação por teclado funcional nos fluxos principais
