import { redirect } from 'next/navigation';

export default function BookPage() {
  // This will redirect on the server side, preventing the RSC fetch error
  redirect('https://calendly.com/zakkann/30min');
}

// Fallback component in case the redirect doesn't work immediately
function BookPageFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cta mx-auto mb-4"></div>
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">Redirecting to Calendly...</h1>
        <p className="text-gray-600">You&apos;ll be redirected to book your free 30-minute call.</p>
        <p className="text-sm text-gray-500 mt-4">
          If you&apos;re not redirected automatically,{' '}
          <a 
            href="https://calendly.com/zakkann/30min" 
            className="text-cta hover:underline font-medium"
          >
            click here
          </a>
        </p>
      </div>
    </div>
  );
}

// Export the fallback component for use in layout if needed
export { BookPageFallback }; 