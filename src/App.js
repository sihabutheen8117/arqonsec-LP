import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Company from './pages/Company';
import Services from './pages/Services';
import ContactForm from './components/ContactForm';

import './App.css';
import 'particles.js';

function App() {

  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        const handleMouseMove = (e) => {
          setMousePos({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
        };
    
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('mousemove', handleMouseMove);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
          window.removeEventListener('mousemove', handleMouseMove);
        };
      }, []);

  return (
      <div className="relative bg-white overflow-hidden">
        <Header/>

          {/* background design */}
          <div className="fixed inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[#5dd62c]/10 via-[#337418]/5 to-gray-100 opacity-50 animate-pulse" 
                 style={{ backgroundSize: '400% 400%', animation: 'gradient 15s ease infinite' }} />
          </div>

          {/* corner designs */}
          <div 
            className="fixed w-96 h-96 rounded-full bg-[#5dd62c] opacity-10 blur-3xl transition-transform duration-1000 ease-out"
            style={{ 
              top: '-12rem', 
              right: '-12rem',
              transform: `translate(${mousePos.x * 30}px, ${mousePos.y * 30}px)` 
            }}
          />
          <div 
            className="fixed w-80 h-80 rounded-full bg-[#337418] opacity-10 blur-3xl transition-transform duration-1000 ease-out"
            style={{ 
              bottom: '-10rem', 
              left: '-10rem',
              transform: `translate(${mousePos.x * -20}px, ${mousePos.y * -20}px)` 
            }}
          />
          <div 
            className="fixed w-72 h-72 rounded-full bg-[#5dd62c] opacity-10 blur-3xl transition-transform duration-1000 ease-out"
            style={{ 
              top: '50%', 
              left: '50%',
              transform: `translate(calc(-50% + ${mousePos.x * 40}px), calc(-50% + ${mousePos.y * 40}px))` 
            }}
          />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/company" element={<Company />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<ContactForm />} />
          </Routes>

          <Footer/>
      </div>
  )
}

export default App;
