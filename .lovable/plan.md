# Kumpels Website — Full Redesign Plan

## Direction
Move away from the current dark, single-scroll, motion-heavy build. Rebuild as a **bright, light-blue/white healthtech site** with **Kumpels blue** as the anchor color and **cyan / electric blue gradients** as accents. Soft shadows, rounded corners, generous whitespace, modern platform mockups throughout. Smooth but restrained animations.

Keep the existing bilingual architecture (ES default, EN mirror). Keep TanStack Start file-based routes. Drop the all-dark `CanvasBackdrop`, the immersive single-page narrative, the global SVG traceability line, and the `FloatingNav` in favor of a **clear sticky navbar** + **separate pages per section**.

## Sitemap (each section = its own route, no endless scroll)

```
/                    Home (hero + what we do + solutions teaser + VITA teaser + validation strip + investor strip + newsletter + contact CTA)
/solutions           Clinical CDSS · Operational/Traceability · Custom solutions
/technology          AI · Interoperability · Analytics · Product philosophy
/vita-fertility      VITA hero · modules · 3-phase implementation · CTA
/validation          Validation path timeline · pilot metrics · pilot data cards
/investors           Problem · solution · market · traction · model · roadmap · team · deck CTAs
/team                Founders · clinical · product · business · advisors
/blog                Article grid + dynamic `/blog/$slug`
/contact             Form · WhatsApp · Calendly · info
/privacy /terms      Legal (Kumpels S.A.S.)
```

EN mirror under `/en/...` with translated slugs (`/en/solutions`, `/en/vita-fertility`, etc.). Language selector in navbar.

## Design system reset (src/styles.css)
- Light theme as default. Background = white / `#F6F9FF`. Foreground = deep slate.
- Brand: `--primary` Kumpels blue (`#0B3FB5`-ish in oklch), `--brand-cyan` electric cyan, `--brand-sky` soft sky, subtle gradient `cyan → electric blue` for accents only.
- Replace dark surfaces with **white cards on light-blue washes**; soft 1px borders, `shadow-soft` and `shadow-elevated` only.
- Remove `surface-dark` usage from public pages; keep tokens but stop applying them globally.
- Typography unchanged (Sora display / Inter body) — already on-brand.

## Components to build
- `SiteHeader` — sticky white navbar, logo left, links center, **Book a demo** + **Contact** right, ES/EN switch, mobile sheet menu.
- `SiteFooter` — Kumpels S.A.S., quick links, newsletter, socials (LinkedIn, Instagram, Kumpels TikTok, Kevin TikTok, YouTube, WhatsApp, email, Calendly), legal, © 2026.
- `Hero` (home) — headline, sub, 3 CTAs, layered product mockup, subtle gradient blob.
- `SolutionCard`, `ModuleCard`, `PhaseCard`, `MetricCard`, `LogoStrip`, `TimelineStep`, `PrincipleCard`, `TeamCard`, `ArticleCard`.
- `MockDashboard` variants: clinical validation, traceability, analytics, VITA follow-up (SVG-based, light theme).
- `NewsletterForm`, `ContactForm` (zod-validated, no backend yet — submit handler stub + toast; ready for Cloud later).
- `Reveal` / `Parallax` kept but toned down; remove `CanvasBackdrop`, `FloatingNav`, `ScrollProgress`, `TraceabilityLine`.

## Content
Use the copy blocks supplied in the brief verbatim (ES) with EN translations. All metrics use **editable placeholders** (`+X prescripciones validadas`, etc.) — no invented numbers. Socials, deck links, team names, article entries left as editable constants in `src/content/site.ts` so the user can update without hunting through JSX.

## Phasing
1. **Foundation** — tokens reset to light, new `SiteHeader`/`SiteFooter`, retire dark shell, content constants file, ES+EN home rewrite.
2. **Section pages** — Solutions, Technology, VITA Fertility, Validation, Investors, Team, Contact (ES + EN).
3. **Polish** — Blog list + slug, newsletter + contact form validation, mockup illustrations, responsive QA, reduced-motion check, SEO `head()` per route, sitemap.xml update.

## Technical notes
- Routes added via filename convention; `routeTree.gen.ts` regenerates automatically.
- Each new route file ships its own `head()` with unique title/description/OG.
- Forms validated with `zod`; submission handlers are stubs (console + toast) ready to be wired to Lovable Cloud when the user enables it.
- No backend work in this pass unless the user asks to enable Cloud for the newsletter / contact form / blog CMS.

## Open questions before I build
1. **Forms backend** — wire newsletter + contact form to Lovable Cloud now (stores submissions + can email you), or leave as visual stubs for this pass?
2. **Blog** — placeholder articles in code for now, or enable Cloud so you can add real posts via a simple admin later?
3. **Real links** — do you have the actual URLs for LinkedIn, Instagram, Kumpels TikTok, Kevin TikTok, YouTube, WhatsApp number, Calendly, and the IncubaLAB deck? If yes, paste them and I'll bake them in; if not, I'll use clearly-marked `#` placeholders in the editable content file.
4. **Language default** — keep ES as default (current behavior) and EN as the mirror, correct?

Reply with answers (or "go" to proceed with sensible defaults: stub forms, placeholder blog, `#` social links, ES default) and I'll start Phase 1.
