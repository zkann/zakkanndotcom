import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface PageSectionProps {
  children: ReactNode;
  background?: string;
  className?: string;
  id?: string;
  padding?: 'sm' | 'md' | 'lg' | 'xl';
}

const paddingClasses = {
  sm: 'py-12',
  md: 'py-16', 
  lg: 'py-20',
  xl: 'py-24'
};

export default function PageSection({
  children,
  background = 'bg-white',
  className,
  id,
  padding = 'lg'
}: PageSectionProps) {
  return (
    <section 
      id={id}
      className={cn(
        background,
        paddingClasses[padding],
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
} 