
import React, { useState } from 'react';
import { Shield, Lock, Eye, AlertTriangle, Key, Database , Check} from 'lucide-react';


const BulletPoint = ({ children, variant = 'gradient', icon: Icon }) => {
    const variants = {
      gradient: (
        <span className="absolute left-0 top-2 w-1.5 h-1.5 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full shadow-[0_0_8px_rgba(6,182,212,0.5)] group-hover/item:shadow-[0_0_12px_rgba(6,182,212,0.8)] group-hover/item:scale-125 transition-all duration-300" />
      ),
      diamond: (
        <span className="absolute left-0 top-2 w-1.5 h-1.5 bg-gradient-to-br from-cyan-400 to-pink-500 rounded-sm rotate-45 shadow-[0_0_8px_rgba(6,182,212,0.5)] group-hover/item:shadow-[0_0_12px_rgba(6,182,212,0.8)] group-hover/item:rotate-[225deg] transition-all duration-500" />
      ),
      check: (
        <Check className="absolute left-0 top-1.5 w-3 h-3 text-green-400 group-hover/item:text-green-300 group-hover/item:scale-110 transition-all duration-300" strokeWidth={3} />
      ),
      shield: (
        <Shield className="absolute left-0 top-1.5 w-3 h-3 text-cyan-400 group-hover/item:text-cyan-300 group-hover/item:scale-110 transition-all duration-300" strokeWidth={2.5} />
      ),
      glow: (
        <span className="absolute left-0 top-2 w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.8)] group-hover/item:shadow-[0_0_16px_rgba(6,182,212,1)] animate-pulse" />
      ),
      ring: (
        <span className="absolute left-0 top-2 w-2 h-2 border-2 border-purple-400 rounded-full group-hover/item:border-cyan-400 group-hover/item:scale-125 group-hover/item:shadow-[0_0_8px_rgba(6,182,212,0.6)] transition-all duration-300" />
      ),
      arrow: (
        <span className="absolute left-0 top-2 text-cyan-400 text-xs font-bold group-hover/item:text-purple-400 group-hover/item:translate-x-0.5 transition-all duration-300">→</span>
      ),
      icon: Icon && (
        <Icon className="absolute left-0 top-1.5 w-3 h-3 text-cyan-400 group-hover/item:text-purple-400 group-hover/item:scale-110 transition-all duration-300" strokeWidth={2.5} />
      )
    };
  
    return (
      <li className="group/item relative pl-6 mb-3 text-gray-400 text-sm leading-relaxed hover:text-gray-300 transition-colors duration-300">
        {Icon ? variants.icon : variants[variant]}
        {children}
      </li>
    );
  };




