class BowlingGame {
  constructor() {}

  bowl(rolls) {
    let score = 0;
    for (let roll = 0; roll < rolls.length; roll += 2) {
      let firstRoll = roll;
      let secondRoll = roll + 1;
      let thirdRoll = roll + 2;

      let firstScore = rolls[firstRoll];
      let secondScore = rolls[secondRoll];
      let thirdScore = rolls[thirdRoll];

      if (firstScore + secondScore === 10) {
        score += 10 + thirdScore;
      } else {
        score += firstScore + secondScore;
      }
    }
    return score;
  }
}

module.exports = {
  BowlingGame,
};
