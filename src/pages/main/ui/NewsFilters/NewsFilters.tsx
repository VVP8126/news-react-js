import { Categories } from '../../../../feature/category/index.ts';
import { Slider } from '../../../../feature/slider/index.ts';
import { IFilters } from '../../../../shared/interfaces/index.ts';
import { useGetCategoriesQuery } from '../../../../entities/category/api/categoriesApi.ts';
import { useAppDispatch } from '../../../../app/appStore.tsx';
import { setFilters } from '../../../../entities/news/model/newsSlice.ts';
import { Search } from '../../../../feature/search/index.ts';
import styles from './styles.module.css';

interface Props {
  filters: IFilters;
}

const NewsFilters = ({ filters }: Props) => {
  const { data, isLoading } = useGetCategoriesQuery(null);
  const dispatch = useAppDispatch();

  return (
    <div className={styles.filters}>
      {isLoading ? (
        <span>...</span>
      ) : data ? (
        <Slider>
          <Categories
            categories={data.categories}
            selectedCategory={filters.category}
            setSelectedCategory={(category) =>
              dispatch(setFilters({ key: 'category', value: category }))
            }
          />
        </Slider>
      ) : null}
      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) => dispatch(setFilters({ key: 'keywords', value: keywords }))}
      />
    </div>
  );
};

export default NewsFilters;
