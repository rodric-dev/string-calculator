import { add } from "../utils/stringCalculator";

describe("StringCalculator", () => {
  test("should return 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });
});
