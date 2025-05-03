import { useDebounce } from '../../../../shared/hooks/useDebounce.ts';
import { useAppSelector } from '../../../../app/appStore.tsx';
import { useGetNewsByParamsQuery } from '../../../../entities/news/api/newsApi.ts';
import { NewsFilters } from '../../../../widgets/news/index.ts';
import { useGetCategoriesQuery } from '../../../../entities/category/api/categoriesApi.ts';
import styles from './styles.module.css';
import NewsListWithPagination from '../NewsListWithPagination/NewsListWithPagination.tsx';

const NewsByFilters = () => {
  const filters = useAppSelector((state) => state.news.filters);
  const news = useAppSelector((state) => state.news.news);

  const debounced = useDebounce(filters.keywords, 2000);

  const { isLoading } = useGetNewsByParamsQuery({
    ...filters,
    keywords: debounced,
  });

  const { data } = useGetCategoriesQuery(null);

  return (
    <section className={styles.section}>
      <NewsFilters categories={data?.categories || []} filters={filters} />
      <NewsListWithPagination isLoading={isLoading} news={news} filters={filters} />
    </section>
  );
};

export default NewsByFilters;
