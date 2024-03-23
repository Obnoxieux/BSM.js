import {BSMDataObject} from "./BSMDataObject.js";

export interface Club extends BSMDataObject {
    id: number;
    type: string;
    name: string;
    acronym: string;
    short_name: string;
    logo_url: string;
}