var canvasDoughnut = document.getElementById("doughnutChart");
const data = {
    labels: [
        'Man Shoes',
        'Woman Shoes',
        'Kid Shoes',
        'Sport Shoes'
    ],
    datasets: [{
        label: '',
        data: [11, 5, 7, 8],
        backgroundColor: [
            '#3d516c',
            'rgb(75, 192, 192)',
            'rgb(255, 205, 86)',
            'rgb(201, 203, 207)'
        ]
    }]
}

const configDoughnut = {
    type: 'doughnut',
    data: data,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Total Sale'
            }
        }
    },
};
var DoughnutChart = new Chart(canvasDoughnut, configDoughnut);

var canvasPie = document.getElementById("pieChart");
const configPie = {
    type: 'pie',
    data: data,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
              display: true,
              text: 'Total Sale'
            }
        }
    },
};

var PieChart = new Chart(canvasPie, configPie);

var canvasPolar = document.getElementById("polarChart");
const configPolar = {
    type: 'polarArea',
    data: data,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
              display: true,
              text: 'Total Sale'
            }
        }
    },
};
var PolarChart = new Chart(canvasPolar, configPolar);

var canvasMultipie = document.getElementById("multipieChart");
const data2 = {
    labels: ['Man Shoes',
    'Woman Shoes',
    'Kid Shoes',
    'Sport Shoes'],
    datasets: [
      {
        backgroundColor: ['#3d516c', 'rgb(75, 192, 192'],
        data: [11, 5]
      },
      {
        backgroundColor: ['rgb(255, 205, 86)', 'rgb(201, 203, 207)'],
        data: [7, 8]
      }
    ]
  };
const configMultipie = {
    type: 'pie',
    data: data2,
    options: {
      responsive: true,
      plugins: {
        legend: {
          labels: {
            generateLabels: function(chart) {
              const original = Chart.overrides.pie.plugins.legend.labels.generateLabels;
              const labelsOriginal = original.call(this, chart);
              var datasetColors = chart.data.datasets.map(function(e) {
                return e.backgroundColor;
              });
              datasetColors = datasetColors.flat();
              labelsOriginal.forEach(label => {
                label.datasetIndex = (label.index - label.index % 2) / 2;
                label.hidden = !chart.isDatasetVisible(label.datasetIndex);
                label.fillStyle = datasetColors[label.index];
              });
  
              return labelsOriginal;
            }
          },
          onClick: function(mouseEvent, legendItem, legend) {
            legend.chart.getDatasetMeta(
              legendItem.datasetIndex
            ).hidden = legend.chart.isDatasetVisible(legendItem.datasetIndex);
            legend.chart.update();
          }
        },  title: {
          display: true,
          text: 'Total Sale'
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              const labelIndex = (context.datasetIndex * 2) + context.dataIndex;
              return context.chart.data.labels[labelIndex] + ': ' + context.formattedValue;
            }
          }
        }
      },
    },
  };
var MultiPieChart = new Chart(canvasMultipie, configMultipie);