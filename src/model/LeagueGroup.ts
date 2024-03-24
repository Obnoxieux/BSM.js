import {League} from "./League.js";

export interface LeagueGroup {
    id: number;
    season: number;
    name: string;
    acronym: string;
    league: League;
}