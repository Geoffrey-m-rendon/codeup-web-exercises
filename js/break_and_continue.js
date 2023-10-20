"use strict";

while (true) {
    let numberToSkip = prompt("Please enter an odd number between 1 and 50: ");
    numberToSkip = parseInt(numberToSkip);

    if (numberToSkip >= 1 && numberToSkip <= 50 && numberToSkip % 2 !== 0) {
        console.log("Number to skip is: " + numberToSkip);

        for (let i = 1; i <= 50; i++) {
            if (i % 2 === 0) {
                continue;
            }

            if (i === numberToSkip) {
                console.log("Yikes! Skipping number: " + i);
            } else {
                console.log("Here is an odd number: " + i);
            }
        }

        break;
    } else {
        alert("Invalid input. Please enter a valid odd number between 1 and 50.");
    }
}
