'use strict'

const country = "Latvia"
const city = "Riga"

const dates = "14-17"
const nights = 3

const flightOut = { time: "15:00", price: "£80" }
const flightback = "12:00"

const airBnbPrices = [
  49, 35, 52, 60, 45, 53, 32, 69, 38, 37, 41, 35, 36, 48, 65
]



const total = airBnbPrices.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

const averageAirBnb = Math.round(total / airBnbPrices.length)



const output =
  `Country: ${country} \nCity: ${city} \nDate: ${dates} of December
Flight out: ${flightOut.time} \nFlight Back: ${flightback}
Average AirBnb per night: £${averageAirBnb}=(£${averageAirBnb * nights} total) based on (${airBnbPrices.length}) AirBnbs
`

console.log(output)







