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

    createPlaylist(
        name: string,
        description: string,
        isCollaborative: boolean,
        isPublic: boolean
    ): Observable<SpotifyApi.CreatePlaylistResponse> {
        return this.service.Post(`https://api.spotify.com/v1/me/playlists`,
            {"name" : name, "description" : description, "collaborative": isCollaborative, "public" : isPublic});
    }

    addTrack(playlistId: string, trackId: string): Observable<SpotifyApi.AddTracksToPlaylistResponse> {
        const uri = "spotify:track:" + trackId;
        const body = {
            uris: [uri],
            position: 0
        };
        this.service.Post(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
            body).subscribe(val => console.log(val));
        return this.service.Post(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, body);
    }
}
