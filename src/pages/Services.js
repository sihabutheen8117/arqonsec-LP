import React, { useState } from 'react';
import { Shield, Eye, Lock } from 'lucide-react';
import GetInTouchModal from '../components/GetInTouchModal';

const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const whyChoose = [
    {
      title: 'Data Shielding',
      description: 'Every file becomes a fortress with invisible screen watermarks and print protection, ensuring your data is always traceable and tamper-proof.',
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: 'Access Control & Monitoring',
      description: 'Every access, view, or print is monitored in real-time, creating a complete audit trail and instant alerts for suspicious activities.',
      icon: <Eye className="w-8 h-8" />
    },
    {
      title: 'Extended Defense',
      description: 'Go beyond documents with data masking, USB protection, and password security — forming a multi-layer barrier around your enterprise ecosystem.',
      icon: <Lock className="w-8 h-8" />
    }
  ];

  const services = [
    {
      title: 'Invisible Screen Watermarking',
      description: 'Embed invisible, unique watermarks on every screen display. Track exactly who viewed what, when, and where — making screenshots and photos traceable back to the source.',
      features: [
        'Real-time watermark embedding',
        'User-specific identification',
        'Screenshot protection',
        'Complete audit trail'
      ]
    },
    {
      title: 'Print Protection',
      description: 'Every printed document carries a unique, invisible watermark that identifies the user, time, and location — making physical document leaks traceable.',
      features: [
        'Dynamic print watermarks',
        'Tamper-proof identification',
        'Physical document tracking',
        'Leak source identification'
      ]
    },
    {
      title: 'Access Monitoring',
      description: 'Complete visibility into who accesses your sensitive data, with real-time alerts for suspicious behavior and comprehensive audit logs.',
      features: [
        'Real-time access tracking',
        'Behavioral analytics',
        'Instant security alerts',
        'Compliance reporting'
      ]
    },
    {
      title: 'Data Masking',
      description: 'Protect sensitive data in development and testing environments by automatically masking confidential information while maintaining data utility.',
      features: [
        'Automated data obfuscation',
        'Safe test environments',
        'Preserved data structure',
        'Compliance-ready masking'
      ]
    },
    {
      title: 'USB Protection',
      description: 'Secure USB port usage with malware scanning, file sanitization, and complete monitoring of all removable media interactions.',
      features: [
        'Malware detection',
        'File sanitization',
        'Usage monitoring',
        'Policy enforcement'
      ]
    },
    {
      title: 'Password Security',
      description: 'Zero-knowledge enterprise password management for teams, with secure sharing, audit logs, and comprehensive access control.',
      features: [
        'Team password vaults',
        'Secure credential sharing',
        'Access audit logs',
        'Zero-knowledge encryption'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-br from-[#337418] to-[#5dd62c] py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Security Services Reimagined
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Real-time results, full visibility, expert execution
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-block px-8 py-4 bg-white text-[#337418] rounded-full font-semibold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-lg"
          >
            Contact Us
          </button>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0f0f0f] mb-4">
              Why Choose ArqonSec
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Why settle for traditional cybersecurity when you can unlock modern platform-powered protection?
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {whyChoose.map((item, index) => (
              <div
                key={index}
                className="group relative bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-[#5dd62c] hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-[#5dd62c]/10 rounded-xl flex items-center justify-center mb-6 text-[#5dd62c] group-hover:bg-[#5dd62c] group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#0f0f0f] mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#f8f8f8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0f0f0f] mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive cybersecurity solutions for your enterprise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#5dd62c]"
              >
                <h3 className="text-2xl font-bold text-[#0f0f0f] mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#5dd62c] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GetInTouchModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Services;
