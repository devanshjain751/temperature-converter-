function convertTemperature() {
    var celsius = parseFloat(document.getElementById('celsius').value);
    var fahrenheit = parseFloat(document.getElementById('fahrenheit').value);

    if (!isNaN(celsius)) {
        var resultFahrenheit = (celsius * 9/5) + 32;
        document.getElementById('fahrenheit').value = resultFahrenheit.toFixed(2);
    } else if (!isNaN(fahrenheit)) {
        var resultCelsius = (fahrenheit - 32) * 5/9;
        document.getElementById('celsius').value = resultCelsius.toFixed(2);
    } else {
        alert('Please enter a valid temperature.');
    }
}
