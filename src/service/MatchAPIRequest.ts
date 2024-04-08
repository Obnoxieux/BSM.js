import {AbstractAPIRequest} from "./AbstractAPIRequest.js";
import {Match} from "../model/Match.js";
import {Gameday} from "../enum/Gameday.js";

export class MatchAPIRequest extends AbstractAPIRequest {
    public async loadGamesForClub(clubID: number, season?: number, gamedays?: string): Promise<Match[]> {
        const queryParameters: string[][] = [
            [this.SEASON_FILTER, season?.toString() ?? this.defaultSeason.toString()],
            [this.GAMEDAY_FILTER, gamedays ?? Gameday.current]
        ]
        const response = await this.apiCall<Match[]>(`clubs/${clubID}/matches.json`, queryParameters)
        return response as Match[]
    }
}