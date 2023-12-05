"use strict";

import {generateRandomNumber} from "./number_utils.js";

export function getRandomGreeting() {
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

        const randomIndex = generateRandomNumber() - 1;
        return greetings[randomIndex];
}

