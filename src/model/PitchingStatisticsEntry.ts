import type {StatisticsData, StatisticsSummary} from "./AbstractStatisticsEntry.js";

export interface PitchingStatisticsEntry {
    data: StatisticsData<"PitchingStatistics">[];
    summaries: StatisticsSummary<"PitchingStatistics">[];
}

export interface PitchingStatisticValues {
    type: string;
    games: number;
    games_started: number;
    complete_games: number;
    innings_pitched: string;
    batters_faced: number;
    at_bats: number;
    runs: number;
    earned_runs: number;
    hits: number;
    doubles: number;
    triples: number;
    homeruns: number;
    strikeouts: number;
    base_on_balls_allowed: number;
    intentional_base_on_balls: number;
    hit_by_pitches: number;
    wild_pitches: number;
    interferences: number;
    balks: number;
    wins: number;
    losses: number;
    saves: number;
    earned_runs_average: string;
    walks_and_hits_per_innings_pitched: string;
}
