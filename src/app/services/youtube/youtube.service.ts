import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { delay, map } from 'rxjs/operators';
import { YoutubePlayerService } from './youtube-player.service';

@Injectable({
    providedIn: 'root'
})
export class YoutubeService {

    constructor(private http: HttpClient, private playerService: YoutubePlayerService) { }

    getVideo(artist: string, trackName: string): Observable<any> {
        const key = environment.youtube_api_key;
        return this.http.get<any>(`https://www.googleapis.com/youtube/v3/search?part=snippet&videoCategoryId=10&maxResults=1&q=${artist} - ${trackName}&type=video&key=${key}`)
        .pipe(map(item => {
            // console.log(item);
            // let videoId = '';
            
            // for(let i = 0; i < item.items.length; i++) {
            //     if(item.items[i].snippet.title.indexOf(artist) > 0) {
            //         videoId = item.items[i].id.videoId;
            //         return videoId;
            //     }
            // }
            const videoId = item.items[0].id.videoId;
            return videoId;
        }))
        .pipe(delay(7000));
    }
}
