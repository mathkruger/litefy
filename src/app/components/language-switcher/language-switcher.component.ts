import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-switcher',
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.css']
})
export class LanguageSwitcherComponent implements OnInit {

  constructor(public translate: TranslateService) { }

  ngOnInit() {
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }
}
