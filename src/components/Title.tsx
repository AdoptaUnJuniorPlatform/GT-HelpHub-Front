import { TitleProps } from "../types/types";

function Title({ title, className='' }: TitleProps) {
  return (
    <h3 className={`font-roboto text-[2rem] font-normal tracking-wide text-neutral-black leading-6 ${className}`}>
      {title}
    </h3>
  );
}
  
export default Title;