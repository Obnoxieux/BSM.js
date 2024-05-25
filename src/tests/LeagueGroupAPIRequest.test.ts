import {LeagueGroupAPIRequest} from "../service/LeagueGroupAPIRequest.js";
import 'dotenv/config'

describe('LeagueGroupsAPIRequest', () => {
    const request = new LeagueGroupAPIRequest(process.env.TEST_API_KEY!)

    /**
     * This test unfortunately depends on the key used -
     * if the club has no teams in 2024 it will yield a false negative.
     */
    test("LeagueGroups for Single Club - 2024 - Success", async () => {
        const season = 2024

        const result = await request.getLeagueGroupsForClub(season)

        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBeGreaterThan(0)
        expect(result[0]).toHaveProperty("league")
        expect(result[0]).toHaveProperty("id")
        expect(result[0]).toHaveProperty("name")
        expect(result[0]).toHaveProperty("acronym")
    })

    /**
     * no season in 1970 - empty array
     */
    test("LeagueGroups for Single Club - 2024 - Success", async () => {
        const season = 1970

        const result = await request.getLeagueGroupsForClub(season)

        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBe(0)
    })
});