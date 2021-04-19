class BowlingGame {
  constructor() {}

  bowl(rolls) {
    return rolls.reduce((acc, score) => acc + score);
  }
}

module.exports = {
  BowlingGame,
};
