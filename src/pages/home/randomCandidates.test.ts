// a quick dumb test to check if TypeScript works with Jest
test("a quick demo test", () => {
  // Arrange
  const firstValue: number = 2;
  const secondValue: number = 2;
  const result: number = 4;

  // Act
  const addition: number = firstValue + secondValue;

  // Assert
  expect(addition).toBe(result);
});

// test("We are getting an array", () => {});

// we are getting an array bigger than requested ammount of candidates

// we need to test that the order of the array was randomized
