import { BackNextButtonProps } from "../types/types"

function NextButton({ onClick, disabled = false, type }: BackNextButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="text-2xl text-black-50 font-normal leading-5 tracking-wide"
    >
      SIGUIENTE
    </button>
  )
}

export default NextButton