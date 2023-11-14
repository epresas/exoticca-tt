export const isPrime = (num: number) =>
  num > 1 &&
  Array.from({ length: Math.floor(Math.sqrt(num)) }, (_, i) => i + 2).every(
    (i) => num % i !== 0
  );
