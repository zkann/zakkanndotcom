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

# Vercel Analytics (automatically provided in production)
# NEXT_PUBLIC_VERCEL_ANALYTICS_ID="your-vercel-analytics-id"
```

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