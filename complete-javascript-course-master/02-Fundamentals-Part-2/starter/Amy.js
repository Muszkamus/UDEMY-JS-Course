'use strict'

const countries = [
"Bulgaria",
"Macedonia",
"Estonia",
"Lithuania",
"Bosnia & Hercegovina",
"Latvia",
"Montenegro",
]


function choice(x){
  const number = (countries[x])
  const oneUp = (countries[x+1])
  const oneDown = (countries[x-1])
  const lifes = 1
  console.log(`Congratulations! You chose ${number}! The countries next to the chosen one in the list are ${oneUp} and ${oneDown}.
    \n
    However, to select the revealed countries, you need to choose it the same way as you did the first time from A-G
     \n
     Choices left : ${lifes}`)
  return number,oneUp
}
choice(0)

