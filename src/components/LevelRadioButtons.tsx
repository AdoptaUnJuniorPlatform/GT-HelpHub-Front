import React from 'react';

interface LevelRadioButtonsProps {
  className?: string;
  value: string;
  onChange: (value: string) => void;
}

const LevelRadioButtons: React.FC<LevelRadioButtonsProps> = ({ className, value, onChange }) => {
  const handleLevelChange = (selectedValue: string) => {
    onChange(selectedValue);
  };

  return (
    <div className={`h-[45px] justify-start items-center gap-3 inline-flex ${className}`}>
      {/* Radio Button Básico */}
      <div
        className={`px-5 py-[13px] rounded border ${value === 'Básico' ? 'border-[#496ceb]' : 'border-[#b7b7b7]'} justify-start items-center gap-2 flex cursor-pointer`}
        onClick={() => handleLevelChange('Básico')}
      >
        <div className="justify-start items-start gap-2 flex">
          <div className="w-[18px] h-[18px] bg-white rounded-[18px] border border-[#cfd8dc] flex items-center justify-center">
            {value === 'Básico' && <div className="w-3 h-3 bg-[#496ceb] rounded-full" />}
          </div>
          <div className={`text-base font-normal font-['Roboto'] tracking-tight ${value === 'Básico' ? 'text-[#496ceb]' : 'text-[#696868]'}`}>
            Básico
          </div>
        </div>
      </div>

      {/* Radio Button Medio */}
      <div
        className={`px-5 py-[13px] rounded border ${value === 'Medio' ? 'border-[#496ceb]' : 'border-[#b7b7b7]'} justify-start items-center gap-2 flex cursor-pointer`}
        onClick={() => handleLevelChange('Medio')}
      >
        <div className="justify-start items-start gap-2 flex">
          <div className="w-[18px] h-[18px] bg-white rounded-[18px] border border-[#cfd8dc] flex items-center justify-center">
            {value === 'Medio' && <div className="w-3 h-3 bg-[#496ceb] rounded-full" />}
          </div>
          <div className={`text-base font-normal font-['Roboto'] tracking-tight ${value === 'Medio' ? 'text-[#496ceb]' : 'text-[#696868]'}`}>
            Medio
          </div>
        </div>
      </div>

      {/* Radio Button Avanzado */}
      <div
        className={`px-5 py-[13px] rounded border ${value === 'Avanzado' ? 'border-[#496ceb]' : 'border-[#b7b7b7]'} justify-start items-center gap-2 flex cursor-pointer`}
        onClick={() => handleLevelChange('Avanzado')}
      >
        <div className="justify-start items-start gap-2 flex">
          <div className="w-[18px] h-[18px] relative flex items-center justify-center">
            <div className="w-[18px] h-[18px] bg-white rounded-[18px] border border-[#cfd8dc] absolute"></div>
            {value === 'Avanzado' && (
              <div className="w-3 h-3 bg-[#496ceb] rounded-full absolute inset-0 m-auto"></div>
            )}
          </div>
          <div className={`text-base font-normal font-['Roboto'] tracking-tight ${value === 'Avanzado' ? 'text-[#496ceb]' : 'text-[#696868]'}`}>
            Avanzado
          </div>
        </div>
      </div>
    </div>
  );
};

export default LevelRadioButtons;
