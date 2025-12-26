
import React, { useEffect, useState } from 'react';
import { Scholarship } from '../data/scholarshipsData';
import { CloseIcon } from './icons/CloseIcon';
import { InfoIcon } from './icons/InfoIcon';
import { CheckListIcon } from './icons/CheckListIcon';

interface ScholarshipDetailModalProps {
  scholarship: Scholarship;
  onClose: () => void;
}

const ScholarshipDetailModal: React.FC<ScholarshipDetailModalProps> = ({ scholarship, onClose }) => {
    const [isClosing, setIsClosing] = useState(false);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            onClose();
        }, 300); // Match animation duration
    };

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                handleClose();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

  return (
    <div 
        className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${isClosing ? 'opacity-0' : 'opacity-100'}`}
        onClick={handleClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
    >
      <div 
        className={`bg-[#1A0E3B]/80 backdrop-blur-xl border border-purple-500/30 rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl shadow-purple-900/20 text-white transition-transform duration-300 flex flex-col ${isClosing ? 'scale-95' : 'scale-100'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 sm:p-8 space-y-6 flex-grow">
            <div className="flex justify-between items-start">
                <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white" id="modal-title">{scholarship.title}</h2>
                    <p className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mt-1">
                        ${scholarship.amount.toLocaleString()}
                    </p>
                </div>
                <button onClick={handleClose} className="p-1 rounded-full text-gray-400 hover:bg-white/10 hover:text-white transition-colors" aria-label="Close modal">
                    <CloseIcon className="w-6 h-6"/>
                </button>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 flex-shrink-0 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center">
                        <InfoIcon className="w-5 h-5 text-white"/>
                    </div>
                    <h3 className="font-bold text-white">Full Eligibility Criteria</h3>
                </div>
                <div className="pl-11">
                    <ul className="space-y-3">
                        {scholarship.eligibility.map((item, index) => (
                            <li key={index} className="flex items-start gap-3 text-sm text-purple-200/80">
                                <CheckListIcon className="flex-shrink-0 w-5 h-5 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipDetailModal;
