function AllReviews({reviewCount} : {reviewCount: number}) {
  return (
    <div className="text-center mt-8 mb-11">
      <span
        className="text-celeste-100 text-[14px] font-roboto font-bold leading-normal tracking-wide"
      >
        Todas las reseñas ({reviewCount})
      </span>
      <div
        className="w-full h-[2px] bg-celeste-100 mt-3"
      ></div>
    </div>
  )
}

export default AllReviews