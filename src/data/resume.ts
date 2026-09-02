export const profile = {
  name: 'Lucas Tavares',
  role: 'Fullstack Developer',
  location: 'Rio de Janeiro, Brazil',
  email: 'lucas.spo.tavares@gmail.com',
  phone: '+55 21 98287-7576',
  linkedin: 'https://linkedin.com/in/lucas-tavares-08581920a',
  github: 'https://github.com/lucas-spo-tavares',
  resumeUrl: '/Resume.pdf',
};

export function resolveLocale(locale: string) {
  return locale.toLowerCase().startsWith('pt') ? ('pt' as const) : ('en' as const);
}

export const highlightIds = [
  'hero.highlight1',
  'hero.highlight2',
  'hero.highlight3',
  'hero.highlight4',
] as const;

export type HighlightId = (typeof highlightIds)[number];

export const projects = [
  {
    id: 'auren-smart',
    stack: ['Vue 3', 'AWS RUM', 'Git'],
    bullets: ['b1', 'b2', 'b3', 'b4'],
  },
  {
    id: 'garantiabr',
    stack: ['Next.js', 'Django', 'shadcn/ui'],
    bullets: ['b1', 'b2', 'b3'],
  },
  {
    id: 'auren',
    stack: ['Vue', 'PrimeVue', 'Salesforce'],
    bullets: ['b1', 'b2', 'b3'],
  },
  {
    id: 'solucx',
    stack: ['Vue', 'Element Plus', 'Highcharts', 'CodeMirror', 'JSONata'],
    bullets: ['b1', 'b2', 'b3'],
  },
  {
    id: 'tokenlab',
    stack: ['Angular', 'AWS', 'GraphQL', 'Flutter', 'Strapi'],
    bullets: ['b1', 'b2'],
  },
  {
    id: 'freelance',
    stack: ['Next.js', 'Semantic UI', 'Back4app', 'Vercel'],
    bullets: ['b1'],
  },
] as const;

export type Project = (typeof projects)[number];

export const skillGroups = [
  {
    id: 'languages',
    items: ['JavaScript', 'TypeScript', 'Python', 'SQL', 'Dart', 'HTML', 'CSS', 'Shell'],
  },
  {
    id: 'frontend',
    items: ['React', 'Next.js', 'Vue', 'Angular', 'Tailwind', 'shadcn/ui', 'PrimeVue'],
  },
  {
    id: 'backend',
    items: ['Node.js', 'Nest.js', 'Express', 'Django', 'TypeORM'],
  },
  {
    id: 'infra',
    items: ['AWS', 'Docker', 'GitHub', 'Bitbucket', 'GraphQL', 'REST', 'Linux'],
  },
] as const;

export type SkillGroup = (typeof skillGroups)[number];

export type Credential =
  | {
      id: 'degree';
    }
  | {
      id: 'aws';
      href: string;
    }
  | {
      id: 'languages';
      href: string;
    };

export const credentials: ReadonlyArray<Credential> = [
  {
    id: 'degree',
  },
  {
    id: 'aws',
    href: 'https://www.credly.com/badges/133ee89f-3ddb-4972-ab47-3abb559f8ef2/',
  },
  {
    id: 'languages',
    href: 'https://cert.efset.org/pt/rYd4yM',
  },
];
