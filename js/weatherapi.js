let cityID = "5604473";
let townsIndex = 4;

if (document.title == "Soda Springs") {
    cityID = "5607916";
    townsIndex = 5;
} else if (document.title == "Fish Haven") {
    //console.log("Fish Haven");
    cityID = "5585010";
    townsIndex = 1;
}

const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=" + cityID + "&APPID=e238cca28558d6bb8d70b2efa85398d0&units=imperial";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    temp = jsObject.wind.temp;
    speed = jsObject.wind.speed;
    document.getElementById('current-weather').textContent = jsObject.weather[0].description;
    document.getElementById('current-temp').textContent = jsObject.main.temp;
    document.getElementById('humidity').textContent = jsObject.main.humidity;
    document.getElementById('wind-speed').textContent = jsObject.wind.speed;

    getWindChill(temp, speed);
  });



function getWindChill(tempVal, speedVal) {
                var temp = tempVal;
                var speed = speedVal;

                var wChill = 35.74 + (0.6215 * temp) - (35.75 * (speed ** 0.16)) + (0.4275 * temp * (speed ** 0.16));

                var content = "Wind Chill: " + wChill.toPrecision(2) + "&#176;F";

                document.getElementById("windchill").innerHTML = content;
            }