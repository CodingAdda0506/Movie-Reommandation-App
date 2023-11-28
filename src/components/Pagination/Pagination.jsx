import React from 'react';

const Pagination = ({ currentPage, totalPages, setPage }) => {

  if (totalPages === 0) return null;

  const handlePrev = () => {
    if (currentPage !== 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage !== totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div className='flex justify-center items-center'>
      <button className='flex items-center justify-center px-3 h-8 me-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-700 ' onClick={handlePrev}>Previous</button>
      <button className='flex items-center justify-center px-3 h-8 me-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-700 ' onClick={handleNext}>Next</button>
    </div>
  )
}

export default Pagination