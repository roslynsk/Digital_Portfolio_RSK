# Codebase Analysis — Roslyn Digital Portfolio

> Context doc for future work. Focus: understanding the architecture so we can improve **responsive UI**.
> Written 2026-07-05. Branch: `feature/responsive-ui`.

---

## 1. What this is

A personal portfolio site for **Roslyn Shaw-Kelly**, a product / UX designer. Single-page React app, client-side routed, deployed to **GitHub Pages** at `https://roslynsk.github.io/Digital_Portfolio_RSK`.

## 2. Tech stack

| Concern | Choice |
|---|---|
| Framework | **React 19** (`react` / `react-dom` ^19.1.1) |
| Language | **TypeScript** ~5.8 (pages are `.tsx`) |
| Build tool | **Vite 7** (`@vitejs/plugin-react`) |
| Routing | **react-router-dom 7** (`BrowserRouter`) |
| Icons | `react-icons` (only `FaEnvelope`, `FaLinkedin` used in Footer) |
| Styling | **Plain CSS**, one `.css` file per component/page, imported directly. No Tailwind, no CSS-in-JS, no preprocessor. |
| Deploy | `gh-pages` package → `npm run deploy` builds and pushes `dist/` |

**Redux is installed (`@reduxjs/toolkit`, `react-redux`) but NOT used** by the live app — see dead files below.

### Scripts (`package.json`)
- `npm run dev` — Vite dev server
- `npm run build` — `tsc -b && vite build`
- `npm run deploy` — builds then `gh-pages -d dist`

### Important config
- `vite.config.ts` sets `base: '/Digital_Portfolio_RSK/'` (required for GH Pages subpath).
- `App.tsx` uses `<Router basename={import.meta.env.BASE_URL}>` so routes resolve under that base.
- `index.html` still has the default `<title>Vite + React + TS</title>` and `favicon href="/vite.svg"` (vite.svg isn't in the repo) — **cosmetic TODO**, not responsive.

## 3. App structure & routing

Entry: `src/main.tsx` → renders `<App />` in `<StrictMode>`, imports `./index.css`.

`src/App.tsx` is the shell: `<Navbar />` + `<main><Routes/></main>` + `<Footer />`.

Routes:
| Path | Component |
|---|---|
| `/` | `Home` |
| `/about` | `About` |
| `/gallery` | `Gallery` |
| `/portfolio` | `Portfolio` |
| `/contact` | `Contact` |
| `/portfolio/sentio-app` | `SentioApp` (bespoke case study, defined BEFORE `:id`) |
| `/portfolio/:id` | `ProjectDetail` (data-driven, id 1–5) |

Note: `VideoDetail.tsx` exists and is fully built but is **NOT wired into any route** in `App.tsx`. Gallery videos currently open in an in-page lightbox instead.

## 4. Directory layout

```
src/
  main.tsx            # entry
  App.tsx             # router + layout shell
  index.css           # Vite default globals (dark-mode :root, unused-ish)
  App.css             # real global styles (reset, .hero, .about, .contact, etc.)
  Components/
    Navbar.tsx/.css   # top nav (NOT responsive — see §6)
    Footer.tsx/.css   # footer w/ email + linkedin icons
  pages/
    Home.tsx/.css        # hero + featured work + skills + services + <Contact/>
    About.tsx/.css       # bio, education timeline, design process
    Portfolio.tsx/.css   # project grid (Product Design + UX/UI sections)
    ProjectDetail.tsx/.css   # data-driven detail page (projects 1–5)
    SentioApp.tsx/.css   # dedicated long-form UX case study
    Gallery.tsx/.css     # photos + videos, lightbox modal
    VideoDetail.tsx/.css # built but unrouted
    Contact.tsx/.css     # contact form (non-functional) + SpinningCircle
    SpinningCircle.tsx/.css  # animated SVG textPath circle
    Hero.tsx             # EMPTY FILE (0 bytes)
  assets/              # ~90 images (png/jpg/jpeg) + sentio_prototype.mp4
```

### Dead / leftover files (safe to ignore, candidates for deletion)
These are Redux-tutorial leftovers and duplicate entry points — none are imported by the live app (`main.tsx` → `App.tsx`):
- `src/store.js`, `src/Counter.js`, `src/counterSlice.js` — Redux counter tutorial. `store.js` imports a non-existent `../features/counter/counterSlice`.
- `src/index.js` — old CRA-style entry (imports `./App` and `./app/store`, neither the active path).
- `src/index.tsx` — another alt entry, unused (main.tsx is the real one).
- `src/App copy.tsx`, `src/App copy.css` — "first draft" copies.
- `src/pages/Hero.tsx` — empty.
- Root file named `npm` (0 bytes) — accidental, from a mistyped command.

## 5. Data model conventions

Content is **hardcoded as arrays of objects inside the components** (no CMS, no JSON, no fetch). Images are `import`ed at the top of each file so Vite fingerprints them.

- `Home.tsx` — `featuredProjects[]` (3 cards, each has `route`).
- `Portfolio.tsx` — `productDesignProjects[]` + `uxUiProjects[]`, typed `Project`. Cards navigate to `project.path || /portfolio/${id}`.
- `ProjectDetail.tsx` — big `projectData[]` (ids 1–5: Sentio, Airbuds, HaptiX, Cniotal, Penta Glow). Each has `title, subtitle, intro, images[], sections[]`, optional `videoUrl` (YouTube embed) and `coDesigners`. Renders a two-column layout: scrolling images left, sticky text right.
- `Gallery.tsx` — `photos[]` + `videos[]` (discriminated union `PhotoItem | VideoItem`). Also `export const videoProjects` (consumed by the unrouted `VideoDetail`). Has an Escape-to-close lightbox using `useState`/`useEffect`.
- `SentioApp.tsx` — no data array; fully hand-written JSX long-form case study (hero, meta panel, research, SUS score cards, iteration, reflection).

**Sentio appears twice**: as `/portfolio/sentio-app` (rich `SentioApp` page) AND as id 1 in `ProjectDetail`'s data. Home + Portfolio link to `/portfolio/sentio-app`; the id-1 record is effectively orphaned.

## 6. Styling system & the color palette

No design tokens / CSS variables. Colors are repeated as hex literals everywhere. The de-facto palette:
- `#f5f5f5` / `#F2F4F3` — light backgrounds
- `#263037` — near-black text / dark cards
- `#7ba6c8` — primary blue (logo, buttons, accents, footer bg)
- `#9EC7A9` — green accent (SentioApp only)
- `#727CA6` — a purple used in `App.css` `.portfolio-btn`

`index.css` is the **Vite starter default** (dark `:root`, `#242424` bg, `#646cff` links, `prefers-color-scheme` block). It's mostly overridden by `App.css` `body` (which sets `#F2F4F3` bg, `#263037` text, `font-size: 18px`, `Gotham` font stack that isn't actually loaded → falls back to sans-serif). Worth knowing these two global files partly conflict.

