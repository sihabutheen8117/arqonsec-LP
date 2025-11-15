import React from 'react';

const ArqonSecLogo = ({ size = 200 }) => {
  return (
    <div className="logo-container" style={{ width: size, height: size }}>
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="arqon-logo"
      >
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <linearGradient id="greenGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#5dd62c" stopOpacity="1" />
            <stop offset="100%" stopColor="#337418" stopOpacity="1" />
          </linearGradient>
        </defs>
        
        <g filter="url(#glow)" className="logo-paths">
          <path
            d="M100 30 C80 35, 60 45, 50 70 C45 85, 45 100, 50 115 C55 130, 70 145, 85 155 C90 158, 95 160, 100 160 C105 160, 110 158, 115 155 C130 145, 145 130, 150 115 C155 100, 155 85, 150 70 C140 45, 120 35, 100 30 Z"
            fill="url(#greenGradient)"
            className="shield-outer"
            strokeWidth="2"
            stroke="#5dd62c"
          />
          
          <path
            d="M100 50 C85 54, 72 62, 65 78 C62 88, 62 98, 65 108 C68 118, 78 128, 88 135 C92 137, 96 138, 100 138 C104 138, 108 137, 112 135 C122 128, 132 118, 135 108 C138 98, 138 88, 135 78 C128 62, 115 54, 100 50 Z"
            fill="none"
            stroke="#5dd62c"
            strokeWidth="3"
            className="shield-inner"
            strokeLinecap="round"
          />
          
          <path
            d="M100 60 L100 120"
            stroke="#5dd62c"
            strokeWidth="4"
            strokeLinecap="round"
            className="shield-line-1"
          />
          
          <path
            d="M85 90 L100 90 L115 90"
            stroke="#5dd62c"
            strokeWidth="4"
            strokeLinecap="round"
            className="shield-line-2"
          />
          
          <circle
            cx="100"
            cy="90"
            r="8"
            fill="#5dd62c"
            className="shield-dot"
          />
        </g>
      </svg>

      <style jsx>{`
        .arqon-logo {
          width: 100%;
          height: 100%;
          filter: drop-shadow(0 0 20px rgba(93, 214, 44, 0.4));
        }

        .shield-outer {
          animation: pulse 3s ease-in-out infinite;
        }

        .shield-inner {
          stroke-dasharray: 300;
          stroke-dashoffset: 300;
          animation: draw 2s ease-in-out forwards, pulse 3s ease-in-out infinite 2s;
        }

        .shield-line-1 {
          stroke-dasharray: 60;
          stroke-dashoffset: 60;
          animation: draw 1.5s ease-in-out forwards 0.5s;
        }

        .shield-line-2 {
          stroke-dasharray: 30;
          stroke-dashoffset: 30;
          animation: draw 1.5s ease-in-out forwards 1s;
        }

        .shield-dot {
          opacity: 0;
          animation: fadeIn 0.5s ease-in-out forwards 1.5s;
        }

        @keyframes draw {
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.02);
          }
        }

        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default ArqonSecLogo;
