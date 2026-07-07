# PRD — Portfólio Pessoal de QA

> **Quem preenche:** VERA (Planner)
> **Quando:** Após briefing preenchido, antes de qualquer design ou desenvolvimento
> **Atualizado por:** VERA, ORION (decisões relevantes), LUMI (decisões de design)
> **Versão:** 1.5 | **Status:** Planejamento inicial concluído

---

## Histórico de Versões

| Versão | Data | Autor | Alterações |
|--------|------|-------|------------|
| 1.0 | 2026-07-06 | Codex + VERA | PRD inicial do portfólio pessoal de QA |
| 1.1 | 2026-07-06 | Codex + VERA | Ajuste da stack do frontend para HTML5, CSS3 e JavaScript ES6+ |
| 1.2 | 2026-07-06 | Codex + VERA | Incorporação do currículo como base factual do conteúdo |
| 1.3 | 2026-07-06 | Codex + VERA | Criação da copy inicial da home e estrutura de contatos |
| 1.4 | 2026-07-06 | Codex + VERA | Definição do e-mail final para contato no portfólio |
| 1.5 | 2026-07-06 | Codex + VERA | Definição do CTA principal para abertura direta no WhatsApp |

---

## 1. Resumo do Produto

O produto será um portfólio pessoal de página única, com possibilidade de expansão para páginas internas de estudos de caso. O objetivo é apresentar o perfil profissional de Edson José Gabriel Junior como Analista de Qualidade de Software, destacando experiência, competências, abordagem de qualidade, ferramentas utilizadas e projetos relevantes.

O portfólio deve comunicar confiança, clareza técnica e maturidade profissional. Em vez de parecer um currículo estático, ele deve funcionar como uma vitrine estratégica: demonstrar capacidade analítica, visão de processo, atenção a detalhes, domínio de testes manuais, testes de API, rastreabilidade em Jira/Xray e atuação em produtos com URA, bots e bots com IA, com foco em qualidade como acelerador de negócio.

---

## 2. Problema

### 2.1 Dor Atual
Profissionais de QA costumam depender apenas de currículo em PDF e perfil no LinkedIn para demonstrar sua senioridade. Isso limita a percepção de valor, especialmente quando é preciso explicar processos, resultados, ferramentas e impacto real do trabalho em qualidade.

### 2.2 Evidências
- Recrutadores costumam gastar poucos segundos na primeira triagem.
- Currículos tradicionais nem sempre mostram profundidade técnica ou raciocínio de qualidade.
- Portfólios visuais existentes costumam ser voltados a design ou desenvolvimento, não à narrativa profissional de QA.

### 2.3 Como o produto resolve
O portfólio organizará a experiência do profissional em uma narrativa visual direta, com proposta de valor clara, áreas de especialidade, cases resumidos, stack de ferramentas e CTAs de contato. A meta é facilitar a avaliação por recrutadores, líderes técnicos e potenciais contratantes.

---

## 3. Público-Alvo

### 3.1 Personas

**Persona 1: Recrutador(a) Tech**
- **Perfil:** 25 a 40 anos, RH ou Talent Acquisition, conhecimento técnico intermediário.
- **Objetivo principal:** validar rapidamente se o candidato tem clareza, maturidade e aderência à vaga.
- **Frustrações:** currículos genéricos, excesso de buzzwords, ausência de provas concretas.
- **Como usa o produto:** acessa o link do portfólio pelo currículo, LinkedIn ou mensagem direta.

**Persona 2: Líder de Engenharia ou QA Manager**
- **Perfil:** 28 a 45 anos, técnico, responsável por contratação ou avaliação da equipe.
- **Objetivo principal:** entender profundidade técnica, visão de qualidade e capacidade de colaboração.
- **Frustrações:** candidatos que falam de ferramentas sem contextualizar processo, impacto e resultado.
- **Como usa o produto:** navega por competências, projetos e abordagem de testes para decidir entrevista técnica.

**Persona 3: Cliente ou parceiro potencial**
- **Perfil:** fundador, gerente de produto ou tech lead de equipe pequena ou média.
- **Objetivo principal:** identificar se o profissional pode apoiar estruturação de qualidade, testes e melhoria de processo.
- **Frustrações:** dificuldade em avaliar credibilidade sem uma apresentação profissional clara.
- **Como usa o produto:** procura resumo, diferenciais e contato rápido.

