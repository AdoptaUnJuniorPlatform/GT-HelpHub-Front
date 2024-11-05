import { BackNextButtonProps } from "../types/types"
import useBackButton from "../hooks/useBackButton";

function BackButton({ disabled = false, type }: BackNextButtonProps) {
  const { handleBackButton } = useBackButton();

  return (
    <button
      type={type}
      onClick={handleBackButton}
      disabled={disabled}
      className="text-2xl text-black-80 font-normal leading-5 tracking-wide"
    >
      ATRÁS
    </button>
  )
}

export default BackButton