export class BSMDateTimeUtility {
  /**
   * Slightly overcomplicated method to parse the BSM "time" string into something usable.
   * BSM does not use ISO 8601 format, and Safari does not support BSM format with `Date.parse()`.
   *
   * Replace with Temporal when available.
   *
   * Format example: 2024-04-07 12:05:00 +0200
   */
  public static parseDateFromBSMString(formattedString: string): Date | null {
    const match = formattedString.match(/(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2}) ([+-]\d{4})/);

    if (!match) {
      return null;
    }

    const [, year, month, day, hour, minute, second, timezone] = match;
    const date = new Date(Date.UTC(
        parseInt(year ?? "", 10),
        parseInt(month ?? "", 10) - 1, // Month is zero-based
        parseInt(day ?? "", 10),
        parseInt(hour ?? "", 10),
        parseInt(minute ?? "", 10),
        parseInt(second ?? "", 10)
    ));

    const timezoneOffsetHours = parseInt(<string>timezone?.substring(0, 3), 10);
    const timezoneOffsetMinutes = parseInt(<string>timezone?.substring(3), 10);
    const timezoneOffset = (timezoneOffsetHours * 60) + timezoneOffsetMinutes;

    return new Date(date.getTime() - timezoneOffset * 60000);
  }
}