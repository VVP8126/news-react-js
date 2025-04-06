import React from 'react';
import styles from './styles.module.css';
import { formatDate } from '../../utils/formatDate';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerMain}>VP News</div>
      <p className={styles.headerDate}>{formatDate(new Date())}</p>
    </header>
  );
};

export default Header;
