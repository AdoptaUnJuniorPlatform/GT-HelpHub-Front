import React from 'react';

interface SuccessModalProps {
  message: string;
  onClose: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="h-[120px] w-[536px] bg-[#43a047] rounded-md shadow border flex p-5 items-start">
        
        {/* Check Icon */}
        <div className="w-6 h-6 mr-4 bg-[#fbfbff] rounded-full flex items-center justify-center">
          <svg className="w-4 h-4 text-[#43a047]" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 11.586 7.707 10.293a1 1 0 10-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        </div>
        
        {/* Contemido */}
        <div className="flex-grow flex flex-col justify-start items-start gap-[5px]">
          
          {/* Title and Close button */}
          <div className="flex justify-between w-full items-center">
            <div className="text-[#fbfbff] text-2xl font-normal font-['Roboto']">{message}</div>
            <button className="text-[#fbfbff] text-xl font-bold" onClick={onClose}>
              &times;
            </button>
          </div>

          {/* Subtitulo */}
          <div className="text-[#fbfbff] text-xl font-medium font-['Roboto'] tracking-tight">
            Tu cuenta ha sido verificada con éxito
          </div>

          {/*Mensaje adicional */}
          <div className="text-[#fbfbff] text-base font-normal font-['Roboto'] tracking-tight">
            Ingresa tus datos para navegar por la web
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
