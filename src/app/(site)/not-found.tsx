import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="bg-white">
      <div className="max-w-3xl mx-auto px-4 py-24 sm:px-6 lg:px-8 text-center">
        <p className="text-sm font-semibold text-blue-600">404</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Page not found</h1>
        <p className="mt-2 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Link href="/" className="px-4 py-2 rounded-md bg-gray-100 text-gray-800 hover:bg-gray-200">
            Back to home
          </Link>
          <Link href="/#contact" className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700">
            Book a call
          </Link>
        </div>
      </div>
    </div>
  );
}

