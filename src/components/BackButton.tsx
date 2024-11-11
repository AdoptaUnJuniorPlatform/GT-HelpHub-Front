import { BackNextButtonProps } from "../types/types"
import useBackButton from "../hooks/useBackButton";

function BackButton({ disabled = false, type, label, className="" }: BackNextButtonProps) {
  const { handleBackButton } = useBackButton();

  return (
    <button
      type={type}
      onClick={handleBackButton}
      disabled={disabled}
      className={`text-2xl font-normal leading-5 tracking-wide ${className}`}
    >
      {label}
    </button>
  )
}

export default BackButton