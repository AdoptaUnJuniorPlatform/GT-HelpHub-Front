import React from 'react';

interface TimeRangeOptionProps {
  text: string;
  selected: boolean;
  onClick: () => void;
}

const TimeRangeOption: React.FC<TimeRangeOptionProps> = ({ text, selected, onClick }) => {
  return (
    <div
      className={`px-5 py-[13px] rounded border ${selected ? 'border-[#496ceb]' : 'border-[#b7b7b7]'} justify-start items-center gap-2 flex cursor-pointer`}
      onClick={onClick}
    >
      <div className="justify-start items-start gap-2 flex">
        <div className="w-[18px] h-[18px] relative">
          <div className={`w-[18px] h-[18px] left-0 top-0 absolute bg-white rounded-[18px] border ${selected ? 'border-[#496ceb]' : 'border-[#b7b7b7]'}`}></div>
          {selected && <div className="w-3 h-3 left-[3px] top-[3px] absolute bg-[#496ceb] rounded-full"></div>}
        </div>
        <div className={`text-xs font-medium leading-[18px] ${selected ? 'text-[#496ceb]' : 'text-[#696868]'} font-['Poppins']`}>
          {text === 'Flexible schedule' ? 'Flexibilidad horaria': text}
        </div>
      </div>
    </div>
  );
};

export default TimeRangeOption;
