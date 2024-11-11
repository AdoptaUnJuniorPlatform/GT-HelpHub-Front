import { useState } from "react";
import { Input } from "../types/types";
import PasswordButton from "./ShowPassword";

function UserInput({ type, title, placeholder, name, value, style, className='', positionStyles='', onChange, maxLength}: Input) {
  const [showPassword, setShowPassword] = useState(false);


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const inputType = type === "password" && showPassword ? "text" : type;

  return (
    <section className="font-normal not-italic font-poppins w-full pt-1">
      <span className="text-black-80 font-medium text-[14px] leading-5">{title}</span>
      <label htmlFor={name} className="relative w-full">
        <input
          id={name}
          required
          type={inputType}
          maxLength={maxLength}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          style={style}
          className={`flex items-center text-slate-700 text-sm/[17.5px] rounded-lg p-3 gap-[10px] border-[1px] caret-violet-700  outline-1 w-full pr-10 lg:mb-2 bg-neutral-gray ${className}`}
        />

        {type === "password" && (
          <PasswordButton 
            showPassword={showPassword} 
            onClick={togglePasswordVisibility} 
            className={`absolute transform -translate-y-1/2 text-xl text-slate-600 ${positionStyles}`}/>
        )}
      </label>
    </section>
  );
}

export default UserInput;