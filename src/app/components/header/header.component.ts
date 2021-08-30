import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { UserService } from './../../services/user.service';
import { User } from './../../models/user';
import { Component, Injector, OnInit } from '@angular/core';
import { SettingsBase } from 'src/app/models/base/settings-base';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent extends SettingsBase implements OnInit {

  constructor(private userService: UserService, public auth: AuthService, private router: Router, injector: Injector) {
    super(injector);
  }

  user: User;
  openMenu = false;

  userOpenMenu = false;

  ngOnInit() {
    this.userService.getUser().subscribe(item => {
      this.user = item;
    });

    super.init();
  }

  sair() {
    this.userOpenMenu = false;
    this.auth.logout();
    this.router.navigate(['login']);
  }

}
