import { BorderButtonProps } from "../types/types";

function BorderButton({ label, className = "", active, onClick, variant = "home" }: BorderButtonProps) {
  const activeStyle = variant === "home"
    ? "border-celeste-100 text-celeste-100"
    : "border-violeta-100 text-violeta-100 bg-[rgba(113,102,210,0.2)]";

  const inactiveStyle = variant === "home"
    ? "border-black-50 text-neutral-black"
    : "border-gray-300 text-gray-500";
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center p-[1.5em] border-[1px] font-roboto not-italic text-base font-normal leading-normal ${
        active ? activeStyle : inactiveStyle
      } ${className}`}
    >
      {label}
    </button>
  );
}

export default BorderButton;
