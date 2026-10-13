# PRD — FV Portfolio

**Versão:** 1.0  
**Estado:** Draft  
**Tipo:** Personal developer portfolio  
**Brand:** FV  
**Tagline provisória:** Small software. Useful things.  
**Owner:** Flávio Vicente  
**Localização:** Portugal

---

## 1. Visão do produto

### 1.1. Resumo

FV é um portefólio pessoal de software engineering. Apresenta projetos, experiências, tecnologias e informação sobre o seu autor através de uma experiência inspirada em ferramentas de desenvolvimento, CLIs e package managers.

O site combina uma estética minimalista e editorial com uma interface inspirada em comandos de terminal.

A experiência começa com uma sequência de inicialização:

```bash
$ fv init
```

O sistema apresenta o processo de inicialização e carrega visualmente as diferentes secções do site.

A experiência termina com o portefólio pronto a explorar.

```text
✓ identity
✓ projects
✓ experiments
✓ stack

ready_
```

O terminal funciona como metáfora visual e narrativa. O site continua a ser um portefólio acessível, rápido e fácil de navegar.

### 1.2. Objectivos

- Criar uma identidade visual reconhecível.
- Demonstrar capacidade técnica e atenção ao detalhe.
- Apresentar projetos reais de forma atractiva.
- Transmitir uma imagem de software engineer independente.
- Criar uma experiência memorável sem prejudicar a usabilidade.
- Permitir adicionar projetos e experiências sem alterar a estrutura do site.
- Manter o site rápido, leve e fácil de manter.

### 1.3. Referência visual

Referência principal: https://feast-labs.com/

Extrair como inspiração:

- Estética dark e minimalista.
- Tipografia expressiva.
- Muito espaço negativo.
- Composição editorial.
- Cards com pouco ruído visual.
- Imagens integradas no layout.
- Animações subtis e intencionais.
- Personalidade própria em vez de um template genérico.

Não copiar directamente o código, os textos, os assets ou a identidade visual da referência.

---

## 2. Marca e naming

### 2.1. Identidade

**Nome da marca:** FV

**Nome completo:** Flávio Vicente

A marca deve funcionar independentemente do nome pessoal. No entanto, o portefólio deve identificar claramente o seu autor.

### 2.2. Conceito central

FV funciona como uma pequena ferramenta de software pessoal.

Os comandos representam acções, secções e conteúdos do portefólio.

| Comando                | Significado                                   |
| ---------------------- | --------------------------------------------- |
| `fv init`              | Inicializar a experiência                     |
| `fv projects`          | Explorar projetos                             |
| `fv inspect <project>` | Consultar um projeto                          |
| `fv stack`             | Consultar tecnologias                         |
| `fv lab`               | Explorar experiências                         |
| `fv whoami`            | Conhecer o autor                              |
| `fv connect`           | Contactar                                     |
| `fv sync`              | Representar uma sincronização ou actualização |

Os comandos são elementos de branding. Não precisam de executar operações reais de sistema.

### 2.3. Tagline

Tagline provisória:

**Small software. Useful things.**

Alternativas a avaliar durante a implementação:

- Software, experiments, and other things.
- Independent software engineering.
- Building useful things for the web.
- Software made carefully.

A tagline final deve reflectir os projetos e a personalidade do autor.

---

## 3. Público-alvo

O site destina-se principalmente a:

- Recrutadores técnicos.
- Empresas e equipas de engenharia.
- Outros developers.
- Potenciais colaboradores.
- Pessoas interessadas nos projetos publicados.

### Necessidades do utilizador

O visitante deve conseguir perceber rapidamente:

1. Quem é Flávio Vicente.
2. O que constrói.
3. Quais são os seus melhores projetos.
4. Que tecnologias utiliza.
5. Como pode entrar em contacto.

A experiência visual deve complementar estas respostas, não escondê-las.

---

## 4. Estrutura do site

### 4.1. Mapa de páginas

| Rota                | Conteúdo                                |
| ------------------- | --------------------------------------- |
| `/`                 | Intro, hero e apresentação dos projetos |
| `/projects/`        | Listagem completa de projetos           |
| `/projects/[slug]/` | Detalhe de um projeto                   |
| `/lab/`             | Experiências e side projects            |
| `/stack/`           | Tecnologias e áreas de especialização   |
| `/about/`           | Perfil pessoal e profissional           |
| `/contact/`         | Contactos e ligações externas           |

