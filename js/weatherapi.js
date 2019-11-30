const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=e238cca28558d6bb8d70b2efa85398d0&units=imperial";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('current-temp').textContent = jsObject.main.temp;
    document.getElementById('humidity').textContent = jsObject.main.humidity;
    document.getElementById('wind-speed').textContent = jsObject.wind.speed;
  });
