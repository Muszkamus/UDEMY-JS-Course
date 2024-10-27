'use strict'

const countries = [
"Estonia",
"Latvia",
"Lithuania",
"Bulgaria",
"Montenegro",
"Macedonia",
"Bosnia and Hercegovina"
]



function choice(x){
  const number = (countries[x])
  const oneUp = (countries[x+1])
  const oneDown = (countries[x-1])
  const lifes = 2
  console.log(`Congratulations! You chose ${number}! The countries next to the chosen one in the list are ${oneUp} and ${oneDown}.
    \n
    However, to select the revealed countries, you need to choose it the same way as you did the first time from A-G
     \n
     You got ${lifes} choices left`)
    
  return number,oneUp
}
choice(0)

