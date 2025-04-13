import React from 'react';
import styles from './styles.module.css';
import NewsItem from '../NewsItem/NewsItem';
import withSkeleton from '../../hocs/withSkeleton';

const NewsList = ({ news }) => {
  return (
    <ul className={styles.list}>
      {news.map((newsItem) => (
        <NewsItem key={newsItem.id} item={newsItem} />
      ))}
    </ul>
  );
};

const NewsListWithSkeleton = withSkeleton(NewsList, 'item', 10);

export default NewsListWithSkeleton;
