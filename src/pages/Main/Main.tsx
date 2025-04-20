import styles from './styles.module.css';
import LatestNews from '../../component/LatestNews/LatestNews';
import NewsByFilters from '../../component/NewsByFilters/NewsByFilters';

const Main = () => {
  return (
    <main className={styles.main}>
      <LatestNews />
      <NewsByFilters />
    </main>
  );
};

export default Main;
