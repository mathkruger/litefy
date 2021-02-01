import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';


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
        });
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
        if (this.auth.getExpiration() < new Date()) {
            this.auth.logout();
            this.router.navigate(['login']);
            return false;
        }
    }

}
