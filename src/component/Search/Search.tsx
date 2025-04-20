import React from 'react';

import styles from './styles.module.css';

interface Props {
  keywords: string;
  setKeywords: (keywords: string) => void;
}

const Search = ({ keywords, setKeywords }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
