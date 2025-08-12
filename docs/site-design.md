### Site Design Doc

## Overview
- The site markets AI automation and internal tools services for SMBs, optimized for conversion to a booking call.
- Stack: Next.js App Router, TypeScript, Tailwind CSS v4, Contentlayer for MDX content, Vercel Analytics, edge runtime for select routes.
- Global layout and theming live under `src/app/` and `src/app/(site)/`.

## Goals and KPIs
- **Primary goal**: booked calls via `/book` redirect to Calendly.
- **Secondary goals**: content discovery and trust via the blog, About, and clear policies.
- **KPIs**:
  - Booking conversion rate (clicks to `/book` → Calendly bookings)
  - Blog engagement (CTR to posts, time on page, newsletter signups)
  - Scroll/visibility for key sections (homepage process, final CTA)

## Information Architecture (Routes)
- **Root**: `src/app/layout.tsx` (fonts, analytics) → `src/app/(site)/layout.tsx` (site wrapper, SEO metadata, header/footer, schema).
- **Homepage**: `src/app/(site)/page.tsx` – value prop, process, use cases, pricing, FAQ, strong CTAs.
- **About**: `src/app/(site)/about/page.tsx` – founder intro and CTA.
- **Blog**:
  - Index: `src/app/(site)/blog/page.tsx` – search, tag filters, pagination, newsletter (`ConvertKitForm`).
  - Post: `src/app/(site)/blog/[slug]/page.tsx` – MDX render, reading progress, ToC, related posts, JSON‑LD.
  - Feed: `src/app/feed.xml/route.ts` – RSS 2.0 from Contentlayer.
  - Per‑post OG image: `src/app/(site)/blog/[slug]/opengraph-image.tsx`.
- **Legal**: `src/app/(site)/privacy/page.tsx`, `src/app/(site)/terms/page.tsx`.
- **404**: `src/app/(site)/not-found.tsx`.
- **Booking**: Redirect in `next.config.ts` from `/book` → Calendly (302/307).
- **API**: `src/app/api/chat/route.ts` → OpenAI via `src/lib/ai.ts` (edge runtime).
- **Public SEO**: `public/robots.txt`, `public/sitemap.xml` (generated via `next-sitemap` and `next-sitemap.config.js`).
- **Global OG**: `src/app/opengraph-image.tsx`.

## Content System
- **Contentlayer**: `contentlayer.config.ts` defines `Post` from `content/blog/**/*.mdx` with computed `url`, `slug`, `readingTimeMinutes`.
- MDX features: GFM, slugged headings, autolinked anchors, typography tweaks in `globals.css`.

## Shared Components
- **`Header` / `Footer`**: sticky header with mobile menu; footer with anchors, company links, socials, contact.
- **Homepage**: `HowItWorks` (client scroll-linked SVG with reduced‑motion support).
- **Blog**: `PostThumbnail`, `ReadingProgress`, `TagFilters`, per‑post `Toc`.
- **Forms**: `ConvertKitForm` (env‑driven form ID/UID, posts to Kit).

## Styling and Design System
- **Tailwind v4** with custom tokens in `src/app/globals.css` and `tailwind.config.ts`:
  - Colors: `primary` (#1B263B), `secondary` (#415A77), `cta` (#E63946), `highlight` (#F4D35E), `text` (#1C1C1E).
- Typography and prose rules in `globals.css` (anchors, code, tables, heading offsets).

### Typography Guide
- Headings:
  - Homepage hero: balance wrapping via `[text-wrap:balance]`.
  - Section titles: use `text-title` (`2rem/1.2`) or responsive `text-3xl md:text-4xl`.
  - Post titles: `text-4xl sm:text-5xl` with `[text-wrap:balance]`.
- Body text:
  - Default prose uses `prose` with custom link and marker styling.
  - Long-form paragraphs target ~65–75ch; constrain with `max-w-prose` or `max-w-2xl`.
- Utilities:
  - `text-display`, `text-title`, `text-eyebrow` defined in Tailwind config for consistent scale.

### Color Usage
- CTAs: `bg-cta text-white` with hover `hover:brightness-90`.
- Accents/links: `text-secondary` with subtle hover (`hover:opacity-80`).
- Primary surfaces: `bg-primary` for header/footer and final CTA band.

## SEO
- **Metadata**: `(site)/layout.tsx` sets canonical, OG/Twitter, robots; root layout sets `metadataBase` from `SITE_URL`.
- **Structured data**:
  - Organization and WebSite JSON‑LD in `(site)/layout.tsx`.
  - FAQPage JSON‑LD on homepage.
  - BlogPosting JSON‑LD on post pages.
- **Sitemaps/robots**: managed via `next-sitemap` and checked into `public/`.
- **Open Graph images**: site‑wide and per‑post OG image routes using `next/og` (edge runtime).

## Analytics and Tracking
- Vercel Analytics in root layout.
- UTM parameters on use‑case/pricing CTAs linking to `/book`.
- Recommended: instrument custom events for CTA clicks, use‑case card clicks (with `a1`), and section visibility.

## Performance
- Edge runtime for OG images, RSS, and chat API.
- Image optimization via Next/Image and modern formats.
- ISR with `revalidate = 3600` on blog routes.
- Minimal client JS (mobile nav, HowItWorks, blog ToC/reading progress).

## Accessibility
- Skip link to `#main`.
- Focus-visible outlines on interactive elements.
- Reduced‑motion support in animations.
- ToC uses IntersectionObserver; headings have anchor links and scroll offsets.

## Security
- Headers in `next.config.ts`: Referrer‑Policy, X‑Content‑Type‑Options, X‑Frame‑Options, Permissions‑Policy, and a CSP allowing required sources (frames for Calendly/Cal.com).

## Integrations
- **Booking**: `/book` redirect to Calendly with support for tracking params.
- **Email**: ConvertKit form (`NEXT_PUBLIC_CONVERTKIT_FORM_ID`, `NEXT_PUBLIC_CONVERTKIT_FORM_UID`).
- **AI**: OpenAI via `@ai-sdk/openai` and `ai` streaming in `src/lib/ai.ts`.

## Environment Variables
- `SITE_URL` (used for metadata base and RSS links)
- `NEXT_PUBLIC_CONVERTKIT_FORM_ID`, `NEXT_PUBLIC_CONVERTKIT_FORM_UID`
- OpenAI credentials (as required by `@ai-sdk/openai`)

## Build & Deploy
- Next.js App Router on Vercel recommended.
- Contentlayer build for MDX content.
- `next-sitemap` to generate sitemaps/robots.

## Acceptance Criteria
- All top‑level routes render and link correctly; header/footer anchors match section IDs.
- `/book` redirect functions with UTM passthrough.
- SEO metadata and JSON‑LD validate (Rich Results) on homepage and blog posts.
- RSS feed lists all non‑draft posts in reverse‑chronological order.
- OG image endpoints return valid PNGs with correct dimensions.
- Lighthouse: Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95, SEO ≥ 95.

## Future Enhancements
- Add testimonial/social‑proof band and optional logo row.
- Add event tracking for CTA/use‑case clicks and scroll depth.
- Consider server‑side logging on `/book` redirect for attribution.
- Expand blog filters (multi‑tag, date) and add related content on homepage.