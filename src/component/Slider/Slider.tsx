import React from 'react';
import styles from './styles.module.css';

interface Props {
  children: React.ReactElement;
  step?: number;
}

const Slider = ({ children, step = 200 }: Props) => {
  const sliderRef = React.useRef<HTMLElement | null>(null);

  const scrollLeft = () => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollLeft -= step;
  };
  const scrollRight = () => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollLeft += step;
  };

  return (
    <div className={styles.slider}>
      <button className={styles.arrow} onClick={scrollLeft}>
        &lt;
      </button>
      {React.cloneElement(children, { ref: sliderRef } as React.HTMLAttributes<
        React.RefObject<HTMLElement>
      >)}
      <button className={styles.arrow} onClick={scrollRight}>
        &gt;
      </button>
    </div>
  );
};

export default Slider;
