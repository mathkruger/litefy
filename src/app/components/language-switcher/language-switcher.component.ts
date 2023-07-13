import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Injectable, Inject } from '@angular/core';



@Component({
  selector: 'app-language-switcher',
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.css']
})
export class LanguageSwitcherComponent implements OnInit {

  constructor(public translate: TranslateService, @Inject('WINDOW') private window: Window) { }

  currentLang: any;
  languages: any[] = [];
  hidden: boolean = true;

  ngOnInit() {
    const defaultLanguage = window.localStorage.getItem("languageSelected") || this.window.navigator.language.slice(0,2);



    this.translate.getLangs().forEach(lang => {
      this.languages.push({
        code: lang,
        flag: '',
        name: '',
        direction: 'ltr'
      });
    });

    this.setFlags();

    this.currentLang = this.languages.find(x => x.code === defaultLanguage);
    this.translate.use(this.currentLang.code);
  }

  setFlags() {
    this.languages.forEach(x => {
      this.translate.getTranslation(x.code).subscribe(t => {
        x.flag = t.FlagCode,
        x.name = t.LanguageName,
        x.direction = t.direction
      });
    });
  }

  switchLang(lang: any) {
    this.hidden = true;
    this.currentLang = lang;
    this.translate.use(lang.code);
    window.localStorage.setItem('languageSelected', lang.code);
  }
}

export const WindowProvider = [{ provide: "WINDOW", useFactory: getWindow }];

export function getWindow(): Window {
    return window;
}
