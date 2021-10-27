import React from "react";
import { ResponsiveStream } from "@nivo/stream";
import { data } from "./data";

import { options, series } from "./dataApex";

import styles from "./styles.module.scss";

import ReactApexChart from "react-apexcharts";

const Graphic: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>ola mundo</h1>

      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height={350}
      />
    </div>
  );
};

export default Graphic;
