import React from 'react';
import styles from './styles.module.css';

const Image = ({ image }) => {
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
