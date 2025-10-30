import { aboutParagraphs } from '@/content/data'
import { EditorPane } from '@/components/EditorPane/EditorPane'

import styles from './AboutSection.module.css'

export function AboutSection() {
  const policyLine = aboutParagraphs[2]
  const [policyPrefix, policySuffix] = policyLine.split('PolicyMe')

  return (
    <EditorPane id="about" title="about.mdx">
      <ol className={styles.lines} aria-label="About Abraham Nnaji">
        {aboutParagraphs.map((paragraph, index) => {
          if (index === 2) {
            return (
              <li key={paragraph} className={styles.line}>
                <p>
                  {policyPrefix}
                  <a
                    className={styles.accentLink}
                    href="https://policyme.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    PolicyMe
                  </a>
                  {policySuffix}
                </p>
              </li>
            )
          }

          return (
            <li key={paragraph} className={styles.line}>
              <p>{paragraph}</p>
            </li>
          )
        })}
      </ol>
    </EditorPane>
  )
}
