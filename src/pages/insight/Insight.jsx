import { useEffect, useState } from "react";
import Card from "../../components/reusable/Card";
import { useSidebar } from "../../providers/SidebarProvider";
import { BsArrowsAngleExpand, BsArrowsAngleContract } from "react-icons/bs";
import { getCompanies } from "../../lib/companies/companies";

const mockCompaniesData = [
  {
    id: 1,
    name: "NVIDIA Corporation",
    symbol: "NVDA",
    logo: "https://logo.clearbit.com/nvidia.com",
    sector: "Technology",
    marketCap: "1.2T",
    price: "$450.00",
    changePercent: "+2.5%",
    changePercentages: [
      "+5.0%",
      "+15.0%",
      "+25.0%",
      "-10.0%",
      "+50.0%",
      "+100.0%",
    ],
  },
  {
    id: 2,
    name: "Apple Inc.",
    symbol: "AAPL",
    logo: "https://logo.clearbit.com/apple.com",
    sector: "Technology",
    marketCap: "2.5T",
    price: "$150.00",
    changePercent: "+1.2%",
    changePercentages: [
      "+3.0%",
      "+10.0%",
      "+20.0%",
      "-5.0%",
      "+25.0%",
      "+50.0%",
    ],
  },
  {
    id: 3,
    name: "JPMorgan Chase & Co.",
    symbol: "JPM",
    logo: "https://logo.clearbit.com/jpmorganchase.com",
    sector: "Finance",
    marketCap: "500B",
    price: "$150.00",
    changePercent: "-1.5%",
    changePercentages: [
      "-2.0%",
      "+5.0%",
      "+10.0%",
      "-8.0%",
      "+15.0%",
      "+30.0%",
    ],
  },
  {
    id: 4,
    name: "Goldman Sachs",
    symbol: "GS",
    logo: "https://logo.clearbit.com/goldmansachs.com",
    sector: "Finance",
    marketCap: "100B",
    price: "$300.00",
    changePercent: "-0.5%",
    changePercentages: ["-1.0%", "+3.0%", "+8.0%", "-4.0%", "+10.0%", "+20.0%"],
  },
  {
    id: 5,
    name: "Pfizer Inc.",
    symbol: "PFE",
    logo: "https://logo.clearbit.com/pfizer.com",
    sector: "Healthcare",
    marketCap: "200B",
    price: "$40.00",
    changePercent: "+0.8%",
    changePercentages: [
      "+2.0%",
      "+6.0%",
      "+12.0%",
      "-3.0%",
      "+18.0%",
      "+40.0%",
    ],
  },
  {
    id: 6,
    name: "Johnson & Johnson",
    symbol: "JNJ",
    logo: "https://logo.clearbit.com/jnj.com",
    sector: "Healthcare",
    marketCap: "400B",
    price: "$160.00",
    changePercent: "-1.0%",
    changePercentages: ["-1.5%", "+4.0%", "+9.0%", "-6.0%", "+12.0%", "+25.0%"],
  },
];

const Insight = () => {
  const { isCollapsed } = useSidebar();
  const [activeTab, setActiveTab] = useState(1);
  const [expandCard, setExpandCard] = useState(false);
  const [companiesData, setCompaniesData] = useState(mockCompaniesData);
  const [tabs, setTabs] = useState([]);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const data = await getCompanies();
        setCompaniesData(data.companies);
        console.log(data.sectors);
        setTabs(
          data.sectors.map((sector, index) => ({
            id: index + 1,
            label: sector,
          }))
        );
      } catch (error) {
        console.error("Error fetching companies data:", error);
      }
    };

    fetchCompanies();
  }, []);

  // get the sector name of active tab
  const activeSector = tabs.find((t) => t.id === activeTab)?.label;

  // filter companies based on active tab sector
  const filteredCompanies = companiesData.filter(
    (company) => company.sector === activeSector
  );

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
        <button
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
