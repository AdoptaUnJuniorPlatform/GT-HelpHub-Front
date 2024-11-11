import { profiles } from "../Variables/varibles"
import AllReviews from "./AllReviews"
import ReviewsCard from "./ReviewsCard"

function MyReviews( ) {
  const user = profiles[0].reviews
  return (
    <div className="relative flex flex-col w-full mt-[86px] items-start">
      <h2 className="text-[32px] font-medium tracking-wide leading-6 text-neutral-black">Mis Reseñas</h2>
      <AllReviews reviewCount={user.length} />
      <div className="flex justify-start flex-wrap gap-8 mt-10 w-full items-start">
        {user.map((review, index) => (
          <ReviewsCard 
            key={index} 
            review={review} 
            showSkills={true}
          />
        ))}
      </div>
 
    </div>
  )
}

export default MyReviews