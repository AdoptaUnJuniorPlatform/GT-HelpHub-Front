import { ButtonProps } from "../types/types"

function CardBtnExchange( { label, className }: ButtonProps ) {
  return (

    <button className={`flex px-[1em] justify-center items-center bg-celeste-100 text-white rounded-md ${className}`}>
      {label}
    </button>

  )
}

export default CardBtnExchange