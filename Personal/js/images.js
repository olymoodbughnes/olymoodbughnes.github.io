
//image elements for each location
let img = document.createElement("img");
img.src = "";

let img2 = document.createElement("img");
img2.src = "";

let img3 = document.createElement("img");
img3.src = "";




//DYNAMIC IMAGES=============================================================================
//This section points to the elements in the file that will have an image appended as a child.

/*Page elements*/
//Current time of day and general condition
//let currentGeneralConditions = document.getElementById("current-general-conditions");

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

let imgToBeDisplayed = neutralDefault;
//Image Functions============================================================================
//Set Image
export function SetImage(newImage, elementName) {

    switch (newImage) {

        case 1:
            imgToBeDisplayed = dayClear;

            break;

        case 2:
            imgToBeDisplayed = dayPartCloudy;

            break;

        case 3:
            imgToBeDisplayed = scatteredCloud;
            break;

        case 4:
            imgToBeDisplayed = mist;
            break;

        case 5:
            imgToBeDisplayed = nighttimeClear;
            break;

        case 6:
            imgToBeDisplayed = nightimePartCloudy;
            break;

        case 7:
            imgToBeDisplayed = overcastClouds;
            break;

        case 8:
            imgToBeDisplayed = rain;
            break;

        case 9:
            imgToBeDisplayed = rainNight;
            break;

        case 10:
            imgToBeDisplayed = scatteredCloud;
            break;

        case 11:
            imgToBeDisplayed = showerRain;
            break;

        case 12:
            imgToBeDisplayed = snow;
            break;

        case 13:
            imgToBeDisplayed = thunderstorm;
            break;

        default:
            imgToBeDisplayed = neutralDefault;

            break;

    }
    //find the name of the current location slot [first, second, third]
    let currentGeneralConditions = document.getElementById(elementName);
    //if location slot is the first one, display the image 
    if (elementName == "current-general-conditions-first") {
        //set the source for the respective image to the relevant image element
        img.src = imgToBeDisplayed;
        img.style.width = "10rem";
        //set image id to relevant identifier
        img.setAttribute('id', 'first-image');
        //append image
        currentGeneralConditions.appendChild(img);

    } else if (elementName == "current-general-conditions-second") {

        img2.src = imgToBeDisplayed;
        img2.style.width = "10rem";
        img2.setAttribute('id', 'second-image');
        currentGeneralConditions.appendChild(img2);

    } else if (elementName == "current-general-conditions-third") {

        img3.src = imgToBeDisplayed;
        img3.style.width = "10rem";
        img3.setAttribute('id', 'third-image');
        currentGeneralConditions.appendChild(img3);

    }
}

//set initial classes to the rest of the weather icon images
export function oneTimeDisplayinator() {
    img2.setAttribute('class', 'leave-dash');
    img3.setAttribute('class', 'leave-dash');
}
