

const URL = 'https://api.openweathermap.org/data/2.5/weather?q=tooele&&units=imperial&appid=690b34bf536e8e5ed7ad088e82607116';

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







// `https://api.openweathermap.org/data/2.5/weather?q=tooele&&units=imperial&appid=690b34bf536e8e5ed7ad088e82607116`
// stats
// summary
// current-desc
// current-temp
// current-windChill
// current-humid
// current-windSpeed