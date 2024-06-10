import {Club} from "./Club.js";
import {BSMDataObject} from "./BSMDataObject.js";
import {LeagueEntry} from "./LeagueEntry.js";

export interface Team extends BSMDataObject {
    id:         number
    name:       string
    season:     number
    short_name: string
    clubs:      Club[]
    type?:      string
    league_entries: LeagueEntry[]
}