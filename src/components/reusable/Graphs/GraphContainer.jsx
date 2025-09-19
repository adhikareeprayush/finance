import { useState } from "react";

const tabs = [
  { id: 1, label: "Quarterly" },
  { id: 2, label: "Quarterly TTM" },
  { id: 3, label: "Yearly" },
];

const GraphContainer = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2 border-[1px] border-neutral-200 dark:border-neutral-700 rounded-lg p-2 w-fit">
        {tabs.map((tab) => (
          <button
            onClick={() => setActiveTab(tab.id)}
            key={tab.id}
            className={`px-4 py-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:text-neutral-300 ${
              activeTab === tab.id ? "bg-neutral-100 dark:bg-neutral-800" : ""
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GraphContainer;
