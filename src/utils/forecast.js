const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=c79688dec5122e96b2405c3a785fb83f&query=' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude)

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined,`Temperature is 
            ${body.current.temperature} degrees but it feels like ${body.current.feelslike} degrees.`)
        }
    })
}

module.exports = forecast