import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { UserService } from './user.service';

const keyAuth: string = 'auth';
const keyExpiration: string = 'authExpiration';
const keyUser: string = 'user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private userService: UserService) {}

  Autenticar(token: string, token_expiration: number) {
    let date = new Date();
    let d = new Date();
    d = new Date(d.getTime() + token_expiration * 1000);

    localStorage.setItem(keyAuth, token);
    localStorage.setItem(keyExpiration, JSON.stringify(d));
  }

  setUser(user: User) {
    this.userService.setUser(user);
    localStorage.setItem(keyUser, JSON.stringify(user));
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
    localStorage.removeItem(keyUser);
    this.userService.setUser(null);
  }

}
