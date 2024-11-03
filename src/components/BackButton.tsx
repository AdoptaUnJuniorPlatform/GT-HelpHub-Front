import { useNavigate } from "react-router-dom"
import { BackNextButtonProps } from "../types/types"

function BackButton({ disabled = false, type }: BackNextButtonProps) {

  const navigate = useNavigate()

  return (
    <button
      type={type}
      onClick={() => navigate(-1)}
      disabled={disabled}
      className="text-2xl text-black-80 font-normal leading-5 tracking-wide"
    >
      ATRÁS
    </button>
  )
}

export default BackButton