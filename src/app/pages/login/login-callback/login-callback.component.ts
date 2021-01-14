import { environment } from './../../../../environments/environment';
import { User } from './../../../models/user';
import { ServiceBase } from './../../../services/service.base';
import { Router } from '@angular/router';
import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login-callback',
  templateUrl: './login-callback.component.html',
  styleUrls: ['./login-callback.component.css']
})
export class LoginCallbackComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router, private service: ServiceBase, private httpCliente: HttpClient) { }

  ngOnInit() {
    console.log('ENTROU AQUI CARAI')
    const params = window.location.href.split('?')[1].split('&');

    if (params) {
      const token = params.find(x => x.indexOf('access_token=') > -1).replace('access_token=', '');
      const expires_in = params.find(x => x.indexOf('expires_in=') > -1).replace('expires_in=', '');

      this.auth.Autenticar(token, parseInt(expires_in));

      this.service.Get<User>('https://api.spotify.com/v1/me')
        .subscribe(item => {
          this.auth.setUser(item);
        });

      this.router.navigate(['']);

    }
  }
}
