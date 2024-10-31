import { ButtonProps } from "../types/types"

function CardBtnPrimary( { label, className }: ButtonProps ) {
  return (
    <button className={`flex h-10 px-[1em] justify-center items-center bg-celeste-100 text-white rounded-md btn-click ${className}`}>
      {label}
    </button>
  )
}

export default CardBtnPrimary