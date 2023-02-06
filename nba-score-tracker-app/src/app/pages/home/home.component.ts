import { Component } from '@angular/core';
import { TeamDetails } from 'src/app/models/team-details';
import { Teams } from 'src/app/models/team-list';
import { NbaService } from 'src/app/services/nba.service';
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  teamList: Teams = new Teams();
  teamDetailsList: TeamDetails[] = [];
  selectedId: string = '';
  
  constructor(private nbaService : NbaService){
    this.nbaService.getTeamList("teams").subscribe((data: Teams) => {
      this.teamList = data;
    });
  }

  getTeamName(event: any){
    this.selectedId = event.target.value;
  }

  async getTeamDetails(){
    if(this.selectedId){
      let url = `games?page=0&`;
      for(let i = 1; i < 12; i++){
        let date = moment();
        let newDate = date.add(-i,'day').format('YYYY-MM-DD');
        url = url+`dates[]=${newDate}&`
      }
      this.nbaService.getTeamDetsils(this.selectedId, url).subscribe((res: TeamDetails) =>{
        console.log(res.data);
        this.teamDetailsList.push(res);
        console.log(this.teamDetailsList);
      })
    }
  }

  deleteTeam(item: TeamDetails) {
    const index = this.teamDetailsList.indexOf(item);
    this.teamDetailsList.splice(index, 1);
  }
}
