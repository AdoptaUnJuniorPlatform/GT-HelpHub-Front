import { InterestedSkillsProps } from "../types/types";
import { AiFillCloseCircle } from "react-icons/ai";

function UserInterestedSkills(props: InterestedSkillsProps) {
  const { interestedSkills, isEditing } = props;
  return (
    <div className="w-full pr-4 py-3 flex gap-2">
      {interestedSkills.map((skill, index) => (
        <span
          key={index}
          className="flex justify-center items-center px-3 py-1 h-[2rem] text-[16px] bg-[rgba(174,174,174,0.10)] rounded-full text-sm text-black-80 leading-5 font-normal font-roboto"
        >
          {skill}
          {isEditing && (
            <button className="ml-2 text-gray-500 hover:text-gray-700">
              <AiFillCloseCircle size={24} className="fill-black-50"/>
            </button>
          )}
        </span>
        
      ))}
    </div>
  )
}

export default UserInterestedSkills