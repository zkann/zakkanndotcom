export const metadata = {
  title: 'Privacy policy',
  description: 'How we collect, use, and protect your data.',
};

export default function PrivacyPage() {
  return (
    <div className="bg-white">
      <div className="max-w-3xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy policy</h1>
        <p className="text-gray-700 leading-relaxed">
          We respect your privacy. We only collect the data necessary to provide our services and improve the
          website experience. We do not sell your data. If you have questions, contact us at
          {' '}<a className="text-secondary hover:opacity-80" href="mailto:zak@zakkann.com?subject=New%20inquiry%20via%20zakkann.com">zak@zakkann.com</a>.
        </p>
      </div>
    </div>
  );
}

