import { useTheme } from '../../../../app/providers/ThemeProvider.tsx';
import { ThemeButton } from '../../../../feature/theme/index.ts';
import { formatDate } from '../../../../shared/utils/formatDate.ts';
import styles from './styles.module.css';

const Header = () => {
  const { isDark } = useTheme();
  return (
    <header className={`${styles.header} ${isDark ? styles.dark : styles.light}`}>
      <div className={styles.info}>
        <h1 className={styles.headerMain}>VP News</h1>
        <p className={styles.headerDate}>{formatDate(new Date())}</p>
      </div>
      <ThemeButton />
    </header>
  );
};

export default Header;
