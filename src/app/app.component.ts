import { AuthService } from './services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(private auth: AuthService) {

  }

  ngOnInit(): void {
    this.auth.setUser(JSON.parse(window.localStorage.getItem('user')));
  }

  title = 'spotify-client';
}
