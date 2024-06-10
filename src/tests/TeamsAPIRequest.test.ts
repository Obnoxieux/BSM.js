import {ClubTeamsAPIRequest} from "../service/TeamsAPIRequest.js";
import 'dotenv/config'

describe("Teams API Request", () => {
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
    
    test("Teams for Club - does not exist", async () => {
        const clubID = 0
        
        const result = await request.getTeamsForClub(clubID)
        
        expect(result).toBeFalsy()
    })
})