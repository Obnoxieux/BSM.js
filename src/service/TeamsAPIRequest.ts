import {AbstractAPIRequest} from "./AbstractAPIRequest.js";
import {ClubTeam} from "../model/ClubTeam.js";

export class ClubTeamsAPIRequest extends AbstractAPIRequest {
    public async getTeamsForClub(clubID: number): Promise<ClubTeam[] | undefined> {
        return await this.apiCall<ClubTeam[]>(`clubs/${clubID}/team_clubs.json`, [])
    }
}