import { useState, ChangeEvent } from 'react';
import { CharacterCountTextAreaProps } from '../types/types';

function CharacterCountTextArea({className="", placeholder, showLabel = false}: CharacterCountTextAreaProps) {
  const [text, setText] = useState<string>('');
  const maxChars: number = 255;

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <div className="relative">
      {showLabel && (
        <label className="absolute -top-6 left-2 bg-neutral-gray px-1 text-black-80 text-base font-normal leading-6 tracking-wide m-0 py-0 translate-y-2/4 bg-transparent">
          Sobre mí
        </label>
      )}
      <textarea
        value={text}
        onChange={handleChange}
        maxLength={maxChars}
        placeholder={placeholder}
        className={`w-full pl-4 border-[0.7px] focus:outline-none focus-within:ring-5 focus:border-black-50 focus:border-2 border-[#B8B8B8]  rounded-md bg-white placeholder:text-black-80  ${className}`}
        rows={3}
      ></textarea>
      <div className="absolute bottom-2 right-2 text-black-50 text-sm">
        {text.length}/{maxChars}
      </div>
    </div>
  );
}

export default CharacterCountTextArea;

