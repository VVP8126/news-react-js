import React from 'react';
import styles from './styles.module.css';

const Categories = React.forwardRef(
  ({ categories, selectedCategory, setSelectedCategory }, ref) => {
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
