import { fetchFirstDetails } from "./weather-info-london.js";
import { fetchSecondDetails } from "./weather-info-second.js";
import { fetchThirdDetails } from "./weather-info-third.js";


export function changeIcon() {

    const img = document.querySelector(".arrow-select");
    const showCityOptions = document.getElementById("show-options-city");
    const cityOptions = document.getElementById("city-select");




    img.addEventListener('click', () => {
        document.getElementById("error-message").textContent = "Enter a name and click on the slot you would like to change:";
        document.getElementById("error-message").style.color = "black";

        if (!(cityOptions.style.display == "none")) {

            cityOptions.style.display = "none";
            showCityOptions.style.display = "grid";

        }

        let currentImg = "";
        let nextImg = "";
        let prevImg = "";

        if (img.classList.contains('first-arrow')) {
            console.log("HERE 1");
            prevImg = document.getElementById("third-image");
            currentImg = document.getElementById("first-image");
            nextImg = document.getElementById("second-image");
            removeListeners(prevImg, currentImg);
            currentImg.classList.add('animate-icon');
            nextImg.classList.add('animate-icon-entry');
            nextImg.classList.remove('leave-dash');

            setFinalState(currentImg);
            removeFinalState(nextImg);
            nextArrowSelect();


            fetchSecondDetails();
            fadeText();

        } else if (img.classList.contains('second-arrow')) {
            console.log("HERE 2");
            prevImg = document.getElementById("first-image");
            currentImg = document.getElementById("second-image");
            nextImg = document.getElementById("third-image");
            removeListeners(prevImg, currentImg);
            currentImg.classList.add('animate-icon');
            nextImg.classList.add('animate-icon-entry');
            nextImg.classList.remove('leave-dash');

            setFinalState(currentImg);
            removeFinalState(nextImg);
            nextArrowSelect();

            fetchThirdDetails();

            fadeText();
        } else if (img.classList.contains('third-arrow')) {
            console.log("HERE 3");
            prevImg = document.getElementById("second-image");
            currentImg = document.getElementById("third-image");
            nextImg = document.getElementById("first-image")
            removeListeners(prevImg, currentImg);;
            nextImg.classList.remove('leave-dash');


            currentImg.classList.add('animate-icon');
            nextImg.classList.add('animate-icon-entry');


            setFinalState(currentImg);
            removeFinalState(nextImg);
            nextArrowSelect();

            fetchFirstDetails();

            fadeText();
        }










    });

}


function setFinalState(element) {

    element.addEventListener('animationend', () => finalListener(element));




}

function finalListener(elem) {

    elem.classList.add('leave-dash');
    elem.classList.remove('animate-icon');


}

function removeFinalState(element) {


    element.addEventListener('animationend', () => removeFinalListener(element));
    //Update Location Icon





}

function removeFinalListener(elem) {

    elem.classList.remove('animate-icon-entry');
    elem.classList.remove('leave-dash');





}

function removeListeners(currentElement, nextElement) {

    currentElement.removeEventListener('click', () => finalListener())


    nextElement.removeEventListener('click', () => removeFinalListener())
}

function nextArrowSelect() {


    const currentArrow = document.querySelector(".arrow-select");

    if (currentArrow.classList.contains('first-arrow')) {

        currentArrow.classList.replace("first-arrow", "second-arrow");

    } else if (currentArrow.classList.contains('second-arrow')) {

        currentArrow.classList.replace("second-arrow", "third-arrow");

    } else if (currentArrow.classList.contains('third-arrow')) {

        currentArrow.classList.replace("third-arrow", "first-arrow");

    }

}

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

export function updateIfHere() {

    const img = document.querySelector(".arrow-select");
    if (img.classList.contains('first-arrow')) {


        fetchFirstDetails();
    } else if (img.classList.contains('second-arrow')) {

        fetchSecondDetails();
    } else if (img.classList.contains('third-arrow')) {

        fetchThirdDetails();


    }


}