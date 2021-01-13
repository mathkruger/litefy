import { User } from './../models/user';
import { ServiceBase } from './service.base';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor() { }

    userSubject: BehaviorSubject<User> = new BehaviorSubject<User>(null);

    setUser(user: User) {
        this.userSubject.next(user);
    }

    getUser() {
        return this.userSubject.asObservable();
    }
}
