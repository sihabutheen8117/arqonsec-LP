import React from 'react';
import { Check, Monitor, FileText } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ArqonLockLogo from '../components/logos/ArqonLockLogo';
import ArqonMaskLogo from '../components/logos/ArqonMaskLogo';
import ArqonPortLogo from '../components/logos/ArqonPortLogo';
import ArqonPassLogo from '../components/logos/ArqonPassLogo';

const Products = () => {
  return (
    <div className="min-h-screen bg-white mt-5">

      {/* --- Security Products Section --- */}
      <section className="relative bg-gradient-to-br from-purple-100 via-pink-50 to-blue-50 py-20 overflow-visible">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-200/30 via-pink-100/30 to-blue-100/30"></div>

        <div className="max-w-5xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-extrabold mb-6 leading-tight bg-gradient-to-b from-black to-black/90 bg-clip-text text-transparent animate-fade-in">
              Security Products
              </h1>
              <p className="text-xl md:text-2xl text-black/80 mb-12 max-w-3xl mx-auto font-light animate-fade-in-delay">
              Advanced cybersecurity solutions designed to protect your digital assets
              </p>
        </div>
      
      </section>

      {/* --- ArqonLock Section --- */}
      <section className="relative py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 text-purple-600 text-sm font-medium border border-purple-200">
              <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 animate-pulse"></span>
              Available Now
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent text-center mb-4">
            ArqonLock Protection
          </h2>

          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Advanced watermarking technology for complete data protection
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-300 to-pink-300 rounded-2xl opacity-30 group-hover:opacity-50 blur-xl transition-all duration-500"></div>
                <div className="relative bg-white/80 backdrop-blur-lg p-8 rounded-2xl border-2 border-purple-200 shadow-xl">
                  <ArqonLockLogo size={300} />
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-gray-800 mb-4">Invisible Screen & Print Protection</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  ArqonLock embeds invisible watermarks into screen content and printed documents, 
                  making every access traceable and preventing unauthorized sharing.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white/80 backdrop-blur-lg p-6 rounded-xl border-2 border-purple-200 hover:border-purple-400 hover:shadow-xl transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Monitor className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">Screen Watermarks</h4>
                  <p className="text-gray-600 text-sm">Real-time watermarking of all screen content</p>
                </div>

                <div className="bg-white/80 backdrop-blur-lg p-6 rounded-xl border-2 border-pink-200 hover:border-pink-400 hover:shadow-xl transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">Print Protection</h4>
                  <p className="text-gray-600 text-sm">Dynamic watermarks on all printed documents</p>
                </div>
              </div>

              <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-lg text-white overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50">
                <span className="relative z-10">Request Demo →</span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- Product Suite Section --- */}
      <section className="relative py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-black text-center mb-4 leading-tight">
            Our Complete Product Suite
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Comprehensive cybersecurity solutions available for your enterprise
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative bg-white/80 backdrop-blur-lg rounded-2xl overflow-hidden border-2 border-purple-200 hover:border-purple-400 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-300/50">
              <div className="absolute top-4 right-4 z-10">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 text-purple-600 text-xs font-medium border border-purple-200">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2 animate-pulse"></span>
                  Available Now
                </span>
              </div>

              <div className="relative h-64 bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-200/20 to-transparent group-hover:from-purple-300/30 transition-all duration-500"></div>
                <ArqonMaskLogo size={180} />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">ArqonMask</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Advanced data masking for development and testing environments
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <Check className="w-5 h-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">Database masking</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="w-5 h-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">File obfuscation</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="w-5 h-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">Safe test data</span>
                  </div>
                </div>

                <div className="flex justify-center">
                  <span className="text-purple-600 text-sm font-semibold px-4 py-2 rounded-lg bg-purple-100 border border-purple-200">
                    Available Now
                  </span>
                </div>
              </div>
            </div>

            <div className="group relative bg-white/80 backdrop-blur-lg rounded-2xl overflow-hidden border-2 border-cyan-200 hover:border-cyan-400 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-300/50">
              <div className="absolute top-4 right-4 z-10">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-600 text-xs font-medium border border-cyan-200">
                  <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-2 animate-pulse"></span>
                  Available Now
                </span>
              </div>

              <div className="relative h-64 bg-gradient-to-br from-cyan-100 to-blue-100 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-200/20 to-transparent group-hover:from-cyan-300/30 transition-all duration-500"></div>
                <ArqonPortLogo size={180} />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">ArqonPort</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Secure USB port control and malware scanning platform
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <Check className="w-5 h-5 text-cyan-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">Malware detection</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="w-5 h-5 text-cyan-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">File sanitization</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="w-5 h-5 text-cyan-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">Usage monitoring</span>
                  </div>
                </div>

                <div className="flex justify-center">
                  <span className="text-cyan-600 text-sm font-semibold px-4 py-2 rounded-lg bg-cyan-100 border border-cyan-200">
                    Available Now
                  </span>
                </div>
              </div>
            </div>

            <div className="group relative bg-white/80 backdrop-blur-lg rounded-2xl overflow-hidden border-2 border-pink-200 hover:border-pink-400 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-pink-300/50">
              <div className="absolute top-4 right-4 z-10">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-pink-100 to-rose-100 text-pink-600 text-xs font-medium border border-pink-200">
                  <span className="w-1.5 h-1.5 bg-pink-500 rounded-full mr-2 animate-pulse"></span>
                  Available Now
                </span>
              </div>

              <div className="relative h-64 bg-gradient-to-br from-pink-100 to-rose-100 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-200/20 to-transparent group-hover:from-pink-300/30 transition-all duration-500"></div>
                <ArqonPassLogo size={180} />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">ArqonPass</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Zero-knowledge enterprise password manager for teams
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <Check className="w-5 h-5 text-pink-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">Team passwords</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="w-5 h-5 text-pink-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">Secure sharing</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="w-5 h-5 text-pink-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">Audit logs</span>
                  </div>
                </div>

                <div className="flex justify-center">
                  <span className="text-pink-600 text-sm font-semibold px-4 py-2 rounded-lg bg-pink-100 border border-pink-200">
                    Available Now
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Products;