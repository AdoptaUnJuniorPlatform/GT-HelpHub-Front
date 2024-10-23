import { SkillsProps } from "../types/types";

function CardSkills(props: SkillsProps) {
  const { skills } = props;
  return (
    <div className="w-full px-4 py-3 border-b border-[rgba(174, 174, 174, 0.10)] flex gap-2">
      {skills.map((skill, index) => (
        <span
          key={index}
          className="flex justify-center items-center px-3 py-1 h-[1.4rem] text-[12px] border border-neutral-black rounded-full text-sm text-gray-600"
        >
          {skill}
        </span>
      ))}
    </div>
  );
}

export default CardSkills