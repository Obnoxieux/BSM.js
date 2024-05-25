import {AbstractAPIRequest} from "./AbstractAPIRequest.js";
import {Match} from "../model/Match.js";
import {Gameday} from "../enum/Gameday.js";
import {MatchBoxscore} from "../model/MatchBoxscore.js";

export class MatchAPIRequest extends AbstractAPIRequest {

    /**
     * Gets games pre-filtered by a specific club ID.
     * @param clubID
     * @param season
     * @param gamedays
     * @return Promise<Match[]>
     */
    public async loadGamesForClub(clubID: number, season?: number, gamedays?: Gameday): Promise<Match[]> {
        const queryParameters: string[][] = [
            [this.SEASON_FILTER, season?.toString() ?? this.defaultSeason.toString()],
            [this.GAMEDAY_FILTER, gamedays ?? Gameday.current]
        ]
        const response = await this.apiCallGET<Match[]>(
            `clubs/${clubID}/matches.json`, queryParameters
        )
        return response as Match[]
    }

    /**
     * Get the boxscore for a single game specified by parameter.
     * @param id
     * @return Promise<MatchBoxscore>
     */
    public async getBoxscoreForGame(id: number): Promise<MatchBoxscore | undefined> {
        const response = await this.apiCallGET<MatchBoxscore>(
            `matches/${id}/match_boxscore.json`, []
        )
        return response
    }
}