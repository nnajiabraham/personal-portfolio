import { heroContent } from '@/content/data'
import { EditorPane } from '@/components/EditorPane/EditorPane'
import clsx from 'clsx'

import styles from './HeroSection.module.css'

export function HeroSection() {
  const openingBrace = '{'
  const closingBrace = '}'
  const declaration = `const hello = () => ${openingBrace}`

  return (
    <EditorPane id="hero" title="hero.tsx" description="// terminal inspired introduction">
      <header className={styles.header}>
        <p className={styles.greeting}>{declaration}</p>
        <h1 className={styles.name}>{heroContent.name}</h1>
        <p className={styles.role}>{heroContent.role}</p>
        <p className={styles.location}>{heroContent.location}</p>
        <p className={styles.tagline}>{heroContent.tagline}</p>
        <p className={styles.closing}>{closingBrace}</p>
      </header>
      <div className={styles.actions} role="group" aria-label="Primary actions">
        {heroContent.actions.map(({ label, href, icon: Icon, variant = 'solid' }) => (
          <a
            key={label}
            className={clsx(styles.action, styles[variant])}
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noreferrer' : undefined}
          >
            <Icon className={styles.icon} aria-hidden="true" />
            <span>{label}</span>
          </a>
        ))}
      </div>
    </EditorPane>
  )
}
