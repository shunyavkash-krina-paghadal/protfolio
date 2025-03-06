// CHART-1

var options = {
          series: [{
          name: 'series1',
          data: [31, 40, 28, 51, 42, 109, 100]
        }, {
          name: 'series2',
          data: [11, 32, 45, 32, 34, 52, 41]
        }],
          chart: {
          height: 312 ,
          type: 'area'
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          type: 'datetime',
          categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          },
        },
        };

        var chart = new ApexCharts(document.querySelector("#chart1"), options);
        chart.render();

// chart2

var options = {
  series: [76, 67, 61, 90],
  chart: {
  height: 350,
  type: 'radialBar',
},
plotOptions: {
  radialBar: {
    offsetY: 0,
    startAngle: 0,
    endAngle: 270,
    hollow: {
      margin: 5,
      size: '30%',
      background: 'transparent',
      image: undefined,
    },
    dataLabels: {
      name: {
        show: false,
      },
      value: {
        show: false,
      }
    }
  }
},
colors: ['#1ab7ea', '#0084ff', '#39539E', '#0077B5'],
labels: ['Vimeo', 'Messenger', 'Facebook', 'LinkedIn'],
legend: {
  show: true,
  floating: true,
  fontSize: '16px',
  position: 'left',
  offsetX: 160,
  offsetY: 15,
  labels: {
    useSeriesColors: true,
  },
  markers: {
    size: 0
  },
  formatter: function(seriesName, opts) {
    return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
  },
  itemMargin: {
    vertical: 3
  }
},
responsive: [{
  breakpoint: 480,
  options: {
    legend: {
        show: false
    }
  }
}]
};

var chart = new ApexCharts(document.querySelector("#chart2"), options);
chart.render();

// CHART-3

var options = {
  series: [{
  name: 'Servings',
  data: [44, 55, 10, 67, 22, 43, 21, 33, 45, 31, 87, 65]
}],
  annotations: {
  points: [{
    x: 'Bananas',
    seriesIndex: 0,
    label: {
      borderColor: '#775DD0',
      offsetY: 0,
      style: {
        color: '#fff',
        background: '#775DD0',
      },
      text: 'Bananas are good',
    }
  }]
},
chart: {
  height: 470,
  type: 'bar',
},
plotOptions: {
  bar: {
    columnWidth: '30%',
  }
},
dataLabels: {
  enabled: false
},
stroke: {
  width: 3
},

grid: {
  row: {
    colors: ['#fff', '#f2f2f2']
  }
},
xaxis: {
  labels: {
    rotate: -45
  },
  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Papayas'
  ],
  tickPlacement: 'on'
},
yaxis: {
  title: {
    text: 'Servings',
  },
},
fill: {
  type: 'gradient',
  gradient: {
    shade: 'light',
    type: "horizontal",
    shadeIntensity: 0.25,
    gradientToColors: undefined,
    inverseColors: true,
    opacityFrom: 0.85,
    opacityTo: 0.85,
    stops: [50, 0, 100]
  },
}
};

var chart = new ApexCharts(document.querySelector("#chart3"), options);
chart.render();