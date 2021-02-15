import { templateJitUrl } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private username : string = '';

  constructor() {
    const isLogged = this.isLogged();
  }

  login(username: string, password: string): boolean {
    if(username === 'master8@lemoncode.net' && password === '12345678') {
      localStorage.setItem('username', username);
      this.username = username;
      return true;
    }
    return false;
  }
  logOut(): boolean {
    localStorage.removeItem('username');
    return true;
  }

  isLogged(): boolean {
    return localStorage.getItem('username') ? true : false;
  }

  getUserName(): string | null {
    return this.username;
  }


}
