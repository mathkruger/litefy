import { Component, Injector, OnInit } from '@angular/core';
import { SettingsBase } from '@models/base/settings-base';
import { UserService } from '@services/user.service';
import { User } from '@models/user';
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
