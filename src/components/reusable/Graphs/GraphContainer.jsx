import { useState } from "react";
import Graph from "./Graph";

const tabs = [
  { id: 1, label: "Quarterly", key: "Quaterly" },
  { id: 2, label: "Quarterly TTM", key: "TTM" },
  { id: 3, label: "Yearly", key: "Yearly" },
];

// sampleData should be imported from your data.json
import sampleData from "../../../data.json";

const GraphContainer = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const activeTabData = tabs.find((tab) => tab.id === activeTab);
  const metricsData = sampleData[activeTabData.key] || {};

  // Filter out nested objects like revenueBySegment or ratios if you want only main metrics
  const filteredMetrics = Object.keys(metricsData).filter(
    (key) => typeof metricsData[key] === "object" && !key.includes("By")
  );

  return (
    <div className="flex flex-col gap-4">
      {/* Tabs */}
      <div className="flex items-center gap-2 border-[1px] border-neutral-200 dark:border-neutral-700 rounded-lg p-2 w-fit">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:text-neutral-300 ${
              activeTab === tab.id ? "bg-neutral-100 dark:bg-neutral-800" : ""
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Graphs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMetrics.map((metric) => {
          const dataObj = metricsData[metric];
          const categories = Object.keys(dataObj);
          const data = Object.values(dataObj);

          return (
            <Graph
              key={metric}
              type="line"
              data={data}
              categories={categories}
              seriesName={metric}
            />
          );
        })}
      </div>
    </div>
  );
};

export default GraphContainer;
