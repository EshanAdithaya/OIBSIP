document.getElementById('convert-button').addEventListener('click', function() {
    const inputTemp = parseFloat(document.getElementById('temperature-input').value);
    const inputUnit = document.getElementById('unit-select').value;

    if (isNaN(inputTemp)) {
        document.getElementById('result').textContent = 'Please enter a valid number.';
        return;
    }

    let resultText;

    if (inputUnit === 'celsius') {
        const fahrenheitTemp = (inputTemp * 9/5) + 32;
        resultText = `Fahrenheit: ${fahrenheitTemp.toFixed(2)}°F`;
    } else if (inputUnit === 'fahrenheit') {
        const celsiusTemp = (inputTemp - 32) * 5/9;
        resultText = `Celsius: ${celsiusTemp.toFixed(2)}°C`;
    } else if (inputUnit === 'kelvin') {
        const celsiusTemp = inputTemp - 273.15;
        resultText = `Celsius: ${celsiusTemp.toFixed(2)}°C`;
    }

    document.getElementById('result').innerHTML = resultText;
});
