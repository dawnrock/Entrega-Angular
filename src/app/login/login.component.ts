import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { LoginEntity } from '../model/login-entity';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username : string = '';
  password : string = '';
  userLogin: boolean = false;
  emptyLogin: boolean = false;
  newLogin: LoginEntity;
  miColor = 'lightblue';
  infoLogin : string ='';




  constructor(private router: Router, private auth: AuthService ) {
    this.newLogin = {
      username: "",
      password: ""
    }
  }


  ngOnInit(): void {
  }



  checkLogin() {
    this.userLogin = this.auth.login(this.newLogin.username, this.newLogin.password);
    if (this.userLogin === true) {
      this.infoLogin ="Username y password correcto"
    } else {
      this.infoLogin ="Username o password incorrecto"
    }
  }

  getLogin() {
    this.userLogin = this.auth.login(this.newLogin.username, this.newLogin.password);
    if (this.userLogin === true) {
      this.router.navigate(['/dashboard']);
    }
  }



  quitLogin() {
    this.emptyLogin = this.auth.logOut();
    return this.emptyLogin;
  }


}
