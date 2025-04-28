import NewsList from '../NewsList/NewsList.tsx';
import NewsFilters from '../NewsFilters/NewsFilters.tsx';
import PaginationWrapper from '../PaginationWrapper/PaginationWrapper.tsx';
import { useDebounce } from '../../hooks/useDebounce.ts';
import { TOTAL_PAGES } from '../../constants/constants';
import styles from './styles.module.css';
import { useGetNewsByParamsQuery } from '../../store/services/newsApi.ts';
import { useAppDispatch, useAppSelector } from '../../store/index.ts';
import { setFilters } from '../../store/slices/newsSlice.ts';

const NewsByFilters = () => {
  const filters = useAppSelector((state) => state.news.filters);
  const dispatch = useAppDispatch();

  const debounced = useDebounce(filters.keywords, 2000);

  const { data, isLoading, error } = useGetNewsByParamsQuery({
    ...filters,
    keywords: debounced,
  });

  const handlePrevPage = () => {
    if (filters.page_number < TOTAL_PAGES) {
      dispatch(setFilters({ key: 'page_number', value: filters.page_number - 1 }));
    }
  };

  const handleNextPage = () => {
    if (filters.page_number > 1) {
      dispatch(setFilters({ key: 'page_number', value: filters.page_number + 1 }));
    }
  };

  const handlePageNumber = (pageNumber: number) => {
    dispatch(setFilters({ key: 'page_number', value: pageNumber }));
  };

  return (
    <section className={styles.section}>
      <NewsFilters filters={filters} />
      {error ? (
        <p>Failed to load data</p>
      ) : data ? (
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
      ) : null}
    </section>
  );
};

export default NewsByFilters;
