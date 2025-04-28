import BannerList from '../BannerList/BannerList';
import styles from './styles.module.css';
import { useGetLatestNewsQuery } from '../../store/services/newsApi.ts';

const LatestNews = () => {
  const { data, isLoading } = useGetLatestNewsQuery(null);

  return (
    <section className={styles.section}>
      <BannerList banners={data && data?.news} isLoading={isLoading} />
    </section>
  );
};

export default LatestNews;
