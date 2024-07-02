import {MatchAPIRequest} from "../service/MatchAPIRequest.js";
import {Gameday} from "../enum/Gameday.js";
import 'dotenv/config'
import {FetchError} from "../error/FetchError.js";

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

        expect(result).toBe(null)
    })

    test("single match - exists", async () => {
        const id = 51211
        const result = await request.loadSingleMatch(id)

        expect(result).toBeTruthy()
        expect(result).toHaveProperty("away_team_name")
        expect(result).toHaveProperty("home_team_name")
        expect(result).toHaveProperty("league")
        expect(result).toHaveProperty("home_runs")
        expect(result).toHaveProperty("away_runs")
    })

    test("single match - does not exist", async () => {
        async function shouldThrow() {
            const id = 0
            await request.loadSingleMatch(id)
        }

        await expect(shouldThrow()).rejects.toThrow(FetchError)
    })

    test("load all games - with query params", async () => {
        const season = 2024
        const gameday = Gameday.previous
        const search = "skylarks"

        const result = await request.loadAllGames(season, gameday, undefined, search)

        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBeGreaterThan(0)
        expect(result[0]).toHaveProperty("away_team_name")
        expect(result[0]).toHaveProperty("home_team_name")
        expect(result[0]).toHaveProperty("league")
    })

    test("load games - single leagueGroup with no search", async () => {
        const season = 2024
        const gameday = Gameday.any
        const leagueGroupID = 5695 // Tossballliga BSVBB, has 12 games

        const result = await request.loadAllGames(season, gameday, leagueGroupID)

        expect(Array.isArray(result)).toBe(true)
        expect(result).toHaveLength(12)
        expect(result[0]).toHaveProperty("away_team_name")
        expect(result[0]).toHaveProperty("home_team_name")
        expect(result[0]).toHaveProperty("league")
    })
})