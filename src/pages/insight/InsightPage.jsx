import { useParams } from "react-router-dom";
import GraphContainer from "../../components/reusable/Graphs/GraphContainer";
import CompanyLogo from "../../components/reusable/CompanyLogo";
import { findCompanyBySymbol } from "../../mock/fixtures";

const InsightPage = () => {
  const { insightSymbol } = useParams();
  const company = findCompanyBySymbol(insightSymbol);

  if (!company) {
    return <div className="p-4">Company not found.</div>;
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="relative h-44 md:h-52 rounded-xl overflow-hidden shrink-0">
        <img
          src={company.coverImage}
          alt={`${company.name} hero`}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
      </div>

      <div className="flex flex-col gap-2 text-neutral-600 dark:text-neutral-500 -mt-14 relative z-10 px-1">
        <div className="flex items-end gap-3">
          <CompanyLogo
            src={company.logo}
            alt={company.name}
            className="size-16 md:size-20 rounded-xl object-cover ring-4 ring-white dark:ring-neutral-900 shadow-lg bg-white"
          />
          <div className="flex flex-col pb-1">
            <h2 className="text-2xl font-semibold text-white drop-shadow-md dark:text-neutral-100">
              {company.name}
            </h2>
            <p className="text-base text-neutral-200">{company.symbol}</p>
          </div>
        </div>

        <div className="flex flex-col gap-1 mt-4">
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
