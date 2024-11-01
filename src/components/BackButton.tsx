import { NextButtonProps } from "../types/types"

function BackButton({onClick, disabled = false}: NextButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="text-2xl text-black-80 font-normal leading-5 tracking-wide"
    >
      ATRÁS
    </button>
  )
}

export default BackButton