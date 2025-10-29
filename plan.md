# Redesign & Migration Plan for nnajiabraham.com

## Research Findings: Current State Snapshot
- The project is a Create React App (React 16 + TypeScript) single-page application hosted on Netlify with inline styles and a minimal component set (`App`, `About`, `NavBar`). The other screen directories are unused/commented out. 【F:src/Screens/App.tsx†L1-L37】
- The hero/about section contains all copy that needs to be preserved verbatim (intro paragraphs, PolicyMe role, social/contact links). 【F:src/Screens/About/index.tsx†L39-L88】
- Styling is mostly inline with custom font-face declarations (Roboto Condensed, Oswald, Playfair Display). The visual theme is dark navy (`#040b13`) with neon green accents (`rgb(133, 253, 153)`). 【F:src/index.css†L1-L28】【F:src/Screens/About/index.tsx†L32-L83】
- Navigation uses client-side routing even though only the About page is active; this can be simplified for the redesigned one-pager. 【F:src/components/NavBar/index.tsx†L1-L46】【F:src/Screens/App.tsx†L1-L37】

## Vision & Objectives
1. **Modern Tooling**: Rebuild the SPA with Vite + React + TypeScript for faster dev experience while remaining deployable on Netlify.
2. **Design Overhaul**: Adopt a monospace, terminal-inspired layout that heavily references Ashley.dev—think structured panes, code-editor framing, and subtle line separators—while preserving existing color palette and content.
3. **Content Clarity**: Keep the site a single page with anchored sections (hero/about, experience, links) to avoid router overhead and streamline scroll navigation.
4. **Accessibility & Performance**: Improve semantic HTML, keyboard focus states, and responsive typography to serve both mobile and desktop elegantly.
5. **Testing Culture**: Introduce Vitest + React Testing Library to validate key UI components and interactions.

## Tooling & Libraries
- **Build & Dev**: Vite (React + TypeScript template), ESLint + Prettier, TypeScript path aliases.
- **Styling**: CSS Modules with design tokens (CSS variables) for colors/spacing, plus optional utility helpers via `clsx` for conditional classes.
- **Fonts**: Primary monospace "IBM Plex Mono" (via `@fontsource/ibm-plex-mono`) for body copy and UI; accent monospace "Space Mono" (via `@fontsource/space-mono`) for headings/logotype to reinforce the terminal aesthetic.
- **Icons**: `lucide-react` for GitHub, LinkedIn, Medium, Twitter, Mail icons—customizable stroke width aligns with editor-like visuals.
- **Testing**: `vitest`, `@testing-library/react`, `@testing-library/jest-dom`, `@testing-library/user-event` for interaction tests.
- **Tooling Support**: `vite-plugin-svgr` for inline SVG (if we import custom glyphs), `eslint-plugin-jsx-a11y` for accessibility linting.

## Design Language Inspired by Ashley.dev
- **Layout**: Two-column structure on desktop—left rail with name/logo and compact nav anchors, right pane mimicking a code editor (title bar, line numbers, content blocks). Collapse into a stacked layout on mobile with nav toggled via top button.
- **Sections**:
  - `Hero`: Name, title, location, short tagline, CTA buttons styled like command palette chips.
  - `About`: Convert paragraphs into syntax-highlighted "markdown preview" inside the code pane, using accent colors for emphasis (e.g., `PolicyMe` link styled like string literal).
  - `Experience Snapshot`: Simple table/list of roles/projects formatted like JSON/TypeScript interface (inspired by Ashley screenshot) using monospace alignment.
  - `Contact & Links`: Inline lucide icons displayed within bordered cards at the bottom, replicating Ashley’s social panel but tinted with existing neon green.
  - `Footer`: Minimal “Built with React + Vite” line referencing Ashley’s footer style, plus Netlify deployment note.
