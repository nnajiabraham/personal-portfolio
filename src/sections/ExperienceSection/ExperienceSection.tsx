import { experienceEntries } from '@/content/data'
import { EditorPane } from '@/components/EditorPane/EditorPane'

import styles from './ExperienceSection.module.css'

export function ExperienceSection() {
  return (
    <EditorPane id="experience" title="experience.ts" description="// selected work & impact">
      <div className={styles.interface}>
        <p className={styles.syntax}>export const experience: ExperienceEntry[] = [</p>
        <div className={styles.entries}>
          {experienceEntries.map((entry) => (
            <article key={`${entry.company}-${entry.role}`} className={styles.entry}>
              <header className={styles.entryHeader}>
                <h3 className={styles.company}>{entry.company}</h3>
                <p className={styles.role}>{entry.role}</p>
                <p className={styles.period}>{entry.period}</p>
                {entry.location ? <p className={styles.location}>{entry.location}</p> : null}
              </header>
              <ul className={styles.highlights}>
                {entry.highlights.map((highlight) => (
                  <li key={highlight}>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className={styles.syntax}>]</p>
      </div>
    </EditorPane>
  )
}
