import { useNavigate } from 'react-router';
import { useAppDispatch } from '../../../../app/appStore.tsx';
import { useGetLatestNewsQuery } from '../../../../entities/news/api/newsApi.ts';
import { INEWS } from '../../../../entities/news/index.ts';
import { setCurrentNewsItem } from '../../../../entities/news/model/newsSlice.ts';
import { NewsList } from '../../../../widgets/news/index.ts';

import styles from './styles.module.css';

const LatestNews = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { data, isLoading } = useGetLatestNewsQuery(null);

  const navigateTo = (newsItem: INEWS) => {
    dispatch(setCurrentNewsItem(newsItem));
    navigate(`/news/${newsItem.id}`);
  };

  return (
    <section className={styles.section}>
      <NewsList
        news={data && data?.news}
        direction="row"
        type="banner"
        isLoading={isLoading}
        viewNewsSlot={(newsItem: INEWS) => <p onClick={() => navigateTo(newsItem)}>Details...</p>}
      />
    </section>
  );
};

export default LatestNews;
