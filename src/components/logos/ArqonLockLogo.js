import React from 'react';

const ArqonLockLogo = ({ className = "", size = 200 }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 200 200" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#10b981', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#059669', stopOpacity: 1 }} />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      <g className="shield-group">
        <path
          d="M100 20 L160 45 L160 100 Q160 140 100 170 Q40 140 40 100 L40 45 Z"
          fill="url(#shieldGradient)"
          stroke="#10b981"
          strokeWidth="2"
          filter="url(#glow)"
          className="shield-base"
        />
        
        <path
          d="M100 50 L130 65 L130 95 Q130 115 100 130 Q70 115 70 95 L70 65 Z"
          fill="rgba(255,255,255,0.2)"
          className="shield-inner"
        />

        <circle
          cx="100"
          cy="95"
          r="15"
          fill="rgba(255,255,255,0.3)"
          className="lock-circle"
        />
        
        <rect
          x="92"
          y="100"
          width="16"
          height="20"
          rx="2"
          fill="rgba(255,255,255,0.4)"
          className="lock-body"
        />
      </g>

      <style>{`
        .shield-group {
          transform-origin: center;
          animation: floatShield 3s ease-in-out infinite;
        }
        
        .shield-base {
          animation: pulseGlow 2s ease-in-out infinite;
        }
        
        .shield-inner {
          animation: shimmer 3s ease-in-out infinite;
        }
        
        .lock-circle {
          animation: lockPulse 2s ease-in-out infinite;
        }
        
        svg:hover .shield-group {
          animation: floatShield 3s ease-in-out infinite, scaleUp 0.3s ease forwards;
        }
        
        svg:hover .shield-base {
          filter: drop-shadow(0 0 20px #10b981);
        }
        
        @keyframes floatShield {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        
        @keyframes pulseGlow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        
        @keyframes shimmer {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }
        
        @keyframes lockPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        
        @keyframes scaleUp {
          to { transform: translateY(-5px) scale(1.1); }
        }
      `}</style>
    </svg>
  );
};

export default ArqonLockLogo;
