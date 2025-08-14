import { useMemo } from 'react';
import { getAlternatingBackgrounds, BackgroundColor, backgroundColors } from './utils';

interface UseBackgroundsOptions {
  count: number;
  startWith?: BackgroundColor;
  colors?: BackgroundColor[];
  customPattern?: BackgroundColor[];
}

export function useBackgrounds({
  count,
  startWith = 'white',
  colors = ['white', 'light'],
  customPattern
}: UseBackgroundsOptions) {
  return useMemo(() => {
    if (customPattern) {
      // Use custom pattern if provided - convert color keys to full Tailwind classes
      const result: string[] = [];
      for (let i = 0; i < count; i++) {
        const colorKey = customPattern[i % customPattern.length];
        result.push(backgroundColors[colorKey]);
      }
      return result;
    }
    
    // Use alternating pattern
    return getAlternatingBackgrounds(count, startWith, colors);
  }, [count, startWith, colors, customPattern]);
}

// Preset patterns for common use cases
export const backgroundPatterns = {
  // Standard alternating pattern
  standard: ['white', 'light'] as BackgroundColor[],
  
  // Hero-focused pattern (starts with primary)
  hero: ['primary', 'white', 'light'] as BackgroundColor[],
  
  // High contrast pattern
  highContrast: ['white', 'dark'] as BackgroundColor[],
  
  // Subtle pattern
  subtle: ['white', 'gray'] as BackgroundColor[],
  
  // Custom patterns for specific industries
  realEstate: ['primary', 'white', 'light', 'white', 'light'] as BackgroundColor[],
  ecommerce: ['primary', 'white', 'light', 'white', 'light'] as BackgroundColor[],
  service: ['primary', 'white', 'light', 'white', 'light'] as BackgroundColor[],
} as const;

// Helper function to create custom patterns
export function createCustomPattern(
  baseColors: BackgroundColor[],
  overrides: Record<number, BackgroundColor> = {}
): BackgroundColor[] {
  const pattern = [...baseColors];
  
  // Apply overrides
  Object.entries(overrides).forEach(([index, color]) => {
    const numIndex = parseInt(index);
    if (numIndex >= 0 && numIndex < pattern.length) {
      pattern[numIndex] = color;
    }
  });
  
  return pattern;
} 