import { CardBtnBorderProps } from "../types/types";

function CardBtnBorder({ onClick, id, className, label }: CardBtnBorderProps ) {
  return (
    <button
      className={`flex border-[1px] h-10 px-[1em] justify-center items-center border-neutral-black rounded-md font-medium ${className}`}
      onClick={() => onClick && onClick(id)} 
    >
      {label}
    </button>
  );
}

export default CardBtnBorder