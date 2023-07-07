// 80d6cd1ff61fae9d40f22fa647bbbe25
//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const weatherApi={
    key:"80d6cd1ff61fae9d40f22fa647bbbe25",
    baseUrl:"https://api.openweathermap.org/data/2.5/weather"
}

const search = document.getElementById("search_box");
search.addEventListener('keypress', (event) => {
    
    if(event.keyCode == 13) {
        console.log(search.value);
        getweather(search.value);
        document.querySelector('.weather_detail').style.display = "block";
    }
});

function getweather(city){
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather=>{
        return weather.json();
    }).then(showWeatherReport);
}

function showWeatherReport(weather){
    console.log(weather);

   let city=document.getElementById('city');
   city.innerText=`${weather.name},${weather.sys.country}`;

   let temperatue=document.getElementById('temp');
   temperatue.innerHTML=`${Math.round(weather.main.temp)}&deg;C`;
  
   let minMaxtemp=document.getElementById('min_max');
   minMaxtemp.innerHTML=`${Math.floor(weather.main.temp_min)}&deg;C (min)/${Math.ceil(weather.main.temp_max)}&deg;C (max)`

   let weathertype=document.getElementById('weather');
   weathertype.innerText=`${weather.weather[0].main}`;

   let date=document.getElementById('date');
   let todayDate = new Date();
   date.innerText=dateManager(todayDate);

   function dateManager(dateArg){

    let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date = dateArg.getDate();
    let day = days[dateArg.getDay()];

    return `${date} ${month} (${day}), ${year}`;

   }

}