const SecurityCard = ({ icon: Icon, title, description, color, delay , navButtonText = "Learn More" , items }) => {
    const [isHovered, setIsHovered] = useState(false);
  
    return (
      <div
        className="group relative flex-1 min-w-[280px] max-w-[340px]"
        style={{ animationDelay: `${delay}ms` }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        <div className="relative h-fit bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden transition-all duration-500 ease-out group-hover:-translate-y-6 group-hover:rotate-1 group-hover:shadow-2xl group-hover:shadow-cyan-500/30 cursor-pointer">
          {/* Animated shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
          
          {/* SVG Background Pattern */}
          <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id={`pattern-${title}`} x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="1" fill="currentColor" className="text-cyan-400">
                  <animate attributeName="r" values="1;2;1" dur="3s" repeatCount="indefinite" />
                </circle>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#pattern-${title})`} />
          </svg>
  
          <div className="relative z-10 p-6 h-full flex flex-col">
            {/* Icon with animated glow */}
            <div className="relative w-20 h-20 mx-auto mb-6">
              <div className={`absolute inset-0 ${color} rounded-full blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className={`relative w-full h-full ${color} rounded-full flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                <Icon className="w-10 h-10 text-white" strokeWidth={2} />
              </div>
              
              {/* Pulsing rings */}
              <div className={`absolute inset-0 ${color} rounded-full opacity-0 group-hover:opacity-30 animate-ping`} />
            </div>
  
            {/* SVG Animated Shield Background */}
            <svg className="absolute top-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity duration-500" viewBox="0 0 100 100">
              <path
                d="M50 10 L90 30 L90 60 Q90 80 50 90 Q10 80 10 60 L10 30 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-cyan-400"
              >
                <animate
                  attributeName="stroke-dasharray"
                  values="0 300;300 0;0 300"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </path>
            </svg>
  
            {/* Content */}
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4 transition-colors duration-500 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400">
                  {title}
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {description}
                </p>
              </div>

              <div className='my-2'>
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-500 shadow-lg hover:shadow-cyan-500/20">
                    <ul className="list-none pl-0 space-y-0">
                        {items.map((item, index) => (
                        <BulletPoint key={index} variant={'gradient'} >
                            {item}
                        </BulletPoint>
                        ))}
                    </ul>
                    </div>
              </div>
  
              {/* Status indicator with animation */}
              <div className="flex items-center gap-2 mt-1 mb-1">
                <div className="relative">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <div className="absolute inset-0 w-2 h-2 bg-green-500 rounded-full animate-ping" />
                </div>
                <span className="text-xs text-gray-500 group-hover:text-green-400 transition-colors duration-300">
                  Available
                </span>
              </div>
  
              {/* Learn More Button */}
              <button className="relative w-full py-2 px-6 bg-gray-800 text-white rounded-full overflow-hidden group/btn transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-cyan-600 group-hover:to-purple-600">
                <span className="relative z-10 font-medium">{navButtonText}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300" />
              </button>
            </div>
          </div>
  
          {/* Corner decoration */}
          <svg className="absolute bottom-0 left-0 w-24 h-24 opacity-20" viewBox="0 0 100 100">
            <path
              d="M 0 100 Q 0 50 50 50 T 100 0"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-cyan-400"
            >
              <animate
                attributeName="stroke-dashoffset"
                values="200;0"
                dur="2s"
                repeatCount="indefinite"
              />
            </path>
          </svg>
        </div>
      </div>
    );
  };


const TempProdCards = () => {
  const projects = [

    {
      icon: Lock,
      title: "ArqonLock",
      description: "Advanced screen watermarking and print protection technology that makes every document traceable.",
      color: "bg-purple-500",
      navButtonText : "Learn More",
      items : [
        "Invisible screen watermarks" ,
        "Print copy prevention",
        "Real-time tracking",
        "Complete audit trails"
      ]
    },
    {
      icon: Eye,
      title: "Future Products",
      description: "Expanding security ecosystem with data masking, USB protection, and password management.",
      color: "bg-pink-500",
      navButtonText : "Explore All Products",
      items : [
        "ArqonMask - Data masking" ,
        "ArqonPort - USB security",
        "ArqonPass - Password management",
        "Enterprise integrations"
      ]
    },
    // {
    //   icon: Key,
    //   title: "Identity Management",
    //   description: "Centralized authentication and authorization platform with multi-factor authentication. Streamline user access while maintaining security protocols.",
    //   color: "bg-blue-500"
    // },
    // {
    //   icon: Database,
    //   title: "Data Encryption",
    //   description: "End-to-end encryption solution for data at rest and in transit. Military-grade cryptographic protocols ensure your sensitive information stays protected.",
    //   color: "bg-indigo-500"
    // },
    // {
    //   icon: AlertTriangle,
    //   title: "Incident Response",
    //   description: "Automated incident detection and response system with 24/7 monitoring. Rapid threat containment and forensic analysis capabilities.",
    //   color: "bg-red-500"
    // }
  ];

  return (
    <div className="min-h-screen  p-8 flex items-center justify-center">
      <div className="max-w-7xl w-full">
        {/* Header */}
        <div className="text-center mb-16">
          
          <h1 className="text-5xl font-bold text-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-600">
            Our Product Suite
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
          Comprehensive data protection solutions designed for modern enterprises
          </p>
        </div>

        {/* Cards Grid */}
        <div className="flex flex-wrap gap-8 justify-center">
          {projects.map((project, index) => (
            <SecurityCard
              key={index}
              {...project}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TempProdCards
