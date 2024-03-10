import type { Club } from "./Club.js";
import type { AbstractStatisticsEntry } from "./AbstractStatisticsEntry.js";

export interface FieldingStatisticsEntry extends AbstractStatisticsEntry {
    data: FieldingStatisticsData[];
    summaries: FieldingStatisticSummary[];
}

interface FieldingStatisticValues {
    type: string;
    games: number;
    games_started: number;
    innings_played: string;
    assists: number;
    putouts: number;
    errors: number;
    fielding_average: string;
    double_plays: number;
    triple_plays: number;
    passed_balls: number;
    stolen_bases: number;
    caught_stealings: number;
    pitcher: number;
    catcher: number;
    first_baseman: number;
    second_baseman: number;
    third_baseman: number;
    shortstop: number;
    left_fielder: number;
    center_fielder: number;
    right_fielder: number;
}

interface FieldingStatisticsData {
    club: Club;
    league: {
        id: number;
        type: string;
        name: string;
        acronym: string;
        sport: string;
        sort: number;
        season: number;
        age_group: string;
    };
    type: string;
    values: FieldingStatisticValues;
}

interface FieldingStatisticSummary {
    values: FieldingStatisticValues;
}