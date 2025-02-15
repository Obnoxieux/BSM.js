import type {Match} from "../model/Match.js";
import {MatchDecorator} from "../service/MatchDecorator.js";
import {GameWinner} from "../enum/GameWinner.js";
import {MatchState} from "../enum/MatchState.js";

describe("MatchDecorator", () => {
  let match: Match;

  beforeEach(() => {
    match = {
      allow_move_no_show: false,
      assignments_approved: false,
      // @ts-ignore
      away_league_entry: undefined,
      away_placeholder: "",
      created_at: "",
      // @ts-ignore
      field: undefined,
      // @ts-ignore
      home_league_entry: undefined,
      home_placeholder: "",
      human_score_multiplier: null,
      human_state: "",
      id: 0,
    // @ts-ignore
      league: undefined,
      league_id: 0,
      locked_for_clubs: false,
      min_count_scorer: 0,
      min_count_umpire: 0,
      planned_innings: 0,
      score_multiplier: 0,
      scorer_assignments: [],
      season: 0,
      statistics_published: false,
      time: "",
      umpire_assignments: [],
      updated_at: "",
      match_id: "123",
      home_team_name: "Team A",
      away_team_name: "Team B",
      home_runs: 5,
      away_runs: 3,
      state: "completed"
    };
  });

  test("isDerby should return true if team name is in both home and away team names", () => {
    match.home_team_name = "Team A";
    match.away_team_name = "Team A";
    const decorator = new MatchDecorator(match);
    expect(decorator.isDerby("Team A")).toBe(true);
  });

  test("isDerby should return false if team name is only in one team", () => {
    const decorator = new MatchDecorator(match);
    expect(decorator.isDerby("Team A")).toBe(false);
  });

  test("getWinnerForMatch should return home winner if home runs are higher", () => {
    const decorator = new MatchDecorator(match);
    expect(decorator.getWinnerForMatch()).toBe(GameWinner.home);
  });

  test("getWinnerForMatch should return away winner if away runs are higher", () => {
    match.home_runs = 2;
    match.away_runs = 4;
    const decorator = new MatchDecorator(match);
    expect(decorator.getWinnerForMatch()).toBe(GameWinner.away);
  });

  test("getWinnerForMatch should return none if scores are equal", () => {
    match.home_runs = 3;
    match.away_runs = 3;
    const decorator = new MatchDecorator(match);
    expect(decorator.getWinnerForMatch()).toBe(GameWinner.none);
  });

  test("getMatchState should return notYetPlayed if match is planned", () => {
    match.state = "planned";
    const decorator = new MatchDecorator(match);
    expect(decorator.getMatchState("Team A")).toBe(MatchState.notYetPlayed);
  });

  test("getMatchState should return cancelled if match is cancelled", () => {
    match.state = "cancelled";
    const decorator = new MatchDecorator(match);
    expect(decorator.getMatchState("Team A")).toBe(MatchState.cancelled);
  });

  test("getMatchState should return derby if it's a derby match", () => {
    match.home_team_name = "Team A";
    match.away_team_name = "Team A";
    const decorator = new MatchDecorator(match);
    expect(decorator.getMatchState("Team A")).toBe(MatchState.derby);
  });

  test("getMatchState should return won if the team won the match", () => {
    const decorator = new MatchDecorator(match);
    expect(decorator.getMatchState("Team A")).toBe(MatchState.won);
  });

  test("getMatchState should return lost if the team lost the match", () => {
    match.home_runs = 2;
    match.away_runs = 4;
    const decorator = new MatchDecorator(match);
    expect(decorator.getMatchState("Team A")).toBe(MatchState.lost);
  });

  test("getMatchState should return final if the match is completed and not a win/loss", () => {
    match.home_runs = 3;
    match.away_runs = 3;
    const decorator = new MatchDecorator(match);
    expect(decorator.getMatchState("Team C")).toBe(MatchState.final);
  });

  test("isPlayoffGame should return true if match_id contains 'PO'", () => {
    match.match_id = "PO123";
    const decorator = new MatchDecorator(match);
    expect(decorator.isPlayoffGame()).toBe(true);
  });

  test("isPlayoffGame should return false if match_id does not contain 'PO'", () => {
    const decorator = new MatchDecorator(match);
    expect(decorator.isPlayoffGame()).toBe(false);
  });
});
