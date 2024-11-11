import React from 'react';
import Button from './Button';
import ProgressBar from './ProgressBar';

interface RightColumnProps {
  stepTitle: string;
  stepDescription: string | React.ReactNode;
  onBackClick: () => void;
  onNextClick: () => void;
  steps: string[];
  currentStep: number;
  children: React.ReactNode;
  isSubmitted?: boolean;
}

const RightColumn: React.FC<RightColumnProps> = ({ onBackClick, onNextClick, stepTitle, stepDescription, steps, currentStep, children, isSubmitted = false }) => {
  
  return (
    <>
      <div className="w-2/3 p-10 bg-beutral-50 flex items-center justify-center relative p-10">
        {/* Barra de progreso */}
        <ProgressBar currentStep={currentStep} steps={steps}/>

        {/* Título del Paso */}
        <h1 className="absolute top-[110px] left-[116px] text-[#7166D2] text-4xl font-light font-['Roboto']">
          {stepTitle}
        </h1>

        {/* Descripción del Paso */}
        <div className="absolute top-[160px] left-[116px] text-[#434242] text-2xl font-normal font-['Roboto']">
          {stepDescription}
        </div>

        {/* Aquí renderizamos el contenido dinámico de cada paso */}
        <div className="absolute w-full top-[120px] left-[116px] mb-10 px-10">{children}</div>

        {/* Botones comunes */}
        <div
          className={`absolute ${
            currentStep === 4 
              ? (isSubmitted ? 'top-[1730px] bottom-8' : 'top-[1420px] bottom-8') // Step 4 con condicional de isSubmitted
              : 'top-[575px]' // Otros pasos
          } left-[-55px] bottom-20 w-full flex justify-between px-16`}
        >
          <Button 
            texto="Atrás" 
            color="text-[#b7b7b7]" 
            onClick={onBackClick} 
            className="ml-[115px]" 
          />
          {(currentStep !== 4 || isSubmitted) && (
            <Button 
              texto="Siguiente" 
              color="text-[#496ceb]" 
              onClick={onNextClick} 
              className="mr-[75px]" 
            />
          )}
        </div>
      </div>
    </>
  );
};

export default RightColumn;
