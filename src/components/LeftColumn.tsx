import React from 'react';
import OfficialLogo from './OfficialLogo';

interface LeftColumnProps {
  title: string;
  description: string | React.ReactNode;
  showExtraContent?: boolean; // Controla si se muestra el contenido extra
  extraContent?: React.ReactNode; // Contenido adicional específico
}

const LeftColumn: React.FC<LeftColumnProps> = ({ title, description, showExtraContent = false, extraContent }) => {
  return (
    <div className="w-1/3 h-full p-10 bg-gray-50 flex flex-col items-start justify-start px-20 space-y-8" >
      {/* Logo */}
      <div>
        <OfficialLogo />
      </div>

      {/* Título */}
      <div className="text-[#434242] text-[50px] font-light leading-[60px] max-w-[350px]">
        {title}
      </div>

      {/* Descripción */}
      <div className="text-[#434242] text-[20px] font-normal max-w-[350px]">
        {description}
      </div>

      {/* Contenido Extra Condicional */}
      {showExtraContent && extraContent && (
        <div className="extra-content mt-6"> 
          {extraContent}
        </div>
      )}
    </div>
  );
};

export default LeftColumn;
