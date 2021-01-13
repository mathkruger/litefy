import { UserService } from './../../services/user.service';
import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private userService: UserService) { }

  dados: User;

  ngOnInit() {
    this.userService.getUser().subscribe(item => {
      this.dados = item;
    })
  }

  userMenuAberto = false;

}
