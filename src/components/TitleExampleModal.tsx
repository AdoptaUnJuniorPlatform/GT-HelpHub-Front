import React from 'react';
import Button from './Button'

interface TitleExampleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TitleExampleModal: React.FC<TitleExampleModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="w-[619px] bg-[#fbfbff] rounded-md shadow p-5">
        <div className="flex justify-between items-center mb-5">
          <div className="text-2xl font-normal text-[#434242]">Ejemplos para crear tu título</div>
          <button onClick={onClose} className="text-xl text-[#434242]">
            &times;
          </button>
        </div>
        <div className="text-lg text-[#696868] leading-relaxed space-y-2">
          <p>• Sesión grupal de meditación al aire libre.</p>
          <p>• Revisión de currículum vitae.</p>
          <p>• Clases de cocina italiana tradicional.</p>
          <p>• Entrenamiento personal en gimnasio.</p>
        </div>
        <div className="mt-5 mr-15 w-full flex justify-end">
          <Button 
            texto='Entendido'
            onClick={onClose} 
            color="text-white"
            className="h-8 px-3.5 py-2 bg-[#1945e3] rounded-lg shadow uppercase">
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TitleExampleModal;
