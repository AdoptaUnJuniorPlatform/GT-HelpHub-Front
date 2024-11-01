import { NextButtonProps } from "../types/types"

function NextButton({ onClick, disabled = false }: NextButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="text-2xl text-black-50 font-normal leading-5 tracking-wide"
    >
      SIGUIENTE
    </button>
  )
}

export default NextButton