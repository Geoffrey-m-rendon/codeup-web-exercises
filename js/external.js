console.log('Hello From External JavaScript');

alert('Welcome to My Website');

let response = prompt('What is your favorite Color?');

alert(`Great, ${response} is my favorite Color too!!`);

prompt('You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don\'t know yet if they\'re going to like it). If price for a movie per day is $3, how much will you have to pay?')

const little_mermaid = 3
const brother_bear = 5
const hercules = 1
const Rental_Rate = 3

let Total_Spent = ((little_mermaid + brother_bear + hercules) * Rental_Rate );

alert('The correct answer is 27');

prompt('Suppose you\'re working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.');

let google_Rate = 400;
let amazon_Rate = 380;
let meta_Rate = 350
let google_Hours = 6;
let amazon_Hours = 4;
let meta_Hours = 10;

let Total_Pay = (google_Rate * google_Hours) + (amazon_Rate * amazon_Hours) + (meta_Rate * meta_Hours);

alert('The correct answer is 7420');