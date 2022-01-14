import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../data/interface/auth';
import { Login } from '../data/interface/login';
import { ServiceService } from '../data/service.service';


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

  constructor(private _service: ServiceService, private _router: Router){ 
    this.login$={
      email: "",
      password: ""
    }
    this.auth$={
      userid: "",
      token: "",
      admin: false,
    }
  }

  ngOnInit(): void { }

  public login(event: Login): void {
    console.log(this.login$.email);
    this._service.postLogin(this.login$).subscribe(auth=>{
      const authStringify = JSON.stringify(auth);
      const authJSON = JSON.parse(authStringify);

      localStorage.setItem('Auth', authJSON);

      console.log(authJSON.token+ "--------local:" + this.auth$.token);

      if(this.auth$.token!=null){
        this._router.navigate(['/home/home']);
      }else{
        this._router.navigate(['/login']);
        window.alert('Your Credentials are wrong');
      }
    })
  }
}
