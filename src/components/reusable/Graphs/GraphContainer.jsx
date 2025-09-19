import { useState } from "react";
import Graph from "./Graph";

const tabs = [
  { id: 1, label: "Quarterly", key: "Quaterly" }, // Note: "Quaterly" matches your data key
  { id: 2, label: "Quarterly TTM", key: "TTM" },
  { id: 3, label: "Yearly", key: "Yearly" },
];

// Import sampleData
import sampleData from "../../../data.json";

const GraphContainer = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const activeTabData = tabs.find((tab) => tab.id === activeTab);
  const metricsData = sampleData[activeTabData.key] || {};

  const getSeriesData = (dataObj, metricKey, categories) => {
    const keys = metricKey.split(".");
    if (keys.length === 1) {
      // Top-level metric like "Revenue"
      return categories.map((cat) => dataObj[keys[0]]?.[cat] ?? 0);
    } else if (keys.length === 2) {
      // Nested metric like "Ratios.grossMargin"
      const [parent, child] = keys;
      return categories.map((cat) => dataObj[parent]?.[cat]?.[child] ?? 0);
    }
    return categories.map(() => 0);
  };

  // Define metrics to display, including nested subfields
  const metricsConfig = [
    { key: "Price", label: "Stock Price (USD)", type: "area" },
    { key: "Revenue", label: "Revenue (USD)", type: "bar" },
    { key: "EBITA", label: "EBITA (USD)", type: "bar" },
    { key: "Net Income", label: "Net Income (USD)", type: "bar" },
    { key: "Free Cash Flow", label: "Free Cash Flow (USD)", type: "line" },
    { key: "EPS", label: "EPS (USD)", type: "line" },
    { key: "Shares Outstanding", label: "Shares Outstanding", type: "line" },
    {
      key: "Revenue By Segment",
      label: "Revenue By Segment (USD)",
      type: "bar",
      subfields: [
        "Gaming",
        "Data Center",
        "Professional Visualization",
        "Automotive",
        "OEM & Other",
      ],
    },
    { key: "Ratios.grossMargin", label: "Gross Margin (%)", type: "line" },
    {
      key: "Ratios.operatingMargin",
      label: "Operating Margin (%)",
      type: "line",
    },
    {
      key: "Ratios.netMargin",
      label: "Net Margin (%)",
      type: "radar",
    },
    { key: "Valuation.peRatio", label: "P/E Ratio", type: "heatmap" },
    {
      key: "Expenses.costOfRevenue",
      label: "Cost of Revenue (USD)",
      type: "area",
    },
  ];

  // Ensure categories are in chronological order
  const categories = [
    "2021-Q1",
    "2021-Q2",
    "2021-Q3",
    "2021-Q4",
    "2022-Q1",
    "2022-Q2",
    "2022-Q3",
    "2022-Q4",
    "2023-Q1",
    "2023-Q2",
  ];

  // Fallback for TTM and Yearly tabs
  if (!metricsData || Object.keys(metricsData).length === 0) {
    return (
      <div className="flex flex-col gap-4">
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
        <div>No data available for {activeTabData.label}</div>
      </div>
    );
  }

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
        {metricsConfig.map((metric) => {
          // Revenue By Segment: multiple series
          if (metric.key === "Revenue By Segment") {
            const dataObj = metricsData["Revenue By Segment"];
            const series = metric.subfields.map((subfield) => ({
              name: subfield,
              data: categories.map(
                (quarter) => dataObj?.[quarter]?.[subfield] ?? 0
              ),
            }));
            return (
              <Graph
                key={metric.key}
                type="bar"
                series={series}
                categories={categories}
                seriesName={metric.label}
              />
            );
          }

          // Other metrics (single-series)
          const seriesData = getSeriesData(metricsData, metric.key, categories);
          return (
            <Graph
              key={metric.key}
              type={metric.type}
              series={[{ name: metric.label, data: seriesData }]}
              categories={categories}
              seriesName={metric.label}
            />
          );
        })}
      </div>
    </div>
  );
};

export default GraphContainer;
