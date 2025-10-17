import { add } from "../utils/stringCalculator";

describe("StringCalculator", () => {
  // step-1
  // test("should return 0 for an empty string", () => {
  //   expect(add("")).toBe(0);
  // });

  // step-2
  // test("should return the number itself if only one number", () => {
  //   expect(add("1")).toBe(1);
  // });

  // step-3
  // test("should return sum of two comma-separated numbers", () => {
  //   expect(add("1,2")).toBe(3);
  // });

  // step-4
  //   test("should handle any number of comma-separated inputs", () => {
  //   expect(add("1,2,3,4,5")).toBe(15);
  // });

  // step-5
  test("should allow newlines between numbers", () => {
    expect(add("1\n2,3")).toBe(6);
  });
});
