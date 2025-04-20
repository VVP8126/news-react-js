import BannerList from '../BannerList/BannerList';
import { useFetch } from '../../hooks/useFetch.ts';
import { getLatestNews } from '../../api/newsApi';
import { NewsApiResponse } from '../../interfaces/index.ts';

import styles from './styles.module.css';

const LatestNews = () => {
  const { data, isLoading } = useFetch<NewsApiResponse, null>(getLatestNews);

  return (
    <section className={styles.section}>
      <BannerList banners={data && data?.news} isLoading={isLoading} />
    </section>
  );
};

export default LatestNews;
