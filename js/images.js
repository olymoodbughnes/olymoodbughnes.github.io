
/*Creates default image*/
let img = document.createElement("img");
img.src = "";


//DYNAMIC IMAGES=============================================================================
//This section points to the elements in the file that will have an image appended as a child.

/*Page elements*/
//Current time of day and general condition
const currentGeneralConditions = document.getElementById("current-general-conditions");

/*Images Sources*/


const dayClear = "../img/daytimeClear.png";

const dayPartCloudy = "../img/daytimePartCloudy.png";

const mist = "../img/mist.png";

const nighttimeClear = "../img/nighttimeClear.png";

const nightimePartCloudy = "../img/nighttimePartCloudy.png";

const overcastClouds = "../img/overcastClouds.png";

const rain = "../img/rain.png";

const rainNight = "../img/rainNight.png";

const scatteredCloud = "../img/scatteredCloud.png";

const showerRain = "../img/showerRain.png";

const snow = "../img/snow.png";

const thunderstorm = "../img/thunderstorm.png";

//Default
const neutralDefault = "../img/blackHole.png";

//Image Functions============================================================================
//Set Image
export function SetImage(newImage) {

    switch (newImage) {

        case 1:
            img.src = dayClear;

            break;

        case 2:
            img.src = dayPartCloudy;

            break;

        case 3:
            img.src = scatteredCloud;
            break;

        case 4:
            img.src = mist;
            break;

        case 5:
            img.src = nighttimeClear;
            break;

        case 6:
            img.src = nightimePartCloudy;
            break;

        case 7:
            img.src = overcastClouds;
            break;

        case 8:
            img.src = rain;
            break;

        case 9:
            img.src = rainNight;
            break;

        case 10:
            img.src = scatteredCloud;
            break;

        case 11:
            img.src = showerRain;
            break;

        case 12:
            img.src = snow;
            break;

        case 13:
            img.src = thunderstorm;
            break;

        default:
            img.src = neutralDefault;

            break;

    }
    img.style.width = "10rem"
    currentGeneralConditions.appendChild(img);

}
