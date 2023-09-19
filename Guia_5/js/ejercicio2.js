const convertTemperature = (temperature, unit) => {
    const results = document.querySelector("#respuestas");
    let num = parseFloat(prompt(`Ingrese la temperatura a convertir a ${unit}`));
    let result = (num * (9 / 5)) + temperature;
    results.innerHTML = `La conversion es igual a ${result} grados ${unit}`;
}


const celsiusToFahrenheit = () => {
    convertTemperature(32, 'fahrenheit');
}