// dashboard.js - Dashboard logic and visualization

window.onload = function () {
  // Calculate summary values
  const avgTemp = (temperatureData.reduce((a, b) => a + b, 0) / temperatureData.length).toFixed(1);
  const maxPressure = Math.max(...pressureData).toFixed(1);

  document.getElementById('avg-temp').textContent = avgTemp;
  document.getElementById('max-pressure').textContent = maxPressure;

  // Display alerts
  const alerts = [];
  temperatureData.forEach((temp, i) => {
    if (temp > 30) alerts.push(`High temperature alert at ${timeLabels[i]}: ${temp.toFixed(1)}°C`);
  });

  const alertList = document.getElementById('alert-list');
  if (alerts.length === 0) {
    alertList.innerHTML = '<li>All systems normal.</li>';
  } else {
    alerts.forEach(alert => {
      const li = document.createElement('li');
      li.textContent = alert;
      alertList.appendChild(li);
    });
  }

  // Draw charts
  new Chart(document.getElementById('temperatureChart'), {
    type: 'line',
    data: {
      labels: timeLabels,
      datasets: [{
        label: 'Temperature (°C)',
        data: temperatureData,
        borderColor: '#ffcc80',
        backgroundColor: 'rgba(255,204,128,0.1)',
        tension: 0.3
      }]
    },
    options: { responsive: true, plugins: { legend: { labels: { color: '#e0e0e0' } } }, scales: { x: { ticks: { color: '#e0e0e0' } }, y: { ticks: { color: '#e0e0e0' } } } }
  });

  new Chart(document.getElementById('machineUsageChart'), {
    type: 'doughnut',
    data: {
      labels: machineUsageData.labels,
      datasets: [{
        data: machineUsageData.values,
        backgroundColor: ['#90caf9', '#f48fb1', '#ce93d8', '#ffcc80']
      }]
    },
    options: { responsive: true, plugins: { legend: { labels: { color: '#e0e0e0' } } } }
  });
};