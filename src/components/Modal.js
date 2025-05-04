// components/Modal.js
import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
  
    const handleOverlayClick = (e) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center"
        onClick={handleOverlayClick}
        >
            
            <div className="md:p-6 p-2 rounded-4xl w-9/12 my-6 md:mt-0 bg-[#CCA1A0]/30 backdrop-blur-2xl shadow-lg border-1 border-[#CCA1A0]/30">
                <button
                    onClick={onClose}
                    className="fixed md:top-8 top-4 md:right-8 right-4 md:p-2 p-1 rounded-full buttonstyle"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                        ></path>
                    </svg>
                </button>

                {children}
            </div>
        </div>
    );
};

export default Modal;
