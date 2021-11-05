// Project files
import iCandidate from "interfaces/iCandidate";

export default function randomCandidates(
  array: iCandidate[],
  length: number = 3
): iCandidate[] {
  // safeguard
  if (array.length < length) {
    console.warn("You are trying to get more candidates than available");
    length = array.length;
  }

  const clonedArray = [...array];
  const shuffled = clonedArray.sort(() => 0.5 - Math.random());
  const randomCandidates: iCandidate[] = shuffled.slice(0, length);

  return randomCandidates;
}
