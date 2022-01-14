import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../data/interface/auth';
import { Login } from '../data/interface/login';
import { LoginService } from '../data/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public login$: Login;
  public auth$: Auth;

  constructor(public loginService: LoginService, private router: Router){

    this.login$={
      email: "",
      password: ""
    }

    this.auth$={
      userId: "",
      isAdmin: false,
      token: ""
    }
   }

  ngOnInit(): void {
  }

  public login(event: Login): void{
    this.loginService.postLogin(this.login$).subscribe((auth: Auth) =>{
      this.auth$ = auth;
      localStorage.setItem("Auth",JSON.stringify(auth));
      console.log(auth.token+ "---------- local: " + this.auth$.token);

      if(this.auth$.token!=null){
        this.router.navigate(['']);
      } else {
        this.router.navigate(['/login']);
        window.alert("Credentials are wrong");
      }
    })
  }

}
