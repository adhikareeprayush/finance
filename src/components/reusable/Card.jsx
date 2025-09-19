import { Link } from "react-router-dom";
import { useState } from "react";

const Card = ({ company, expand }) => {
  // optional local state if you want toggle animation on click
  const [isExpanded, setIsExpanded] = useState(expand);

  return (
    <Link
      to={`/dashboard/insight/${company.symbol}`}
      className="rounded-2xl bg-neutral-100 dark:bg-neutral-800 py-3 px-4 flex flex-col gap-2 cursor-pointer"
      onClick={(e) => {
        // prevent navigation if you want to toggle expansion locally
        // e.preventDefault();
        // setIsExpanded(!isExpanded);
      }}
    >
      <div className="flex items-center gap-2">
        <img
          src={company.logo}
          alt={company.name}
          className="size-12 rounded-full"
        />
        <div className="flex flex-col justify-between flex-1">
          <div className="flex flex-col">
            <h5 className="font-semibold text-neutral-600 dark:text-neutral-200 uppercase">
              {company.symbol}
            </h5>
            <p className="text-sm text-neutral-400">{company.name}</p>
          </div>
          <p className="text-sm text-neutral-400">
            Market Cap: {company.marketCap || "N/A"}
          </p>
        </div>
        <div className="flex flex-col items-end">
          <p className="font-semibold dark:text-neutral-200 text-neutral-600">
            {company.price || "$0.00"}
          </p>
          <p
            className={`text-sm text-center w-fit mx-auto px-2 py-1 rounded-lg ${
              company.changePercent && company.changePercent.startsWith("-")
                ? "bg-red-500/50 text-red-100"
                : "bg-primary/50 text-white"
            }`}
          >
            {company.changePercent || "0.00%"}
          </p>
        </div>
      </div>

      {/* Animated expansion */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          expand ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0 mt-0"
        } border-t-[1px] w-full border-neutral-700`}
      >
        <div className="py-2">
          <p className="font-semibold text-neutral-200 text-center w-full">
            Performance
          </p>
          <div className="grid grid-cols-3 gap-3 mt-2">
            {company.changePercentages.map((change, index) => (
              <div className="flex items-center justify-center" key={index}>
                <p
                  className={`text-sm text-center w-fit mx-auto px-2 py-1 rounded-lg ${
                    change && change.startsWith("-")
                      ? "bg-red-500/50 text-red-100"
                      : "bg-primary/50 text-white"
                  }`}
                >
                  {index === 0 ? "1M: " : index === 1 ? "6M: " : "1Y: "}
                  {change || "0.00%"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
