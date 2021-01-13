import { environment } from './../../../../environments/environment';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-authenticate',
  templateUrl: './login-authenticate.component.html',
  styleUrls: ['./login-authenticate.component.css']
})
export class LoginAuthenticateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  generateRandomString(length) {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

  login() {
    let client_id = environment.client_id; // Your client id
    let redirect_uri = environment.redirect_uri; // Your redirect uri

    let scope = 'user-read-recently-played user-modify-playback-state streaming user-read-private user-read-email';
    let state = this.generateRandomString(16);

    let url = 'https://accounts.spotify.com/authorize';
    url += '?response_type=token';
    url += '&client_id=' + encodeURIComponent(client_id);
    url += '&scope=' + encodeURIComponent(scope);
    url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
    url += '&state=' + encodeURIComponent(state);

    (<any>window).location = url;
  }

}
