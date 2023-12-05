"use strict";


// handles weather card creation
function weatherCreation(weatherData) {
    const {dt_txt, main, weather, wind} = weatherData;
    const date = new Date(dt_txt);

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek = days[date.getDay()];

    let html = `<div class="weather-cards custom-card"> 
        <div class="card-header">
            ${dayOfWeek}
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Temperature: Low ${main.temp_min}&deg; / High ${main.temp_max}&deg;</li>
            <li class="list-group-item">Description: ${weather[0].description}</li>
            <li class="list-group-item">Humidity: ${main.humidity}%</li>
            <li class="list-group-item">Wind: ${wind.speed} m/s</li>
            <li class="list-group-item">Pressure: ${main.pressure} hPa</li>
        </ul>
    </div>`;

    return html;
}


// SECTION 1 DIRECT CONTROL OF MAP AND MARKERS-----------------------------------------


// MAPBOX MAP
mapboxgl.accessToken = `${MB_KEY}`;
const coordinates = document.getElementById('coordinates');
const map = new mapboxgl.Map({
    container: 'map',
    center: [-87.5286, 38.6773],
    zoom: 12
});
let currentMarker;

currentMarker = new mapboxgl.Marker({
    draggable: true
})
    .setLngLat([-87.5286, 38.6773])
    .addTo(map);

map.setStyle('mapbox://styles/mapbox/dark-v10');

// gets longitude and latitude when marker stops getting dragged
function onDragEnd() {
    const lngLat = currentMarker.getLngLat();

}


currentMarker.on('dragend', onDragEnd);


map.on('click', async function (e) {
    const {lng, lat} = e.lngLat;

    if (currentMarker) {
        currentMarker.remove();
    }

    currentMarker = new mapboxgl.Marker({
        draggable: true
    })
        .setLngLat([lng, lat])
        .addTo(map);

    await fetchWeatherData({lat, lng}); // fetches weather data of location clicked by user on map
});


//  function to fetch weather data using longitude and latitude
async function fetchWeatherData(lngLat) {
    try {
        const forecastResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lngLat.lat}&lon=${lngLat.lng}&appid=${WM_KEY}&units=imperial`);
        const forecastData = await forecastResponse.json();

        // const to pull day of forecasted weather and used in card header
        const uniqueDaysForecast = forecastData.list.reduce((acc, forecast) => {
            const date = forecast.dt_txt.split(' ')[0];
            if (!acc[date]) {
                acc[date] = forecast;
            }
            return acc;
        }, {});

        const weatherCards = Object.values(uniqueDaysForecast).slice(0, 5).map(day => weatherCreation(day));

        const weatherContainer = document.getElementById('weather-container');
        weatherContainer.innerHTML = weatherCards.join('');
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}


// calls fetchWeatherData on page load to produce current markers weather data
const initialLngLat = currentMarker.getLngLat();
fetchWeatherData(initialLngLat);


// calls fetchWeatherData when marker is dragged
currentMarker.on('dragend', async function () {
    const lngLat = currentMarker.getLngLat();
    fetchWeatherData(lngLat);
});


// SECTION 2 SEARCH BOX INPUT --------------------------------------------------------------------


// function handles the geocode and places maker at users search location
async function geocodeAndPlaceMarker(search) {
    try {
        const geocodingEndpoint = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(search)}.json?access_token=${MB_KEY}`;

        const response = await fetch(geocodingEndpoint);
        const data = await response.json();

        // pulls coords from geocode function
        const coordinates = data.features[0].geometry.coordinates;


        // centers the map on users search
        map.setCenter(coordinates);

        // places marker at users searched location will remove current marker
        if (currentMarker) {
            currentMarker.remove();
        }

        currentMarker = new mapboxgl.Marker({
            draggable: true
        })
            .setLngLat(coordinates)
            .addTo(map);

        currentMarker.on('dragend', async function () {
            const lngLat = currentMarker.getLngLat();
            fetchWeatherData(lngLat);
        });


        fetchWeatherData({lat: coordinates[1], lng: coordinates[0]}); // fetchs weather data for users search
    } catch (error) {
        console.error('Error fetching or placing marker:', error);
    }
}


const searchInput = document.getElementById('searchInput');


// event listener for user search
document.getElementById('searchForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const search = searchInput.value.trim(); // get the search from user input

    if (search !== '') {
        geocodeAndPlaceMarker(search); // calls geocode function with search from user
    } else {
        console.log('Please enter a valid search query.'); // if user enters empty search
    }
});


