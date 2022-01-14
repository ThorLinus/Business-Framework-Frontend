import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { error } from 'highcharts';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Auth } from './interface/auth';
import { Login } from './interface/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private serverUrl: string = "";
  public Auth: any;

  constructor(private http: HttpClient) {

  }

  public postLogin(login: Login): Observable<Auth>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'applications/json'
      }),
      timeout: 90000,
    }
    
    return this.http.post<Auth>('serverUrl', login, httpOptions).pipe(
      retry(1));
  }

  // errorHandler(error: any){
  //   let errorMessage: string = "";
  //   if(error.error instanceof ErrorEvent){
  //     errorMessage = error.error.message;
  //   } else {
  //     errorMessage = 'Error Code: ${error.status}\nMessage: ${error.message}';
  //   }
  //   window.alert(errorMessage)
  //   return new Error(errorMessage);
  // }

}
