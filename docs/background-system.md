# Background Color Management System

This system provides a flexible way to manage alternating background colors across page sections, making it easy to create visually appealing layouts with consistent color patterns.

## Overview

The background system consists of:
- **Background color constants** - Predefined Tailwind CSS background classes
- **Utility functions** - Helper functions for generating alternating patterns
- **Custom hooks** - React hooks for managing backgrounds in components
- **Preset patterns** - Common background patterns for different use cases

## Quick Start

### 1. Basic Usage

```tsx
import { useBackgrounds, backgroundPatterns } from '@/lib/useBackgrounds';

export default function MyPage() {
  const backgrounds = useBackgrounds({
    count: 5,
    customPattern: backgroundPatterns.hero
  });

  return (
    <>
      <HeroSection background={backgrounds[0]} />
      <ContentSection background={backgrounds[1]} />
      <FeaturesSection background={backgrounds[2]} />
      <PricingSection background={backgrounds[3]} />
      <CTASection background={backgrounds[4]} />
    </>
  );
}
```

### 2. Available Background Colors

```tsx
import { backgroundColors } from '@/lib/utils';

// Available colors:
backgroundColors.white    // "bg-white"
backgroundColors.light    // "bg-slate-50"
backgroundColors.gray     // "bg-gray-50"
backgroundColors.primary  // "bg-primary"
backgroundColors.dark     // "bg-slate-900"
```

### 3. Preset Patterns

```tsx
import { backgroundPatterns } from '@/lib/useBackgrounds';

// Standard alternating pattern
backgroundPatterns.standard  // ['white', 'light']

// Hero-focused pattern (starts with primary)
backgroundPatterns.hero      // ['primary', 'white', 'light']

// High contrast pattern
backgroundPatterns.highContrast  // ['white', 'dark']

// Subtle pattern
backgroundPatterns.subtle    // ['white', 'gray']

// Industry-specific patterns
backgroundPatterns.realEstate  // ['primary', 'white', 'light', 'white', 'light']
backgroundPatterns.ecommerce   // ['primary', 'white', 'light', 'white', 'light']
backgroundPatterns.service     // ['primary', 'white', 'light', 'white', 'light']
```

## Advanced Usage

### Custom Patterns with Overrides

```tsx
import { createCustomPattern } from '@/lib/useBackgrounds';

const customPattern = createCustomPattern(
  ['white', 'light', 'gray'],
  { 
    0: 'primary',  // First section uses primary
    3: 'dark'      // Fourth section uses dark
  }
);

const backgrounds = useBackgrounds({
  count: 6,
  customPattern
});
```

### Dynamic Section Count

```tsx
export default function DynamicPage({ sections }) {
  const backgrounds = useBackgrounds({
    count: sections.length,
    customPattern: backgroundPatterns.hero
  });

  return (
    <>
      {sections.map((section, index) => (
        <section key={index} className={backgrounds[index]}>
          {section.content}
        </section>
      ))}
    </>
  );
}
```

### Manual Background Assignment

```tsx
export default function ManualPage() {
  // Manually assign backgrounds for specific sections
  return (
    <>
      <HeroSection background="bg-primary" />
      <ContentSection background="bg-white" />
      <FeaturesSection background="bg-slate-50" />
      <PricingSection background="bg-white" />
      <CTASection background="bg-primary" />
    </>
  );
}
```

## Component Updates

All section components now accept a `background` prop:

```tsx
// Before
<HeroSection />

// After
<HeroSection background="bg-primary" />
```

Updated components:
- `HeroSection`
- `ResultsBand`
- `PainPointSection`
- `HowItWorksSection`
- `UseCasesSection`
- `PricingSection`
- `FAQSection`
- `FinalCTASection`

## PageSection Component

For custom sections, use the `PageSection` component:

```tsx
import PageSection from '@/components/PageSection';

<PageSection 
  background="bg-slate-50"
  padding="lg"
  id="custom-section"
>
  <h2>Custom Section</h2>
  <p>Content goes here...</p>
</PageSection>
```

### PageSection Props

- `background` - Background color class
- `padding` - Padding size: 'sm', 'md', 'lg', 'xl'
- `className` - Additional CSS classes
- `id` - Section ID for navigation

## Best Practices

### 1. Consistent Patterns
Use preset patterns for consistency across similar pages:
- **Landing pages**: `backgroundPatterns.hero`
- **Content pages**: `backgroundPatterns.standard`
- **High contrast**: `backgroundPatterns.highContrast`

### 2. Section Count Management
Always match the background count to your actual sections:

```tsx
const sections = ['hero', 'content', 'features', 'pricing', 'cta'];
const backgrounds = useBackgrounds({
  count: sections.length,
  customPattern: backgroundPatterns.hero
});
```

### 3. Color Accessibility
Ensure sufficient contrast between background and text:
- Light backgrounds (`bg-white`, `bg-slate-50`) with dark text
- Dark backgrounds (`bg-primary`, `bg-slate-900`) with light text

### 4. Responsive Considerations
Background colors work across all screen sizes, but consider:
- High contrast patterns for mobile users
- Consistent visual hierarchy across breakpoints

## Examples

### Real Estate Page
```tsx
const backgrounds = useBackgrounds({
  count: 9,
  customPattern: backgroundPatterns.realEstate
});
```

### E-commerce Page
```tsx
const backgrounds = useBackgrounds({
  count: 7,
  customPattern: backgroundPatterns.ecommerce
});
```

### Service Business Page
```tsx
const backgrounds = useBackgrounds({
  count: 6,
  customPattern: backgroundPatterns.service
});
```

## Migration Guide

### From Hardcoded Backgrounds

**Before:**
```tsx
<div className="bg-white py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    Content
  </div>
</div>
```

**After:**
```tsx
<PageSection background="bg-white">
  Content
</PageSection>
```

### From Manual Alternation

**Before:**
```tsx
const backgrounds = ['bg-white', 'bg-slate-50', 'bg-white', 'bg-slate-50'];
```

**After:**
```tsx
const backgrounds = useBackgrounds({
  count: 4,
  colors: ['white', 'light']
});
```

## Troubleshooting

### Backgrounds Not Alternating
- Check that `count` matches your actual section count
- Verify the pattern array has the expected colors
- Ensure all sections are using the background prop

### Type Errors
- Import `BackgroundColor` type for strict typing
- Use `backgroundColors` object for color values
- Check that custom patterns use valid color keys

### Visual Issues
- Verify Tailwind CSS classes are available
- Check for conflicting CSS classes
- Ensure proper contrast ratios for accessibility 