function celsiusToFarenheit(celsius) {
  const farenheit = celsius * (9 / 5) + 32;
  return console.log(farenheit.toFixed(2));
}
function FarenheitToCelsius(farenheit) {
  const celsius = (farenheit - 32) * (5 / 9);
  return console.log(celsius.toFixed(2));
}

celsiusToFarenheit(33);

FarenheitToCelsius(120);
