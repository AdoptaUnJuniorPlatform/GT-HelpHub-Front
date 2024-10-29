import { DescriptionProps } from "../types/types";

function CardDescription(props: DescriptionProps) {
  const { description } = props;
  return (
    <div className="px-4 py-3 border-b border-[rgba(174,174,174,0.10)] ">
      <p className="text-sm text-[#B8B8B8]">{description}</p>
    </div>
  );
}

export default CardDescription