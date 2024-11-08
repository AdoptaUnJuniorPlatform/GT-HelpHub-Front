import React from 'react';

interface ModalidadRadioButtonsProps {
  className?: string; 
  value: string;
  onChange: (value: string) => void;
}

const ModalidadRadioButtons: React.FC<ModalidadRadioButtonsProps> = ({ className, value, onChange }) => {

  return (
    <div className={`h-[45px] justify-start items-center gap-3 inline-flex mt-2 ${className}`}>
      {/* Radio Button Online */}
      <div
        className={`px-[11px] py-[13px] rounded border ${value === 'Online' ? 'border-[#496ceb]' : 'border-[#b7b7b7]'} justify-start items-center gap-2 flex cursor-pointer`}
        onClick={() => onChange('Online')}
      >
        <div className="justify-start items-start gap-2 flex">
          <div className="w-[18px] h-[18px] bg-white rounded-full border border-[#cfd8dc] flex items-center justify-center">
            {value === 'Online' && <div className="w-3 h-3 bg-[#496ceb] rounded-full" />}
          </div>
          <div className={`text-base font-normal font-['Roboto'] tracking-tight ${value === 'Online' ? 'text-[#496ceb]' : 'text-[#696868]'}`}>
            Online
          </div>
        </div>
      </div>

      {/* Radio Button Presencial */}
      <div
        className={`px-5 py-[13px] rounded border ${value === 'Presencial' ? 'border-[#496ceb]' : 'border-[#b7b7b7]'} justify-start items-center gap-2 flex cursor-pointer`}
        onClick={() => onChange('Presencial')}
      >
        <div className="justify-start items-start gap-2 flex">
          <div className="w-[18px] h-[18px] bg-white rounded-full border border-[#cfd8dc] flex items-center justify-center">
            {value === 'Presencial' && <div className="w-3 h-3 bg-[#496ceb] rounded-full" />}
          </div>
          <div className={`text-base font-normal font-['Roboto'] tracking-tight ${value === 'Presencial' ? 'text-[#496ceb]' : 'text-[#696868]'}`}>
            Presencial
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalidadRadioButtons;
