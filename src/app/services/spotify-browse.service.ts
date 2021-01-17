import { ServiceBase } from './service.base';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SpotifyBrowseService {

    constructor(private service: ServiceBase) { }

    getNewAlbuns() {
        return this.service.Get('https://api.spotify.com/v1/browse/new-releases?limit=50');
    }

    getFeaturedPlaylists() {
        return this.service.Get('https://api.spotify.com/v1/browse/featured-playlists?limit=50&locale=pt');
    }
}
