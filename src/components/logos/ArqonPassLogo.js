import React from 'react';

const ArqonPassLogo = ({ className = "", size = 150 }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 200 200" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="lockGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#ec4899', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#db2777', stopOpacity: 1 }} />
        </linearGradient>
      </defs>

      <g className="lock-group">
        <rect
          x="70"
          y="95"
          width="60"
          height="50"
          rx="8"
          fill="url(#lockGradient)"
          className="lock-body"
        />
        
        <path
          d="M 85 95 L 85 75 Q 85 55 100 55 Q 115 55 115 75 L 115 95"
          stroke="url(#lockGradient)"
          strokeWidth="10"
          fill="none"
          strokeLinecap="round"
          className="lock-shackle"
        />
        
        <circle
          cx="100"
          cy="115"
          r="8"
          fill="rgba(255,255,255,0.4)"
          className="keyhole-outer"
        />
        
        <path
          d="M 100 123 L 95 133 L 105 133 Z"
          fill="rgba(255,255,255,0.4)"
          className="keyhole-inner"
        />
        
        <g className="key-group">
          <rect x="115" y="112" width="30" height="6" rx="3" fill="rgba(255,255,255,0.3)" className="key-shaft" />
          <circle cx="148" cy="115" r="6" fill="rgba(255,255,255,0.3)" className="key-head" />
          <rect x="115" y="110" width="3" height="3" fill="rgba(255,255,255,0.4)" className="key-tooth t1" />
          <rect x="120" y="113" width="3" height="3" fill="rgba(255,255,255,0.4)" className="key-tooth t2" />
          <rect x="125" y="110" width="3" height="3" fill="rgba(255,255,255,0.4)" className="key-tooth t3" />
        </g>
        
        <circle cx="90" cy="85" r="2" fill="#fbbf24" className="star s1" />
        <circle cx="110" cy="80" r="2.5" fill="#fbbf24" className="star s2" />
        <circle cx="85" cy="105" r="1.5" fill="#fbbf24" className="star s3" />
      </g>

      <style>{`
        .lock-group {
          transform-origin: center;
          animation: lockSway 3s ease-in-out infinite;
        }
        
        .lock-body {
          animation: lockShine 2.5s ease-in-out infinite;
        }
        
        .lock-shackle {
          animation: shacklePulse 2s ease-in-out infinite;
          transform-origin: 100px 95px;
        }
        
        .keyhole-outer, .keyhole-inner {
          animation: keyholeGlow 2s ease-in-out infinite;
        }
        
        .key-group {
          animation: keyFloat 3s ease-in-out infinite;
          transform-origin: 115px 115px;
        }
        
        .star {
          animation: starTwinkle 2s ease-in-out infinite;
        }
        
        .s1 { animation-delay: 0s; }
        .s2 { animation-delay: 0.7s; }
        .s3 { animation-delay: 1.4s; }
        
        svg:hover .lock-group {
          animation: lockSway 3s ease-in-out infinite, lockBounce 0.5s ease;
        }
        
        svg:hover .lock-body {
          filter: drop-shadow(0 0 15px #ec4899);
        }
        
        svg:hover .key-group {
          animation: keyFloat 3s ease-in-out infinite, keyInsert 0.5s ease;
        }
        
        @keyframes lockSway {
          0%, 100% { transform: translateY(0px) rotate(-1deg); }
          50% { transform: translateY(-5px) rotate(1deg); }
        }
        
        @keyframes lockShine {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.85; }
        }
        
        @keyframes shacklePulse {
          0%, 100% { stroke-width: 10; }
          50% { stroke-width: 11; }
        }
        
        @keyframes keyholeGlow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.7; }
        }
        
        @keyframes keyFloat {
          0%, 100% { transform: translateX(0px) rotate(0deg); }
          50% { transform: translateX(-3px) rotate(-5deg); }
        }
        
        @keyframes starTwinkle {
          0%, 100% { opacity: 0; transform: scale(0); }
          50% { opacity: 1; transform: scale(1.5); }
        }
        
        @keyframes lockBounce {
          0% { transform: scale(1); }
          50% { transform: scale(1.15); }
          100% { transform: scale(1.1); }
        }
        
        @keyframes keyInsert {
          0% { transform: translateX(0px); }
          50% { transform: translateX(-10px); }
          100% { transform: translateX(-5px); }
        }
      `}</style>
    </svg>
  );
};

export default ArqonPassLogo;
