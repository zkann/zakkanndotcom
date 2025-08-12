import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">404 – Page not found</h1>
      <p className="text-gray-600 mb-6">The page you are looking for doesn’t exist or has been moved.</p>
      <div className="flex gap-4">
        <Link href="/" className="px-4 py-2 rounded-md bg-gray-100 text-gray-800 hover:bg-gray-200">Go home</Link>
        <Link href="/book" className="px-4 py-2 rounded-lg bg-cta text-white hover:brightness-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-cta focus-visible:ring-offset-white">Book my free 30-min call</Link>
      </div>
    </div>
  );
}

