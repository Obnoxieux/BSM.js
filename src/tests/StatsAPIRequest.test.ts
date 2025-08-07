import {StatsAPIRequest} from "../service/StatsAPIRequest.js";
import {StatsType} from "../enum/StatsType.js";
import {BattingStatisticsEntry} from "../model/BattingStatisticsEntry.js";
import {FieldingStatisticsEntry} from "../model/FieldingStatisticsEntry.js";

describe("Stats API Request", () => {
    const request = new StatsAPIRequest(process.env.TEST_API_KEY!)

    test("Single Player - Pitching", async () => {
        const personID = 76222 // that's me!
        const season = 2023
        const statsType = StatsType.pitching

        const result = await request.getStatisticsForPerson(personID, statsType, season)
        expect(result).toHaveProperty("data")
        expect(result).toHaveProperty("summaries")
        expect(result).toBeTruthy()
    })

    test("Single Player - Pitching - no query parameters", async () => {
        const personID = 76222
        const statsType = StatsType.pitching

        const result = await request.getStatisticsForPerson(personID, statsType)
        expect(result).toHaveProperty("data")
        expect(result).toHaveProperty("summaries")
        expect(result).toBeTruthy()
    })

    test("league entry stats - valid", async () => {
        const entryID = 41775
        const statsType = StatsType.fielding

        const result = await request.getStatisticsForLeagueEntry<FieldingStatisticsEntry>(entryID, statsType)
        expect(result).toHaveProperty("game_class_entry")
        expect(result).toHaveProperty("data")
        expect(result).toHaveProperty("summaries")
        expect(result).toBeTruthy()
    })

    test("club stats - valid", async () => {
        const clubID = 485
        const season = 2024
        const statsType = StatsType.batting

        const result = await request.getStatisticsForClub<BattingStatisticsEntry>(clubID, statsType)
        expect(result).toHaveProperty("club")
        expect(result).toHaveProperty("data")
        expect(result).toHaveProperty("summaries")
        expect(result).toBeTruthy()
    })
})