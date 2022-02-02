import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, retry} from 'rxjs';
import { Auth } from './interface/auth';
import { Login } from './interface/login';
import {TicketDisplay} from "./interface/ticketDisplay";
import {NewCustomerDisplay} from "./interface/newCustomerDisplay";
import {Invoice} from "./interface/invoice";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private urlApi: string = 'http://localhost:8080/api';
  public authentification: Auth | undefined;
  private email: string = '';
  private password: string = '';

  constructor(private _http: HttpClient) { }

  public postLogin(login: Login){
    const httpOptions = {
      headers: new HttpHeaders ({
        'Content-Type': 'application/json'
      }),
      timeout: 900000,
    }

    this.email = login.email;
    this.password = login.password;

    let body = JSON.stringify(login)
    return this._http.post<Auth>(this.urlApi+'/login', body, httpOptions).pipe(
      retry(1))
  }

  public get userEmail() : string {
    return this.email;
  }

  public get userPassword() : string {
    return this.password;
  }
  public getTicketAvg(): Observable<TicketDisplay>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this._http.get<TicketDisplay>(this.urlApi+'/dashboard/TicketsAvg', httpOptions).pipe(
      retry(1))
  }

  public getNewCustomer(): Observable<NewCustomerDisplay>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this._http.get<NewCustomerDisplay>(this.urlApi+'/dashboard/newCostumer', httpOptions).pipe(
      retry(1))
  }
  public getNewTickets(): Observable<TicketDisplay>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this._http.get<TicketDisplay>(this.urlApi+'/dashboard/NewTicket', httpOptions).pipe(
      retry(1))
  }
  public getInvoice(): Observable<Invoice>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this._http.get<Invoice>(this.urlApi+'/dashboard/InvoiceDisplay', httpOptions).pipe(
      retry(1))
  }


}
