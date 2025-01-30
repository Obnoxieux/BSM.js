import 'dotenv/config'
import {ClubAPIRequest} from "../service/ClubAPIRequest.js";
import * as process from "node:process";
import {LicenseFilter} from "../model/LicenseFilter.js";
import {FetchError} from "../error/FetchError.js";

describe("ClubAPIRequest", () => {
  const client = new ClubAPIRequest(process.env.TEST_API_KEY!)
  const clubID = 485;

  test("Umpires for club", async () => {
    const filter: LicenseFilter = {
      "filters[categories][]": "umpire"
    }

    const result = await client.getLicensesForClub(clubID, filter)

    expect(Array.isArray(result)).toBe(true)
    expect(result?.length).toBeGreaterThan(0)
    expect(result[0]).toHaveProperty("id")
    expect(result[0]).toHaveProperty("number")
    expect(result[0]).toHaveProperty("level")
    expect(result[0]).toHaveProperty("baseball")
    expect(result[0]).toHaveProperty("softball")
    expect(result[0]).toHaveProperty("human_category")
    expect(result[0]).toHaveProperty("human_level")

    for (const license of result) {
      expect(license.category).toBe("Umpire")
    }
  })

  test("All C licenses", async () => {
    const filter: LicenseFilter = {
      "filters[levels][]": "C"
    }

    const result = await client.getLicensesForClub(clubID, filter)

    expect(Array.isArray(result)).toBe(true)
    expect(result?.length).toBeGreaterThan(0)
    expect(result[0]).toHaveProperty("id")
    expect(result[0]).toHaveProperty("number")
    expect(result[0]).toHaveProperty("level")
    expect(result[0]).toHaveProperty("baseball")
    expect(result[0]).toHaveProperty("softball")
    expect(result[0]).toHaveProperty("human_category")
    expect(result[0]).toHaveProperty("human_level")

    for (const license of result) {
      expect(license.level).toBe("C")
    }
  })

  test("All Baseball licenses", async () => {
    const filter: LicenseFilter = {
      "filters[sports][]": "baseball"
    }

    const result = await client.getLicensesForClub(clubID, filter)

    expect(Array.isArray(result)).toBe(true)
    expect(result?.length).toBeGreaterThan(0)
    expect(result[0]).toHaveProperty("id")
    expect(result[0]).toHaveProperty("number")
    expect(result[0]).toHaveProperty("level")
    expect(result[0]).toHaveProperty("baseball")
    expect(result[0]).toHaveProperty("softball")
    expect(result[0]).toHaveProperty("human_category")
    expect(result[0]).toHaveProperty("human_level")

    for (const license of result) {
      expect(license.baseball).toBe(true)
    }
  })

  test("No available licenses", async () => {
    async function shouldThrow() {
      const nonExistentClubID = 0
      await client.getLicensesForClub(nonExistentClubID, {})
    }

    await expect(shouldThrow()).rejects.toThrow(FetchError)
  })
})