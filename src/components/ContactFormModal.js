import React, { useState } from 'react';
import { Send } from 'lucide-react';

const ContactFormModal = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', company: '', message: '' });
      }, 3000);
    }
  };

  return (
    <div>
      

      <div className='flex gap-4'>
        <h2 className="text-1xl md:text-2xl font-bold text-[#0f0f0f] mb-2">
          Get in Touch
        </h2>
        <div className="w-px h-8 bg-gray-400" />
        <img src='/logos/arqonsec-black-02.png' alt='' className='h-6 my-auto'/>
      </div>
      
      <p className="text-gray-600 mb-2 ">
        Let us know how we can help protect your organization
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-[#0f0f0f] mb-1">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#5dd62c] focus:outline-none transition-colors"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-[#0f0f0f] mb-1">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:border-[#5dd62c] focus:outline-none transition-colors"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-semibold text-[#0f0f0f] mb-1">
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:border-[#5dd62c] focus:outline-none transition-colors"
            placeholder="Your company"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-[#0f0f0f] mb-1">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:border-[#5dd62c] focus:outline-none transition-colors resize-none"
            placeholder="Tell us about your needs..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitted}
          className="w-full py-3 px-6 bg-[#5dd62c] hover:bg-[#337418] text-white font-semibold rounded-lg transition-all hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
        >
          {isSubmitted ? (
            <span>Message Sent!</span>
          ) : (
            <>
              <span>Send Message</span>
              <Send className="w-5 h-5" />
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactFormModal;
