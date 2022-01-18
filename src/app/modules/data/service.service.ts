import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs';
import { Auth } from './interface/auth';
import { Login } from './interface/login';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private loginURL: string = 'http://localhost:8080/api/login';
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
    return this._http.post<Auth>(this.loginURL, body, httpOptions).pipe(
      retry(1))
  }
  
  public get userEmail() : string {
    return this.email;
  }

  public get userPassword() : string {
    return this.password;
  }
}
