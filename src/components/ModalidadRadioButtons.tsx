import React, { useState } from 'react';

const ModalidadRadioButtons: React.FC = () => {
  const [selectedMode, setSelectedMode] = useState<string>('');

  return (
    <div className="h-[45px] justify-start items-center gap-3 inline-flex mt-2">
      {/* Radio Button Online */}
      <div
        className={`px-[11px] py-[13px] rounded border ${selectedMode === 'Online' ? 'border-[#496ceb]' : 'border-[#b7b7b7]'} justify-start items-center gap-2 flex cursor-pointer`}
        onClick={() => setSelectedMode('Online')}
      >
        <div className="justify-start items-start gap-2 flex">
          <div className="w-[18px] h-[18px] bg-white rounded-full border border-[#cfd8dc] flex items-center justify-center">
            {selectedMode === 'Online' && <div className="w-3 h-3 bg-[#496ceb] rounded-full" />}
          </div>
          <div className="text-[#696868] text-base font-normal font-['Roboto'] tracking-tight">Online</div>
        </div>
      </div>

      {/* Radio Button Presencial */}
      <div
        className={`px-5 py-[13px] rounded border ${selectedMode === 'Presencial' ? 'border-[#496ceb]' : 'border-[#b7b7b7]'} justify-start items-center gap-2 flex cursor-pointer`}
        onClick={() => setSelectedMode('Presencial')}
      >
        <div className="justify-start items-start gap-2 flex">
          <div className="w-[18px] h-[18px] bg-white rounded-full border border-[#cfd8dc] flex items-center justify-center">
            {selectedMode === 'Presencial' && <div className="w-3 h-3 bg-[#496ceb] rounded-full" />}
          </div>
          <div className="text-[#696868] text-base font-normal font-['Roboto'] tracking-tight">Presencial</div>
        </div>
      </div>
    </div>
  );
};

export default ModalidadRadioButtons;
