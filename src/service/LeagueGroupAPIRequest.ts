import {AbstractAPIRequest} from "./AbstractAPIRequest.js";
import {LeagueGroup} from "../model/LeagueGroup.js";

export class LeagueGroupAPIRequest extends AbstractAPIRequest{
    /**
     * Get all LeagueGroups for a single Club. Unfortunately there is no separate endpoint, so the API key decides the club
     * for which league groups are loaded.
     *
     * Scope: Club
     * @param season
     */
    async getLeagueGroupsForClub(season: number): Promise<LeagueGroup[]> {
        const response = await this.apiCallGET<LeagueGroup[]>("league_groups.json",[
            [this.SEASON_FILTER, season.toString()]
        ])
        return response as LeagueGroup[]
    }
}