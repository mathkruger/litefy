/// <reference path="../../../node_modules/@types/spotify-api/index.d.ts" />

import { ServiceBase } from './service.base';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SpotifyAlbumService {

    constructor(private service: ServiceBase) { }

    getAlbum(id: string): Observable<SpotifyApi.SingleAlbumResponse> {
        return this.service.Get(`https://api.spotify.com/v1/albums/${id}`);
    }

    getAlbumTracks(id: string): Observable<SpotifyApi.AlbumTracksResponse> {
        return this.service.Get(`https://api.spotify.com/v1/albums/${id}/tracks?limit=50`);
    }
}
