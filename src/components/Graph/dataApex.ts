export const series = [
  {
    name: "South",
    data: new Date("11 Feb 2017 GMT"),
  },
  {
    name: "North",
    data: new Date("11 Feb 2017 GMT"),
  },
  {
    name: "Central",
    data: new Date("11 Feb 2017 GMT"),
  },
];
export const options = {
  charts: {
    type: "area",
    height: 350,
    stacked: true,
    events: {
      selection: function (chart: any, e: any) {
        console.log(new Date(e.xaxis.min));
      },
    },
  },
  colors: ["#008FFB", "#00E396", "#CED4DC"],
  dataLabels: {
    enabled: false,
  },

  fill: {
    type: "gradient",
    gradient: {
      opacityFrom: 0.6,
      opacityTo: 0.8,
    },
  },
};
