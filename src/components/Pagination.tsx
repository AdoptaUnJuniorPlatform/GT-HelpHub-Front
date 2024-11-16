import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import { useEffect } from "react";

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

function Pagination({ totalItems, itemsPerPage, currentPage, onPageChange }: PaginationProps) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  useEffect(() => {
    // setTotalPages(Math.ceil(totalItems / itemsPerPage));
  }, [totalItems, itemsPerPage]);

  const handlePageClick = (pageNumber: number) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    onPageChange(pageNumber);
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      const newPage = currentPage - 1;
      onPageChange(newPage);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      const newPage = currentPage + 1;
      onPageChange(newPage);
    }
  };
  return (
    <div className="flex items-center space-x-2">

      <button 
        onClick={handlePrevious}
        className="flex items-center justify-center px-2 py-1 border rounded w-[50px] h-[50px] transition-transform transform active:scale-90 hover:bg-gray-200"
        disabled={currentPage === 1}
      >
        <MdArrowBackIos />
      </button>

      {[...Array(totalPages).keys()].map((_, index) => {
        const page = index + 1;
        return (
          <button
            key={page}
            onClick={() => handlePageClick(page)}
            className={`px-2 py-1 border rounded w-[50px] h-[50px] ${
              currentPage === page ? 'bg-gray-300' : ''
            }`}
          >
            {page}
          </button>
        );
      })}

      <button
        onClick={handleNext}
        className="flex items-center justify-center px-2 py-1 border rounded w-[50px] h-[50px] transition-transform transform active:scale-90 hover:bg-gray-200"
        disabled={currentPage === totalPages}
      >
        <MdArrowForwardIos />
      </button>
    </div>
  );
}

export default Pagination;
