const URL =
  "https://api.openweathermap.org/data/2.5/weather?q=tooele&&units=imperial&appid=690b34bf536e8e5ed7ad088e82607116";
  const apiKey = `690b34bf536e8e5ed7ad088e82607116`;
  const cityName = 'tooele';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=imperial`;

fetch(url)
.then(response => response.json())
.then(jsObject => {
    console.log(jsObject);
    displayWeatherData(jsObject);
})
.catch(error => console.error('Error fetching weather data:', error));

function displayWeatherData(data){
    const summary = document.querySelector('#summary');
    const currentTemp = document.querySelector('currentTemp');
    const feelsLike = document.querySelector('#feelsLike');
    const highs = document.querySelector('#highs');
    const lows = document.querySelector('#lows')
    const humidity = document.querySelector('#humidity');
    const windSpeed = document.querySelector('#windSpeed');

    summary.textContent = `Currently: ${data.weather[0].description}`;
    currentTemp.textContent = `Current Tempature: ${Math.round(data.main.temp)}°`;
    feelsLike.textContent = `Feels Like: ${Math.round(data.main.feels_like)}°`;
    highs.textContent = `Highs: ${Math.round(data.main.temp_max)}°`;
    lows.textContent = `Lows: ${Math.round(data.main.temp_min)}°`;
    humidity.textContent = `Humidity: ${data.main.humidity}%`;
    windSpeed.textContent = `Wind Speed: ${Math.round(data.wind.speed)} mph`;
}

    //  <li id="summary">Currently: Cloudy</li>
    //         <li id="currentTemp">Current Tempature: 42°</li>
    //         <li id="feelsLike">Feels Like: 42°</li>
    //         <li id="highs">Highs: 50°</li>
    //         <li id="lows">Lows: 36°</li>
    //         <li id="humidity">Humidity: 42%</li>
    //         <li id="windSpeed">Wind Speed: 2 mph</li>


