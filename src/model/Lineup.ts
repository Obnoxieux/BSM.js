import {Person} from "./Person.js";

export interface OffensiveLineupEntry {
    person:                Person;
    starter:               boolean;
    order:                 number;
    positions:             string[];
    human_positions_short: string[];
    values:                OffensiveLineupStats;
}

export interface OffensiveLineupStats {
    at_bats:                number;
    runs:                   number;
    hits:                   number;
    runs_batted_in:         number;
    strikeouts:             number;
    base_on_balls:          number;
    batting_average?:       string;
    on_base_plus_slugging?: string;
}

export interface PitchingLineupEntry {
    person: Person;
    order:  number;
    values: PitchingLineupStats;
}

export interface PitchingLineupStats {
    innings_pitched:       string;
    batters_faced:         number;
    at_bats:               number;
    hits:                  number;
    runs:                  number;
    earned_runs:           number;
    strikeouts:            number;
    base_on_balls_allowed: number;
    earned_runs_average?:  string;
    win_loss_save?:        null | string;
}