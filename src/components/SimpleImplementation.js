import React from 'react';

const AnimatedPlanningIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g className="planning-icon">
      <circle cx="32" cy="24" r="12" stroke="#4A9EFF" strokeWidth="2.5" fill="none" className="head-circle" />
      <path d="M16 48 C16 38, 22 32, 32 32 C42 32, 48 38, 48 48" stroke="#4A9EFF" strokeWidth="2.5" strokeLinecap="round" fill="none" className="body-path" />
    </g>
    <style jsx>{`
      .head-circle {
        stroke-dasharray: 75;
        stroke-dashoffset: 75;
        animation: draw 1.5s ease-out forwards;
      }
      .body-path {
        stroke-dasharray: 50;
        stroke-dashoffset: 50;
        animation: draw 1.5s ease-out 0.5s forwards;
      }
      @keyframes draw {
        to { stroke-dashoffset: 0; }
      }
    `}</style>
  </svg>
);

const AnimatedInstallationIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g className="installation-icon">
      <circle cx="32" cy="32" r="18" stroke="#5dd62c" strokeWidth="2.5" fill="none" className="gear-outer" />
      <circle cx="32" cy="32" r="8" fill="#5dd62c" className="gear-inner" />
      <line x1="32" y1="14" x2="32" y2="20" stroke="#5dd62c" strokeWidth="3" strokeLinecap="round" className="tooth-1" />
      <line x1="32" y1="44" x2="32" y2="50" stroke="#5dd62c" strokeWidth="3" strokeLinecap="round" className="tooth-2" />
      <line x1="14" y1="32" x2="20" y2="32" stroke="#5dd62c" strokeWidth="3" strokeLinecap="round" className="tooth-3" />
      <line x1="44" y1="32" x2="50" y2="32" stroke="#5dd62c" strokeWidth="3" strokeLinecap="round" className="tooth-4" />
    </g>
    <style jsx>{`
      .gear-outer {
        animation: rotate 4s linear infinite;
      }
      .gear-inner {
        animation: rotate 4s linear infinite reverse;
      }
      .tooth-1, .tooth-2, .tooth-3, .tooth-4 {
        stroke-dasharray: 6;
        stroke-dashoffset: 6;
        animation: draw 1s ease-out forwards, rotate 4s linear infinite;
      }
      .tooth-2 { animation-delay: 0.2s; }
      .tooth-3 { animation-delay: 0.4s; }
      .tooth-4 { animation-delay: 0.6s; }
      @keyframes draw {
        to { stroke-dashoffset: 0; }
      }
      @keyframes rotate {
        to { transform: rotate(360deg); transform-origin: center; }
      }
    `}</style>
  </svg>
);

const AnimatedTrainingIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g className="training-icon">
      <circle cx="22" cy="20" r="8" stroke="#5dd62c" strokeWidth="2.5" fill="none" className="head-1" />
      <circle cx="42" cy="20" r="8" stroke="#5dd62c" strokeWidth="2.5" fill="none" className="head-2" />
      <path d="M10 42 C10 34, 14 28, 22 28 C30 28, 34 34, 34 42" stroke="#5dd62c" strokeWidth="2.5" strokeLinecap="round" fill="none" className="body-1" />
      <path d="M30 42 C30 34, 34 28, 42 28 C50 28, 54 34, 54 42" stroke="#5dd62c" strokeWidth="2.5" strokeLinecap="round" fill="none" className="body-2" />
    </g>
    <style jsx>{`
      .head-1, .head-2, .body-1, .body-2 {
        stroke-dasharray: 100;
        stroke-dashoffset: 100;
        animation: draw 1.5s ease-out forwards;
      }
      .head-2 { animation-delay: 0.3s; }
      .body-1 { animation-delay: 0.6s; }
      .body-2 { animation-delay: 0.9s; }
      @keyframes draw {
        to { stroke-dashoffset: 0; }
      }
    `}</style>
  </svg>
);

const AnimatedSupportIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g className="support-icon">
      <path d="M20 28 C20 20, 25 14, 32 14 C39 14, 44 20, 44 28 L44 36" stroke="#9D7BFF" strokeWidth="2.5" strokeLinecap="round" fill="none" className="headset-band" />
      <circle cx="18" cy="36" r="6" stroke="#9D7BFF" strokeWidth="2.5" fill="none" className="ear-left" />
      <circle cx="46" cy="36" r="6" stroke="#9D7BFF" strokeWidth="2.5" fill="none" className="ear-right" />
      <path d="M32 44 C32 44, 28 48, 32 50 C36 48, 32 44, 32 44" stroke="#9D7BFF" strokeWidth="2.5" strokeLinecap="round" fill="none" className="mic" />
    </g>
    <style jsx>{`
      .headset-band, .ear-left, .ear-right, .mic {
        stroke-dasharray: 100;
        stroke-dashoffset: 100;
        animation: draw 1.5s ease-out forwards;
      }
      .ear-left { animation-delay: 0.3s; }
      .ear-right { animation-delay: 0.5s; }
      .mic { animation-delay: 0.7s; }
      @keyframes draw {
        to { stroke-dashoffset: 0; }
      }
    `}</style>
  </svg>
);

const SimpleImplementation = () => {
  const steps = [
    {
      number: '01',
      title: 'Planning',
      description: 'Requirements assessment and system planning',
      icon: <AnimatedPlanningIcon />,
      color: '#4A9EFF'
    },
    {
      number: '02',
      title: 'Installation',
      description: 'Quick and seamless system deployment',
      icon: <AnimatedInstallationIcon />,
      color: '#5dd62c'
    },
    {
      number: '03',
      title: 'Training',
      description: 'Team training and knowledge transfer',
      icon: <AnimatedTrainingIcon />,
      color: '#5dd62c'
    },
    {
      number: '04',
      title: 'Support',
      description: 'Ongoing monitoring and support',
      icon: <AnimatedSupportIcon />,
      color: '#9D7BFF'
    }
  ];

  return (
    <section className="py-20 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Simple Implementation
          </h2>
          <p className="text-xl text-gray-400">
            From planning to deployment in just one week
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative bg-[#202020] rounded-xl p-8 hover:bg-[#2a2a2a] transition-all duration-300"
            >
              <div 
                className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: step.color + '20' }}
              >
                {step.icon}
              </div>

              <div className="text-4xl font-bold text-gray-600 mb-4">
                {step.number}
              </div>

              <h3 className="text-xl font-bold text-white mb-3">
                {step.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SimpleImplementation;
