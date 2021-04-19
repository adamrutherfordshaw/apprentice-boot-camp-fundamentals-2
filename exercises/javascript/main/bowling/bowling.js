class BowlingGame {
  constructor() {}

  bowl(rolls) {
    let score = 0;
    for (let roll = 0; roll < rolls.length; roll += 2) {
      const firstScore = rolls[roll + 0];
      const secondScore = rolls[roll + 1];

      score += firstScore + secondScore;

      if (firstScore + secondScore === 10) {
        const thirdScore = rolls[roll + 2];
        score += thirdScore;
      }
    }
    return score;
  }
}

module.exports = {
  BowlingGame,
};
