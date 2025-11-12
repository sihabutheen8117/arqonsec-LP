import React from 'react';

const ArqonMaskLogo = ({ className = "", size = 150 }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 200 200" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="maskGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#8b5cf6', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#6366f1', stopOpacity: 1 }} />
        </linearGradient>
      </defs>

      <g className="mask-group">
        <rect
          x="40"
          y="60"
          width="120"
          height="80"
          rx="10"
          fill="url(#maskGradient)"
          className="mask-base"
        />
        
        <rect
          x="60"
          y="80"
          width="30"
          height="15"
          rx="3"
          fill="rgba(255,255,255,0.3)"
          className="eye-left"
        />
        
        <rect
          x="110"
          y="80"
          width="30"
          height="15"
          rx="3"
          fill="rgba(255,255,255,0.3)"
          className="eye-right"
        />
        
        <path
          d="M 70 110 Q 100 120 130 110"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          className="mask-smile"
        />
        
        <circle cx="50" cy="70" r="3" fill="rgba(255,255,255,0.6)" className="particle p1" />
        <circle cx="150" cy="75" r="2" fill="rgba(255,255,255,0.6)" className="particle p2" />
        <circle cx="45" cy="130" r="2.5" fill="rgba(255,255,255,0.6)" className="particle p3" />
        <circle cx="155" cy="125" r="3" fill="rgba(255,255,255,0.6)" className="particle p4" />
      </g>

      <style>{`
        .mask-group {
          transform-origin: center;
          animation: gentleFloat 3s ease-in-out infinite;
        }
        
        .mask-base {
          animation: maskPulse 2.5s ease-in-out infinite;
        }
        
        .eye-left, .eye-right {
          animation: eyeBlink 4s ease-in-out infinite;
        }
        
        .mask-smile {
          animation: smileGlow 2s ease-in-out infinite;
        }
        
        .particle {
          animation: particleFloat 3s ease-in-out infinite;
        }
        
        .p1 { animation-delay: 0s; }
        .p2 { animation-delay: 0.5s; }
        .p3 { animation-delay: 1s; }
        .p4 { animation-delay: 1.5s; }
        
        svg:hover .mask-group {
          animation: gentleFloat 3s ease-in-out infinite, bounceUp 0.5s ease;
        }
        
        svg:hover .mask-base {
          filter: drop-shadow(0 0 15px #8b5cf6);
        }
        
        @keyframes gentleFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(2deg); }
        }
        
        @keyframes maskPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.85; }
        }
        
        @keyframes eyeBlink {
          0%, 90%, 100% { transform: scaleY(1); }
          95% { transform: scaleY(0.1); }
        }
        
        @keyframes smileGlow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.7; }
        }
        
        @keyframes particleFloat {
          0%, 100% { transform: translateY(0px); opacity: 0.6; }
          50% { transform: translateY(-10px); opacity: 0.3; }
        }
        
        @keyframes bounceUp {
          0% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-10px) scale(1.15); }
          100% { transform: translateY(0px) scale(1.1); }
        }
      `}</style>
    </svg>
  );
};

export default ArqonMaskLogo;
