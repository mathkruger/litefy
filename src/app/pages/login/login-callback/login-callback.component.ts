import { User } from './../../../models/user';
import { ServiceBase } from './../../../services/service.base';
import { Router } from '@angular/router';
import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-callback',
  templateUrl: './login-callback.component.html',
  styleUrls: ['./login-callback.component.css']
})
export class LoginCallbackComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router, private service: ServiceBase) { }

  ngOnInit() {
    let params = this.getHashParams();

    if (params.access_token) {
      this.auth.Autenticar(params.access_token, params.expires_in);
      
      this.service.Get<User>('https://api.spotify.com/v1/me')
        .subscribe(item => {
          this.auth.setUser(item);
        });

      this.router.navigate(['']);
    }
  }

  getHashParams() {
    let hashParams: any = {};
    let e, r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    while (e = r.exec(q)) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }

}
