# Briefing do Projeto

> **Quem preenche:** Usuário (com base em `agents/briefing-inicial.md`)
> **Quando preencher:** Antes de qualquer ação dos agentes
> **Estado:** Preenchido retrospectivamente a partir do PRD já validado
> **Fonte deste preenchimento:** `docs/PRD.md` v1.6, com autorização do usuário em 2026-07-15

---

## 1. Ideia Central

> O que é o projeto? Descreva em até 3 frases como se fosse explicar para alguém de fora.

Um portfólio pessoal de página única para apresentar Edson José Gabriel Junior como Analista de Qualidade de Software. O site transforma a experiência profissional em uma narrativa visual objetiva, destacando competências, ferramentas, abordagem de qualidade e cases reais. A primeira versão pode evoluir futuramente para páginas internas com estudos de caso mais detalhados.

---

## 2. Problema que Resolve

> O que está bagunçado, lento, caro ou frustrante hoje? Qual é a dor real?

Currículos em PDF e perfis no LinkedIn nem sempre demonstram a profundidade técnica, o raciocínio de qualidade e o impacto profissional de quem atua em QA. O portfólio organiza essas informações para que recrutadores, lideranças técnicas e potenciais contratantes entendam rapidamente a experiência, as especialidades e a forma de trabalho do profissional.

---

## 3. Público-Alvo

> Quem vai usar? Seja específico: idade, contexto, nível técnico, localização.

- Recrutadores e profissionais de Talent Acquisition, geralmente entre 25 e 40 anos, com conhecimento técnico intermediário e necessidade de avaliar rapidamente a aderência do candidato.
- Líderes de Engenharia e gestores de QA, geralmente entre 28 e 45 anos, que desejam avaliar profundidade técnica, visão de qualidade e capacidade de colaboração.
- Fundadores, gerentes de produto e tech leads de equipes pequenas ou médias que procuram apoio em testes, processos e qualidade de software.
- O foco inicial são oportunidades remotas ou híbridas no mercado de tecnologia.

---

## 4. MVP — O Mínimo Que Precisa Existir

> Liste as 3 a 5 funcionalidades sem as quais o produto não faz sentido.

- Hero com foto profissional, nome, cargo, proposta de valor e CTA direto para contato.
- Seções sobre trajetória, forma de trabalho e especialidades em QA.
- Cases baseados em experiências reais, apresentados com contexto, atuação e valor qualitativo.
- Stack de ferramentas e canais de contato, incluindo LinkedIn, GitHub, WhatsApp e e-mail.
- Experiência responsiva e acessível, com navegação por âncoras em dispositivos móveis e desktop.

---

## 5. O Que Fica Para Depois

> Funcionalidades desejáveis, mas não essenciais para a primeira versão.

- Páginas internas com estudos de caso completos.
- Depoimentos de colegas, gestores ou clientes.
- Blog com conteúdo técnico sobre QA, testes e qualidade.
- Versão do portfólio em inglês.
- Download do currículo, condicionado à disponibilização do arquivo final.

---

## 6. Referências Visuais

> Existe algum produto com interface que você gosta? Links, prints ou descrição.

Identidade visual escura, moderna e profissional, com verde menta como cor de destaque. A interface deve ser forte sem comprometer a leitura, adaptar referências de portfólios contemporâneos ao contexto de QA e priorizar clareza, confiança, acessibilidade e navegação mobile-first. Nenhum produto específico foi confirmado como referência visual.

---

## 7. Stack Preferida (se souber)

> Linguagem, framework, banco de dados. Se não souber, escreva "a definir com VERA".

- **Arquitetura:** monólito modular frontend-first.
- **Frontend:** HTML5 semântico, CSS3 moderno e JavaScript ES6+.
- **Estilos:** CSS organizado por camadas, componentes e tokens do design system.
- **Backend e banco de dados:** não aplicáveis ao MVP.
- **Infraestrutura:** hospedagem estática em Vercel, Netlify ou serviço similar.

---

## 8. Login e Dados de Usuário?

> O sistema precisará de autenticação? Armazenará dados pessoais (LGPD/GDPR)?

Não. O MVP não terá autenticação, área administrativa, banco de dados nem armazenamento de dados de visitantes. Os dados profissionais e canais de contato exibidos são públicos e foram fornecidos para essa finalidade. Qualquer funcionalidade futura que colete dados deverá passar por nova análise de privacidade e segurança.

---

## 9. Prazo e Orçamento

> Quando gostaria de ter a primeira versão? Qual é o investimento disponível?

A primeira versão foi publicada e validada em produção em 10 de julho de 2026. O orçamento não foi informado e permanece a definir pelo usuário.

---

## 10. Dúvidas e Incertezas

> O que ainda não está claro? Onde você precisará de mais ajuda?

- Validar, com recrutadores e colegas, se a página única é suficiente para a conversão inicial.
- Avaliar se a foto profissional aumenta a percepção de confiança e memorabilidade.
- Garantir que a inspiração visual continue alinhada ao posicionamento de QA, sem parecer um portfólio genérico de design ou desenvolvimento.
- Avaliar futuramente a divisão do HTML com um processo mínimo de build, apenas se isso não aumentar desnecessariamente a complexidade do MVP.
- Definir orçamento para manutenção e futuras evoluções.

---

## 11. Concorrentes ou Referências de Mercado

> Existem produtos similares? O que fazem bem? O que fazem mal?

Não foram confirmados concorrentes ou portfólios específicos como referência de mercado. A referência geral são portfólios profissionais e páginas pessoais que apresentam informações com leitura rápida e boa hierarquia visual. Uma pesquisa comparativa permanece pendente para identificar boas práticas específicas de portfólios de profissionais de QA.

---

## 12. Informações Adicionais

> Qualquer detalhe que não foi coberto acima.

- O currículo é a fonte factual principal do conteúdo profissional até revisão manual do usuário.
- Os cases devem usar somente experiências reais e evidências qualitativas; métricas numéricas não serão publicadas sem validação.
- O CTA principal direciona para uma conversa no WhatsApp em até duas interações.
- O MVP deve manter boa performance, foco visível, contraste adequado e funcionamento sem dependência de interações por hover.
- Não devem existir segredos no frontend; futuras chaves ou credenciais deverão permanecer exclusivamente em variáveis de ambiente.

---

> **Revisão recomendada:** o usuário deve confirmar especialmente orçamento, referências de mercado e hipóteses registradas na seção 10.
