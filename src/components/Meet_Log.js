import React, { useState, useRef } from 'react';
import { User, Mail, MessageSquare } from 'lucide-react';

// export default function Meet_Log() {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSuccess, setIsSuccess] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//     subscribe: false
//   });
//   const wrapperRef = useRef(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     setTimeout(() => {
//       setIsSubmitting(false);
//       setIsSuccess(true);

//       setTimeout(() => {
//         setIsSuccess(false);
//         setFormData({ name: '', email: '', message: '', subscribe: false });
//       }, 2000);
//     }, 1500);
//   };

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value
//     }));
//   };

//   const handleMouseMove = (e) => {
//     if (!wrapperRef.current) return;
    
//     const rect = wrapperRef.current.getBoundingClientRect();
//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;
    
//     const centerX = rect.width / 2;
//     const centerY = rect.height / 2;
    
//     const rotateX = (y - centerY) / 20;
//     const rotateY = (centerX - x) / 20;
    
//     wrapperRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
//   };

//   const handleMouseLeave = () => {
//     if (wrapperRef.current) {
//       wrapperRef.current.style.transform = 'rotateX(10deg) rotateY(-10deg)';
//     }
//   };

//   return (
//     <div className="min-h-screen bg-white flex items-center justify-center p-5 overflow-x-hidden">
//       <div 
//         className="relative w-full max-w-lg"
//         onMouseMove={handleMouseMove}
//         onMouseLeave={handleMouseLeave}
//       >
//         {/* SVG Decorations */}
//         <div className="absolute -top-16 -left-10 z-0 animate-[float_6s_ease-in-out_infinite]">
//           <svg width="80" height="80" viewBox="0 0 80 80">
//             <circle cx="40" cy="40" r="35" fill="none" stroke="#667eea" strokeWidth="2" opacity="0.3">
//               <animate attributeName="r" from="35" to="38" dur="2s" repeatCount="indefinite" />
//               <animate attributeName="opacity" from="0.3" to="0.6" dur="2s" repeatCount="indefinite" />
//             </circle>
//             <path d="M40,15 L50,35 L70,35 L55,48 L60,68 L40,55 L20,68 L25,48 L10,35 L30,35 Z" fill="#f093fb" opacity="0.6">
//               <animateTransform attributeName="transform" type="rotate" from="0 40 40" to="360 40 40" dur="10s" repeatCount="indefinite" />
//             </path>
//           </svg>
//         </div>

//         <div className="absolute -bottom-16 -right-10 z-0 animate-[float_8s_ease-in-out_infinite_reverse]">
//           <svg width="100" height="100" viewBox="0 0 100 100">
//             <polygon points="50,10 90,35 75,80 25,80 10,35" fill="none" stroke="#764ba2" strokeWidth="2" opacity="0.3">
//               <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="15s" repeatCount="indefinite" />
//             </polygon>
//             <circle cx="50" cy="50" r="8" fill="#f5576c">
//               <animate attributeName="r" from="8" to="12" dur="1.5s" repeatCount="indefinite" />
//               <animate attributeName="opacity" from="0.8" to="0.3" dur="1.5s" repeatCount="indefinite" />
//             </circle>
//           </svg>
//         </div>

//         <div className="absolute top-1/2 -right-20 z-0 animate-[spin_20s_linear_infinite]">
//           <svg width="60" height="60" viewBox="0 0 60 60">
//             <rect x="10" y="10" width="40" height="40" fill="none" stroke="#f093fb" strokeWidth="2" opacity="0.4">
//               <animateTransform attributeName="transform" type="rotate" from="0 30 30" to="360 30 30" dur="8s" repeatCount="indefinite" />
//             </rect>
//           </svg>
//         </div>

