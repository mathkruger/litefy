/// <reference path="../../../node_modules/@types/spotify-api/index.d.ts" />

import { ServiceBase } from './service.base';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SpotifyBrowseService {

    constructor(private service: ServiceBase) { }

    getNewAlbuns(): Observable<SpotifyApi.ListOfNewReleasesResponse> {
        return this.service.Get('https://api.spotify.com/v1/browse/new-releases?limit=50');
    }

    getFeaturedPlaylists(): Observable<SpotifyApi.ListOfFeaturedPlaylistsResponse> {
        return this.service.Get('https://api.spotify.com/v1/browse/featured-playlists?limit=50&locale=pt');
    }
}
