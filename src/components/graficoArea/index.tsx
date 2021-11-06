import React from "react";
import ReactApexChart from "react-apexcharts";

interface PercentageProps {
  total: number;
  conclusion: number;
}

const GraficoArea: React.FC = () => {
  const series = [
    {
      name: "series2",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ];
  const options = {
    id: {
      height: 350,
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },

    xaxis: {
      categories: [
        "Jan",
        "Fev",
        "Mar",
        "Abr",
        "Mai",
        "Jun",
        "Jul",
        "Jul",
        "Jul",
      ],
    },

    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  };

  return (
    <>
      <ReactApexChart options={options} series={series} type="area" />
    </>
  );
};

export default GraficoArea;
