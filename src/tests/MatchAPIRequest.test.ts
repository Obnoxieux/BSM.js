import {MatchAPIRequest} from "../service/MatchAPIRequest.js";
import {Gameday} from "../enum/Gameday.js";
import 'dotenv/config'

describe("Match API Request", () => {
    const request = new MatchAPIRequest(process.env.TEST_API_KEY!)

    test("Matches for Club - Berlin Skylarks previous gameday of 2023", async () => {
        const clubID = 485
        const season = 2023
        const gameday = Gameday.previous

        const result = await request.loadGamesForClub(clubID, season, gameday)
        expect(Array.isArray(result)).toBe(true)
        expect(result).toBeTruthy()
        expect(result[0]).toHaveProperty("away_team_name")
        expect(result[0]).toHaveProperty("home_team_name")
        expect(result[0]).toHaveProperty("league")
    })
})