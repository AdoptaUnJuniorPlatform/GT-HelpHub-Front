import React from 'react';

interface TextInputWithCounterProps {
  className?: string; 
  value: string;
  onChange: (value: string) => void;
}

const TextInputWithCounter: React.FC<TextInputWithCounterProps> = ({ className, value, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className={`w-[572px] space-y-2 ${className}`}> 
        
      {/* Contenedor del input */}
      <div className="relative">
        <input
          type="text"
          value={value}
          onChange={handleChange}
          maxLength={255}
          placeholder="Ej: Pintar óleo"
          className="w-full h-[55px] bg-[#fbfbff] rounded-[3px] border border-[#b7b7b7] px-4 text-[#696868] text-[15px] font-normal font-['Roboto'] leading-normal tracking-wide focus:outline-none"
        />

        {/* Contador de caracteres */}
        <div className="absolute bottom-2 right-4 text-[#b7b7b7] text-base font-normal font-['Roboto'] leading-tight tracking-tight">
          {value.length}/255
        </div>
      </div>
    </div>
  );
};

export default TextInputWithCounter;
