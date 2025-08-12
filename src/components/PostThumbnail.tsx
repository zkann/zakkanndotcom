import Image from 'next/image';
import React from 'react';

type PostThumbnailProps = {
  src?: string | null;
  alt?: string;
  className?: string; // include aspect ratio and sizing, e.g. "aspect-[16/9]"
  label?: string; // optional fallback label
};

export default function PostThumbnail({ src, alt = '', className, label }: PostThumbnailProps) {
  return (
    <div className={`relative overflow-hidden bg-gray-100 ${className || ''}`}>
      {src ? (
        <Image src={src} alt={alt} fill className="object-cover" />
      ) : (
        <div className="absolute inset-0">
          <div className="h-full w-full bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex items-center gap-2 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M21 19V5a2 2 0 0 0-2-2H5c-1.1 0-2 .9-2 2v14l4-4 4 4 4-4 4 4z" />
              </svg>
              {label ? <span className="text-sm font-medium">{label}</span> : null}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

