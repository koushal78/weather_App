const apikey = "8005e3c83ac5aa596bae9aa6c714682d";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const seacrchbox = document.querySelector(".search input")
const seacrchbuttem = document.querySelector(".search button")
const icon = document.querySelector(".weather-icon");



async function checkweather(city){
    const response = await fetch(apiurl+ city +`&appid=${apikey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp )+"°C"; 
    document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
    document.querySelector(".wind").innerHTML = data.wind.speed+"Km/hr";
if(data.weather[0].main == "Clouds"){
    icon.src = "images/clouds.png"


}
else if(data.weather[0].main == "Clear"){
    icon.src = "images/clear.png"


}
else if(data.weather[0].main == "Drizzle"){
    icon.src = "images/drizzle.png"


}
else if(data.weather[0].main == "Mist"){
    icon.src = "images/mist.png"


}
else if(data.weather[0].main == "Snow"){
    icon.src = "images/snow.png"


}
else if(data.weather[0].main == "Rain"){
    icon.src = "images/rain.png"


}

}
seacrchbuttem.addEventListener("click",()=>{
    checkweather(seacrchbox.value);
})
