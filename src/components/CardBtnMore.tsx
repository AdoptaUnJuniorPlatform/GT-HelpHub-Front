function CardBtnMore({ onClick, id }: { onClick?: (id: number) => void; id: number }) {
  return (

    <button
      className="flex h-10 w-[6rem] px-[1em] justify-center items-center border-[1px] border-neutral-black rounded-md"
      onClick={() => onClick && onClick(id)} 
    >
      Ver más
    </button>

  );
}


export default CardBtnMore