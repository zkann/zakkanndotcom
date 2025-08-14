import { useBackgrounds, backgroundPatterns, createCustomPattern } from '@/lib/useBackgrounds';
import PageSection from './PageSection';

export default function BackgroundPatternDemo() {
  // Example 1: Standard alternating pattern
  const standardBackgrounds = useBackgrounds({
    count: 4,
    colors: backgroundPatterns.standard
  });

  // Example 2: Hero-focused pattern
  const heroBackgrounds = useBackgrounds({
    count: 5,
    customPattern: backgroundPatterns.hero
  });

  // Example 3: Custom pattern with overrides
  const customBackgrounds = useBackgrounds({
    count: 6,
    customPattern: createCustomPattern(
      ['white', 'light', 'gray'],
      { 0: 'primary', 3: 'dark' } // Override specific positions
    )
  });

  // Example 4: High contrast pattern
  const highContrastBackgrounds = useBackgrounds({
    count: 4,
    customPattern: backgroundPatterns.highContrast
  });

  return (
    <div className="space-y-8">
      <PageSection background="bg-slate-900" className="text-white">
        <h1 className="text-3xl font-bold mb-4">Background Pattern Examples</h1>
        <p className="text-slate-300">
          This demo shows different ways to manage alternating background colors across page sections.
        </p>
      </PageSection>

      {/* Standard Pattern */}
      <PageSection background={standardBackgrounds[0]}>
        <h2 className="text-2xl font-bold mb-4">Standard Pattern (White → Light)</h2>
        <p>This section uses the standard alternating pattern.</p>
      </PageSection>

      <PageSection background={standardBackgrounds[1]}>
        <h2 className="text-2xl font-bold mb-4">Standard Pattern (Light → White)</h2>
        <p>This section continues the standard pattern.</p>
      </PageSection>

      <PageSection background={standardBackgrounds[2]}>
        <h2 className="text-2xl font-bold mb-4">Standard Pattern (White → Light)</h2>
        <p>This section continues the standard pattern.</p>
      </PageSection>

      <PageSection background={standardBackgrounds[3]}>
        <h2 className="text-2xl font-bold mb-4">Standard Pattern (Light → White)</h2>
        <p>This section continues the standard pattern.</p>
      </PageSection>

      {/* Hero Pattern */}
      <PageSection background={heroBackgrounds[0]}>
        <h2 className="text-2xl font-bold mb-4 text-white">Hero Pattern (Primary)</h2>
        <p className="text-white/80">This section starts with the primary color.</p>
      </PageSection>

      <PageSection background={heroBackgrounds[1]}>
        <h2 className="text-2xl font-bold mb-4">Hero Pattern (White)</h2>
        <p>This section uses white background.</p>
      </PageSection>

      <PageSection background={heroBackgrounds[2]}>
        <h2 className="text-2xl font-bold mb-4">Hero Pattern (Light)</h2>
        <p>This section uses light background.</p>
      </PageSection>

      <PageSection background={heroBackgrounds[3]}>
        <h2 className="text-2xl font-bold mb-4">Hero Pattern (White)</h2>
        <p>This section uses white background.</p>
      </PageSection>

      <PageSection background={heroBackgrounds[4]}>
        <h2 className="text-2xl font-bold mb-4">Hero Pattern (Light)</h2>
        <p>This section uses light background.</p>
      </PageSection>

      {/* Custom Pattern with Overrides */}
      <PageSection background={customBackgrounds[0]}>
        <h2 className="text-2xl font-bold mb-4 text-white">Custom Pattern (Primary Override)</h2>
        <p className="text-white/80">This section overrides the pattern with primary color.</p>
      </PageSection>

      <PageSection background={customBackgrounds[1]}>
        <h2 className="text-2xl font-bold mb-4">Custom Pattern (Light)</h2>
        <p>This section follows the base pattern.</p>
      </PageSection>

      <PageSection background={customBackgrounds[2]}>
        <h2 className="text-2xl font-bold mb-4">Custom Pattern (Gray)</h2>
        <p>This section follows the base pattern.</p>
      </PageSection>

      <PageSection background={customBackgrounds[3]}>
        <h2 className="text-2xl font-bold mb-4 text-white">Custom Pattern (Dark Override)</h2>
        <p className="text-white/80">This section overrides the pattern with dark color.</p>
      </PageSection>

      <PageSection background={customBackgrounds[4]}>
        <h2 className="text-2xl font-bold mb-4">Custom Pattern (White)</h2>
        <p>This section follows the base pattern.</p>
      </PageSection>

      <PageSection background={customBackgrounds[5]}>
        <h2 className="text-2xl font-bold mb-4">Custom Pattern (Light)</h2>
        <p>This section follows the base pattern.</p>
      </PageSection>

      {/* High Contrast Pattern */}
      <PageSection background={highContrastBackgrounds[0]}>
        <h2 className="text-2xl font-bold mb-4">High Contrast (White)</h2>
        <p>This section uses white background for high contrast.</p>
      </PageSection>

      <PageSection background={highContrastBackgrounds[1]}>
        <h2 className="text-2xl font-bold mb-4 text-white">High Contrast (Dark)</h2>
        <p className="text-white/80">This section uses dark background for high contrast.</p>
      </PageSection>

      <PageSection background={highContrastBackgrounds[2]}>
        <h2 className="text-2xl font-bold mb-4">High Contrast (White)</h2>
        <p>This section uses white background for high contrast.</p>
      </PageSection>

      <PageSection background={highContrastBackgrounds[3]}>
        <h2 className="text-2xl font-bold mb-4 text-white">High Contrast (Dark)</h2>
        <p className="text-white/80">This section uses dark background for high contrast.</p>
      </PageSection>
    </div>
  );
} 