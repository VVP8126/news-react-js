import styles from './styles.module.css';

interface Props {
  image: string;
}

const Image = ({ image }: Props) => {
  return (
    <div className={styles.imageBox}>
      {image ? (
        <img className={styles.image} src={image} alt="IMG" />
      ) : (
        <div className={styles.imageLbl}>NEWS</div>
      )}
    </div>
  );
};

export default Image;
