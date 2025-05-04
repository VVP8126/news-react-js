import { ReactNode } from 'react';
import { INEWS, NewsCard } from '../../../../entities/news/index.ts';
import withSkeleton from '../../../../shared/hocs/withSkeleton.tsx';
import styles from './styles.module.css';

interface Props {
  news?: INEWS[];
  type?: 'banner' | 'item';
  direction?: 'row' | 'column';
  viewNewsSlot?: (news: INEWS) => ReactNode;
}

const NewsList = ({ news, type = 'item', viewNewsSlot }: Props) => {
  return (
    <ul className={type === 'item' ? styles.items : styles.banners}>
      {news?.map((newsItem) => (
        <NewsCard key={newsItem.id} item={newsItem} type={type} viewNewsSlot={viewNewsSlot} />
      ))}
    </ul>
  );
};

const NewsListWithSkeleton = withSkeleton<Props>(NewsList, 10);

export default NewsListWithSkeleton;
