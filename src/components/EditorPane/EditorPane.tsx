import type { ReactNode } from 'react'
import clsx from 'clsx'

import styles from './EditorPane.module.css'

type EditorPaneProps = {
  id: string
  title: string
  description?: string
  className?: string
  children: ReactNode
}

export function EditorPane({ id, title, description, className, children }: EditorPaneProps) {
  return (
    <section
      id={id}
      className={clsx(styles.pane, className)}
      aria-labelledby={`${id}-title`}
      tabIndex={-1}
    >
      <header className={styles.header}>
        <div className={styles.windowControls} aria-hidden="true">
          <span className={styles.dot} />
          <span className={styles.dot} />
          <span className={styles.dot} />
        </div>
        <div className={styles.meta}>
          <h2 className={styles.title} id={`${id}-title`}>
            {title}
          </h2>
          {description ? <p className={styles.description}>{description}</p> : null}
        </div>
      </header>
      <div className={styles.body}>{children}</div>
    </section>
  )
}
