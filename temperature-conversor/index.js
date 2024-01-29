const temperatureInput = document.getElementById("temperatureInput");
const toCelsius = document.getElementById("toCelsius");
const toFahrenheit = document.getElementById("toFahrenheit");
const result = document.getElementById("conversionResult");

let temp;

function convert() {
	if (toFahrenheit.checked) {
		temp = Number(temperatureInput.value);
		temp = ((temp * 9) / 5 + 32).toFixed(1);
		result.textContent = `${temp} °F`;
	} else if (toCelsius.checked) {
		temp = Number(temperatureInput.value);
		temp = ((temp - 32) * (5 / 9)).toFixed(1);
		result.textContent = `${temp} °C`;
	} else {
		result.textContent = "Select a unit";
	}
}
