const URL =
  "https://api.openweathermap.org/data/2.5/weather?q=tooele&&units=imperial&appid=690b34bf536e8e5ed7ad088e82607116";

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

fetch(URL)
.then((response) =>{
    if (!response.ok) {
        throw Error ("Unknown Error:);")
    }
    return response.json();
})

function displayStats(jsObject){
    document.getElementById('current-temp').textContent = Math.round(jsObject.main.temp);
    document.getElementById('current-desc').textContent = jsObject.weather[0].description;
    document.getElementById('current-humid').textContent = jsObject.main.humidity;
    document.getElementById('current-windSpeed').textContent = Math.round(jsObject.wind.speed);
}



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
