import { BackNextButtonProps } from "../types/types"

function NextButton({ onClick, disabled = false, type, label, className = "" }: BackNextButtonProps) {

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`text-2xl font-normal leading-5 tracking-wide ${className}`}    >
      {label}
    </button>
  )
}

export default NextButton