A página inicial deve conter as secções essenciais. As páginas individuais permitem aprofundar o conteúdo sem tornar a homepage demasiado longa.

### 4.2. Navegação

Navegação simples e discreta.

Elementos possíveis:

- Logótipo FV.
- Work.
- Lab.
- Stack.
- About.
- Contact.

O logótipo deve funcionar como ligação à homepage.

Em desktop, a navegação pode permanecer visível durante o scroll. Em mobile, deve ser compacta e fácil de utilizar.

---

## 5. Experiência inicial — Boot Sequence

### 5.1. Objectivo

Criar uma abertura curta, cinematográfica e interactiva.

A animação apresenta FV como se fosse uma ferramenta de software a iniciar.

### 5.2. Sequência

**Estado 1 — Ecrã inicial**

Fundo escuro. Cursor discreto.

```text
_
```

**Estado 2 — Execução do comando**

O texto aparece progressivamente.

```text
$ fv init
```

**Estado 3 — Inicialização**

```text
initializing fv...

✓ identity
✓ projects
✓ experiments
✓ stack
```

**Estado 4 — Conclusão**

```text
ready_
```

O cursor pisca. A interface transita para o hero.

**Estado 5 — Hero**

```text
FV

Software engineer
building things for the web.
```

O conteúdo real da homepage fica disponível.

### 5.3. Requisitos funcionais

- Animação implementada em HTML, CSS e JavaScript.
- Texto real, seleccionável e acessível.
- Não utilizar vídeo pré-renderizado para simular o terminal.
- Duração curta, idealmente entre 2 e 4 segundos.
- Permitir ignorar a animação.
- Não bloquear a navegação.
- Não repetir a animação em cada mudança de secção.
- Considerar reproduzi-la apenas na primeira visita da sessão.
- Disponibilizar uma forma de a reproduzir novamente, se apropriado.
- Respeitar `prefers-reduced-motion`.
- Se JavaScript falhar, o conteúdo principal deve continuar acessível.

A animação deve ser rápida o suficiente para não prejudicar a primeira impressão nem atrasar o acesso aos projetos.

---

## 6. Homepage

### 6.1. Hero

**Objectivo:** apresentar a marca e a proposta de valor.

Elementos:

- Marca FV.
- Headline principal.
- Descrição curta.
- Localização ou identificação profissional, se relevante.
- CTA para explorar projetos.
- CTA secundário para conhecer o autor.
- Elemento visual ou animação subtil.

Exemplo provisório:

> Software engineer building things for the web.

Não utilizar texto genérico como substituto da identidade profissional. A versão final deve reflectir a experiência e o trabalho real do autor.

### 6.2. Featured Projects

Apresentar os melhores projetos numa grelha visual.

Cada card deve conter:

- Nome.
- Descrição curta.
- Categoria ou estado.
- Imagem ou screenshot, quando disponível.
- Tecnologias principais, se relevantes.
- Ligação para o detalhe.

O layout deve permitir cards de dimensões diferentes quando isso melhorar a composição.

Os projetos em destaque devem ser seleccionados manualmente.

### 6.3. Lab

Secção para:

- Experiências técnicas.
- Protótipos.
- Ferramentas pequenas.
- Projectos pessoais.
- Provas de conceito.

A secção deve distinguir experiências de produtos completos.

### 6.4. Stack

Apresentar as tecnologias relevantes para o trabalho do autor.

Organização sugerida:

- Languages.
- Frontend.
- Backend.
- Databases.
- Infrastructure.
- Tools.

A lista final deve conter apenas tecnologias com as quais o autor tenha experiência real.

Evitar barras de proficiência arbitrárias e listas intermináveis de logótipos.

### 6.5. About

Apresentação breve de Flávio Vicente .

Conteúdo:

- Perfil profissional.
- Abordagem à engenharia de software.
- Interesses técnicos.
- Experiência relevante.
- Localização, se pretendido.

A secção pode utilizar o comando:

```bash
$ fv whoami
```

seguido da apresentação pessoal.

### 6.6. Contact

Secção final, simples e directa.

Possíveis elementos:

- Email.
- GitHub.
- LinkedIn.
- Outras plataformas relevantes.

O comando visual pode ser:

```bash
$ fv connect
```

Cada ligação deve executar a acção real correspondente.

### 6.7. Footer

Incluir:

