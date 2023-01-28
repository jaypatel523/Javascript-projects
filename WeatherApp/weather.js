"use strict";

const APIkey = "2adce766a7d93b20b177c2e9483de5e4";
const units = "metric";



let submit = document.querySelector(".btn");
submit.addEventListener("click", function () {
    let city = document.getElementById("getvalue").value;
    fetchWeather(city);

})

document.body.addEventListener("keyup", (e) => {
    if (e.key == 'Enter' && document.querySelector("input").value != '') {
        let city = document.getElementById("getvalue").value;
        fetchWeather(city);
    }
})



const fetchWeather = (city) => {

    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIkey + "&units=" + units;

    fetch(url)
        .then((response) => response.json())
        .then((data) => this.display(data))
        .catch(() => {
            document.getElementById("getvalue").value = '';
            alert("Enter the valid city");
            document.querySelector(".content").style.display = "none";
        });
}


function display(data) {

    let cityName = data.name;
    let icon = data.weather[0].icon;
    let description = data.weather[0].description;
    let temp = data.main.temp;
    let speed = data.wind.speed;


    document.querySelector(".city .cityName").textContent = cityName;
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
    document.querySelector(".description").textContent = description;
    document.querySelector(".temp").textContent = temp + "°C";
    document.querySelector(".wind").textContent = "Wind: " + speed + "km/h";
    document.querySelector(".load").style.display = "block";
    document.getElementById("getvalue").value = '';


}


