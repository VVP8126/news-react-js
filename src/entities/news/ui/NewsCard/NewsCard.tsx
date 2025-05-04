import { formatTimeAgo } from '../../../../shared/utils/formatTimeAgo.ts';
import { INEWS } from '../../index.ts';
import stub from '../../../../shared/assets/news/newsStub.svg';

import styles from './styles.module.css';
import Image from '../../../../shared/ui/Image/Image.tsx';
import { ReactNode } from 'react';

interface Props {
  item: INEWS;
  type: 'banner' | 'item';
  viewNewsSlot?: (news: INEWS) => ReactNode;
}

const NewsCard = ({ item, type = 'item', viewNewsSlot }: Props) => {
  return (
    <li className={`${styles.card} ${type === 'banner' && styles.banner}`}>
      {type === 'banner' ? (
        <Image image={item?.image} />
      ) : (
        <div
          className={styles.wrapper}
          style={
            item.image && item.image !== 'None'
              ? { backgroundImage: `url(${item.image})` }
              : { backgroundImage: `url(${stub})` }
          }
        ></div>
      )}
      <div className={styles.info}>
        <h3 className={styles.title}>{item.title}</h3>
        <p className={styles.date}>
          {formatTimeAgo(item.published)} by {item.author}
        </p>
      </div>
      {viewNewsSlot ? viewNewsSlot(item) : null}
    </li>
  );
};

export default NewsCard;