- Marca FV.
- Copyright com ano actualizado automaticamente.
- Ligações sociais.
- Email ou contacto.
- Eventual referência à localização.

Manter o footer visualmente discreto.

---

## 7. Detalhe de projeto

Cada projeto deve ter uma página própria, acessível através de `/projects/[slug]/`.

### Conteúdo

1. Nome e resumo.
2. Imagem principal.
3. Problema ou motivação.
4. Solução desenvolvida.
5. Responsabilidades pessoais.
6. Stack tecnológica.
7. Desafios técnicos.
8. Decisões de arquitectura relevantes.
9. Resultados, quando existirem.
10. Links para demo, repositório ou documentação.

### Identidade terminal

O projecto pode ser apresentado através de:

```bash
$ fv inspect project-name
```

Abaixo, a página apresenta o conteúdo editorial normal.

A metáfora de terminal deve facilitar a navegação, não obrigar o visitante a interpretar comandos para obter informação.

### Modelo de conteúdo

Cada projecto deve poder ser descrito através de um ficheiro Markdown ou MDX.

Campos previstos:

```yaml
title: "Project Name"
description: "Short project description."
slug: "project-name"
year: 2026
status: "live"
featured: true
stack:
    - TypeScript
    - Astro
links:
    demo: ""
    repository: ""
cover: "/images/projects/project-name.webp"
```

Os campos opcionais devem ser omitidos quando não existirem.

Não inventar métricas, resultados ou funcionalidades.

---

## 8. Design System

### 8.1. Direcção visual

- Dark-first.
- Minimalista.
- Editorial.
- Técnico.
- Contraste elevado.
- Espaçamento generoso.
- Componentes simples.
- Detalhes inspirados em interfaces de desenvolvimento.

O resultado não deve parecer um terminal tradicional aplicado a todas as páginas. Deve parecer um portefólio contemporâneo com uma identidade técnica.

### 8.2. Cores

Tokens iniciais, a validar visualmente:

```css
:root {
    --color-bg: #0a0a0a;
    --color-surface: #111111;
    --color-text: #f4f4f0;
    --color-muted: #8b8b84;
    --color-border: #292929;
    --color-accent: #b8f36b;
}
```

O verde é uma proposta inicial de cor de destaque, não uma decisão final.

Regras:

- Fundo predominantemente escuro.
- Texto principal claro.
- Texto secundário menos contrastante, mas legível.
- Bordas subtis.
- Uma cor de destaque consistente.
- Evitar gradientes decorativos em excesso.

### 8.3. Tipografia

Definir três funções tipográficas:

- **Display:** títulos grandes e headlines.
- **Body:** texto de leitura.
- **Mono:** comandos, metadados, labels e pequenos detalhes técnicos.

Criar tokens para:

- Font family.
- Font size.
- Font weight.
- Line height.
- Letter spacing.

A escolha das fontes deve ser validada visualmente e licenciada para utilização web.

Não assumir que o Feast Labs utiliza uma fonte específica sem inspeccionar os recursos originais.

### 8.4. Layout

- Content container com largura máxima definida.
- Grelhas responsivas.
- Espaçamento consistente.
- Alinhamentos claros.
- Imagens com crops controlados.
- Bordas discretas.
- Border radius reduzido ou moderado.
- Hierarquia visual baseada em tamanho, contraste e espaço.

### 8.5. Componentes base

- Navigation.
- Button.
- CommandLabel.
- TerminalLine.
- BootSequence.
- SectionHeading.
- ProjectCard.
- ProjectGrid.
- FeaturedProject.
- StackGroup.
- SocialLinks.
- Footer.

Cada componente deve ter uma responsabilidade clara.

Evitar criar abstrações antes de existir uma necessidade concreta.

---

## 9. Animações e interacções

### 9.1. Filosofia

As animações devem reforçar a identidade FV.

Não devem competir com o conteúdo nem dificultar a navegação.

### 9.2. Intro

GSAP controla a sequência temporal:

- Aparecimento do comando.
- Escrita progressiva.
- Apresentação dos estados.
- Transição para o hero.

### 9.3. Scroll

Utilizar GSAP ScrollTrigger para:

- Revelar secções.
- Animar títulos.
- Criar parallax subtil.
- Controlar animações de elementos visuais.
- Animar a entrada dos cards.
- Criar transições específicas para projetos em destaque.

Utilizar Lenis apenas se o smooth scrolling melhorar realmente a experiência.

