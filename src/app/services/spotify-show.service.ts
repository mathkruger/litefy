/// <reference path="../../../node_modules/@types/spotify-api/index.d.ts" />

import { ServiceBase } from './service.base';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SpotifyShowService {

    constructor(private service: ServiceBase) { }

    getShow(id: string): Observable<SpotifyApi.ShowObjectFull> {
        return this.service.Get(`https://api.spotify.com/v1/shows/${id}`);
    }

    getShowEpisodes(id: string): Observable<SpotifyApi.EpisodeObjectFull> {
        return this.service.Get(`https://api.spotify.com/v1/shows/${id}/episodes?limit=50`);
    }
}
