// 2469. Convert the Temperature
// https://leetcode.com/problems/convert-the-temperature/

const convertTemperature = function (celsius) {
  const kelvin = celsius + 273.15;
  const fahrenheit = celsius * 1.8 + 32.0;

  return [kelvin, fahrenheit];
};
