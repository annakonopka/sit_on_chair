document.addEventListener("DOMContentLoaded", function() {

    var hasChildren = document.getElementsByClassName("hasChildren");
    var subMenu = document.getElementsByClassName("subMenu");
    var articleArr = document.getElementById("content").getElementsByClassName("label");
    var h3Arr = document.getElementById("content").querySelectorAll("article h3");

    var arrowL = document.getElementById("arrowL");
    var arrowR = document.getElementById("arrowR");
    var imgSlider = document.getElementById("img-slider");
    var img = ["<img src='images/black_chair.png' alt='Czarny fotel'>", "<img src='images/red.png' alt='Czerwony fotel'>", "<img src='images/orange.png' alt='Pomarańczowy fotel'>"];


    /* -------[sekcja HEADER > nav]: Pojawianie się elementu .subMenu po najechaniu na .hasChildren ------- */

    hasChildren[0].addEventListener("mouseover", function() {

        subMenu[0].style.display = "block";

    });

    hasChildren[0].addEventListener("mouseout", function() {

        subMenu[0].style.display = "none";

    });

    /* -------[sekcja CONTENT]: Zanikanie elementu h3 po najechaniu na zdjęcie ------- */

    articleArr[0].addEventListener("mouseover", function() {

        h3Arr[0].classList.toggle("invisible");

    });

    articleArr[0].addEventListener("mouseout", function() {

        h3Arr[0].classList.toggle("invisible");

    });

    articleArr[1].addEventListener("mouseover", function() {

        h3Arr[1].classList.toggle("invisible");

    });

    articleArr[1].addEventListener("mouseout", function() {

        h3Arr[1].classList.toggle("invisible");

    });

        /* -------[sekcja SLIDER]: slider ze zdjęciami ------- */

        var index = 0; // zmienna liczbowa

    imgSlider.innerHTML = img[index]; // pozycja wyjściowa slidera

    arrowR.addEventListener("click", function() {
        if (index >= 0 && index < img.length - 1) {
            arrowR.style.color = "#27c7ab";
            arrowL.style.color = "#27c7ab";
            imgSlider.innerHTML = img[index];
            index += 1;
            imgSlider.innerHTML = img[index];
        } if (index == 2) {
            arrowR.style.color = "lightgrey";
        }
        console.log(index);
    });

    arrowL.addEventListener("click", function() {
        if (index > 0 && index < img.length) {
            arrowR.style.color = "#27c7ab";
            arrowL.style.color = "#27c7ab";
            imgSlider.innerHTML = img[index];
            index -= 1;
            imgSlider.innerHTML = img[index];
        } if (index == 0) {
            arrowL.style.color = "lightgrey";
        }
        console.log(index)

    });

});
