import type {Club} from "./Club.js";
import {League} from "./League.js";
import {BattingStatisticValues} from "./BattingStatisticsEntry.js";
import {PitchingStatisticValues} from "./PitchingStatisticsEntry.js";
import {FieldingStatisticValues} from "./FieldingStatisticsEntry.js";
import {Person} from "./Person.js";

export interface StatisticsData<T extends keyof StatisticsValueTypes> {
    person?: Person,
    club?: Club
    league?: League
    type: T
    values: StatisticsValueTypes[T]
}

export interface StatisticsSummary<T extends keyof StatisticsValueTypes> {
    values: StatisticsValueTypes[T]
}

export type StatisticsValueTypes = {
    BattingStatistics: BattingStatisticValues,
    PitchingStatistics: PitchingStatisticValues,
    FieldingStatistics: FieldingStatisticValues,
};