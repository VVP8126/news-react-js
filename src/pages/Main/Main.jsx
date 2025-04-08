import React from 'react';
import NewsBanner from '../../component/NewsBanner/NewsBanner';
import { getNews } from '../../api/newsApi';
import NewsList from '../../component/NewsList/NewsList';
import Skeleton from '../../component/Skeleton/Skeleton';
import styles from './styles.module.css';
import Pagination from '../../component/Pagination/Pagination';

const Main = () => {
  const [news, setNews] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [currentPage, setCurrentPage] = React.useState(1);
  const totalPages = 10;
  const pageSize = 10;

  const fetchNews = async (currentPage) => {
    try {
      setIsLoading(true);
      const response = await getNews(currentPage, pageSize);
      setNews(response.news);
      console.log(response);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    fetchNews(currentPage);
  }, [currentPage]);

  const handlePrevPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handlePageNumber = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <main className={styles.main}>
      {news.length > 0 && !isLoading ? <NewsBanner newsItem={news[0]} /> : <Skeleton />}
      <Pagination
        handlePageNumber={handlePageNumber}
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
        totalPages={totalPages}
        currentPage={currentPage}
      />
      {!isLoading ? <NewsList news={news} /> : <Skeleton count={10} type="item" />}
      <Pagination
        handlePageNumber={handlePageNumber}
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
        totalPages={totalPages}
        currentPage={currentPage}
      />
    </main>
  );
};

export default Main;

/** 
 * setNews([
          {
            author: 'The Associated Press',
            category: (2)[('television', 'entertainment')],
            description:
              "Jay North, who starred as the towheaded mischief maker on TV's Dennis the Menace for four seasons starting in 1959, has died. He was 73.(Image credit: Anonymous)...",
            id: 'f913447a-4c7e-4f39-9213-a9cb261d29f6',
            image:
              'https://npr.brightspotcdn.com/dims3/default/strip/false/crop/3000x1688+0+281/resize/1400/quality/100/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Fc0%2F21%2F67e7d316472785b3d30ee3d21160%2Fap25096840438507.jpg',
            language: 'en',
            published: '2025-04-07 05:55:49 +0000',
            title: "Jay North, TV's mischievous 'Dennis the Menace,' dies at 73",
            url: 'https://www.npr.org/2025/04/07/nx-s1-5354697/jay-north-dennis-menace-dead',
          },
          {
            author: 'Luke Broadwater',
            category: ['politics'],
            description:
              'Before President Barack Obama was sworn into office in 2009, Benjamin Netanyahu called the Israeli diplomat Alon Pinkas out of the blue and asked for a lesson in what was essentially a foreign tongue:...',
            id: 'd7130a81-1408-46d0-b326-e81e6ba14c28',
            image:
              'https://static01.nyt.com/images/2025/03/21/multimedia/00dc-netanyahu-trump-zfmj/00dc-netanyahu-trump-zfmj-facebookJumbo.jpg',
            language: 'en',
            published: '2025-04-07 04:01:06 +0000',
            title: 'As Netanyahu Heads to Washington, Trump Is Already a Close Ally',
            url: 'https://www.nytimes.com/2025/04/07/us/politics/netanyahu-trump-israel-gaza.html',
          },
          {
            author: 'Frances Martel',
            category: ['politics'],
            description:
              'Iranian Minister of Foreign Affairs Abbas Araghchi rejected the possibility of direct talks between Iran and the United States in the foreseeable future in remarks on Sunday — adding that, while Tehra...',
            id: 'f8a8a155-99ea-488b-b90d-64891b379a38',
            image:
              'https://media.breitbart.com/media/2025/04/3-25-25-Iran-Foreign-Minister-Abbas-Araghchi-getty-640x335.jpg',
            language: 'en',
            published: '2025-04-07 03:58:11 +0000',
            title: "Iran Insists Only on 'Indirect' Talks with U.S. -- Says None Have Happened Yet",
            url: 'https://www.breitbart.com/middle-east/2025/04/06/iran-insists-indirect-talks-u-s-none-happened-yet/',
          },
          {
            author: 'Fred Imbert',
            category: ['investment'],
            description:
              'Traders work on the floor at the New York Stock Exchange in New York City, U.S., April 4, 2025. Brendan McDermid | Reuters\n\nWhen stock prices and stock futures fall rapidly in a single session, exchan...',
            id: 'b9e9e97e-5de8-4355-b95b-239593a990c2',
            image:
              'https://image.cnbcfm.com/api/v1/image/108127050-17437996212025-04-04t204337z_1652419587_rc28rdaoj551_rtrmadp_0_usa-stocks.jpeg?v=1743799733&w=1920&h=1080',
            language: 'en',
            published: '2025-04-07 03:04:13 +0000',
            title:
              "How much do stocks have to drop before trading is halted? The details on market 'circuit breakers'",
            url: 'https://www.cnbc.com/2025/04/06/sp-500-circuit-breaker-on-tariff-worries-what-that-means.html',
          },
        ]);
 * 
*/
