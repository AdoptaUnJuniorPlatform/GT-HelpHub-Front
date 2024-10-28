import { InterestSkillsProps } from "../types/types";


function UserInterestSkills(props: InterestSkillsProps) {
  const { interestSkills } = props;
  return (
    <div className="w-full pr-4 py-3 flex gap-2">
      {interestSkills.map((skill, index) => (
        <span
          key={index}
          className="flex justify-center items-center px-3 py-1 h-[1.4rem] text-[12px] bg-[rgba(174,174,174,0.10)] rounded-full text-sm text-gray-600"
        >
          {skill}
        </span>
      ))}
    </div>
  )
}

export default UserInterestSkills