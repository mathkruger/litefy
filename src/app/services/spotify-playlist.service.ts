import { ServiceBase } from './service.base';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class SpotifyPlaylistService {

    constructor(private service: ServiceBase) { }

    getPlaylist(id: string) {
        return this.service.Get(`https://api.spotify.com/v1/playlists/${id}`);
    }
}
