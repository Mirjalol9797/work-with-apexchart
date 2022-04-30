// chart2 metrika statistic
function chart1(response) {
  var options = {
    series: [
      {
        name: "Онлайн",
        data: [
          { x: "01/10/2022", y: 10 },
          { x: "02/10/2022", y: 20 },
          { x: "03/10/2022", y: 30 },
          { x: "04/10/2022", y: 85 },
          { x: "05/10/2022", y: 47 },
          { x: "06/10/2022", y: 65 },
          { x: "07/10/2022", y: 18 },
          { x: "08/10/2022", y: 4 },
          { x: "09/10/2022", y: 74 },
          { x: "10/10/2022", y: 50 },
        ],
      },
      {
        name: "По звонку",
        data: [
          { x: "01/10/2022", y: 74 },
          { x: "02/10/2022", y: 58 },
          { x: "03/10/2022", y: 41 },
          { x: "04/10/2022", y: 96 },
          { x: "05/10/2022", y: 47 },
          { x: "06/10/2022", y: 14 },
          { x: "07/10/2022", y: 10 },
          { x: "08/10/2022", y: 54 },
          { x: "09/10/2022", y: 36 },
          { x: "10/10/2022", y: 41 },
        ],
      },
      {
        name: "Отказов",
        data: [
          { x: "01/10/2022", y: 34 },
          { x: "02/10/2022", y: 18 },
          { x: "03/10/2022", y: 41 },
          { x: "04/10/2022", y: 76 },
          { x: "05/10/2022", y: 37 },
          { x: "06/10/2022", y: 84 },
          { x: "07/10/2022", y: 30 },
          { x: "08/10/2022", y: 4 },
          { x: "09/10/2022", y: 6 },
          { x: "10/10/2022", y: 13 },
        ],
      },
    ],
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false,
      },
      fontFamily: "Roboto, sans-serif",
      foreColor: "#333",
    },
    colors: ["#FBC100", "#219653", "#EB5757", "#2F80ED"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 2,
      curve: "straight",
      // dashArray: [0, 8, 5],
    },
    // готов
    title: {
      text: "Статистика",
      align: "left",
    },
    // готов
    legend: {
      // tooltipHoverFormatter: function (val, opts) {
      //   return (
      //     val +
      //     " - " +
      //     opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
      //     ""
      //   );
      // },
      position: "top",
      horizontalAlign: "left",
    },
    // готов
    markers: {
      size: 0,
      hover: {
        sizeOffset: 6,
      },
    },
    xaxis: {
      labels: {
        format: "dd.MM.yyyy",
      },
    },
    // готов
    tooltip: {
      theme: false,
      y: [
        {
          title: {
            formatter: function (val) {
              return val + " ";
            },
          },
        },
        {
          title: {
            formatter: function (val) {
              return val;
            },
          },
        },
        {
          title: {
            formatter: function (val) {
              return val;
            },
          },
        },
      ],
    },
    // готов
    grid: {
      borderColor: "#D3D3D3",
      strokeDashArray: 3,
    },
  };

  var chart = new ApexCharts(document.querySelector("#chart1"), options);
  chart.render();
}

// chart2 metrika clicks
function chart2(response) {
  var options = {
    series: [
      {
        name: "В корзину",
        data: [
          { x: "01/10/2022", y: 10 },
          { x: "02/10/2022", y: 20 },
          { x: "03/10/2022", y: 30 },
          { x: "04/10/2022", y: 85 },
          { x: "05/10/2022", y: 47 },
          { x: "06/10/2022", y: 65 },
          { x: "07/10/2022", y: 18 },
          { x: "08/10/2022", y: 4 },
          { x: "09/10/2022", y: 74 },
          { x: "10/10/2022", y: 50 },
        ],
      },
      {
        name: "Оформит покупку",
        data: [
          { x: "01/10/2022", y: 74 },
          { x: "02/10/2022", y: 58 },
          { x: "03/10/2022", y: 41 },
          { x: "04/10/2022", y: 96 },
          { x: "05/10/2022", y: 47 },
          { x: "06/10/2022", y: 14 },
          { x: "07/10/2022", y: 10 },
          { x: "08/10/2022", y: 54 },
          { x: "09/10/2022", y: 36 },
          { x: "10/10/2022", y: 41 },
        ],
      },
      {
        name: "Оформления",
        data: [
          { x: "01/10/2022", y: 34 },
          { x: "02/10/2022", y: 18 },
          { x: "03/10/2022", y: 41 },
          { x: "04/10/2022", y: 76 },
          { x: "05/10/2022", y: 37 },
          { x: "06/10/2022", y: 84 },
          { x: "07/10/2022", y: 30 },
          { x: "08/10/2022", y: 4 },
          { x: "09/10/2022", y: 6 },
          { x: "10/10/2022", y: 13 },
        ],
      },
      {
        name: "Разрешено к оплату",
        data: [
          { x: "01/10/2022", y: 56 },
          { x: "02/10/2022", y: 12 },
          { x: "03/10/2022", y: 34 },
          { x: "04/10/2022", y: 7 },
          { x: "05/10/2022", y: 97 },
          { x: "06/10/2022", y: 15 },
          { x: "07/10/2022", y: 32 },
          { x: "08/10/2022", y: 40 },
          { x: "09/10/2022", y: 69 },
          { x: "10/10/2022", y: 10 },
        ],
      },
    ],
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false,
      },
      fontFamily: "Roboto, sans-serif",
      foreColor: "#333",
    },
    colors: ["#FBC100", "#219653", "#EB5757", "#2F80ED"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 2,
      curve: "straight",
      // dashArray: [0, 8, 5],
    },
    // готов
    title: {
      text: "Статистика",
      align: "left",
    },
    // готов
    legend: {
      // tooltipHoverFormatter: function (val, opts) {
      //   return (
      //     val +
      //     " - " +
      //     opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
      //     ""
      //   );
      // },
      position: "top",
      horizontalAlign: "left",
    },
    // готов
    markers: {
      size: 0,
      hover: {
        sizeOffset: 6,
      },
    },
    xaxis: {
      labels: {
        format: "dd.MM.yyyy",
      },
    },
    // готов
    tooltip: {
      theme: false,
      y: [
        {
          title: {
            formatter: function (val) {
              return val + " ";
            },
          },
        },
        {
          title: {
            formatter: function (val) {
              return val;
            },
          },
        },
        {
          title: {
            formatter: function (val) {
              return val;
            },
          },
        },
      ],
    },
    // готов
    grid: {
      borderColor: "#D3D3D3",
      strokeDashArray: 3,
    },
  };

  var chart = new ApexCharts(document.querySelector("#chart2"), options);
  chart.render();
}