### 3.2 Segmentação
- **TAM:** mercado geral de contratação para QA, testes e qualidade de software.
- **SAM:** vagas e oportunidades remotas ou híbridas para analistas de testes e QA no ecossistema digital.
- **SOM:** recrutadores, líderes e contratantes que receberão o link do portfólio em processos seletivos e networking profissional.

---

## 4. Proposta de Valor

### 4.1 Proposta de Valor Única (UVP)
Um portfólio pessoal de QA que transforma experiência em qualidade de software em evidência visual, objetiva e confiável para contratação.

### 4.2 Diferenciais Competitivos
- Posicionamento centrado em QA, e não em desenvolvimento genérico.
- Linguagem profissional com leitura rápida para recrutadores e profundidade suficiente para líderes técnicos.
- Design visual forte, mas funcional, alinhado ao style guide fornecido.
- Uso da foto profissional para elevar confiança e presença pessoal.
- Experiência recente e prática em testes ponta a ponta, APIs, rastreabilidade e monitoramento operacional.

### 4.3 Benefícios-Chave
- Aumentar credibilidade profissional.
- Facilitar triagem e tomada de decisão por recrutadores.
- Apresentar competências e resultados de forma memorável.
- Criar base reaproveitável para currículo, LinkedIn e futuras apresentações.

---

## 5. MVP — Produto Mínimo Viável

### 5.1 Escopo do MVP
Entram no MVP uma landing page pessoal completa, responsiva e acessível, com navegação por seções, apresentação do profissional, áreas de especialidade em QA, projetos em destaque, ferramentas, experiência resumida e canais de contato.

Não entram no MVP blog, CMS, área administrativa, autenticação, dashboard, formulários complexos com backend ou integração com banco de dados.

### 5.2 Funcionalidades do MVP

| ID | Funcionalidade | Critério de "Pronto" | Prioridade |
|----|---------------|----------------------|------------|
| F01 | Hero principal com foto e proposta de valor | Exibe nome, cargo, mensagem de posicionamento, CTA e foto profissional em mobile e desktop | Must-have |
| F02 | Seção "Sobre mim" | Resume trajetória, forma de trabalho e diferenciais em QA com leitura rápida | Must-have |
| F03 | Seção de especialidades | Lista áreas como testes manuais, automação, regressão, API, qualidade de processo e ferramentas | Must-have |
| F04 | Seção de projetos/cases | Mostra 2 a 4 experiências ou estudos de caso com contexto, ação e impacto | Must-have |
| F05 | Seção de stack e ferramentas | Exibe tecnologias e ferramentas de QA em formato visual claro | Must-have |
| F06 | CTA final e contatos | Disponibiliza links para LinkedIn, e-mail, WhatsApp e/ou currículo, se fornecidos | Must-have |
| F07 | Responsividade e acessibilidade base | Layout funcional em mobile e desktop com contraste, foco visível e sem dependência de hover | Must-have |
| F08 | Navegação por âncoras | Menu leva rapidamente às seções principais sem confundir o visitante | Should-have |
| F09 | Download de currículo | Botão para baixar currículo PDF caso o arquivo seja disponibilizado | Should-have |

### 5.3 Base factual já confirmada pelo currículo
- Cargo atual: Analista de Teste Júnior (QA) na Intervalor/GRB (Mutant), desde abril de 2024.
- Experiência anterior em sustentação de bots e service desk, útil para reforçar visão operacional e investigação de falhas.
- Ferramentas já confirmadas: Jira/Xray, Postman, Grafana, Kibana, HeidiSQL, VS Code, Excel/Word, ChatGPT e Gemini.
- Contextos já confirmados: testes exploratórios, funcionais, não funcionais, smoke, regressão, integração, APIs, URA, bots de voz/texto e bots com IA.
- Formação confirmada: Tecnólogo em Sistemas para Internet, concluído na Universidade Anhembi Morumbi.

---

## 6. Funcionalidades Priorizadas (Completo)

