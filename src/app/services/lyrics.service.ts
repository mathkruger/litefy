import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LyricsResult } from '../models/lyrics-result';
import { LyricsSearchResult } from '../models/lyrics-search-result';

@Injectable({
    providedIn: 'root'
})
export class LyricsService {

    constructor(private http: HttpClient) { }

    getLyrics(artist: string, trackName: string): Observable<LyricsResult> {
        const vagalumeKey = environment.vagalume_key;
        return this.http.get<LyricsResult>(`https://api.vagalume.com.br/search.php?apikey=${vagalumeKey}&art=${artist}&mus=${trackName}`);
    }

    getLyricsById(id: string) {
        const vagalumeKey = environment.vagalume_key;
        return this.http.get<LyricsResult>(`https://api.vagalume.com.br/search.php?apikey=${vagalumeKey}&musid=${id}`);
    }

    searchForLyrics(term: string) {
        return this.http.get<LyricsSearchResult>(`https://api.vagalume.com.br/search.excerpt?q=${term}&limit=1`);
    }
}
