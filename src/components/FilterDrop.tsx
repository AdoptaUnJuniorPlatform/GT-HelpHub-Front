import { useState } from 'react';
import { MdArrowDropDown } from 'react-icons/md';
import { FilterDropProps } from '../types/types';

function FilterDrop({ options, placeholder, className = "", onSelect, selectedOption }: FilterDropProps) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  function handleSelect(option: string) {
    setIsOpen(false);
    onSelect(option);
  }

  return (
    <div className={`relative w-[11.2rem] h-[3.7rem] text-base not-italic font-normal leading-6 tracking-wide ${className}`}>
      <div
        className="flex justify-between items-center h-[3.7rem] px-4 py-2 border-[1px] border-[#B8B8B8] rounded-md bg-[#FBFBFF] cursor-pointer"
        onClick={toggleDropdown}
      >
        <span className="text-gray-600">{selectedOption || placeholder}</span>
        <MdArrowDropDown
          size={24}
          className={`text-gray-600 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </div>

      {isOpen && (
        <ul className="absolute left-0 right-0 mt-1 bg-white border border-gray-300 rounded-md shadow-md max-h-48 overflow-y-auto z-10">
          {options.map((option, index) => (
            <li
              key={index}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700"
              onClick={() => handleSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FilterDrop;


