import { ServiceBase } from './service.base';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class SpotifyUserService {

    constructor(private service: ServiceBase) { }

    getUserPlaylists() {
        return this.service.Get('https://api.spotify.com/v1/me/playlists?limit=50');
    }

    getUserAlbums() {
        return this.service.Get('https://api.spotify.com/v1/me/albums?limit=50');
    }

    getUserTracks() {
        return this.service.Get('https://api.spotify.com/v1/me/tracks?limit=50');
    }
}
