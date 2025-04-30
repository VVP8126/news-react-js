import { NewsList } from '../../../../widgets/news/ui/index.ts';
import NewsFilters from '../NewsFilters/NewsFilters.tsx';
import { useDebounce } from '../../../../shared/hooks/useDebounce.ts';
import { TOTAL_PAGES } from '../../../../shared/constants/constants.ts';
import { useAppDispatch, useAppSelector } from '../../../../app/appStore.tsx';
import { useGetNewsByParamsQuery } from '../../../../entities/news/api/newsApi.ts';
import { setFilters } from '../../../../entities/news/model/newsSlice.ts';
import Pagination from '../../../../feature/pagination/ui/Pagination/Pagination.tsx';
import styles from './styles.module.css';

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
        <Pagination
          top
          bottom
          handlePageNumber={handlePageNumber}
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
          totalPages={TOTAL_PAGES}
          currentPage={filters.page_number}
        >
          <NewsList isLoading={isLoading} news={data?.news} />
        </Pagination>
      ) : null}
    </section>
  );
};

export default NewsByFilters;
