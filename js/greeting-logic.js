import { getRandomNumber } from './number-utils.js';

const greetings = [
    "Hello",
    "Hi",
    "Hey there",
    "Greetings",
    "Salutations",
    "Howdy",
    "Yo",
    "Bonjour",
    "Hola",
    "Ciao",
    "Namaste",
    "G'day",
    "What's up",
    "Sup",
    "How's it going",
    "Nice to meet you",
    "Welcome",
    "Hey",
    "How are you",
    "Pleased to meet you"
];

function getRandomGreeting() {
    const randomIndex = Math.floor(getRandomNumber() * greetings.length);

    return greetings[randomIndex];
}

export { getRandomGreeting };
