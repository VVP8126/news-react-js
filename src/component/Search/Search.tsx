import React from 'react';

import styles from './styles.module.css';
import { useTheme } from '../../context/ThemeContext';

interface Props {
  keywords: string;
  setKeywords: (keywords: string) => void;
}

const Search = ({ keywords, setKeywords }: Props) => {
  const { isDark } = useTheme();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeywords(e.target.value);
  };

  return (
    <div className={`${styles.search} ${isDark ? styles.dark : styles.light}`}>
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
