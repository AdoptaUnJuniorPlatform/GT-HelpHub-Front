import { SecondayButtonProps } from "../types/types"

function SecondaryButton({ label, onClick } : SecondayButtonProps) {
  return (
    <button 
      className="flex justify-center items-center py-[0.625em] px-[1.5em] gap-2 h-10 rounded-md flex-shrink-0 bg-[#1945E3] text-white text-sm font-medium leading-5 btn-click"
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export default SecondaryButton