### Must-have (obrigatório no MVP)
| ID | Funcionalidade | Descrição | Dependências |
|----|---------------|-----------|--------------|
| F01 | Hero principal | Primeira dobra com foto, headline e CTA | Design system, conteúdo base |
| F02 | Sobre mim | Introdução profissional e estilo de trabalho | Conteúdo base |
| F03 | Especialidades QA | Cartões ou blocos com competências | Design system |
| F04 | Projetos/cases | Vitrine com experiências ou estudos de caso | Conteúdo validado |
| F05 | Ferramentas | Lista visual de stack e ferramentas | Conteúdo validado |
| F06 | Contato | Canais diretos de conversão | Links reais definidos |
| F07 | Responsividade e acessibilidade | Navegação clara em múltiplas telas | Design system |

### Should-have (importante, mas não bloqueia o MVP)
| ID | Funcionalidade | Descrição | Dependências |
|----|---------------|-----------|--------------|
| F08 | Menu com scroll suave | Navegação entre seções | F01 a F07 |
| F09 | Download de currículo | Acesso rápido ao CV em PDF | Arquivo real disponível |
| F10 | Métricas de confiança | Anos de experiência, projetos, ferramentas ou resultados resumidos | Conteúdo validado |

### Could-have (desejável, versões futuras)
| ID | Funcionalidade | Descrição |
|----|---------------|-----------|
| F20 | Página interna de case | Estudo de caso completo com problema, estratégia e resultado |
| F21 | Depoimentos | Recomendações de colegas, gestores ou clientes |
| F22 | Blog técnico | Artigos sobre QA, testes e qualidade |
| F23 | Idioma alternativo | Versão em inglês |

### Won't-have (fora de escopo por ora)
- Login ou área autenticada
- Banco de dados
- CMS
- Formulário com backend próprio
- Animações pesadas que prejudiquem performance

---

## 7. Regras de Negócio

| ID | Regra | Impacto |
|----|-------|---------|
| RN01 | Todo conteúdo profissional exibido deve ser baseado em experiências reais ou explicitamente marcadas como estudo de caso | Evita ruído de credibilidade |
| RN02 | A proposta de valor precisa ser legível na primeira dobra sem depender de scroll | Melhora retenção inicial |
| RN03 | O visitante deve alcançar uma ação de contato em até 2 interações | Aumenta conversão |
| RN04 | A foto principal deve transmitir proximidade e profissionalismo, sem comprometer leitura do layout | Reforça confiança |
| RN05 | O site deve funcionar bem em mobile antes de otimizações desktop | Garante prioridade mobile-first |
| RN06 | O layout deve seguir o style guide fornecido como base, adaptado ao contexto de QA | Mantém identidade visual consistente |
| RN07 | Informações extraídas do currículo devem ser priorizadas como fonte oficial até revisão manual do usuário | Evita inconsistência entre currículo e portfólio |

---

## 8. Jornada Principal do Usuário

```text
Acessa o link → Entende quem é o profissional → Valida especialidades e provas de competência → Explora projetos/cases → Encontra contato → Inicia conversa ou salva o perfil
```

1. O visitante abre o portfólio por link externo.
2. Na primeira dobra, identifica nome, cargo, posicionamento e foto.
3. Faz scroll para entender experiência, especialidades e ferramentas.
4. Analisa projetos ou estudos de caso para validar maturidade prática.
5. Encontra CTA com contato direto.
6. Decide enviar mensagem, marcar entrevista ou compartilhar o link.

---

## 9. Mapa de Telas

```text
Home
├─ Hero
├─ Sobre
├─ Especialidades QA
├─ Projetos / Cases
├─ Ferramentas e stack
├─ Experiência / diferenciais
└─ Contato final

Futuro
└─ Detalhe de case
```

---

## 10. Requisitos Técnicos

### 10.1 Stack Definida

- **Arquitetura:** monólito modular frontend-first, com seções isoladas em componentes reaproveitáveis
- **Frontend:** HTML5 semântico, CSS3 moderno e JavaScript moderno (ECMAScript ES6+)
- **Estilo:** CSS organizado por camadas e componentes, orientado por tokens do design system
- **Banco de dados:** não aplicável no MVP
- **Infraestrutura:** deploy estático em Vercel, Netlify ou similar
- **Autenticação:** não aplicável

### 10.2 Requisitos Não-Funcionais

| Requisito | Descrição | Meta |
|-----------|-----------|------|
| Performance | Carregamento inicial rápido | LCP < 2.5s em conexão comum |
| Disponibilidade | Site institucional estável | 99.5% |
| Escalabilidade | Crescimento para novas seções e cases | Estrutura modular sem refatoração grande |
| Segurança | Exposição mínima de superfície | Sem segredos no frontend; links externos seguros |
| Acessibilidade | Navegação clara e foco visível | WCAG AA no essencial |
| Manutenibilidade | Facilidade para editar textos e seções | Componentes curtos e independentes |

