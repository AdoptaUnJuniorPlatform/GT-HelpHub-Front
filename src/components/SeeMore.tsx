import { CgClose } from "react-icons/cg";
import { MdVerified } from "react-icons/md";
import { ProfileData } from "../types/types";
import CardBtnExchange from "./CardBtnExchange";

function SeeMore({
  isOpen,
  onClose,
  profileData,
}: {
  isOpen: boolean;
  onClose: () => void;
  profileData: ProfileData;
}) {
  if (!isOpen) {
    return null;
  }

  const { photo, name, reviewsCount, rating, reviews, description } = profileData;

  const handleScroll = (e: React.WheelEvent<HTMLDivElement>) => {

    const container = e.currentTarget as HTMLDivElement; 
    container.scrollLeft += e.deltaY; 
  };

  return (
    <main className="fixed inset-0 z-50 flex flex-col gap-5 items-center justify-center bg-black bg-opacity-50">
      <section className="relative w-[50%] max-w-3xl p-12 bg-white rounded-lg shadow-lg">

        <button className="absolute top-4 right-4 text-2xl text-neutral-500 hover:text-neutral-700" onClick={onClose}>
          <CgClose />
        </button>

        <div className="flex flex-col items-start gap-6">

          <div className="flex items-center gap-4">
            <img
              src={photo}
              alt={name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h2 className="text-xl flex gap-3 w-full font-bold text-neutral-900">{name}<span className="text-blue-500 "><MdVerified /></span></h2>
              <div className="flex items-center gap-1">
                <span className="text-yellow-500 text-lg">★★★★★</span>
                <span className="text-neutral-500 text-sm">{rating} Good</span>
              </div>
              <p className="text-base text-neutral-black font-normal leading-normal tracking-wide">Valoración general</p>
              <p className="text-sm text-neutral-400">{reviewsCount} reseñas</p>
            </div>
          </div>

          <div className="w-full">
            <h3 className="text-2xl font-normal text-neutral-black mb-3">Descripción</h3>
            <p className="flex justify-center items-center px-9 border-[1px] border-black-50 h-[6.4rem] text-sm text-neutral-600 flex-[1_0_0%]">
              {description}
            </p>
          </div>

          <div style={{ width: '100%', overflow: 'hidden' }}>
            <div
              className="flex gap-6 pb-10"
              style={{
                overflowX: 'auto',
                msOverflowStyle: 'none',
                scrollbarWidth: 'none',
              }}
              onWheel={handleScroll}
            >
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="flex flex-col items-start p-5 min-w-[200px] max-w-[300px] bg-white rounded-lg shadow-md h-auto"
                  style={{ flexShrink: 0 }}
                >
                  <p className="mt-2 text-base text-gray-600 leading-relaxed">"{review.review}"</p>
                  <div className="flex items-center gap-2 mt-5">
                    <img
                      src={review.photo}
                      alt={review.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{review.name}</p>
                      <p className="text-xs text-gray-500">{review.city}</p>
                    </div>
                  </div>
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
