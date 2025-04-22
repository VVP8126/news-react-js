import styles from './styles.module.css';

import { stubs } from '../../assets/imgStub';

interface Props {
  image: string;
}

const Image = ({ image }: Props) => {
  return (
    <div className={styles.imageBox}>
      {image && image !== 'None' ? (
        <img className={styles.image} src={image} alt="IMG" />
      ) : (
        <img className={styles.image} src={stubs.imgStub} alt="IMG" />
      )}
    </div>
  );
};

export default Image;
