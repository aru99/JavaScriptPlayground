"use strict";

// data
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// players array
const players1 = [...game.players[0]];
const players2 = [...game.players[1]];
// Goal Keeper and all players
const [gk, ...fieldPlayers] = players1;
// all players array
const allPlayers = [...game.players];
// players plus substitute
const player1Final = ["Thiago", "Coutinho", "Perisic", ...players1];
// creating varaibles from object properties
const {
  odds: { team1, x: draw, team2 },
} = game;
// printGoals function
const printGoals = function (...players) {
  //   console.log(`${players.length} goals were scored`);
};

printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
printGoals("Lewandowski", "Kimmich");
printGoals(...game.scored);
// wining logic without ternary or if statements
// team1 < team2 && console.log("Team 2 is more likely to win ");
// team2 < team1 && console.log("Team1 is more likely to win");
// console.log(
//   `Players 1 : ${players1}
// Players2 : ${players2}
// Goal Keeper and rest players : ${gk} and ${fieldPlayers}
// All players : ${allPlayers}
// Players1Final : ${player1Final}`,
//   team1,
//   draw,
//   team2
// );

// ----------------CC2---------------------

// looping over game.scored
for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1} : ${player}`);
}
