import { User } from '../../../models/user';
import { ServiceBase } from '../../../services/service.base';
import { AuthService } from '../../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-callback',
  templateUrl: './login-callback.component.html',
  styleUrls: ['./login-callback.component.css']
})
export class LoginCallbackComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router, private service: ServiceBase, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.createAuthentication();
  }

  createAuthentication() {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params) {
        const token = params['access_token'];
        const expires_in = params['expires_in'];
        this.auth.Authenticate(token, parseInt(expires_in));
        this.service.Get<User>('https://api.spotify.com/v1/me')
          .subscribe(item => {
            this.auth.setUser(item);
          });
        this.router.navigate(['']);

      }
    });
  }
}
