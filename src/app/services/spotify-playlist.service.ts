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


    createPlaylist(name: string, description: string, isCollaborative: boolean, isPublic: boolean): Observable<SpotifyApi.CreatePlaylistResponse> {
        console.log("in service");
        return this.service.Post(`https://api.spotify.com/v1/me/playlists`, {"name" : name, "description" : description, "collaborative": isCollaborative, "public" : isPublic});
    }
    updatePlaylistCover(playlistID: string, image: string){
        this.service.PutImage(`https://api.spotify.com/v1/me/playlists/` + playlistID + `/images`, image).subscribe(val => console.log(val));
        return this.service.PutImage(`https://api.spotify.com/v1/me/playlists/` + playlistID + `/images`, image);
    }

    addTrack(playlistId: string, trackId: string): Observable<SpotifyApi.AddTracksToPlaylistResponse> {
        this.service.Post(`https://api.spotify.com/v1/playlists/${playlistId}/tracks?uris=${trackId}`, {}).subscribe(val => console.log(val));
        return this.service.Post(`https://api.spotify.com/v1/playlists/${playlistId}/tracks?uris=${trackId}`, {});
    }
    deleteTrack(playlistId: string, trackId: string): Observable<SpotifyApi.RemoveTracksFromPlaylistResponse> {
        return this.service.Delete(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {"tracks": [{"uri":`spotify:track:${trackId}`}]});
    }

}
