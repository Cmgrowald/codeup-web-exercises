"use strict";

import {getRandomGreeting} from "./greeting-logic.js";

document.getElementById('greetingForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const Name = document.getElementById('nameInput').value;

    const randomGreeting = getRandomGreeting();

    const greeting = document.getElementById('greeting');
    greeting.innerHTML = `<p>${randomGreeting}, ${Name}!</p>`;
});