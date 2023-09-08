function convertToOtherUnits() {
    // Get the input value in Celsius
    const celsiusInput = document.getElementById('celsius').value;

    // Check if the input is a valid number
    if (!isNaN(celsiusInput)) {
        // Convert to Fahrenheit
        const fahrenheit = (celsiusInput * 9/5) + 32;
        // Convert to Kelvin
        const kelvin = parseFloat(celsiusInput) + 273.15;

        // Display the results
        document.getElementById('fahrenheit').textContent = fahrenheit.toFixed(2);
        document.getElementById('kelvin').textContent = kelvin.toFixed(2);
    } else {
        alert('Please enter a valid temperature in Celsius.');
    }
}
