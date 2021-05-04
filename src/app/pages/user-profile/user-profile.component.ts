import { Component, Injector, OnInit } from '@angular/core';
import { SettingsBase } from 'src/app/models/base/settings-base';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent extends SettingsBase implements OnInit {

  constructor(private userService: UserService, public translateService: TranslateService, injector: Injector) {
    super(injector);
  }

  activeUser: User;

  ngOnInit() {
    this.userService.getUser()
    .subscribe(item => {
      this.activeUser = item;
    });

    super.init();
  }
}
