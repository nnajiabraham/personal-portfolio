import { socialLinks } from '@/content/data'
import { EditorPane } from '@/components/EditorPane/EditorPane'

import styles from './ContactSection.module.css'

export function ContactSection() {
  return (
    <EditorPane id="contact" title="contact.tsx" description="// let's build together">
      <p className={styles.copy}>
        Let&apos;s connect if you want to collaborate on accessible, human-centered web products or chat about engineering
        leadership.
      </p>
      <ul className={styles.grid}>
        {socialLinks.map(({ label, href, icon: Icon }) => (
          <li key={label} className={styles.item}>
            <a href={href} className={styles.card} aria-label={label}>
              <Icon aria-hidden="true" className={styles.icon} />
              <span>{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </EditorPane>
  )
}
