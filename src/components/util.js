import { dataMatrix, decisionArray } from "./constants";

export const passwordGenerator = (size = 8) => {
  let finalPassword = "";
  for (let i = size; i >= 0; i -= 1) {
    const nextCharacterType =
      decisionArray[Math.floor(Math.random() * decisionArray.length)];
    const dataCharacterIndex = Math.floor(
      Math.random() * dataMatrix[nextCharacterType].length
    );
    finalPassword += dataMatrix[nextCharacterType].data[dataCharacterIndex];
  }
  return finalPassword;
};
