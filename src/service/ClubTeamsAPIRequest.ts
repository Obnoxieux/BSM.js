import {AbstractAPIRequest} from "./AbstractAPIRequest.js";
import {ClubTeam} from "../model/ClubTeam.js";

export class ClubTeamsAPIRequest extends AbstractAPIRequest {
    /**
     * Load all Club teams ("Mannschaften") for a single club.
     *
     * Scope: Club
     * @param clubID ID of club to load teams for
     * @throws ParseError
     * @throws FetchError
     */
    public async getTeamsForClub(clubID: number): Promise<ClubTeam[] | undefined> {
        return await this.apiCallGET<ClubTeam[]>(`clubs/${clubID}/team_clubs.json`, [])
    }
}