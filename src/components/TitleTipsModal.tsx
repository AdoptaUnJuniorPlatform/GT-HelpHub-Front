import React from 'react';
import Button from './Button';

interface TitleTipsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TitleTipsModal: React.FC<TitleTipsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="w-[600px] bg-white rounded-md shadow-md p-6 relative">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-[#434242] text-xl font-normal font-['Roboto']">
            Consejos para generar un texto llamativo
          </h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            &times;
          </button>
        </div>
        
        <ul className="text-[#696868] text-lg space-y-2 font-['Roboto']">
          <li>• Asegúrate de que tu mensaje sea fácil de entender y vaya directo al punto.</li>
          <li>• Incluye detalles interesantes de tu intercambio.</li>
          <li>• Resalta las ventajas y el valor que obtendrán al participar.</li>
        </ul>
        
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

export default TitleTipsModal;
