import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Settings } from '../models/settings';

@Injectable({
    providedIn: 'root'
})
export class SettingsService {
    settingsSubject: BehaviorSubject<Settings[]> = new BehaviorSubject<Settings[]>(null);
    settingsKey = 'settings';

    setSettings(settings: Settings[]) {
        localStorage.setItem(this.settingsKey, JSON.stringify(settings));
        this.settingsSubject.next(settings);
    }

    getSettings() {
        return this.settingsSubject.asObservable();
    }

    hasLocalstorageData() {
        return this.settingsKey in localStorage;
    }
}
