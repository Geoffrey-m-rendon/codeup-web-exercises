"use strict"

/** 2.)---Create a function named (showMultiplicationTable) that accepts a
* number and console.logs the multiplication table for that number (1-10)
*/
    function showMultiplicationTable(num){
        for(let i = 1; i <= 10; i++) {
        let res = i * num;
        console.log(num + " * " + i + " = " + res);
     }
 }
/** 3.)---Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200.
*  and output to the console whether each number is odd or even.
 */

for (let i = 0; i < 10; i++) {
    const randomNumber = Math.floor(Math.random() * (200 - 20 + 1)) + 20;
    const isEven = randomNumber % 2 === 0;
    if (isEven) {
        console.log(`${randomNumber} is even.`);
    } else {
        console.log(`${randomNumber} is odd.`);
    }
}

/** 4.)---Create a for loop that uses console.log to create the output shown below.
*
 */

for (let i = 1; i <= 9; i++) {
    let line = '';
    for (let j = 1; j <= i; j++) {
        line += i;
    }
    console.log(line);
}

/** 5.)---Create a for loop that uses console.log to create the output shown below.
 *
 */

for (let i = 100; i >= 5; i -= 5){
    console.log(i);
}

/**
 *
 */
