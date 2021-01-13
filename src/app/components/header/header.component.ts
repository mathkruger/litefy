import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  dados: User;

  ngOnInit() {
    this.dados = JSON.parse(localStorage.getItem('user')) as User;
  }

}
