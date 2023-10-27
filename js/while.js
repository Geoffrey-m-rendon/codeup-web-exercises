"use strict";

let num = 2;
while (num <= 65536) {
    console.log(num);
    num *= 2;
}
//
let allCones = Math.floor(Math.random() * 51) + 50;

do {
    let conesBought = Math.floor(Math.random() * 5) + 1;

    if (conesBought <= allCones) {
        console.log(conesBought + " cones sold...");
        allCones -= conesBought;
    } else {
        console.log("Cannot sell you " + conesBought + " cones, I only have " + allCones + "...");
    }

} while (allCones > 0);

console.log("Yay! All cones SOLD!!");
