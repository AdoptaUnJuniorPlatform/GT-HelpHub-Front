import { useState } from "react";
import { SwitchProps } from "../types/types";


  
function Switch({ initialState = false }: SwitchProps) {
  const [enabled, setEnabled] = useState(initialState);
  
  const toggleSwitch = () => {
    setEnabled(!enabled);
  };
  
  return (
    <div
      className={`relative inline-flex items-center h-7 w-12 sm:h-7 sm:w-12 md:h-8 md:w-14 lg:h-10 lg:w-[68px] rounded-full cursor-pointer transition-colors duration-700 ${
        enabled ? "bg-violeta-100" : "bg-blue-gray-50"
      }`}
      onClick={toggleSwitch}
    >
      <span
        className={`inline-block w-5 h-5 sm:w-4 sm:h-4 md:w-6 md:h-6 lg:w-7 lg:h-7 transform bg-white rounded-full transition-transform duration-700 ${
          enabled ? "translate-x-6 sm:translate-x-8 md:translate-x-7 lg:translate-x-9" : "translate-x-1"
        }`}
      />
    </div>
  );
}
  
export default Switch