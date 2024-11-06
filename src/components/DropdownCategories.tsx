import React, { useState } from 'react';

interface DropdownCategoriesProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

const DropdownCategories: React.FC<DropdownCategoriesProps> = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleSelectOption = (option: string) => {
    onChange(option); 
    setIsOpen(false);
  };

  return (
    <div className="relative w-[567px]">
      {/* Dropdown container */}
      <div
        onClick={toggleDropdown}
        className="h-[59px] bg-[#fbfbff] rounded-md border border-[#aeaeae]/5 flex items-center justify-between px-4 cursor-pointer"
      >
        <span className={`text-base ${value ? 'text-[#434242]' : 'text-[#aeaeae]'}`}>
          {value || 'Categorías'}
        </span>
        <span className="text-gray-500">▼</span>
      </div>

      {/* Dropdown options */}
      {isOpen && (
        <div className="absolute top-[65px] left-0 w-full bg-white rounded-md shadow-lg border border-gray-200 z-10">
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => handleSelectOption(option)}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-[#434242] text-base font-normal"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownCategories;
