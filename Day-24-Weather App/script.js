
document.getElementById('searchBtn').addEventListener('click', function () {
    const city = document.getElementById('city').value;
    fetchWeatherData(city);
});

function fetchWeatherData(city) {
    const apiKey = '168771779c71f3d64106d8a88376808a';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            document.getElementById('cityName').textContent = data.name;
            document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
            document.getElementById('weatherCondition').textContent = `Condition: ${data.weather[0].description}`;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

function fetchForecastData(city) {
    const apiKey = '168771779c71f3d64106d8a88376808a';
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const forecastContainer = document.getElementById('forecastContainer');
            forecastContainer.innerHTML = '';

            data.list.filter((_, index) => index % 8 === 0).forEach(forecast => {
                const dayDiv = document.createElement('div');
                const weatherDescription = forecast.weather[0].description;
                const iconClass = getIconClass(weatherDescription);

                dayDiv.className = 'day';
                dayDiv.innerHTML = `
                    <p>${new Date(forecast.dt_txt).toLocaleDateString()}</p>
                    <p>Temp: ${forecast.main.temp}°C</p>
                    <p>${weatherDescription}</p>
                    <p class="icon"><i class="${iconClass}"></i></p>
                `;

                forecastContainer.appendChild(dayDiv);
            });
        })
        .catch(error => console.error('Error fetching forecast data:', error));
}

function getIconClass(description) {
    const iconMap = {
        'clear sky': 'fas fa-sun',
        'few clouds': 'fas fa-cloud-sun',
        'overcast clouds': 'fas fa-cloud',
        'broken clouds': 'fas fa-cloud',
        'light rain': 'fas fa-cloud-showers-heavy',
        'rain': 'fas fa-cloud-moon-rain',
        'thunderstorm': 'fas fa-bolt',
        'snow': 'fas fa-snowflake',
        'mist': 'fas fa-cloud-sun'
    };
    return iconMap[description] || 'fas fa-question';
}

document.getElementById('searchBtn').addEventListener('click', function () {
    const city = document.getElementById('city').value;
    fetchWeatherData(city);
    fetchForecastData(city);
});
