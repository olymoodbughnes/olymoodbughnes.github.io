
import { DisplayIcon, DisplayLocationName, DisplayTemp, DisplayWeatherDesc, DisplayRain, DisplayLocalTime, DisplayFeel } from "./weather-info-handler.js";
import { fetchThird } from "./weather-info-third.js";

let secondLocWeather = 'Sydney';

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

export function fetchSecondDetails() {

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${secondLocWeather}&appid=f145874df71d960cea49d51f34cba9da`)
        .then(response => response.json())
        .then(data => {
            const weatherDecscription = data.weather[0].description;
            const weatherTempCurrent = data.main.temp;
            const weatherTempMax = data.main.temp_max;
            const weatherTempMin = data.main.temp_min;
            const weatherTempFeel = data.main.feels_like;
            const sunriseTime = data.sys.sunrise * 1000;
            const sunsetTime = data.sys.sunset * 1000;
            const weatherLocation = data.name;
            const localTimezone = data.timezone;


            const weatherID = data.weather[0].id;
            const weatherIcon = data.weather[0].icon;
            const eIcon = "current-general-conditions-second";
            if (weatherDecscription.includes("rain") || weatherDecscription.includes("Rain")) {

                const localRain = data.rain["1h"];
                DisplayRain(localRain);
            }

            DisplayIcon(weatherID, weatherIcon, eIcon);


            DisplayLocationName(weatherLocation);
            DisplayTemp(weatherTempMin, weatherTempMax, weatherTempCurrent);
            DisplayWeatherDesc(weatherDecscription);
            DisplayLocalTime(localTimezone, sunriseTime, sunsetTime);
            DisplayFeel(weatherTempFeel);




        })
        .catch(error => {
            console.error('Error retrieving data from API:', error);
        });


}

export function setLocationTwo(newLoc) {
    secondLocWeather = newLoc;

}