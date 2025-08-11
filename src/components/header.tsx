"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const toggleMobile = () => setIsMobileOpen((prev) => !prev);
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/" className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
              Zak Kann
            </Link>
          </div>
          <nav className="hidden md:flex space-x-10 items-center">
            <Link href="/#services" className="text-base font-medium text-gray-500 hover:text-gray-900 transition-colors">
              Services
            </Link>
            <Link href="/about" className="text-base font-medium text-gray-500 hover:text-gray-900 transition-colors">
              About
            </Link>
            <Link href="/blog" className="text-base font-medium text-gray-500 hover:text-gray-900 transition-colors">
              Blog
            </Link>
            <Link href="/#contact" className="text-base font-medium text-gray-500 hover:text-gray-900 transition-colors">
              Contact
            </Link>
            <Link
              href="/book"
              className="ml-4 inline-flex items-center px-4 py-2 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              Book a call
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={toggleMobile}
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
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
          <div id="mobile-menu" className="md:hidden pb-4 animate-in fade-in slide-in-from-top-2">
            <div className="space-y-1">
              <Link href="/#services" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100" onClick={() => setIsMobileOpen(false)}>
                Services
              </Link>
              <Link href="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100" onClick={() => setIsMobileOpen(false)}>
                About
              </Link>
              <Link href="/blog" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100" onClick={() => setIsMobileOpen(false)}>
                Blog
              </Link>
              <Link href="/#contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100" onClick={() => setIsMobileOpen(false)}>
                Contact
              </Link>
              <Link
                href="/book"
                className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
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