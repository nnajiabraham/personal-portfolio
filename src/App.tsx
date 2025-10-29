import { useState } from 'react'
import clsx from 'clsx'

import { Footer } from '@/components/Footer/Footer'
import { navItems } from '@/content/data'
import { AboutSection } from '@/sections/AboutSection/AboutSection'
import { ContactSection } from '@/sections/ContactSection/ContactSection'
import { ExperienceSection } from '@/sections/ExperienceSection/ExperienceSection'
import { HeroSection } from '@/sections/HeroSection/HeroSection'
import { HighlightsSection } from '@/sections/HighlightsSection/HighlightsSection'

import styles from './App.module.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleToggleNav = () => {
    setIsMenuOpen((open) => !open)
  }

  const handleNavClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <div className={styles.wrapper}>
      <a className={styles.skipLink} href="#main-content">
        Skip to main content
      </a>
      <aside className={styles.sidebar}>
        <div className={styles.identity}>
          <span className={styles.identityLabel}>Abraham Nnaji</span>
          <p className={styles.identityRole}>Senior Software Engineer</p>
          <p className={styles.identityMeta}>Monospace web, neon green heart.</p>
        </div>
        <button
          type="button"
          className={styles.menuButton}
          onClick={handleToggleNav}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
        >
          <span aria-hidden="true" className={styles.menuIcon} />
          Menu
        </button>
        <nav
          id="primary-navigation"
          className={clsx(styles.navigation, isMenuOpen && styles.navigationOpen)}
          aria-label="Primary"
        >
          <ol>
            {navItems.map((item, index) => (
              <li key={item.id}>
                <a href={`#${item.id}`} onClick={handleNavClick}>
                  <span className={styles.navIndex}>{String(index + 1).padStart(2, '0')}</span>
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </aside>
      <main className={styles.main} id="main-content">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <HighlightsSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  )
}

export default App
