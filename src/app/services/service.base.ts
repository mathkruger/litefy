import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ServiceBase {
    constructor(private http: HttpClient, private auth: AuthService, private router: Router) { }

    Get<Tretorno>(url) {
        this.checkExpiration();

        return this.http.get<Tretorno>(url, {
            headers: {
                'Authorization': 'Bearer ' + this.auth.getAuth()
            }
        });
    }

    Post<Tretorno>(url, model) {
        this.checkExpiration();

        return this.http.post<Tretorno>(url, model, {
            headers: {
                'Authorization': 'Bearer ' + this.auth.getAuth()
            }
        });
    }

    Put<Tretorno>(url, model) {
        this.checkExpiration();

        return this.http.put<Tretorno>(url, model, {
            headers: {
                'Authorization': 'Bearer ' + this.auth.getAuth()
            }
        })
    }
    PutImage<Tretorno>(url, model) {
        this.checkExpiration();

        return this.http.put<Tretorno>(url, model, {
            headers: {
                'Authorization': 'Bearer ' + this.auth.getAuth(),
                'Content-Type': 'image/jpeg',
                'Cache-Control': 'no-cache'
            }
        })
    }

    Delete<Tretorno>(url, params) {
        this.checkExpiration();

        return this.http.delete<Tretorno>(url, {
            headers: {
                'Authorization': 'Bearer ' + this.auth.getAuth()
            },
            params: params
        });
    }

    private checkExpiration() {
        if (this.auth.getExpiration().getTime() < new Date().getTime()) {
            this.auth.logout();
            this.router.navigate(['login']);
            return false;
        }
    }

}
