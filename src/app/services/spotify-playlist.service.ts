/// <reference path="../../../node_modules/@types/spotify-api/index.d.ts" />

import { ServiceBase } from './service.base';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SpotifyPlaylistService {

    constructor(private service: ServiceBase) { }

    getPlaylist(id: string): Observable<SpotifyApi.SinglePlaylistResponse> {
        return this.service.Get(`https://api.spotify.com/v1/playlists/${id}`);
    }
}
