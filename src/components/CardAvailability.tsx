import { AvailabilityProps } from "../types/types";

function CardAvailability(props: AvailabilityProps) {
  const { availability } = props;
  return (
    <div className="flex justify-between items-center w-full px-4 py-2">
      <p className="text-sm font-normal tracking-wide">Disponibilidad</p>
      <p className="text-sm font-medium text-neutral-black border-[1px] border-black-6 rounded-lg py-[0.4em] px-[1em]">
        {availability}
      </p>
    </div>
  );
}

export default CardAvailability