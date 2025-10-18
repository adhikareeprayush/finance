import { Link } from "react-router-dom";

const symbolStyles = [
  {
    color: "text-green-500",
    bgColor: "bg-green-100/10",
  },
  {
    color: "text-red-500",
    bgColor: "bg-red-100/10",
  },
  {
    color: "text-yellow-500",
    bgColor: "bg-yellow-100/10",
  },
  {
    color: "text-purple-500",
    bgColor: "bg-purple-100/10",
  },
];

const NewsCard = ({ news }) => {
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options);
  };

  return (
    <Link
      to={`${news.url}`}
      className="flex items-start dark:bg-dark border-gray-200 shadow-xs dark:border-black/80 border-[1px] flex-col dark:text-white bg-white/40 rounded-b-lg gap-2"
    >
      <img
        src={news.image}
        className="h-[150px] w-full object-cover brightness-75"
        alt=""
      />
      <div className="flex item-start px-3 pb-2 flex-col gap-2  justify-between h-full bg-red">
        <div className="flex flex-col">
          <h5 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
            {news.headline}
          </h5>
          <p className="opacity-80 line-clamp-3 text-sm">{news.summary}</p>
        </div>
        <div className="flex flex-col w-full mt-2">
          <div className="flex items-center w-full justify-between">
            <span className="text-xs">{formatDate(news.publishedAt)}</span>
            <span className="text-neutral-500 text-xs italic">
              Source: {news.source}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;
