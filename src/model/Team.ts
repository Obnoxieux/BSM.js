import {Club} from "./Club.js";

export interface Team {
    id:         number;
    name:       string;
    short_name: string;
    clubs:      Club[];
    type?:      string;
}