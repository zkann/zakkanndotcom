"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const toggleMobile = () => setIsMobileOpen((prev) => !prev);
  return (
    <header className="sticky top-0 z-50 bg-[#1B263B]/95 backdrop-blur supports-[backdrop-filter]:bg-[#1B263B]/90 border-b border-[#415A77] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/" className="text-2xl font-bold text-white hover:text-[#F4D35E] transition-colors">
              Zak Kann
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8 items-center">
            <Link href="/#services" className="text-sm font-medium text-gray-200 hover:text-white transition-colors">
              Services
            </Link>
            <Link href="/about" className="text-sm font-medium text-gray-200 hover:text-white transition-colors">
              About
            </Link>
            <Link href="/blog" className="text-sm font-medium text-gray-200 hover:text-white transition-colors">
              Blog
            </Link>
            <Link href="/#contact" className="text-sm font-medium text-gray-200 hover:text-white transition-colors">
              Contact
            </Link>
            <Link
              href="/book"
              className="ml-2 inline-flex items-center px-4 py-2 rounded-md bg-[#E63946] text-white text-sm font-semibold hover:brightness-90 transition-colors shadow-md"
            >
              Book a call
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={toggleMobile}
              className="rounded-md p-2 inline-flex items-center justify-center text-gray-200 hover:text-white hover:bg-[#415A77]/50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#F4D35E]"
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
          <div id="mobile-menu" className="md:hidden pb-4 animate-in fade-in slide-in-from-top-2 border-t border-[#415A77] bg-[#1B263B]/95 backdrop-blur supports-[backdrop-filter]:bg-[#1B263B]/90">
            <div className="space-y-1">
              <Link href="/#services" className="block px-3 py-2 rounded-md text-base font-medium text-gray-100 hover:bg-[#415A77]/40" onClick={() => setIsMobileOpen(false)}>
                Services
              </Link>
              <Link href="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-100 hover:bg-[#415A77]/40" onClick={() => setIsMobileOpen(false)}>
                About
              </Link>
              <Link href="/blog" className="block px-3 py-2 rounded-md text-base font-medium text-gray-100 hover:bg-[#415A77]/40" onClick={() => setIsMobileOpen(false)}>
                Blog
              </Link>
              <Link href="/#contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-100 hover:bg-[#415A77]/40" onClick={() => setIsMobileOpen(false)}>
                Contact
              </Link>
              <Link
                href="/book"
                className="w-full text-left block px-3 py-2 rounded-md text-base font-semibold text-white bg-[#E63946] hover:brightness-90 shadow-sm"
                onClick={() => setIsMobileOpen(false)}
              >
                Book a call
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
} 