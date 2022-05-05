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
function chart2(line01, line02, line03, line04) {
  var options = {
    series: [
      {
        name: "В корзину",
        data: line01,
      },
      {
        name: "Оформит покупку",
        data: line02,
      },
      {
        name: "Оформления",
        data: line03,
      },
      {
        name: "Разрешено к оплату",
        data: line04,
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
        data: response,
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
function pieChart1(series, labels) {
  var options = {
    series: series,
    chart: {
      width: 420,
      type: "donut",
      fontFamily: "Roboto, sans-serif",
      foreColor: "#333",
    },
    labels: labels,
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

pieChart2();

$(document).ready(function () {
  // metrika clicks
  $.ajax({
    url: "https://metrika.texnomart.uz/click-chart/1640998800-1651559591",
    type: "GET",
    success: function (data) {
      let line01 = data.line01;
      let line02 = data.line02;
      let line03 = data.line03;
      let line04 = data.line04;
      chart2(line01, line02, line03, line04);
    },
  });
  // metrika visitors
  $.ajax({
    url: "https://metrika.texnomart.uz/visits-chart/1650353050-1651130650",
    type: "GET",
    success: function (data) {
      chart3(data);
      // console.log(data);
    },
  });

  // Самые популярные слова
  $.ajax({
    url: "https://metrika.texnomart.uz/search-with-results/1640998800-1651559591",
    type: "GET",
    success: function (data) {
      let content = "";
      for (let i = 0; i < data.length; i++) {
        content += `
        <div class="column-list">
            <div class="column-list__title">${data[i].text}</div>
            <div class="column-list__value">${data[i].count}</div>
        </div>

        `;
      }
      $("#popularWords").append(content);
      // console.log(data);
    },
  });

  // Результаты не найдены:
  $.ajax({
    url: "https://metrika.texnomart.uz/search-no-results/1640998800-1651559591",
    type: "GET",
    success: function (data) {
      let content = "";
      for (let i = 0; i < data.length; i++) {
        content += `
        <div class="column-list">
          <div class="column-list__title">${data[i].text}</div>
          <div class="column-list__value">${data[i].count}</div>
        </div>
        `;
      }
      $("#searchNoResult").append(content);
      // console.log(data);
    },
  });

  // pie-chart 1
  $.ajax({
    url: "https://metrika.texnomart.uz/search-chart/1640998800-1651559591",
    type: "GET",
    success: function (data) {
      let series = data.count;
      let labels = data.text;

      pieChart1(series, labels);
    },
  });
});
