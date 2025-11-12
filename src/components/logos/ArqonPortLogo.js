import React from 'react';

const ArqonPortLogo = ({ className = "", size = 150 }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 200 200" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="portGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#06b6d4', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#0891b2', stopOpacity: 1 }} />
        </linearGradient>
      </defs>

      <g className="port-group">
        <rect
          x="50"
          y="70"
          width="100"
          height="60"
          rx="8"
          fill="url(#portGradient)"
          className="port-base"
        />
        
        <rect x="70" y="85" width="12" height="30" rx="2" fill="rgba(255,255,255,0.3)" className="pin pin1" />
        <rect x="90" y="85" width="12" height="30" rx="2" fill="rgba(255,255,255,0.3)" className="pin pin2" />
        <rect x="110" y="85" width="12" height="30" rx="2" fill="rgba(255,255,255,0.3)" className="pin pin3" />
        
        <circle cx="100" cy="100" r="35" stroke="#06b6d4" strokeWidth="2" fill="none" className="scan-ring ring1" opacity="0.6" />
        <circle cx="100" cy="100" r="45" stroke="#06b6d4" strokeWidth="2" fill="none" className="scan-ring ring2" opacity="0.4" />
        <circle cx="100" cy="100" r="55" stroke="#06b6d4" strokeWidth="1" fill="none" className="scan-ring ring3" opacity="0.2" />
        
        <path
          d="M 60 75 L 65 70 M 140 75 L 135 70 M 60 125 L 65 130 M 140 125 L 135 130"
          stroke="rgba(255,255,255,0.5)"
          strokeWidth="2"
          className="connector-lines"
        />
      </g>

      <style>{`
        .port-group {
          transform-origin: center;
          animation: portFloat 3s ease-in-out infinite;
        }
        
        .port-base {
          animation: portGlow 2s ease-in-out infinite;
        }
        
        .pin {
          animation: pinPulse 1.5s ease-in-out infinite;
        }
        
        .pin1 { animation-delay: 0s; }
        .pin2 { animation-delay: 0.2s; }
        .pin3 { animation-delay: 0.4s; }
        
        .scan-ring {
          animation: scanWave 3s ease-out infinite;
          transform-origin: center;
        }
        
        .ring1 { animation-delay: 0s; }
        .ring2 { animation-delay: 0.5s; }
        .ring3 { animation-delay: 1s; }
        
        .connector-lines {
          animation: lineFlicker 2s ease-in-out infinite;
        }
        
        svg:hover .port-group {
          animation: portFloat 3s ease-in-out infinite, portZoom 0.4s ease;
        }
        
        svg:hover .port-base {
          filter: drop-shadow(0 0 20px #06b6d4);
        }
        
        svg:hover .scan-ring {
          animation: scanWave 1.5s ease-out infinite;
        }
        
        @keyframes portFloat {
          0%, 100% { transform: translateY(0px) rotate(-2deg); }
          50% { transform: translateY(-6px) rotate(2deg); }
        }
        
        @keyframes portGlow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        
        @keyframes pinPulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        
        @keyframes scanWave {
          0% { r: 35; opacity: 0.6; }
          100% { r: 70; opacity: 0; }
        }
        
        @keyframes lineFlicker {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.8; }
        }
        
        @keyframes portZoom {
          0% { transform: scale(1); }
          50% { transform: scale(1.15); }
          100% { transform: scale(1.1); }
        }
      `}</style>
    </svg>
  );
};

export default ArqonPortLogo;
