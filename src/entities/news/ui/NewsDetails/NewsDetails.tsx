import Image from '../../../../shared/ui/Image/Image';
import { formatParsedDate } from '../../../../shared/utils/formatParsedDate';
import { INEWS } from '../../model/types';
import styles from './styles.module.css';

interface Props {
  itemNews: INEWS;
}
const NewsDetails = ({ itemNews }: Props) => {
  return (
    <div>
      <Image image={itemNews.image} />
      <div>
        <h3>{itemNews.title}</h3>
        <div className={styles.language}>
          <span>Language:</span>
          <span>{itemNews.language}</span>
        </div>
        <h4>
          <i>By {itemNews.author}</i>
        </h4>
        <div className={styles.published}>
          <span>Published:</span>
          <span>{formatParsedDate(itemNews.published)}</span>
        </div>
        <div className={styles.itemCategories}>
          {itemNews.category.map((c, index) => (
            <span key={index}>{c}</span>
          ))}
        </div>
        <p className={styles.description}>{itemNews.description}</p>
        <a target="_blank" href={itemNews.url}>
          Show original
        </a>
      </div>
    </div>
  );
};

export default NewsDetails;
