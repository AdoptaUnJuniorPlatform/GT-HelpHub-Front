import { useLocation } from "react-router-dom";
import { CardHeaderProps } from "../types/types"

function CardHeader({ photo, name }: CardHeaderProps) {
  const location = useLocation();
  const isLogin = location.pathname === "/"
  return (
    <div className="flex items-center gap-4 w-full h-[4rem] px-4 ">
      <div className={`rounded-full overflow-hidden ${isLogin ? 'w-[2.7rem] h-[2.7rem]' : 'w-[3.7rem] h-[3.7rem] py-2'}`}>
        <img src={photo} className="w-full h-full object-cover" alt={name} />
      </div>
      <p className="text-xl font-medium">{name}</p>
    </div>
  );
}

export default CardHeader