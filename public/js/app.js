// MY INTERPRETATION
// Here, fetch issues an HTTP request via the browser to the express server.
// Via the express routing mechanism, the geocode function is called with 
//      appropriate arguments.
// In the geocode function, postman-request makes an API request
//      to mapbox.
//  mapbox sends a response to postman-request which contains the needed 
//      geo-location data.
//  The forecast function is then called with the geolocation data as arguments.
//  Inside of forecast, postman-request makes an API request to the weatherstack API.
//  The weatherstack API sends a response to postman-request with 
//      the forecast data.
//  Still inside the forecast function, postman-request issues a res.send command.  The
//      data included in this response is received by express. 
// fetch extracts the received forecast data from express and causes the data to be 
//      printed in the browser console.       

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
            } else {
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
            }
        })
    })
})
