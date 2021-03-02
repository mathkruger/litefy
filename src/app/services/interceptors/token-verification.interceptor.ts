import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenVerificationInterceptorService implements HttpInterceptor {

  constructor(private authService: AuthService, private router: Router) { }

  lastUrl = '/';

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          this.Sair();
        }
        return throwError(error);
      }));

  }

  Sair() {
    this.authService.logout();
    this.router.navigate(['login']);
  }
}
