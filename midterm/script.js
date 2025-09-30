const api = {
  key: 'fa0e9aab6b78b942c7753bdd4faf778b',
  base: 'https://api.openweathermap.org/data/2.5/weather?',
};

//user input from index.html
const Input = document.getElementById('input');

// note for self: in the block below, 'keypress' and 'event.keyCode' are 
// translations of the keyboard keys to (seemingly arbitrary) numbers
//
// looks like event.keyCode == 13 is the reference for the ENTER key on
// the keyboard. 
// 
// When it is changed, the user can no longer submit via the ENTER key; 
// another key is assigned to be the gate to the "getWeather" func
//
// also "keyCode" is deprecated in ES6, 
// look into alternatives

Input.addEventListener('keypress', (event) => {
  if (event.keyCode == 13) {
    getWeather(Input.value);

    //date() imported from Moment.js, formats/displays the date/time
    const date = moment();
    document.getElementById('date').innerHTML = date.format(
      'Mo MMM YYYY dddd, h:mm:ss'
    );

    //used to show the details as initially the display is set as none
    document.querySelector('.main-weather').style.display = 'block'; 
  }
});

//function to get weather data for user input
function getWeather(city) {
  fetch(`${api.base}q=${city}&appid=${api.key}&units=imperial`)
  .then((details) => {
    return details.json();
  })

  .then(showWeather);
}

//function displaying weather data
function showWeather(details) {
  //console.log(details)

  let city = document.getElementById('city')
  city.innerHTML = `${details.name}, ${details.sys.country}`;

  let temperature = document.getElementById('temp');
  temperature.innerHTML = `${Math.round(details.main.temp)}°F`;

  let minMax = document.getElementById('min-max');
  minMax.innerHTML = `${Math.round(details.main.temp_min)}°F (Min) and ${Math.round(details.main.temp_max)}°F (Max) `;

  let weatherType = document.getElementById('weather-type');
  weatherType.innerHTML = `${details.weather[0].main}`;
}
