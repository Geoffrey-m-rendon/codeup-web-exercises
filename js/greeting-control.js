import { getRandomGreeting } from './greeting-logic.js';

const randomGreeting = getRandomGreeting();

console.log(randomGreeting);

document.body.innerHTML = `<h1>${randomGreeting}</h1>`;
