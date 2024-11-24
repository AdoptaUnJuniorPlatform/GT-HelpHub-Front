import { CgClose } from "react-icons/cg";
import { MdVerified } from "react-icons/md";
import CardBtnExchange from "./CardBtnPrimary";
import Ratings from "./Ratings";
import ReviewsCard from "./ReviewsCard";
import { profiles } from "../Variables/varibles";

function SeeMore({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) {
    return null;
  }
  const user = profiles[0]

  const handleScroll = (e: React.WheelEvent<HTMLDivElement>) => {
    const container = e.currentTarget as HTMLDivElement; 

    if (e.deltaY !== 0) {
      container.scrollLeft += e.deltaY; 

    }
  };

  return (
    <main className="fixed inset-0 z-50 flex flex-col gap-5 items-center justify-center bg-black bg-opacity-50 ">
      <section className="relative w-[70%] max-w-3xl p-12 bg-white rounded-lg shadow-lg z-10">

        <button className="absolute top-4 right-4 text-2xl text-neutral-black hover:text-neutral-700" onClick={onClose}>
          <CgClose />
        </button>

        <div className="flex flex-col items-start gap-6">

          <div className="flex items-center gap-4">
            <img
              src={user.photo}
              alt={user.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <MdVerified 
                className="absolute left-[24rem] top-[3rem] text-xl fill-celeste-100"
              />
              <Ratings reviews={user.reviews.length} />
            </div>
          </div>

          <div className="w-full">
            <h3 className="text-2xl font-normal text-neutral-black mb-3">Descripción</h3>
            <p className="flex justify-center items-center px-9 border-[1px] border-black-50 h-[6.4rem] text-sm text-neutral-600 flex-[1_0_0%]">
              {user.description}
            </p>
          </div>

          <div 
            className="w-full overflow-x-auto items-start scrollbar-hide"
            onWheel={handleScroll}
          >
            <div
              className="flex pb-10 items-start w-full"
            >
              {user.reviews.map((review, index) => (
                <div className="flex flex-col items-start mx-2 bg-white rounded-lg min-w-[300px] max-w-[500px]">
                  <ReviewsCard 
                    key={index} 
                    review={review} 
                    showSkills={false}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-end w-full">
            <CardBtnExchange label="Enviar solicitud de intercambio" className="font-medium h-10 w-[16rem] px-[1em] py-[0.63em]"/>
          </div>
        </div>
      </section>
    </main>
  );
}

export default SeeMore;
