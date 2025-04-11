import React from 'react';
import NewsBanner from '../../component/NewsBanner/NewsBanner';
import { getCategories, getNews } from '../../api/newsApi';
import NewsList from '../../component/NewsList/NewsList';
import Skeleton from '../../component/Skeleton/Skeleton';
import styles from './styles.module.css';
import Pagination from '../../component/Pagination/Pagination';
import Categories from '../../component/Categories/Categories';
import Search from '../../component/Search/Search';
import { useDebounce } from '../../hooks/useDebounce';

const Main = () => {
  const [news, setNews] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  const [currentPage, setCurrentPage] = React.useState(1);
  const [categories, setCategories] = React.useState([]);
  const [keywords, setKeywords] = React.useState('');

  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const totalPages = 10;
  const pageSize = 10;
  const debounced = useDebounce(keywords, 2000);

  const fetchNews = async (currentPage) => {
    try {
      setIsLoading(true);
      const response = await getNews({
        page_number: currentPage,
        page_size: pageSize,
        category: selectedCategory === 'All' ? null : selectedCategory,
        keywords: debounced,
      });
      setNews(response.news);
      setError(null);
    } catch (error) {
      console.log(error);
      setError(
        'Error while loading data from ' +
          import.meta.env.VITE_NEWS_BASE_API_URL +
          '. ' +
          error.message,
      );
    } finally {
      setIsLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await getCategories();
      setCategories(['All', ...response.categories]);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    fetchCategories();
  }, []);

  React.useEffect(() => {
    fetchNews(currentPage);
  }, [currentPage, selectedCategory, debounced]);

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
      <Categories
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <Search keywords={keywords} setKeywords={setKeywords} />
      {error !== null ? (
        <h3>{JSON.stringify(error)}</h3>
      ) : (
        <>
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
        </>
      )}
    </main>
  );
};

