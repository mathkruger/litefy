import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LyricsResult } from '../models/lyrics-result';

@Injectable({
    providedIn: 'root'
})
export class LyricsService {

    constructor(private http: HttpClient) { }

    getLyrics(artist: string, trackName: string): Observable<LyricsResult> {
        const vagalumeKey = environment.vagalume_key;
        return this.http.get<LyricsResult>(`https://api.vagalume.com.br/search.php?apikey=${vagalumeKey}&art=${artist}&mus=${trackName}`);
    }
}
