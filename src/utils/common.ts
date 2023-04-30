export function getKeyWithMaxValue<T extends Object, U = any>(obj: T): U {
  const values = Object.values(obj);
  const maxValue = Math.max(...values);
  const maxIndex = values.findIndex((value) => value === maxValue);
  const keys = Object.keys(obj);
  return keys[maxIndex] as U;
}
