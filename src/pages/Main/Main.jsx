import React from 'react';
import { getNews } from '../../api/newsApi';
// import { getArticles } from '../../api/newsApi';
import styles from './styles.module.css';
import { useDebounce } from '../../hooks/useDebounce';
import { PAGE_SIZE } from '../../constants/constants';
import { useFetch } from '../../hooks/useFetch';
import { useFilters } from '../../hooks/useFilters';
import LatestNews from '../../component/LatestNews/LatestNews';
import NewsByFilters from '../../component/NewsByFilters/NewsByFilters';

const Main = () => {
  const { filters, changeFilter } = useFilters({
    page_number: 1,
    page_size: PAGE_SIZE,
    category: null,
    keywords: '',
  });

  const debounced = useDebounce(filters.keywords, 2000);

  // getNews // getArticles
  const { data, isLoading, error } = useFetch(getNews, {
    ...filters,
    keywords: debounced,
  });

  console.log(data.news);

  return (
    <main className={styles.main}>
      <LatestNews isLoading={isLoading} banners={data && data?.news} />
      <NewsByFilters
        changeFilter={changeFilter}
        filters={filters}
        error={error}
        isLoading={isLoading}
        news={data?.news}
      />
    </main>
  );
};

export default Main;
