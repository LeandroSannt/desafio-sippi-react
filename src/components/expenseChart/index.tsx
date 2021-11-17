import React from "react";
import ReactApexChart from "react-apexcharts";
import styles from "./styles.module.scss";

interface Props {
  name: Array<string>;
  value: Array<number>;
}

const ExpenseChart: React.FC<Props> = ({ name, value }) => {
  const series = value;

  const options = {
    plotOptions: {
      polarArea: {
        rings: {
          strokeWidth: 0,
          strokeColor: "#e8e8e8",
        },
        spokes: {
          strokeWidth: 0,
          connectorColors: "#e8e8e8",
        },
      },
    },
    id: {
      width: 700,
    },
    legend: {
      show: true,
      showForSingleSeries: false,
      showForNullSeries: true,
      showForZeroSeries: true,
      floating: false,
      fontSize: "16px",
      fontFamily: "Helvetica, Arial",
      fontWeight: 400,
      formatter: undefined,
      inverseOrder: false,
      width: undefined,
      height: 150,
      tooltipHoverFormatter: undefined,
      offsetX: 40,
      offsetY: 40,

      labels: {
        colors: undefined,
        useSeriesColors: true,
      },
      markers: {
        width: 12,
        height: 12,
        strokeWidth: 0,
        strokeColor: "#fff",
        fillColors: undefined,
        radius: 12,
      },
      itemMargin: {
        horizontal: 5,
        vertical: 5,
      },
      onItemClick: {
        toggleDataSeries: false,
      },
      onItemHover: {
        highlightDataSeries: false,
      },
    },
    labels: name,
    fill: {
      opacity: 1,
    },
    stroke: {
      width: 1,
    },
    yaxis: {
      show: false,
    },

    theme: {},
  };
  return (
    <>
      <div className={styles.content}>
        <div className={styles.container}>
          <h3 className={styles.h3}>Gastos por partes</h3>
          <ReactApexChart
            options={options}
            series={series}
            type="polarArea"
            width={"450"}
          />
        </div>
      </div>
    </>
  );
};

export default ExpenseChart;
