import { formatDate } from '../../utils/formatDate.ts';

import styles from './styles.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerMain}>VP News</div>
      <p className={styles.headerDate}>{formatDate(new Date())}</p>
    </header>
  );
};

export default Header;
