import React from 'react';
import { X } from 'lucide-react';
import ContactFormModal from './ContactFormModal';

const GetInTouchModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity"
        onClick={onClose}
      />
      
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div 
          className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full  overflow-y-auto pointer-events-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors z-10"
            aria-label="Close modal"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
          
          <div className="p-8">
            <ContactFormModal />
          </div>
        </div>
      </div>
    </>
  );
};

export default GetInTouchModal;
