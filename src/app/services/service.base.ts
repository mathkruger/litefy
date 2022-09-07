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
        }).pipe(
          catchError(error => {
            if (error?.status === 403 && error?.error?.error?.reason === 'PREMIUM_REQUIRED') {
                return EMPTY;
            }
          })
        );
    }

    Delete<Tretorno>(url) {
        this.checkExpiration();

        return this.http.put<Tretorno>(url, {
            headers: {
                'Authorization': 'Bearer ' + this.auth.getAuth()
            }
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