export default Main;
/**
 * { author: "Tyler Durden", category: ['business', 'finance'], description: "New UK Internet Policing Law Targets US Online Forums\nAuthored by Owen Evans via The Epoch Times,\nOnline forums based in the United States that rely on First Amendment protections are getting caught up in internet regulations in the UK, where they now risk being blocked under recent legislation.\n\nHa...", id: "4d17f747-4432-4a7a-b195-fbd1e1dededc", image: "None", language: "en", published: "2025-04-05 13:20:00 +0000", title: "New UK Internet Policing Law Targets US Online Forums", url: "https://www.zerohedge.com/political/new-uk-internet-policing-law-targets-us-online-forums" }
 * { author: "SeekingAlpha.com", category: ['business', 'finance'], description: "Apple Inc. (NASDAQ: AAPL ) is a $3.4 trillion luxury gadget company, with one of the most well-known and desirable brands in the tech space and a phenomenal ecosystem of products. With its innovation-...", id: "f902b341-f093-4c81-9490-2e8aeda7dae6", image: "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1284113908/image_1284113908.jpg?io=getty-c-w1536", language: "en", published: "2025-04-05 08:43:19 +0000", title: "Apple's Downward Spiral: A Crisis It Can't Escape", url: "https://seekingalpha.com/article/4773161-apple-a-crisis-it-cant-escape?source=feed_all_articles" }
 * { author: "Tyler Durden", category: ['business', 'finance'], description: "Your Discomfort Means It's Working\nSubmitted by QTR's Fringe Finance\nIt has been one whole day since President Trump implemented his tariff agenda.\nWith the amount of squirming and outright panic in the news media, markets, and on social media, you'd think we were 50 years into a 100-year bout of fa...", id: "31364030-f3cc-4827-a805-3ec63370f460", image: "None", language: "en", published: "2025-04-05 01:45:00 +0000", title: "Your Discomfort Means It's Working", url: "https://www.zerohedge.com/markets/your-discomfort-means-its-working" }
 * { author: "Erika Beras", category: ['economy', 'business'], description: "Ever wondered why you can buy fresh Peruvian blueberries in the dead of winter? The answer, surprisingly, is tied to cocaine. Today on the show, we look at how the war on drugs led to an American trade policy and a foreign aid initiative that won us blueberries all year round. And for more on trade ...", id: "8d3ebccc-8059-4a72-83f0-ee472dc0d115", image: "None", language: "en", published: "2025-04-04 22:52:10 +0000", title: "How the War on Drugs got us... blueberries", url: "https://www.npr.org/2025/04/04/1242780124/blueberries-asparagus-cocaine-foreign-aid-usaid-war-on-drugs-peru-free-trade" }
 * { author: "SeekingAlpha.com", category: ['business', 'finance'], description: "Oliver Rodzianko is an accomplished investment analyst grounded in timeless value principles, specializing in the technology sector with expertise in AI, semiconductors, software, and renewable energy...", id: "a40ad5f2-d9b5-47d9-8213-e2bd2213137c", image: "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/2208191166/image_2208191166.jpg?io=getty-c-w1536", language: "de", published: "2025-04-04 20:31:11 +0000", title: "Trump's Liberation Day Tariffs Will Likely Change Apple Forever", url: "https://seekingalpha.com/article/4773102-trump-liberation-day-tariffs-likely-change-apple-forever?source=feed_all_articles" }
 * { author: "Max Molter", category: ['business', 'finance'], description: "Markets crashed yesterday due to President Trump's tariff announcement . Apple Inc. ( NASDAQ:AAPL ) (TSX: AAPL:CA ) dropped by more than 9% on the same day, marking its worst day since the Corona Cras...", id: "4a509043-8453-4f3e-b9ab-d4366c521bc2", image: "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1767160835/image_1767160835.jpg?io=getty-c-w1536", language: "en", published: "2025-04-04 14:28:27 +0000", title: "Apple (AAPL) Just Had Its Worst Day Since 2020: The Stock Is Still Expensive", url: "https://seekingalpha.com/article/4773022-apple-just-had-its-worst-day-since-2020-stock-still-expensive?source=feed_all_articles" }
 * { author: "Danil Sereda", category: ['business', 'finance'], description: "I've been covering Apple Inc. (NASDAQ: AAPL ) stock here on Seeking Alpha since December 2021, starting off with a \"Hold,\" then downgrading it to \"Sell,\" and eventually reverting back to \"Hold\" by mid...", id: "f0804de8-3794-42bb-a205-fa680f2cc575", image: "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/91825529/image_91825529.jpg?io=getty-c-w1536", language: "en", published: "2025-04-04 13:52:12 +0000", title: "Apple's Heavy Dip Was Well Deserved (AAPL)", url: "https://seekingalpha.com/article/4773011-apple-aapl-stock-heavy-dip-was-well-deserved?source=feed_all_articles" }
 * { author: "Wall Street Breakfast", category: ['business', 'finance'], description: "franckreporter\n\nListen below or on the go on Apple Podcasts and Spotify\n\nWall Street's gloom expected to persist (0:28), crude oil futures plunge (2:35) and Amazon rolls out new feature (4:15).\n\nTrans...", id: "71929d67-f564-4b3c-8326-b548cee828ee", image: "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1356756815/image_1356756815.jpg?io=getty-c-w1536", language: "en", published: "2025-04-04 11:07:00 +0000", title: "Wall Street Breakfast Podcast: Market Gloom Persists", url: "https://seekingalpha.com/article/4772988-wall-street-breakfast-podcast-market-gloom-persists?source=feed_tag_wall_st_breakfast" }
 * { author: "Blue Chip Portfolios", category: ['business', 'finance', 'general'], description: "Apple has come under pressure amid fears of tariff impacts, which are likely to be less significant than market expectations. See why AAPL stock is a Buy.", id: "7043e302-56ca-4f55-8d4a-fd06f83a9001", image: "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/458990823/image_458990823.jpg?io=getty-c-w1536", language: "en", published: "2025-04-04 05:23:41 +0000", title: "Apple: 6 Reasons To Consider Buying Amid Tariff Uncertainty", url: "https://seekingalpha.com/article/4772930-apple-stock-6-reasons-to-consider-buying-amid-tariff-uncertainty?source=feed" }
 * { author: "Scott Rosenberg, Ina Fried", category: ['business'], description: "Apple's leaders, customers and fans are all holding their breath to see whether Trump's gigantic new tariffs will hamstring the iPhone maker. Why it …", id: "c828d0c9-2a00-457c-bf99-9d1ff9849c26", image: "None", language: "en", published: "2025-04-03 20:51:38 +0000", title: "Trump tariffs shake foundations of Apple's iPhone empire", url: "https://www.axios.com/2025/04/03/trump-tariffs-apple-iphone" }
 */
