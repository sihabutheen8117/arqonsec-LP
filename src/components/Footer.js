import React, { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Send,
  ArrowRight,
} from "lucide-react";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Spacer */}
      <div className="flex-grow"></div>

      {/* Footer */}
      <footer className="relative mt-20">
        {/* Curved Top-Left Corner */}
        <div className="absolute -top-1 left-0 w-52 h-52 overflow-hidden">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <linearGradient id="cornerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <animate attributeName="x1" values="0%;100%;0%" dur="4s" repeatCount="indefinite" />
                <animate attributeName="y1" values="0%;100%;0%" dur="4s" repeatCount="indefinite" />
                <stop offset="0%" stopColor="#00093c" />
                <stop offset="100%" stopColor="#2d0b00" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 10}s`,
              }}
            />
          ))}
        </div>

        {/* Main Footer Content */}
        <div
          className="relative pt-16 pb-8 overflow-hidden rounded-tl-[120px]"
          style={{
            background: "linear-gradient(90deg, #00093c 0%, #2d0b00 100%)",
          }}
        >
          {/* Animated Waves */}
          <svg
  className="absolute inset-0 w-full h-full opacity-10"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 1920 100"
  preserveAspectRatio="none"
>
  <defs>
    <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.1" />
      <stop offset="50%" stopColor="#ffffff" stopOpacity="0.3" />
      <stop offset="100%" stopColor="#ffffff" stopOpacity="0.1" />
    </linearGradient>
  </defs>

  <path
    d="M0,50 Q480,30 960,50 T1920,50 L1920,100 L0,100 Z"
    fill="url(#waveGradient)"
  >
    <animate
      attributeName="d"
      values="
        M0,50 Q480,30 960,50 T1920,50 L1920,100 L0,100 Z;
        M0,50 Q480,70 960,50 T1920,50 L1920,100 L0,100 Z;
        M0,50 Q480,30 960,50 T1920,50 L1920,100 L0,100 Z"
      dur="8s"
      repeatCount="indefinite"
    />
  </path>
</svg>


          {/* All Sections in Separate Columns */}
          <div className="max-w-7xl mx-auto px-8 relative z-10">
            <div
              className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              {/* About */}
              <div className="space-y-4 transform transition-all duration-500 hover:scale-105">
                <div className="relative inline-block group">
                  <div className="text-2xl font-audiowide bg-white bg-clip-text text-transparent font-medium">
                    ArqonSec ❯
                  </div>
                  <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-white via-cyan-300 to-transparent transition-all duration-700"></div>
                </div>
                <p className="text-white/80 text-sm leading-relaxed">
                Leading cybersecurity solutions in Saudi Arabia and the Middle East. Protecting enterprises with innovative screen watermarking and print copy prevention technologies.
                </p>
                <div className="flex space-x-4 pt-2">
                  {[Facebook, Twitter, Linkedin, Instagram].map((Icon, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="text-white/70 hover:text-white transition-all duration-300 hover:scale-125 hover:rotate-12 transform"
                    >
                      <Icon size={20} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Services */}
              <div className="space-y-4 transform transition-all duration-500 hover:scale-105">
                <div className="relative inline-block group">
                  <h3 className="text-white text-lg font-semibold mb-3">Support</h3>
                  <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-white via-cyan-300 to-transparent transition-all duration-700"></div>
                </div>
                <ul className="space-y-2">
                  {["Contact", "Technical Support", "Sales Inquiries", "Privacy Policy", "Consulting"].map(
                    (service, idx) => (
                      <li key={idx} className="group flex items-center">
                        <ArrowRight
                          size={14}
                          className="text-white/0 group-hover:text-white/80 transition-all duration-300 mr-0 group-hover:mr-2"
                        />
                        <a
                          href="#"
                          className="text-white/80 text-sm hover:text-white transition-all duration-300"
                        >
                          {service}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </div>

              {/* Quick Links */}
              <div className="space-y-4 transform transition-all duration-500 hover:scale-105">
                <div className="relative inline-block group">
                  <h3 className="text-white text-lg font-semibold mb-3">Quick Links</h3>
                  <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-white via-cyan-300 to-transparent transition-all duration-700"></div>
                </div>
                <ul className="space-y-2">
                  {["Product", "Services", "Partners", "About", "Contact"].map((link, idx) => (
                    <li key={idx} className="group flex items-center">
                      <ArrowRight
                        size={14}
                        className="text-white/0 group-hover:text-white/80 transition-all duration-300 mr-0 group-hover:mr-2"
                      />
                      <a
                        href="#"
                        className="text-white/80 text-sm hover:text-white transition-all duration-300"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div className="space-y-4 transform transition-all duration-500 hover:scale-105">
                <div className="relative inline-block group">
                  <h3 className="text-white text-lg font-semibold mb-3">Contact</h3>
                  <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-white via-cyan-300 to-transparent transition-all duration-700"></div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3 group cursor-pointer">
                    <MapPin
                      size={18}
                      className="text-white/70 mt-0.5 group-hover:text-white group-hover:scale-110 transition-all"
                    />
                    <span className="text-white/80 text-sm group-hover:text-white transition-colors">
                    Riyadh, Saudi Arabia
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 group cursor-pointer">
                    <Phone
                      size={18}
                      className="text-white/70 group-hover:text-white group-hover:rotate-12 transition-all"
                    />
                    <span className="text-white/80 text-sm group-hover:text-white transition-colors">
                    +966 55 544 0640
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 group cursor-pointer">
                    <Mail
                      size={18}
                      className="text-white/70 group-hover:text-white group-hover:scale-110 transition-all"
                    />
                    <span className="text-white/80 text-sm group-hover:text-white transition-colors">
                    info@arqonsec.sa
                    </span>
                  </div>
                </div>

                {/* Newsletter */}
                <div className="pt-4">
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Send us a Message"
                      className="w-full px-4 py-2 pr-10 rounded-full bg-white/10 text-white text-sm placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
                    />
                    <button className="absolute right-2 top-1/2 -translate-y-1/2 text-white/70 hover:text-white hover:scale-110 transition-all">
                      <Send size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="pt-8 border-t border-white/20 relative">
              <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-white to-transparent animate-scan"></div>

              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <p className="text-white/70 text-sm flex items-center">
                  <span className="inline-block w-2 h-2 bg-white/70 rounded-full mr-2 animate-pulse"></span>
                  © 2025 ArqonSec. All rights reserved.
                </p>
                <div className="flex space-x-6">
                  {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                    (item, idx) => (
                      <a
                        key={idx}
                        href="#"
                        className="text-white/70 text-sm hover:text-white transition-all duration-300 relative group"
                      >
                        {item}
                        <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
                      </a>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) translateX(50px);
            opacity: 0;
          }
        }

        @keyframes scan {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-float {
          animation: float linear infinite;
        }

        .animate-scan {
          animation: scan 3s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Footer;
