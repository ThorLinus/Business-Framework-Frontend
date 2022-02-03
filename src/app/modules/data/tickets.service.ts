import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { Tickets } from './interface/tickets';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  /*
    Dashboard
  */

  private ticketURL: string = 'http://localhost:8080/api/dashboard/TicketsAvg'
  public tickets: any;
  public ticketTime: any;
  public targetAchievement: any;
  public ticketCourse: any;

  constructor(private _http: HttpClient) { }

  /*
     Dashboard
  */
  public getTicketTime(){

    return this._http.get<Tickets>(this.ticketURL).subscribe(
      data => {
        this.ticketTime = data.ticketTime
      }
    )
  }

  public getTargetAchievement(){

    return this._http.get<Tickets>(this.ticketURL).subscribe(
      data => {
        this.targetAchievement = data.targetAchievement
      }
    )
  }

  public getTicketCourse(){
    
    return this._http.get<Tickets>(this.ticketURL).subscribe(
      data => {
        this.ticketCourse = data.ticketCourse
      }
    )
  }


  /*
    Hier werden die Daten für das Kreisdiagramm erstellt
    Bei Fertigstellung sollen hier die Daten aus dem Backend abgerufen werden.
  */
  ticketPieData(){
    return[{
      name:'Tickets',
      colorByPoint:true,
      data:[{
        name: 'open',
        y:14,
        selected: true,
        color: 'yellow'
      }, {
        name:'In progress',
        y: 39,
        color: 'orange'
      }, {
        name:'done',
        y: 237,
        color: 'green'
      }, {
        name: 'escalated',
        y: 1,
        color: 'red'
      }]
    }]
  }

    /*
    Hier werden die Daten für das Liniendiagramm erstellt
    Bei Fertigstellung sollen hier die Daten aus dem Backend abgerufen werden.
    */
  ticketAreaData(){
    return[{
      name: 'Number of Tickets',
      data: [270, 200, 150, 240, 260, 290, 230, 140, 170, 270,240, 260]
    }
  ]}  

}
