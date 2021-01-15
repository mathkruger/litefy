import { ServiceBase } from './service.base';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class SpotifyArtistService {

    constructor(private service: ServiceBase) { }

    getArtist(id: string) {
        return this.service.Get(`https://api.spotify.com/v1/artists/${id}`);
    }

    getArtistTopTracks(id: string) {
        return this.service.Get(`https://api.spotify.com/v1/artists/${id}/top-tracks?market=from_token`);
    }

    getArtistRelated(id: string) {
        return this.service.Get(`https://api.spotify.com/v1/artists/${id}/related-artists`);
    }

    getArtistAlbums(id: string) {
        return this.service.Get(`https://api.spotify.com/v1/artists/${id}/albums`);
    }
}
