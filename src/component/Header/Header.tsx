import { useTheme } from '../../context/ThemeContext.tsx';
import { formatDate } from '../../utils/formatDate.ts';
import { icon } from '../../assets/themes.ts';

import styles from './styles.module.css';

const Header = () => {
  const { isDark, toggleTheme } = useTheme();
  return (
    <header className={`${styles.header} ${isDark ? styles.dark : styles.light}`}>
      <div className={styles.info}>
        <h1 className={styles.headerMain}>VP News</h1>
        <p className={styles.headerDate}>{formatDate(new Date())}</p>
      </div>
      <img src={icon.iconThemes} alt="THEME" width={40} onClick={toggleTheme} />
    </header>
  );
};

export default Header;
