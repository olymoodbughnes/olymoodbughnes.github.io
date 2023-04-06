import { SetImage } from "./images.js";
export function DisplayIcon(weatherCode, weatherIcon) {




    switch (weatherCode) {
        //===========================THUNDERSTORM==============================
        case 200: case 201: case 202: case 210: case 211:
        case 212: case 221: case 230: case 231: case 232:
            SetImage(13);

            break;

        //===========================DRIZZLE==============================
        case 300: case 301: case 302: case 310: case 311:
        case 312: case 313: case 314: case 321:
            SetImage(11);

            break;

        //===========================RAIN==============================
        /*LIGHT RAIN, MODERATE RAIN, HEAVY INTENSITY RAIN, VERY HEAVY RAIN, EXTREME RAIN*/
        case 500: case 501: case 502: case 503: case 504:
            SetImage(8);

            break;

        /*FREEZING RAIN*/
        case 511:
            SetImage(12);

            break;

        /*LIGHT INTENSITY RAIN, SHOWER RAIN, HEAVY INTENSITY SHOWER RAIN, RAGGED SHOWER RAIN*/
        case 520: case 521: case 522: case 531:
            SetImage(11);

            break;

        //===========================SNOW==============================
        /*SNOW*/
        case 600: case 601: case 602: case 611: case 612:
        case 613: case 615: case 616: case 620: case 621:
        case 622:
            SetImage(12);

            break;


        //===========================ATMOSPHERE==============================
        /*ATMOSPHERE RELATED*/
        case 701: case 711: case 721: case 731: case 741:
        case 751: case 761: case 762: case 771: case 781:
            SetImage(4);

            break;


        //===========================CLEAR==============================
        case 800:

            //If the icon indicates it's daytime
            if (weatherIcon === "01d") {
                SetImage(1);

            }

            //If the icon indicates it's nighttime
            else {
                SetImage(5);

            }

            break;

        //=============================CLOUDS===========================

        /*FEW CLOUDS: 11-25%======================*/
        case 801:
            // If the icon indicates it's daytime
            if (weatherIcon === "02d") {
                SetImage(2);

            }

            // If the icon indicates it's nighttime
            else {
                SetImage(6);

            }
            break;

        /*SCATTERED CLOUDS: 25-50%======================*/
        case 802:

            SetImage(3);




            break;

        /*BROKEN CLOUDS: 51-84% or OVERCAST CLOUDS: 85-100%======================*/
        case 803: case 804:

            SetImage(4);


            break;





        //===============NO CODE RECEIVED=====================
        default:
            SetImage();
            break;


    }










}

export function DisplayLocationName(locationName) {


    const currentLocationName = document.getElementById("weather-location-name");
    currentLocationName.textContent = locationName;

}

export function DisplayTemp(min, max, temp) {


    const currentTemp = document.getElementById("temperature");
    const centigradeMin = min - 273.15;
    const centigradeMax = max - 273.15;
    const centigradeTemp = temp - 273.15;
    currentTemp.textContent = "Minimum : " + parseInt(centigradeMin) + " " + "Maximum : " + parseInt(centigradeMax) + " " + "Current Temperature : " + parseInt(centigradeTemp);

}

export function DisplayFeel(feel) {

    const currentFeel = document.getElementById("temperature-feel");
    const centigradeFeel = feel - 273.15;
    currentFeel.textContent = "Feels like : " + parseInt(centigradeFeel);
}

export function DisplayWeatherDesc(desc) {


    const currentWeatherDesc = document.getElementById("weather-description");
    currentWeatherDesc.textContent = desc;

}

export function DisplayRain(rain) {

    alert(`Main:  ${rain} `);
    const currentRain = document.getElementById("rain");
    currentRain.textContent = rain + " mm";

}

function isDayTime(currentTime, sunriseTime, sunsetTime) {

    return currentTime > sunriseTime && currentTime < sunsetTime;

}

export function DisplayLocalTime(timezone, sunrise, sunset) {


    const currentTime = document.getElementById("location-time");
    const timezoneOffset = timezone / 60;
    const timeUTC = new Date();

    const localTime = new Date(timeUTC.getTime() + (timezoneOffset * 60 * 1000) - (3600 * 1000))


    currentTime.textContent = localTime;

    if (!(isDayTime(localTime, sunrise, sunset))) {

        document.body.style.backgroundImage = "url('../img/nighttime.jpg')";


    }


}