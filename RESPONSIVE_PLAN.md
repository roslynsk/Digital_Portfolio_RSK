# Responsive Plan — Full Device Coverage

Goal: the site works and looks intentional on **phone, tablet, laptop, and large/TV screens** — no horizontal scroll, no cramped or oversized text, no overlapping elements.

Branch: `feature/responsive-ui`.

---

## 1. Standard breakpoints (use these everywhere)

Code currently mixes `640 / 768 / 900 / 600`. Standardize on:

| Name | Width | Target |
|---|---|---|
| Base (mobile-first) | `< 480px` | phones |
| `sm` | `≥ 480px` | large phones |
| `md` | `≥ 768px` | tablets |
| `lg` | `≥ 1024px` | laptops |
| `xl` | `≥ 1440px` | large desktops |
| `xxl` | `≥ 1920px` | TV / very large |

Prefer `clamp()` for fonts/spacing so they scale *between* breakpoints instead of jumping. Cap content width on big screens (`max-width: 1400px; margin: 0 auto`) so lines don't stretch unreadably wide on a TV.

---

## 2. Global (mostly done)

- [x] `overflow-x: clip` on `html, body` (no horizontal scroll).
- [x] `img, video { max-width: 100% }`.
- [x] Light background fix (dark strip gone).
- [x] ProjectDetail restored to its own dark background.
- [ ] Reusable container in `App.css`: `.container { width:100%; max-width:1400px; margin:0 auto; padding-inline: clamp(1rem,4vw,4rem); }`.
- [ ] Replace hard-coded `margin-left` offsets (Home/About) with container/auto margins.
- [ ] Fluid type via `clamp()` for large headings.

---

## 3. Per-file work

### `Components/Navbar` — highest priority
- Hamburger toggle. `< md`: hide links, show hamburger, links drop into full-width dropdown. `≥ md`: current row, shrink font to ~`1.1rem`.

### `pages/Home.css` — most content, no breakpoints
- `.hero h1` `5rem` → `clamp(2rem,8vw,5rem)`; `.tagline` → `clamp(1.4rem,4vw,2.5rem)`; `.subtext` → `clamp(1rem,3vw,1.6rem)`.
- `.hero height:100vh` → `min-height:100vh` (use `100svh` on mobile).
- Kill `margin-left` on `.fronttext / .featured / .skills-header / .section-title` → container/`padding-inline`.
- `.services-grid width:60%` → `max-width:700px`, stack 1-col `< md`.
- `.skills-logos` shrink + wrap `< md`.

### `pages/About.css`
- `.timeline-horizontal` (`max-width:80%` + `margin-left:7rem` = overflow) → `max-width:100%; margin:0 auto`; go **vertical** `< md`.
- `.hero-text` margins + `max-width:70%` → full width `< md`; `.hero-image max-width:30%` → `100%` `< md`.
- `.design-philosophy` flex row → stack `< md`.

### `pages/Contact.css`
- `.circle-bottom-right` → hide `< md` (decorative) or reposition so it never overlaps the form.

### `pages/SentioApp.css` — mostly good
- Re-map 900/600 to `md`/`sm`; add large-screen `max-width` cap.

### `pages/ProjectDetail.css` — good baseline
- Two-col → column at 768 already. Verify sticky text + new dark bg on tablet/TV.

### `pages/Portfolio.css` — good
- 2→1 col at 768. Optional 3-col `≥ xl`.

### `pages/Gallery.css` — good
- Auto-fit grid fine. Check lightbox close tap target ≥ 44px on phone.

### `Components/Footer.css` — good (stacks at 768).

### `index.html`
- Fix `<title>`, remove broken `/vite.svg` favicon. Viewport meta already present.

---

## 4. Testing checklist

Test at **375 / 768 / 1024 / 1440 / 1920**:
- [ ] No horizontal scrollbar at any width.
- [ ] Navbar usable (hamburger `< md`).
- [ ] Headings readable, not clipped/overflowing.
- [ ] No overlaps (spinning circle, timeline dots).
- [ ] Images/videos scale, never overflow.
- [ ] Content not absurdly wide on TV (max-width cap).
- [ ] Touch targets ≥ 44px.

---

## 5. Order

1. Navbar → 2. Home → 3. About → 4. Contact → 5. Sentio/ProjectDetail/Portfolio/Gallery polish + large-screen caps → 6. index.html → 7. full breakpoint test.
