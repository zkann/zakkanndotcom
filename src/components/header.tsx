import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/" className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
              Zak Kann
            </Link>
          </div>
          <nav className="hidden md:flex space-x-10">
            <a href="#services" className="text-base font-medium text-gray-500 hover:text-gray-900 transition-colors">
              Services
            </a>
            <a href="#about" className="text-base font-medium text-gray-500 hover:text-gray-900 transition-colors">
              About
            </a>
            <Link href="/blog" className="text-base font-medium text-gray-500 hover:text-gray-900 transition-colors">
              Blog
            </Link>
            <a href="#contact" className="text-base font-medium text-gray-500 hover:text-gray-900 transition-colors">
              Contact
            </a>
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
} 