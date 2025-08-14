import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{md,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        'display': ['2.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'title': ['2rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'eyebrow': ['0.8125rem', { lineHeight: '1.3', letterSpacing: '0.06em', textTransform: 'uppercase' as any }],
      },
      colors: {
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
        // Futuristic Trust Builder palette
        primary: '#1B263B', // navy slate
        secondary: '#415A77', // cool steel
        cta: '#E63946', // red accent for CTAs
        highlight: '#F4D35E', // gold for ROI/logos
        text: '#1C1C1E', // near-black text
      },

    },
  },
  plugins: [],
}

export default config 