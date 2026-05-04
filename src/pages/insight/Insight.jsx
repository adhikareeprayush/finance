import { useMemo, useState } from "react";
import Card from "../../components/reusable/Card";
import { useSidebar } from "../../providers/SidebarProvider";
import { BsArrowsAngleExpand, BsArrowsAngleContract } from "react-icons/bs";
import { MOCK_COMPANIES, MOCK_SECTORS } from "../../mock/fixtures";

const Insight = () => {
  const { isCollapsed } = useSidebar();
  const [activeTab, setActiveTab] = useState(1);
  const [expandCard, setExpandCard] = useState(false);

  const tabs = useMemo(
    () =>
      MOCK_SECTORS.map((sector, index) => ({
        id: index + 1,
        label: sector,
      })),
    []
  );

  const activeSector = tabs.find((t) => t.id === activeTab)?.label;

  const filteredCompanies = MOCK_COMPANIES.filter(
    (company) => company.sector === activeSector
  );

  return (
    <div>
      <div className="relative h-36 rounded-xl overflow-hidden mb-6">
        <img
          src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=1400&q=80"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex flex-col justify-center px-6">
          <h1 className="text-xl md:text-2xl font-bold text-white drop-shadow">
            Market insights
          </h1>
          <p className="text-white/85 text-sm mt-1 max-w-lg">
            Explore mock quotes by sector — every ticker links to charts powered by bundled quarterly data.
          </p>
        </div>
      </div>
      <div className="flex items-center w-full gap-2 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
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
        <button
          type="button"
          className="ml-auto p-2 border-[1px] rounded-full text-neutral-600 border-neutral-200 dark:border-neutral-700 bg-transparent"
          onClick={() => setExpandCard((prev) => !prev)}
        >
          {expandCard ? <BsArrowsAngleContract /> : <BsArrowsAngleExpand />}
        </button>
      </div>
      <div
        className={`grid gap-4 mt-4 ${
          isCollapsed ? "grid-cols-4" : "grid-cols-3"
        }`}
      >
        {filteredCompanies.map((company) => (
          <Card key={company.id} company={company} expand={expandCard} />
        ))}
      </div>
    </div>
  );
};

export default Insight;
