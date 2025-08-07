import {ClubTeamsAPIRequest} from "../service/ClubTeamsAPIRequest.js";
import {FetchError} from "../error/FetchError.js";

describe("Club Teams API Request", () => {
    const request = new ClubTeamsAPIRequest(process.env.TEST_API_KEY!)
    
    test("Teams for Club - exists", async () => {
        const clubID = 485
        
        const result = await request.getTeamsForClub(clubID)
        
        expect(Array.isArray(result)).toBe(true)
        expect(result).toBeTruthy()
        expect(result?.length).toBeGreaterThan(0)
        
        if (result) {
            expect(result[0]).toHaveProperty("id")
            expect(result[0]).toHaveProperty("number")
            expect(result[0]).toHaveProperty("team")
            expect(result[0]?.team).toHaveProperty("name")
            expect(result[0]?.team).toHaveProperty("id")
            expect(result[0]?.team).toHaveProperty("season")
            expect(result[0]?.team).toHaveProperty("short_name")
        }
    })

    test("Teams for Club - with query param for past season", async () => {
        const clubID = 485
        const season = 2022

        const result = await request.getTeamsForClub(clubID, season)

        expect(Array.isArray(result)).toBe(true)
        expect(result).toBeTruthy()
        expect(result?.length).toBeGreaterThan(0)

        if (result) {
            expect(result[0]).toHaveProperty("id")
            expect(result[0]).toHaveProperty("number")
            expect(result[0]).toHaveProperty("team")
            expect(result[0]?.team).toHaveProperty("name")
            expect(result[0]?.team).toHaveProperty("id")
            expect(result[0]?.team).toHaveProperty("season")
            expect(result[0]?.team).toHaveProperty("short_name")
        }
    })
    
    test("Teams for Club - does not exist", async () => {
        async function shouldThrow() {
            const clubID = 0
            await request.getTeamsForClub(clubID);
        }
        
        await expect(shouldThrow()).rejects.toThrow(FetchError)
    })
})