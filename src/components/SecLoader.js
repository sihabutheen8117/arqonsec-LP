import React from 'react'

const SecLoader = () => {
  return (
    <div className="flex items-center justify-center overflow-hidden">
<style>{`
  @keyframes animateColor {
    0% {
      filter: hue-rotate(0deg);
    }
    100% {
      filter: hue-rotate(360deg);
    }
  }
  
  @keyframes animate {
    0%, 100% {
      transform: translateX(-105px);
    }
    50% {
      transform: translateX(105px);
    }
  }
  
  .loader-container {
    position: relative;
    transform: skewY(-15deg) translateX(37.5px) translateY(37.5px) scale(0.6);
    animation: animateColor 2.5s linear infinite;
  }
  
  .loader-container::before {
    content: '';
    position: absolute;
    top: 300px;
    left: -150px;
    width: 300px;
    height: 40px;
    background: rgba(0, 0, 0, 0.1);
    transform-origin: bottom;
    transform: skewX(45deg);
    filter: blur(20px);
  }
  
  .loader-span {
    position: relative;
    width: 200px;
    height: 40px;
    display: block;
    background: #3e3f46;
    transition: 0.5s;
    animation: animate 5s ease-in-out infinite;
  }
  
  .loader-span:hover {
    background: #33a3ee;
    transition: 0s;
  }
  
  .loader-span::before {
    content: '';
    position: absolute;
    top: 0;
    left: -150px;
    height: 40px;
    width: 150px;
    background: #2e3133;
    transform-origin: right;
    transform: skewY(45deg);
    transition: 0.5s;
  }
  
  .loader-span:hover::before {
    background: #1f5378;
    transition: 0s;
  }
  
  .loader-span::after {
    content: '';
    position: absolute;
    top: -150px;
    left: 0px;
    height: 150px;
    width: 100%;
    background: #35383e;
    transform-origin: bottom;
    transform: skewX(45deg);
    transition: 0.5s;
  }
  
  .loader-span:hover::after {
    background: #2982b9;
    transition: 0s;
  }
`}</style>

<div style={{ width: '400px', height: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
  <div className="loader-container">
    {[10, 9, 8, 7, 6, 5, 4, 3, 2, 1].map((i) => (
      <span
        key={i}
        className="loader-span"
        style={{
          '--i': i,
          zIndex: i,
          animationDelay: `calc(-0.8s * ${i})`
        }}
      />
    ))}
  </div>
</div>
</div>
);
}

export default SecLoader
