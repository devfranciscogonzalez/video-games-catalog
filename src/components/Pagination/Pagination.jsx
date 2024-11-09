import PropTypes from "prop-types";
import Previous from "../../assets/icons/Previous";
import Next from "../../assets/icons/Next";
import "./Pagination.css";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const maxPagesToShow = 10;

  let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
  let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

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
        className="pagination-motion"
      >
        <Previous width={14} height={14} />
      </button>

      {startPage > 1 && <button onClick={() => handlePageClick(1)}>1</button>}
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
        className="pagination-motion"
      >
        <Next width={14} height={14} />
      </button>
    </div>
  );
}

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};
