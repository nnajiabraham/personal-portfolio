## Personal site redesign and migration plan

Goal: keep the site a simple, fast, one‑pager SPA, migrate from CRA to Vite + React + TypeScript, and redesign the UI in a clean "monospace web" style inspired heavily by `ashley.dev` while preserving the current color palette and content.

---

### 1) Current state (audit)
- Build/runtime: Create React App (react-scripts 3.4.1), React 16.13, TS 3.7, React Router v5 (only one route actually used).
- Structure: `Screens/App.tsx` renders only `About` with a top `NavBar`. Everything is inline-styled TypeScript objects.
- Fonts: Oswald, Roboto Condensed, Playfair Display (non‑monospace).
- Colors:
  - Background: `#040B13` (nearly black-blue)
  - Text: `#FFFFFF`
  - Accent: `rgb(133, 253, 153)` (neon green)
- Assets: custom SVGs for GitHub/LinkedIn/Medium/Twitter.
- Hosting: Netlify (SPA).

Implication: The content is minimal and static; we can eliminate the router and keep a single page with accessible sections.

---

### 2) Target stack and libraries
- Build: Vite + React 18 + TypeScript 5
- Testing: Vitest + @testing-library/react + @testing-library/user-event + @testing-library/jest-dom + jsdom
- Lint/format: ESLint (typescript + react), Prettier
- Icons: `lucide-react` (GitHub, Linkedin, Twitter). For Medium, use a local SVG fallback (existing icon) or map to `BookOpenText` as a design choice.
- Styling: CSS Modules with CSS variables tokens for colors; small utility classes via PostCSS nesting. No framework to keep control of the monospace look.
- Fonts (monospace only): primary `IBM Plex Mono`, secondary `JetBrains Mono` (self-host or Google Fonts). Fallback stack: `ui-monospace, SFMono-Regular, Menlo, Consolas, 'Liberation Mono', monospace`.
- Accessibility: focus styles, semantic headings, visible labels, prefers-reduced-motion support.

---

### 3) Visual direction (inspired by ashley.dev, adapted to current brand)
- Two-column layout on desktop, stacked on mobile.
  - Left "bio card" panel with avatar placeholder, name, role, location, and social icon buttons.
  - Right "editor panel" with a tab strip (About, Projects, etc.). For now, only "about" is implemented. Panel looks like a code editor with line numbers and monospace typography.
- Subtle terminal widget at the bottom-left showing an example command like `npx nnajiabraham` with a copy-to-clipboard action.
- Preserve colors: dark background `#040B13`, white text, neon-green accent for interactive items, borders, and focus rings.
- Motion: tiny fade/slide; reduce motion when `prefers-reduced-motion`.

---

### 4) Information architecture and content mapping
- Keep all existing copy and links intact (About text, PolicyMe link, GitHub/LinkedIn/Medium/Twitter).
- Replace large name marquee with a strong monospace name header within the editor panel header.
- Optional: expose email via copy action rather than visible address.

---

### 5) File structure (post-migration)
```
/ (repo)
  ├─ index.html
  ├─ vite.config.ts
  ├─ tsconfig.json
  ├─ package.json
  ├─ public/
  │   └─ _redirects   # SPA fallback for Netlify (/* /index.html 200)
  └─ src/
      ├─ app/
      │   ├─ App.tsx
      │   └─ layout.css
      ├─ features/
      │   └─ editor/
      │       ├─ EditorPanel.tsx
      │       ├─ TabStrip.tsx
      │       └─ editor.module.css
      ├─ components/
      │   ├─ BioPanel.tsx
      │   ├─ SocialIcon.tsx
      │   └─ TerminalCard.tsx
      ├─ styles/
      │   ├─ tokens.css    # CSS variables for colors and spacing
      │   └─ global.css    # font-face, resets
      ├─ assets/
      │   └─ medium.svg    # fallback Medium icon
      ├─ test/
      │   ├─ setup.ts
      │   └─ __snapshots__/  # optional
      └─ main.tsx
```

---

### 6) Color and typography tokens
```css
:root {
  --bg: #040B13;
  --fg: #FFFFFF;
  --accent: rgb(133, 253, 153);
  --muted: #9AA4AE;
  --panel: #0B1520;    /* slightly lifted background */
  --border: #0F1E2C;   /* hairline borders */
}

:root { --font-mono: 'IBM Plex Mono', 'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Consolas, 'Liberation Mono', monospace; }
```

---

### 7) Migration steps (CRA ➜ Vite)
1. Initialize Vite in-place
   - `npm i -D vite @vitejs/plugin-react vitest @testing-library/react @testing-library/user-event @testing-library/jest-dom jsdom eslint prettier eslint-config-prettier eslint-plugin-react eslint-plugin-react-hooks @types/node`
   - `npm i react react-dom`
2. Create `vite.config.ts` with React plugin and Vitest config:
   ```ts
   import { defineConfig } from 'vite';
   import react from '@vitejs/plugin-react';
   export default defineConfig({
     plugins: [react()],
     test: {
       globals: true,
       environment: 'jsdom',
       setupFiles: './src/test/setup.ts',
       css: true,
     },
   });
   ```
