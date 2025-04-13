import React from 'react';
import NewsBanner from '../../component/NewsBanner/NewsBanner';
import { getCategories } from '../../api/newsApi';
// import { getNews } from '../../api/newsApi';
import { getArticles } from '../../api/newsApi';
import NewsList from '../../component/NewsList/NewsList';
import styles from './styles.module.css';
import Pagination from '../../component/Pagination/Pagination';
import Categories from '../../component/Categories/Categories';
import Search from '../../component/Search/Search';
import { useDebounce } from '../../hooks/useDebounce';
import { PAGE_SIZE, TOTAL_PAGES } from '../../constants/constants';
import { useFetch } from '../../hooks/useFetch';
import { useFilters } from '../../hooks/useFilters';

const Main = () => {
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

  const { data: dataCategories } = useFetch(getCategories);

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

  console.log(data.news);

  return (
    <main className={styles.main}>
      {dataCategories ? (
        <Categories
          categories={dataCategories.categories}
          selectedCategory={filters.category}
          setSelectedCategory={(category) => changeFilter('category', category)}
        />
      ) : null}
      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) => changeFilter('keywords', keywords)}
      />
      {error !== null ? (
        <h3>{JSON.stringify(error)}</h3>
      ) : (
        <>
          <NewsBanner isLoading={isLoading} newsItem={data && data.news && data.news[0]} />

          <Pagination
            handlePageNumber={handlePageNumber}
            handlePrevPage={handlePrevPage}
            handleNextPage={handleNextPage}
            totalPages={TOTAL_PAGES}
            currentPage={filters.page_number}
          />

          <NewsList isLoading={isLoading} news={data.news} />

          <Pagination
            handlePageNumber={handlePageNumber}
            handlePrevPage={handlePrevPage}
            handleNextPage={handleNextPage}
            totalPages={TOTAL_PAGES}
            currentPage={filters.page_number}
          />
        </>
      )}
    </main>
  );
};

export default Main;
