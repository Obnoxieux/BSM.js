import { AbstractAPIRequest } from "./AbstractAPIRequest.js";
import  { StatsType } from "../enum/StatsType.js";
import type { AbstractStatisticsEntry } from "../model/AbstractStatisticsEntry.js";

export class StatsAPIRequest extends AbstractAPIRequest {
    /**
     * Gets stats for a single Person.
     *
     * Scope: Club, Organization
     * Auth: None
     *
     * @param personID the player ID to get stats for
     * @param statsType which kind of statistics to fetch (batting, pitching, fielding)
     * @param season the season to query
     */
    public async getStatisticsForPerson(personID: number, statsType: StatsType, season: number): Promise<AbstractStatisticsEntry> {
        const resource = `people/${personID}/statistics/${statsType}.json`
        const queryParameters = [
            [this.SEASON_FILTER, season.toString()]
        ]
        const response = await this.apiCall(resource, queryParameters)

        return response as AbstractStatisticsEntry
    }
}