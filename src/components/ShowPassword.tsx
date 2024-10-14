import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";
import { showPasswordProps } from "../types/types";

function ShowPassword({ showPassword, onClick, className }: showPasswordProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`absolute ${className}`}    >
      {showPassword ? <RiEyeOffLine /> : <RiEyeLine />}
    </button>
  );
}

export default ShowPassword;