---

## 11. Requisitos de Segurança

- [x] Autenticação: não aplicável no MVP
- [x] Autorização: não aplicável no MVP
- [x] Dados sensíveis: não armazenar dados pessoais de visitantes no MVP
- [x] Armazenamento de segredos: qualquer chave futura deve ficar apenas em `.env`
- [x] HTTPS obrigatório em todos os ambientes
- [x] Links externos devem usar práticas seguras quando abrirem nova aba

---

## 12. Critérios de Aceite

### F01 — Hero principal
- [ ] Dado o primeiro acesso, quando a home carregar, então o visitante deve identificar nome, cargo e proposta de valor sem rolagem inicial.
- [ ] Dado o uso em mobile, quando o hero for exibido, então foto, texto e CTA devem permanecer legíveis e sem sobreposição.

### F02 — Sobre mim
- [ ] Dado o acesso à seção, quando o visitante ler o bloco, então ele deve entender trajetória, foco de atuação e estilo de trabalho.

### F03 — Especialidades QA
- [ ] Dado o acesso à seção, quando o visitante visualizar os cards, então deve reconhecer rapidamente as principais frentes de atuação em QA.
- [ ] Dado o conteúdo confirmado do currículo, quando a seção for exibida, então deve contemplar ao menos testes manuais, APIs, rastreabilidade e atuação em bots/URA.

### F04 — Projetos/cases
- [ ] Dado o acesso aos projetos, quando o visitante abrir ou ler cada item, então deve entender contexto, contribuição e impacto.
- [ ] Dado o currículo atual, quando os primeiros cases forem montados, então eles devem partir de experiências reais na Intervalor/GRB (Mutant) e contextos compatíveis com o histórico profissional.

### F06 — Contato
- [ ] Dado o interesse do visitante, quando ele acionar um CTA, então deve conseguir iniciar contato sem fluxo intermediário confuso.

### F07 — Responsividade e acessibilidade
- [ ] Dado o uso por teclado, quando o visitante navegar, então todos os elementos interativos devem possuir foco visível.
- [ ] Dado o uso em telas menores, quando houver rolagem, então não deve existir corte de conteúdo essencial.

---

## 13. Riscos e Hipóteses

| ID | Risco / Hipótese | Probabilidade | Impacto | Mitigação | Status |
|----|-----------------|---------------|---------|-----------|--------|
| R01 | Falta de conteúdo concreto para os projetos/cases enfraquecer a narrativa | Média | Alto | Estruturar cases curtos com problema, ação e resultado a partir das experiências já confirmadas no currículo | Aberto |
| R02 | Excesso de inspiração de portfólios de designers desalinhar com posicionamento de QA | Média | Médio | Adaptar a estética sem copiar estrutura literal | Aberto |
| H01 | Uma página única bem estruturada será suficiente para conversão inicial | Alta | Médio | Validar com uso em processos seletivos | Aberto |
| H02 | O uso da foto profissional aumentará percepção de confiança e memorabilidade | Alta | Médio | Testar em feedback informal com recrutadores/colegas | Aberto |

---

## 14. Decisões Registradas

| Data | Decisão | Motivo | Responsável |
|------|---------|--------|-------------|
| 2026-07-06 | Estrutura inicial será one-page com expansão futura para case detail | Reduz escopo e acelera entrega | VERA |
| 2026-07-06 | Identidade visual seguirá a base escura com verde menta do style guide | Alinha referências fornecidas e transmite modernidade | LUMI |
| 2026-07-06 | O portfólio destacará QA como diferencial estratégico, não só lista de ferramentas | Melhor posicionamento profissional | VERA |
| 2026-07-06 | O MVP do frontend será implementado com HTML5 semântico, CSS3 moderno e JavaScript ES6+ | Manter simplicidade, controle e baixo acoplamento tecnológico | VERA |
| 2026-07-06 | O currículo enviado passa a ser a base factual inicial do conteúdo do portfólio | Reduz suposições e aumenta consistência | VERA |

---

## 15. Copy Inicial da Home

### 15.1 Headline principal
**Opção recomendada**
Analista de Qualidade de Software com foco em testes ponta a ponta, APIs e rastreabilidade em produtos digitais.

