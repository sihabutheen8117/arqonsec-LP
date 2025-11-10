import React, { useState, useEffect } from 'react';
import { Zap, Lock, Palette, Rocket, Lightbulb, Globe, Menu, X } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BlobAnimation from '../components/BlobAnimation ';
import SecLoader from '../components/SecLoader';

const Home = () => {

  
    useEffect(() => {
      window.particlesJS.load('particles-js', '/particles.json', function () {
        console.log('callback - particles.js config loaded');
      });
    }, []);
  
  
   
  
    const features = [
      {
        icon: <Zap className="w-8 h-8" />,
        title: "Lightning Fast",
        description: "Experience blazing-fast performance with optimized architecture designed for speed and efficiency"
      },
      {
        icon: <Lock className="w-8 h-8" />,
        title: "Secure & Private",
        description: "Enterprise-grade security with end-to-end encryption to protect your valuable data"
      },
      {
        icon: <Palette className="w-8 h-8" />,
        title: "Beautiful Design",
        description: "Stunning interfaces crafted with attention to detail for an exceptional user experience"
      },
      {
        icon: <Rocket className="w-8 h-8" />,
        title: "Scalable",
        description: "Built to grow with your needs, from startup to enterprise with seamless scaling"
      },
      {
        icon: <Lightbulb className="w-8 h-8" />,
        title: "Innovative",
        description: "Cutting-edge technology and features that keep you ahead of the competition"
      },
      {
        icon: <Globe className="w-8 h-8" />,
        title: "Global Reach",
        description: "Connect with audiences worldwide through our robust global infrastructure"
      }
    ];
  
    return (
      <div className="">
    
        <Header/>
    
        <div className='flex min-h-screen items-center justify-center'>
          <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 z-10 ">
            <div className="max-w-5xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-extrabold mb-6 leading-tight bg-gradient-to-b from-black to-black/70 bg-clip-text text-transparent animate-fade-in">
              Turn Your Data Into <span className='text-[#0056b3]'> Fort Knox</span>
              </h1>
              <p className="text-xl md:text-2xl text-black/80 mb-12 max-w-3xl mx-auto font-light animate-fade-in-delay">
              Every document becomes a digital fingerprint. Every access gets tracked. Every leak gets caught. Welcome to the future of data protection.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
                <button className="group relative text-white px-8 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50">
                  <span className="relative z-10">See it in Action</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </button>
                <button className="px-7 py-2.5 bg-white/10 backdrop-blur-sm rounded-full font-semibold text-lg border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all hover:scale-105">
                  Explore Products
                </button>
              </div>
            </div>
          </section>
          <div className='px-10'>
            <BlobAnimation/>
          </div>
          
        </div>


        <div className='flex min-h-screen items-center justify-center mx-10'>
          <div className='px-10'>
            <SecLoader/>
          </div>
          <section className="relative min-h-screen flex items-center justify-center px-6 z-10">
            <div className="max-w-5xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-extrabold mb-6 leading-tight bg-gradient-to-b from-black to-black/70 bg-clip-text text-transparent animate-fade-in">
                Control access. Reduce risk. Protect data.<span className='text-[#0056b3]'></span>
              </h1>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <div
                    className="flex-shrink-0 w-1.5 h-1.5 bg-[#0043FF] mt-2"
                    style={{ borderRadius: "2px" }}
                  ></div>
                  <p className="text-[#494949] text-[16px] md:text-[18px] leading-relaxed font-dm-sans sm-tracking-features-description">
                    <span className="font-bold">Data Shielding : </span>
                    <span className="font-normal">Every file becomes a fortress with <strong>invisible screen watermarks</strong> and <strong>print protection</strong>, ensuring your data is always traceable and tamper-proof.</span>
                  </p>
                </li>

                <li className="flex gap-3">
                  <div
                    className="flex-shrink-0 w-1.5 h-1.5 bg-[#0043FF] mt-2"
                    style={{ borderRadius: "2px" }}
                  ></div>
                  <p className="text-[#494949] text-[16px] md:text-[18px] leading-relaxed font-dm-sans sm-tracking-features-description">
                    <span className="font-bold">Access Control & Monitoring : </span>
                    <span className="font-normal">Every access, view, or print is <strong>monitored in real-time</strong>, creating a complete <strong>audit trail</strong> and instant alerts for suspicious activities.</span>
                  </p>
                </li>

                <li className="flex gap-3">
                  <div
                    className="flex-shrink-0 w-1.5 h-1.5 bg-[#0043FF] mt-2"
                    style={{ borderRadius: "2px" }}
                  ></div>
                  <p className="text-[#494949] text-[16px] md:text-[18px] leading-relaxed font-dm-sans sm-tracking-features-description">
                    <span className="font-bold">Extended Defense : </span>
                    <span className="font-normal">Go beyond documents with <strong>data masking</strong>, <strong>USB protection</strong>, and <strong>password security</strong> — forming a multi-layer barrier around your enterprise ecosystem.</span>
                  </p>
                </li>
              </ul>
            </div>
          </section>
        </div>
      
        <section id="features" className="relative z-10 py-20 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 transition-all duration-500 hover:bg-white/10 hover:border-white/30 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/30"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-6 text-white">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-white/70 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
  
        <style jsx>{`
          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          .animate-fade-in {
            animation: fade-in 1s ease-out forwards;
          }
          
          .animate-fade-in-delay {
            animation: fade-in 1s ease-out 0.3s forwards;
            opacity: 0;
          }
          
          .animate-fade-in-delay-2 {
            animation: fade-in 1s ease-out 0.6s forwards;
            opacity: 0;
          }
        `}</style>
  
        <div id="particles-js"></div>
  
      </div>
    );
}

export default Home
