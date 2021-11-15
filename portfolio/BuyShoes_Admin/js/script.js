var canvasElement = document.getElementById("revenueChart");
var config = {
    type: "bar",
    data: {labels: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"], 
    datasets: [
        {
            label: "Million Rupiah", 
            data: [15,14,13,14,17,18,12,14,15,16,18,19],
            backgroundColor: ["#3d516c"]
        }
    ]
    }
}

var RevenueChart = new Chart(canvasElement, config);

var canvasElement2 = document.getElementById("totalsaleChart");
var config2 = {
    type: 'polarArea',
    data: {
            labels: [
              'Man Shoes',
              'Woman Shoes',
              'Kid Shoes',
              'Sport Shoes'
            ],
            datasets: [{
              label: 'My First Dataset',
              data: [11, 5, 7, 8],
              backgroundColor: [
                '#3d516c',
                'rgb(75, 192, 192)',
                'rgb(255, 205, 86)',
                'rgb(201, 203, 207)'
              ]
            }]
    },
    options: {}
}

var RevenueChart2 = new Chart(canvasElement2, config2);