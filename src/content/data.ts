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
  'I am a Senior Software Developer based in BC, Canada.',
  'I have been building web applications for over 6 years. I also contribute to open source projects, tutor college CS students privately and work on personal hack project on my free time.',
  'I currently work as a Senior Software Engineer at PolicyMe.',
  "If you’re interested in my open source contributions or/and my personal projects take a look at my GitHub profile or follow me on Twitter. If you’re interested in my professional work you can connect with me on LinkedIn or shoot me an email.",
]

export const experienceEntries: ExperienceEntry[] = [
  {
    company: 'PolicyMe',
    role: 'Senior Software Engineer',
    period: '2022 — Present',
    location: 'Toronto, Canada (remote)',
    highlights: [
      'Lead front-end architecture for digital life insurance products.',
      'Ship accessible, performant flows that help families get covered with confidence.',
    ],
  },
  {
    company: 'Open Source Community',
    role: 'Contributor & Maintainer',
    period: '2017 — Present',
    highlights: [
      'Collaborate on developer tooling and documentation improvements.',
      'Provide thoughtful code reviews and mentor new contributors.',
    ],
  },
  {
    company: 'Mentorship & Hack Projects',
    role: 'Tutor & Builder',
    period: 'Ongoing',
    highlights: [
      'Tutor college CS students privately to help them grow confidence.',
      'Prototype hack projects during personal time to explore new product ideas.',
    ],
  },
]

export const highlightProjects: Highlight[] = [
  {
    name: 'PolicyMe platform',
    description:
      'Scaling the customer journey for life insurance — from quoting to purchase — with an emphasis on reliability and clarity.',
    href: 'https://policyme.com/',
  },
  {
    name: 'Community teaching',
    description:
      'Mentoring emerging developers through private tutoring sessions focused on modern web practices.',
  },
  {
    name: 'Open source experiments',
    description:
      'Sharing personal hack projects and contributions that push interface polish and accessibility forward.',
    href: 'https://github.com/nnajiabraham?tab=repositories',
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
