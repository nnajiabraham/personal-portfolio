import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        Built with <span>React</span> + <span>Vite</span> · Deployed on <span>Netlify</span> · Inspired by <a href="https://ashley.dev/" target="_blank" rel="noreferrer">Ashley.dev</a>
      </p>
    </footer>
  )
}
