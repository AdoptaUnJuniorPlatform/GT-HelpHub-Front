import { BackNextButtonProps } from "../types/types"

function BackButton({ onClick, disabled = false, type }: BackNextButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="text-2xl text-black-80 font-normal leading-5 tracking-wide"
    >
      ATRÁS
    </button>
  )
}

export default BackButton