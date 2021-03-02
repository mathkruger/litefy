/// <reference path="../../../node_modules/@types/spotify-api/index.d.ts" />

import { ServiceBase } from './service.base';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SpotifyArtistService {

    constructor(private service: ServiceBase) { }

    getArtist(id: string): Observable<SpotifyApi.SingleArtistResponse> {
        return this.service.Get(`https://api.spotify.com/v1/artists/${id}`);
    }

    getArtistTopTracks(id: string): Observable<SpotifyApi.ArtistsTopTracksResponse> {
        return this.service.Get(`https://api.spotify.com/v1/artists/${id}/top-tracks?market=from_token`);
    }

    getArtistRelated(id: string): Observable<SpotifyApi.ArtistsRelatedArtistsResponse> {
        return this.service.Get(`https://api.spotify.com/v1/artists/${id}/related-artists`);
    }

    getArtistAlbums(id: string): Observable<SpotifyApi.ArtistsAlbumsResponse> {
        return this.service.Get(`https://api.spotify.com/v1/artists/${id}/albums`);
    }
}
