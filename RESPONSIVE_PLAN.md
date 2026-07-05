# Responsive Plan — Full Device Coverage

Goal: every page looks intentional and works on **phone → tablet → laptop → large desktop / TV**. No horizontal scroll, no clipped or oversized text, no overlaps, sensible line lengths on big screens.

Branch: `feature/responsive-ui`.

---

## 0. Already fixed (baseline is solid)

- ✅ **Global `box-sizing: border-box`** + `overflow-x: clip` + `overflow-wrap: break-word` + `img/video { max-width:100% }` in `index.css` (the only imported global — `App.css` is dead). This alone killed most horizontal scroll.
- ✅ Dark-strip / Vite dark theme removed from `index.css`.
- ✅ `ScrollToTop` on route change.
- ✅ Product pages (`ProjectDetail`) switched to light theme.
- ✅ Home: hero/tagline/subtext/section-title use `clamp()`; `≤768px` breakpoint collapses big `margin-left`s, stacks services, shrinks skills.
- ✅ About: `.timeline-horizontal` overflow fixed.
- ✅ Sentio: width matched to project pages; meta panel evenly spaced (flex `space-between`).
- ✅ Navbar: order (HOME · PORTFOLIO · ABOUT · GALLERY · CONTACT) + clickable logo.
- ✅ Home portfolio button restyled + animated.

---

## 1. Standard breakpoints (apply consistently)

| Token | Query | Target |
|---|---|---|
| base | (mobile-first) | phones `< 480` |
| `sm` | `max-width: 480px` | small phones |
| `md` | `max-width: 768px` | tablets / large phones |
| `lg` | `max-width: 1024px` | small laptops |
| `xl` | `min-width: 1440px` | large desktop / TV |

Rules of thumb:
- Prefer `clamp()` for headings/spacing so they scale between breakpoints.
- Cap wide content with `max-width` + `margin:0 auto` so lines don't stretch on TV.
- Existing files use 640/768/900/600 — leave working ones, but new work targets **768** (primary) and **480** (fine-tune).

---

## 2. Per-component / per-page work

### 🔴 Navbar — highest priority (still not mobile-ready)
**Issues:** `font-size:1.5rem`, `gap:2rem`, 5 links + logo in one row → cramped/overflows on phones. No hamburger.
**How:**
- Add `useState` open/close + a hamburger `<button>` (3 spans) in `Navbar.tsx`; close menu on link click.
- CSS: `≥768` keep the row but shrink link font to ~`1.05rem`. `≤768` hide `.nav-links`, show hamburger; open state drops links into a full-width vertical dropdown under the bar (`position: absolute`, animated).
- Keep `position: sticky` + `z-index` above page content.

### 🔴 About — most fragile layout
**Issues:**
- `.about-hero` — `.hero-text` `margin-left:3rem` + `p max-width:70%`, `.hero-image max-width:30%`. On tablet/phone the image stays tiny and text keeps a big left margin.
- `.timeline-horizontal` — 3 items in a row with absolute dots/line; unreadable on phones.
- `.design-philosophy` — `h2` + `p` in a flex row; needs stacking.
- `.contact-cta h3` — long email + letter-spacing can overflow narrow phones.
- `.education { font-size: 5rem }` is a stray oversized value (only h2 saves it).
**How:**
- `≤768`: stack `.about-hero` (image `max-width:100%`/`width:60%` centered, remove text margins, `p max-width:100%`).
- `≤768`: switch `.timeline-horizontal` to **vertical** (`flex-direction:column`, left-aligned), convert the connecting line/dots to a vertical rail or hide the `::before` line.
- `≤768`: `.design-philosophy { flex-direction:column }`.
- `.contact-cta h3` → `clamp()` font-size + `overflow-wrap:anywhere`.
- Clean the `5rem` on `.education`.

