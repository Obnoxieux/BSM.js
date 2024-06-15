import type {StatisticsData, StatisticsSummary} from "./AbstractStatisticsEntry.js";

export interface FieldingStatisticsEntry {
    data: StatisticsData<"FieldingStatistics">[];
    summaries: StatisticsSummary<"FieldingStatistics">[];
}

export interface FieldingStatisticValues {
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