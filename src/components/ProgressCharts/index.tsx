/* eslint-disable react/jsx-no-undef */
import React, { useState, useEffect } from "react";
import { Container } from "./styles";

import img1 from "../../assets/Ellipse1.svg";
import img2 from "../../assets/Ellipse2.svg";

import ReactApexChart from "react-apexcharts";

interface ProgressProps {
  percent: number;
  width?: number;
  height?: string;
  color?: string;
  valueSize?: number;
}

const PorgressLine: React.FC<ProgressProps> = ({
  percent,
  width = 300,
  height,
  color = "#3FC75C",
  valueSize,
}) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (percent >= 100) {
      setValue(100);
    } else {
      setValue(percent);
    }
  }, [percent]);

  const series = [value];
  const options = {
    id: {
      type: "radialBar",
      offsetY: -20,
      sparkline: {
        enabled: true,
      },
    },

    colors: [`${color}`],
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        track: {
          background: "#e7e7e7",
          strokeWidth: "100%",
          margin: 5, // margin is in pixels
        },
        dataLabels: {
          style: {
            fontWeight: 700,
          },
          name: {
            show: false,
            fontWeight: 300,
          },
          value: {
            offsetY: -2,
            fontSize: `${valueSize}px`,
            fontWeight: "bold",
          },
        },
      },
    },
    grid: {
      padding: {
        top: -10,
      },
    },
    fill: {
      type: "linear",
      gradient: {
        shade: "red",
        shadeIntensity: 0.9,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 53, 50, 50],
      },
    },
    labels: ["Average Results"],
  };

  return (
    <>
      <div style={{ width: `${width}px`, height: `${height}px` }}>
        <ReactApexChart options={options} series={series} type="radialBar" />
      </div>
    </>
  );
};

export default PorgressLine;
