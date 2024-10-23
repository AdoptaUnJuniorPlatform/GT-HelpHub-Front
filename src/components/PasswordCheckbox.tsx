import { useState } from "react";
import { GrFormCheckmark } from "react-icons/gr";

function Checkbox({ label }: { label: string }) {
  const [isChecked, setIsChecked] = useState(false);

  function handleCheckboxChange() {
    setIsChecked(!isChecked);
  }

  return (
    <label className="flex items-center cursor-pointer space-x-2">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        className="hidden"
      />
      <div
        className={`w-5 h-6 flex items-center justify-center border-2 ${
          isChecked ? "bg-violet-700 border-violet-700" : "bg-white border-violet-700"
        }`}
      >
        {isChecked && (
          <GrFormCheckmark className="text-white"/>
        )}
      </div>
      <span className="text-slate-700">{label}</span>
    </label>
  );
}

export default Checkbox;
