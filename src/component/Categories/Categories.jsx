import React from 'react';
import styles from './styles.module.css';

const Categories = ({ categories, selectedCategory, setSelectedCategory }) => {
  return (
    <div className={styles.categories}>
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
};

export default Categories;
