

export function changeIcon() {

    const img = document.querySelector(".arrow-select");




    img.addEventListener('click', () => {
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