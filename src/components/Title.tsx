import { TitleProps } from "../types/types";

function Title({ title, className='' }: TitleProps) {
  return (
    <div className={`font-roboto text-[2rem] font-normal tracking-wide text-neutral-black ${className}`}>
      {title}
    </div>
  );
}
  
export default Title;