import { AbstractAPIRequest } from "./AbstractAPIRequest.js";
import  { StatsType } from "../enum/StatsType.js";
import {BattingStatisticsEntry} from "../model/BattingStatisticsEntry.js";
import {PitchingStatisticsEntry} from "../model/PitchingStatisticsEntry.js";
import {FieldingStatisticsEntry} from "../model/FieldingStatisticsEntry.js";

export class StatsAPIRequest extends AbstractAPIRequest {
    /**
     * Gets stats for a single Person.
     *
     * Scope: Club, Organization
     * Auth: None
     *
     * @param personID the player ID to get stats for
     * @param statsType which kind of statistics to fetch (batting, pitching, fielding)
     * @param season the season to query (leave empty for all seasons)
     * @throws ParseError
     * @throws FetchError
     */
    public async getStatisticsForPerson<T extends BattingStatisticsEntry | PitchingStatisticsEntry | FieldingStatisticsEntry>(personID: number, statsType: StatsType, season?: number): Promise<T> {
        const resource = `people/${personID}/statistics/${statsType}.json`

        let queryParameters: string[][] = []

        if (season) {
            queryParameters = [
                [this.SEASON_FILTER, season.toString()]
            ]
        }

        const response = await this.apiCallGET<T>(resource, queryParameters)

        return response
    }

    /**
     * Gets stats for a single league entry (corresponds to a single team).
     *
     * Scope: Club, Organization
     * Auth: None
     *
     * @param entryID
     * @param statsType
     */
    public async getStatisticsForLeagueEntry<T extends BattingStatisticsEntry | PitchingStatisticsEntry | FieldingStatisticsEntry>(entryID: number, statsType: StatsType): Promise<T> {
        const resource = `league_entries/${entryID}/statistics/${statsType}.json`

        let queryParameters: string[][] = []

        const response = await this.apiCallGET<T>(resource, queryParameters)

        return response
    }

    /**
     * Gets stats for a whole club (all teams and leagues).
     *
     * Scope: Club, Organization
     * Auth: None
     *
     * @param clubID
     * @param statsType
     * @param season
     */
    public async getStatisticsForClub<T extends BattingStatisticsEntry | PitchingStatisticsEntry | FieldingStatisticsEntry>(clubID: number, statsType: StatsType, season?: number): Promise<T> {
        const resource = `clubs/${clubID}/statistics/${statsType}.json`

        let queryParameters: string[][] = []

        if (season) {
            queryParameters = [
                [this.SEASON_FILTER, season.toString()]
            ]
        }

        const response = await this.apiCallGET<T>(resource, queryParameters)

        return response
    }
}