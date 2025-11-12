import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send , Timer , Shield } from 'lucide-react';


const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
      const [isSubmitted, setIsSubmitted] = useState(false);
    
      useEffect(() => {
        const handleMouseMove = (e) => {
          setMousePos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
      }, []);
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = () => {
        if (formData.name && formData.email && formData.subject && formData.message) {
          setIsSubmitted(true);
          setTimeout(() => {
            setIsSubmitted(false);
            setFormData({ name: '', email: '', subject: '', message: '' });
          }, 3000);
        }
      };
    
      return (
        <div className="min-h-screen mt-20 flex items-center justify-center p-2 py-4 relative overflow-hidden flex-col">

<div className="flex items-center justify-center relative overflow-hidden pb-6">
      {/* Decorative animated dots */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-2 h-2 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-[20%] right-[8%] w-2 h-2 bg-blue-400 rounded-full opacity-20 animate-pulse" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-[15%] left-[10%] w-2 h-2 bg-blue-500 rounded-full opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-[25%] right-[12%] w-2 h-2 bg-blue-400 rounded-full opacity-20 animate-pulse" style={{animationDelay: '1.5s'}}></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative">
        {/* Heading with shield icon */}
        <div className="relative inline-block mb-8 animate-fade-in-up">
          <h1 className="text-3xl md:text-5xl lg:text-5xl font-extrabold bg-gradient-to-br from-slate-900 via-blue-900 to-blue-500 bg-clip-text text-transparent leading-tight tracking-tight">
            Contact Us
          </h1>
          
          {/* Floating shield icon */}
          <div className="absolute -top-6 -right-10 md:-top-8 md:-right-12 opacity-15 animate-float">
            <Shield className="w-12 h-12 md:w-16 md:h-16 text-blue-600" strokeWidth={1.5} />
          </div>
          
          {/* Accent underline */}
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 h-1 w-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full animate-expand"></div>
        </div>

        {/* Subtitle */}
        <p className="text-lg md:text-xl lg:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto animate-fade-in-up-delay font-normal">
          Get in touch with our team to learn more about{' '}
          <span className="text-blue-800 font-semibold relative inline-block">
            ArqonSec's
          </span>{' '}
          cybersecurity solutions and how we can help protect your organization.
        </p>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up-delay {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes expand {
          from {
            width: 0;
            opacity: 0;
          }
          to {
            width: 120px;
            opacity: 1;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(5deg);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-fade-in-up-delay {
          animation: fade-in-up-delay 0.8s ease-out 0.2s both;
        }

        .animate-expand {
          animation: expand 1s ease-out 0.3s both;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div> 
          <style>{`
            @keyframes float {
              0%, 100% { transform: translateY(0px) rotate(0deg); }
              50% { transform: translateY(-20px) rotate(5deg); }
            }
            
            @keyframes pulse-glow {
              0%, 100% { opacity: 0.5; }
              50% { opacity: 0.8; }
            }
            
            @keyframes draw {
              to { stroke-dashoffset: 0; }
            }
            
            .floating { animation: float 6s ease-in-out infinite; }
            .floating-delayed { animation: float 6s ease-in-out infinite 2s; }
            
            .corner-glow {
              position: absolute;
              width: 300px;
              height: 300px;
              border-radius: 50%;
              filter: blur(80px);
              animation: pulse-glow 3s ease-in-out infinite;
              pointer-events: none;
            }
            
            .input-focus:focus {
              border-color: #6366f1;
              box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
            }
            
            .gradient-border {
              position: relative;
              background: linear-gradient(white, white) padding-box,
                          linear-gradient(135deg, #6366f1, #8b5cf6, #ec4899) border-box;
              border: 2px solid transparent;
            }
            
            @keyframes shimmer {
              0% { background-position: -1000px 0; }
              100% { background-position: 1000px 0; }
            }
            
            .shimmer {
              background: linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.1), transparent);
              background-size: 1000px 100%;
              animation: shimmer 3s infinite;
            }
          `}</style>
    
       
    
          {/* Floating SVG decorations */}
          <svg className="absolute top-10 left-10 floating" width="60" height="60" viewBox="0 0 60 60">
            <circle cx="30" cy="30" r="25" fill="none" stroke="#6366f1" strokeWidth="2" opacity="0.3"/>
            <circle cx="30" cy="30" r="15" fill="none" stroke="#8b5cf6" strokeWidth="2" opacity="0.5"/>
          </svg>
          
          <svg className="absolute bottom-20 left-1/4 floating-delayed" width="80" height="80" viewBox="0 0 80 80">
            <path d="M40 10 L60 50 L20 50 Z" fill="none" stroke="#ec4899" strokeWidth="2" opacity="0.3"/>
          </svg>
    
          <svg className="absolute top-1/4 right-10 floating" width="70" height="70" viewBox="0 0 70 70">
            <rect x="15" y="15" width="40" height="40" fill="none" stroke="#8b5cf6" strokeWidth="2" opacity="0.3" transform="rotate(45 35 35)"/>
          </svg>
    
          {/* Main container */}
          <div className="max-w-4xl w-full relative z-10">
            <div className="gradient-border rounded-3xl overflow-hidden shadow-2xl">
              <div className="grid md:grid-cols-2 gap-0 bg-white">
                
                {/* Left side - Form */}
                <div className="p-8 md:p-12 relative overflow-hidden">
                  <div className="shimmer absolute inset-0 pointer-events-none" />
                  
                  <div className="relative z-10">
                    <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                      Get In Touch
                    </h2>
                    <p className="text-gray-600 mb-8">
                      Fill out the form and we'll be in touch as soon as possible.
                    </p>
    
                    {isSubmitted ? (
                      <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300 rounded-2xl p-8 text-center">
                        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                          </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-green-700 mb-2">Message Sent!</h3>
                        <p className="text-green-600">We'll get back to you soon.</p>
                      </div>
                    ) : (
                      <div className="space-y-6">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name</label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 rounded-xl border-2 border-gray-200 input-focus transition-all outline-none"
                            placeholder="John Doe"
                          />
                        </div>
    
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 rounded-xl border-2 border-gray-200 input-focus transition-all outline-none"
                            placeholder="your@domain.com"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                          <input
                            type="number"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 rounded-xl border-2 border-gray-200 input-focus transition-all outline-none"
                            placeholder="+966 XX XXX XXXX"
                          />
                        </div>
    
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                          <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 rounded-xl border-2 border-gray-200 input-focus transition-all outline-none"
                            placeholder="How can we help?"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Company</label>
                          <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 rounded-xl border-2 border-gray-200 input-focus transition-all outline-none"
                            placeholder="Your Company name"
                          />
                        </div>
    
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="4"
                            className="w-full px-4 py-2.5 rounded-xl border-2 border-gray-200 input-focus transition-all outline-none resize-none"
                            placeholder="Tell us more about your needs and how can we help you ?"
                          />
                        </div>

                        <div class="bg-white shadow-md rounded-2xl p-3 w-full ">

                          <div class="flex items-center space-x-3">
                            <input
                              id="agree"
                              type="checkbox"
                              class="w-5 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-400 cursor-pointer"
                            />
                            <label for="agree" class="text-sm text-gray-700 cursor-pointer select-none">
                            I agree to the processing of my personal data according to the 
                              <a href="#" class="text-blue-600 hover:underline"> Privacy Policy</a>
                            </label>
                          </div>
                        </div>
    
                        <button
                          onClick={handleSubmit}
                          className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-semibold py-4 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                        >
                          <Send size={20} />
                          Send Message
                        </button>
                      </div>
                    )}
                  </div>
                </div>
    
                {/* Right side - Contact Info */}
                <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-8 md:p-12 text-white relative overflow-hidden">
                  {/* Animated background pattern */}
                  <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 400 400">
                    <defs>
                      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <circle cx="20" cy="20" r="1" fill="white"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)"/>
                  </svg>
    
                  <div className="relative z-10">
                    <h3 className="text-3xl font-bold mb-4">Contact Information</h3>
                    <p className="text-purple-100 mb-12">
                      Reach out to us through any of these channels. We're here to help!
                    </p>
    
                    <div className="space-y-8">
                      <div className="flex items-start gap-4 group">
                        <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl group-hover:bg-white/20 transition-all duration-300">
                          <Mail className="text-white" size={24} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg mb-1">Email</h4>
                          <p className="text-purple-100">info@arqonsec.sa</p>
                          <p className="text-purple-100">sales@arqonsec.sa</p>
                          <p className="text-purple-100">support@arqonsec.sa</p>
                        </div>
                      </div>
    
                      <div className="flex items-start gap-4 group">
                        <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl group-hover:bg-white/20 transition-all duration-300">
                          <Phone className="text-white" size={24} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg mb-1">Phone</h4>
                          <p className="text-purple-100">+966 55 544 0640</p>
                          <p className="text-purple-100">Available 24/7 for urgent security matters</p>
                        </div>
                      </div>
    
                      <div className="flex items-start gap-4 group">
                        <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl group-hover:bg-white/20 transition-all duration-300">
                          <MapPin className="text-white" size={24} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg mb-1">Office</h4>
                          <p className="text-purple-100">King Fahd Road, Olaya District</p>
                          <p className="text-purple-100">Riyadh 12313, Saudi Arabia</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 group">
                        <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl group-hover:bg-white/20 transition-all duration-300">
                          <Timer className="text-white" size={24} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg mb-1">Business Hours</h4>
                          <p className="text-purple-100">Sunday - Thursday: 8:00 AM - 6:00 PM</p>
                          <p className="text-purple-100">Friday - Saturday: Emergency support only</p>
                        </div>
                      </div>


                    </div>


                    
    
                    {/* Animated decoration */}
                    <div className="mt-12">
                      <svg width="100%" height="200" viewBox="0 0 400 200">
                        <path
                          d="M0,100 Q100,50 200,100 T400,100"
                          fill="none"
                          stroke="white"
                          strokeWidth="2"
                          opacity="0.2"
                          strokeDasharray="1000"
                          strokeDashoffset="1000"
                          style={{ animation: 'draw 3s ease-out forwards' }}
                        />
                        <circle cx="50" cy="75" r="4" fill="white" opacity="0.4" className="floating"/>
                        <circle cx="200" cy="100" r="6" fill="white" opacity="0.6" className="floating-delayed"/>
                        <circle cx="350" cy="75" r="4" fill="white" opacity="0.4" className="floating"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}

export default ContactForm
