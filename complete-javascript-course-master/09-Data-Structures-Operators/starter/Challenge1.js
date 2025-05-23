'use strict';

// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). 
In this challenge we're gonna work with the data. 
So here are your tasks:

*1. Create one player array for each team (variables 'players1' and 'players2')



*2. The first player in any player array is the goalkeeper and the others are field players. 
    For Bayern Munich (team 1) create one variable ('gk') with the 
    goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
    
*3. Create an array 'allPlayers' containing all players of both teams (22 players)

*4. During the game, Bayern Munich (team 1) used 3 substitute players.
    So create a new array ('players1Final') containing all the original 
    team1 players plus 'Thiago', 'Coutinho' and 'Perisic'

*5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')

*6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints
    each of them to the console, along with the number of goals that were scored in total (number of player names passed in)

7. The team with the lower odd is more likely to win. 
    Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
 Then, call the function again with players from game.scored

 */
const game = {
  //object
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      // 0.
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      // 1.
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
// const players1 = game.players[0];
// const players2 = game.players[1];
// console.log(players1, players2);

//Do the same but with deconstructuring
// const { players } = game;
// players1 = players[0];
// players2 = players[1];

//This one is even better and shorter approach
const {
  players: [players1, players2],
} = game;

//console.log(players1, players2);

const [gk1, ...fieldPlayers1] = players1;
const [gk2, ...fieldPlayers2] = players2;

console.log(gk1, ...fieldPlayers1);
console.log(gk2, ...fieldPlayers2);
//
//
// PRint all 22 players from the 2 arrays
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//Add 3 sub players to team1
/*
During the game, Bayern Munich (team 1) used 3 substitute players.
So create a new array ('players1Final') containing all the original 
team1 players plus 'Thiago', 'Coutinho' and 'Perisic' */

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

//5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
//Destructured from object
const { team1: team1odds, x: draw, team2: team2odds } = game.odds;
console.log(team1odds, draw, team2odds);
/*
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints
 each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
    */

const printGoals = function (...players) {
  for (let i = 0; i < players.length; i++) {
    console.log(`${i + 1}: ${players[i]}`); // This will show all the players as an array
  }
  console.log(`Total number of goals scored: ${players.length}`);
};

printGoals(...game.scored);

/* 7. The team with the lower odd is more likely to win. 
    Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.
    */

const minOdd = Math.min(team1odds, team2odds);
console.log(minOdd);
const likelyWinner = (minOdd === team1odds && game.team1) || game.team2;

console.log(`${likelyWinner} is more likely to win`);
