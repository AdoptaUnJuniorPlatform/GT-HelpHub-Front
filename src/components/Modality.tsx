import { ModalityProps } from "../types/types";

function Modality({ label, className = "", active, onClick }: ModalityProps) {

  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center w-[7em] h-[2.9em] p-[1.5em] border-[1px] font-roboto not-italic text-base font-normal leading-normal ${
        active ? "border-celeste-100 text-celeste-100" : "border-black-50 text-neutral-black"
      } ${className}`}
    >
      {label}
    </button>
  );
}

export default Modality;
