// Function to convert Celsius to other units
function convertCelsius(celsiusValue) {
    const fahrenheitValue = (celsiusValue * 9/5) + 32;
    const kelvinValue = celsiusValue + 273.15;
    const rankineValue = (celsiusValue + 273.15) * 9/5;
    return { fahrenheitValue, kelvinValue, rankineValue };
}

// Function to convert Fahrenheit to other units
function convertFahrenheit(fahrenheitValue) {
    const celsiusValue = (fahrenheitValue - 32) * 5/9;
    const kelvinValue = (fahrenheitValue + 459.67) * 5/9;
    const rankineValue = fahrenheitValue + 459.67;
    return { celsiusValue, kelvinValue, rankineValue };
}

// Function to convert Kelvin to other units
function convertKelvin(kelvinValue) {
    const celsiusValue = kelvinValue - 273.15;
    const fahrenheitValue = (kelvinValue * 9/5) - 459.67;
    const rankineValue = kelvinValue * 9/5;
    return { celsiusValue, fahrenheitValue, rankineValue };
}

// Function to convert Rankine to other units
function convertRankine(rankineValue) {
    const celsiusValue = (rankineValue - 491.67) * 5/9;
    const fahrenheitValue = rankineValue - 459.67;
    const kelvinValue = rankineValue * 5/9;
    return { celsiusValue, fahrenheitValue, kelvinValue };
}

// Function to update the temperatures
function updateTemperatures() {
    const celsiusInput = document.getElementById('celsius');
    const fahrenheitInput = document.getElementById('fahrenheit');
    const kelvinInput = document.getElementById('kelvin');
    const rankineInput = document.getElementById('rankine');

    // If the Celsius input is changed
    celsiusInput.addEventListener('input', () => {
        const celsiusValue = parseFloat(celsiusInput.value);
        if (!isNaN(celsiusValue)) {
            const { fahrenheitValue, kelvinValue, rankineValue } = convertCelsius(celsiusValue);
            fahrenheitInput.value = fahrenheitValue.toFixed(2);
            kelvinInput.value = kelvinValue.toFixed(2);
            rankineInput.value = rankineValue.toFixed(2);
        } else {
            fahrenheitInput.value = '';
            kelvinInput.value = '';
            rankineInput.value = '';
        }
    });

    // If the Fahrenheit input is changed
    fahrenheitInput.addEventListener('input', () => {
        const fahrenheitValue = parseFloat(fahrenheitInput.value);
        if (!isNaN(fahrenheitValue)) {
            const { celsiusValue, kelvinValue, rankineValue } = convertFahrenheit(fahrenheitValue);
            celsiusInput.value = celsiusValue.toFixed(2);
            kelvinInput.value = kelvinValue.toFixed(2);
            rankineInput.value = rankineValue.toFixed(2);
        } else {
            celsiusInput.value = '';
            kelvinInput.value = '';
            rankineInput.value = '';
        }
    });

    // If the Kelvin input is changed
    kelvinInput.addEventListener('input', () => {
        const kelvinValue = parseFloat(kelvinInput.value);
        if (!isNaN(kelvinValue)) {
            const { celsiusValue, fahrenheitValue, rankineValue } = convertKelvin(kelvinValue);
            celsiusInput.value = celsiusValue.toFixed(2);
            fahrenheitInput.value = fahrenheitValue.toFixed(2);
            rankineInput.value = rankineValue.toFixed(2);
        } else {
            celsiusInput.value = '';
            fahrenheitInput.value = '';
            rankineInput.value = '';
        }
    });

    // If the Rankine input is changed
    rankineInput.addEventListener('input', () => {
        const rankineValue = parseFloat(rankineInput.value);
        if (!isNaN(rankineValue)) {
            const { celsiusValue, fahrenheitValue, kelvinValue } = convertRankine(rankineValue);
            celsiusInput.value = celsiusValue.toFixed(2);
            fahrenheitInput.value = fahrenheitValue.toFixed(2);
            kelvinInput.value = kelvinValue.toFixed(2);
        } else {
            celsiusInput.value = '';
            fahrenheitInput.value = '';
            kelvinInput.value = '';
        }
    });
}

// Call the updateTemperatures function when the DOM is ready
document.addEventListener('DOMContentLoaded', updateTemperatures);
