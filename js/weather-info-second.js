import { DisplayIcon, DisplayLocationName, DisplayTemp, DisplayWeatherDesc, DisplayRain, DisplayLocalTime, DisplayFeel } from "./weather-info-handler.js";
import { fetchThird } from "./weather-info-third.js";
const secondLocWeather = 'Sydney';

export function fetchSecond() {

    // chosenCity = prompt("Type 1 for London, Type 2 For Dover.")




    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${secondLocWeather}&appid=f145874df71d960cea49d51f34cba9da`)
        .then(response => response.json())
        .then(data => {

            const weatherID = data.weather[0].id;
            const weatherIcon = data.weather[0].icon;
            const eIcon = "current-general-conditions-second"

            DisplayIcon(weatherID, weatherIcon, eIcon);



            fetchThird();

        })
        .catch(error => {
            console.error('Error retrieving data from API:', error);
        });
}

