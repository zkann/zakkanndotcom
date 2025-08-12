"use client";

import { cn } from '@/lib/utils';

type LogoProps = {
  size?: number;
  color?: string;
  className?: string;
  alt?: string;
};

export default function Logo({
  size = 28,
  color = '#F4D35E',
  className,
  alt = 'Zak Kann logo',
}: LogoProps) {
  const dimension = typeof size === 'number' ? `${size}px` : String(size);
  return (
    <span
      role="img"
      aria-label={alt}
      className={cn('inline-block rounded', className)}
      style={{
        width: dimension,
        height: dimension,
        backgroundColor: color,
        WebkitMaskImage: 'url(/logo-square.png)',
        maskImage: 'url(/logo-square.png)',
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        WebkitMaskSize: 'contain',
        maskSize: 'contain',
        WebkitMaskPosition: 'center',
        maskPosition: 'center',
        display: 'inline-block',
      }}
    />
  );
}

