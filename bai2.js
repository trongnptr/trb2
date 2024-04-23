// Biểu đồ 1
const ctx1 = document.getElementById('chart1').getContext('2d');
const data1 = {
  labels: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5'],
  datasets: [{
    label: 'Doanh thu',
    data: [1000, 1500, 2000, 2500, 3000],
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgba(255, 99, 132, 1)',
    pointRadius: 5,
    pointHoverRadius: 10,
    pointHoverBackgroundColor: 'rgba(255, 99, 132, 1)',
    pointHoverBorderColor: 'rgba(255, 99, 132, 1)',
  }]
};

const options1 = {
  type: 'scatter',
  data: data1,
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
};

const myChart1 = new Chart(ctx1, options1);

// Biểu đồ 2
const ctx2 = document.getElementById('chart2').getContext('2d');
const data2 = {
  labels: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5'],
  datasets: [{
    label: 'Doanh thu',
    data: [1000, 1500, 2000, 2500, 3000],
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgba(255, 99, 132, 1)',
    borderWidth: 2,
    pointRadius: 0,
  }]
};

const options2 = {
  type: 'line',
  data: data2,
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
};

const myChart2 = new Chart(ctx2, options2);

// Biểu đồ 3
const ctx3 = document.getElementById('chart3').getContext('2d');
const data3 = {
  labels: ['Doanh thu Q1', 'Doanh thu Q2', 'Doanh thu Q3', 'Doanh thu Q4'],
  datasets: [{
    data: [30, 35, 25, 10],
    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FFCC00']
  }]
};

const options3 = {
  type: 'pie', 
  data: data3,
  options: {
    responsive: true,
    title: {
      display: true,
      text: 'Tỷ lệ Doanh thu Theo Quý'
    }
  }
};

const myChart3 = new Chart(ctx3, options3);

// Biểu đồ 4
const ctx4 = document.getElementById('chart4').getContext('2d');
const data4 = {
  labels: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5'],
  datasets: [{
    label: 'Doanh thu',
    data: [1000, 1500, 2000, 2500, 3000],
    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FFCC00', '#4BC0C0']
  }]
};

const options4 = {
  type: 'bar', // Thay đổi type thành 'bar'
  data: data4,
  options: {
    responsive: true, // Thêm thuộc tính này
    title: {
      display: true,
      text: 'Doanh thu Theo Tháng'
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
};

const myChart4 = new Chart(ctx4, options4);

// Biểu đồ 5
const data5 = {
    labels: ['Mảng A', 'Mảng B', 'Mảng C'],
    datasets: [{
      data: [30, 40, 30],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      borderColor: '#fff',
      borderWidth: 1,
      holeColor: '#fff'
    }]
  };
  
  const options5 = {
    type: 'doughnut',
    responsive: true,
    data: data5,
    legend: {
      display: true,
      labels: {
        fontColor: '#000'
      }
    }
  };
  
  const ctx5 = document.getElementById('chart5').getContext('2d');
  const myChart5 = new Chart(ctx5, options5, data5);

// Biểu đồ 6
const data6 = {
    labels: ['Điểm 1', 'Điểm 2', 'Điểm 3'],
    datasets: [{
      label: 'Dataset 1',
      data: [{ x: 30, y: 50, r: 15 }, { x: 60, y: 70, r: 20 }, { x: 90, y: 40, r: 10 }],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      borderColor: '#fff',
      borderWidth: 1
    }]
  };
  
  const options6 = {
    type: 'bubble',
    responsive: true,
    data: data6,
    scales: {
      x: {
        min: 0,
        max: 100
      },
      y: {
        min: 0,
        max: 100
      }
    },
    tooltips: {
      mode: 'index',
      callbacks: {
        labels: function(tooltipItem) {
          const label = tooltipItem.dataset.label + ': ';
          label += tooltipItem.label + ' (' + tooltipItem.data.x + ', ' + tooltipItem.data.y + ', ' + tooltipItem.data.r + ')';
          return label;
        }
      }
    }
  };
  
  const ctx6 = document.getElementById('chart6').getContext('2d');
  const myChart6 = new Chart(ctx6, options6, data6);
