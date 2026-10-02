# Car Showroom Landing Page

A sleek, modern landing page for a car showroom / dealership, built with Next.js.
Hero banner with featured models, featured-cars showcase, services section,
contact section, and a full footer — with dark/light theme support, smooth
Framer Motion animations, and a rich shadcn/ui component kit.

## Features

- **Hero section** — bold headline banner with calls-to-action
- **Featured cars** — car showcase cards (image, specs, pricing)
- **Services section** — dealership services overview
- **Contact section** — enquiry/contact form and contact details
- **Footer** — full sitemap footer with social links
- **Theming** — dark/light mode via `next-themes`
- **Animations** — Framer Motion scroll and micro-interactions
- **UI kit** — shadcn/ui primitives (button, card, dialog, accordion, carousel,
  form, tabs, chart, and more) plus Lucide icons
- **Static export ready** — `output: "export"` in `next.config.ts` for hosting on
  GitHub Pages

## Tech stack

- **Next.js 15** (App Router) + **React 19** + TypeScript
- **Tailwind CSS 4** + shadcn/ui (Radix primitives)
- **Framer Motion**, **Lucide React**, **Swiper**, **Recharts**, **React Three Fiber**
  (available in the kit)

> Note: `stripe`, `better-auth`, `@libsql/client`, and `drizzle-orm` appear in
> `package.json` as unused dependencies inherited from the starter template —
> the landing page itself is fully static and calls no backend.

## Quick start

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static export -> out/
```

## Project structure

```
src/
  app/            # App Router: layout.tsx, page.tsx, globals.css
  components/     # HeroSection, FeaturedCars, ServicesSection, ContactSection, Footer
  components/ui/  # shadcn/ui primitives
  hooks/          # use-mobile
  lib/            # utils, hooks
  visual-edits/   # visual-editor instrumentation (dev only)
public/           # static assets
```

## Deployment

Deployed as a static export on GitHub Pages:
https://girishlade111.github.io/car-showroom-landing-page/

```bash
npm run build      # produces out/
```

## Credits

Built by Girish Lade — https://ladestack.in
