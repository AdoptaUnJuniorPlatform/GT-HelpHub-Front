import { useState } from "react";
import { SwitchProps } from "../types/types";


  
function Switch({ initialState = false }: SwitchProps) {
  const [enabled, setEnabled] = useState(initialState);
  
  const toggleSwitch = () => {
    setEnabled(!enabled);
  };
  
  return (
    <div
      className={`relative inline-flex items-center h-9 w-16 sm:h-8 sm:w-14 md:h-10 md:w-18 lg:h-12 lg:w-20 rounded-full cursor-pointer transition-colors duration-700 ${
        enabled ? "bg-violeta-100" : "bg-blue-gray-50"
      }`}
      onClick={toggleSwitch}
    >
      <span
        className={`inline-block w-7 h-7 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-9 lg:h-9 transform bg-white rounded-full transition-transform duration-700 ${
          enabled ? "translate-x-5 sm:translate-x-7 md:translate-x-5 lg:translate-x-10" : "translate-x-1"
        }`}
      />
    </div>
  );
}
  
export default Switch