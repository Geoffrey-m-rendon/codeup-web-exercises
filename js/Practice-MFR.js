"use strict";
(() => {

    // MAP-The .map method in JavaScript is an array method used to transform each element of an array according to a provided function.
    // It creates a new array with the results of calling a provided function on every element in the calling array.

    const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    console.log(numArray);

    // Now that we have defined the variable numArray, we can use .map to iterate through each number. Now comes the *2 for each number
    // in the new variable doubledNums, then console logging to simply show on our output in the console.

    const doubledNums = numArray.map(x => x * 2);
    console.log(doubledNums);

    // Filter-The .filter method in JavaScript is an array method,
    // Used to create a new array with all elements that pass a test implemented by the provided function.
    // In this case our "Passing test" being to iterate through the array and return only the odd numbers.
    const oddNumbers = numArray.filter(x => x % 2 !== 0);
    console.log(oddNumbers);

    // Reduce-The .reduce method in JavaScript is an array method used to reduce an array to a single value.
    // It executes a provided function for each value of the array (from left to right) and accumulates the result.

    const sumResult = numArray.reduce((acc, cur) => acc + cur, 0);
    console.log(sumResult);
})();