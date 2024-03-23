import {BSMDataObject} from "./BSMDataObject.js";

export interface Table extends BSMDataObject {
    league_id: number;
    league_name: string;
    season: number;
    rows: Row[];
}

interface Row {
    rank: string;
    team_name: string;
    short_team_name: string;
    match_count: number;
    wins_count: number;
    losses_count: number;
    quota: string;
    games_behind: string;
    streak: string;
}
