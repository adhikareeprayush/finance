import Chart from "react-apexcharts";

const Graph = ({
  type = "line",
  data = [],
  categories = [],
  seriesName = "Series",
}) => {
  const options = {
    chart: { type },
    xaxis: { categories },
    stroke: { curve: type === "line" ? "smooth" : "straight" },
  };

  const series = [
    {
      name: seriesName,
      data,
    },
  ];

  return <Chart options={options} series={series} type={type} height={350} />;
};

export default Graph;
