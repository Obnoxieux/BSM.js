import {BSMDataObject} from "./BSMDataObject.js";
import {Team} from "./Team.js";

export interface ClubTeam extends BSMDataObject {
    number: number
    team: Team
}