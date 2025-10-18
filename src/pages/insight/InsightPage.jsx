import { useParams } from "react-router-dom";
import Graph from "../../components/reusable/Graphs/Graph";
import GraphContainer from "../../components/reusable/Graphs/GraphContainer";
import { useEffect } from "react";
import { getCharts, getCompanyBySymbol } from "../../lib/companies/companies";

const companiesdata = [
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

const InsightPage = () => {
  const { insightSymbol } = useParams();
  const getCompanyDetails = (symbol) => {
    // Fetch or retrieve company details based on the symbol
    return companiesdata.find((company) => company.symbol === symbol);
  };

  const company = getCompanyDetails(insightSymbol);
  if (!company) {
    return <div className="p-4">Company not found.</div>;
  }

  useEffect(() => {
    const getCompany = async () => {
      const response = await getCompanyBySymbol(insightSymbol);
      const charts = await getCharts(insightSymbol);
      console.log("Charts data:", charts);
      console.log("Company details:", response);
    };
    getCompany();
  }, [insightSymbol]);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2 text-neutral-600 dark:text-neutral-500">
        <div className="flex items-center gap-2">
          <img src={company.logo} alt="" />
          <div className="flex flex-col">
            <h2 className="text-2xl font-semibold dark:text-neutral-200">
              {company.name}
            </h2>
            <p className="text-base">{company.symbol}</p>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <h2 className="font-semibold text-xl text-neutral-600 dark:text-neutral-400">
              {company.price}
            </h2>
            <p
              className={`text-sm text-center w-fit px-2 py-1 rounded-lg ${
                company.changePercent && company.changePercent.startsWith("-")
                  ? "bg-red-500/50 text-red-100"
                  : "bg-primary/50 text-white"
              }`}
            >
              {company.changePercent || "0.00%"}$ |{" "}
              {Math.abs(
                (parseFloat(company.changePercent) / 100) *
                  parseFloat(company.price.replace("$", ""))
              ).toFixed(2)}
              {company.changePercent}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <p>After Hours</p>{" "}
            <div className="flex items-center">
              <h2 className="font-semibold text-base text-neutral-600 dark:text-neutral-400">
                {company.price}
              </h2>
              <p
                className={`text-sm text-center w-fit px-2 py-1 rounded-lg ${
                  company.changePercent && company.changePercent.startsWith("-")
                    ? " text-red-700"
                    : " text-white"
                }`}
              >
                {company.changePercent || "0.00%"}$ |{" "}
                {Math.abs(
                  (parseFloat(company.changePercent) / 100) *
                    parseFloat(company.price.replace("$", ""))
                ).toFixed(2)}
                {company.changePercent}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <p className="text-neutral-600 dark:text-neutral-300">Earnings</p>
            <p className="text-primary">Nov 19, 2025</p>
          </div>
        </div>
      </div>
      <GraphContainer />
    </div>
  );
};

export default InsightPage;
