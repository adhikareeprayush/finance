import { useState } from "react";
import Card from "../components/reusable/Card";

const tabs = [
  { id: 1, label: "Tab 1" },
  { id: 2, label: "Tab 2" },
  { id: 3, label: "Tab 3" },
];

const Insight = () => {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <div>
      <div className="flex items-center w-full gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`px-5 py-1 border-[1px] rounded-full text-neutral-600 border-neutral-200 dark:border-neutral-700 ${
              activeTab === tab.id
                ? "dark:bg-neutral-700 bg-neutral-100 dark:text-neutral-100"
                : "bg-transparent"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-4 mt-4">
        <Card />
      </div>
    </div>
  );
};

export default Insight;
