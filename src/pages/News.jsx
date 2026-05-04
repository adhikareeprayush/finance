import NewsCard from "../components/reusable/NewsCard";
import { MOCK_NEWS } from "../mock/fixtures";

const News = () => (
  <div className="flex flex-col gap-6">
    <div>
      <h1 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100">
        Market news
      </h1>
      <p className="text-neutral-500 dark:text-neutral-400 mt-1">
        Bundled articles with imagery — opens publisher sites in a new tab.
      </p>
    </div>
    <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
      {MOCK_NEWS.map((article, index) => (
        <NewsCard key={`${article.headline}-${index}`} news={article} />
      ))}
    </div>
  </div>
);

export default News;
