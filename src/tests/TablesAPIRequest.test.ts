import {TablesAPIRequest} from "../service/TablesAPIRequest.js";
import {Table} from "../model/Table.js";

describe("Tables API Request", () => {
    const request = new TablesAPIRequest("KEY")

    test("Single Table", async () => {
        const leagueGroupID = 5661

        const result = await request.getSingleTable(leagueGroupID)
        expect(result).toHaveProperty("league_id")
        expect(result).toHaveProperty("league_name")
        expect(result).toHaveProperty("season")
        expect(result).toHaveProperty("rows")
    })
})