## 7. Responsive state — THE KEY AREA FOR NEXT SESSION

Only **6 files have media queries**, and coverage is uneven. This is where the work is.

| File | Media queries? | Notes |
|---|---|---|
| `Components/Navbar.css` | ❌ **NONE** | **Biggest gap.** Flex row, `font-size: 1.5rem`, `gap: 2rem`. No hamburger, no stacking, no collapse. Will overflow / crowd on mobile. |
| `pages/Home.css` | ❌ **NONE** | Hero `h1` is `5rem`, subtext `2rem`, buttons `2rem`. Hard-coded `margin-left: 50px / 3rem / 6rem / 7rem`. `.services-grid width: 60%`. `100vh` hero. All fixed — will break badly < ~900px. |
| `pages/About.css` | ❌ **NONE** | Hero `h1` `3.5rem` + `margin-left: 3rem`, image `max-width: 30%`. Horizontal education timeline with absolute-positioned dots/line + `margin-left: 7rem`. `.design-philosophy` and `.process-step` use flex but won't reflow well without breakpoints. |
| `pages/Contact.css` | ❌ **NONE** | `.circle-bottom-right` absolutely positioned at `right: 10%` — SpinningCircle (200px) can overlap the form on narrow screens. |
| `Components/Footer.css` | ✅ `max-width: 768px` | Stacks column + centers. Fine. |
| `pages/Portfolio.css` | ✅ `768px` | Grid 2-col → 1-col. Good baseline. |
| `pages/ProjectDetail.css` | ✅ `768px` | Two-col flex → column; sticky text → static. Good. |
| `pages/Gallery.css` | ✅ `640px` | Grid → 1-col, lightbox padding. Good. |
| `pages/VideoDetail.css` | ✅ `768px` | Widths → 100%. (But page is unrouted.) |
| `pages/SentioApp.css` | ✅ `900px` + `600px` | Best-handled page. Grids collapse progressively. |

### Responsive priorities (rough order)
1. **Navbar** — no mobile treatment at all. Needs a hamburger/drawer or wrapping+shrinking. Highest impact, touches every page.
2. **Home** — most content, zero breakpoints, largest fixed type & margins. Hero `100vh` + `5rem` h1 + `margin-left` hacks.
3. **About** — horizontal timeline is fragile; hero layout and fixed margins need breakpoints.
4. **Contact** — reposition/hide the absolutely-positioned spinning circle on small screens.
5. Global: consider a shared breakpoint scale (currently 640/768/900/600 are used inconsistently) and CSS variables for the palette to make responsive edits less error-prone.

### Patterns already in use (reuse these for consistency)
- `flex-wrap: wrap` for simple reflow (Home `.featured-grid`, About `.process-step`, VideoDetail storyboards).
- `grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))` in `App.css .gallery-grid` (nice auto-responsive pattern — could apply elsewhere).
- Breakpoint values seen: `640px`, `768px` (most common), `900px`, `600px`. **Recommend standardizing.**
- `rem`-based sizing throughout, but with large fixed values that don't scale down (candidates for `clamp()`).

## 8. Known quirks / gotchas
- `<meta name="viewport">` **is** present in `index.html` (good — required for responsive to work).
- `Gotham` font is referenced but not imported anywhere → always falls back to system sans-serif. About.css references `Montserrat` (also not loaded).
- `SpinningCircle` has `pointer-events: none` so it won't block the form, but can still visually overlap.
- Contact form has no `onSubmit` handler / backend — it's decorative.
- `.services-grid` in `App.css` (border 3px, width 60%) vs `Home.css` (border 2px `#7cb4be`, width 60%) — two definitions for overlapping selectors; `Home.css` loads after and wins on the shared page.
- Global `*` reset lives in `App.css`; a second reset-ish setup lives in `index.css`. Keep both in mind when adjusting global spacing.

## 9. Suggested approach for the responsive pass (for discussion next session)
- Add a **mobile nav** to `Navbar` first (state toggle + CSS, no new deps needed).
- Introduce a small set of shared breakpoints (e.g. 480 / 768 / 1024) and apply consistently.
- Convert the biggest fixed type (`5rem`, `3.5rem` headings) to `clamp()` so hero scales fluidly.
- Replace hard-coded `margin-left` offsets on Home/About with max-width containers + auto margins so they collapse cleanly.
- Optionally extract the palette into CSS custom properties in `App.css :root` to reduce churn.
