export const getRandomNumberByRange = (min = 0, max = 999) => {
  const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  return randomNumber;
};

/**
 * 배열의 값과 해당 값이 선택될 확률에 따라 랜덤한 값을 반환하는 함수
 * @param values 랜덤한 값을 선택할 수 있는 배열
 * @param probabilities values 배열의 각 요소가 선택될 확률을 나타내는 배열
 * @throws 값과 확률 배열의 길이가 다른 경우, 확률의 합이 1에 가깝지 않는 경우 예외를 던짐
 * @returns 랜덤하게 선택된 값
 */
export const getRandomValueByPossibility = <T>(values: T[], probabilities: number[]): T => {
  if (values.length !== probabilities.length) {
    throw new Error('값과 확률 배열의 길이가 다름');
  }

  const sumProbabilities = probabilities.reduce((acc, probability) => acc + probability, 0);
  if (Math.abs(sumProbabilities - 1) > Number.EPSILON) {
    throw new Error('확률의 합이 1에 가깝지 않음');
  }

  const randomValue = Math.random();
  let cumulativeProbability = 0;

  for (let i = 0; i < probabilities.length; i++) {
    cumulativeProbability += probabilities[i];
    if (randomValue <= cumulativeProbability) {
      return values[i];
    }
  }

  return values[values.length - 1];
};
