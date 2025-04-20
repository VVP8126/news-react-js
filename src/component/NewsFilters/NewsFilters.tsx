import Search from '../Search/Search.tsx';
import { useFetch } from '../../hooks/useFetch.ts';
import { getCategories } from '../../api/newsApi.ts';
import Categories from '../Categories/Categories.tsx';
import Slider from '../Slider/Slider.tsx';
import { CategoryApiResponse, IFilters } from '../../interfaces/index.ts';

import styles from './styles.module.css';

interface Props {
  filters: IFilters;
  changeFilter: (key: string, value: string | number | null) => void;
}

const NewsFilters = ({ filters, changeFilter }: Props) => {
  const { data: dataCategories } = useFetch<CategoryApiResponse, null>(getCategories);

  return (
    <div className={styles.filters}>
      {dataCategories ? (
        <Slider>
          <Categories
            categories={dataCategories.categories}
            selectedCategory={filters.category}
            setSelectedCategory={(category) => changeFilter('category', category)}
          />
        </Slider>
      ) : null}
      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) => changeFilter('keywords', keywords)}
      />
    </div>
  );
};

export default NewsFilters;
