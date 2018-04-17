import React from "react";
import PropTypes from "prop-types";

const filterPages = (currentPage, pageNumber) => {
  if (currentPage > pageNumber && currentPage - 3 >= pageNumber) {
    return false;
  }
  if (currentPage < pageNumber && currentPage + 3 <= pageNumber) {
    return false;
  }
  return true;
};

const Pagination = ({
  currentPage,
  totalPages,
  newPage,
  nextPage,
  prevPage
}) => {
  const numbers = [];
  const noOfPages = currentPage > totalPages ? currentPage : totalPages;
  for (let page = 2; page <= noOfPages - 1; page += 1) {
    if (filterPages(currentPage, page)) {
      numbers.push(
        <button
          key={page}
          className={`pg-btn pg-btn-number ${
            currentPage === page ? "selected" : ""
          }`}
          onClick={() => newPage(page)}
        >
          {page}
        </button>
      );
    }
  }
  return (
    <div className="pagination apply-flex">
      <button
        className={`pg-btn pg-btn-prev ${currentPage === 1 ? "disabled" : ""}`}
        onClick={() => newPage(prevPage)}
      >
        Prev
      </button>
      {noOfPages !== 1 && (
        <button
          className={`pg-btn pg-btn-number ${
            currentPage === 1 ? "selected" : ""
          }`}
          onClick={() => newPage(1)}
        >
          1
        </button>
      )}
      {currentPage >= 5 && (
        <button className="pg-btn pg-btn-ellipses disabled">...</button>
      )}
      {numbers}
      {currentPage <= noOfPages - 4 &&
        noOfPages > 5 && (
          <button className="pg-btn pg-btn-ellipses disabled">...</button>
        )}
      {noOfPages !== 1 && (
        <button
          className={`pg-btn pg-btn-number ${
            currentPage === noOfPages ? "selected" : ""
          }`}
          onClick={() => newPage(totalPages)}
        >
          {noOfPages}
        </button>
      )}
      <button
        className={`pg-btn pg-btn-next ${
          currentPage === noOfPages ? "disabled" : ""
        }`}
        onClick={() => newPage(nextPage)}
      >
        Next
      </button>
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number,
  totalPages: PropTypes.number,
  nextPage: PropTypes.number,
  prevPage: PropTypes.number,
  newPage: PropTypes.func.isRequired
};

Pagination.defaultProps = {
  currentPage: 1,
  totalPages: 1
};

export default Pagination;
