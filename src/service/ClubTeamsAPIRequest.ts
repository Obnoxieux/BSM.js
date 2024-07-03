import {AbstractAPIRequest} from "./AbstractAPIRequest.js";
import {ClubTeam} from "../model/ClubTeam.js";

export class ClubTeamsAPIRequest extends AbstractAPIRequest {
    /**
     * Load all Club teams ("Mannschaften") for a single club.
     *
     * Scope: Club
     *
     * @param clubID ID of club to load teams for
     * @param season the season to load teams for, defaults to current
     * @throws ParseError
     * @throws FetchError
     */
    public async getTeamsForClub(clubID: number, season?: number): Promise<ClubTeam[] | undefined> {
        const queryParameters: string[][] = [
            [this.SEASON_FILTER, season?.toString() ?? this.defaultSeason.toString()],
        ]

        return await this.apiCallGET<ClubTeam[]>(`clubs/${clubID}/team_clubs.json`, queryParameters)
    }
}