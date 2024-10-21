import React from 'react';

interface ProgressBarProps {
  steps: string[]; // Array con los nombres de los pasos
  currentStep: number; // El paso actual
}

const ProgressBar: React.FC<ProgressBarProps> = ({ steps, currentStep }) => {
  const visibleSteps = steps.map((step, index) => {
    const isVisible = Math.abs(index + 1 - currentStep) <= 1; // Solo mostrar el actual, anterior y siguiente
    return { step, index: index + 1, isVisible };
  });
  
  return (
    <div className="absolute w-full top-1 flex left-[-45px] items-center justify-around px-20 mt-6 mb-6">
      {/* Iteramos sobre los pasos filtrados */}
      {visibleSteps.map(({ step, index, isVisible }) => {
        // Solo mostrar si el paso es visible
        if (!isVisible) return null;

        // Verificar si el paso es activo
        const isActive = index === currentStep;

        return (
          <div key={index} className="flex items-center">
            {/* Círculo del paso */}
            <div
              className={`w-[30px] h-[30px] rounded-full flex justify-center items-center 
              ${isActive ? 'bg-[#496ceb]' : 'bg-[#696868]'}`}
            >
              {/* Número dentro del círculo */}
              <span className="text-white text-1xl font-normal">{index}</span>
            </div>

            {/* Texto del paso */}
            <div className="flex-1 mx-2 text-center">
              <span className={`text-1xl font-normal leading-[40.8px] tracking-tight ${isActive ? 'text-[#434242]' : 'text-[#696868]'}`}>
                {step}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProgressBar;
 
           