import React from 'react';

interface ModalityRadioButtonsProps {
  className?: string; 
  value: string;
  onChange: (value: string) => void;
}

const ModalityRadioButtons: React.FC<ModalityRadioButtonsProps> = ({ className, value, onChange }) => {
  const handleModalityChange = (selectedValue: string) => {
    const mappedValue = selectedValue === 'Online' ? 'online' : 'presential';
    onChange(mappedValue);
  };

  return (
    <div className={`h-[45px] justify-start items-center gap-3 inline-flex mt-2 ${className}`}>
      {/* Radio Button Online */}
      <div
        className={`px-[11px] py-[13px] rounded border ${value === 'online' ? 'border-[#496ceb]' : 'border-[#b7b7b7]'} justify-start items-center gap-2 flex cursor-pointer`}
        onClick={() => handleModalityChange('Online')}
      >
        <div className="justify-start items-start gap-2 flex">
          <div className="w-[18px] h-[18px] bg-white rounded-full border border-[#cfd8dc] flex items-center justify-center">
            {value === 'online' && <div className="w-3 h-3 bg-[#496ceb] rounded-full" />}
          </div>
          <div className={`text-base font-normal font-['Roboto'] tracking-tight ${value === 'online' ? 'text-[#496ceb]' : 'text-[#696868]'}`}>
            Online
          </div>
        </div>
      </div>

      {/* Radio Button Presencial */}
      <div
        className={`px-5 py-[13px] rounded border ${value === 'presential' ? 'border-[#496ceb]' : 'border-[#b7b7b7]'} justify-start items-center gap-2 flex cursor-pointer`}
        onClick={() => handleModalityChange('Presencial')}
      >
        <div className="justify-start items-start gap-2 flex">
          <div className="w-[18px] h-[18px] bg-white rounded-full border border-[#cfd8dc] flex items-center justify-center">
            {value === 'presential' && <div className="w-3 h-3 bg-[#496ceb] rounded-full" />}
          </div>
          <div className={`text-base font-normal font-['Roboto'] tracking-tight ${value === 'presential' ? 'text-[#496ceb]' : 'text-[#696868]'}`}>
            Presencial
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalityRadioButtons;
