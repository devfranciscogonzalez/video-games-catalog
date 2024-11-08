import PropTypes from "prop-types";
import "./Pagination.css";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const maxPagesToShow = 10; 

  const startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
  const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

  if (endPage - startPage + 1 < maxPagesToShow) {
    startPage = Math.max(1, endPage - maxPagesToShow + 1);
  }

  const handlePageClick = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className="pagination">
      <button
        onClick={() => handlePageClick(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {startPage > 1 && (
        <button onClick={() => handlePageClick(1)}>1</button>
      )}
      {startPage > 2 && <span>...</span>}
      {[...Array(endPage - startPage + 1).keys()].map((num) => (
        <button
          key={num + startPage}
          className={currentPage === num + startPage ? "active" : ""}
          onClick={() => handlePageClick(num + startPage)}
        >
          {num + startPage}
        </button>
      ))}
      {endPage < totalPages - 1 && <span>...</span>}
      {endPage < totalPages && (
        <button onClick={() => handlePageClick(totalPages)}>
          {totalPages}
        </button>
      )}
      <button
        onClick={() => handlePageClick(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
}

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};
