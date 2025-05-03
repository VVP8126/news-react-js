import { useDebounce } from '../../../../shared/hooks/useDebounce.ts';
import { TOTAL_PAGES } from '../../../../shared/constants/constants.ts';
import { useGetNewsByParamsQuery } from '../../../../entities/news/api/newsApi.ts';
import Pagination from '../../../../feature/pagination/ui/Pagination/Pagination.tsx';
import { NewsList } from '../../../../widgets/news/index.ts';
import { IFilters } from '../../../../shared/interfaces/index.ts';
import { INEWS } from '../../../../entities/news/index.ts';
import { usePaginationNews } from '../../hooks/usePaginationNews.ts';

interface Props {
  filters: IFilters;
  news: INEWS[];
  isLoading: boolean;
}

const NewsListWithPagination = ({ filters, news, isLoading }: Props) => {
  const debounced = useDebounce(filters.keywords, 2000);
  const { handlePrevPage, handleNextPage, handlePageNumber } = usePaginationNews(filters);

  const { error } = useGetNewsByParamsQuery({
    ...filters,
    keywords: debounced,
  });

  return (
    <>
      {error ? (
        <p>Failed to load data</p>
      ) : (
        <Pagination
          top
          bottom
          handlePageNumber={handlePageNumber}
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
          totalPages={TOTAL_PAGES}
          currentPage={filters.page_number}
        >
          <NewsList direction="column" type="item" isLoading={isLoading} news={news} />
        </Pagination>
      )}
    </>
  );
};

export default NewsListWithPagination;
