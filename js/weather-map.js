const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
const currentWeatherItemsEl = document.getElementById('current-weather-items');
const timezone = document.getElementById('time-zone');
const countryEl = document.getElementById('country');
const weatherForecastEl = document.getElementById('weather-forecast');
const currentTempEl = document.getElementById('current-temp');

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


setInterval(() => {
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();
    const hoursIn12HrFormat = hour >= 13 ? hour % 12 : hour;
    const minutes = time.getMinutes();
    const ampm = hour >= 12 ? 'PM' : 'AM';

    timeEl.innerHTML = (hoursIn12HrFormat < 10 ? '0' + hoursIn12HrFormat : hoursIn12HrFormat) + ':' + (minutes < 10 ? '0' + minutes : minutes) + ' ' + `<span id="am-pm">${ampm}</span>`;

    dateEl.innerHTML = days[day] + ', ' + date + ' ' + months[month];
}, 1000);

getWeatherData();

function getWeatherData() {
    navigator.geolocation.getCurrentPosition((success) => {
        let { latitude, longitude } = success.coords;

        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=imperial&appid=${weather_Map}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                showWeatherData(data);
            });
    });
}

function showWeatherData(data) {
    let { humidity, pressure, sunrise, sunset, wind_speed } = data.current;

    timezone.innerHTML = data.timezone;
    countryEl.innerHTML = data.lat + 'N ' + data.lon + 'E';

    currentWeatherItemsEl.innerHTML = `
        <div class="weather-item">
            <div>Humidity</div>
            <div>${humidity}%</div>
        </div>
        <div class="weather-item">
            <div>Pressure</div>
            <div>${pressure}</div>
        </div>
        <div class="weather-item">
            <div>Wind Speed</div>
            <div>${wind_speed} m/s</div>
        </div>
        <div class="weather-item">
            <div>Sunrise</div>
            <div>${moment.unix(sunrise).format('HH:mm a')}</div>
        </div>
        <div class="weather-item">
            <div>Sunset</div>
            <div>${moment.unix(sunset).format('HH:mm a')}</div>
        </div>
    `;

    let otherDayForcast = '';
    data.daily.forEach((day, idx) => {
        if (idx == 0) {
            currentTempEl.innerHTML = `
            <img src="http://openweathermap.org/img/wn/${day.weather[0].icon}@4x.png" alt="weather icon" class="w-icon">
            <div class="other">
                <div class="day">${window.moment(day.dt * 1000).format('dddd')}</div>
                <div class="temp">Night - ${day.temp.night}&deg;F</div>
                <div class="temp">Day - ${day.temp.day}&deg;F</div>
            </div>
            `;
        } else {
            otherDayForcast += `
            <div class="weather-forecast-item">
                <div class="day">${window.moment(day.dt * 1000).format('ddd')}</div>
                <img src="http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png" alt="weather icon" class="w-icon">
                <div class="temp">Night - ${day.temp.night}&deg; F</div>
                <div class="temp">Day - ${day.temp.day}&deg;F</div>
            </div>
            `;
        }
    });

    weatherForecastEl.innerHTML = otherDayForcast;
}

mapboxgl.accessToken = MB_Key;
const map = new mapboxgl.Map({
    container: 'map',
    center: [-98.497356, 29.418666],
    zoom: 9
});

function searchWeather() {
    var cityName = document.getElementById('city-input').value;

    //  weather data
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${weather_Map}`)
        .then(response => response.json())
        .then(data => {
            console.log('Current Weather data for', cityName, data);

            updateMap(data.coord.lon, data.coord.lat);
            showWeatherData(data);

            // Fetch 5-day forecast data
            return fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=imperial&appid=${weather_Map}`);
        })
        .then(response => response.json())
        .then(forecastData => {
            console.log('5-Day Forecast for', cityName, forecastData);

            show5DayForecast(forecastData);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

function updateMap(lon, lat) {
    map.flyTo({ center: [lon, lat], zoom: 10 });
}

//  marker element
const markerElement = document.createElement('div');
markerElement.className = 'marker';

const marker = new mapboxgl.Marker(markerElement, { draggable: true })
    .setLngLat([-98.497356, 29.418666])
    .addTo(map);

marker.on('dragend', () => {
    const lngLat = marker.getLngLat();
    console.log('Marker dragged to:', lngLat);
});
