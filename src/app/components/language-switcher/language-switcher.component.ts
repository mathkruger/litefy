import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-switcher',
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.css']
})
export class LanguageSwitcherComponent implements OnInit {

  constructor(public translate: TranslateService) { }

  currentLang: string;

  ngOnInit() {
    this.currentLang = window.localStorage.getItem('languageSelected') || this.translate.currentLang;
  }

  switchLang(lang: string) {
    this.currentLang = lang;
    this.translate.use(lang);
    window.localStorage.setItem('languageSelected', lang);
  }
}
