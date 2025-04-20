import { formatTimeAgo } from '../../utils/formatTimeAgo.ts';
import Image from '../Image/Image';
import { INEWS } from '../../interfaces';

import styles from './styles.module.css';

interface Props {
  newsItem: INEWS;
}

const NewsBanner = ({ newsItem }: Props) => {
  return (
    <div className={styles.banner}>
      <Image image={newsItem?.image} />
      <h3 className={styles.title}>{newsItem?.title}</h3>
      <p className={styles?.date}>
        {formatTimeAgo(newsItem?.published)} by {newsItem?.author}
      </p>{' '}
    </div>
  );
};

export default NewsBanner;
