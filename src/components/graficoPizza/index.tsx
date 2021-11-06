import React from "react";
import ReactApexChart from "react-apexcharts";

interface PercentageProps {
  total: number;
  conclusion: number;
}

const GraficoPizza: React.FC<PercentageProps> = ({ total, conclusion }) => {
  const series = [conclusion, total];
  const options = {
    id: {
      type: "pie",
    },
    chart: {
      offsetY: -20,
    },
    theme: {
      monochrome: {
        enabled: false,
        color: "#31da17",
      },
    },

    labels: ["Conclusão", "Em andamento"],
    legends: {
      show: true,
    },

    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
    fill: {
      colors: ["#BDBDBD", "#37A64A"],
      opacity: 2,

      type: "gradient",
      gradient: {
        gradientToColors: ["#BDBDBD", "#56E388", "#3FC75C", "#29966B"],
        opacityFrom: 100,
        opacityTo: 500,
        shadeIntensity: 50,
      },
    },
    stroke: {
      width: 1,
      colors: ["#BDBDBD", "#37A64A"],
    },
    yaxis: {
      show: false,
    },

    plotOptions: {
      pie: {
        dataLabels: {
          offset: 70,
          minAngleToShowLabel: 1000,
        },
      },
    },

    legend: {
      show: false,
    },
    tooltip: {
      fillSeriesColor: false,
      marker: {
        fillColors: ["#37A64A", "#bdbdbdcc"],
      },
    },
  };

  return (
    <>
      <ReactApexChart
        options={options}
        series={series}
        type="pie"
        background={"red"}
        width={160}
      />
    </>
  );
};

export default GraficoPizza;
