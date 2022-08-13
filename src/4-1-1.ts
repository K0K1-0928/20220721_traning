function calc(a: number, b = 1): number {
  return a + b;
}

console.log(calc(1)); // 2
console.log(calc(2, 3)); // 5
