
fetchWeather(703448);
document.querySelector('.city__form').onchange = city;

function city() {
    cityCode = document.querySelector('.city__form').value;
    fetchWeather(cityCode);
}


function fetchWeather(cityCode) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?&lang=ru&id=${cityCode}&appid=ca194fe7aa51dac5ad27b1f99d79a628`)
        .then(function (resp) { return resp.json() })
        .then(function (data) {
            console.log(data);
            // document.querySelector('.city').textContent = data.name;
            let weather = data.weather[0].description;
            let capitalWeather = weather.charAt(0).toUpperCase() + weather.slice(1); // заглавная буква для состояния погоды

            // ------ смена цвета шрифта если t >= 12*C на красный и иний если < 12*C
            let tempColor = Math.round(+data.main.temp - 273);
            let tempNormal = document.querySelector('.temp');
            if (tempColor >= 12) {
                tempNormal.style.color = "red";
            }
            else {
                tempNormal.style.color = "blue";
            }
            tempNormal.innerHTML = tempColor + '&deg;';

            let feelsColor = Math.round(+data.main.feels_like - 273);
            let feelsNormal = document.querySelector('.feels');
            if (feelsColor >= 12) {
                feelsNormal.style.color = "red";
            }
            else {
                feelsNormal.style.color = "blue";
            }
            feelsNormal.innerHTML = feelsColor + '&deg;';
            // -------

            // document.querySelector('.feels').innerHTML = Math.round(data.main.feels_like - 273) + '&deg;';
            document.querySelector('.weather').textContent = capitalWeather;
            document.querySelector('.icon').innerHTML = `<img src='https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png'>`;

            let timeZone = +data.timezone / 3600; // получаем корректировку по часовому поясу для города
            // console.log(timeZone);

            let sunrise = new Date(data.sys.sunrise * 1000).toISOString(); // unix time to iso string
            // console.log(sunrise);
            let srHours = sunrise[11] + sunrise[12]; // выборка значений часа из строки
            let srCorrHours = +srHours + timeZone; // корректировка с учетом таймзоны
            let srMinutes = sunrise[14] + sunrise[15]; // выборка значений минут из строки

            let sunset = new Date(data.sys.sunset * 1000).toISOString();
            let ssHours = sunset[11] + sunset[12];
            let ssCorrHours = +ssHours + timeZone;
            let ssMinutes = sunset[14] + sunset[15];

            document.querySelector('.sunrise').textContent = srCorrHours + ":" + srMinutes;
            document.querySelector('.sunset').textContent = ssCorrHours + ":" + ssMinutes;
        })
        .catch(function () { });
}