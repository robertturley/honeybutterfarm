# Honeybutter Farm — Website Plan

## Overview

A beautiful, static HTML/CSS/JS website for Honeybutter Farm. No server, no build step, no framework — deploys directly from this GitHub repository via Cloudflare Pages.

---

## File Structure

```
honeybutterfarm/
├── index.html                        # Single-page site
├── honeybutterfarm_logo.png          # Full logo (used in hero and footer)
├── honeybutterfarm_logo_icon.png     # Icon-only logo (used in nav)
├── PLAN.md                           # This file
├── README.md                         # Project overview
└── assets/
    ├── css/
    │   └── style.css                 # All styles
    ├── js/
    │   └── main.js                   # Nav, lightbox, lazy-load
    └── images/
        ├── hero.jpg                  # Hero background (full-bleed landscape)
        ├── story.jpg                 # Our Story section (portrait orientation)
        ├── gallery-01.jpg            # Gallery photos (01 through 12)
        ├── gallery-02.jpg
        └── ...
```

---

## Page Sections

| # | Section | Description |
|---|---------|-------------|
| 1 | **Navigation** | Fixed top bar, transparent over hero → deep green on scroll. Icon logo + "Honeybutter Farm" text fade in on scroll. Links right. Collapses to hamburger on mobile. |
| 2 | **Hero** | Full-viewport photo with overlay, full logo, tagline ("Petaluma, California"), and headline. Subtle Ken-Burns entrance animation. |
| 3 | **Our Story** | Two-column layout: farm photo with gold accent frame on left, story text + certification badges on right. 12-photo gallery grid with lightbox below. |
| 4 | **Our Practices** | Warm ivory-dark section. Six practice tiles with icon, heading, and description. |
| 5 | **Find Us** | Deep green section. Large Instagram link at top, then three cards: Petaluma East Side Farmers Market, Local Restaurants, and Get in Touch (email + address). |
| 6 | **Footer** | Full logo (faded white), copyright 2026, trademark notice, location. |

---

## Design System

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--gold` | `#D8B25B` | Primary accent — matches logo honeycomb gold |
| `--gold-light` | `#E8CC84` | Hover states, hero tagline |
| `--green-dark` | `#2C4A2E` | Products section background, nav (scrolled), footer |
| `--green-deep` | `#1C2E1D` | Find Us section, deep footer |
| `--ivory` | `#F5EFE2` | Main page background, practice cards |
| `--ivory-dark` | `#EDE4D0` | Practices section background |
| `--earth` | `#7A4E2D` | Badge text, secondary accents |
| `--text-dark` | `#2A1F14` | Body text (warm near-black) |
| `--text-mid` | `#5A4A36` | Secondary body text |
| `--text-light` | `#F5EFE2` | Text on dark backgrounds |

### Typography

| Role | Font | Weights |
|------|------|---------|
| Display headings | Cormorant Garamond | 300, 400, 500, 600 |
| Navigation / UI labels | Jost | 400, 500 |
| Body text | Nunito | 400, 500 |

All fonts loaded from Google Fonts with `display=swap` for performance.

### Visual Language
- Sections alternate between warm ivory and deep forest green for visual rhythm
- Gold (`#D8B25B`) threads through as accent on both light and dark backgrounds
- Generous whitespace — photography does the heavy lifting
- Subtle gold rule lines as section dividers
- No harsh drop shadows or borders; everything feels earthy and organic

---

## Photo Guide

### Recommended Photos to Provide

| Slot | File Path | Ideal Shot | Target Size |
|------|-----------|-----------|-------------|
| Hero | `assets/images/hero.jpg` | Wide landscape — farm vista, rolling hills, sky | ~200 KB JPEG |
| Story | `assets/images/story.jpg` | Portrait orientation (4:5) — farmer, animals, or garden close-up | ~120 KB |
| Gallery 01–12 | `assets/images/gallery-01.jpg` … `gallery-12.jpg` | Variety: seasons, animals, people, harvest (4:3 landscape) | ~80–100 KB each |

### Image Tips
- Shoot or crop product photos at roughly **4:3 ratio** (landscape)
- Shoot or crop the story photo at roughly **4:5 ratio** (portrait)
- Hero should be **wide landscape** — at least 1600px wide before compression
- Use JPEG for photos; PNG only for logos/graphics
- Free compression tools: [Squoosh](https://squoosh.app) or [TinyPNG](https://tinypng.com)

---

## Content Still Needed

- [x] Hero photo (`assets/images/hero.jpg`)
- [x] Our Story photo (`assets/images/story.jpg`)
- [x] Gallery photos 01–12 (`assets/images/gallery-01.jpg` … `gallery-12.jpg`)
- [ ] Our Story text — replace the placeholder paragraph in `index.html`
- [ ] Restaurant names/list (optional — can be added to the Local Restaurants card)

---

## Deployment

This site deploys automatically via **Cloudflare Pages** connected to this GitHub repository — no changes needed to the hosting configuration. Just push updates to `main` and they go live.

---

## Future Ideas (not yet built)

- **Products section** — add back when good product photos are available; HTML is ready to restore
- **Seasonal availability notice** — a simple top banner ("Asparagus is at the market this week!") updated manually
- **Press / media page** — for food journalists, regulators, or potential wholesale buyers
- **Recipe or blog section** — if you ever want to share seasonal recipes or farm stories

---

*Last updated: May 2026*
