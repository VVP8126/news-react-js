import React from 'react';
import Pagination from '../Pagination/Pagination';
import NewsList from '../NewsList/NewsList';
import { TOTAL_PAGES } from '../../constants/constants';

import styles from './styles.module.css';
import NewsFilters from '../NewsFilters/NewsFilters';

const NewsByFilters = ({ filters, changeFilter, error, isLoading, news }) => {
  const handlePrevPage = () => {
    if (filters.page_number < TOTAL_PAGES) {
      changeFilter('page_number', filters.page_number - 1);
    }
  };

  const handleNextPage = () => {
    if (filters.page_number > 1) {
      changeFilter('page_number', filters.page_number + 1);
    }
  };

  const handlePageNumber = (pageNumber) => {
    changeFilter('page_number', pageNumber);
  };

  return (
    <section className={styles.section}>
      <NewsFilters filters={filters} changeFilter={changeFilter} />
      {error !== null ? (
        <h3>{JSON.stringify(error)}</h3>
      ) : (
        <>
          <Pagination
            handlePageNumber={handlePageNumber}
            handlePrevPage={handlePrevPage}
            handleNextPage={handleNextPage}
            totalPages={TOTAL_PAGES}
            currentPage={filters.page_number}
          />

          <NewsList isLoading={isLoading} news={news} />

          <Pagination
            handlePageNumber={handlePageNumber}
            handlePrevPage={handlePrevPage}
            handleNextPage={handleNextPage}
            totalPages={TOTAL_PAGES}
            currentPage={filters.page_number}
          />
        </>
      )}
    </section>
  );
};

export default NewsByFilters;
