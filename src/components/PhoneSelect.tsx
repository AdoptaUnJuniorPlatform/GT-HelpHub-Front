import React, { useState } from 'react';
import Flag from 'react-world-flags';
import { Input } from '../types/types';

function PhoneSelect( {type, placeholder}: Input ) {
  const [phoneNumber, setPhoneNumber] = useState('');

  function handlePhoneChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    const numericValue = value.replace(/\D/g, '');
    setPhoneNumber(numericValue);
  }

  return (
    <div className="flex flex-col w-full font-normal not-italic font-poppins">
      <div className="flex flex-wrap items-center py-3 pd-4 pl-1 relative w-full text-slate-700 text-sm/[17.5px] rounded-lg p-3 h-auto gap-[10px] border-[1px] border-blue-gray-100 mt-1.5 focus-within:border-violeta-100 focus-within:ring-1 focus-within:ring-blue-500 transition-all">
        
        <div className="flex items-center gap-1 border-r border-gray-300 pr-2 text-blue-gray-300">
          <Flag code="ES" className="w-6 h-auto" />
          <span>+34</span>
        </div>
        <label htmlFor='phoneNumber' className='sr-only'>Número de teléfono móvil</label>
        <input
          id='phoneNumber'
          required
          type={type}
          placeholder={placeholder}
          value={phoneNumber}
          onChange={handlePhoneChange}
          inputMode="numeric"
          pattern="\d*"
          maxLength={9}
          className="outline-none pl-2 flex-1 w-full sm:w-auto"
        />
      </div>
    </div>
  );
}

export default PhoneSelect;