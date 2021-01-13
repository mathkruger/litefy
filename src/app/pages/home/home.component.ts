import { ServiceBase } from './../../services/service.base';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

declare var Spotify: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private auth: AuthService, private service: ServiceBase) { }

  ngOnInit() {
    
  }
}
