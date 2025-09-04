# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `pnpm dev` - Start development server on localhost:3000
- `pnpm build` - Build production version
- `pnpm postbuild` - Generate sitemap (runs automatically after build)
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## Project Architecture

This is a **Next.js 15** website with the following key architectural components:

### Content Management
- Uses **Contentlayer2** for MDX-based blog content management
- Blog posts are stored in `/content/blog/` as MDX files
- Content schema defined in `contentlayer.config.ts` with fields for title, date, excerpt, tags, author, etc.
- Automatic reading time calculation and URL generation

### App Structure
- **App Router** architecture (`src/app/`)
- Route groups: `(site)` for main website pages
- API routes: `/src/app/api/chat/route.ts` for AI chat functionality

### Key Integrations
- **PostHog** analytics with custom event tracking and feature flags
- **Vercel Analytics** for performance monitoring  
- **Prisma** ORM (schema in `/prisma/`)
- **Google Analytics** and **Meta Pixel** tracking
- **ConvertKit** for email collection
- **AI SDK** with OpenAI integration for chat functionality

### Styling & UI
- **Tailwind CSS 4** with custom configuration
- **Radix UI** components (accordion, slot)
- **Lucide React** icons
- Custom UI components in `/src/components/ui/`

### Content & SEO
- Automated sitemap generation via `next-sitemap`
- OpenGraph image generation for blog posts
- RSS feed generation at `/feed.xml`
- Extensive URL redirects for SEO optimization in `next.config.ts`

## Important Configuration Files

### PostHog Integration Rules
When working with PostHog/analytics:
- Never hallucinate API keys - use values from `.env` file
- Use feature flags sparingly and consistently
- Store flag names in TypeScript enums (UPPERCASE_WITH_UNDERSCORE)
- Gate flag-dependent code with validation checks
- Use enums/const objects for custom properties referenced in multiple places
- Consult developer for naming conventions before creating new events/properties

### Security Headers
- Comprehensive CSP configuration in `next.config.ts`
- Production vs development environment handling
- PostHog proxy setup via rewrites for GDPR compliance

## Component Patterns

### Analytics Components
- `AnalyticsEvents.tsx` - PostHog event tracking wrapper
- `GoogleAnalytics.tsx` - GA4 integration
- `FBPixelRouteChange.tsx` - Meta Pixel route tracking
- Route change tracking components for SPA navigation

### Business Logic Components  
- Industry-specific landing pages with reusable section components
- `ConvertKitForm.tsx` for email capture
- `SearchBox.tsx` and `TagFilters.tsx` for blog functionality
- Reading progress and table of contents for blog posts

### Background & Visual Components
- `BackgroundPatternDemo.tsx` with custom background utilities
- `useBackgrounds.ts` hook for dynamic background management

## Environment Variables
Check `.env` and `.env.local` for required configuration including:
- PostHog API keys and configuration
- Database connection strings  
- Third-party service integrations
- Analytics tracking IDs