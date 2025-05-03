import { Categories } from '../../../../feature/category/index.ts';
import { Slider } from '../../../../feature/slider/index.ts';
import { IFilters } from '../../../../shared/interfaces/index.ts';
import { useAppDispatch } from '../../../../app/appStore.tsx';
import { setFilters } from '../../../../entities/news/model/newsSlice.ts';
import { Search } from '../../../../feature/search/index.ts';
import styles from './styles.module.css';
import { CategoryType } from '../../../../entities/category/index.ts';

interface Props {
  filters: IFilters;
  categories: CategoryType[];
}

const NewsFilters = ({ filters, categories }: Props) => {
  const dispatch = useAppDispatch();

  return (
    <div className={styles.filters}>
      {categories ? (
        <Slider>
          <Categories
            categories={categories}
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
