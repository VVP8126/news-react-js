import React from 'react';
import Search from '../Search/Search';
import styles from './styles.module.css';
import { useFetch } from '../../hooks/useFetch';
import { getCategories } from '../../api/newsApi';
import Categories from '../Categories/Categories';
import Slider from '../Slider/Slider';

const NewsFilters = ({ filters, changeFilter }) => {
  const { data: dataCategories } = useFetch(getCategories);

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
