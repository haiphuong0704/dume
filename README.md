# Petcare Spa — Static Website

Premium pet wellness brand. Vanilla HTML/CSS/JS static site deployed on Vercel.

---

## Stack

- **HTML** — 16 pages, each with a dedicated CSS file
- **CSS** — `global.css` (all pages) + `style.css` (homepage only) + per-page stylesheets
- **JS** — `global.js` (all pages) + per-page scripts
- **Deploy** — Vercel (static), routes defined in `vercel.json`
- **Fonts** — Playfair Display (display/brand) + Manrope (body) via Google Fonts

---

## Pages & Routes

| Route | File | Notes |
|---|---|---|
| `/` | `index.html` | Homepage — loads `style.css` + `global.css` |
| `/luxe-services` | `services.html` | Services catalog |
| `/shop` | `shop.html` | Product shop |
| `/product` | `product.html` | Single product detail |
| `/booking` | `booking.html` | Multi-step booking wizard |
| `/membership` | `member.html` | Membership dashboard/info |
| `/wellness` | `wellness.html` | Wellness plans |
| `/blog` | `blog.html` | Blog index |
| `/blog-post` | `blog-post.html` | Article template (static demo) |
| `/about-us` | `about-us.html` | About page |
| `/contact-us` | `contact-us.html` | Contact + FAQ |
| `/spa-bites` | `spa-bites.html` | Blog/journal |
| `/policy` | `policy.html` | Policies |
| `/terms` | `terms.html` | Terms of service |

**Standalone pages** (no global nav — accessed via direct `.html` path):

| File | Purpose |
|---|---|
| `membership.html` | Membership signup wizard (linked from `member.html`) |
| `appointment-booking.html` | Appointment booking flow (alternative booking UI) |
| `404.html` | Auto-used by Vercel for 404 errors |

---

## CSS Architecture

`global.css` loads on every page. `style.css` loads additionally on `index.html` and `appointment-booking.html`.

> **Important:** `style.css` loads *after* `global.css` on the homepage, so any duplicate selector in `style.css` silently overrides `global.css` on the homepage only. When updating shared footer/component styles in `global.css`, check for matching blocks in `style.css` and sync them.

CSS version cache-busting uses query strings (e.g., `global.css?v=78`). All file I/O involving non-ASCII characters must use explicit UTF-8 encoding (`[System.IO.File]::ReadAllText` / `WriteAllText` with `UTF8` encoding on Windows).

---

## Asset Structure

```
assets/
  icons/         → SVG icons (messenger, whatsapp, zalo used by global.js)
  images/
    hero/        → Hero section images
    petfood/     → Pet food product images
    products/    → Product card images
    services/    → Services page images
    testimonials/→ Testimonial avatars
    blog/        → Blog post images (reserved for content)
    support/     → Support/team images (reserved)
    auth/        → Auth page images (reserved)
    misc/        → Miscellaneous
```

---

## Key Systems

- **Cart** — `cart.js` — localStorage persistence, drawer UI, ARIA. Used on `shop.html` and `product.html`.
- **Translations** — `translations.js` — EN/VI i18n. Language selector in global nav, hidden on mobile (≤640px).
- **Global JS** — `global.js` — navbar, FCW (floating chat widget), BTT (back-to-top), scroll effects, toast system.
- **Booking** — `booking.js` — 5-step wizard state machine.
- **Membership wizard** — `membership.js` — multi-step signup flow.

---

## Design Tokens

Defined in `style.css` (`:root`) and `global.css` (`:root`):

- `--font-display`: Playfair Display (brand headings, logo)
- `--font-body`: Manrope (body text, UI)
- `--color-pink-primary` / `--pink`: `#E347CA` (brand pink)
- `--color-mint` / `--mint`: `#008E82` (accent teal)
- `--bg`: `#C3D6D0` (page background)
- `--text`: `#6C422B` (primary text)

> Note: `style.css` uses `--color-pink-primary` / `--color-mint`. `global.css` uses `--pink` / `--mint`. Both resolve to the same values.

---

## Current Versions

| File | Version |
|---|---|
| `global.css` | v80 |
| `global.js` | v38 |
| `style.css` | v73 |
| `shop.css` | v21 |
| `services.css` | v29 |
| `booking.css` | v15 |
| `product.css` | v17 |
| `member.css` | v19 |
| `wellness.css` | v16 |
| `blog.css` | v18 |
| `blog-post.css` | v7 |
| `about-us.css` | v15 |
| `contact-us.css` | v15 |
| `spa-bites.css` | v14 |
| `policy.css` | v11 |
| `terms.css` | v11 |
| `membership.css` | v15 |
| `translations.js` | v22 |
| `cart.js` | v12 |
