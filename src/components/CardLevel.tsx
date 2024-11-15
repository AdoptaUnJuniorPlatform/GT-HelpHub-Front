import { CardLevelProps } from "../types/types";

function CardLevel(props: CardLevelProps) {
  const { levels, activeLevel } = props;
  return (
    <div className="px-4 py-4 w-full">
      <p className="text-[12px] font-normal mb-1">Nivel</p>
      <div className="flex gap-2 text-xs">
        {levels.map((level) => (
          <span
            key={level}
            className={`flex items-center justify-center px-2 h-6 rounded-[30px] leading-5 text-xs ${level === activeLevel
              ? "bg-celeste-100 text-white" 
              : "bg-black-6 text-gray-400" }`}
          >
            {level}
          </span>
        ))}
      </div>
    </div>
  );
}

export default CardLevel