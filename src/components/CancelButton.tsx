import { useNavigate } from "react-router-dom"
import { BackNextButtonProps } from "../types/types"

function CancelButton({ disabled = false, type, label, className="" }: BackNextButtonProps) {
  const navigate = useNavigate();
  return (
    <button
      type={type}
      onClick={()=>{navigate("/profile")}}
      disabled={disabled}
      className={`text-2xl font-normal leading-5 tracking-wide ${className}`}
    >
      {label}
    </button>
  )
}

export default CancelButton