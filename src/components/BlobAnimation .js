import React from 'react';
import Shield from './Shield';

const BlobAnimation = () => {
  return (
    <div className="overflow-hidden relative w-200 inline-block" >


      
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200"
        width="400"
        height="300"
        className='absolute top-0 right-0 z-10'
      >
        <defs>
          <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: "#007BFF", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "#0056b3", stopOpacity: 1 }} />
          </linearGradient>

          <linearGradient id="checkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: "#00d4ff", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "#007BFF", stopOpacity: 1 }} />
          </linearGradient>

          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <path
          d="M100 30 L140 45 Q150 50 150 62 L150 100 Q150 140 100 170 Q50 140 50 100 L50 62 Q50 50 60 45 Z"
          fill="url(#shieldGradient)"
          stroke="#005cbf"
          strokeWidth="2"
          opacity="0.95"
        >
          <animate
            attributeName="opacity"
            values="0.95;1;0.95"
            dur="2.5s"
            repeatCount="indefinite"
          />
        </path>

        <path
          d="M100 40 L135 52 Q143 56 143 65 L143 98 Q143 130 100 155 Q57 130 57 98 L57 65 Q57 56 65 52 Z"
          fill="none"
          stroke="#00d4ff"
          strokeWidth="1.5"
          opacity="0"
          filter="url(#glow)"
        >
          <animate
            attributeName="opacity"
            values="0;0.6;0"
            dur="2.5s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="stroke-width"
            values="1.5;2.5;1.5"
            dur="2.5s"
            repeatCount="indefinite"
          />
        </path>

        <path
          d="M75 100 L90 115 L125 75"
          fill="none"
          stroke="#ffffff"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="70"
          strokeDashoffset="70"
        >
          <animate
            attributeName="stroke-dashoffset"
            values="70;0;0;0;70"
            dur="2.5s"
            repeatCount="indefinite"
          />
        </path>

        <path
          d="M75 100 L90 115 L125 75"
          fill="none"
          stroke="#00d4ff"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0"
          filter="url(#glow)"
          strokeDasharray="70"
          strokeDashoffset="70"
        >
          <animate
            attributeName="stroke-dashoffset"
            values="70;0;0;0;70"
            dur="2.5s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0;0;0.4;0.4;0"
            dur="2.5s"
            repeatCount="indefinite"
          />
        </path>

        <circle cx="70" cy="70" r="2" fill="#00d4ff" opacity="0">
          <animate
            attributeName="opacity"
            values="0;0;0.8;0"
            dur="2.5s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="cy"
            values="70;60;50"
            dur="2.5s"
            repeatCount="indefinite"
          />
        </circle>

        <circle cx="130" cy="70" r="2" fill="#00d4ff" opacity="0">
          <animate
            attributeName="opacity"
            values="0;0;0.8;0"
            dur="2.5s"
            begin="0.3s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="cy"
            values="70;60;50"
            dur="2.5s"
            begin="0.3s"
            repeatCount="indefinite"
          />
        </circle>

        <circle cx="100" cy="50" r="2" fill="#00d4ff" opacity="0">
          <animate
            attributeName="opacity"
            values="0;0;0.8;0"
            dur="2.5s"
            begin="0.6s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="cy"
            values="50;40;30"
            dur="2.5s"
            begin="0.6s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>


      <svg 
        version="1.1" 
        xmlns="http://www.w3.org/2000/svg" 
        className="w-[400px] h-[300px]  "
        viewBox="200 200 400 300"
      >
        <defs>



          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
            <feColorMatrix 
              in="blur" 
              mode="matrix" 
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 13 -7" 
              result="goo" 
            />
            <feBlend in2="goo" in="SourceGraphic" result="mix" />
          </filter>
          <linearGradient id="MyGradient">
            <stop offset="0%" stopColor="#42398B"/>
            <stop offset="35%" stopColor="#5751A9"/>
            <stop offset="60%" stopColor="#2C2761"/>
            <stop offset="100%" stopColor="#42398B"/>
            <stop offset="100%" stopColor="#473E91"/>
          </linearGradient>
        </defs>
        
        <mask id="maska">
          <g className="blobs" style={{ filter: 'url(#goo)' }}>
            <circle 
              className="blob blob-1" 
              cx="440" 
              cy="250" 
              r="30" 
              fill="white"
              style={{ transformOrigin: '440px 250px' }}
            />
            <circle 
              className="blob blob-2" 
              cx="500" 
              cy="320" 
              r="70" 
              fill="white"
              style={{ transformOrigin: '500px 320px' }}
            />
            <circle 
              className="blob blob-3" 
              cx="300" 
              cy="390" 
              r="40" 
              fill="white"
              style={{ transformOrigin: '300px 390px' }}
            />
            <circle 
              className="blob blob-4" 
              cx="380" 
              cy="390" 
              r="80" 
              fill="white"
              style={{ transformOrigin: '380px 390px' }}
            />
            <circle 
              className="blob blob-5" 
              cx="470" 
              cy="450" 
              r="20" 
              fill="white"
              style={{ transformOrigin: '470px 450px' }}
            />
          </g>
        </mask>
        
        <rect 
          x="200" 
          y="200" 
          mask="url(#maska)" 
          fill="url(#MyGradient)" 
          width="400" 
          height="400"
          style={{ transformOrigin: '400px 400px' }}
        />
      </svg>





      
      <style>{`
        @keyframes rotate-blob-1 {
          from {
            transform: rotate(0deg) translate(8px, 0.1px) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translate(8px, 0.1px) rotate(-360deg);
          }
        }
        
        @keyframes rotate-blob-2 {
          from {
            transform: rotate(90deg) translate(8px, 0.1px) rotate(-90deg);
          }
          to {
            transform: rotate(450deg) translate(8px, 0.1px) rotate(-450deg);
          }
        }
        
        @keyframes rotate-blob-3 {
          from {
            transform: rotate(180deg) translate(8px, 0.1px) rotate(-180deg);
          }
          to {
            transform: rotate(540deg) translate(8px, 0.1px) rotate(-540deg);
          }
        }
        
        @keyframes rotate-blob-4 {
          from {
            transform: rotate(270deg) translate(8px, 0.1px) rotate(-270deg);
          }
          to {
            transform: rotate(630deg) translate(8px, 0.1px) rotate(-630deg);
          }
        }
        
        @keyframes rotate-blob-5 {
          from {
            transform: rotate(360deg) translate(8px, 0.1px) rotate(-360deg);
          }
          to {
            transform: rotate(720deg) translate(8px, 0.1px) rotate(-720deg);
          }
        }
        
        .blob-1 {
          animation: rotate-blob-1 4s linear infinite;
        }
        
        .blob-2 {
          animation: rotate-blob-2 4s linear infinite;
        }
        
        .blob-3 {
          animation: rotate-blob-3 4s linear infinite;
        }
        
        .blob-4 {
          animation: rotate-blob-4 4s linear infinite;
        }
        
        .blob-5 {
          animation: rotate-blob-5 4s linear infinite;
        }
      `}</style>

  
    </div>
  );
};

export default BlobAnimation;