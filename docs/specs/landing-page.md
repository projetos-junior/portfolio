# Spec técnica — Landing page do portfólio

> **Agente:** FORGE  
> **Versão:** 1.0  
> **Status:** Implementada — documentação `as built`  
> **Requisitos:** F01 a F09 do `docs/PRD.md`

## Contexto

A landing page apresenta o perfil profissional de Edson Junior em uma página
estática. A implementação prioriza leitura rápida, navegação por âncoras,
responsividade, acessibilidade básica e contato direto, sem backend, banco de
dados, autenticação ou coleta de dados do visitante.

## Arquitetura de arquivos

```text
frontend/
├─ index.html
└─ assets/
   ├─ docs/cv-edson-junior-qa.pdf
   ├─ images/
   │  ├─ foto1.png
   │  └─ foto2.png
   ├─ js/main.js
   └─ styles/
      ├─ tokens.css
      ├─ base.css
      └─ sections.css
```

- `frontend/index.html` contém a estrutura semântica, o conteúdo e os links.
- `frontend/assets/styles/tokens.css` define os tokens do design system.
- `frontend/assets/styles/base.css` contém reset, tipografia e componentes base.
- `frontend/assets/styles/sections.css` contém layout e estilos das seções.
- `frontend/assets/js/main.js` controla menu, navegação ativa, reveal e movimento.
- `frontend/assets/` armazena apenas arquivos públicos servidos pelo site.

## Módulos funcionais

| Módulo | Requisito | Implementação |
|---|---|---|
| Hero | F01 | Nome, posicionamento, foto, WhatsApp e acesso aos cases |
| Sobre | F02 | Trajetória, forma de trabalho e diferenciais |
| Especialidades | F03 | Testes funcionais, API, rastreabilidade, bots e URA |
| Cases | F04 | Quatro narrativas baseadas na experiência profissional |
| Ferramentas | F05 | Stack agrupada por contexto de uso |
| Contato | F06 | E-mail, WhatsApp, LinkedIn, GitHub e currículo |
| Layout adaptativo | F07 | Breakpoints mobile, tablet e desktop |
| Navegação | F08 | Âncoras, menu mobile, seção ativa e `skip-link` |
| Currículo | F09 | PDF público com atributo `download` |

## Fluxo principal

1. O navegador carrega `frontend/index.html` e os assets estáticos.
2. O visitante identifica nome, atuação e CTA no hero.
3. A navegação por âncoras leva às seções do conteúdo.
4. `main.js` atualiza o menu ativo e aplica movimento apenas quando permitido.
5. O visitante inicia contato em serviço externo ou baixa o currículo.

## Modelagem de dados

Não se aplica. Todo o conteúdo é estático e versionado no HTML. O site não
armazena informações de visitantes e não usa cookies ou armazenamento local.

## API e integrações

Não existem APIs próprias. A interface usa somente links externos:

- WhatsApp por `https://wa.me/`;
- LinkedIn e GitHub por HTTPS;
- e-mail por `mailto:`;
- Maven Pro em WOFF2 servida pela mesma origem;
- currículo e imagens servidos pela mesma origem.

Falhas em serviços externos não devem impedir a leitura do conteúdo principal.

## Regras de negócio

- O conteúdo profissional deve permanecer fiel ao currículo e ao PRD.
- O CTA principal deve abrir diretamente o WhatsApp em até duas interações.
- Links que abrem nova aba devem impedir acesso ao contexto da página de origem.
- A navegação e os CTAs devem funcionar por teclado.
- A experiência deve respeitar `prefers-reduced-motion`.
- Nenhum segredo ou dado privado pode existir nos arquivos públicos.

## Requisitos não funcionais

| Área | Critério |
|---|---|
| Performance | LCP menor que 2,5 segundos em condição móvel representativa |
| Acessibilidade | Sem erro crítico automatizado e fluxo principal por teclado |
| Segurança | HTTPS, sem segredo público e links externos protegidos |
| Compatibilidade | Versões atuais de Chrome, Edge e Firefox |
| Manutenção | Estilos separados por responsabilidade e JavaScript sem dependências |

## Riscos identificados

| Risco | Impacto | Mitigação |
|---|---|---|
| Imagens de origem grandes | Degrada LCP e consumo móvel | Gerar formatos e dimensões otimizados |
| Arquivo de fonte indisponível | Altera a tipografia | Manter fallback do sistema |
| Conteúdo sem métricas publicáveis | Reduz força dos cases | Validar métricas com o responsável |
| Links externos mudarem | Quebra ações de conversão | Verificar antes de cada release |
| Deploy não acompanhar `main` | Produção fica divergente | Comparar commit e smoke test no deploy |

## Critério de conclusão

- [x] F01 a F09 possuem implementação identificável.
- [x] O site funciona sem backend e sem JavaScript para leitura do conteúdo.
- [x] QA funcional, responsivo e por teclado possui evidências registradas.
- [x] Lighthouse possui baseline e resultado após correções.
- [x] Auditoria de segurança possui score e decisão de release.
- [x] A versão publicada corresponde ao commit aprovado.

## Verificação local

Sirva a pasta `frontend` em `http://localhost:4173` e valide:

1. carregamento de todas as seções e imagens;
2. menu desktop e mobile;
3. navegação por teclado e foco visível;
4. respeito à preferência de movimento reduzido;
5. abertura dos contatos e download do currículo;
6. ausência de erros no console e na rede.
