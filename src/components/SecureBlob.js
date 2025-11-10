import { useEffect } from "react";
import { TweenMax, Linear } from "gsap";

export default function SecureBlob() {
  useEffect(() => {
    const radius = 8;
    TweenMax.staggerFromTo(
      ".blob",
      4,
      {
        cycle: {
          attr: function (i) {
            const r = i * 90;
            return {
              transform: `rotate(${r}) translate(${radius}, 0.1) rotate(${-r})`,
            };
          },
        },
      },
      {
        cycle: {
          attr: function (i) {
            const r = i * 90 + 360;
            return {
              transform: `rotate(${r}) translate(${radius}, 0.1) rotate(${-r})`,
            };
          },
        },
        ease: Linear.easeNone,
        repeat: -1,
      }
    );
  }, []);

  return (
    <div className="w-full h-screen bg-[#24214C] flex items-center justify-center overflow-hidden">
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        id="loader"
        className="w-[400px] h-[400px]"
      >
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  
                      0 1 0 0 0  
                      0 0 1 0 0  
                      0 0 0 13 -7"
              result="goo"
            />
            <feBlend in2="goo" in="SourceGraphic" result="mix" />
          </filter>

          <linearGradient id="MyGradient">
            <stop offset="0%" stopColor="#42398B" />
            <stop offset="35%" stopColor="#5751A9" />
            <stop offset="60%" stopColor="#2C2761" />
            <stop offset="100%" stopColor="#42398B" />
            <stop offset="100%" stopColor="#473E91" />
          </linearGradient>
        </defs>

        <mask id="maska">
          <g className="blobs" filter="url(#goo)">
            <circle
              className="blob"
              cx="440"
              cy="250"
              r="30"
              transform="rotate(0) translate(0, 0) rotate(0)"
            />
            <circle
              className="blob"
              cx="500"
              cy="320"
              r="70"
              transform="rotate(0) translate(0, 0) rotate(0)"
            />
            <circle
              className="blob"
              cx="300"
              cy="390"
              r="40"
              transform="rotate(0) translate(0, 0) rotate(0)"
            />
            <circle
              className="blob"
              cx="380"
              cy="390"
              r="80"
              transform="rotate(0) translate(0, 0) rotate(0)"
            />
            <circle
              className="blob"
              cx="470"
              cy="450"
              r="20"
              transform="rotate(0) translate(0, 0) rotate(0)"
            />
          </g>
        </mask>

        <rect
          x="200"
          y="200"
          width="400"
          height="400"
          mask="url(#maska)"
          fill="url(#MyGradient)"
        />
      </svg>
    </div>
  );
}