Quando Lenis e ScrollTrigger forem utilizados em conjunto, configurar correctamente a sincronização do scroll.

### 9.4. Hover

Os cards podem incluir:

- Pequeno deslocamento da imagem.
- Alteração subtil do título.
- Movimento de uma seta.
- Mudança de borda ou cor.
- Transição curta.

As interacções devem funcionar também por teclado, sem depender exclusivamente de hover.

### 9.5. Navegação por comandos

Os comandos visuais podem acompanhar a navegação real:

| Acção              | Comando                   |
| ------------------ | ------------------------- |
| Abrir homepage     | `fv init`                 |
| Abrir projetos     | `fv projects`             |
| Abrir um projecto  | `fv inspect project-name` |
| Abrir experiências | `fv lab`                  |
| Abrir tecnologias  | `fv stack`                |
| Abrir perfil       | `fv whoami`               |
| Abrir contactos    | `fv connect`              |

A correspondência entre comandos e rotas deve ser consistente.

Não é necessário construir uma shell real nem permitir execução de comandos arbitrários.

---

## 10. Stack técnica

### 10.1. Tecnologias principais

| Tecnologia                | Responsabilidade                              |
| ------------------------- | --------------------------------------------- |
| Astro                     | Estrutura, páginas, routing e geração do site |
| TypeScript                | Código e tipagem                              |
| Tailwind CSS              | Layout e estilos utilitários                  |
| CSS                       | Tokens, estilos globais e detalhes visuais    |
| GSAP                      | Animações e timelines                         |
| GSAP ScrollTrigger        | Animações associadas ao scroll                |
| Lenis                     | Smooth scrolling, se necessário               |
| Astro Content Collections | Conteúdo tipado de projetos e artigos         |
| Markdown / MDX            | Conteúdo editorial                            |

Lucide pode ser adicionado se forem necessários ícones.

Não adicionar React por defeito. Introduzi-lo apenas se surgir uma necessidade concreta de componentes interactivos que justifique essa dependência.

Não adicionar Framer Motion, bibliotecas de UI ou dependências redundantes sem justificação.

### 10.2. Princípios de implementação

- Astro com renderização estática por defeito.
- JavaScript apenas onde é necessário.
- Componentes Astro para a maior parte da interface.
- TypeScript para lógica de animação.
- CSS variables para tokens globais.
- Tailwind para composição de layouts.
- GSAP para sequências complexas.
- Conteúdo separado da apresentação.
- Dependências reduzidas.

### 10.3. Organização sugerida

