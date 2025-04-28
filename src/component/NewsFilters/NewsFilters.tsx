import Search from '../Search/Search.tsx';
import Categories from '../Categories/Categories.tsx';
import Slider from '../Slider/Slider.tsx';
import { IFilters } from '../../interfaces/index.ts';

import styles from './styles.module.css';
import { useGetCategoriesQuery } from '../../store/services/newsApi.ts';
import { useAppDispatch } from '../../store/index.ts';
import { setFilters } from '../../store/slices/newsSlice.ts';

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
