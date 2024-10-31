import { ReviewsCardProps } from "../types/types"
import { TbRefresh } from "react-icons/tb";
import CardSkills from "./CardSkills"
import ProfileImg from "./ProfileImg";

function ReviewsCard({ review, showSkills } : ReviewsCardProps) {
  return (
    <div className="bg-white shadow-[0_3px_3px_0_rgba(0,0,0,0.25)] rounded-lg p-6 w-full flex flex-col items-start font-roboto font-normal leading-6 tracking-wide text-xl max-h-[21rem] max-w-md ">
      <p className="text-gray-700 pb-4 overflow-auto custom-scroll italic">{review.review}</p>
      <div className="flex items-center w-full mt-10">
        <ProfileImg 
          src={review.photo} 
          className="w-12 h-10 rounded-full overflow-hidden"
        />
        <div className="flex flex-col items-start justify-start w-full">
          <h3 className="text-lg font-semibold pl-4">{review.name}</h3>
          <div className="flex justify-start items-center w-full">
            {showSkills && (
              <>
                <CardSkills> 
                  <span className="flex justify-center items-center px-3 py-1 h-[1.4rem] text-[12px] border border-black-80 rounded-full text-sm text-black-80"
                  >
                    {review.givenSkill}
                  </span>
                </CardSkills>
                <TbRefresh className="text-2xl text-black-80 rotate-180 -scale-x-100"/>
                <CardSkills >
                  <span className="flex justify-center items-center px-3 py-1 h-[1.4rem] text-[12px] border border-black-80 rounded-full text-sm text-black-80"
                  >
                    {review.recivedSkill}
                  </span>
                </CardSkills>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewsCard