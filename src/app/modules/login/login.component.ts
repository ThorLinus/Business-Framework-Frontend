import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../data/interface/auth';
import { Login } from '../data/interface/login';
import { ServiceService } from '../data/service.service';

const outputNotification = document.getElementById('notification');

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public login$: Login;
  public auth$: Auth;
  public htmlStrCredentials = 'Your Credentials are wrong. \n Please try again.';

  constructor(public _service: ServiceService, private _router: Router){

    this.login$={
      email: "",
      password: ""
    }

    this.auth$={
      userid: "",
      admin: false,
      token: ""
    }
  }

  ngOnInit(): void { }

  public login(event: Login): void {
    console.log(this.login$.email + "-----------" + this.login$.password);
    console.log(this.auth$.userid + "-----------" + this.auth$.token);
    this._service.postLogin(this.login$).subscribe((auth: any)=>{
      const authStringify = JSON.stringify(auth);
      const authJSON = JSON.parse(authStringify);

      localStorage.setItem('Auth', authJSON);

      console.log(authJSON.token+ "--------local:" + this.auth$.token);
      console.log(this._service.userPassword)

      // if((this.login$.email != this._service.userEmail) || (this.login$.password != this._service.userPassword)) {
      //   if(outputNotification?.innerHTML){
      //     outputNotification.innerHTML = this.htmlStrCredentials;
      //   }
      //   this._router.navigate(['/login']);
      // } else {
      //   this._router.navigate(['/home/home']);
      // }

      if(this.auth$.token!=null){
        this._router.navigate(['/home/home']);
      }else{
        this._router.navigate(['/login']);        
      }
    })
  }
}
