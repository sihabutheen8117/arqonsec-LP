import React from 'react';

const Company = () => {
  const values = [
    {
      title: 'Simple Solutions',
      description: 'We believe cybersecurity should be simple to use, understand, and manage. Complex solutions that nobody uses don\'t protect anyone.',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="18" stroke="#5dd62c" strokeWidth="2.5" className="animate-pulse"/>
          <circle cx="24" cy="24" r="12" stroke="#5dd62c" strokeWidth="2" opacity="0.6"/>
          <circle cx="24" cy="24" r="6" fill="#5dd62c"/>
        </svg>
      )
    },
    {
      title: 'Local Understanding',
      description: 'Based in Saudi Arabia, we understand local business practices, regulations, and the specific cybersecurity challenges organizations face in our region.',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="18" stroke="#5dd62c" strokeWidth="2.5"/>
          <path d="M24 12 L24 24 L32 32" stroke="#5dd62c" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="24" cy="24" r="3" fill="#5dd62c"/>
        </svg>
      )
    },
    {
      title: 'Customer Success',
      description: 'Our success is measured by our customers\' security. We provide ongoing support and partnership, not just software.',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <path d="M24 12 L28 20 L36 22 L30 28 L32 36 L24 32 L16 36 L18 28 L12 22 L20 20 L24 12 Z" stroke="#5dd62c" strokeWidth="2.5" fill="none"/>
        </svg>
      )
    }
  ];

  const industries = [
    {
      title: 'Medical Organizations',
      description: 'Protect patient records from unauthorized access and sharing',
      challenge: 'Patient data leaks',
      solution: 'Track every record access',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <path d="M24 8 L24 40 M8 24 L40 24" stroke="#ef4444" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      title: 'Service Companies',
      description: 'Secure customer data and financial information',
      challenge: 'Trading data theft',
      solution: 'Watermark all documents',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <rect x="12" y="12" width="24" height="24" stroke="#3b82f6" strokeWidth="2.5" fill="none"/>
          <path d="M12 20 L36 20 M12 28 L36 28" stroke="#3b82f6" strokeWidth="2"/>
        </svg>
      )
    },
    {
      title: 'Property Companies',
      description: 'Protect property valuations and client information',
      challenge: 'Valuation leaks to competitors',
      solution: 'Traceable documents',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <path d="M24 8 L40 20 L40 40 L8 40 L8 20 Z" stroke="#10b981" strokeWidth="2.5" fill="none"/>
          <rect x="20" y="28" width="8" height="12" fill="#10b981"/>
        </svg>
      )
    },
    {
      title: 'Legal Practices',
      description: 'Maintain client confidentiality and document security',
      challenge: 'Confidential case leaks',
      solution: 'Traceable documents',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <path d="M16 8 L16 40 M32 8 L32 40 M16 24 L32 24" stroke="#8b5cf6" strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
      )
    }
  ];

  const stats = [
    { value: '20%', label: 'of data breaches come from inside organizations' },
    { value: '287 days', label: 'average time to detect a breach' },
    { value: '68M,M', label: 'average cost of a data breach' },
    { value: '0%', label: 'visibility into document sharing before Arqonlock' }
  ];

  return (
    <div className="min-h-screen bg-white font-inter">
      <section className="relative bg-gradient-to-br from-[#337418] to-[#5dd62c] py-24 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            About ArqonSec
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Saudi cybersecurity company protecting organizations from data leaks and insider threats
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Mission
              </h2>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p>
                  ArqonSec was founded in 2025 to solve a critical problem: organizations in Saudi Arabia needed better protection against data leaks from inside their companies.
                </p>
                <p>
                  Traditional security focuses on keeping outsiders out. We focus on knowing exactly what happens to your sensitive data once it's inside your organization.
                </p>
                <p>
                  Our Arqonlock solution provides complete visibility and accountability for document access, ensuring that every interaction with sensitive data is tracked and traceable.
                </p>
              </div>
            </div>

            <div className="bg-[#202020] rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-8">
                Why We Started ArqonSec
              </h3>
              <div className="space-y-6">
                {stats.map((stat, index) => (
                  <div key={index} className="border-l-4 border-[#5dd62c] pl-6">
                    <div className="text-3xl font-bold text-[#5dd62c] mb-2">
                      {stat.value}
                    </div>
                    <p className="text-gray-400 text-sm">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Our Values
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-[#202020] rounded-xl p-8 hover:bg-[#2a2a2a] transition-all duration-300"
              >
                <div className="mb-6">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0f0f0f] mb-4">
              Industries We Protect
            </h2>
            <p className="text-xl text-gray-600">
              Real solutions for real data protection challenges
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-[#202020] rounded-xl p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-4">
                  {industry.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {industry.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {industry.description}
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-red-400 font-semibold">Challenge:</span>
                    <span className="text-gray-400">{industry.challenge}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#5dd62c] font-semibold">Solution:</span>
                    <span className="text-gray-400">{industry.solution}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Company;
