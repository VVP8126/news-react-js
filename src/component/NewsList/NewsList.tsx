import NewsItem from '../NewsItem/NewsItem';
import withSkeleton from '../../hocs/withSkeleton.tsx';
import { INEWS } from '../../interfaces/index.ts';

import styles from './styles.module.css';

interface Props {
  news?: INEWS[];
}

const NewsList = ({ news }: Props) => {
  return (
    <ul className={styles.list}>
      {news?.map((newsItem) => (
        <NewsItem key={newsItem.id} item={newsItem} />
      ))}
    </ul>
  );
};

const NewsListWithSkeleton = withSkeleton<Props>(NewsList, 'item', 10);

export default NewsListWithSkeleton;
