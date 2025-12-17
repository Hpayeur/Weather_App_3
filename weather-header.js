

const URL = 'https://api.openweathermap.org/data/2.5/weather?q=tooele&&units=imperial&appid=690b34bf536e8e5ed7ad088e82607116';

const apiKey = '690b34bf536e8e5ed7ad088e82607116'; 
const weatherDiv = document.getElementById('weather');
const cityInput = document.getElementById('cityInput');
const fetchWeatherBtn = document.getElementById('fetchWeatherBtn')

fetch (URL)
.then ((respone)=> respone.json())
.then ((jsobject)=>{console.log (jsobject);

});

function removeLoadingMessage(){
    const loadingMessage = document.querySelector('.loading');
    if (loadingMessage){
        loadingMessage.remove();
    }
    }

    fetch(URL)
    .then((response)=> {
        if (!response.ok){
            throw Error ("Something Clearly went wrong");
        }
        return response.json();
    })

    .then((jsobject)=>{
        removeLoadingMessage();
        console.log(jsobject);
    })

function displayResults (jsobject){
    document.getElementById('stats').textContent = jsobject.name;
    document.getElementById('summary').textContent = jsobject.weather[0].description;
    document.getElementById('current-temp').textContent = jsobject.main.temp;
    document.getElementById('current-humid').textContent = jsobject.main.humidity;
    document.getElementById('current-windSpeed').textContent = jsobject.wind.speed;
}


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