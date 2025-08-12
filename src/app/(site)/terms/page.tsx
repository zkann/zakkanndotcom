export const metadata = {
  title: 'Terms of service',
  description: 'Terms and conditions for using our services and website.',
};

export default function TermsPage() {
  return (
    <div className="bg-white">
      <div className="max-w-3xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Terms of service</h1>
        <p className="text-gray-700 leading-relaxed">
          By using this website or engaging our services, you agree to our terms. These include reasonable usage,
          confidentiality, and payment policies. Please contact us if you have any questions.
        </p>
      </div>
    </div>
  );
}

