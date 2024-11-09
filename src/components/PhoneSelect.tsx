import Flag from 'react-world-flags';
import { Input } from '../types/types';

function PhoneSelect( {type, placeholder, value, onChange, name, className}: Input ) {
  return (
    <div className="flex flex-col w-full font-normal not-italic font-poppins">
      <div className={`flex flex-wrap items-center py-3 pd-4 pl-1 relative w-full bg-neutral-gray text-slate-700 text-sm/[17.5px] focus-within:ring-1 rounded-lg p-3 h-auto gap-[10px] border-[1px] transition-all ${className}}`}>
        
        <div className="flex items-center gap-1 border-r border-gray-300 pr-2 text-blue-gray-300">
          <Flag code="ES" className="w-6 h-auto" />
          <span>+34</span>
        </div>
        <label htmlFor='phone' className='sr-only'>Número de teléfono móvil</label>
        <input
          id='phone'
          required
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          inputMode="numeric"
          pattern="\d*"
          maxLength={9}
          className="outline-none pl-2 flex-1 w-full sm:w-auto bg-neutral-gray"
        />
      </div>
    </div>
  );
}

export default PhoneSelect;