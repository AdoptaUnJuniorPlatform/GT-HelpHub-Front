import { ButtonProps } from "../types/types"

function PrimaryButton( { label, className='', disabled=false } : ButtonProps ) {
  return (
    <button
      className={`flex justify-center items-center rounded gap-2 self-stretch flex-[1_0_0] bg-celeste-100 duration-300 py-[10px] px-[17px] w-full text-white hover:bg-[#3259e8] hover:ease-in ${className}`}
      disabled={disabled}
    >
      {label}
    </button>
  )
}

export default PrimaryButton