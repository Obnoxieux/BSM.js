import {TablesAPIRequest} from "../service/TablesAPIRequest.js";
import 'dotenv/config'

describe("Tables API Request", () => {
    const request = new TablesAPIRequest(process.env.TEST_API_KEY!)

    test("Single Table", async () => {
        const leagueGroupID = 5661

        const result = await request.getSingleTable(leagueGroupID)
        expect(result).toHaveProperty("league_id")
        expect(result).toHaveProperty("league_name")
        expect(result).toHaveProperty("season")
        expect(result).toHaveProperty("rows")
    })
})