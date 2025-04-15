import React from 'react';
import styles from './styles.module.css';
import { formatTimeAgo } from '../../utils/formatTimeAgo';
import Image from '../Image/Image';

const NewsBanner = ({ newsItem }) => {
  return (
    <div className={styles.banner}>
      <Image image={newsItem?.image} />
      <h3 className={styles.title}>{newsItem?.title}</h3>
      <p className={styles?.date}>
        {formatTimeAgo(newsItem?.published)} by {newsItem?.author}
      </p>{' '}
    </div>
  );
};

export default NewsBanner;
