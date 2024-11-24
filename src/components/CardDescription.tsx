import { useLocation } from "react-router-dom";
import { DescriptionProps } from "../types/types";

function CardDescription(props: DescriptionProps) {
  const { description } = props;
  const location = useLocation();
  const isLogin = location.pathname === "/"
  return (
    <div className={`flex items-center px-4 py-1 border-b  border-[rgba(174,174,174,0.10)] ${isLogin ? 'overflow-y-scroll login-scroll' : 'overflow-auto scrollbar-hide h-[6rem]'}`}>
      <p className="text-sm text-[#B8B8B8]">{description}</p>
    </div>
  );
}

export default CardDescription