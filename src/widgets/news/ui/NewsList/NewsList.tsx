import { INEWS, NewsCard } from '../../../../entities/news/index.ts';
import withSkeleton from '../../../../shared/hocs/withSkeleton.tsx';
import styles from './styles.module.css';

interface Props {
  news?: INEWS[];
  type?: 'banner' | 'item';
  direction?: 'row' | 'column';
}

const NewsList = ({ news, type = 'item' }: Props) => {
  return (
    <ul className={type === 'item' ? styles.items : styles.banners}>
      {news?.map((newsItem) => (
        <NewsCard key={newsItem.id} item={newsItem} type={type} />
      ))}
    </ul>
  );
};

const NewsListWithSkeleton = withSkeleton<Props>(NewsList, 10);

export default NewsListWithSkeleton;
