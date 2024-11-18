import { CharacterCountTextAreaProps } from '../types/types';

function CharacterCountTextArea({id, name, value, onChange, className="", placeholder, showLabel = false}: CharacterCountTextAreaProps) {
  const maxChars: number = 255;

  return (
    <div className="relative">
      {showLabel && (
        <label 
          style={{ color: '#696868', textShadow: '0px 6px 19px rgba(255, 255, 255, 1)' }}
          className="absolute -top-6 left-2 bg-neutral-gray px-1 text-black-80 text-base font-normal leading-6 tracking-wide m-0 py-0 translate-y-2/4 bg-transparent z-10">
          Sobre mí
        </label>
      )}
      <textarea
        required
        id={id}
        value={value}
        name={name}
        onChange={onChange}
        maxLength={maxChars}
        placeholder={placeholder}
        className={`w-full pl-4 border-[0.7px] focus:outline-none focus-within:ring-5 focus:border-black-50 focus:border-2 border-[#B8B8B8]  rounded-md bg-white placeholder:text-black-80  ${className}`}
        rows={3}
      ></textarea>
      <div className="absolute bottom-2 right-2 text-black-50 text-sm">
        {value.length}/{maxChars}
      </div>
    </div>
  );
}

export default CharacterCountTextArea;

