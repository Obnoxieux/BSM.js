import {Field} from "./Field.js";
import {Team} from "./Team.js";
import {League} from "./League.js";

export interface LeagueEntry {
    id:                                       number;
    created_at:                               string;
    updated_at:                               string;
    comment:                                  null;
    game_day:                                 null;
    not_competing:                            boolean;
    state:                                    string;
    umpire_selector_id:                       number;
    opaso_id?:                                number;
    current_player_list_id?:                  number;
    statistics_published_count:               number;
    current_roster_id?:                       number;
    human_game_day?:                          string;
    human_license_criteria_state?:            string;
    field?:                                   Field;
    team?:                                    Team;
    league: League
}