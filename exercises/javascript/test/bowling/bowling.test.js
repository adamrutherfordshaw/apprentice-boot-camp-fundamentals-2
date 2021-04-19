const { BowlingGame } = require("../../main/bowling/bowling.js");

describe("Bowling tests", () => {
  test("Gutter game", () => {
    // Arrange
    const bowlingGame = new BowlingGame();
    const rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    // Act
    const score = bowlingGame.bowl(rolls);

    // Assert
    expect(score).toBe(0);
  });
});
