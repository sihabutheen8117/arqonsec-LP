import React, { useState, useEffect } from 'react';
import BlobAnimation from '../components/BlobAnimation ';
import SecLoader from '../components/SecLoader';
import ProdCards from '../components/prodCards';
import GlowingBlob from '../components/GlowingBlob';
import TempProdCards from '../components/TempProdCards';
import SimpleImplementation from '../components/SimpleImplementation';
import ArqonSecLogo from '../components/logos/ArqonSecLogo';
import Emp_Meth from '../components/Emp_Meth'

const Home = () => {

  
    // useEffect(() => {
    //   window.particlesJS.load('particles-js', '/particles.json', function () {
    //     console.log('callback - particles.js config loaded');
    //   });
    // }, []);

    const texts = [
      "document becomes a digital fingerprint !",
      "access gets tracked !",
      "leak gets caught !"
    ];
    
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true);
    
    useEffect(() => {
      const timer = setInterval(() => {
        setIsTyping(false);
        
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % texts.length);
          setTimeout(() => {
            setIsTyping(true);
          }, 100);
        }, 500);
      }, 4000);
      
      return () => clearInterval(timer);
    }, []);
    
  

  
    return (
      <div className="mt-36">

        <div className="max-w-6xl mx-auto">
              <h1 className="text-3xl mb-3 md:text-4xl lg:text-6xl font-bold leading-tight bg-gradient-to-b from-black to-black/70 bg-clip-text text-transparent animate-fade-in">
                Turn Your Data Into Fort Knox
              </h1>
             
          <div className=" bg-[#5dd62c] py-10 rounded-tr-3xl rounded-bl-3xl"
            style={{
              background: "linear-gradient(135deg, #202020 0%, #0f0f0f 100%)"
            }}
          >
            <div className='w-full flex justify-around text-[#f8f8f8]'>
              <div className='font-inter font-semibold text-3xl my-auto'> Your Last Line Defense</div>
              <img src='/logos/arqonsec-white-01.png' alt='' className='h-24'/>
            </div>
          </div>
        </div>

    
        <div className='flex flex-col lg:flex-row items-center justify-center gap-12 px-6'>


       

          <section className="relative flex items-center justify-center pt-10 z-10 flex-1">
            <div className="max-w-5xl mx-auto text-center lg:text-left font-inter">
              
              <p className="text-xl md:text-2xl text-black/80 mb-12 max-w-3xl mx-auto lg:mx-0 font-light animate-fade-in-delay">
              Every document becomes a digital fingerprint. Every access gets tracked. Every leak gets caught. Welcome to the future of data protection.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-delay-2">
                <button className="group relative text-white px-8 py-2.5 bg-[#5dd62c] hover:bg-[#337418] rounded-full font-semibold text-lg transition-all hover:scale-105 shadow-lg hover:shadow-xl">
                  <span className="relative z-10">See it in Action</span>
                </button>
                <button className="px-7 py-2.5 bg-white/10 backdrop-blur-sm rounded-full font-semibold text-lg border-2 border-gray-300 hover:bg-gray-100 hover:border-gray-400 transition-all hover:scale-105">
                  Explore Services
                </button>
              </div>
            </div>
          </section>
          {/* <div className='flex-1 flex items-center justify-center'>
            <ArqonSecLogo size={300} />
          </div>
           */}
        </div>


        <div className='flex items-center justify-center max-w-7xl mx-auto'>
          <div className='px-10'>
            <SecLoader/>
          </div>
          <section className="relative flex items-center justify-center px-6 z-10">
            <div className="max-w-5xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-inter font-extrabold mb-6 leading-tight bg-gradient-to-b from-black to-black/70 bg-clip-text text-transparent animate-fade-in">
                Control access. Reduce risk. Protect data.<span className='text-[#0056b3]'></span>
              </h1>
              <ul className="space-y-3 text-left">
                <li className="flex gap-3">
                  <div
                    className="flex-shrink-0 w-1.5 h-1.5 bg-[#5dd62c] mt-2"
                    style={{ borderRadius: "2px" }}
                  ></div>
                  <p className="text-[#494949] text-[16px] md:text-[18px] leading-relaxed sm-tracking-features-description">
                    <span className="font-bold">Data Shielding : </span>
                    <span className="font-normal">Every file becomes a fortress with <strong>invisible screen watermarks</strong> and <strong>print protection</strong>, ensuring your data is always traceable and tamper-proof.</span>
                  </p>
                </li>

                <li className="flex gap-3">
                  <div
                    className="flex-shrink-0 w-1.5 h-1.5 bg-[#5dd62c] mt-2"
                    style={{ borderRadius: "2px" }}
                  ></div>
                  <p className="text-[#494949] text-[16px] md:text-[18px] leading-relaxed sm-tracking-features-description">
                    <span className="font-bold">Access Control & Monitoring : </span>
                    <span className="font-normal">Every access, view, or print is <strong>monitored in real-time</strong>, creating a complete <strong>audit trail</strong> and instant alerts for suspicious activities.</span>
                  </p>
                </li>

                <li className="flex gap-3">
                  <div
                    className="flex-shrink-0 w-1.5 h-1.5 bg-[#5dd62c] mt-2"
                    style={{ borderRadius: "2px" }}
                  ></div>
                  <p className="text-[#494949] text-[16px] md:text-[18px] leading-relaxed sm-tracking-features-description">
                    <span className="font-bold">Extended Defense : </span>
                    <span className="font-normal">Go beyond documents with <strong>data masking</strong>, <strong>USB protection</strong>, and <strong>password security</strong> — forming a multi-layer barrier around your enterprise ecosystem.</span>
                  </p>
                </li>
              </ul>
            </div>
          </section>
        </div>
      
       

    

        {/* <SimpleImplementation /> */}

        <div className=''>

          <Emp_Meth/>
        </div>

        <div className='font-inter'>
          <section className="relative flex items-center justify-center z-10 ">
            <div className="max-w-5xl mx-auto text-center">
              <h1 className="text-3xl md:text-3xl lg:text-4xl font-extrabold  leading-tight bg-gradient-to-b from-black to-black/70 bg-clip-text text-transparent animate-fade-in">
              Why Choose ArqonSec ?
              </h1>
              <h1 className="text-[#5dd62c] text-xl md:text-2xl lg:text-3xl font-extrabold leading-tight bg-clip-text animate-fade-in mt-2">
                Every{" "}
                <span
                  className="inline-flex items-baseline"
                  style={{ verticalAlign: "middle" }}
                >
                  <span
                    className={`font-mono text-inherit whitespace-nowrap overflow-hidden border-r-4 border-[#5dd62c] pr-1 text-[#337418] ${
                      isTyping ? "animate-typing" : ""
                    }`}
                    style={{
                      animation: isTyping
                        ? "typing 3s steps(30, end) forwards, blink 0.7s step-end infinite"
                        : "blink 0.7s step-end infinite",
                      display: "inline-block",
                      verticalAlign: "middle",
                      lineHeight: "1",
                    }}
                  >
                    {texts[currentIndex]}
                  </span>
                </span>

                <style jsx>{`
                  @keyframes typing {
                    from {
                      width: 0;
                    }
                    to {
                      width: 100%;
                    }
                  }

                  @keyframes blink {
                    50% {
                      border-color: transparent;
                    }
                  }

                  .animate-typing {
                    animation: typing 3s steps(30, end) forwards, blink 0.7s step-end infinite;
                  }
                `}</style>
              </h1>

            </div>
          </section>
        </div>


        <section id="products" className="relative z-10">
          <ProdCards />
        </section>
     
  
        <style jsx>{`
          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          .animate-fade-in {
            animation: fade-in 1s ease-out forwards;
          }
          
          .animate-fade-in-delay {
            animation: fade-in 1s ease-out 0.3s forwards;
            opacity: 0;
          }
          
          .animate-fade-in-delay-2 {
            animation: fade-in 1s ease-out 0.6s forwards;
            opacity: 0;
          }
        `}</style>

        
{/* 
        <div className=''>
          <TempProdCards/>
        </div> */}


        {/* <div className='relative w-full h-screen'>
          <div id="particles-js" className='relative'></div>
          <div className='absolute inset-0 pointer-events-none z-10'>
            <GlowingBlob/>
          </div>
        </div> */}

  
      </div>
    );
}

export default Home
