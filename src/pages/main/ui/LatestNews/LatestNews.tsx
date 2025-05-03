import { useGetLatestNewsQuery } from '../../../../entities/news/api/newsApi.ts';
import { NewsList } from '../../../../widgets/news/index.ts';

import styles from './styles.module.css';

const LatestNews = () => {
  const { data, isLoading } = useGetLatestNewsQuery(null);

  return (
    <section className={styles.section}>
      <NewsList news={data && data?.news} direction="row" type="banner" isLoading={isLoading} />
    </section>
  );
};

export default LatestNews;
