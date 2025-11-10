import React from 'react'
import { useState , useEffect } from 'react';
import {  Menu, X , Globe} from 'lucide-react';

const Header = () => {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


  return (
    <div> 
      <nav className="fixed top-0 w-full z-50 backdrop-blur-lg bg-black/5 border-b border-white/10">


          <div className="max-w-7xl mx-auto px-10 py-6 flex items-center justify-between">
            <div className="text-2xl font-audiowide bg-black bg-clip-text text-transparent font-medium">
              ArqonSec ❯
            </div>
                

            {/* Desktop Menu */}
            <ul className="hidden md:flex gap-8 ">
              {['Home', 'Products', 'Services', 'Partners' , 'About' , 'Contact' , 'Meetings' ].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-600/80 hover:text-gray-600 transition-all relative group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300" />
                  </a>
                </li>
              ))}
              <div className=''>
                <a 
                    href={`#arabic`}
                    className="text-sm font-medium text-gray-600/80 hover:text-gray-600 transition-all relative group"
                  >
                    <div className='flex gap-2'>
                        <Globe className="h-5 w-5" />
                        العربية
                    </div>
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300" />
                  </a>
              </div>
              
            </ul>

            <button className="group relative px-6 py-1.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50">
                <span className="relative z-10 text-white">Request Demo</span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </button>
  
            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
  
          {mobileMenuOpen && (
            <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-white/10">
              <ul className="flex flex-col gap-4 px-6 py-6">
                {['Home', 'Products', 'Services', 'Partners' , 'About' , 'Contact' , 'Meetings' ].map((item) => (
                  <li key={item}>
                    <a 
                      href={`#${item.toLowerCase()}`}
                      className="text-white/80 hover:text-white transition-colors block"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </nav>
    </div>
  )
}

export default Header
