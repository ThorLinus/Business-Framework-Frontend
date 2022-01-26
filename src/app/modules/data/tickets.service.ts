import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { Tickets } from './interface/tickets';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  private ticketURL: string = 'http://localhost:8080/api/dashboard/TicketsAvg'
  public tickets: any;
  public ticketTime: any;
  public targetAchievement: any;
  public ticketCourse: any;

  constructor(private _http: HttpClient) { }

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
}
