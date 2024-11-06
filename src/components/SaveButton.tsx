import React from 'react';

interface SaveButtonProps {
  onClick: () => void;
}

const SaveButton: React.FC<SaveButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-[565px] h-10 bg-[#496ceb] rounded-[5px] flex justify-center items-center mt-4"
    >
      <span className="text-center text-[#fbfbff] text-sm font-medium font-['Roboto'] leading-tight tracking-tight">
        Guardar
      </span>
    </button>
  );
};

export default SaveButton;
