
import { oneTimeDisplayinator } from "./images.js";
import { DisplayIcon, DisplayLocationName, DisplayTemp, DisplayWeatherDesc, DisplayRain, DisplayLocalTime, DisplayFeel } from "./weather-info-handler.js";
import { fetchSecond, setLocationTwo } from "./weather-info-second.js";
import { updateIfHere } from "./button-animation.js";
import { setLocationThree } from "./weather-info-third.js";

let firstLocWeather = 'London';
let secondLocWeather = 'Dover';
let thirdLocWeather = 'Chicago';

window.onload = function () {


  const cookies = document.cookie.split("; ");
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].split("=");
    if (cookie[0] === "myCity1") {
      const cityCookie1 = cookie[1];
      setLocationOne(cityCookie1);
      break;
    } else {
      firstLocWeather = "London";
    }
  }

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].split("=");
    if (cookie[0] === "myCity2") {
      const cityCookie2 = cookie[1];

      setLocationTwo(cityCookie2);
      secondLocWeather = cityCookie2;
      break;
    } else {
      setLocationTwo("Dover");
    }
  }

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].split("=");
    if (cookie[0] === "myCity3") {
      const cityCookie3 = cookie[1];
      setLocationThree(cityCookie3);
      thirdLocWeather = cityCookie3;
      break;
    } else {
      setLocationThree("Portsmouth");
    }
  }



  const changeCityOneButton = document.getElementById("city-one");
  const changeCityTwoButton = document.getElementById("city-two");
  const changeCityThreeButton = document.getElementById("city-three");
  const inputCity = document.getElementById("city");

  const showCityOptions = document.getElementById("show-options-city");
  const cityOptions = document.getElementById("city-select");
  const closeCityOptions = document.getElementById("close-city-options");
  const navBar = document.getElementById("nav-container");
  const showNavBar = document.getElementById("nav-container-sm-screens");

  changeCityOneButton.textContent = firstLocWeather.toUpperCase();
  changeCityTwoButton.textContent = secondLocWeather.toUpperCase();
  changeCityThreeButton.textContent = thirdLocWeather.toUpperCase();


  showNavBar.addEventListener('click', () => {

    if (navBar.style.display == "grid")
      navBar.style.display = "none";
    else {
      navBar.style.display = "grid";

    }

  })


  changeCityOneButton.addEventListener('click', () => {
    const city = inputCity.value;


    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f145874df71d960cea49d51f34cba9da`)
      .then(response => {

        if (!response.ok) {

          throw new Error('City not found');

        } else {

          setLocationOne(city);
          changeCityOneButton.textContent = "";
          changeCityOneButton.textContent = city.toUpperCase();
          document.cookie = "myCity1=" + city + "; expires=" + new Date(new Date().getTime() + 31536000000).toUTCString() + "; path=/";
          updateIfHere();
        }

        return response.json();
      })

      .catch(error => {

        console.error('Error retrieving data from API:', error);
        document.getElementById("error-message").textContent = "City data cannot be found or does not exist.";
        document.getElementById("error-message").style.color = "red";

      });




    inputCity.value = "";



  });

  changeCityTwoButton.addEventListener('click', () => {
    const city = inputCity.value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f145874df71d960cea49d51f34cba9da`)
      .then(response => {

        if (!response.ok) {

          throw new Error('City not found');

        } else {
          setLocationTwo(city);
          changeCityTwoButton.textContent = "";
          changeCityTwoButton.textContent = city.toUpperCase();
          document.cookie = "myCity2=" + city + "; expires=" + new Date(new Date().getTime() + 31536000000).toUTCString() + "; path=/";
          updateIfHere();
        }

        return response.json();
      })

      .catch(error => {

        console.error('Error retrieving data from API:', error);
        document.getElementById("error-message").textContent = "City data cannot be found or does not exist.";
        document.getElementById("error-message").style.color = "red";


      });






    inputCity.value = "";




  });
  changeCityThreeButton.addEventListener('click', () => {
    const city = inputCity.value;



    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f145874df71d960cea49d51f34cba9da`)
      .then(response => {

        if (!response.ok) {

          throw new Error('City not found');

        } else {
          setLocationThree(city);
          changeCityThreeButton.textContent = "";
          changeCityThreeButton.textContent = city.toUpperCase();
          document.cookie = "myCity3=" + city + "; expires=" + new Date(new Date().getTime() + 31536000000).toUTCString() + "; path=/";
          updateIfHere();
        }

        return response.json();
      })

      .catch(error => {

        console.error('Error retrieving data from API:', error);

        document.getElementById("error-message").textContent = "City data cannot be found or does not exist.";
        document.getElementById("error-message").style.color = "red";


      });


    inputCity.value = "";

  });


  showCityOptions.addEventListener('click', () => {

    showCityOptions.style.display = "none";
    cityOptions.style.display = "grid";

  })

  closeCityOptions.addEventListener('click', () => {

    document.getElementById("error-message").textContent = "Enter a name and click on the slot you would like to change:";
    document.getElementById("error-message").style.color = "black";
    cityOptions.style.display = "none";
    showCityOptions.style.display = "block";


  })

  removeTextAnimation(document.getElementById("weather-location-name"));
  removeTextAnimation(document.getElementById("location-time"));
  removeTextAnimation(document.getElementById("temperature-feel"));
  removeTextAnimation(document.getElementById("rain"));
  removeTextAnimation(document.getElementById("weather-description"));
  removeTextAnimation(document.getElementById("temperature"));


  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${firstLocWeather}&appid=f145874df71d960cea49d51f34cba9da`)
    .then(response => {

      if (!response.ok) {

        throw new Error('City not found');
      }
      return response.json()
    })
    .then(data => {



      const weatherID = data.weather[0].id;
      const weatherGeneral = data.weather[0].main;
      const weatherDecscription = data.weather[0].description;
      const weatherIcon = data.weather[0].icon;
      const weatherLocation = data.name;
      const localTimezone = data.timezone;
      let localRain = 0;
      //Check if there is Rain.


      if (weatherDecscription.includes("rain") || weatherDecscription.includes("Rain")) {

        const localRain = data.rain["1h"];
        DisplayRain(localRain);
      } else {

        document.getElementById("rain").textContent = "No rain";

      }

      const weatherTempCurrent = data.main.temp;
      const weatherTempMax = data.main.temp_max;
      const weatherTempMin = data.main.temp_min;
      const weatherTempFeel = data.main.feels_like;
      const sunriseTime = data.sys.sunrise * 1000;
      const sunsetTime = data.sys.sunset * 1000;


      const eIcon = "current-general-conditions-first";




      DisplayIcon(weatherID, weatherIcon, eIcon);
      DisplayLocationName(weatherLocation);
      DisplayTemp(weatherTempMin, weatherTempMax, weatherTempCurrent);
      DisplayWeatherDesc(weatherDecscription);
      DisplayLocalTime(localTimezone, sunriseTime, sunsetTime);
      DisplayFeel(weatherTempFeel)

      fetchSecond();
      oneTimeDisplayinator();

    })
    .catch(error => {
      console.error('Error retrieving data from API:', error);

      document.getElementById("error-message").textContent = "City data cannot be found or does not exist.";
      document.getElementById("error-message").style.color = "red";
      fetchFirstDetails();
    });
}


export function fetchFirstDetails() {

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${firstLocWeather}&appid=f145874df71d960cea49d51f34cba9da`)
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
      const eIcon = "current-general-conditions-first";

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


    });


}




function removeTextAnimation(element) {

  element.addEventListener('animationend', () => removeAnimation(element));




}

function removeAnimation(elem) {


  elem.classList.remove('fade-text');


}


export function setLocationOne(newLoc) {
  firstLocWeather = newLoc;

}