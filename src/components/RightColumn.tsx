import React from 'react';
import Button from './Button';

interface RightColumnProps {
  stepTitle: string;
  stepDescription: string;
  onBackClick: () => void;
  onNextClick: () => void;
}

const RightColumn: React.FC<RightColumnProps> = ({ onBackClick, onNextClick, stepTitle, stepDescription }) => {
  return (
    <>
    <div className="w-2/3 p-10 bg-gray-100 flex items-center justify-center relative bg-[#FBFBFF] p-10">
      {/* Barra de progreso*/}
      <div className="absolute top-0 left-0 w-full h-8 bg-gray-200">
        {/* Aquí colocas el contenido de la barra de progreso */}
      </div>

    
      {/* Título del Paso */}
      <h1 className="absolute top-[200px] left-[116px] text-[#7166D2] text-4xl font-light font-['Roboto']">
        {stepTitle}
      </h1>

      
      {/* Descripción del Paso */}
      <p className="absolute top-[250px] left-[116px] text-[#434242] text-2xl font-normal font-['Roboto']">
        {stepDescription}
      </p>


      {/* Botones comunes */}
      <div className="absolute bottom-20 w-full flex justify-between px-16">
        <Button texto="Atrás" color="text-[#b7b7b7]" onClick={onBackClick} className="ml-[115px]" />  
        <Button texto="Siguiente" color="text-[#496ceb]" onClick={onNextClick} className="mr-[75px]" />
      </div>
    </div>
    </>
  );
};

export default RightColumn;
