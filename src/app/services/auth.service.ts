import { User } from './../models/user';
import { Injectable } from '@angular/core';

const keyAuth: string = 'auth';
const keyExpiration: string = 'authExpiration';
const keyUser: string = 'user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {}

  Autenticar(token: string, token_expiration: number) {
    let date = new Date();
    date.setSeconds(date.getSeconds() + token_expiration);

    localStorage.setItem(keyAuth, token);
    localStorage.setItem(keyExpiration, JSON.stringify(date));
  }

  setUser(user: User) {
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
  }

}
