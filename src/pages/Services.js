import React, { useState } from "react";
import { Shield, Eye, Lock } from "lucide-react";
import GetInTouchModal from "../components/GetInTouchModal";

const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const whyChoose = [
    {
      title: "Data Shielding",
      description:
        "Every file becomes a fortress with invisible screen watermarks and print protection, ensuring your data is always traceable and tamper-proof.",
      icon: <Shield className="w-8 h-8 text-[#5dd62c]" />,
    },
    {
      title: "Access Control & Monitoring",
      description:
        "Every access, view, or print is monitored in real-time, creating a complete audit trail and instant alerts for suspicious activities.",
      icon: <Eye className="w-8 h-8 text-[#5dd62c]" />,
    },
    {
      title: "Extended Defense",
      description:
        "Go beyond documents with data masking, USB protection, and password security — forming a multi-layer barrier around your enterprise ecosystem.",
      icon: <Lock className="w-8 h-8 text-[#5dd62c]" />,
    },
  ];

  const services = [
    {
      title: "Invisible Screen Watermarking",
      description:
        "Embed invisible, unique watermarks on every screen display. Track exactly who viewed what, when, and where — making screenshots and photos traceable.",
      features: [
        "Real-time watermark embedding",
        "User-specific identification",
        "Screenshot protection",
        "Complete audit trail",
      ],
    },
    {
      title: "Print Protection",
      description:
        "Every printed document carries a unique, invisible watermark that identifies the user, time, and location — making physical document leaks traceable.",
      features: [
        "Dynamic print watermarks",
        "Tamper-proof identification",
        "Physical document tracking",
        "Leak source identification",
      ],
    },
    {
      title: "Access Monitoring",
      description:
        "Complete visibility into who accesses your sensitive data, with real-time alerts and comprehensive logs.",
      features: [
        "Real-time tracking",
        "Behavioral analytics",
        "Instant alerts",
        "Compliance reporting",
      ],
    },
    {
      title: "Data Masking",
      description:
        "Protect sensitive data in testing environments with automatic masking while maintaining data utility.",
      features: [
        "Automated obfuscation",
        "Safe test environments",
        "Preserved data structure",
        "Compliance-ready masking",
      ],
    },
    {
      title: "USB Protection",
      description:
        "Secure USB interactions with malware scanning, sanitization, and monitoring of all removable media.",
      features: [
        "Malware detection",
        "File sanitization",
        "Usage monitoring",
        "Policy enforcement",
      ],
    },
    {
      title: "Password Security",
      description:
        "Zero-knowledge password management for teams with sharing controls and audit logs.",
      features: [
        "Team vaults",
        "Secure sharing",
        "Audit logs",
        "Zero-knowledge encryption",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* HEADER */}
      <section className="relative bg-gradient-to-br from-[#337418] to-[#5dd62c] py-24">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Security Services Reimagined</h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Real-time results, full visibility, expert execution
          </p>

          <button
            onClick={() => setIsModalOpen(true)}
            className="px-8 py-4 bg-white text-[#337418] rounded-full font-semibold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-lg"
          >
            Contact Us
          </button>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0f0f0f] mb-4">Why Choose ArqonSec</h2>
            <p className="text-xl text-gray-600">
              Unlock platform-powered cybersecurity engineered for modern threats.
            </p>
          </div>

          {/* 3-CARD BUCKET WITH 4-SIDED DOTS */}
          <div className="grid md:grid-cols-3 gap-12">
            {whyChoose.map((item, index) => (
              <div key={index} className="bucket-frame">
                {/* LEFT & RIGHT DOTS */}
                <div className="left-dots"></div>
                <div className="right-dots"></div>

                {/* CARD CONTENT */}
                <div className="bucket-inner">
                  <div className="flex justify-center mb-6">{item.icon}</div>

                  <h3 className="text-2xl font-bold text-center text-[#0f0f0f] mb-4">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-center mb-6">{item.description}</p>

                  <button className="px-6 py-2 mx-auto block rounded-xl text-white bg-[#5dd62c] transition-all hover:bg-[#4cb823] shadow-md">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-20 bg-[#f8f8f8]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0f0f0f] mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">
              Comprehensive cybersecurity solutions for your enterprise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-[#5dd62c]"
              >
                <h3 className="text-2xl font-bold text-[#0f0f0f] mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>

                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#5dd62c] rounded-full mt-2" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

              </div>
            ))}
          </div>
        </div>
      </section>

      <GetInTouchModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

    </div>
  );
};

export default Services;
