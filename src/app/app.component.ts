import { AuthService } from './services/auth.service';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SettingsService } from './services/settings.service';
import { Settings } from './models/settings';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(public auth: AuthService, public translate: TranslateService, private settingsService: SettingsService) {
    const defaultLanguage = window.localStorage.getItem('languageSelected');
    translate.addLangs(['pt', 'en', 'es']);
    translate.setDefaultLang(defaultLanguage || 'pt');
  }

  title = 'spotify-client';
  defaultSettings = [
    new Settings(1, 'SettingsImageText', true),
  ]

  ngOnInit(): void {
    this.auth.setUser(JSON.parse(window.localStorage.getItem('user')));

    if(!this.settingsService.hasLocalstorageData()) {
      this.settingsService.setSettings(this.defaultSettings);
    }
    else {
      this.settingsService.setSettings(JSON.parse(localStorage.getItem(this.settingsService.settingsKey)));
    }
  }
}
