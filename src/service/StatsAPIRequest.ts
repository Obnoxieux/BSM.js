import { AbstractAPIRequest } from "./AbstractAPIRequest.js";
import  { StatsType } from "../enum/StatsType.js";
import type { AbstractStatisticsEntry } from "../model/AbstractStatisticsEntry.js";

export class StatsAPIRequest extends AbstractAPIRequest {
    protected readonly bsmPersonID: number = 76222
    protected readonly defaultSeason = new Date().getFullYear()

    protected buildURL(statsType: StatsType, season?: number): string {
        const selectedSeason = season ?? this.defaultSeason

        return `${this.API_URL}/people/${this.bsmPersonID}/statistics/${statsType}.json?filters[seasons][]=${selectedSeason}`
    }

    async loadPersonalStatistics(statsType: StatsType, season?: number): Promise<AbstractStatisticsEntry> {
        const url = this.buildURL(statsType, season)
        const response = await this.fetchJSONData(url, undefined)

        return response as AbstractStatisticsEntry
    }
}