- **Color System**: Retain `#040b13` background, `rgb(133, 253, 153)` accents, off-white (`#E6F1FF`) for primary text, and introduce muted grays for dividers (#0E1622, #101826) to provide depth without deviating from brand.
- **Typography**: Use consistent monospace fonts with variations in weight/letter spacing to differentiate hierarchy while maintaining the hacker/terminal vibe.
- **Micro-interactions**: Smooth scroll for anchor links, focus outlines using accent color, subtle glow hover states inspired by neon green.

## Architecture & Component Plan
- `App.tsx`: Provide section-based layout with top-level CSS variables and `<main>` containing anchor-wrapped sections.
- `Header/SideNav`: Sticky column with navigation anchors (About, Experience, Projects/Highlights, Contact). On mobile, convert to collapsible sheet.
- `HeroSection`: Includes tagline and CTA buttons linking to email/GitHub; uses lucide icons.
- `AboutSection`: Render existing text in structured blocks with accent highlight for `PolicyMe` link.
- `ExperienceSection`: Display selected career & side projects using Ashley-style pseudo code (e.g., interface definitions) with data stored in JSON for reuse/testing.
- `Projects/HighlightsSection`: Optional curated list of OSS contributions or personal projects (data-driven cards) if desired—still single page.
- `ContactSection`: Social links grid using lucide icons and accessible labels.
- `Footer`: Minimal note referencing inspiration + tech stack.
- Global `ThemeProvider` (simple context or tokens) to centralize colors and spacing.

## Migration Approach
1. Archive the current CRA implementation (including `src`, `public`, config files) after extracting all content/assets needed for the Vite rebuild, then prune legacy files so the repository only contains the new Vite scaffold and shared assets like this `plan.md`.
2. Create new Vite project structure (`src/main.tsx`, `src/App.tsx`, `index.html`).
3. Port content from current CRA components, adapting to new componentized sections.
4. Replace inline styles with modular CSS (`.module.css`) or `styled` solution; leverage CSS variables for theme.
5. Integrate fonts via `@fontsource` imports in `main.tsx`/global stylesheet.
6. Install and use `lucide-react` icons for social actions.
7. Configure ESLint + Prettier with TypeScript-aware rules.
8. Set up Vitest, React Testing Library, and coverage thresholds.
9. Ensure `package.json` retains Netlify-compatible scripts (`build`, `start`, `serve`) mapped to the new Vite commands so existing deployment automation keeps functioning.
10. Update Netlify configuration (if necessary) to align with Vite build output (`npm run build` -> `dist`).

## Testing Strategy with Vitest
- Create `vitest.config.ts` with JSX transform + alias resolution.
- Add `setupTests.ts` importing `@testing-library/jest-dom`.
- Use `npm run test` script hooking into Vitest watch mode.
- Introduce component-level tests verifying content rendering, navigation anchors, responsive toggles (simulate with CSS class toggles), and accessibility attributes.
- Add snapshot-style tests sparingly; prefer DOM queries.

## Checklist & Associated Tests
- [ ] Remove legacy CRA scaffold and confirm repository only contains Vite-ready structure plus preserved assets/content.
  - Tests to add:
    - [ ] Confirm obsolete CRA-specific files (`src/index.tsx`, `public/index.html`, service worker) are removed after migration.
    - [ ] Verify `package.json` retains Netlify-required scripts (`build`, `start`, `serve`) pointing to Vite commands.
- [ ] Initialize Vite + React + TypeScript scaffold, migrate assets, and configure absolute imports.
  - Tests to add:
    - [ ] Ensure `App` renders without crashing and contains anchor sections (`getByRole('main')`).
    - [ ] Verify global CSS variables for colors are applied (`getComputedStyle` via JSDOM). 
- [ ] Implement sticky header/side navigation with smooth scroll anchors and mobile toggle.
  - Tests to add:
    - [ ] Navigation renders all expected section links with correct `href` targets.
    - [ ] Simulated click updates `location.hash` or triggers scroll callback.
    - [ ] Mobile toggle button toggles `aria-expanded` state.
- [ ] Build hero/about sections with monospace typography and preserved copy in code-pane styling.
  - Tests to add:
    - [ ] Hero renders full name, role, and CTA buttons with lucide icons.
    - [ ] About section retains PolicyMe link with correct URL and accent class.
    - [ ] Snapshot test (or DOM assertion) ensuring paragraphs match original text content.
- [ ] Create experience/projects pseudo-code section with data-driven content.
  - Tests to add:
    - [ ] Renders interface headers and entries derived from JSON data.
    - [ ] Each role entry exposes company name and role text.
    - [ ] Ensure section supports keyboard navigation (e.g., headings are focusable anchors).
- [ ] Assemble contact/social footer inspired by Ashley.dev with lucide icons and accessible labels.
  - Tests to add:
    - [ ] Social buttons render with `aria-label` and correct `href` values (GitHub, LinkedIn, Medium, Twitter, Email).
    - [ ] Footer text references React + Vite build stack.
    - [ ] Validate icons have focus outlines visible via CSS class.
- [ ] Configure CI-ready scripts (format, lint, test) and update documentation (README deployment notes, font usage).
  - Tests to add:
    - [ ] Lint script executes (can be validated via CI pipeline).
    - [ ] `npm run build` passes using Vite (integration test/CI check).
    - [ ] README contains updated commands (link check or unit test verifying presence of sections if desired).

## Deliverables
- Reorganized codebase under Vite with modular components.
- Updated styling assets (CSS Modules, fonts, icons) aligned with Ashley-inspired monospace aesthetic.
- Vitest + RTL test suite covering navigation, content rendering, and accessibility-critical behaviors.
- Documentation updates (`README`, `plan.md` progress tracking) and Netlify build command adjustments (`npm run build` -> `vite build`).

