import {ScorerAssignment, UmpireAssignment} from "./License.js";
import {Field} from "./Field.js";
import {League} from "./League.js";
import {Linescore} from "./Linescore.js";
import {AdditionalMatchStats, AdditionalStat, OffensiveMatchStats, PitchingMatchStats} from "./MatchStats.js";

export interface MatchBoxscore {
    header:             BoxscoreHeader;
    linescore:          Linescore;
    offensive_away:     OffensiveMatchStats;
    additional_away:    AdditionalMatchStats;
    offensive_home:     OffensiveMatchStats;
    additional_home:    AdditionalMatchStats;
    pitching_away:      PitchingMatchStats;
    pitching_home:      PitchingMatchStats;
    game_notes:         GameNotes;
    full_boxscore_html: string;
}

export interface Baserunning {
    stolen_bases:     AdditionalStat[];
    caught_stealings: AdditionalStat[];
}

export interface Batting {
    doubles:        AdditionalStat[];
    triples:        AdditionalStat[];
    homeruns:       AdditionalStat[];
    sacrifice_hits: AdditionalStat[];
    sacrifice_flys: AdditionalStat[];
}

export interface Fielding {
    errors:       AdditionalStat[];
    passed_balls: AdditionalStat[];
    double_plays: AdditionalStat[];
    triple_plays: AdditionalStat[];
}

export interface GameNotes {
    field:         Field;
    game_duration: string;
    spectators:    number;
    umpires:       UmpireAssignment[];
    scorers:       ScorerAssignment[];
}

export interface BoxscoreHeader {
    league:   League;
    season:   number;
    match_id: string;
    time:     string;
}