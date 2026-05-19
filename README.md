# Honeybutter Farm Website

Website for [honeybutterfarm.com](https://www.honeybutterfarm.com) — a certified organic, diversified farm in Petaluma, California.

## About

Static single-page site built with plain HTML, CSS, and JavaScript. No build step, no framework, no server required. Hosted via Cloudflare Pages connected to this GitHub repository.

## Structure

```
index.html                        # Main page
honeybutterfarm_logo.png          # Full logo (hero + footer)
honeybutterfarm_logo_icon.png     # Icon-only logo (nav bar)
assets/
  css/style.css                   # All styles and design tokens
  js/main.js                      # Nav behavior, lightbox, lazy loading
  images/
    hero.jpg                      # Hero background photo
    story.jpg                     # Our Story section photo
    gallery-01.jpg … gallery-12.jpg  # Gallery photos
```

## Editing Content

- **Story text** — edit the paragraph in the `Our Story` section of `index.html`
- **Gallery photos** — replace `assets/images/gallery-01.jpg` through `gallery-12.jpg`
- **Farmers market details** — edit the Petaluma East Side Farmers Market card in the `Find Us` section
- **Restaurant list** — add names to the Local Restaurants card in the `Find Us` section

See `PLAN.md` for full design documentation, color palette, typography, and photo guidelines.

## Deployment

Push to `main` and Cloudflare Pages deploys automatically. No configuration changes needed.
