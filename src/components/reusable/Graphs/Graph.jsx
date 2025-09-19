import Chart from "react-apexcharts";
import { BsArrowsAngleExpand, BsArrowsAngleContract } from "react-icons/bs";
import { useState } from "react";

const Graph = ({
  type = "line",
  data = [],
  categories = [],
  seriesName = "Series",
}) => {
  const [expandGraph, setExpandGraph] = useState(false);

  const options = {
    chart: { type },
    xaxis: { categories },
    stroke: { curve: type === "line" ? "smooth" : "straight" },
  };

  const series = [{ name: seriesName, data }];

  return (
    <>
      {/* Graph card */}
      <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-sm">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold dark:text-neutral-200">
            {seriesName}
          </h2>
          <button
            className="p-2 border-[1px] rounded-full text-neutral-600 border-neutral-200 dark:border-neutral-700 bg-transparent"
            onClick={() => setExpandGraph(true)}
          >
            <BsArrowsAngleExpand />
          </button>
        </div>
        <div className="my-2 border-b-[1px] border-neutral-200 dark:border-neutral-700"></div>
        <Chart options={options} series={series} type={type} height={350} />
      </div>

      {/* Modal */}
      {expandGraph && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white dark:bg-neutral-900 rounded-lg w-full max-w-6xl max-h-[90vh] p-6 overflow-auto relative">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold dark:text-neutral-200">
                {seriesName}
              </h2>
              <button
                className="p-2 border-[1px] rounded-full text-neutral-600 border-neutral-200 dark:border-neutral-700 bg-transparent"
                onClick={() => setExpandGraph(false)}
              >
                <BsArrowsAngleContract />
              </button>
            </div>
            <Chart options={options} series={series} type={type} height={600} />
          </div>
        </div>
      )}
    </>
  );
};

export default Graph;
