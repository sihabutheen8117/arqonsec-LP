import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import GetInTouchModal from './GetInTouchModal';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <nav className="fixed top-0 w-full z-50 backdrop-blur-lg bg-white/90 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-10 py-4 flex items-center justify-between">
          
          {/* Logo */}
          <Link 
            to="/" 
            className="text-2xl font-audiowide bg-black bg-clip-text text-transparent font-medium hover:opacity-80 transition-opacity"
          >
            <img src='/logos/arqonsec-black-02.png' alt='logo' className='h-8'/>
          </Link>
              
          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 items-center">
            {['Company', 'Products'].map((item) => (
              <li key={item}>
                <Link
                  to={`/${item === "Products" ? "services" : item.toLowerCase()}`}
                  className="text-gray-600/80 hover:text-gray-900 transition-all relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#5dd62c] group-hover:w-full transition-all duration-300" />
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop — Get In Touch Button */}
          <button 
            onClick={() => setIsModalOpen(true)}
            className="hidden md:block group relative px-6 py-2.5 bg-[#5dd62c] hover:bg-[#4bb623] rounded-lg font-semibold overflow-hidden transition-all hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span className="relative z-10 text-white">Get in Touch</span>
          </button>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <ul className="flex flex-col gap-4 px-6 py-6">
              {['Company', 'Products'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item === "Products" ? "services" : item.toLowerCase()}`}
                    className="text-gray-700 hover:text-gray-900 transition-colors block"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </Link>
                </li>
              ))}

              <li>
                <button
                  onClick={() => {
                    setIsModalOpen(true);
                    setMobileMenuOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 bg-[#5dd62c] text-white rounded-lg hover:bg-[#337418] transition-colors"
                >
                  Get in Touch
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
      
      {/* Get In Touch Modal */}
      <GetInTouchModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

export default Header;
