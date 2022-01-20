import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs';
import { Auth } from './interface/auth';
import { Tickets } from './interface/tickets';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  private ticketURL: string = 'http://localhost:8080/api/dashboard/TicketsAvg'
  private ticketTime: number | undefined;
  private ticketAchievement: number | undefined;
  private ticketCourse: Map<string, number> | undefined;

  constructor(private _http: HttpClient) { }

  public ticketsAvg(tickets: Tickets) {
    const httpOptions = {
      headers: new HttpHeaders ({
        'Content-Type': 'application/json'
      }),
      timeout: 900000,
    }

    this.ticketTime = tickets.ticketTime;
    this.ticketAchievement = tickets.targetAchievement;
    this.ticketCourse = tickets.ticketCourse;

    let body = JSON.stringify(tickets)
    return this._http.post<Tickets>(this.ticketURL, body, httpOptions).pipe(
      retry(1))
  }
}
