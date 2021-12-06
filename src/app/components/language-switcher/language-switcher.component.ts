import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-switcher',
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.css']
})
export class LanguageSwitcherComponent implements OnInit {

  constructor(public translate: TranslateService) { }

  currentLang: any;
  languages: any[] = [];
  hidden: boolean = true;

  ngOnInit() {
    this.translate.getLangs().forEach(lang => {
      this.languages.push({
        code: lang,
        flag: ''
      });
    });

    this.setFlags();
    this.currentLang = this.languages.find(x => x.code === this.translate.currentLang);
  }

  setFlags() {
    this.languages.forEach(x => {
      this.translate.getTranslation(x.code).subscribe(t => {
        x.flag = t.FlagCode
      });
    });
  }
  
  switchLang(lang: any) {
    this.hidden = true;
    this.currentLang = lang;
    this.translate.use(lang.code);
    window.localStorage.setItem('languageSelected', JSON.stringify(lang));
  }
}