// chart3 metrika visitors
function chart3(response) {
  var options = {
    series: [
      {
        name: "Посетители",
        data: [
          { x: "01/10/2022", y: 10 },
          { x: "02/10/2022", y: 20 },
          { x: "03/10/2022", y: 30 },
          { x: "04/10/2022", y: 85 },
          { x: "05/10/2022", y: 47 },
          { x: "06/10/2022", y: 65 },
          { x: "07/10/2022", y: 18 },
          { x: "08/10/2022", y: 4 },
          { x: "09/10/2022", y: 74 },
          { x: "10/10/2022", y: 50 },
        ],
      },
    ],
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false,
      },
      fontFamily: "Roboto, sans-serif",
      foreColor: "#333",
    },
    colors: ["#FBC100", "#219653", "#EB5757", "#2F80ED"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 2,
      curve: "straight",
      // dashArray: [0, 8, 5],
    },
    // готов
    title: {
      text: "Посетители",
      align: "left",
    },
    // готов
    legend: {
      // tooltipHoverFormatter: function (val, opts) {
      //   return (
      //     val +
      //     " - " +
      //     opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
      //     ""
      //   );
      // },
      position: "top",
      horizontalAlign: "left",
    },
    // готов
    markers: {
      size: 0,
      hover: {
        sizeOffset: 6,
      },
    },
    xaxis: {
      labels: {
        format: "dd.MM.yyyy",
      },
    },
    // готов
    tooltip: {
      theme: false,
      y: [
        {
          title: {
            formatter: function (val) {
              return val + " ";
            },
          },
        },
        {
          title: {
            formatter: function (val) {
              return val;
            },
          },
        },
        {
          title: {
            formatter: function (val) {
              return val;
            },
          },
        },
      ],
    },
    // готов
    grid: {
      borderColor: "#D3D3D3",
      strokeDashArray: 3,
    },
  };

  var chart = new ApexCharts(document.querySelector("#chart3"), options);
  chart.render();
}

// pie-chart1
function pieChart1(response) {
  var options = {
    series: [44, 55, 13, 43, 22],
    chart: {
      width: 420,
      type: "donut",
      fontFamily: "Roboto, sans-serif",
      foreColor: "#333",
    },
    labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
    legend: {
      position: "bottom",
    },
    plotOptions: {
      pie: {
        donut: {
          size: "30%",
        },
        customScale: 1,
        expandOnClick: false,
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 350,
          },
        },
      },
    ],
  };

  var chart = new ApexCharts(document.querySelector("#pie-chart1"), options);
  chart.render();
}

// pie-chart2
function pieChart2(response) {
  var options = {
    series: [44, 55, 13, 43, 22],
    chart: {
      width: 420,
      type: "donut",
      fontFamily: "Roboto, sans-serif",
      foreColor: "#333",
    },
    labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
    legend: {
      position: "bottom",
    },
    plotOptions: {
      pie: {
        donut: {
          size: "30%",
        },
        customScale: 1,
        expandOnClick: false,
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 350,
          },
        },
      },
    ],
  };

  var chart = new ApexCharts(document.querySelector("#pie-chart2"), options);
  chart.render();
}

chart1();
chart2();
chart3();
pieChart1();
pieChart2();
