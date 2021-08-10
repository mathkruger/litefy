/// <reference path="../../../node_modules/@types/spotify-api/index.d.ts" />

import { ServiceBase } from './service.base';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SpotifyUserService {

    constructor(private service: ServiceBase) { }

    getUserPlaylists(): Observable<SpotifyApi.ListOfCurrentUsersPlaylistsResponse> {
        return this.service.Get('https://api.spotify.com/v1/me/playlists?limit=50');
    }

    getUserAlbums(): Observable<SpotifyApi.UsersSavedAlbumsResponse> {
        return this.service.Get('https://api.spotify.com/v1/me/albums?limit=50');
    }

    getUserTracks(): Observable<SpotifyApi.UsersSavedTracksResponse> {
        return this.service.Get('https://api.spotify.com/v1/me/tracks?limit=50');
    }

    getUserTopArtists(): Observable<SpotifyApi.UsersTopArtistsResponse> {
        return this.service.Get('https://api.spotify.com/v1/me/top/artists');
    }

    getUserTopTracks(): Observable<SpotifyApi.UsersTopTracksResponse> {
        return this.service.Get('https://api.spotify.com/v1/me/top/tracks');
    }

    getUserShows(): Observable<SpotifyApi.ShowObjectFull> {
        return this.service.Get('https://api.spotify.com/v1/me/shows');
    }

    getUserEpisodes(): Observable<SpotifyApi.EpisodeObjectFull> {
        return this.service.Get('https://api.spotify.com/v1/me/episodes');
    }
}
