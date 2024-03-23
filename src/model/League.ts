import {BSMDataObject} from "./BSMDataObject.js";

export interface League extends BSMDataObject {
    id: number;
    type: string;
    name: string;
    acronym: string;
    sport: string;
    sort: number;
    season: number;
    age_group: string;
}