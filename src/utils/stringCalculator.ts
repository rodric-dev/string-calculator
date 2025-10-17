export function add(numbers: string): number {
  // step 1 & 2
  // if (!numbers) return 0;
  // return Number(numbers);

  // step 3 & 4
  // if (!numbers) return 0;
  // const parts = numbers.split(",");
  // const nums = parts.map((n) => Number(n));
  // return nums.reduce((a, b) => a + b, 0);

  // step 5
  // if (!numbers) return 0;
  // const parts = numbers.split(/,|\n/);
  // const nums = parts.map(n => Number(n));
  // return nums.reduce((a, b) => a + b, 0);

  // step-6
  // if (!numbers) return 0;

  // let delimiter = /,|\n/;
  // let nums = numbers;

  // if (numbers.startsWith("//")) {
  //   const parts = numbers.split("\n");
  //   const custom = parts[0].substring(2);
  //   delimiter = new RegExp(custom);
  //   nums = parts[1];
  // }

  // const arr = nums.split(delimiter);
  // const parsed = arr.map(n => Number(n));
  // return parsed.reduce((a, b) => a + b, 0);

  // step 7
  if (!numbers) return 0;

  let delimiter = /,|\n/;
  let nums = numbers;

  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    const custom = parts[0].substring(2);
    delimiter = new RegExp(custom);
    nums = parts[1];
  }

  const arr = nums.split(delimiter).map((n) => Number(n));
  const negatives = arr.filter((n) => n < 0);
  if (negatives.length)
    throw new Error(`negatives not allowed: ${negatives.join(",")}`);

  return arr.reduce((a, b) => a + b, 0);


  
}
