import {BSMDateTimeUtility} from "../service/BSMDateTimeUtility.js";

describe("BSMDateTimeUtility.parseDateFromBSMString", () => {
  test("should parse a valid BSM formatted string correctly", () => {
    const date = BSMDateTimeUtility.parseDateFromBSMString("2024-02-15 14:30:45 +0530");
    expect(date).toBeInstanceOf(Date);
    expect(date?.getUTCFullYear()).toBe(2024);
    expect(date?.getUTCMonth()).toBe(1); // February (zero-based)
    expect(date?.getUTCDate()).toBe(15);
    expect(date?.getUTCHours()).toBe(9); // Adjusted for timezone offset
    expect(date?.getUTCMinutes()).toBe(0);
    expect(date?.getUTCSeconds()).toBe(45);
  });

  test("should parse a valid BSM formatted string correctly", () => {
    const times = [
      "2025-04-13 12:00:00 +0200",
      "2025-04-13 15:30:00 +0200",
      "2025-04-27 12:00:00 +0200",
      "2025-04-27 15:30:00 +0200"
    ];

    times.forEach(time => {
      const date = BSMDateTimeUtility.parseDateFromBSMString(time);
      expect(date).toBeInstanceOf(Date);
    });
  });

  test("should return null for an incorrectly formatted string", () => {
    expect(BSMDateTimeUtility.parseDateFromBSMString("2024-02-15 14:30")).toBeNull();
  });

  test("should return null for an empty string", () => {
    expect(BSMDateTimeUtility.parseDateFromBSMString("")).toBeNull();
  });

  test("should return null if input is missing timezone offset", () => {
    expect(BSMDateTimeUtility.parseDateFromBSMString("2024-02-15 14:30:45")).toBeNull();
  });

  test("should handle different timezone offsets correctly", () => {
    const date = BSMDateTimeUtility.parseDateFromBSMString("2024-02-15 14:30:45 -0800");
    expect(date).toBeInstanceOf(Date);
    expect(date?.getUTCHours()).toBe(22); // Adjusted for -08:00 timezone
  });

  test("should return null if non-numeric values are present", () => {
    expect(BSMDateTimeUtility.parseDateFromBSMString("abcd-ef-gh ij:kl:mn +opqr")).toBeNull();
  });
});