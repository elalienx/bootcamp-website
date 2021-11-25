// Project files
import candidates from "data/candidates.json";
import randomCandidates from "./randomCandidates";

test("we return the maximum available lenght when someone ask for a bigger array", () => {
  // Arrange
  const longerLength = 20;
  const correctLength = 9;
  const randomizedArray = randomCandidates(candidates, longerLength);

  // Act
  const finalLength = randomizedArray.length;

  // Assert
  expect(finalLength).toBe(correctLength);
});

// we need to test that the order of the array was randomized
test("we need to test that the order of the array was randomized", () => {
  // Act
  // first pass
  const randomOneArray = randomCandidates(candidates, 3);
  const randomOneId1 = randomOneArray[0].id;
  const randomOneId2 = randomOneArray[1].id;
  const randomOneId3 = randomOneArray[2].id;
  const randomOneTotal = randomOneId1 + randomOneId2 + randomOneId3;

  // second pass
  const randomTwoArray = randomCandidates(candidates, 3);
  const ramdomTwoId1 = randomTwoArray[0].id;
  const randomTwoId2 = randomTwoArray[1].id;
  const randomTwoId3 = randomTwoArray[2].id;
  const randomTwoTotal = ramdomTwoId1 + randomTwoId2 + randomTwoId3;

  // Assert
  expect(randomOneTotal).not.toBe(randomTwoTotal);
});
