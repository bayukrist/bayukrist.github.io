var canvasLine = document.getElementById("lineChart");

const data = {labels: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"], 
datasets: [
    {
        label: "Last Year", 
        data: [12,13,15,12,14,17,15,13,12,16,19,17],
        backgroundColor: ["rgb(75, 192, 192)"]
    },
    {
        label: "This Year", 
        data: [15,14,13,14,17,18,12,14,15,16,18,19],
        backgroundColor: ["#3d516c"]
    }
]
}
const configLine = {
    type: 'line',
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Revenue'
        }
      }
    },
  };

var LineChart = new Chart(canvasLine, configLine);

var canvasBar = document.getElementById("barChart");
const configBar = {
    type: 'bar',
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Revenue'
        }
      }
    },
  };
  var BarChart = new Chart(canvasBar, configBar);

