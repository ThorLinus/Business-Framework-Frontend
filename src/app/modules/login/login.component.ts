import { Component, OnInit } from '@angular/core';
import { Auth } from '../data/interface/auth';
import { Login } from '../data/interface/login';

declare var login: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // public login: Login;
  // public auth: Auth;

  constructor() { }

  ngOnInit(): void {
  }

}
