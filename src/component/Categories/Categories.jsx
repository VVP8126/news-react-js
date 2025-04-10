import React from 'react';
import styles from './styles.module.css';

const Categories = ({ categories, selectedCategory, setSelectedCategory }) => {
  console.log(categories);

  return (
    <div className={styles.categories}>
      {categories.map((category) => (
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
