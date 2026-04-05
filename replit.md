# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Artifacts

### The Breastfeeding Whisperer (`artifacts/breastfeeding-whisperer`)
- **Kind**: React + Vite web app
- **Port**: 22483 (reads `PORT` env var)
- **Preview path**: `/`
- **Stack**: React, Wouter routing, Framer Motion, Tailwind CSS v4, shadcn/ui
- **Fonts**: Playfair Display (serif headings) + Lato (body) via Google Fonts
- **Brand**: Magenta #C41E8E primary, maroon #6B0032 accent, cream #FDF8F5 background
- **Pages**: Home (`/`), Services (`/services`), Book (`/book`), About (`/about`), Tips (`/tips`), Testimonials (`/testimonials`), Products (`/products`), Contact (`/contact`)
- **SEO**: useSEO hook at `src/hooks/useSEO.ts` — injects title, meta description, OG tags, JSON-LD
- **Images**: AI-generated assets at `attached_assets/hero-nursing.png`, `attached_assets/about-tara.png`; logo at `attached_assets/IMG_3411_1775411464767.webp`
- **Booking**: SimplyBook embed at `https://thebreastfeedingwhisperer.simplybook.me/v2/#book`
- **Affiliate products**: Amazon tag `bfwhisperer08-20` on all product links
- **Phone**: (407) 868-1569 → `tel:+14078681569` (clickable everywhere)

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