//         {/* Form Wrapper */}
//         <div 
//           ref={wrapperRef}
//           className="relative bg-gradient-to-br from-indigo-500 to-purple-600 p-12 rounded-3xl transition-transform duration-300 ease-out"
//           style={{
//             transform: 'rotateX(10deg) rotateY(-10deg)',
//             transformStyle: 'preserve-3d',
//             boxShadow: '20px 20px 60px rgba(102, 126, 234, 0.3), -10px -10px 30px rgba(255, 255, 255, 0.5), inset 0 0 0 1px rgba(255, 255, 255, 0.2)'
//           }}
//         >
//           {/* Floating Particles */}
//           {[0, 1, 2, 3, 4].map((i) => (
//             <div
//               key={i}
//               className="absolute bottom-0 bg-white/60 rounded-full pointer-events-none animate-[rise_4s_ease-in_infinite]"
//               style={{
//                 left: `${10 + i * 20}%`,
//                 width: `${3 + (i % 3)}px`,
//                 height: `${3 + (i % 3)}px`,
//                 animationDelay: `${i * 0.5}s`
//               }}
//             />
//           ))}

//           <h2 className="text-white text-4xl font-bold mb-2 text-center" style={{ transform: 'translateZ(30px)', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}>
//             Get In Touch
//           </h2>
//           <p className="text-white/90 text-center mb-8" style={{ transform: 'translateZ(25px)' }}>
//             We'd love to hear from you
//           </p>

//           <div>
//             {/* Full Name */}
//             <div className="mb-6 relative" style={{ transform: 'translateZ(20px)' }}>
//               <label className="block text-white mb-2 text-sm font-medium tracking-wide">
//                 Full Name
//               </label>
//               <div className="relative">
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder="John Doe"
//                   required
//                   className="w-full px-5 py-4 pr-12 border-2 border-white/30 bg-white/95 rounded-xl text-base text-gray-800 outline-none transition-all duration-300 focus:border-pink-300 focus:bg-white focus:-translate-y-1 focus:shadow-[0_5px_20px_rgba(240,147,251,0.4)]"
//                 />
//                 <User className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 opacity-60 pointer-events-none transition-all duration-300" />
//               </div>
//             </div>

//             {/* Email */}
//             <div className="mb-6 relative" style={{ transform: 'translateZ(20px)' }}>
//               <label className="block text-white mb-2 text-sm font-medium tracking-wide">
//                 Email Address
//               </label>
//               <div className="relative">
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="john@example.com"
//                   required
//                   className="w-full px-5 py-4 pr-12 border-2 border-white/30 bg-white/95 rounded-xl text-base text-gray-800 outline-none transition-all duration-300 focus:border-pink-300 focus:bg-white focus:-translate-y-1 focus:shadow-[0_5px_20px_rgba(240,147,251,0.4)]"
//                 />
//                 <Mail className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 opacity-60 pointer-events-none transition-all duration-300" />
//               </div>
//             </div>

//             {/* Message */}
//             <div className="mb-6 relative" style={{ transform: 'translateZ(20px)' }}>
//               <label className="block text-white mb-2 text-sm font-medium tracking-wide">
//                 Your Message
//               </label>
//               <div className="relative">
//                 <textarea
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   placeholder="Tell us what you're thinking..."
//                   required
//                   rows="4"
//                   className="w-full px-5 py-4 pr-12 border-2 border-white/30 bg-white/95 rounded-xl text-base text-gray-800 outline-none resize-y transition-all duration-300 focus:border-pink-300 focus:bg-white focus:-translate-y-1 focus:shadow-[0_5px_20px_rgba(240,147,251,0.4)]"
//                 />
//                 <MessageSquare className="absolute right-4 top-4 w-5 h-5 text-gray-500 opacity-60 pointer-events-none transition-all duration-300" />
//               </div>
//             </div>

//             {/* Checkbox */}
//             <div className="flex items-center mb-6" style={{ transform: 'translateZ(20px)' }}>
//               <label className="flex items-center cursor-pointer">
//                 <div className="relative w-6 h-6 mr-3">
//                   <input
//                     type="checkbox"
//                     name="subscribe"
//                     checked={formData.subscribe}
//                     onChange={handleChange}
//                     className="peer absolute opacity-0 w-full h-full cursor-pointer"
//                   />
//                   <div className="w-6 h-6 bg-white/90 rounded-md transition-all duration-300 peer-checked:bg-pink-400 peer-checked:rotate-360">
//                     <svg className="w-6 h-6 hidden peer-checked:block" viewBox="0 0 24 24">
//                       <path fill="white" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
//                     </svg>
//                   </div>
//                 </div>
//                 <span className="text-white text-sm">Subscribe to our newsletter</span>
//               </label>
//             </div>

