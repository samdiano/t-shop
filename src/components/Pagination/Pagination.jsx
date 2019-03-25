import React from "react";
import "./Pagination.scss";

const paginate = (totalItems, currentPage, pageSize, maxPages) => {
  // calculate total pages
  let totalPages = Math.ceil(totalItems / pageSize);

  // ensure current page isn't out of range
  if (currentPage < 1) {
    currentPage = 1;
  } else if (currentPage > totalPages) {
    currentPage = totalPages;
  }

  let startPage, endPage;
  if (totalPages <= maxPages) {
    // total pages less than max so show all pages
    startPage = 1;
    endPage = totalPages;
  } else {
    // total pages more than max so calculate start and end pages
    let maxPagesBeforeCurrentPage = Math.floor(maxPages / 2);
    let maxPagesAfterCurrentPage = Math.ceil(maxPages / 2) - 1;
    if (currentPage <= maxPagesBeforeCurrentPage) {
      // current page near the start
      startPage = 1;
      endPage = maxPages;
    } else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
      // current page near the end
      startPage = totalPages - maxPages + 1;
      endPage = totalPages;
    } else {
      // current page somewhere in the middle
      startPage = currentPage - maxPagesBeforeCurrentPage;
      endPage = currentPage + maxPagesAfterCurrentPage;
    }
  }

  // calculate start and end item indexes
  let startIndex = (currentPage - 1) * pageSize;
  let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

  // create an array of pages to ng-repeat in the pager control
  let pages = Array.from(Array(endPage + 1 - startPage).keys()).map(
    i => startPage + i
  );

  // return object with all pager properties required by the view
  return {
    totalItems,
    currentPage,
    pageSize,
    totalPages,
    startPage,
    endPage,
    startIndex,
    endIndex,
    pages
  };
};

const Pagination = ({
  totalItems,
  currentPage,
  pageSize,
  maxPages,
  handlePagination
}) => {
    const pager = paginate(totalItems, currentPage, pageSize, maxPages);
    console.log(pager);
  const page = pager.pages.map((page, key) => (
    <li className="page-item">
      <span onClick={() => handlePagination(page)} className="page-link">
        {page}
      </span>
    </li>
  ));

  return (
    <nav className="mt-3">
      <ul className="pagination mb-0 pb-0">
        <li className="page-item">
          <a className="page-link" href="#" aria-label="Previous">
            <i class="fas fa-chevron-left rounded" />
            <span>Previous</span>
          </a>
        </li>
        <span className="pages">
          {page}
          <li className="page-item">
            <span onClick={() => handlePagination(page)} className="page-link">
              
            </span>
          </li>
        </span>
        <li className="page-item">
          <a className="page-link" href="#" aria-label="Next">
            <span>Next</span>
            <i class="fas fa-chevron-right rounded" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
