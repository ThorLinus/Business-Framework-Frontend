import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { catchError, retry } from 'rxjs';
import { Auth } from './interface/auth';
import { Login } from './interface/login';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private serverUrl: string = "localhost:8080";
  public authentification: Auth | undefined;

  constructor(private _http: HttpClient) { }

  public postLogin(login: Login){
    const httpOptions = {
      headers: new HttpHeaders ({
        'Content-Type': 'application/json'
      }),
      timeout: 900000,
    }

    let body = JSON.stringify(login)
    return this._http.post<Auth>('localhost:8080/api/login', body, httpOptions).pipe(
      retry(1),
      catchError(this.handleError.arguments));
  }

  handleError(error: any){
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\n Message: ${error.message}`;
    }
    window.alert(errorMessage);
    return new Error(errorMessage);
 }
}
