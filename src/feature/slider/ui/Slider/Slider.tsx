import React from 'react';
import styles from './styles.module.css';
import { useTheme } from '../../../../app/providers/ThemeProvider';

interface Props {
  children: React.ReactElement;
  step?: number;
}

const Slider = ({ children, step = 200 }: Props) => {
  const sliderRef = React.useRef<HTMLElement | null>(null);
  const { isDark } = useTheme();

  const scrollLeft = () => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollLeft -= step;
  };
  const scrollRight = () => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollLeft += step;
  };

  return (
    <div className={`${styles.slider} ${isDark ? styles.dark : styles.light}`}>
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
