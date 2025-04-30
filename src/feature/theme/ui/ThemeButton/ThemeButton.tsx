import { useTheme } from '../../../../app/providers/ThemeProvider';
import { icon } from '../../../../shared/assets/themes';
import styles from './styles.module.css';

const ThemeButton = () => {
  const { toggleTheme } = useTheme();
  return (
    <img
      src={icon.iconThemes}
      alt="THEME"
      width={40}
      className={styles.headerImg}
      onClick={toggleTheme}
    />
  );
};
export default ThemeButton;
