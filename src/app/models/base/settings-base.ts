import { Injector } from "@angular/core";
import { SettingsService } from "src/app/services/settings.service";
import { Settings } from "../settings";

export class SettingsBase {
    private settingsService: SettingsService;

    constructor(injector: Injector) {
        this.settingsService = injector.get(SettingsService);
    }

    settings: Settings[];

    init() {
        this.settingsService.getSettings().subscribe((item) => {
            this.settings = item;
        });
    }

    canLoadImage() {
        return this.settings.find((x) => x.description === "SettingsImageText")
            .active;
    }
}
