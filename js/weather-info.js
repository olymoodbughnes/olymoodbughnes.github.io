import { SetImage } from "./images.js";
window.onload = function () {


  fetch('https://api.openweathermap.org/data/2.5/weather?lat=51.5072&lon=-0.1276&appid=58173614dccdb2e31d9fee6b2beef1a1')
    .then(response => response.json())
    .then(data => {






      const weatherGeneral = data.weather[0].main;

      if (weatherGeneral === "Clear") {
        SetImage(1);
        alert(`The temperature is ${weatherGeneral} kelvin`);
      } else {

        SetImage();

      }
      alert(`Taaaaaaaaaaaaaaas kelvin`);





    })
    .catch(error => {
      console.error('Error retrieving data from API:', error);
    });
}




