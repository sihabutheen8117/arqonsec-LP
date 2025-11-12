import React, { useState } from 'react';
import {  Shield , Eye , Users, User } from 'lucide-react';

const ProdCards = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const cards = [
    {
      id: 1,
      title: 'Enterprise Security',
      content: 'Military-grade protection for your most sensitive data and documents.',
      zIndex: 'z-30',
      icon : <Shield className='w-20 h-20 text-white'/>
    },
    {
      id: 2,
      title: 'Invisible Protection',
      content: 'Seamless security that works behind the scenes without disrupting workflow.',
      zIndex: 'z-20' ,
      icon :  <Eye className='w-20 h-20 text-white'/>
    },
    {
      id: 3,
      title: 'Local Support',
      content: 'Saudi-based team providing 24/7 support in Arabic and English.',
      zIndex: 'z-10' ,
      icon : <Users className='w-20 h-20 text-white'/>
    }
  ];

  return (
    <div className="flex justify-center items-center min-h-[700px] overflow-hidden p-4 bg-transparent">
      <div 
        className="relative w-full max-w-[1050px] flex flex-wrap justify-center gap-10 transition-all duration-500"
        style={{ transform: 'skewY(-10deg)' }}
      >
        {cards.map((card) => (
          <div
            key={card.id}
            className={`relative w-[250px] h-[400px] bg-white transition-all duration-500 hover:-translate-y-10 ${card.zIndex} group`}
            onMouseEnter={() => setHoveredCard(card.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Top border (before pseudo-element equivalent) */}
            <div 
              className="absolute top-[-15px] left-0 w-full h-[15px] bg-[#00c7ff] transition-all duration-500"
              style={{ 
                transformOrigin: 'bottom',
                transform: 'skewX(45deg)' 
              }}
            />
            
            {/* Side border (after pseudo-element equivalent) */}
            <div 
              className="absolute top-[-15px] left-[-15px] w-[15px] bg-[#00c7ff] transition-all duration-500"
              style={{ 
                height: '50%',
                transformOrigin: 'left',
                transform: 'skewY(45deg)',
                borderBottom: '200px solid #00c7ff'
              }}
            />

<div 
              className="absolute top-[185px] left-[-15px] w-[15px] bg-[#00c7ff] transition-all duration-500"
              style={{ 
                height: '50%',
                transformOrigin: 'left',
                transform: 'skewY(45deg)',
                borderBottom: '200px solid #ffffff'
              }}
            />

          
            
           

            <div className="relative w-[250px] h-[200px] bg-[#00c7ff] flex justify-center items-center flex-col">
              <div className={`${hoveredCard === card.id ? 'glow-animation' : ''}`}>
                {card.icon}
              </div>
              <h3 className="relative text-white mt-2.5 font-sans">{card.title}</h3>
            </div>
            
            {/* Content section */}
            <div className="relative w-full h-[200px] p-5 text-gray-600 text-center bg-white">
              <div className="relative z-10">{card.content}</div>
              
              {/* Gradient overlay for hover effect */}
              <div 
                className={`absolute left-0 bottom-0 w-full h-[400px] transition-all duration-500 pointer-events-none ${hoveredCard === card.id ? 'opacity-50 blur-[5px]' : 'opacity-0'}`}
                style={{
                  background: 'linear-gradient(transparent, transparent, rgba(0, 0, 0, 0.1))',
                  transformOrigin: 'bottom',
                  transform: hoveredCard === card.id ? 'translateY(40px) skewX(45deg)' : 'skewX(45deg)',
                  zIndex: -1
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProdCards;
