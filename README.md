# Prerna Global Services — Next.js Website

A clean, production-ready Next.js 15 website for Prerna Global Services.
Rebuilt from scratch to replace the WordPress installation.

## Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript (Strict)
- **Styling**: CSS Modules + Vanilla CSS design tokens
- **Fonts**: Plus Jakarta Sans + Inter (via `next/font/google`)
- **Images**: `next/image` with WebP/AVIF optimization
- **Icons**: Lucide React
- **Deployment**: Vercel-compatible

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Environment Variables

Copy `.env.example` to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

## Routes

| Route | Page |
|---|---|
| `/` | Home |
| `/about-us/` | About Us |
| `/services/` | Services |
| `/destinations/` | Destinations |
| `/contact-us/` | Contact Us |

## Project Structure

```
app/            - Next.js App Router pages and layouts
components/     - Reusable React components
  layout/       - Header, Footer, MobileNav
  ui/           - Button, Accordion, Modal, etc.
  home/         - Home page sections
  forms/        - ContactForm, LeadCaptureModal
data/           - Static typed content (no database)
public/         - Static assets
  images/       - Photos and brand assets
types/          - TypeScript interfaces
```

## Production Build

```bash
npm run build
npm start
```

## Vercel Deployment

This project is Vercel-ready. Connect the GitHub repo in the Vercel dashboard.
Set environment variables in Project Settings → Environment Variables.

## Important

- Original WordPress backup: `D:\Websites\prerna_global` (reference only, do not modify)
- This project has ZERO WordPress dependency
- No database required — all content is in `data/*.ts`