//             {/* Submit Button */}
//             <button
//               onClick={handleSubmit}
//               disabled={isSubmitting || isSuccess}
//               className="relative w-full py-4 bg-gradient-to-br from-pink-400 to-red-400 text-white rounded-xl text-lg font-semibold cursor-pointer transition-all duration-300 overflow-hidden disabled:cursor-not-allowed hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(245,87,108,0.5)] active:translate-y-0"
//               style={{ 
//                 transform: 'translateZ(25px)',
//                 boxShadow: '0 10px 30px rgba(245, 87, 108, 0.4)',
//                 background: isSubmitting 
//                   ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
//                   : isSuccess 
//                   ? 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)'
//                   : 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
//               }}
//             >
//               <span className="relative z-10">
//                 {isSubmitting ? 'Sending...' : isSuccess ? '✓ Sent Successfully!' : 'Send Message'}
//               </span>
//               <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-all duration-500 hover:left-full" />
//             </button>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           50% { transform: translateY(-20px) rotate(5deg); }
//         }
//         @keyframes rise {
//           0% {
//             transform: translateY(0) scale(1);
//             opacity: 1;
//           }
//           100% {
//             transform: translateY(-100px) scale(0);
//             opacity: 0;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }

export default function Meet_Log()
{const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <div className="pt-10 flex items-center justify-center overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css?family=Oswald|Roboto');
        
        @keyframes btn {
          0%, 100% { transform: scale(1); }
          70% { transform: scale(1); }
          80% { transform: scale(1.04); }
          90% { transform: scale(0.96); }
        }
        
        @keyframes fish {
          0%, 70% { opacity: 0; }
          100% { opacity: 1; }
        }
        
        .fish, .fish-shadow {
          animation: fish 3s forwards ease-in-out;
        }
        
        .fish path:hover {
          fill: #ff6100;
        }
        
        .card_button {
          animation: btn 6.0s 3s infinite ease-in-out;
        }
        
        .input_field:focus + .input_label,
        .input_field:valid + .input_label {
          color: #665856;
          transform: translateY(-25px);
        }
        
        .input_field:focus,
        .input_field:valid {
          outline: 0;
          border-bottom-color: #665856;
        }
        
        .input_label {
          transition: all 0.3s;
        }
        
        .input_field {
          transition: all 0.3s;
        }
      `}</style>

      <div className="relative bg-[#fafafe] rounded-[10px] m-10 p-[25px_20px_10px] shadow-[0_5px_15px_rgba(0,0,0,0.2)] w-[320px] box-border">
        <div className="absolute left-0 bottom-0 right-0 h-[60%] bg-[#fafafe] rounded-[10px] z-[2]" />
        
        <div className="relative z-[2]">
          <h1 className="text-2xl font-semibold m-0 w-full flex justify-center mb-2">ArqonSec Admin Login</h1>
          <p className="text-sm my-[7px_0_10px]  w-full flex justify-center">Access ArqonSec Internal Meetings Portal</p>
          
          <div className="card_form">
            
            
            <div className="flex flex-col-reverse relative pt-[10px] mt-[10px] mb-2">
              <input 
                type="text" 
                className="input_field border-0 p-0 z-[1] bg-transparent border-b-2 border-[#eee] text-sm leading-[30px]" 
                required 
              />
              <label className="input_label text-[#8597a3] absolute top-4">User name</label>
            </div>
            
            <div className="flex flex-col-reverse relative pt-[10px] mt-[15px] mb-5">
              <input 
                type={showPassword ? "text" : "password"}
                className="input_field border-0 p-0 z-[1] bg-transparent border-b-2 border-[#eee] text-sm leading-[30px]" 
                required 
              />
              <label className="input_label text-[#8597a3] absolute top-4">Password</label>
              <span 
                className="absolute bottom-0 right-0 w-9 h-[30px] flex items-center justify-center cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                <svg className="w-6 h-auto stroke-[#8597a3]" viewBox="0 0 146 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M143 37C143 45.4902 136.139 53.9606 123.263 60.487C110.554 66.9283 92.7879 71 73 71C53.2121 71 35.446 66.9283 22.7375 60.487C9.86096 53.9606 3 45.4902 3 37C3 28.5098 9.86096 20.0394 22.7375 13.513C35.446 7.07167 53.2121 3 73 3C92.7879 3 110.554 7.07167 123.263 13.513C136.139 20.0394 143 28.5098 143 37Z" strokeWidth="6" />
                  <circle cx="73" cy="37" r="34" strokeWidth="6" />
                </svg>
              </span>
            </div>
            
            <button 
              className="card_button rounded w-full px-[15px] text-lg leading-9 font-medium my-[25px_0_10px] text-white bg-gradient-to-b from-[#ff6100] to-[#ff5050] shadow-[0_2px_12px_-3px_rgba(255,80,80,1)] opacity-90 hover:opacity-100 transition-all duration-300"
              onClick={handleSubmit}
            >
              Login
            </button>
          </div>
          
          <div className="text-sm mt-3 w-full flex justify-center">
            <p>Authorized Personnel Only </p>
          </div>
        </div>

        <div className="absolute top-0 left-0 opacity-20" style={{ filter: 'blur(10px)' }}>
          <svg className="fish-shadow w-[640px] h-auto absolute -top-[125px] -left-[157px]" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMin slice" viewBox="0 0 743 645">
            <g id="Artboard" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="square">
              
              <g xmlns="http://www.w3.org/2000/svg" id="Artboard" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="Group" transform="translate(-103.000000, 3.000000)" fill="#F2AFAF">
                  <g id="l-1" transform="translate(118.396084, 37.985234) rotate(-89.000000) translate(-118.396084, -37.985234) translate(104.396084, 23.985234)">
                    <path d="M14.1723611,27.5145257 C19.9713509,27.5145257 24.6723611,22.8135155 24.6723611,17.0145257 C24.6723611,15.8258883 28.1981217,2.09701504 27.8341336,1.03166708 C26.4223375,-3.10048431 18.7827136,6.51452565 14.1723611,6.51452565 C9.87015746,6.51452565 1.67467528,-2.67194974 0.0523652038,1.03166708 C-0.512055182,2.32019808 3.67236107,15.5177394 3.67236107,17.0145257 C3.67236107,22.8135155 8.3733712,27.5145257 14.1723611,27.5145257 Z" />
                  </g>
                </g>
                <animateMotion dur="6s" begin="0s" repeatCount="indefinite" rotate="auto" fill="freeze">
                  <mpath xlinkHref="#Line" />
                </animateMotion>
              </g>

              <g xmlns="http://www.w3.org/2000/svg" id="Artboard" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="Group" transform="translate(-71.000000, 3.000000)">
                  <g id="l-2" transform="translate(96.916890, 37.437926) rotate(-89.000000) translate(-96.916890, -37.437926) translate(60.416890, 13.437926)">
                    <ellipse id="Oval" cx="36.5" cy="24" rx="16.5" ry="24" />
                    <path d="M52.8409492,28.4193415 C56.9830848,28.4193415 67.8409492,23.8671728 67.8409492,17.7920406 C67.8409492,16.3338966 72.7364131,8.06546148 72.3851131,6.79204055 C71.2727759,2.75994931 63.4888957,6.79204055 60.3409492,6.79204055 C56.1988135,6.79204055 52.8409492,11.7169083 52.8409492,17.7920406 C52.8409492,23.8671728 48.6988135,28.4193415 52.8409492,28.4193415 Z" id="Oval" />
                    <path d="M1.84094917,28.4193415 C5.98308479,28.4193415 16.8409492,23.8671728 16.8409492,17.7920406 C16.8409492,16.3338966 21.7364131,8.06546148 21.3851131,6.79204055 C20.2727759,2.75994931 12.4888957,6.79204055 9.34094917,6.79204055 C5.19881354,6.79204055 1.84094917,11.7169083 1.84094917,17.7920406 C1.84094917,23.8671728 -2.30118646,28.4193415 1.84094917,28.4193415 Z" id="Oval" transform="translate(10.701577, 16.709671) scale(-1, 1) translate(-10.701577, -16.709671) " />
                  </g>
                </g>
                <animateMotion dur="6s" begin="0.1s" repeatCount="indefinite" rotate="auto" fill="freeze">
                  <mpath xlinkHref="#Line" />
                </animateMotion>
              </g>

              <g xmlns="http://www.w3.org/2000/svg" id="Artboard" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="Group" transform="translate(-58.000000, 3.000000)" fill="#FFFFF0">
                  <g id="l-3-" transform="translate(83.924588, 36.883456) rotate(-89.000000) translate(-83.924588, -36.883456) translate(69.424588, 12.883456)">
                    <path d="M14.1723611,48 C19.4148996,48 23.903645,41.8034457 25.7601702,33.016917 C26.3483828,30.2330353 28.8341336,32.1407168 28.8341336,28.9515567 C28.8341336,15.6967227 21.0759204,1.42108547e-14 14.1723611,1.42108547e-14 C7.2688017,1.42108547e-14 3.55271368e-15,13.745166 3.55271368e-15,27 C3.55271368e-15,29.9816317 1.95554677,29.8362716 2.47309478,32.4701788 C4.25630479,41.5452976 8.82173488,48 14.1723611,48 Z" id="l-3" />
                  </g>
                </g>
                <animateMotion dur="6s" begin="0.2s" repeatCount="indefinite" rotate="auto" fill="freeze">
                  <mpath xlinkHref="#Line" />
                </animateMotion>
              </g>

              <g xmlns="http://www.w3.org/2000/svg" id="Artboard" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="Group" transform="translate(-48.000000, 3.000000)" fill="#FFFFF0">
                  <g id="l-4-" transform="translate(73.917498, 37.202362) rotate(-89.000000) translate(-73.917498, -37.202362) translate(61.417498, 13.202362)">
                    <path d="M12.2878333,48 C16.8332608,48 20.7251285,41.8034457 22.3347878,33.016917 C22.8447845,30.2330353 25,32.1407168 25,28.9515567 C25,15.6967227 18.2734123,1.42108547e-14 12.2878333,1.42108547e-14 C6.30225431,1.42108547e-14 0,13.745166 0,27 C0,29.9816317 1.69551372,29.8362716 2.14424232,32.4701788 C3.69033525,41.5452976 7.64869079,48 12.2878333,48 Z" id="l-4" />
                  </g>
                </g>
                <animateMotion dur="6s" begin="0.3s" repeatCount="indefinite" rotate="auto" fill="freeze">
                  <mpath xlinkHref="#Line" />
                </animateMotion>
              </g>

              <g xmlns="http://www.w3.org/2000/svg" id="Artboard" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="Group" transform="translate(-32.000000, 3.000000)" fill="#FFFFF0">
                  <g id="l-5-" transform="translate(58.922677, 36.774735) rotate(-89.000000) translate(-58.922677, -36.774735) translate(49.422677, 12.774735)">
                    <path d="M9.33875331,48 C12.7932782,48 15.7510977,41.8034457 16.9744387,33.016917 C17.3620362,30.2330353 19,32.1407168 19,28.9515567 C19,15.6967227 13.8877933,1.42108547e-14 9.33875331,1.42108547e-14 C4.78971327,1.42108547e-14 0,13.745166 0,27 C0,29.9816317 1.28859043,29.8362716 1.62962417,32.4701788 C2.80465479,41.5452976 5.813005,48 9.33875331,48 Z" id="l-4" />
                  </g>
                </g>
                <animateMotion dur="6s" begin="0.4s" repeatCount="indefinite" rotate="auto" fill="freeze">
                  <mpath xlinkHref="#Line" />
                </animateMotion>
              </g>

              <g xmlns="http://www.w3.org/2000/svg" id="Artboard" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="Group" transform="translate(-1.000000, -2.000000)" fill="#FFFFF0">
                  <g id="l-6" transform="translate(23.080623, 42.228667) rotate(-89.000000) translate(-23.080623, -42.228667) translate(-17.919377, 20.728667)">
                    <path d="M41.7607406,42.4419194 C43.7607286,42.4419194 43.2381119,38.329711 43.2310921,38.0763828 C43.1415394,34.8446384 44.2788431,34.4419194 41.6451883,34.4419194 C39.0115336,34.4419194 39.7260112,34.2957436 39.8222402,37.76842 C39.82926,38.0217482 39.7195178,42.4419194 41.7607406,42.4419194 Z" id="Oval" />
                    <path d="M23.6342467,37.7478622 C27.3113017,37.7478622 36.9500408,30.5559331 36.9500408,20.9578882 C36.9500408,18.65418 41.2958401,5.59095627 40.9839843,3.57909038 C39.9965407,-2.7911731 32.569021,0.0196920288 29.4031545,6.69804407 C26.912494,11.9520586 23.6342467,11.3598432 23.6342467,20.9578882 C23.6342467,30.5559331 19.9571917,37.7478622 23.6342467,37.7478622 Z" id="Oval" transform="translate(31.500000, 18.873931) scale(-1, 1) translate(-31.500000, -18.873931) " />
                    <path d="M43.2310921,38.0763828 C46.9081472,38.0763828 56.5468863,30.8844538 56.5468863,21.2864088 C56.5468863,18.9827007 60.8926856,5.91947694 60.5808297,3.90761104 C59.5933862,-2.46265244 52.1658664,0.348212694 49,7.02656473 C46.5093394,12.2805793 43.2310921,11.6883638 43.2310921,21.2864088 C43.2310921,30.8844538 39.5540371,38.0763828 43.2310921,38.0763828 Z" id="Oval" />
                    <rect id="Rectangle" fillOpacity="0" x="0.186684949" y="18.7699638" width="81" height="9" />
                  </g>
                </g>
                <animateMotion dur="6s" begin="0.5s" repeatCount="indefinite" rotate="auto" fill="freeze">
                  <mpath xlinkHref="#Line" />
                </animateMotion>
              </g>
            </g>
          </svg>
        </div>

        <svg className="fish w-[640px] h-auto absolute -top-[145px] -left-[177px]" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMin slice" viewBox="0 0 743 645">
          <g id="Artboard" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="square">
            <path d="M177.367 337.568L182.709 357.739C198.517 417.421 249.748 460.995 311.193 467.019L421.508 477.834C478.237 483.396 532.831 454.649 560.346 404.729C607.09 319.923 557.549 214.182 462.47 195.822L375.079 178.946C368.369 177.651 361.766 175.854 355.324 173.572C251.651 136.837 149.205 231.245 177.367 337.568Z" className="line" id="Line"  />

            <g xmlns="http://www.w3.org/2000/svg" id="Artboard" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g id="Group" transform="translate(-103.000000, 3.000000)" fill="#F2AFAF">
                <g id="l-1" transform="translate(118.396084, 37.985234) rotate(-89.000000) translate(-118.396084, -37.985234) translate(104.396084, 23.985234)">
                  <path d="M14.1723611,27.5145257 C19.9713509,27.5145257 24.6723611,22.8135155 24.6723611,17.0145257 C24.6723611,15.8258883 28.1981217,2.09701504 27.8341336,1.03166708 C26.4223375,-3.10048431 18.7827136,6.51452565 14.1723611,6.51452565 C9.87015746,6.51452565 1.67467528,-2.67194974 0.0523652038,1.03166708 C-0.512055182,2.32019808 3.67236107,15.5177394 3.67236107,17.0145257 C3.67236107,22.8135155 8.3733712,27.5145257 14.1723611,27.5145257 Z" />
                </g>
              </g>
              <animateMotion dur="6s" begin="0s" repeatCount="indefinite" rotate="auto" fill="freeze">
                <mpath xlinkHref="#Line" />
              </animateMotion>
            </g>

            <g xmlns="http://www.w3.org/2000/svg" id="Artboard" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g id="Group" transform="translate(-71.000000, 3.000000)" fill="#ff5050">
                <g id="l-2" transform="translate(96.916890, 37.437926) rotate(-89.000000) translate(-96.916890, -37.437926) translate(60.416890, 13.437926)">
                  <ellipse id="Oval" cx="36.5" cy="24" rx="16.5" ry="24" />
                  <path d="M52.8409492,28.4193415 C56.9830848,28.4193415 67.8409492,23.8671728 67.8409492,17.7920406 C67.8409492,16.3338966 72.7364131,8.06546148 72.3851131,6.79204055 C71.2727759,2.75994931 63.4888957,6.79204055 60.3409492,6.79204055 C56.1988135,6.79204055 52.8409492,11.7169083 52.8409492,17.7920406 C52.8409492,23.8671728 48.6988135,28.4193415 52.8409492,28.4193415 Z" id="Oval" />
                  <path d="M1.84094917,28.4193415 C5.98308479,28.4193415 16.8409492,23.8671728 16.8409492,17.7920406 C16.8409492,16.3338966 21.7364131,8.06546148 21.3851131,6.79204055 C20.2727759,2.75994931 12.4888957,6.79204055 9.34094917,6.79204055 C5.19881354,6.79204055 1.84094917,11.7169083 1.84094917,17.7920406 C1.84094917,23.8671728 -2.30118646,28.4193415 1.84094917,28.4193415 Z" id="Oval" transform="translate(10.701577, 16.709671) scale(-1, 1) translate(-10.701577, -16.709671) " />
                </g>
              </g>
              <animateMotion dur="6s" begin="0.1s" repeatCount="indefinite" rotate="auto" fill="freeze">
                <mpath xlinkHref="#Line" />
              </animateMotion>
            </g>

            <g xmlns="http://www.w3.org/2000/svg" id="Artboard" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g id="Group" transform="translate(-58.000000, 3.000000)" fill="#FFFFF0">
                <g id="l-3-" transform="translate(83.924588, 36.883456) rotate(-89.000000) translate(-83.924588, -36.883456) translate(69.424588, 12.883456)">
                  <path d="M14.1723611,48 C19.4148996,48 23.903645,41.8034457 25.7601702,33.016917 C26.3483828,30.2330353 28.8341336,32.1407168 28.8341336,28.9515567 C28.8341336,15.6967227 21.0759204,1.42108547e-14 14.1723611,1.42108547e-14 C7.2688017,1.42108547e-14 3.55271368e-15,13.745166 3.55271368e-15,27 C3.55271368e-15,29.9816317 1.95554677,29.8362716 2.47309478,32.4701788 C4.25630479,41.5452976 8.82173488,48 14.1723611,48 Z" id="l-3" />
                </g>
              </g>
              <animateMotion dur="6s" begin="0.2s" repeatCount="indefinite" rotate="auto" fill="freeze">
                <mpath xlinkHref="#Line" />
              </animateMotion>
            </g>

            <g xmlns="http://www.w3.org/2000/svg" id="Artboard" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g id="Group" transform="translate(-48.000000, 3.000000)" fill="#FFFFF0">
                <g id="l-4-" transform="translate(73.917498, 37.202362) rotate(-89.000000) translate(-73.917498, -37.202362) translate(61.417498, 13.202362)">
                  <path d="M12.2878333,48 C16.8332608,48 20.7251285,41.8034457 22.3347878,33.016917 C22.8447845,30.2330353 25,32.1407168 25,28.9515567 C25,15.6967227 18.2734123,1.42108547e-14 12.2878333,1.42108547e-14 C6.30225431,1.42108547e-14 0,13.745166 0,27 C0,29.9816317 1.69551372,29.8362716 2.14424232,32.4701788 C3.69033525,41.5452976 7.64869079,48 12.2878333,48 Z" id="l-4" />
                </g>
              </g>
              <animateMotion dur="6s" begin="0.3s" repeatCount="indefinite" rotate="auto" fill="freeze">
                <mpath xlinkHref="#Line" />
              </animateMotion>
            </g>

            <g xmlns="http://www.w3.org/2000/svg" id="Artboard" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g id="Group" transform="translate(-32.000000, 3.000000)" fill="#FFFFF0">
                <g id="l-5-" transform="translate(58.922677, 36.774735) rotate(-89.000000) translate(-58.922677, -36.774735) translate(49.422677, 12.774735)">
                  <path d="M9.33875331,48 C12.7932782,48 15.7510977,41.8034457 16.9744387,33.016917 C17.3620362,30.2330353 19,32.1407168 19,28.9515567 C19,15.6967227 13.8877933,1.42108547e-14 9.33875331,1.42108547e-14 C4.78971327,1.42108547e-14 0,13.745166 0,27 C0,29.9816317 1.28859043,29.8362716 1.62962417,32.4701788 C2.80465479,41.5452976 5.813005,48 9.33875331,48 Z" id="l-4" />
                </g>
              </g>
              <animateMotion dur="6s" begin="0.4s" repeatCount="indefinite" rotate="auto" fill="freeze">
                <mpath xlinkHref="#Line" />
              </animateMotion>
            </g>

            <g xmlns="http://www.w3.org/2000/svg" id="Artboard" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g id="Group" transform="translate(-1.000000, -2.000000)" fill="#FFFFF0">
                <g id="l-6" transform="translate(23.080623, 42.228667) rotate(-89.000000) translate(-23.080623, -42.228667) translate(-17.919377, 20.728667)">
                  <path d="M41.7607406,42.4419194 C43.7607286,42.4419194 43.2381119,38.329711 43.2310921,38.0763828 C43.1415394,34.8446384 44.2788431,34.4419194 41.6451883,34.4419194 C39.0115336,34.4419194 39.7260112,34.2957436 39.8222402,37.76842 C39.82926,38.0217482 39.7195178,42.4419194 41.7607406,42.4419194 Z" id="Oval" />
                  <path d="M23.6342467,37.7478622 C27.3113017,37.7478622 36.9500408,30.5559331 36.9500408,20.9578882 C36.9500408,18.65418 41.2958401,5.59095627 40.9839843,3.57909038 C39.9965407,-2.7911731 32.569021,0.0196920288 29.4031545,6.69804407 C26.912494,11.9520586 23.6342467,11.3598432 23.6342467,20.9578882 C23.6342467,30.5559331 19.9571917,37.7478622 23.6342467,37.7478622 Z" id="Oval" transform="translate(31.500000, 18.873931) scale(-1, 1) translate(-31.500000, -18.873931) " />
                  <path d="M43.2310921,38.0763828 C46.9081472,38.0763828 56.5468863,30.8844538 56.5468863,21.2864088 C56.5468863,18.9827007 60.8926856,5.91947694 60.5808297,3.90761104 C59.5933862,-2.46265244 52.1658664,0.348212694 49,7.02656473 C46.5093394,12.2805793 43.2310921,11.6883638 43.2310921,21.2864088 C43.2310921,30.8844538 39.5540371,38.0763828 43.2310921,38.0763828 Z" id="Oval" />
                  <rect id="Rectangle" fillOpacity="0" x="0.186684949" y="18.7699638" width="81" height="9" />
                </g>
              </g>
              <animateMotion dur="6s" begin="0.5s" repeatCount="indefinite" rotate="auto" fill="freeze">
                <mpath xlinkHref="#Line" />
              </animateMotion>
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}