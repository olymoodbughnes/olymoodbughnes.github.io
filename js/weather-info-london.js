import { SetImage } from "./images.js";
import { DisplayIcon, DisplayLocationName, DisplayTemp, DisplayWeatherDesc, DisplayRain, DisplayLocalTime, DisplayFeel } from "./weather-info-handler.js";

const londonWeather = 'https://api.openweathermap.org/data/2.5/weather?lat=51.5072&lon=-0.1276&appid=58173614dccdb2e31d9fee6b2beef1a1';
const doverWeather = 'https://api.openweathermap.org/data/2.5/weather?lat=-33.86&lon=151.21&appid=58173614dccdb2e31d9fee6b2beef1a1';
const lasvegasWeather = 'https://api.openweathermap.org/data/2.5/weather?lat=36.1699&lon=-115.1398&appid=58173614dccdb2e31d9fee6b2beef1a1';
let latlong = "";
let chosenCity;
window.onload = function () {

  chosenCity = prompt("Type 1 for London, Type 2 For Dover.")
  alert(chosenCity);

  if (chosenCity === "1") {


    latlong = londonWeather;

  } else if (chosenCity === "2") {


    latlong = doverWeather;

  } else {

    latlong = lasvegasWeather;

  }


  fetch(latlong)
    .then(response => response.json())
    .then(data => {





      const weatherID = data.weather[0].id;
      const weatherGeneral = data.weather[0].main;
      const weatherDecscription = data.weather[0].description;
      const weatherIcon = data.weather[0].icon;
      const weatherLocation = data.name;
      const localTimezone = data.timezone;
      let localRain = 0;
      //Check if there is Rain.
      alert(`Main:  ${weatherDecscription} `);

      if (weatherDecscription.includes("rain") || weatherDecscription.includes("Rain")) {

        const localRain = data.rain["1h"];
        DisplayRain(localRain);
      }

      const weatherTempCurrent = data.main.temp;
      const weatherTempMax = data.main.temp_max;
      const weatherTempMin = data.main.temp_min;
      const weatherTempFeel = data.main.feels_like;
      const sunriseTime = data.sys.sunrise;
      const sunsetTime = data.sys.sunset;

      //alert(`Main:  ${localTimezone} `);


      DisplayIcon(weatherID, weatherIcon);
      DisplayLocationName(weatherLocation);
      DisplayTemp(weatherTempMin, weatherTempMax, weatherTempCurrent);
      DisplayWeatherDesc(weatherDecscription);
      DisplayLocalTime(localTimezone, sunriseTime, sunsetTime);
      DisplayFeel(weatherTempFeel)



    })
    .catch(error => {
      console.error('Error retrieving data from API:', error);
    });
}




