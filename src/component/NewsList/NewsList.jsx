import React from 'react';
import styles from './styles.module.css';
import NewsItem from '../NewsItem/NewsItem';

const NewsList = ({ news }) => {
  return (
    <ul className={styles.list}>
      {news.map((newsItem) => (
        <NewsItem key={newsItem.id} item={newsItem} />
      ))}
    </ul>
  );
};

export default NewsList;
