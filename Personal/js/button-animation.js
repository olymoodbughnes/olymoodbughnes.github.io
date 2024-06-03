import { fetchFirstDetails } from "./weather-info-london.js";
import { fetchSecondDetails } from "./weather-info-second.js";
import { fetchThirdDetails } from "./weather-info-third.js";

//Switch weather status icons
export function changeIcon() {

    const img = document.querySelector(".arrow-select");
    const showCityOptions = document.getElementById("show-options-city");
    const cityOptions = document.getElementById("city-select");

    //add an event listener to the arrow to switch between weather locations.
    img.addEventListener('click', () => {

        //get element in page where error message could have been displayed and reset the text color and content
        document.getElementById("error-message").textContent = "Enter a name and click on the slot you would like to change:";
        document.getElementById("error-message").style.color = "black";


        //If the options menu to change the user's saved cities is shown, hide the menu
        if (!(cityOptions.style.display == "none")) {
            //hide menu by changing display to none and reveal the button to extend the menu again.
            cityOptions.style.display = "none";
            showCityOptions.style.display = "grid";
        }


        //instantiate variables that act as pointers to different location icons.
        let currentImg = "";
        let nextImg = "";
        let prevImg = "";


        //Switching between saved locations====================================================================
        //check for the arrow's secondary class name
        if (img.classList.contains('first-arrow')) {
            //Set previous, current and next icons to the respective icons relative to the current position.
            prevImg = document.getElementById("third-image");
            currentImg = document.getElementById("first-image");
            nextImg = document.getElementById("second-image");

            //Remove all listeners which may have been attributed to the images.
            removeListeners(prevImg, currentImg);

            //animate current image so with an exitting animation.
            currentImg.classList.add('animate-icon');
            //animate the following image with an entering animation.
            nextImg.classList.add('animate-icon-entry');
            //remove the class which hides the icon from view.
            nextImg.classList.remove('leave-dash');

            //give the current image a listener for the end of the exitting animation, once it ends the current image will be hidden from view.
            setFinalState(currentImg);
            //give the next image a listener for the end of the entry animation, once ended, remove the animation class and show the element.
            removeFinalState(nextImg);
            //change the arrow's secondary class to the next one. [first-arrow -> second-arrow -> third-arrow]
            nextArrowSelect();
            //fetch the next locations weather details
            fetchSecondDetails();
            //fade text in and out every time the arrow is clicked
            fadeText();

        } else if (img.classList.contains('second-arrow')) {

            //set images relative to current position
            prevImg = document.getElementById("first-image");
            currentImg = document.getElementById("second-image");
            nextImg = document.getElementById("third-image");
            //clean relevant icons from listeners
            removeListeners(prevImg, currentImg);
            //handle entry/exit animation
            currentImg.classList.add('animate-icon');
            nextImg.classList.add('animate-icon-entry');
            nextImg.classList.remove('leave-dash');
            //remove unnecessary classes
            setFinalState(currentImg);
            removeFinalState(nextImg);
            //change arrow
            nextArrowSelect();
            //update details
            fetchThirdDetails();
            //fade effect on text
            fadeText();
        } else if (img.classList.contains('third-arrow')) {
            //set images relative to current position
            prevImg = document.getElementById("second-image");
            currentImg = document.getElementById("third-image");
            nextImg = document.getElementById("first-image");
            //clean relevant icons from listeners
            removeListeners(prevImg, currentImg);
            nextImg.classList.remove('leave-dash');
            currentImg.classList.add('animate-icon');
            nextImg.classList.add('animate-icon-entry');
            //remove unnecessary classes
            setFinalState(currentImg);
            removeFinalState(nextImg);
            //change arrow
            nextArrowSelect();
            //update details
            fetchFirstDetails();
            //fade effect on text
            fadeText();
        }
    });
}


//check for the end of animation, then, trigger function
function setFinalState(element) {
    element.addEventListener('animationend', () => finalListener(element));
}

function finalListener(elem) {
    //add class that makes any element invisible
    elem.classList.add('leave-dash');
    //remove animation class
    elem.classList.remove('animate-icon');
}


//check for the end of animation, then, trigger function
function removeFinalState(element) {
    element.addEventListener('animationend', () => removeFinalListener(element));
}

function removeFinalListener(elem) {
    //remove animation class
    elem.classList.remove('animate-icon-entry');
    //remove class that makes any element invisible
    elem.classList.remove('leave-dash');
}



//Remove previously added listeners
function removeListeners(currentElement, nextElement) {
    currentElement.removeEventListener('click', () => finalListener())
    nextElement.removeEventListener('click', () => removeFinalListener())
}



//Switch the arrow element's secondary class, giving it different behaviours
function nextArrowSelect() {
    //find arrow on page
    const currentArrow = document.querySelector(".arrow-select");
    //current arrow type check
    if (currentArrow.classList.contains('first-arrow')) {
        //advance the arrow type by one
        currentArrow.classList.replace("first-arrow", "second-arrow");
        //current arrow type check
    } else if (currentArrow.classList.contains('second-arrow')) {
        //advance the arrow type by one
        currentArrow.classList.replace("second-arrow", "third-arrow");
        //current arrow type check
    } else if (currentArrow.classList.contains('third-arrow')) {
        //advance the arrow type by one
        currentArrow.classList.replace("third-arrow", "first-arrow");
    }
}



//look for all elements on page that contain textual details about weather and add the fade animation class
function fadeText() {
    document.getElementById("weather-location-name").classList.add('fade-text');
    document.getElementById("location-time").classList.add('fade-text');
    document.getElementById("temperature-feel").classList.add('fade-text');
    document.getElementById("rain").classList.add('fade-text');
    document.getElementById("weather-description").classList.add('fade-text');
    document.getElementById("temperature").classList.add('fade-text');
    document.getElementById("temperature-maximum").classList.add('fade-text');
    document.getElementById("temperature-minimum").classList.add('fade-text');
}



//If the current arrow coincides with the current location being viewed, update the details live
export function updateIfHere() {
    const img = document.querySelector(".arrow-select");
    //find current arrow
    if (img.classList.contains('first-arrow')) {
        //update
        fetchFirstDetails();
        //find current arrow
    } else if (img.classList.contains('second-arrow')) {
        //update
        fetchSecondDetails();
        //find current arrow
    } else if (img.classList.contains('third-arrow')) {
        //update
        fetchThirdDetails();
    }
}