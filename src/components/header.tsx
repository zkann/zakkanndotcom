"use client";

import Link from 'next/link';
import { useState } from 'react';
import Logo from '@/components/Logo';

export default function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const toggleMobile = () => setIsMobileOpen((prev) => !prev);
  return (
    <header className="sticky top-0 z-50 bg-primary/95 backdrop-blur supports-[backdrop-filter]:bg-primary/90 border-b border-secondary shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:py-5">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/" aria-label="Home" className="flex items-center gap-2 group">
              <Logo size={40} className="shrink-0" />
              <span className="text-2xl font-bold text-white group-hover:text-highlight transition-colors">Zak Kann</span>
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8 items-center">
            <Link href="/#deliverables" data-event="nav_click" data-location="header" data-title="Services" className="text-sm font-medium text-gray-200 hover:text-white transition-colors">
              Services
            </Link>
            <Link href="/about" data-event="nav_click" data-location="header" data-title="About" className="text-sm font-medium text-gray-200 hover:text-white transition-colors">
              About
            </Link>
            <Link href="/blog" data-event="nav_click" data-location="header" data-title="Blog" className="text-sm font-medium text-gray-200 hover:text-white transition-colors">
              Blog
            </Link>
            <Link href="/#contact" data-event="nav_click" data-location="header" data-title="Contact" className="text-sm font-medium text-gray-200 hover:text-white transition-colors">
              Contact
            </Link>
            <Link
              href="/book"
              data-event="cta_click"
              data-location="header"
              className="ml-2 inline-flex items-center px-4 py-2 rounded-lg bg-cta text-white text-sm font-semibold hover:brightness-90 transition-colors shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-cta focus-visible:ring-offset-primary"
            >
              Book my free 30-min call
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={toggleMobile}
              className="rounded-md p-2 inline-flex items-center justify-center text-gray-200 hover:text-white hover:bg-secondary/50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-highlight"
              aria-expanded={isMobileOpen}
              aria-controls="mobile-menu"
            >
              <span className="sr-only">{isMobileOpen ? 'Close main menu' : 'Open main menu'}</span>
              {isMobileOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu panel */}
        {isMobileOpen && (
          <div id="mobile-menu" className="md:hidden pb-4 animate-in fade-in slide-in-from-top-2 border-t border-secondary bg-primary/95 backdrop-blur supports-[backdrop-filter]:bg-primary/90">
            <div className="space-y-1">
              <Link href="/#deliverables" data-event="nav_click" data-location="header-mobile" data-title="Services" className="block px-3 py-2 rounded-md text-base font-medium text-gray-100 hover:bg-secondary/40" onClick={() => setIsMobileOpen(false)}>
                Services
              </Link>
              <Link href="/about" data-event="nav_click" data-location="header-mobile" data-title="About" className="block px-3 py-2 rounded-md text-base font-medium text-gray-100 hover:bg-secondary/40" onClick={() => setIsMobileOpen(false)}>
                About
              </Link>
              <Link href="/blog" data-event="nav_click" data-location="header-mobile" data-title="Blog" className="block px-3 py-2 rounded-md text-base font-medium text-gray-100 hover:bg-secondary/40" onClick={() => setIsMobileOpen(false)}>
                Blog
              </Link>
              <Link href="/#contact" data-event="nav_click" data-location="header-mobile" data-title="Contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-100 hover:bg-secondary/40" onClick={() => setIsMobileOpen(false)}>
                Contact
              </Link>
              <Link
                href="/book"
                data-event="cta_click"
                data-location="header-mobile"
                className="w-full text-left block px-3 py-2 rounded-md text-base font-semibold text-white bg-cta hover:brightness-90 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-cta focus-visible:ring-offset-primary"
                onClick={() => setIsMobileOpen(false)}
              >
                Book my free 30-min call
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
} 