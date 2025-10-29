import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import App from '@/App'
import '@/index.css'
import {
  aboutParagraphs,
  experienceEntries,
  highlightProjects,
  navItems,
  socialLinks,
} from '@/content/data'

describe('App shell', () => {
  it('renders anchored sections and navigation links', () => {
    render(<App />)

    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()

    const navigation = screen.getByRole('navigation', { name: /primary/i })
    const links = within(navigation).getAllByRole('link')

    expect(links).toHaveLength(navItems.length)
    navItems.forEach((item) => {
      const linkMatcher = new RegExp(item.label, 'i')
      expect(within(navigation).getByRole('link', { name: linkMatcher })).toHaveAttribute(
        'href',
        `#${item.id}`,
      )
      expect(main.querySelector(`#${item.id}`)).not.toBeNull()
    })
  })

  it('supports mobile navigation toggle', async () => {
    render(<App />)
    const toggle = document.querySelector('button[aria-controls="primary-navigation"]')
    expect(toggle).not.toBeNull()
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await userEvent.click(toggle as HTMLButtonElement)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')

    const [aboutLink] = screen.getAllByRole('link', { name: /about/i })
    await userEvent.click(aboutLink)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(window.location.hash).toBe(`#about`)
  })

  it('exposes hero content and preserved about copy', () => {
    render(<App />)

    const heroHeadings = screen.getAllByRole('heading', { level: 1, name: /abraham nnaji/i })
    expect(heroHeadings.length).toBeGreaterThan(0)
    expect(screen.getAllByText(/Senior Software Engineer/i).length).toBeGreaterThan(0)

    const [ctaGroup] = screen.getAllByRole('group', { name: /primary actions/i })
    expect(within(ctaGroup).getByRole('link', { name: /view github/i })).toHaveAttribute(
      'href',
      'https://www.github.com/nnajiabraham',
    )
    expect(within(ctaGroup).getByRole('link', { name: /email me/i })).toHaveAttribute(
      'href',
      'mailto:hello@nnajiabraham.com',
    )

    const [mainElement] = screen.getAllByRole('main')
    const mainText = mainElement.textContent ?? ''
    const normalizedMainText = mainText.replace(/\s+/g, ' ')
    aboutParagraphs.forEach((paragraph) => {
      const normalizedParagraph = paragraph.replace(/\s+/g, ' ')
      expect(normalizedMainText).toContain(normalizedParagraph)
    })

    const [aboutSection] = screen.getAllByRole('region', { name: /about.mdx/i })
    const policyLink = within(aboutSection).getByRole('link', { name: /policyme/i })
    expect(policyLink).toHaveAttribute('href', 'https://policyme.com/')
  })

  it('renders social contact cards with accessible labels', () => {
    render(<App />)

    socialLinks.forEach(({ label, href }) => {
      const links = screen.getAllByRole('link', { name: label })
      expect(links.some((link) => link.getAttribute('href') === href)).toBe(true)
    })
  })

  it('lists experience and highlight entries', () => {
    render(<App />)

    experienceEntries.forEach(({ company, highlights }) => {
      const headings = screen.getAllByRole('heading', { level: 3, name: company })
      expect(headings.length).toBeGreaterThan(0)
      highlights.forEach((item) => {
        expect(screen.getAllByText(item, { exact: false }).length).toBeGreaterThan(0)
      })
    })

    highlightProjects.forEach(({ name, description }) => {
      expect(screen.getAllByText(name, { exact: false }).length).toBeGreaterThan(0)
      expect(screen.getAllByText(description, { exact: false }).length).toBeGreaterThan(0)
    })
  })

  it('defines global color tokens on the root element', () => {
    render(<App />)
    const cssText = Array.from(document.querySelectorAll('style'))
      .map((style) => style.innerHTML)
      .join('\n')

    expect(cssText).toContain('--color-background: #040b13')
    expect(cssText).toContain('--color-accent: rgb(133, 253, 153)')
  })

  it('includes footer technology credits', () => {
    render(<App />)
    const footerText = screen.getAllByText(/Built with/i)
    expect(footerText.some((node) => node.textContent?.includes('React + Vite'))).toBe(true)
  })
})
