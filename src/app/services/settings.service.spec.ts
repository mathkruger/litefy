import {SettingsService} from "./settings.service";
import {TestBed, waitForAsync} from "@angular/core/testing";

const keySettings = 'settings';
const settingsObj = {
    "id": 1,
    "description": "someDescription",
    "active": true
};


describe("SettingsService", () => {
    let service: SettingsService;

    beforeEach(() => {
        TestBed.configureTestingModule({providers: [SettingsService]});
        service = TestBed.inject(SettingsService);
    });

    afterEach(() => {
        window.localStorage.clear();
    });

    it("#setSettings should save settings to Local Storage", () => {
        service.setSettings([settingsObj]);
        
        const result = window.localStorage.getItem(keySettings);

        expect(result).toBe(JSON.stringify([settingsObj]));
    });

    it("#getSettings should return null from observable if there are no settings stored", waitForAsync(() => {
        const result = service.getSettings();

        result.subscribe(res => {
            expect(res).toBeNull();
        })
    }));

    it("#getSettings should return settings object from observable if there are settings stored", waitForAsync(() => {
        service.setSettings([settingsObj]);

        const result = service.getSettings();

        result.subscribe(res => {
            expect(res).toEqual([settingsObj]);
        })
    }));

    it("#hasLocalstorageData should return true if there is settings data in Local Storage", () => {
        service.setSettings([settingsObj]);

        expect(service.hasLocalstorageData()).toBe(true);
    });

    it("#hasLocalstorageData should return false if there isn't settings data in Local Storage", () => {
        expect(service.hasLocalstorageData()).toBe(false);
    });

});
