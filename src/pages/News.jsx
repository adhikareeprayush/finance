import { useEffect, useState } from "react";
import { getNews } from "../lib/news/news";
import NewsCard from "../components/reusable/NewsCard";
const News = () => {
  const [news, setNews] = useState();
  const fetchNews = async () => {
    try {
      const newsData = await getNews();
      setNews(newsData);
      console.log("Fetched news data:", newsData);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
      {news ? (
        news.map((article, index) => <NewsCard key={index} news={article} />)
      ) : (
        <p>Loading news...</p>
      )}
    </div>
  );
};

export default News;
