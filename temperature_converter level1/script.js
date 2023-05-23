function convertTemperature() {
  var temperatureInput = document.getElementById('temperature');
  var fromUnit = document.getElementById('from').value;
  var toUnit = document.getElementById('to').value;
  var result = document.getElementById('result');
  
  var temperature = parseFloat(temperatureInput.value);
  if (isNaN(temperature)) {
    result.textContent = 'Invalid temperature!';
    return;
  }
  
  var convertedTemperature;
  
  if (fromUnit === 'celsius') {
    if (toUnit === 'fahrenheit') {
      convertedTemperature = (temperature * 9/5) + 32;
    } else if (toUnit === 'kelvin') {
      convertedTemperature = temperature + 273.15;
    } else {
      convertedTemperature = temperature;
    }
  } else if (fromUnit === 'fahrenheit') {
    if (toUnit === 'celsius') {
      convertedTemperature = (temperature - 32) * 5/9;
    } else if (toUnit === 'kelvin') {
      convertedTemperature = (temperature - 32) * 5/9 + 273.15;
    } else {
      convertedTemperature = temperature;
    }
  } else if (fromUnit === 'kelvin') {
    if (toUnit === 'celsius') {
      convertedTemperature = temperature - 273.15;
    } else if (toUnit === 'fahrenheit') {
      convertedTemperature = (temperature - 273.15) * 9/5 + 32;
    } else {
      convertedTemperature = temperature;
    }
  }
  
  result.textContent = convertedTemperature.toFixed(2) + ' ' + toUnit;
}
``
