import { formatTimeAgo } from '../../utils/formatTimeAgo.ts';
import { INEWS } from '../../interfaces';
import stub from './../../assets/news/newsStub.svg';

import styles from './styles.module.css';

interface Props {
  item: INEWS;
}

const NewsItem = ({ item }: Props) => {
  return (
    <li className={styles.item}>
      <div
        className={styles.wrapper}
        style={
          item.image && item.image !== 'None'
            ? { backgroundImage: `url(${item.image})` }
            : { backgroundImage: `url(${stub})` }
        }
      ></div>
      <div className={styles.info}>
        <h3 className={styles.title}>{item.title}</h3>
        <p className={styles.date}>
          {formatTimeAgo(item.published)} by {item.author}
        </p>
      </div>
    </li>
  );
};

export default NewsItem;
