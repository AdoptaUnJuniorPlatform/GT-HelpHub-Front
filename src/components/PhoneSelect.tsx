import React, { useState } from 'react';
import Flag from 'react-world-flags';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { Country } from '../types/types';
import { countries } from '../Variables/varibles';

function PhoneSelect() {
  const [selectedCountry, setSelectedCountry] = useState<Country>(countries[0]);
  const [isOpen, setIsOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');

  function handleCountrySelect(country: Country) {
    setSelectedCountry(country);
    setIsOpen(false);
  }

  function handlePhoneChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    const numericValue = value.replace(/\D/g, '');
    setPhoneNumber(numericValue);
  }

  return (
    <div className="flex flex-col w-full font-normal not-italic font-poppins">
      <div className="flex flex-wrap items-center py-3 pd-4 pl-1 relative w-full text-slate-700 text-sm/[17.5px] rounded-lg p-3 h-auto gap-[10px] border-[1px] border-blue-gray-100 mt-1.5 focus-within:border-violeta-100 focus-within:ring-1 focus-within:ring-blue-500 transition-all">

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-1 border-r border-gray-300 pr-2 text-blue-gray-300"
        >
          <Flag code={selectedCountry.code} className="w-6 h-auto" />
          <span>{selectedCountry.dialCode}</span>
          <RiArrowDropDownLine
            className={`transition-transform duration-300 -m-1 ${
              isOpen ? 'rotate-180' : 'rotate-0'
            }`}
            size={18}
          />
        </button>

        <input
          type="tel"
          placeholder="Teléfono móvil"
          value={phoneNumber}
          onChange={handlePhoneChange}
          inputMode="numeric"
          pattern="\d*"
          maxLength={10}
          className="outline-none pl-2 flex-1 w-full sm:w-auto"
        />
    
        {isOpen && (
          <ul className="absolute top-full left-0 bg-white border border-blue-gray-100 rounded-lg shadow-lg mt-2 max-h-48 overflow-y-auto z-10 text-gray-800 w-full sm:w-auto max-w-md">
            {countries.map((country) => (
              <li
                key={country.code}
                onClick={() => handleCountrySelect(country)}
                className="flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-gray-100"
              >
                <Flag code={country.code} className="w-6 h-auto" />
                <span>{country.dialCode} {country.name}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>

  );
}

export default PhoneSelect;