"use strict";

import {getRandomGreeting} from "./greeting-logic.js";

document.getElementById('greetingForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const Name = document.getElementById('nameInput').value;

    const randomGreeting = getRandomGreeting();

    const greetingDisplay = document.getElementById('greetingDisplay');
    greetingDisplay.innerHTML = `<p>${randomGreeting}, ${Name}!</p>`;
});