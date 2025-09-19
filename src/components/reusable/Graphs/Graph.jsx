import Chart from "react-apexcharts";

const options = {
  chart: {
    type: "line",
  },
  series: [
    {
      name: "sales",
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
    },
  ],
  xaxis: {
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
  },
};

const Graph = () => {
  return (
    <div>
      <Chart
        options={options}
        series={options.series}
        type="line"
        height={350}
      />
    </div>
  );
};

export default Graph;
