import React, { ForwardedRef } from 'react';
import { CategoryType } from '../../../../entities/category';
import styles from './styles.module.css';

interface Props {
  categories: CategoryType[];
  selectedCategory: CategoryType | null;
  setSelectedCategory: (category: CategoryType | null) => void;
}

const Categories = React.forwardRef(
  (
    { categories, selectedCategory, setSelectedCategory }: Props,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <div className={styles.categories} ref={ref}>
        <button
          className={!selectedCategory ? styles.active : styles.item}
          onClick={() => setSelectedCategory(null)}
        >
          ALL
        </button>
        {categories?.map((category) => (
          <button
            className={selectedCategory === category ? styles.active : styles.item}
            key={category}
            onClick={() => setSelectedCategory(category)}
          >
            {category}{' '}
          </button>
        ))}
      </div>
    );
  },
);

Categories.displayName = 'Categories';

export default Categories;
