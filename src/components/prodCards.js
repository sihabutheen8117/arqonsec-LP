import React, { useState } from 'react';
import {  Shield , Eye , Users, User } from 'lucide-react';

const ProdCards = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const cards = [
    {
      id: 1,
      title: 'Enterprise Security',
      content: 'Military-grade protection for your most sensitive data and documents.',
      zIndex: 'z-30',
      icon : <Shield className='w-20 h-20 text-white'/>
    },
    {
      id: 2,
      title: 'Invisible Protection',
      content: 'Seamless security that works behind the scenes without disrupting workflow.',
      zIndex: 'z-20' ,
      icon :  <Eye className='w-20 h-20 text-white'/>
    },
    {
      id: 3,
      title: 'Local Support',
      content: 'Saudi-based team providing 24/7 support in Arabic and English.',
      zIndex: 'z-10' ,
      icon : <Users className='w-20 h-20 text-white'/>
    }
  ];

  return (
//     <div className="flex justify-center items-center min-h-[700px] overflow-hidden p-4 bg-transparent">
//       <div 
//         className="relative w-full max-w-[1050px] flex flex-wrap justify-center gap-10 transition-all duration-500"
//         style={{ transform: 'skewY(-10deg)' }}
//       >
//         {cards.map((card) => (
//           <div
//             key={card.id}
//             className={`relative w-[250px] h-[400px] bg-white transition-all duration-500 hover:-translate-y-10 ${card.zIndex} group`}
//             onMouseEnter={() => setHoveredCard(card.id)}
//             onMouseLeave={() => setHoveredCard(null)}
//           >
//             {/* Top border (before pseudo-element equivalent) */}
//             <div 
//               className="absolute top-[-15px] left-0 w-full h-[15px] bg-[#00c7ff] transition-all duration-500"
//               style={{ 
//                 transformOrigin: 'bottom',
//                 transform: 'skewX(45deg)' 
//               }}
//             />
            
//             {/* Side border (after pseudo-element equivalent) */}
//             <div 
//               className="absolute top-[-15px] left-[-15px] w-[15px] bg-[#00c7ff] transition-all duration-500"
//               style={{ 
//                 height: '50%',
//                 transformOrigin: 'left',
//                 transform: 'skewY(45deg)',
//                 borderBottom: '200px solid #00c7ff'
//               }}
//             />

// <div 
//               className="absolute top-[185px] left-[-15px] w-[15px] bg-[#00c7ff] transition-all duration-500"
//               style={{ 
//                 height: '50%',
//                 transformOrigin: 'left',
//                 transform: 'skewY(45deg)',
//                 borderBottom: '200px solid #ffffff'
//               }}
//             />

          
            
           

//             <div className="relative w-[250px] h-[200px] bg-[#00c7ff] flex justify-center items-center flex-col">
//               <div className={`${hoveredCard === card.id ? 'glow-animation' : ''}`}>
//                 {card.icon}
//               </div>
//               <h3 className="relative text-white mt-2.5 font-sans">{card.title}</h3>
//             </div>
            
//             {/* Content section */}
//             <div className="relative w-full h-[200px] p-5 text-gray-600 text-center bg-white">
//               <div className="relative z-10">{card.content}</div>
              
//               {/* Gradient overlay for hover effect */}
//               <div 
//                 className={`absolute left-0 bottom-0 w-full h-[400px] transition-all duration-500 pointer-events-none ${hoveredCard === card.id ? 'opacity-50 blur-[5px]' : 'opacity-0'}`}
//                 style={{
//                   background: 'linear-gradient(transparent, transparent, rgba(0, 0, 0, 0.1))',
//                   transformOrigin: 'bottom',
//                   transform: hoveredCard === card.id ? 'translateY(40px) skewX(45deg)' : 'skewX(45deg)',
//                   zIndex: -1
//                 }}
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>

        <div className='flex justify-center items-center overflow-hidden bg-transparent font-inter'>
           <div className=''>
           <div className="timeline">
              <div className="outer">
                <div className="card">
                  <div className="info">
                    <h3 className="title mb-2 text-xl font-semibold">
                      <div className="flex items-center gap-4">
                          <Shield className="w-10 h-10 text-black" />
                          <div className="w-px h-8 bg-gray-300" />
                          <h3 className="text-xl font-semibold">
                            Enterprise Security
                          </h3>
                        </div>
                      </h3>
                    <p className='text-lg'>Military-grade protection for your most sensitive data and documents. </p>
                  </div>
                </div>
                <div className="card">
                  <div className="info">
                    <h3 className="title mb-2 ">
                      <div className='flex justify-end'>
                        <div>
                          <div className="flex items-center gap-4">
                            <h3 className="text-xl font-semibold">
                              Invisible Protection
                            </h3>
                            <div className="w-px h-8 bg-gray-300" />
                            <Eye className="w-10 h-10 text-black" />
                            
                          </div>
                        </div>
                      </div>
                    </h3>
                    <p className='text-lg'>Seamless security that works behind the scenes without disrupting workflow.</p>
                  </div>
                </div>
                <div className="card">
                  <div className="info">
                    <h3 className="title mb-2 text-xl font-semibold">
                    <div className="flex items-center gap-4">
                          <Users className="w-10 h-10 text-black" />
                          <div className="w-px h-8 bg-gray-300" />
                          <h3 className="text-xl font-semibold">
                          Local Support
                          </h3>
                        </div>
                     </h3>
                    <p className='text-lg'>Saudi-based team providing 24/7 support in Arabic and English.</p>
                  </div>
                </div>
              </div>
            </div>
           </div>

           <style jsx>
            {`
                /* Timeline Container */
                .timeline {
                  background: var(--primary-color);
                  margin: 20px auto;
                  padding: 20px;
                }

                /* Card container */
                .card {
                  position: relative;
                  max-width: 850px;
                }

                /* setting padding based on even or odd */
                .card:nth-child(odd) {
                  padding: 30px 0 30px 30px;
                }
                .card:nth-child(even) {
                  padding: 30px 30px 30px 0;
                }
                /* Global ::before */
                .card::before {
                  content: "";
                  position: absolute;
                  width: 50%;
                  border: solid #5dd62c ;
                }

                /* Setting the border of top, bottom, left */
                .card:nth-child(odd)::before {
                  left: 0px;
                  top: -4.5px;
                  bottom: -4.5px;
                  border-width: 5px 0 5px 5px;
                  border-radius: 50px 0 0 50px;
                }

                /* Setting the top and bottom to "-5px" because earlier it was out of a pixel in mobile devices */
                @media only screen and (max-width: 400px) {
                  .card:nth-child(odd)::before {
                    top: -5px;
                    bottom: -5px;
                  }
                }

                /* Setting the border of top, bottom, right */
                .card:nth-child(even)::before {
                  right: 0;
                  top: 0;
                  bottom: 0;
                  border-width: 5px 5px 5px 0;
                  border-radius: 0 50px 50px 0;
                }

                /* Removing the border if it is the first card */
                .card:first-child::before {
                  border-top: 0;
                  border-top-left-radius: 0;
                }

                /* Removing the border if it is the last card  and it's odd */
                .card:last-child:nth-child(odd)::before {
                  border-bottom: 0;
                  border-bottom-left-radius: 0;
                }

                /* Removing the border if it is the last card  and it's even */
                .card:last-child:nth-child(even)::before {
                  border-bottom: 0;
                  border-bottom-right-radius: 0;
                }

                /* Information about the timeline */
                .info {
                  display: flex;
                  flex-direction: column;
                  color: gray;
                  border-radius: 10px;
                  padding: 10px;
                }

                /* Title of the card */
                .title {
                  color: #0f0f0f;
                  position: relative;
                }

                /* Timeline dot  */
                .title::before {
                  content: "";
                  position: absolute;
                  width: 15px;
                  height: 15px;
                  background: white;
                  border-radius: 999px;
                  border: 3px solid #5dd62c ;
                }

                /* text right if the card is even  */
                .card:nth-child(even) > .info > .title {
                  text-align: right;
                }

                /* setting dot to the left if the card is odd */
                .card:nth-child(odd) > .info > .title::before {
                  left: -45px;
                }

                /* setting dot to the right if the card is odd */
                .card:nth-child(even) > .info > .title::before {
                  right: -45px;
                }

            `}
           </style>
        </div>
  );
};

export default ProdCards;
