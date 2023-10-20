"use strict";

while (true) {
    let numberToSkip = prompt("Enter an odd number between 1 and 50: ");
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
        alert("Invalid input. We need Odd number between 1 and 50.");
    }
}
