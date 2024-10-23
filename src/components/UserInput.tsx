import { useState } from "react";
import { Input } from "../types/types";
import PasswordButton from "./ShowPassword";

function UserInput({ type, title, placeholder, style, className='', positionStyles=''}: Input) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const inputType = type === "password" && showPassword ? "text" : type;

  return (
    <section className="font-normal not-italic font-poppins w-full pt-1">
      <span className="text-slate-900">{title}</span>
      <label htmlFor={title} className="relative w-full">
        <input
          id={title}
          required
          type={inputType}
          name={title}
          placeholder={placeholder}
          style={style}
          className={`flex items-center text-slate-700 text-sm/[17.5px] rounded-lg p-3 gap-[10px] border-[1px] caret-violet-700 outline-violeta-100 outline-1 w-full bg-[#E3E0F6] pr-10 lg:mb-2 ${className}`}
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