import { changeIcon } from "./button-animation.js";
import { DisplayIcon, DisplayLocationName, DisplayTemp, DisplayWeatherDesc, DisplayRain, DisplayLocalTime, DisplayFeel } from "./weather-info-handler.js";
changeIcon
const thirdLocWeather = 'Las%20Vegas';


let skip = true;
export function fetchThird() {

    // chosenCity = prompt("Type 1 for London, Type 2 For Dover.")




    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${thirdLocWeather}&appid=f145874df71d960cea49d51f34cba9da`)
        .then(response => response.json())
        .then(data => {



            const weatherID = data.weather[0].id;
            const weatherIcon = data.weather[0].icon;
            const eIcon = "current-general-conditions-third"

            DisplayIcon(weatherID, weatherIcon, eIcon);






        })
        .catch(error => {
            console.error('Error retrieving data from API:', error);
        });
    if (skip) {
        changeIcon();
    } else {

        skip = true;

    }
}

