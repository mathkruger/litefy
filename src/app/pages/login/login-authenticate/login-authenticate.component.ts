import { environment } from './../../../../environments/environment';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login-authenticate',
  templateUrl: './login-authenticate.component.html',
  styleUrls: ['./login-authenticate.component.css']
})
export class LoginAuthenticateComponent {
  generateRandomString(length) {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

  login() {
    const client_id = environment.client_id; // Your client id
    const redirect_uri = environment.redirect_uri; // Your redirect uri

    const scope = 'user-top-read user-read-currently-playing user-read-playback-state user-read-recently-played user-modify-playback-state streaming user-read-private user-read-email user-library-read';
    const state = this.generateRandomString(16);

    let url = 'https://accounts.spotify.com/authorize';
    url += '?response_type=token';
    url += '&client_id=' + encodeURIComponent(client_id);
    url += '&scope=' + encodeURIComponent(scope);
    url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
    url += '&state=' + encodeURIComponent(state);

    (<any>window).location = url;
  }

}
