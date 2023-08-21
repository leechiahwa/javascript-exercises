const convertToCelsius = function(tempFahrenheit) {
  celsius = (tempFahrenheit - 32) * 5/9;
  roundedCelsius = Math.round(celsius * 10) / 10;
  return roundedCelsius;
};


const convertToFahrenheit = function(tempCelsius) {
  fahrenheit = (tempCelsius * 9/5) + 32;
  roundedFahrenheit = Math.round(fahrenheit * 10) / 10;
  return roundedFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
