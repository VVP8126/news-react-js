import React from 'react';
import styles from './styles.module.css';

const Slider = ({ children, step = 200 }) => {
  const sliderRef = React.useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollLeft -= step;
  };
  const scrollRight = () => {
    sliderRef.current.scrollLeft += step;
  };

  return (
    <div className={styles.slider}>
      <button className={styles.arrow} onClick={scrollLeft}>
        &lt;
      </button>
      {
        // children
        React.cloneElement(children, { ref: sliderRef })
      }
      <button className={styles.arrow} onClick={scrollRight}>
        &gt;
      </button>
    </div>
  );
};

export default Slider;
