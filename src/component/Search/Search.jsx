import React from 'react';
import styles from './styles.module.css';

const Search = ({ keywords, setKeywords }) => {
  const handleChange = (e) => {
    setKeywords(e.target.value);
  };
  return (
    <div className={styles.search}>
      <input
        type="text"
        value={keywords}
        onChange={handleChange}
        className={styles.input}
        placeholder="Keywords"
      />
    </div>
  );
};

export default Search;
