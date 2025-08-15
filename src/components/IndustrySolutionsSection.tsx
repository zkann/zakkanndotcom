import Link from 'next/link';

export default function IndustrySolutionsSection({ background = "bg-white" }: { background?: string }) {
  const industries = [
    {
      name: 'Real Estate',
      description: 'Automate MLS & lead routing',
      href: '/real-estate-automation',
      icon: '🏠'
    },
    {
      name: 'Ecommerce',
      description: 'Sync inventory across channels',
      href: '/ecommerce-automation',
      icon: '🛒'
    },
    {
      name: 'Law Firms',
      description: 'Streamline client intake & billing',
      href: '/law-firm-automation',
      icon: '💼'
    }
  ];

  return (
    <section className={`${background} py-16`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Solutions Built for Your Industry
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {industries.map((industry) => (
            <Link
              key={industry.name}
              href={industry.href}
              className="group block"
            >
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-200 group-hover:scale-105">
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {industry.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {industry.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
        {/*
        <div className="text-center">
          <Link
            href="/industries"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
          >
            + See all industries we serve
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
        */}
      </div>
    </section>
  );
} 