3. Replace CRA entry with Vite:
   - `src/main.tsx` uses `createRoot` and renders `<App />`.
   - `index.html` contains the `#root` and loads `/src/main.tsx`.
   - Remove `serviceWorker.ts` (not needed) and React Router (single-page without routes).
4. Styles
   - Move global font-face and reset to `src/styles/global.css`.
   - Add `src/styles/tokens.css` for design tokens.
5. Icons
   - `npm i lucide-react` and use `Github`, `Linkedin`, `Twitter` icons.
   - Keep `assets/medium.svg` as fallback for Medium.
6. Netlify
   - Add `public/_redirects` with `/* /index.html 200`.
7. Scripts in `package.json`
   - `dev: vite`, `build: vite build`, `preview: vite preview`, `test: vitest`, `lint: eslint .`.

---

### 8) Component plan
- `BioPanel`
  - Shows name, title, location, brief bio paragraph(s), PolicyMe link styled with accent, and stacked social buttons.
- `EditorPanel`
  - Tab strip with a single tab: `about.ts`. File-like header (● ● ●), line numbers, and code-styled content that mirrors the About copy.
- `TerminalCard`
  - Small card with command `npx nnajiabraham` and a copy button; shows a toast/aria-live message when copied.
- `SocialIcon`
  - Wrapper around Lucide icons or SVG fallback, with accessible labels and focus states.

---

### 9) Accessibility and UX
- Keyboard navigable, visible focus rings using `--accent`.
- All external links: `rel="noopener noreferrer"` and `target="_blank"`.
- `aria-label` for icon buttons and copy actions.
- Reduce animations for `prefers-reduced-motion`.

---

### 10) Testing strategy (Vitest + RTL)
Create tests per feature; examples below. All examples assume `@testing-library/jest-dom` is set up in `src/test/setup.ts`.

- App bootstrap
  - renders without crashing
  - global tokens applied to `body` and panels
- BioPanel
  - renders name and role text
  - PolicyMe link exists, has `href` to `https://policyme.com/`, opens in new tab
  - location and intro paragraphs render
- Social links
  - GitHub/LinkedIn/Twitter/Medium icon buttons exist with accessible names
  - each button points to the expected profile URL
  - keyboard focus order matches visual order
- EditorPanel
  - tab strip renders with `about.ts` active by default
  - line numbers column present; content uses monospace font family
  - responsive: panel stacks under BioPanel at `<= 768px` (test via container width)
- TerminalCard
  - shows command text `npx nnajiabraham`
  - clicking copy writes to clipboard (mock `navigator.clipboard.writeText`)
  - shows confirmation message in an aria-live region
- Accessibility
  - no obvious a11y violations in key components (optional: `vitest-axe`)
- Snapshot/visual stability (optional)
  - snapshot the `EditorPanel` header and TabStrip rendering

---

### 11) Checklist of implementation tasks with test items
- [ ] Initialize Vite + React + TS and Vitest
  - Tests to write:
    - [ ] App renders root without errors
    - [ ] `document.body` has `--bg` applied
- [ ] Add tokens and global styles; wire monospace fonts
  - Tests:
    - [ ] Computed style of body uses `--bg` and `--fg`
    - [ ] A code element uses `--font-mono`
- [ ] Build BioPanel with current content and links
  - Tests:
    - [ ] Name, title, paragraphs render
    - [ ] PolicyMe link has correct `href` and rel/target
- [ ] Replace SVGs with lucide-react icons and Medium fallback
  - Tests:
    - [ ] Icon buttons have accessible labels
    - [ ] Each icon opens correct URL
- [ ] Build EditorPanel with tabbed header and line numbers
  - Tests:
    - [ ] `about.ts` tab is active by default
    - [ ] Line numbers column renders 1..N
- [ ] Build TerminalCard with copy-to-clipboard
  - Tests:
    - [ ] Clicking copy calls `navigator.clipboard.writeText`
    - [ ] Confirmation message is rendered to aria-live
- [ ] Responsive layout and motion preferences
  - Tests:
    - [ ] Layout stacks on small width
    - [ ] Animations disabled under `prefers-reduced-motion`
- [ ] Netlify SPA redirect
  - Tests:
    - [ ] `_redirects` file exists with expected rule

---

### 12) Risks and trade-offs
- Medium icon is not part of lucide; we will keep a local SVG for accuracy, or substitute with a generic article icon for visual consistency.
- Removing router simplifies the app but eliminates path-based navigation; acceptable for a true one‑pager.
- Self-hosting fonts improves consistency but slightly increases payload; set `font-display: swap`.

---

### 13) Rollout
1. Land plan (this document).
2. Create a feature branch for implementation.
3. Implement migration + components in small commits with passing tests.
4. Deploy preview on Netlify; verify on mobile and desktop.
5. Ship to production after review.

---

### 14) References
- Design inspiration: `ashley.dev` (clean one‑pager with editor + terminal motifs)
- Libraries: `vite`, `@vitejs/plugin-react`, `vitest`, `@testing-library/*`, `lucide-react`.
