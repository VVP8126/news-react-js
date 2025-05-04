import { useAppSelector } from '../../../../app/appStore';
import { NewsDetails } from '../../../../entities/news';
import styles from './styles.module.css';

const NewsPage = () => {
  const currentNewsItem = useAppSelector((state) => state.news.currentNewsItem);
  if (!currentNewsItem) {
    return <h2 className={styles.nothingFound}>Nothing found</h2>;
  }
  return (
    <div className={styles.news}>
      <NewsDetails itemNews={currentNewsItem} />
    </div>
  );
};

export default NewsPage;
