"use strict";

(function() {
    document.addEventListener("DOMContentLoaded", function() {
        const profilePic = document.getElementById("profile-pic");

        setTimeout(function() {
            profilePic.src = "img/pexels-pia-b-3046629.jpg";
        }, 2000);
    });
    document.addEventListener("DOMContentLoaded", function() {
        const profileName = document.getElementById("profile-name");


        setTimeout(function() {
            profileName.textContent = "Doc Oct";
        }, 4000);

    });

    document.addEventListener("DOMContentLoaded", function() {
        const profcolor = document.getElementById('profile-desc');

        setTimeout(function () {
            profcolor.style.color = 'blue';
        }, 6000);
    });

    document.addEventListener("DOMContentLoaded", function () {
        const togglercol = document.getElementById('profile-card');
        const colorsRun = ["red", "blue", "orange", "yellow", "purple", "green", "purple-violet", "black", "olive", "grey",];
        let colorIndx = 0;

        const toggBackground = () => {
            togglercol.style.backgroundColor = colorsRun[colorIndx];
            colorIndx = (colorIndx + 1) % colorsRun.length;
        }

        setInterval(function () {
            toggBackground(); // Invoke the function to set the background color
        }, 2000);
    });


})();
