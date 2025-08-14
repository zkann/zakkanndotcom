import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Background color alternation utility
export const backgroundColors = {
  white: "bg-white",
  light: "bg-slate-50", 
  gray: "bg-gray-50",
  primary: "bg-primary",
  dark: "bg-slate-900"
} as const;

export type BackgroundColor = keyof typeof backgroundColors;

// Helper function to get alternating background colors
export function getAlternatingBackgrounds(
  count: number, 
  startWith: BackgroundColor = "white",
  colors: BackgroundColor[] = ["white", "light"]
): string[] {
  const result: string[] = [];
  const colorValues = colors.map(color => backgroundColors[color]);
  
  for (let i = 0; i < count; i++) {
    const colorIndex = i % colorValues.length;
    result.push(colorValues[colorIndex]);
  }
  
  // If starting with a different color, shift the array
  if (startWith !== colors[0]) {
    const startIndex = colors.indexOf(startWith);
    if (startIndex !== -1) {
      const shiftedColors = [...colors.slice(startIndex), ...colors.slice(0, startIndex)];
      for (let i = 0; i < count; i++) {
        const colorIndex = i % shiftedColors.length;
        result[i] = backgroundColors[shiftedColors[colorIndex]];
      }
    }
  }
  
  return result;
}
