# Environment Setup

## Required Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```bash
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/mydb"

# OpenAI API Key
OPENAI_API_KEY="your-openai-api-key-here"

# Site Configuration
SITE_URL="http://localhost:3000"

# Next.js Configuration
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-nextauth-secret-here"

# Analytics Control (optional)
# Set to 'true' to disable analytics even in production
# DISABLE_ANALYTICS="true"
# DISABLE_TRACKING="true"

# Vercel Analytics (automatically provided in production)
# NEXT_PUBLIC_VERCEL_ANALYTICS_ID="your-vercel-analytics-id"

# Google Analytics (optional - will use hardcoded ID if not set)
# NEXT_PUBLIC_GA_MEASUREMENT_ID="G-XXXXXXXXXX"
```

## Analytics Behavior

By default, analytics and tracking are **disabled in development** and **enabled in production**. This prevents:

- Google Analytics from firing during development
- Meta Pixel from tracking during development
- Vercel Analytics from running during development
- Unnecessary network requests to analytics services

### Override Analytics Behavior

You can override the default behavior using these environment variables:

- `DISABLE_ANALYTICS=true` - Disables Google Analytics and Vercel Analytics even in production
- `DISABLE_TRACKING=true` - Disables Meta Pixel tracking even in production

### Development vs Production

- **Development** (`NODE_ENV=development`): All analytics disabled by default
- **Production** (`NODE_ENV=production`): All analytics enabled by default (unless overridden)
- **Test** (`NODE_ENV=test`): All analytics disabled by default

## Database Setup

1. Set up a PostgreSQL database (local or cloud-based like Neon/Supabase)
2. Update the `DATABASE_URL` in your `.env.local` file
3. Run migrations: `pnpm prisma db push`

## OpenAI API Key

1. Sign up at https://platform.openai.com/
2. Create an API key
3. Add it to your `.env.local` file

## Development

1. Copy `.env.example` to `.env.local`
2. Fill in the actual values
3. Run `pnpm dev` to start the development server

## Production Deployment

When deploying to production:
1. Ensure `NODE_ENV=production` is set
2. Analytics will automatically be enabled
3. Use `DISABLE_ANALYTICS=true` or `DISABLE_TRACKING=true` if you need to temporarily disable specific services 