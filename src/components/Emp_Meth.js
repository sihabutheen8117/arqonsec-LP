import React from 'react';
import { useState , useEffect } from 'react';


const Emp_Meth = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = 4;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, []);


  return (
    <div className="relative w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white -z-10"></div>
      
      {/* Section Header */}
      <div className="text-center mb-8 px-4">
        <h2 className="font-inter text-3xl md:text-3xl lg:text-4xl font-extrabold mb-4 bg-gradient-to-b from-black to-black/70 bg-clip-text text-transparent">
          ARQONSEC Security Methedology
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Security in every phase
        </p>
      </div>

      <div className="cards-container">
        <ul className="cards" style={{ '--items': 10 }}>
          <li style={{ '--i': 0 }}>
            <input   type="radio" 
              id="item-0" 
              name="gallery-item" 
              checked={currentIndex === 0}
              onChange={() => setCurrentIndex(() => 0)} defaultChecked />
            <label htmlFor="item-0" className='mb-2'>Planning</label>
            <h2>Planning</h2>
            <p className='font-inter text-xl text-center mt-2'>We assess your security landscape, identify risks, and build a strategic protection roadmap aligned with your business goals</p>
          </li>
          <li style={{ '--i': 1 }}>
            <input   type="radio" 
              id="item-0" 
              name="gallery-item" 
              checked={currentIndex === 1}
              onChange={() => setCurrentIndex(() => 1)} />
            <label htmlFor="item-1">Execute</label>
            <h2>Execute</h2>
            <p className='font-inter text-xl text-center mt-2'>We implement robust cybersecurity controls, deploy advanced threat-defense solutions, and ensure seamless integration across your environment</p>
          </li>
          <li style={{ '--i': 2 }}>
            <input   type="radio" 
              id="item-0" 
              name="gallery-item" 
              checked={currentIndex === 2}
              onChange={() => setCurrentIndex(() => 2)} />
            <label htmlFor="item-2">Review</label>
            <h2>Review</h2>
            <p>We continuously analyze system performance, monitor threats, and validate security measures to ensure your defenses stay ahead of evolving attacks</p>
          </li>
          <li style={{ '--i': 3 }}>
            <input   type="radio" 
              id="item-0" 
              name="gallery-item" 
              checked={currentIndex === 3}
              onChange={() => setCurrentIndex(() => 3)} />
            <label htmlFor="item-3">Deliver</label>
            <h2>Deliver</h2>
            <p>We provide clear insights, detailed reports, and validated results—ensuring your organization is fully secured and compliant with industry standards</p>
          </li>
        </ul>
      </div>

      <style jsx>{`
        /* Hide radio buttons */
        input[type="radio"] {
          position: absolute;
          width: 2px;
          height: 2px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border-width: 0;
        }
        
        .cards-container {
          --base-rotation: 0deg;
          --full-circle: 360deg;
          --radius: 28vw;
          --duration: 200ms;
          --cards-container-size: calc(var(--radius) * 2);
          --cards-container-padding: 2.5rem;
          --border-color: #e5e5e5;
          --label-offset: calc(var(--radius) * -1 - 1rem);
          --label-size: 50px;
          --label-color: #666;
          --label-color-hover: #5dd62c;
          --label-line-h: 0;
          --label-line-h-current: 2rem;
          --label-dot-size: 10px;
          --title-top: 2rem;
          --title-offset-y: 30px;
          --info-top: 6rem;
          --info-width: min(70%, 500px);
          --info-offset-y: 30px;

          box-sizing: content-box;
          position: relative;
          margin: 0 auto;
          width: var(--cards-container-size);
          height: calc(var(--cards-container-size) * 0.60);
          padding: var(--cards-container-padding);
          max-width: 90vw;
        }

        @media (min-width: 600px) {
          .cards-container {
            clip-path: polygon(0 0, 100% 0, 100% 50%, 0 50%);
          }
        }

        @media (min-width: 800px) {
          .cards-container {
            --radius: 30vw;
            --label-size: 40px;
            --label-dot-size: 15px;
            --label-line-h-current: 4rem;
            --title-top: 4rem;
            --info-top: 8rem;
          }
        }

        @media (min-width: 1200px) {
          .cards-container {
            --radius: 25vw;
            --label-size: 50px;
            --border-color: #cccccc;
          }
        }

        .cards {
          position: absolute;
          inset: var(--cards-container-padding);
          aspect-ratio: 1;
          border-radius: 50%;
          border: 1px solid var(--border-color);
          transition: transform 0.3s ease-in-out var(--duration);
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .cards li {
          position: absolute;
          inset: 0;
          margin: 0;
          padding: 0;
          transform-origin: center;
          display: grid;
          place-content: center;
          transform: rotate(calc(var(--i) * 360deg / var(--items)));
          pointer-events: none;
        }

        .cards li > label {
          position: absolute;
          inset: 0;
          margin: auto;
          transform: translateY(var(--label-offset));
          width: var(--label-size);
          height: var(--label-size);
          cursor: pointer;
          pointer-events: initial;
          text-align: center;
          color: var(--label-color);
          font-size: clamp(0.8rem, 2.5vw + 0.04rem, 1rem);
          font-weight: 600;
          transition: var(--duration) ease-in-out;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cards li > label::before {
          content: '';
          position: absolute;
          top: var(--cards-container-padding);
          left: 50%;
          translate: -50% 0;
          width: var(--label-dot-size);
          height: var(--label-dot-size);
          border-radius: 50%;
          background-color: var(--label-color);
          transition: background-color var(--duration) ease-in-out;
        }

        .cards li > label::after {
          content: '';
          position: absolute;
          top: 100%;
          left: 50%;
          translate: -50% 5px;
          width: 2px;
          height: var(--label-line-h);
          background-color: #5dd62c;
          transition: height 300ms ease-in-out var(--label-line-delay, 0ms);
        }

        .cards li > label:hover {
          --label-color: var(--label-color-hover);
        }

        .cards > li > h2,
        .cards > li > p {
          position: absolute;
          left: 50%;
          text-align: center;
          transform: translate(-50%, 0);
          transform-origin: center;
        }

        .cards > li > h2 {
          top: var(--title-top);
          opacity: var(--title-opacity, 0);
          translate: 0 var(--title-offset-y);
          transition: var(--duration) ease-in-out var(--title-delay, 0ms);
          font-size: clamp(1.5rem, 4vw, 3rem);
          font-weight: 700;
          color: #1a1a1a;
        }

        .cards > li > p {
          top: var(--info-top);
          margin: 4px auto;
          width: var(--info-width);
          z-index: 2;
          font-size: clamp(0.8rem, 2.5vw + 0.05rem, 1rem);
        
          text-wrap: pretty;
          opacity: var(--info-opacity, 0);
          transition: var(--duration) ease-in-out var(--info-delay, 0ms);
          color: #4a4a4a;
          line-height: 1.6;
        }

        /* update custom properties for checked item */
        li:has(input:checked) {
          --label-opacity: 1;
          --label-color: var(--label-color-hover);
          --label-line-h: var(--label-line-h-current);
          --label-line-delay: calc(var(--duration) * 2);
          --title-opacity: 1;
          --title-offset-y: 0;
          --title-delay: calc(var(--duration) * 3);
          --info-opacity: 1;
          --info-offset-y: 0;
          --info-delay: calc(var(--duration) * 4);
        }

        /* rotate container based on checked radio */
        .cards:has(input:checked) {
          transform: rotate(calc(var(--base-rotation) - (var(--index) * var(--full-circle) / var(--items))));
        }

        .cards:has(li:nth-child(1) > input:checked) { --index: 0; }
        .cards:has(li:nth-child(2) > input:checked) { --index: 1; }
        .cards:has(li:nth-child(3) > input:checked) { --index: 2; }
        .cards:has(li:nth-child(4) > input:checked) { --index: 3; }
       
      `}</style>
    </div>
  );
};

export default Emp_Meth;