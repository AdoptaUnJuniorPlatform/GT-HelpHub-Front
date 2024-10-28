import React, { useState } from 'react';

const NivelRadioButtons: React.FC = () => {
  const [selectedLevel, setSelectedLevel] = useState<string>(''); 

  return (
    <div className="h-[45px] justify-start items-center gap-3 inline-flex">
      {/* Radio Button Básico */}
      <div
        className={`px-5 py-[13px] rounded border ${selectedLevel === 'Básico' ? 'border-[#496ceb]' : 'border-[#b7b7b7]'} justify-start items-center gap-2 flex cursor-pointer`}
        onClick={() => setSelectedLevel('Básico')}
      >
        <div className="justify-start items-start gap-2 flex">
          <div className="w-[18px] h-[18px] bg-white rounded-[18px] border border-[#cfd8dc] flex items-center justify-center">
            {selectedLevel === 'Básico' && <div className="w-3 h-3 bg-[#496ceb] rounded-full" />}
          </div>
          <div className={`text-base font-normal font-['Roboto'] tracking-tight ${selectedLevel === 'Básico' ? 'text-[#496ceb]' : 'text-[#696868]'}`}>
            Básico
          </div>
        </div>
      </div>

      {/* Radio Button Medio */}
      <div
        className={`px-5 py-[13px] rounded border ${selectedLevel === 'Medio' ? 'border-[#496ceb]' : 'border-[#b7b7b7]'} justify-start items-center gap-2 flex cursor-pointer`}
        onClick={() => setSelectedLevel('Medio')}
      >
        <div className="justify-start items-start gap-2 flex">
          <div className="w-[18px] h-[18px] bg-white rounded-[18px] border border-[#cfd8dc] flex items-center justify-center">
            {selectedLevel === 'Medio' && <div className="w-3 h-3 bg-[#496ceb] rounded-full" />}
          </div>
          <div className={`text-base font-normal font-['Roboto'] tracking-tight ${selectedLevel === 'Medio' ? 'text-[#496ceb]' : 'text-[#696868]'}`}>
            Medio
          </div>
        </div>
      </div>

      {/* Radio Button Avanzado */}
      <div
        className={`px-5 py-[13px] rounded border ${selectedLevel === 'Avanzado' ? 'border-[#496ceb]' : 'border-[#b7b7b7]'} justify-start items-center gap-2 flex cursor-pointer`}
        onClick={() => setSelectedLevel('Avanzado')}
      >
        <div className="justify-start items-start gap-2 flex">
          <div className="w-[18px] h-[18px] relative flex items-center justify-center">
            <div className="w-[18px] h-[18px] bg-white rounded-[18px] border border-[#cfd8dc] absolute"></div>
            {selectedLevel === 'Avanzado' && (
              <div className="w-3 h-3 bg-[#496ceb] rounded-full absolute inset-0 m-auto"></div>
            )}
          </div>
          <div className={`text-base font-normal font-['Roboto'] tracking-tight ${selectedLevel === 'Avanzado' ? 'text-[#496ceb]' : 'text-[#696868]'}`}>
            Avanzado
          </div>
        </div>
      </div>
    </div>

  );
};

export default NivelRadioButtons;
