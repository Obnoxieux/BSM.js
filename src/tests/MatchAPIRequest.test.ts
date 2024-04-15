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

    test("Boxscore for single Match - exists", async () => {
        const matchID = 47099
        const result = await request.getBoxscoreForGame(matchID)

        expect(result).toBeTruthy()
        expect(result).toHaveProperty("header")
        expect(result).toHaveProperty("linescore")
        expect(result).toHaveProperty("offensive_away")
        expect(result).toHaveProperty("additional_away")
        expect(result).toHaveProperty("offensive_home")
        expect(result).toHaveProperty("additional_home")
        expect(result).toHaveProperty("pitching_away")
        expect(result).toHaveProperty("pitching_home")
        expect(result).toHaveProperty("game_notes")
        expect(result).toHaveProperty("full_boxscore_html")
    })

    test("Boxscore for single Match - does not exist", async () => {
        const matchID = 0
        const result = await request.getBoxscoreForGame(matchID)

        expect(result).toBe(undefined)
    })
})