  function getWindChill() {
                var temp = parseFloat(document.getElementById('current-temp').innerHTML);
                var speed = parseFloat(document.getElementById('wind-speed').innerHTML);

                console.log(temp);
                console.log(speed);

                var wChill = 35.74 + (0.6215 * temp) - (35.75 * (speed ** 0.16)) + (0.4275 * temp * (speed ** 0.16));

                var content = "Wind Chill: " + wChill.toPrecision(2) + "&#176;F";

                console.log(wChill);

                document.getElementById("windchill").innerHTML = content;
            }
