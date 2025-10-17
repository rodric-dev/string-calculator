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
  // test("should allow newlines between numbers", () => {
  //   expect(add("1\n2,3")).toBe(6);
  // });

  // step -6
  test("should support custom delimiter defined using // syntax", () => {
    expect(add("//;\n1;2")).toBe(3);
  });

  // step-7
  test("should throw error with all negatives listed", () => {
    expect(() => add("1,-2,3,-4")).toThrow("negatives not allowed: -2,-4");
  });

  // step-8
  //   test("should ignore numbers greater than 1000", () => {
  //   expect(add("2,1001")).toBe(2);
  // });

  // step-9
  test("should support delimiters of any length", () => {
    expect(add("//[***]\n1***2***3")).toBe(6);
  });

  // step-10
  test("should support multiple delimiters", () => {
  expect(add("//[*][%]\n1*2%3")).toBe(6);
});

});
