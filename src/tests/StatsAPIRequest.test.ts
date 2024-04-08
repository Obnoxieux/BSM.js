import 'dotenv/config'
import {StatsAPIRequest} from "../service/StatsAPIRequest.js";
import {StatsType} from "../enum/StatsType.js";

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
})