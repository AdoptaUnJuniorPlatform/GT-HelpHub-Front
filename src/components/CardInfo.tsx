import { ServiceInfoProps } from "../types/types";

function CardInfo(props: ServiceInfoProps) {
  const { service, location } = props;
  return (
    <div className="flex flex-col w-full border-b border-[rgba(174,174,174,0.10)]  pb-2">
      <p className="text-xl px-[0.9em] py-[0.6em] font-normal">{service}</p>
      <p className="text-sm px-[1.3em] text-gray-500">{location}</p>
    </div>
  );
}

export default CardInfo