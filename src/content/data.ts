import { Github, Linkedin, Mail, PenSquare, Twitter } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type HeroAction = {
  label: string
  href: string
  icon: LucideIcon
  variant?: 'solid' | 'ghost'
}

type HeroContent = {
  name: string
  role: string
  location: string
  tagline: string
  actions: HeroAction[]
}

type ExperienceEntry = {
  company: string
  role: string
  period: string
  location?: string
  highlights: string[]
}

type Highlight = {
  name: string
  description: string
  href?: string
}

type SocialLink = {
  label: string
  href: string
  icon: LucideIcon
}

export const heroContent: HeroContent = {
  name: 'Abraham Nnaji',
  role: 'Senior Software Engineer',
  location: 'Based in BC, Canada',
  tagline:
    'I build thoughtful web experiences, ship resilient front-end systems, and mentor engineers to do their best work.',
  actions: [
    {
      label: 'View GitHub',
      href: 'https://www.github.com/nnajiabraham',
      icon: Github,
      variant: 'solid',
    },
    {
      label: 'Email me',
      href: 'mailto:hello@nnajiabraham.com',
      icon: Mail,
      variant: 'ghost',
    },
  ],
}

export const aboutParagraphs = [
  'Senior Software Engineer focused on building and scaling high-performance web and cloud platforms.',
  'I combine hands-on architecture leadership with mentoring to deliver mission-critical systems and elevate developer experience.',
  'Currently leading cross-functional initiatives at PolicyMe, modernizing payments, accessibility, and developer workflows.',
  'I share knowledge through internal LLM sessions, guild projects, and collaborative tooling that keeps teams shipping with confidence.',
]

export const experienceEntries: ExperienceEntry[] = [
  {
    company: 'PolicyMe',
    role: 'Senior Software Engineer',
    period: 'Feb 2023 — Present',
    location: 'Toronto, ON (Remote)',
    highlights: [
      'Directed the migration from a legacy payment provider to Stripe with near-zero downtime and streamlined financial workflows.',
      'Re-architected pricing and storage into secure multi-tenant systems that power large-scale B2B2C insurance partnerships.',
      'Led accessibility, design system, and developer experience initiatives that improved velocity and onboarding across teams.',
    ],
  },
  {
    company: 'BioRender (Science Suite Inc.)',
    role: 'Full-Stack Software Engineer',
    period: 'Jun 2021 — Feb 2023',
    location: 'Toronto, ON (Remote)',
    highlights: [
      'Redesigned the enterprise client admin panel for licensing and plan management.',
      'Migrated core applications from Heroku to AWS via CDK with zero downtime.',
      'Built observability dashboards and performance alerts to enhance reliability.',
    ],
  },
  {
    company: 'Benevity Inc.',
    role: 'Full-Stack Software Engineer',
    period: 'Jun 2020 — Jun 2021',
    location: 'Victoria, BC (Remote)',
    highlights: [
      'Developed PeerMatch features enabling peer-matched donations for enterprise clients.',
      'Maintained performant REST APIs and AWS integrations for the donations platform.',
      'Integrated monitoring tooling to uphold SLAs and operational reliability.',
    ],
  },
  {
    company: 'SkipTheDishes',
    role: 'Full-Stack Software Engineer',
    period: 'Feb 2018 — Jun 2020',
    location: 'Winnipeg, MB',
    highlights: [
      'Built real-time metrics dashboards for operational management teams using Java, React, and Elasticsearch.',
      'Implemented event-driven automations that coordinated live issue response across services and support teams.',
      'Re-architected the client-facing web application with modular TypeScript, authentication failover, and CI/CD automation.',
    ],
  },
]

export const highlightProjects: Highlight[] = [
  {
    name: 'Stripe migration',
    description:
      'Led PolicyMe’s transition from a legacy processor to Stripe, delivering near-zero downtime and smoother financial operations.',
    href: 'https://policyme.com/',
  },
  {
    name: 'Multi-tenant infrastructure',
    description:
      'Architected secure storage and pricing systems that unlocked large-scale B2B2C insurance partnerships.',
  },
  {
    name: 'Accessibility & design systems',
    description:
      'Spearheaded semantic testing, feature toggles, and UI automation that modernized the platform experience.',
  },
  {
    name: 'Developer experience leadership',
    description:
      'Championed DevX guild projects and internal LLM sessions, cultivating a culture of experimentation and learning.',
  },
]

export const socialLinks: SocialLink[] = [
  {
    label: 'GitHub',
    href: 'https://www.github.com/nnajiabraham',
    icon: Github,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/nnajiabraham',
    icon: Linkedin,
  },
  {
    label: 'Medium',
    href: 'https://www.medium.com/@nnajiabraham',
    icon: PenSquare,
  },
  {
    label: 'Twitter',
    href: 'https://www.twitter.com/nnajiabraham',
    icon: Twitter,
  },
  {
    label: 'Email',
    href: 'mailto:hello@nnajiabraham.com',
    icon: Mail,
  },
]

export const navItems = [
  { id: 'hero', label: 'Hello' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'highlights', label: 'Highlights' },
  { id: 'contact', label: 'Contact' },
] as const
