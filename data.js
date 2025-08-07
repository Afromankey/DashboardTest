// data.js - Simulated industrial data generator

// Simulate hourly temperature readings (°C)
function generateTemperatureData(hours = 24) {
  const data = [];
  for (let i = 0; i < hours; i++) {
    data.push(20 + Math.random() * 15); // Between 20 and 35°C
  }
  return data;
}

// Simulate hourly pressure readings (kPa)
function generatePressureData(hours = 24) {
  const data = [];
  for (let i = 0; i < hours; i++) {
    data.push(90 + Math.random() * 30); // Between 90 and 120 kPa
  }
  return data;
}

// Simulate machine usage breakdown
function generateMachineUsageData() {
  return {
    labels: ['Machine A', 'Machine B', 'Machine C', 'Machine D'],
    values: [30, 25, 20, 25] // Percent usage
  };
}

// Generate timestamps for X-axis labels
function generateTimeLabels(hours = 24) {
  const labels = [];
  for (let i = 0; i < hours; i++) {
    labels.push(`${i}:00`);
  }
  return labels;
}

// Export data generation for use in dashboard.js
const temperatureData = generateTemperatureData();
const pressureData = generatePressureData();
const machineUsageData = generateMachineUsageData();
const timeLabels = generateTimeLabels();