const URL =
  "https://api.openweathermap.org/data/2.5/weather?q=tooele&&units=imperial&appid=690b34bf536e8e5ed7ad088e82607116";

  const apiKey = "690b34bf536e8e5ed7ad088e82607116";
  const cityid = "tooele";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?id=${cityid}&appid=${apiKey}&units=imperial`;

fetch(URL)
.then((response) => response.json())
.then((jsObject) => {
    console.log(jsObject);

    function removeLoadingMessage(){
        const loadingMessage = document.getElementById('loading-message');
        if (loadingMessage) {
            loadingMessage.remove();
        }
    }
    removeLoadingMessage();
})

// fetch(URL)
// .then((response) =>{
//     if (!response.ok) {
//         throw Error ("Unknown Error:);")
//     }
//     return response.json();
// })

function displayStats(jsObject){
    document.getElementById('current-temp').textContent = Math.round(jsObject.main.temp);
    document.getElementById('current-desc').textContent = jsObject.weather[0].description;
    document.getElementById('current-humid').textContent = jsObject.main.humidity;
    document.getElementById('current-windSpeed').textContent = Math.round(jsObject.wind.speed);
}

function displayWeatherData(data){
    const descElement = document.getElementById('cuurent-desc');
    const tempElement = document.getElementById('current-temp');
    const windChillElement = document.getElementById('current-windChill');
    const humidElement = document.getElementById('current-humid');
    const windSpeedElement = document.getElementById('current-windSpeed');

    descElement.textContent = data.weather[0].description;
    tempElement.textContent = Math.round(data.main.temp);
    humidElement.textContent = data.main.humidity;
    windSpeedElement.textContent = Math.round(data.wind.speed);
}

if (data&& data.main && data.weather && data.wind)
{
    descElement.textContect = data.weather[0].description;
    tempElement.textContect = `${data.main.temp}°F`;
    humidElement.textContect = `${data.main.humidity}%`;
    windSpeedElement.textContect = `${data.wind.speed} mph`;
}

if (data.main.feels_like !== undefined){
    windChillElement.textContent = `${data.main.feels_like}°F`;
}
else {
    windChillElement.textContent = "N/A";
    descElement.textContent = 'Data not available';
    tempElement.textContent = 'Data not available';
    windChillElement.textContent = 'Data not available';
    humidElement.textContent = 'Data not available';
    windSpeedElement.textContent = 'Data not available';
}

async function fetchWeather(){
    try{
        const response = await fetch(apiUrl);
        if (!response.ok){
            throw new Error (`Http error: ${response.status}`);
        }
const data = await response.json();
displayWeatherData(data);
    }
    catch (error){
        console.error("Could not fetch weather data:", error);
        document.getElementById('weather-stats').textContent = "Unable to retrieve weather data at this time.";
    }
}
fetchWeather();

// displayStats(weatherData);
// console.log("Summary:", jsObject.weather[0].description);
// console.log("Temperature:", Math.round(jsObject.main.temp));
// console.log("Humidity:", jsObject.main.humidity);
// console.log("Wind Speed:", Math.round(jsObject.wind.speed));

// stats
// summary
// current-desc
// current-temp
// current-windChill
// current-humid
// current-windSpeed

// let weatherIcon = jsObject.weather;
// for (let i = 0; i < weatherIcon.length; i++){
//     let iconCode = weatherIcon[i].icon;
//     let iconPath = `https://openweathermap.org/img/w/${iconCode}.png`;
//     document.getElementById('weather-icon').setAttribute('src', iconPath);

//     let img= document.createElement(`img`);
//     img.src = iconPath;
//     img.alt = weatherIcon[i].description;
//     img.className = 'weather-icon';
//     weatherDiv.appendChild (img);
