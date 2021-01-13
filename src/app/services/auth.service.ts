import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { UserService } from './user.service';

const keyAuth: string = 'auth';
const keyExpiration: string = 'authExpiration';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private userService: UserService) {}

  Autenticar(token: string, token_expiration: number) {
    let date = new Date();
    date.setSeconds(token_expiration);

    localStorage.setItem(keyAuth, token);
    localStorage.setItem(keyExpiration, JSON.stringify(date));
  }

  setUser(user: User) {
    this.userService.setUser(user);
  }

  Autenticado(): boolean {
    return this.getAuth() != null;
  }

  getAuth(): string {
    return localStorage.getItem(keyAuth);
  }

  getExpiration(): Date {
    return new Date(localStorage.getItem(keyExpiration));
  }

  logout() {
    localStorage.removeItem(keyAuth);
    localStorage.removeItem(keyExpiration);
    this.userService.setUser(null);
  }

}
