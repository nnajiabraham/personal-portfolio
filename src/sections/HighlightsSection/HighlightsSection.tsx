import { highlightProjects } from '@/content/data'
import { EditorPane } from '@/components/EditorPane/EditorPane'

import styles from './HighlightsSection.module.css'

export function HighlightsSection() {
  return (
    <EditorPane id="highlights" title="highlights.json" description="// selected work-in-progress">
      <div className={styles.grid}>
        {highlightProjects.map((highlight, index) => (
          <article key={highlight.name} className={styles.card}>
            <span className={styles.index}>{String(index + 1).padStart(2, '0')}</span>
            <h3 className={styles.name}>{highlight.name}</h3>
            <p className={styles.description}>{highlight.description}</p>
            {highlight.href ? (
              <a className={styles.link} href={highlight.href} target="_blank" rel="noreferrer">
                View more
              </a>
            ) : null}
          </article>
        ))}
      </div>
    </EditorPane>
  )
}
