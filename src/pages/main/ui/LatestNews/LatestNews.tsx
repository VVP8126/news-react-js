import { useGetLatestNewsQuery } from '../../../../entities/news/api/newsApi.ts';
import { BannerList } from '../../../../widgets/news/ui/index.ts';
import styles from './styles.module.css';

const LatestNews = () => {
  const { data, isLoading } = useGetLatestNewsQuery(null);

  return (
    <section className={styles.section}>
      <BannerList banners={data && data?.news} isLoading={isLoading} />
    </section>
  );
};

export default LatestNews;
