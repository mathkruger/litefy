import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class YoutubePlayerService {
    playerSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
    player: any;

    setPlayerItem(item: any) {
        if(item !== undefined) {
            this.player = item;
            console.log(this.player);
            this.playerSubject.next(item);
        }
    }

    getPlayerItem() {
        return this.playerSubject.asObservable();
    }

    openMultiple(videos: string[]) {
        this.player.clearVideo();
        this.player.loadPlaylist(videos);
    }

    openOne(id: string) {
        this.player.clearVideo();
        this.player.loadVideoById(id);
    }

    play() {
        this.player.playVideo();
    }

    pause() {
        this.player.pauseVideo();
    }

    add(id: string) {
        this.player.cueVideoById(id);
    }
}
