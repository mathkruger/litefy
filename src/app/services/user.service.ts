import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    userSubject: BehaviorSubject<User> = new BehaviorSubject<User>(null);

    setUser(user: User) {
        this.userSubject.next(user);
    }

    getUser() {
        return this.userSubject.asObservable();
    }
}
