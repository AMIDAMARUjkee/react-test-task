import React from 'react';
import styles from './Pagination.module.scss';

const Pagination = ({ currentPage, pagesCount, onIncrement, onDecrement }) => {
  return (
    <div className={styles.pagination}>
      <button
        className={styles.pagination__button}
        onClick={onDecrement}
        disabled={currentPage === 1}>
        {'<'}
      </button>
      <span
        className={styles.pagination__page_count}>{`Page ${currentPage} of ${pagesCount}`}</span>
      <button
        className={styles.pagination__button}
        onClick={onIncrement}
        disabled={currentPage === pagesCount}>
        {'>'}
      </button>
    </div>
  );
};

export default Pagination;
