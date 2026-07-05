# UI Fixes — Changes Log

Branch: `feature/responsive-ui`. Fixing horizontal scroll, dark strip beside navbar, and scroll-to-top on navigation.

## Done so far

1. **Scroll-to-top on route change**
   - New `src/Components/ScrollToTop.tsx` — resets `window.scrollTo(0,0)` on every path change.
   - Wired into `src/App.tsx` (rendered inside `<Router>`).
   - Fixes: clicking a project card (e.g. Haptix) now opens at the top instead of keeping the old scroll position.

2. **Dark strip right of the navbar / dark theme conflict** — `src/index.css`
   - Removed the Vite starter's dark `:root` background (`#242424`), dark button styles, link colors, and the `prefers-color-scheme: dark` block.
   - Set light background (`#f2f4f3`) on `:root`, `html`, `body` so nothing dark shows through.

3. **Global horizontal-scroll prevention** — `src/App.css`
   - `html, body { overflow-x: clip; max-width: 100%; }` (`clip` keeps the sticky navbar working).
   - `body { overflow-wrap: break-word; }` so long text wraps instead of overflowing.
   - `img, video { max-width: 100%; }` so media can't push the page wider than the viewport.

4. **Root cause of remaining horizontal scroll (Sentio, Home, Contact)** — `src/App.css` (which holds the `* { box-sizing: border-box }` reset) is **never imported** by the live app; only the dead `App copy.tsx` imports it. So the whole site ran with `content-box`, making every `width: 100%` + padding element overflow.
   - Moved the global rules into `src/index.css` (the one stylesheet actually loaded): `box-sizing: border-box` on `*`, `overflow-x: clip` + `max-width: 100%` on `html, body`, `overflow-wrap: break-word`, and `img/video { max-width: 100% }`.

5. **Product detail pages switched to light theme** — `src/pages/ProjectDetail.css`: reverted the temporary dark background; all `whitesmoke`/`white` text → `#263037` so it reads on white.

6. **Home responsive** — `src/pages/Home.css`: hero `h1`/tagline/subtext/section-title use `clamp()`; added `max-width: 768px` breakpoint to collapse the large `margin-left` offsets and stack the services grid.

7. **About timeline overflow** — `src/pages/About.css`: `.timeline-horizontal` `max-width: 80%` + `margin-left: 7rem` → `max-width: 100%; margin: 0 3rem`.

## Still to do

- Responsive navbar (hamburger) — currently overflows on mobile.
- Home page: clamp oversized hero text (`5rem` h1, `2.5rem`/`2rem`), fix hard-coded `margin-left` and `.services-grid width: 60%`.
- About page: fix `.timeline-horizontal` (`max-width: 80%` + `margin-left: 7rem` overflow) and hero margins.
- Contact: hide/reposition the absolutely-positioned spinning circle on small screens.
- `index.html`: fix `<title>` and broken `favicon` (`/vite.svg` 404).