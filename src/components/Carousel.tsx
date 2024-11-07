import { useEffect, useRef } from "react";
import { ProfileData } from "../types/types"
import LoginCard from "./LoginCard";

function Carousel({ profiles }: {profiles: ProfileData[]} ) {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const scrollStep = 1;
    const scrollDelay = 20; 

    const scrollInterval = setInterval(() => {
      if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
        carousel.scrollLeft = 0;
      } else {
        carousel.scrollLeft += scrollStep;
      }
    }, scrollDelay);

    return () => clearInterval(scrollInterval);
  }, []);
  
  return (
    <div className="absolute overflow-hidden w-full z-50 top-[18rem]">
      <div ref={carouselRef} className="flex gap-2 overflow-x-auto scrollbar-hide -mx-4 py-4">
        {[...profiles, ...profiles].map((profile, index) => (
          <LoginCard key={`${profile.id} - ${index}`} profileData={profile} />
        ))}
      </div>
    </div>
  );
}
  

export default Carousel