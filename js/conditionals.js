"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

function analyzeColor(color) {
    switch (color) {
        case "blue":
            return "Blue is the color of the sky.";
        case "red":
            return "Strawberries are red.";
        case "cyan":
            return "I don't know anything about cyan.";
        default:
            return "This color is not defined within this function.";
    }
}

// Example uses of the analyzeColor function
console.log(analyzeColor('blue'));
console.log(analyzeColor('cyan'));
console.log(analyzeColor('red'));
console.log(analyzeColor('yellow'));

/** Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const randomColor = colors[Math.floor(Math.random() * colors.length)];

// Display the result of analyzing a random color
console.log(randomColor);
console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

let userColor = prompt("Please enter a color").toLowerCase();
alert(analyzeColor(userColor));

// Function to calculate discounted total based on a lucky number
function calculateTotal(luckyNumber, totalAmount) {
    switch (luckyNumber) {
        case 0:
            return `Sorry, no discount. Your total is $${totalAmount.toFixed(2)}`;
        case 1:
            return `You get a 10% discount. Your total is $${(totalAmount * 0.9).toFixed(2)}`;
        case 2:
            return `You get a 25% discount. Your total is $${(totalAmount * 0.75).toFixed(2)}`;
        case 3:
            return `You get a 35% discount. Your total is $${(totalAmount * 0.65).toFixed(2)}`;
        case 4:
            return `You get a 50% discount. Your total is $${(totalAmount * 0.5).toFixed(2)}`;
        case 5:
            return `CONGRATS! Everything is free. Your discount is 100%. Your total is $0.00`;
        default:
            return "Invalid lucky number.";
    }
}

// Generate a random lucky number and prompt the user for their total bill
const luckyNumber = Math.floor(Math.random() * 6);
const customerTotal = parseFloat(prompt("What is your total bill?"));

if (!isNaN(customerTotal)) {
    alert(`Your lucky number is ${luckyNumber}`);
    alert(`Price before discount: $${customerTotal.toFixed(2)}`);
    alert(calculateTotal(luckyNumber, customerTotal));
} else {
    alert("Invalid input. Please enter a valid number.");
}

// Ask the user if they want to enter a number and provide information if they do
const shouldEnterNumber = confirm("Would you like to enter a number?");

if (shouldEnterNumber) {
    const userNumber = prompt("Enter a number:");
    if (!isNaN(userNumber)) {
        const parsedNumber = parseFloat(userNumber);
        alert(`The number is ${parsedNumber % 2 === 0 ? "even" : "odd"}`);
        alert(`The number plus 100 is ${parsedNumber + 100}`);
        alert(`The number is ${parsedNumber < 0 ? "negative" : "positive"}`);
    } else {
        alert("Invalid input. Please enter a valid number.");
    }
}
