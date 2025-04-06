import React from 'react';
import styles from './styles.module.css';
import NewsBanner from '../../component/NewsBanner/NewsBanner';
import { getNews } from '../../api/newsApi';
import NewsList from '../../component/NewsList/NewsList';

const Main = () => {
  const [news, setNews] = React.useState([]);
  React.useEffect(() => {
    const fetchNews = async () => {
      const response = await getNews();
      setNews(response.news);
      console.log(response);
    };
    fetchNews();
  }, []);
  return (
    <main className={styles.main}>
      Main
      {news.length > 0 ? <NewsBanner newsItem={news[0]} /> : null}
      <NewsList news={news} />
    </main>
  );
};

export default Main;
