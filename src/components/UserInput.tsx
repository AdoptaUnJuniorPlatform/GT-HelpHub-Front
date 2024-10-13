import { useState } from "react";
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";
import { Input } from "../types/types";

function UserInput({ type, title, placeholder, style }: Input) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const inputType = type === "password" && showPassword ? "text" : type;

  return (
    <form name={title} className="font-normal not-italic font-poppins w-full pt-1">
      <span className="text-slate-900">{title}</span>
      <label className="relative w-full">
        <input
          required
          type={inputType}
          name={title}
          placeholder={placeholder}
          style={style}
          className="flex items-center text-slate-700 text-sm/[17.5px] rounded-lg p-3 h-10 gap-[10px] border-[1px] border-blue-gray-100 mt-1.5 caret-violet-700 outline-violeta-100 outline-1 w-full bg-[#E3E0F6] pr-10 lg:mb-2"
        />

        {type === "password" && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-4 top-[70%] transform -translate-y-1/2 text-xl text-slate-600"
          >
            {showPassword ? <RiEyeOffLine /> : <RiEyeLine />}
          </button>
        )}
      </label>
    </form>
  );
}

export default UserInput;