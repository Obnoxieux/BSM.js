import {
    Baserunning,
    Batting,
    Fielding,
} from "./MatchBoxscore.js";
import {Person} from "./Person.js";
import {OffensiveLineupEntry, OffensiveLineupStats, PitchingLineupEntry, PitchingLineupStats} from "./Lineup.js";
import {LeagueEntry} from "./LeagueEntry.js";

export interface AdditionalMatchStats {
    league_entry: LeagueEntry;
    batting:      Batting;
    baserunning:  Baserunning;
    fielding:     Fielding;
}

export interface OffensiveMatchStats {
    league_entry: LeagueEntry;
    lineup:       OffensiveLineupEntry[];
    sum:          OffensiveLineupStats;
}

export interface PitchingMatchStats {
    league_entry: LeagueEntry;
    lineup:       PitchingLineupEntry[];
    sum:          PitchingLineupStats;
}

export interface AdditionalStat {
    person: Person;
    count:  number;
    sum:    number;
}