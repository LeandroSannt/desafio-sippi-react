import React from "react";
import ReactApexChart from "react-apexcharts";

interface objProgressProps {
  id: string;
  date: Date;
  value: number;
}

interface ProgressProps {
  progress: objProgressProps[];
}

const GraficoArea: React.FC<ProgressProps> = () => {
  const series = [
    {
      teste: "ola mundo",
      name: "Progresso por mês",
      data: [49, 32, 70, 32, 50, 95, 41, 90],
    },
  ];
  const options = {
    id: {
      height: 400,
      type: "area",
    },
    chart: {
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#2F6F3A"],
    xaxis: {
      labels: {
        style: {
          colors: "#9C9C9C",
          fontSize: "16px",
        },
      },

      legend: {
        show: false,
      },
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
    yaxis: {
      show: true,
      tickAmount: 4,
      min: 0,
      max: 100,
      labels: {
        show: true,
        minWidth: 0,
        maxWidth: 160,
        style: {
          colors: "#9C9C9C",
          fontSize: "16px",
        },

        formatter: (value: any) => {
          return value + "%";
        },
      },
    },

    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  };

  return (
    <>
      <ReactApexChart
        options={options}
        series={series}
        width={"100%"}
        height={"250px"}
        type="area"
      />
    </>
  );
};

export default GraficoArea;
