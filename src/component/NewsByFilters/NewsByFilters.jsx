import React from 'react';
import NewsList from '../NewsList/NewsList';
import { PAGE_SIZE, TOTAL_PAGES } from '../../constants/constants';
import NewsFilters from '../NewsFilters/NewsFilters';
import { useFilters } from '../../hooks/useFilters';
import { useDebounce } from '../../hooks/useDebounce';
import { useFetch } from '../../hooks/useFetch';
// import { getNews } from '../../api/newsApi';
import { getArticles } from '../../api/newsApi';

import styles from './styles.module.css';
import PaginationWrapper from '../PaginationWrapper/PaginationWrapper';

const NewsByFilters = () => {
  const { filters, changeFilter } = useFilters({
    page_number: 1,
    page_size: PAGE_SIZE,
    category: null,
    keywords: '',
  });

  const debounced = useDebounce(filters.keywords, 2000);

  // getNews // getArticles
  const { data, isLoading, error } = useFetch(getArticles, {
    ...filters,
    keywords: debounced,
  });

  console.log(data.news);

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
        <PaginationWrapper
          top
          bottom
          handlePageNumber={handlePageNumber}
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
          totalPages={TOTAL_PAGES}
          currentPage={filters.page_number}
        >
          <NewsList isLoading={isLoading} news={data?.news} />
        </PaginationWrapper>
      )}
    </section>
  );
};

export default NewsByFilters;
