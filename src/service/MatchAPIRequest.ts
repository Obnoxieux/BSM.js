import {AbstractAPIRequest} from "./AbstractAPIRequest.js";
import {Match} from "../model/Match.js";
import {Gameday} from "../enum/Gameday.js";
import {MatchBoxscore} from "../model/MatchBoxscore.js";
import {FetchError} from "../error/FetchError.js";
import {ParseError} from "../error/ParseError.js";

export class MatchAPIRequest extends AbstractAPIRequest {

    /**
     * Gets a single game.
     *
     * Scope: Club, Organization
     * Auth: Key
     *
     * @param id the internal BSM id of the match (_not_ the JSON entry "match_id" which is the human-readable ID
     * on scoresheets)
     * @throws ParseError
     * @throws FetchError
     */
    public async loadSingleMatch(id: number): Promise<Match> {
        return await this.apiCallGET<Match>(`matches/${id}.json`, [])
    }

    /**
     * Gets games pre-filtered by a specific club ID. This shows strictly club games by default,
     * compared to the generic `matches.json` endpoint.
     *
     * Scope: Club
     * Auth: Key
     *
     * @param clubID the club ID to get games for
     * @param season the season to filter
     * @param gamedays the game day to filter for (current, next, previous or any) - represented by enum
     * @return Promise<Match[]>
     * @throws ParseError
     * @throws FetchError
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
     * Gets games in general, will include games for all teams the API key has access to if no search parameter is passed
     * (which can be a lot for an organizational key!).
     *
     * Scope: Club, Organization
     * Auth: Key
     *
     * @param season the season to filter for
     * @param gamedays enum: the gameday to filter - _current_, _previous_, _next_, _any_ are valid options
     * @param leagueGroup the ID of the LeagueGroup to filter for
     * @param search generic string that is passed directly to the API call (text search)
     * @throws ParseError
     * @throws FetchError
     */
    public async loadAllGames(
        season?: number,
        gamedays?: Gameday,
        leagueGroup?: number,
        search?: string
    ): Promise<Match[]> {
        let queryParameters: string[][] = [
            [this.SEASON_FILTER, season?.toString() ?? this.defaultSeason.toString()],
            [this.GAMEDAY_FILTER, gamedays ?? Gameday.current]
        ]

        if (leagueGroup) {
            queryParameters.push([this.LEAGUE_FILTER, leagueGroup.toString()])
        }

        if (search) {
            queryParameters.push([this.TEAM_SEARCH, search])
        }

        return await this.apiCallGET<Match[]>("matches.json", queryParameters)
    }

    /**
     * Get the boxscore for a single game specified by parameter. The function does one of three things:
     * - return a Promise with the boxscore data
     * - return null if the game could be found, but does not have a boxscore
     * - throws an error if there is a response, but parsing fails
     *
     * Scope: Club, Organization
     * Auth: Key
     *
     * @param id the BSM match ID to query for a boxscore
     * @return Promise<MatchBoxscore>
     * @return null
     * @throws ParseError
     */
    public async getBoxscoreForGame(id: number): Promise<MatchBoxscore | null> {
        try {
            const response = await this.apiCallGET<MatchBoxscore>(`matches/${id}/match_boxscore.json`, [])
            return response
        } catch (e) {
            if (e instanceof FetchError) {
                return null
            } else if (e instanceof ParseError) {
                throw new ParseError(e.message)
            }
        }
        return null
    }
}