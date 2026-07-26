# home-react-type — Portfolio

Situs portfolio pribadi (Next.js 16, React 19, Tailwind CSS v4, HeroUI v3).

## Perintah

```sh
pnpm dev        # dev server di http://localhost:3000
pnpm build      # build production
pnpm start      # serve hasil build
pnpm lint       # ESLint (flat config, v9)
```

- Tidak ada test runner, tidak ada script typecheck (`tsc --noEmit` yang paling mendekati).
- `pnpm` wajib — lockfile adalah `pnpm-lock.yaml`.
- Node 24 (lihat `.nvmrc`).

## Arsitektur

- **App Router** — single-page app; root layout server component, semua child di bawahnya `"use client"`.
- **Tidak ada pages router** — semuanya di `app/`.
- **Path alias** — `@/*` dipetakan ke `./*` (contoh: `@/app/components/Header`).
- **i18n** — provider berbasis context (`app/context/LanguageContext.tsx`); locale (`en`/`id`) disimpan di `localStorage` key `portfolio_lang`.
- **Animasi** — dua pendekatan:
  - CSS scroll reveal classes (`.reveal-on-scroll`, `.reveal-fade-in`) di `globals.css`.
  - GSAP + ScrollTrigger via hook `useGsapReveal` di `app/hooks/useGsapReveal.ts`.
- **Lenis** untuk smooth scrolling inersia (dikonfigurasi di `app/providers.tsx`).

## Navigasi

Situs ini **single-page app** murni — tidak ada routing Next.js antar halaman. Semua section (Header, TechStack, Project, Contact) dirender di `HomePage.tsx` dan navigasi dilakukan dengan `scrollIntoView` via ref — bukan Link Next.js.

Struktur komponen:

```
app/page.tsx            → server component, render <home-page />
app/components/
  home-page.tsx         → "use client", orchestrator semua section + scroll refs + sticky navbar
  navbar.tsx            → logo, button-slide nav, toggle bahasa
  header.tsx            → Hero card (foto, intro, CTA)
  tech-stack.tsx        → kartu keahlian (HeroUI Card)
  project.tsx           → daftar proyek (HeroUI Card + Link)
  contact.tsx           → social links (HeroUI Card + Link)
  button-slide.tsx      → komponen tombol slide, import CSS sendiri (`button-slide.css`)
```

## Keanehan Framework

- **Tailwind CSS v4** — tidak ada `tailwind.config.js`. Konfigurasi via CSS: `@import "tailwindcss"` dan `@theme` di `app/globals.css`. Gunakan `@tailwindcss/postcss` (v4) sebagai plugin PostCSS.
- **HeroUI v3** (dulu NextUI) — berbasis React Aria. **Tidak perlu global provider**. Import komponen individual seperti `@heroui/react/card`, `@heroui/react/link`.
- **ESLint** — flat config (`eslint.config.mjs`), extends `eslint-config-next/core-web-vitals` dan `eslint-config-next/typescript`.
- **react-intersection-observer** ada di dependencies tapi **tidak pernah diimport** di kode (dead dependency).

## Catatan

- **README.md tidak akurat** — klaim Next.js 15, tapi package.json menunjukkan **Next.js 16**. README juga menyebut CI/CD GitHub Actions, tapi `.github/workflows/` kosong.
- "Layout" sebenarnya flat — tidak ada nested layout selain root `layout.tsx`.
- Semua child di bawah root layout adalah `"use client"` — termasuk providers, hooks, dan seluruh komponen halaman.
- **File/folder naming** — wajib **kebab-case** (contoh: `my-component.tsx`, `user-profile/`). Hindari PascalCase atau camelCase untuk file/folder baru.

## Deployment

- Dideploy di Vercel (`.vercel/project.json` ada).
- Tidak ada CI workflows — `.github/workflows/` kosong meskipun README menyebutkan CI/CD hipotetis.
- Tidak ada file env yang dilacak git (`.env*` di `.gitignore`).