```text
fv/
├── public/
│   ├── favicon.svg
│   ├── fonts/
│   └── images/
│       └── projects/
│
├── src/
│   ├── components/
│   │   ├── Navigation.astro
│   │   ├── BootSequence.astro
│   │   ├── Hero.astro
│   │   ├── SectionHeading.astro
│   │   ├── ProjectCard.astro
│   │   ├── ProjectGrid.astro
│   │   ├── Stack.astro
│   │   ├── About.astro
│   │   └── Footer.astro
│   │
│   ├── content/
│   │   ├── projects/
│   │   └── posts/
│   │
│   ├── layouts/
│   │   └── BaseLayout.astro
│   │
│   ├── pages/
│   │   ├── index.astro
│   │   ├── projects/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   ├── lab.astro
│   │   ├── stack.astro
│   │   ├── about.astro
│   │   └── contact.astro
│   │
│   ├── scripts/
│   │   ├── boot.ts
│   │   ├── animations.ts
│   │   └── scroll.ts
│   │
│   └── styles/
│       └── global.css
│
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Esta estrutura é uma proposta inicial. Deve ser adaptada à versão do Astro e às convenções actuais do projecto.

### 10.4. Deploy

Opções preferenciais:

- Cloudflare Pages.
- Vercel.

A escolha depende do domínio, do fluxo de deploy e das necessidades de alojamento.

Para a primeira versão, não é necessário backend.

---

## 11. Performance, acessibilidade e SEO

### 11.1. Performance

- Gerar HTML estático sempre que possível.
- Optimizar imagens.
- Utilizar formatos modernos, como WebP ou AVIF.
- Carregar fontes de forma eficiente.
- Evitar bibliotecas redundantes.
- Evitar JavaScript no cliente quando não é necessário.
- Evitar layout shifts.
- Garantir que a intro não bloqueia o conteúdo.
- Não carregar imagens de projetos fora do viewport sem necessidade.

### 11.2. Acessibilidade

- HTML semântico.
- Navegação completa por teclado.
- Estados de foco visíveis.
- Contraste adequado.
- Textos alternativos nas imagens relevantes.
- Links com nomes descritivos.
- Animações reduzidas quando solicitado pelo sistema.
- Conteúdo acessível sem depender da animação.
- Não transmitir estados apenas através de cor.

### 11.3. SEO

- Título e descrição por página.
- URLs legíveis.
- Open Graph.
- Sitemap.
- `robots.txt`.
- Canonical URLs.
- Dados estruturados adequados, quando aplicável.
- Metadados para cada projecto.
- Página de erro 404 personalizada.

Não depender de conteúdo que só aparece depois de executar animações.

### 11.4. Métricas de referência

Metas iniciais para Lighthouse em produção:

- Performance: 90 ou superior.
- Accessibility: 95 ou superior.
- Best Practices: 95 ou superior.
- SEO: 95 ou superior.

Estas metas devem ser medidas em condições consistentes. São objectivos, não resultados garantidos.

---

## 12. Âmbito do MVP

### Incluído

- Marca FV.
- Homepage responsiva.
- Boot sequence `fv init`.
- Hero.
- Projetos em destaque.
- Listagem de projetos.
- Páginas individuais de projetos.
- Secção Lab.
- Stack tecnológica.
- About.
- Contact.
- Footer.
- Design system inicial.
- Animações de entrada e scroll.
- Suporte para movimento reduzido.
- SEO básico.
- Deploy automático.

### Fora do MVP

- Terminal totalmente interactivo.
- Execução real de comandos.
- Backend personalizado.
- Sistema de autenticação.
- CMS externo.
- Pesquisa avançada.
- Blog completo, caso ainda não exista conteúdo.
- Temas múltiplos.
- WebGL ou animações 3D complexas.
- Efeitos sonoros.
- Sistema de sincronização real.

Estes elementos podem ser considerados numa fase posterior.

---

## 13. Plano de implementação

### Fase 1 — Fundação

- Criar projecto Astro.
- Configurar TypeScript.
- Configurar Tailwind.
- Definir estrutura de pastas.
- Criar tokens CSS.
- Criar layout base.
- Configurar metadados e fontes.

**Resultado:** base técnica pronta.

### Fase 2 — Identidade visual

- Implementar navegação.
- Construir hero.
- Criar cards.
- Definir grelha.
- Implementar tipografia.
- Validar cores e espaçamento.
- Testar desktop e mobile.

**Resultado:** site estático com identidade FV.

### Fase 3 — Boot Sequence

- Implementar `fv init`.
- Criar máquina de estados simples para a animação.
- Controlar timings com GSAP.
- Criar transição para o hero.
- Implementar opção de ignorar.
- Implementar movimento reduzido.
- Evitar repetição excessiva.

**Resultado:** entrada memorável e funcional.

### Fase 4 — Conteúdo

- Definir schema dos projetos.
- Criar content collection.
- Implementar listagem.
- Implementar páginas individuais.
- Adicionar stack.
- Adicionar About.
- Adicionar Contact.

**Resultado:** portefólio completo.

### Fase 5 — Motion design

- Integrar ScrollTrigger.
- Avaliar Lenis.
- Criar animações dos cards.
- Afinar transições.
- Validar performance.
- Remover animações redundantes.

**Resultado:** experiência visual polida.

### Fase 6 — Lançamento

- Rever acessibilidade.
- Testar mobile.
- Validar SEO.
- Executar build de produção.
- Testar links.
- Configurar domínio.
- Configurar deploy.
- Verificar Lighthouse.

**Resultado:** versão pública pronta.

---

## 14. Critérios de aceitação

O MVP considera-se concluído quando:

- [ ] A homepage apresenta claramente FV e o seu autor.
- [ ] A intro `fv init` funciona e pode ser ignorada.
- [ ] O conteúdo continua acessível sem animações.
- [ ] A navegação funciona por rato e teclado.
- [ ] O layout adapta-se a mobile, tablet e desktop.
- [ ] Os projetos são geridos através de conteúdo estruturado.
- [ ] Cada projecto tem uma página própria.
- [ ] Os links externos funcionam.
- [ ] Os estados de hover e foco são consistentes.
- [ ] O movimento reduzido é respeitado.
- [ ] As animações não causam problemas significativos de layout.
- [ ] A homepage não depende de JavaScript para apresentar o conteúdo principal.
- [ ] O build de produção termina sem erros.
- [ ] Os metadados essenciais estão configurados.
- [ ] O deploy funciona de forma reproduzível.
- [ ] As metas de qualidade são verificadas em produção.

---

## 15. Riscos e decisões

### Risco: excesso de terminal

**Mitigação:** usar comandos como linguagem visual, não como substituto de uma interface convencional.

### Risco: intro demasiado longa

**Mitigação:** duração curta, opção de ignorar e apresentação imediata do conteúdo principal.

### Risco: animações prejudicarem a performance

**Mitigação:** privilegiar `transform` e `opacity`, reduzir efeitos pesados e medir o resultado.

### Risco: dependências em excesso

**Mitigação:** Astro como base, GSAP para motion e Lenis apenas se justificar.

### Risco: portfolio visualmente interessante, mas sem conteúdo forte

**Mitigação:** dar prioridade aos projetos, às decisões técnicas e aos resultados reais.

### Risco: inspiração demasiado próxima do Feast Labs

**Mitigação:** desenvolver uma identidade própria em torno de FV, dos comandos e do conceito de inicialização.

---

## 16. Definição final do produto

FV é um portefólio pessoal construído com Astro, TypeScript e Tailwind CSS. Utiliza GSAP para animar uma experiência de entrada inspirada em CLIs e explora projectos de software através de uma interface editorial minimalista.

A experiência começa com:

```bash
$ fv init
```

E evolui para um portefólio onde cada secção tem uma linguagem consistente:

```bash
fv projects
fv inspect project-name
fv lab
fv stack
fv whoami
fv connect
```

A marca é simples. A experiência é técnica. O conteúdo é real.

**Princípio orientador:** o site deve parecer uma ferramenta construída por um developer, não um template de portefólio com um terminal por cima.

# PRD — Actualização: FV INIT

## 1. Identidade do produto

**Nome:** FV INIT  
**Domínio previsto:** `fvinit.me`  
**Tipo:** Hub digital pessoal  
**Conceito:** Um ponto central para explorar a identidade, os projectos, as experiências e o trabalho de Flávio.

FV INIT não é apenas um portefólio tradicional. É uma base digital pessoal, com uma interface inspirada em ferramentas de developer e interfaces de terminal.

O projecto deve poder crescer para incluir novos projectos, experiências, ferramentas e outras iniciativas sem exigir uma mudança de identidade.

## 2. Sistema de marca

- **FV:** identidade visual principal.
- **FV INIT:** nome completo do hub.
- **`fv init`:** comando de inicialização da experiência.
- **`fvinit.me`:** domínio público do projecto.

A marca deve continuar minimalista e independente do domínio. O hífen não é necessário no logótipo nem na interface.

## 3. Objectivo principal

Criar um hub pessoal que permita:

- Descobrir projectos e produtos desenvolvidos.
- Explorar experiências e trabalho experimental.
- Consultar tecnologias e competências.
- Conhecer o percurso e a identidade do autor.
- Encontrar contactos e ligações externas.

## 4. Experiência de entrada

A sequência de inicialização representa o acesso ao hub, não o carregamento de um portefólio.

Exemplo:

`$ fv init`

- `✓ identity loaded`
- `✓ projects synced`
- `✓ lab initialised`
- `✓ stack detected`
- `ready_`

A animação deve ser curta, ignorável, acessível e executada apenas quando apropriado. Não deve atrasar o acesso ao conteúdo.

## 5. Arquitectura de conteúdo

O hub deve organizar o conteúdo em módulos independentes:

- `fv projects` — projectos e produtos.
- `fv inspect <project>` — detalhe de um projecto.
- `fv lab` — experiências e protótipos.
- `fv stack` — tecnologias e competências.
- `fv whoami` — perfil e percurso.
- `fv connect` — contactos e ligações.
- `fv sync` — elemento conceptual para actualizações ou sincronização, caso exista uma função real que o justifique.

## 6. Critério de evolução

O sistema deve permitir acrescentar novos módulos sem reformular a identidade central.

O âmbito inicial mantém-se simples: um hub estático, rápido, acessível, responsivo e fácil de actualizar.

O domínio `fvinit.me` é a escolha prevista, sujeita à conclusão da compra e à confirmação do registo.
