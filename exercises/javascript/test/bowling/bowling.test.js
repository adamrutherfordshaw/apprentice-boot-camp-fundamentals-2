const { bowl } = require("../../main/bowling/bowling.js");

describe("Bowling tests", () => {
  test("Gutter game", () => {
    // Arrange
    const rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    // Act
    const score = bowl(rolls);

    // Assert
    expect(score).toBe(0);
  });

  test("When we knock 1 pin per roll", () => {
    const rolls = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

    const score = bowl(rolls);

    expect(score).toBe(20);
  });

  test("Should have correct scoring for a spare in the first frame", () => {
    const rolls = [5, 5, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    const score = bowl(rolls);

    expect(score).toBe(12);
  });

  test("Should have correct scoring for a strike in the first frame", () => {
    const rolls = [10, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    const score = bowl(rolls);

    expect(score).toBe(14);
  });
});
