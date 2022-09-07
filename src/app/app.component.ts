import { AuthService } from "./services/auth.service";
import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { SettingsService } from "./services/settings.service";
import { Settings } from "./models/settings";
import { UserService } from "./services/user.service";
import { User } from "./models/user";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
    constructor(
        public auth: AuthService,
        public translate: TranslateService,
        private settingsService: SettingsService,
        private userService: UserService
    ) {}

    user: User;

    title = "spotify-client";
    defaultSettings = [new Settings(1, "SettingsImageText", true)];

    ngOnInit(): void {
        const languages = [
            "pt-BR",
            "es",
            "he",
            "fr",
            "ge",
            "gm",
            "ru",
            "ar",
            "hr",
            "hi",
            "it",
            "ua",
            "cr",
            "se",
            "da",
            "ta",
            "pl",
            "id",
            "de",
            "gn",
            "es-419",
            "en",
        ]; // always keep the "en" at the end, it's the default language for the website
        this.translate.addLangs(languages);
        this.translate.setDefaultLang(
            languages.includes(navigator.language) ? navigator.language : "en"
        );

        this.auth.setUser(JSON.parse(window.localStorage.getItem("user")));

        if (!this.settingsService.hasLocalstorageData()) {
            this.settingsService.setSettings(this.defaultSettings);
        } else {
            this.settingsService.setSettings(
                JSON.parse(
                    localStorage.getItem(this.settingsService.settingsKey)
                )
            );
        }

        this.userService.getUser().subscribe((item) => {
            this.user = item;
        });
    }
}
