import { ButtonProps } from "../types/types"

function PrimaryButton( { label, className='', disabled=false, onClick } : ButtonProps ) {
  return (
    <button
      type="submit"
      className={`flex justify-center items-center rounded gap-2 self-stretch flex-[1_0_0] duration-300 py-[10px] px-[17px] w-full text-white font-medium hover:ease-in ${className}`}
      disabled={disabled}
      aria-disabled={disabled}
      aria-label={label}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export default PrimaryButton