import {League} from "./League.js";
import {Field} from "./Field.js";
import {ScorerAssignment, UmpireAssignment} from "./License.js";
import {LeagueEntry} from "./LeagueEntry.js";

export interface Match {
    id:                                    number;
    match_id:                              string;
    time:                                  string;
    league_id:                             number;
    comment:                               null;
    home_runs:                             null;
    away_runs:                             null;
    locked_for_clubs:                      boolean;
    created_at:                            string;
    updated_at:                            string;
    state:                                 string;
    season:                                number;
    easyscore_id:                          null;
    second_league_id:                      null;
    extra_rating_league_id:                null;
    allow_move_no_show:                    boolean;
    planned_innings:                       number;
    min_count_umpire:                      number;
    min_count_scorer:                      number;
    score_multiplier:                      number;
    home_placeholder:                      string;
    away_placeholder:                      string;
    assignments_approved:                  boolean;
    extra_rating_league2_id:               null;
    livestream_url?:                       string;
    statistics_published:                  boolean;
    name:                                  null;
    human_state:                           string;
    human_score_multiplier:                null;
    scoresheet_url?:                       string;
    home_league_entry:                     LeagueEntry;
    home_team_name:                        string;
    away_league_entry:                     LeagueEntry;
    away_team_name:                        string;
    league:                                League;
    field:                                 Field;
    scorer_assignments:                    ScorerAssignment[];
    umpire_assignments:                    UmpireAssignment[];
}