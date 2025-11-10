import React from 'react'

const Shield = () => {
  return (
    <div>
      <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 200 200"
    width="200"
    height="200"
    className='bg-green-600'
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
    </div>
  )
}

export default Shield
