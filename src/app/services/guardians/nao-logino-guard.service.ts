import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';


@Injectable({
  providedIn: 'root'
})
export class NaoLoginGuardService implements CanActivate {

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    boolean | Observable<boolean> | Promise<boolean> {
    const autenticado = !this.authService.isAuthenticated();

    if (autenticado === false) {
      this.router.navigate(['']);
      return false;
    }

    return true;
  }

  constructor(private authService: AuthService, private router: Router) { }
}
