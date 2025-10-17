export function add(numbers: string): number {
  // step 1 & 2
  // if (!numbers) return 0;
  // return Number(numbers);

  // step 3
  if (!numbers) return 0;
  const parts = numbers.split(",");
  const nums = parts.map((n) => Number(n));
  return nums.reduce((a, b) => a + b, 0);
}