### 🟠 Home — polish remaining
**Issues:**
- `.hero { height:100vh }` fixed — can clip content on short/landscape phones; `align-items: left` is invalid (should be `flex-start`).
- Very large screens: hero text spans full width; fine but could cap.
**How:**
- `height:100vh` → `min-height: 100svh`; fix `align-items: flex-start`.
- Optional `sm` (≤480) pass: smaller hero padding, full-width button.
- Verify skills logos row wraps cleanly at all widths (it does via `flex-wrap`).

### 🟠 Contact — spinning circle
**Issue:** `.circle-bottom-right { position:absolute; right:10%; top:60% }` with a 200px SVG overlaps the form on narrow screens.
**How:** `≤768` hide `.circle-bottom-right` (it's decorative, `pointer-events:none`) **or** shrink `size` + move below the form. Recommend hide `≤768`.

### 🟠 SentioApp — one layout bug + confirm
**Issue:** `.sa-hero` is `grid-template-columns: 1fr 1fr` but the hero image was removed, so text is squished into the left half with an empty right column.
**How:** make `.sa-hero` single column (drop the 2-col grid, or `grid-template-columns: 1fr`). Otherwise Sentio's own 900/600 breakpoints are good; already width-capped at 1200.

### 🟢 ProjectDetail — good, minor checks
- Two-col → column at 768 already. Check `.rotate-image` (rotated 270°) doesn't overflow on phones; constrain if needed. Video capped at 400px — fine.

### 🟢 Gallery — good
- Has `640` breakpoint, auto grid, lightbox scales. Optional: reduce `.gallery { padding: 4rem 4rem }` sides on tablet. Confirm lightbox close tap target ≥44px on phone.

### 🟢 Footer — good (stacks at 768). No change.

### ⚪ Global cosmetics
- `index.html`: set real `<title>` (e.g. "Roslyn Shaw-Kelly · Portfolio"); remove broken `/vite.svg` favicon (404) or add a real icon.
- Optional: extract palette (`#263037`, `#7ba6c8`, `#f5f5f5`, `#9EC7A9`) into `:root` CSS variables to make future edits safer. Not required for responsiveness.

---

## 3. Testing matrix

Test each route at **375 / 414 / 768 / 1024 / 1440 / 1920** (Chrome devtools responsive + a real refresh; `npm run dev`).

Per width, per page (`/`, `/portfolio`, `/portfolio/sentio-app`, `/portfolio/2`, `/about`, `/gallery`, `/contact`):
- [ ] No horizontal scrollbar.
- [ ] Navbar usable (hamburger `≤768`).
- [ ] Headings readable, not clipped/overflowing.
- [ ] No overlapping elements (spinning circle, timeline dots).
- [ ] Images/videos scale, never overflow; aspect ratios intact.
- [ ] Content not absurdly wide on 1440/1920 (max-width caps).
- [ ] Tap targets ≥ 44px on touch.
- [ ] Scroll resets to top when navigating.

---

## 4. Execution order & status

1. ✅ **Navbar** — hamburger toggle (`≤768` animated dropdown), desktop font shrunk to 1.2rem.
2. ✅ **About** — hero stacks, timeline goes vertical `≤768`, philosophy stacks, process steps stack, email clamped, stray `5rem` removed.
3. ✅ **Contact** — spinning circle hidden `≤768`, wrapper padding reduced.
4. ✅ **Home** — `min-height:100svh`, `align-items: flex-start`, `≤480` polish (full-width button, stacked skills).
5. ✅ **Sentio** — single-column hero (removed empty 2nd grid column).
6. ✅ **index.html** — real `<title>`, inline SVG favicon (no more `/vite.svg` 404).
7. ⬜ **Full testing pass** across the matrix (manual — needs your eyes in the browser).

Build: `npm run build` passes clean. All CSS work above is complete.

### Not in scope but worth noting
- **Image weight**: several assets are huge (`fronthaptix.png` 22MB, `Haptix.png` 10MB, `pro.png` 2.5MB). These hurt mobile load time badly. Recommend compressing/resizing (e.g. to ~1600px wide WebP). Separate task from layout responsiveness.
- Optional palette CSS variables (maintainability, not responsiveness).
