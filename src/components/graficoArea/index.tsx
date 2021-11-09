// esse componente ira precisar de uma get que ira pegar todos
//os progressos e trasformar em um array
import React from "react";
import ReactApexChart from "react-apexcharts";
import moment from "moment";
import "./grafico.module.scss";

interface arrProgressProps {
  value: Array<number>;
}

const GraficoArea: React.FC<arrProgressProps> = ({ value }) => {
  const capitalize = (str: string) => {
    if (typeof str !== "string") {
      return "";
    }
    return str.charAt(0).toUpperCase() + str.substr(1);
  };

  const newDate = moment().format("MMM[ - ]DD");

  const series = [
    {
      teste: "ola mundo",
      name: "Progresso por mês",
      data: value,
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
          height: "10px",
          cssClass: "teste",
        },

        rotate: 0,
        formatter: (value: string) => {
          return capitalize(newDate);
        },
      },

      legend: {
        show: false,
      },
      categories: [],
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
