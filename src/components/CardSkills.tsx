import { useLocation } from "react-router-dom";

function CardSkills({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const isLogin = location.pathname === "/"
  return (
    <div className={`px-4 flex gap-2 ${isLogin ? 'h-10 pt-3' : 'py-3'}`}>
      {children}
    </div>
  );
}

export default CardSkills;