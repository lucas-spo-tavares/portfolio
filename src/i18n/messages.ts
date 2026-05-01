export type LocaleKey = "en" | "pt";

export type MessageCatalog = Record<string, string>;

export const messages: Record<LocaleKey, MessageCatalog> = {
  en: {
    "nav.work": "Work",
    "nav.skills": "Skills",
    "nav.credentials": "Credentials",
    "nav.contact": "Contact",
    "nav.language": "PT",
    "hero.tag": "{role} in {location}",
    "hero.title":
      "Building product interfaces that make complicated work feel obvious.",
    "hero.summary":
      "Fullstack Developer focused on web frontend, building complex, product-driven applications with React, Vue, and Node.js. I enjoy turning messy workflows into reliable, useful products.",
    "hero.primaryCta": "See selected work",
    "hero.resumeCta": "Resume PDF",
    "hero.linkedinCta": "LinkedIn",
    "hero.githubCta": "GitHub",
    "hero.portfolioLabel": "Portfolio",
    "hero.cardSummary":
      "React, Vue, Node.js, and AWS-flavored delivery for teams that need useful software, not ceremony.",
    "hero.highlight1": "React, Vue, Next.js and TypeScript",
    "hero.highlight2": "AI-powered production features",
    "hero.highlight3": "B2B portals and backoffice platforms",
    "hero.highlight4": "AWS Certified Cloud Practitioner",
    "section.work.eyebrow": "Selected work",
    "section.work.title":
      "Products shipped where business process meets interface craft.",
    "section.work.description":
      "A compact tour through the projects from the resume, rewritten as portfolio stories.",
    "section.skills.eyebrow": "Toolkit",
    "section.skills.title":
      "Frontend-heavy fullstack with enough cloud to ship cleanly.",
    "section.skills.description":
      "The stack leans toward product interfaces, but the work often crosses APIs, data, AWS, dashboards, and deployment paths.",
    "section.credentials.eyebrow": "Credentials",
    "section.credentials.title":
      "A foundation in computer science, plus practical cloud literacy.",
    "section.credentials.description":
      "Education, certification, and language context from the resume.",
    "section.contact.eyebrow": "Let's build",
    "section.contact.title":
      "Need someone who can move across UI, product, and delivery?",
    "section.contact.email": "Email me",
    "section.contact.resume": "Resume PDF",
    "work.garantiabr.company": "Elevential",
    "work.garantiabr.period": "Sep 2023 - Present",
    "work.garantiabr.title": "GarantiaBr - B2B Backoffice Platform",
    "work.garantiabr.b1":
      "Built a backoffice for company, department, user onboarding, and permission management.",
    "work.garantiabr.b2":
      "Refactored Django form flows to support draft saving and file uploads.",
    "work.garantiabr.b3":
      "Created reusable UI components that became a shared design system across projects.",
    "work.auren.company": "Elevential",
    "work.auren.period": "Sep 2023 - Present",
    "work.auren.title": "Auren - Energy Commercialization Platform",
    "work.auren.b1":
      "Replaced spreadsheet-and-email workflows with a B2B partner portal for 30+ partners.",
    "work.auren.b2":
      "Built the frontend from scratch and integrated real-time quotation status tracking.",
    "work.auren.b3":
      "Delivered marketing campaign features for anniversary and Black Friday flows.",
    "work.solucx.company": "Elevential",
    "work.solucx.period": "Sep 2023 - Present",
    "work.solucx.title": "Solucx - Feedback and Analytics Dashboard",
    "work.solucx.b1":
      "Shipped an AI chat with history, favoriting, and backend integration.",
    "work.solucx.b2":
      "Added configurable dashboard items powered by prompt-based and custom JSON chart definitions.",
    "work.solucx.b3":
      "Used JSONata and Highcharts to transform and render user-defined analytics.",
    "work.tokenlab.company": "TokenLab",
    "work.tokenlab.period": "Oct 2021 - Sep 2023",
    "work.tokenlab.title": "Fullstack Developer Intern",
    "work.tokenlab.b1":
      "Worked across frontend, backend, real-time encrypted chat, CMS integration, and mobile features.",
    "work.tokenlab.b2":
      "Built strong habits around code versioning, agile planning, and cross-team collaboration.",
    "work.freelance.company": "Freelance",
    "work.freelance.period": "Jul 2021 - Oct 2021",
    "work.freelance.title": "Property Rental Management",
    "work.freelance.b1":
      "Built a CRUD application to replace an Excel-based rental management workflow for a private client.",
    "skills.languages": "Languages",
    "skills.frontend": "Frontend",
    "skills.backend": "Backend",
    "skills.infra": "Infra",
    "credentials.degree.label": "Bachelor of Computer Science",
    "credentials.degree.detail":
      "Universidade do Estado do Rio de Janeiro (UERJ), 2024",
    "credentials.aws.label": "AWS Certified Cloud Practitioner",
    "credentials.aws.detail": "Credential issued through Credly",
    "credentials.languages.label": "Languages",
    "credentials.languages.detail": "Portuguese native, English B2",
    "social.linkedin": "LinkedIn",
    "social.github": "GitHub",
  },
  pt: {
    "nav.work": "Trabalhos",
    "nav.skills": "Skills",
    "nav.credentials": "Credenciais",
    "nav.contact": "Contato",
    "nav.language": "EN",
    "hero.tag": "{role} em {location}",
    "hero.title":
      "Construindo interfaces de produto que fazem trabalho complicado parecer óbvio.",
    "hero.summary":
      "Desenvolvedor fullstack com foco em frontend web, criando aplicações complexas e orientadas a produto com React, Vue e Node.js. Gosto de transformar fluxos bagunçados em produtos confiáveis e úteis.",
    "hero.primaryCta": "Ver trabalhos",
    "hero.resumeCta": "Currículo PDF",
    "hero.linkedinCta": "LinkedIn",
    "hero.githubCta": "GitHub",
    "hero.portfolioLabel": "Portfólio",
    "hero.cardSummary":
      "Entrega com React, Vue, Node.js e AWS para times que precisam de software útil, sem cerimônia.",
    "hero.highlight1": "React, Vue, Next.js e TypeScript",
    "hero.highlight2": "Features com IA em produção",
    "hero.highlight3": "Portais B2B e backoffices",
    "hero.highlight4": "AWS Certified Cloud Practitioner",
    "section.work.eyebrow": "Trabalhos selecionados",
    "section.work.title":
      "Produtos entregues onde processo de negócio encontra capricho de interface.",
    "section.work.description":
      "Um tour compacto pelos projetos do currículo, reescritos como histórias de portfólio.",
    "section.skills.eyebrow": "Caixa de ferramentas",
    "section.skills.title":
      "Fullstack com peso em frontend e cloud suficiente para publicar com calma.",
    "section.skills.description":
      "O stack puxa para interfaces de produto, mas o trabalho cruza APIs, dados, AWS, dashboards e caminhos de deploy.",
    "section.credentials.eyebrow": "Credenciais",
    "section.credentials.title":
      "Base em ciência da computação, mais prática real com cloud.",
    "section.credentials.description":
      "Formação, certificação e contexto de idioma do currículo.",
    "section.contact.eyebrow": "Vamos construir",
    "section.contact.title":
      "Precisa de alguém que transite entre UI, produto e entrega?",
    "section.contact.email": "Me chamar por e-mail",
    "section.contact.resume": "Currículo PDF",
    "work.garantiabr.company": "Elevential",
    "work.garantiabr.period": "Set 2023 - Atual",
    "work.garantiabr.title": "GarantiaBr - Backoffice B2B",
    "work.garantiabr.b1":
      "Construí um backoffice para onboarding de empresas, departamentos, usuários e permissões.",
    "work.garantiabr.b2":
      "Refatorei fluxos de formulários em Django para suportar rascunho e upload de arquivos.",
    "work.garantiabr.b3":
      "Criei componentes reutilizáveis que viraram um design system compartilhado entre projetos.",
    "work.auren.company": "Elevential",
    "work.auren.period": "Set 2023 - Atual",
    "work.auren.title": "Auren - Plataforma de Comercialização de Energia",
    "work.auren.b1":
      "Troquei fluxo de planilha e e-mail por um portal B2B para mais de 30 parceiros.",
    "work.auren.b2":
      "Entreguei o frontend do zero e integrei acompanhamento em tempo real dos status de cotação.",
    "work.auren.b3":
      "Desenvolvi features de campanhas de marketing para aniversários e Black Friday.",
    "work.solucx.company": "Elevential",
    "work.solucx.period": "Set 2023 - Atual",
    "work.solucx.title": "Solucx - Dashboard de Feedback e Analytics",
    "work.solucx.b1":
      "Entreguei um chat com IA em produção, com histórico, favoritos e integração com backend.",
    "work.solucx.b2":
      "Adicionei itens configuráveis no dashboard com definição via prompt e JSON customizado.",
    "work.solucx.b3":
      "Usei JSONata e Highcharts para transformar e renderizar analytics definidos pelo usuário.",
    "work.tokenlab.company": "TokenLab",
    "work.tokenlab.period": "Out 2021 - Set 2023",
    "work.tokenlab.title": "Estagiário em Desenvolvimento Fullstack",
    "work.tokenlab.b1":
      "Atuei em frontend, backend, chat criptografado em tempo real, CMS e recursos mobile.",
    "work.tokenlab.b2":
      "Desenvolvi bons hábitos de versionamento, planejamento ágil e colaboração entre times.",
    "work.freelance.company": "Freelance",
    "work.freelance.period": "Jul 2021 - Out 2021",
    "work.freelance.title": "Gestão de Locação de Imóveis",
    "work.freelance.b1":
      "Criei um CRUD para substituir um fluxo de gestão imobiliária baseado em Excel.",
    "skills.languages": "Linguagens",
    "skills.frontend": "Frontend",
    "skills.backend": "Backend",
    "skills.infra": "Infra",
    "credentials.degree.label": "Bacharelado em Ciência da Computação",
    "credentials.degree.detail": "Universidade do Estado do Rio de Janeiro (UERJ), 2024",
    "credentials.aws.label": "AWS Certified Cloud Practitioner",
    "credentials.aws.detail": "Credencial emitida via Credly",
    "credentials.languages.label": "Idiomas",
    "credentials.languages.detail": "Português nativo, Inglês B2",
    "social.linkedin": "LinkedIn",
    "social.github": "GitHub",
  },
};