**Opção alternativa**
QA Analyst com atuação em testes manuais, APIs, bots e qualidade operacional orientada a resultados.

### 15.2 Subheadline
Ajudo times a entregar software com mais confiança por meio de testes bem planejados, investigação de falhas, evidências consistentes e colaboração contínua com produto e desenvolvimento.

### 15.3 Resumo profissional para a seção "Sobre"
Sou Edson José Gabriel Junior, Analista de Qualidade de Software com experiência em planejamento, modelagem e execução de testes manuais, exploratórios, funcionais e não funcionais. Atuo também com smoke, regressão, integração e testes de API com Postman, sempre com foco em rastreabilidade, clareza de evidências e qualidade ponta a ponta.

Minha experiência recente inclui atuação em produtos com URA, bots de voz e texto e bots com IA, além do uso de Jira/Xray para gestão de testes e acompanhamento de defeitos. Venho de uma base sólida em sustentação e service desk, o que amplia minha visão sobre operação, monitoramento, estabilidade e análise de falhas em ambientes reais.

### 15.4 Como eu trabalho
- Planejo e executo testes com foco em cobertura prática e risco do negócio.
- Valido fluxos, integrações e APIs com atenção a evidências e rastreabilidade.
- Colaboro com times ágeis em cerimônias, alinhamentos e melhoria contínua.
- Apoio a identificação de falhas antes que elas gerem impacto maior em produção.

### 15.5 Especialidades principais
- **Testes funcionais e exploratórios:** validação de comportamento, cenários críticos e experiência de uso.
- **Testes de API e integração:** apoio à validação de serviços e comunicação entre sistemas com Postman.
- **Rastreabilidade e gestão de qualidade:** uso de Jira/Xray para evidências, organização e acompanhamento de defeitos.
- **Qualidade em bots e URA:** atuação em produtos com voz, texto e IA, observando fluxo ponta a ponta.

### 15.6 Mini-cases iniciais
**Case 1 — Qualidade ponta a ponta em bots e URA**
- **Contexto:** atuação em produtos com URA, bots de cobrança e bots com IA.
- **Atuação:** planejamento e execução de testes exploratórios, funcionais, não funcionais, smoke, regressão e integração.
- **Valor gerado:** apoio à qualidade de jornadas complexas, com mais previsibilidade nas validações e melhor acompanhamento de falhas.

**Case 2 — Validação de APIs e integrações**
- **Contexto:** necessidade de verificar integrações e consistência de respostas entre sistemas.
- **Atuação:** testes de API com Postman e análise de integrações durante o fluxo de QA.
- **Valor gerado:** maior segurança na validação técnica dos fluxos e mais confiança para o time nas entregas.

**Case 3 — Rastreabilidade e organização de evidências**
- **Contexto:** necessidade de controle claro sobre testes executados, defeitos e cobertura validada.
- **Atuação:** uso de Jira/Xray para registrar testes, evidências e acompanhar defeitos.
- **Valor gerado:** rastreabilidade mais clara para o time e melhor comunicação do status de qualidade.

### 15.7 Ferramentas por contexto
- **Gestão e rastreabilidade:** Jira, Xray
- **Testes de API:** Postman
- **Observabilidade e análise:** Grafana, Kibana
- **Consulta e apoio técnico:** HeidiSQL, VS Code
- **Produtividade e documentação:** Excel, Word
- **Apoio com IA:** ChatGPT, Gemini

### 15.8 CTA final
Se você busca um profissional de QA com olhar analítico, atenção aos detalhes e foco em qualidade ponta a ponta, vamos conversar.

### 15.8.1 CTA principal do hero
- **Destino:** WhatsApp direto
- **Link:** `https://wa.me/5511988020276`
- **Objetivo:** reduzir atrito de contato logo na primeira dobra

### 15.9 Contatos para o portfólio
- **LinkedIn:** `https://www.linkedin.com/in/edyjunior/`
- **GitHub:** `https://github.com/projetos-junior`
- **Telefone/WhatsApp:** `+55 11 98802-0276`
- **E-mail:** `edson.junior.qa@gmail.com`

### 15.10 Pendências de conteúdo
- Validar se o telefone será exibido publicamente ou apenas via WhatsApp.
- Refinar os mini-cases com resultados mensuráveis, se puder publicar.
