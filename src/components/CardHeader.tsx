import { CardHeaderProps } from "../types/types"

function CardHeader({ photo, name }: CardHeaderProps) {
  return (
    <div className="flex items-center gap-4 w-full h-[4rem] px-4 py-2">
      <div className="w-[3.7rem] h-[3.7rem] rounded-full overflow-hidden">
        <img src={photo} className="w-full h-full object-cover" alt={name} />
      </div>
      <p className="text-xl font-medium">{name}</p>
    </div>
  );
}

export default CardHeader