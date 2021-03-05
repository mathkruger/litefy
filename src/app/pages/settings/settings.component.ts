import { Component, OnInit } from '@angular/core';
import { Settings } from 'src/app/models/settings';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(private settingsService: SettingsService) { }

  settings: Settings[];

  ngOnInit() {
    this.settingsService.getSettings()
    .subscribe(item => {
      this.settings = item;
      console.log(item);
    });
  }

  toggleSetting(setting: Settings, index: number) {
    setting.active = !setting.active;
    this.settings[index] = setting;

    this.settingsService.setSettings(this.settings);
  }

}
