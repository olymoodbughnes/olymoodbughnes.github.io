
import { changeIcon } from "./button-animation.js";
import { DisplayIcon, DisplayLocationName, DisplayTemp, DisplayWeatherDesc, DisplayRain, DisplayLocalTime, DisplayFeel } from "./weather-info-handler.js";

let thirdLocWeather = 'Las%20Vegas';


let skip = true;
export function fetchThird() {

    // chosenCity = prompt("Type 1 for London, Type 2 For Dover.")




    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${thirdLocWeather}&appid=f145874df71d960cea49d51f34cba9da`)
        .then(response => {

            if (!response.ok) {

                throw new Error('City not found');
            }
            return response.json()
        })

        .then(data => {



            const weatherID = data.weather[0].id;
            const weatherIcon = data.weather[0].icon;
            const eIcon = "current-general-conditions-third"

            DisplayIcon(weatherID, weatherIcon, eIcon);






        })
        .catch(error => {
            console.error('Error retrieving data from API:', error);


            document.getElementById("temperature").textContent = "City data cannot be found or does not exist. Check spelling or name for errors.";
            thirdLocWeather = "luton";
        });
    if (skip) {
        changeIcon();
    } else {

        skip = true;

    }

}

export function fetchThirdDetails() {

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${thirdLocWeather}&appid=f145874df71d960cea49d51f34cba9da`)
        .then(response => {

            if (!response.ok) {

                throw new Error('City not found');
            }
            return response.json()
        })

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
            const eIcon = "current-general-conditions-third";

            if (weatherDecscription.includes("rain") || weatherDecscription.includes("Rain")) {

                const localRain = data.rain["1h"];
                DisplayRain(localRain);
            } else {

                document.getElementById("rain").textContent = "No rain";

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

            document.getElementById("temperature").textContent = "City data cannot be found or does not exist. Check spelling or name for errors.";
            thirdLocWeather = "las&20vegas";
        });


}

export function setLocationThree(newLoc) {
    thirdLocWeather = newLoc;

}