import {LeagueEntry} from "./LeagueEntry.js";

export interface Linescore {
    match_id:       string;
    played_innings: number;
    away:           LinescoreEntry;
    home:           LinescoreEntry;
}

export interface LinescoreEntry {
    league_entry: LeagueEntry;
    innings:      number[];
    runs:         number;
    hits:         number;
    errors:       number;
}