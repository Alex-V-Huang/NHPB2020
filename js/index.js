// Only allows use of declared variables
'use strict';

// variable dedicated to current displayed image index
var slideIndex = 0;

if (window.location.href.indexOf('merch') > -1) {
    slideshow();
}

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

// When the user clicks the button, open the modal 
function openModal(card) {

    let image = card.children[0].cloneNode(true);
    let info = card.children[1].cloneNode(true);
    
    // Get the modal
    let modal = document.getElementById("myModal");

    // Reveal the description in project info
    let desc = info.children[2];
    desc.style.display = "block";

    // Get div.project-modal in the modal
    let div = modal.children[0].children[1];

    // If necessary, remove previous modal's project info 
    while (div.hasChildNodes()) {  
        div.removeChild(div.firstChild);
    }

    // Add the project logo and info
    div.appendChild(image);
    div.appendChild(info);

    // Get the project URL
    let a = info.children[3];
    let url = a.getAttribute("href");
    url = '"' + url + '"';

    // Get the button
    let button = modal.children[0].children[2];

    // Set button's external link to project URL
    button.setAttribute("onClick", "openWebsite(" + url + ")");

    // Display the modal on the page
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
function closeModal() {
    // Get the modal
    let modal = document.getElementById("myModal");
    // Hide the modal from displaying on the page
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    // Get the modal
    let modal = document.getElementById("myModal");
    // If user clicked anywhere outside of the modal
    if (event.target == modal) {
        // Hide the modal from displaying on the page
        modal.style.display = "none";
    }
}

function openWebsite(url) {
    window.open(url, '_blank');
}