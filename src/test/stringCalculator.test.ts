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
  test("should return sum of two comma-separated numbers", () => {
    expect(add("1,2")).toBe(3);
  });
});
