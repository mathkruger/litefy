import { ServiceBase } from './service.base';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class SpotifyAlbumService {

    constructor(private service: ServiceBase) { }

    getAlbum(id: string) {
        return this.service.Get(`https://api.spotify.com/v1/albums/${id}`);
    }

    getAlbumTracks(id: string) {
        return this.service.Get(`https://api.spotify.com/v1/albums/${id}/tracks?limit=50`);
    }
}
