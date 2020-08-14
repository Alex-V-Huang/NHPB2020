// Only allows use of declared variables
'use strict';

// variable dedicated to current displayed image index
var slideIndex = 0;
slideshow();

function slideshow() {

    // Select all of the images in the slideshow
    var x = document.getElementsByClassName("slides");

    // Hide all images from displaying on the page
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

    // Increase current displayed image index by 1
    slideIndex++;

    // If all of the images have been displayed, display the first image
    if (slideIndex > x.length) {
        slideIndex = 1
    }

    // Display the current image on the page
    x[slideIndex-1].style.display = "block";

    // Wait two seconds before displaying the next image
    setTimeout(slideshow, 2000);
}

var slideIndex2 = 0;

function currentImage(number) {
    slideIndex2 = number;
    showImage(slideIndex);
}

function showImage(n) {
    // Select all images in the second slideshow
    var x = document.getElementsByClassName("slides2");

    // Hide all images from displaying on page
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

    // Display the selected image
    x[slideIndex2-1].style.display = "block";
}