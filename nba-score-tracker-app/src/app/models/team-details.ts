import { Team } from "./team-list";

export class TeamDetails {
    data: Result[] = []
}

export class Result {
    id: number = 0;
    date: Date = new Date();
    home_town: Team = new Team();
    home_team_score: number = 0;
    period: number = 0;
    postseason: boolean = false;
    season: number = 0;
    status: string = '';
    time: string = '';
    visitor_team: Team = new Team();
    visitor_team_score: number = 0;
}