import React from 'react';
import styles from './styles.module.css';
import BannerList from '../BannerList/BannerList';

const LatestNews = ({ banners, isLoading }) => {
  return (
    <section className={styles.section}>
      <BannerList banners={banners} isLoading={isLoading} />
    </section>
  );
};

export default LatestNews;
