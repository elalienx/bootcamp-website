// Project files
import iCandidate from "interfaces/iCandidate";

export default function randomCandidates(array: iCandidate[], length: number) {
  // safeguard
  if (array.length < length) length = array.length;

  const clonedArray = [...array];
  const shuffled = shuffleArray(clonedArray);

  const randomCandidates = shuffled.slice(0, length);

  return randomCandidates;
}

function shuffleArray(array: Array<any>) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];

    array[i] = array[j];
    array[j] = temp;
  }

  return array;
}
