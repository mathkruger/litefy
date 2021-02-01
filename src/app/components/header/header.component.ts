import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { UserService } from './../../services/user.service';
import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private userService: UserService, public auth: AuthService, private router: Router) { }

  dados: User;
  menuAberto = false;

  userMenuAberto = false;

  ngOnInit() {
    this.userService.getUser().subscribe(item => {
      this.dados = item;
    });
  }

  sair() {
    this.userMenuAberto = false;
    this.auth.logout();
    this.router.navigate(['login']);
  }

}
