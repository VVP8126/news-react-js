import { INEWS } from '../../../../entities/news';
import { useGetNewsByParamsQuery } from '../../../../entities/news/api/newsApi';
import Pagination from '../../../../feature/pagination/ui/Pagination/Pagination';
import { TOTAL_PAGES } from '../../../../shared/constants/constants';
import { useDebounce } from '../../../../shared/hooks/useDebounce';
import { IFilters } from '../../../../shared/interfaces';
import { NewsList } from '../../../../widgets/news';
import { usePaginationNews } from '../../hooks/usePaginationNews';

interface Props {
  filters: IFilters;
  news: INEWS[];
  isLoading: boolean;
}

const PaginatingList = ({ filters, news, isLoading }: Props) => {
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

export default PaginatingList;
