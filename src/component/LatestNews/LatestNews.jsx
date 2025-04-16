import React from 'react';
import styles from './styles.module.css';
import BannerList from '../BannerList/BannerList';
import { useFetch } from '../../hooks/useFetch';
import { getLatestNews } from '../../api/newsApi';

const LatestNews = () => {
  const { data, isLoading } = useFetch(getLatestNews);

  return (
    <section className={styles.section}>
      <BannerList banners={data && data?.news} isLoading={isLoading} />
    </section>
  );
};

export default LatestNews;
