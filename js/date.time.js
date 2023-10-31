'use strict';

// todo:
// Create an array of months for printing dates
 let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// todo:
// Create the date corresponding to your birthday using the JavaScript Date object.
   const birthday = new Date(1997, 3, 1);
   const month = (months[birthday.getMonth()]);
   const day = birthday.getDate();
   const year = birthday.getFullYear();
// todo:
// Log your birthday in the format: January 1, 2014 using the JavaScript Date object.
// See link below for methods needed:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#Getter


 console.log('Here is my birthday using JavaScript: ' + month + ' ' + day + ', ' + year);