import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { YoutubePlayerStatus } from "src/app/models/youtube-player-status";

@Injectable({
    providedIn: "root",
})
export class YoutubePlayerService {
    videoContainerId: string;

    playerSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
    playerStatusSubject = new BehaviorSubject<YoutubePlayerStatus>(null);

    player: any;
    playerStatus: YoutubePlayerStatus = new YoutubePlayerStatus();

    currentPlaylist: YoutubePlayerStatus[];

    showVideo = true;

    public YT: any;
    public video: any;
    public reframed: Boolean = false;

    isRestricted = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    init() {
        if (window["YT"]) {
            this.startVideo();
            return;
        }

        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName("script")[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        window["onYouTubeIframeAPIReady"] = () => this.startVideo();
    }

    toggleVideo() {
        if (this.showVideo) {
            this.showVideo = false;
        } else {
            this.showVideo = true;
            setTimeout(() => {
                this.init();
            });
        }
    }

    startVideo() {
        this.reframed = false;
        this.player = new window["YT"].Player(this.videoContainerId, {
            height: "100",
            width: "100",
            playerVars: {
                autoplay: 0,
                modestbranding: 0,
                controls: 0,
                disablekb: 1,
                rel: 0,
                showinfo: 0,
                fs: 0,
                playsinline: 1,
                playlist: "",
            },
            events: {
                onStateChange: this.onPlayerStateChange.bind(this),
                onError: this.onPlayerError.bind(this),
                onReady: this.onPlayerReady.bind(this),
            },
        });
    }

    onPlayerReady() {
        this.setPlayerItem(this.player);
    }

    onPlayerStateChange(event) {
        switch (event.data) {
            case window["YT"].PlayerState.PLAYING:
                if (
                    this.currentPlaylist != null &&
                    this.currentPlaylist.length > 0
                ) {
                    const index = this.player.getPlaylistIndex();
                    this.playerStatus = this.currentPlaylist[index];
                }
                this.playerStatus.isPlaying = true;
                this.setPlayerStatus(this.playerStatus);
                break;
            case window["YT"].PlayerState.PAUSED:
                this.playerStatus.isPlaying = false;
                this.setPlayerStatus(this.playerStatus);
                break;
            case window["YT"].PlayerState.ENDED:
                this.playerStatus.isPlaying = false;
                this.setPlayerStatus(this.playerStatus);
                break;
        }
    }

    cleanTime() {
        return Math.round(this.player.getCurrentTime());
    }

    onPlayerError(event) {
        switch (event.data) {
            case 2:
                console.log("" + this.video);
                break;
            case 100:
                break;
            case 101 || 150:
                break;
        }
    }

    setPlayerItem(item: any) {
        if (item !== undefined) {
            this.player = item;
            this.playerSubject.next(item);
        }
    }

    getPlayerItem() {
        return this.playerSubject.asObservable();
    }

    setPlayerStatus(item: YoutubePlayerStatus) {
        if (item !== undefined) {
            this.playerStatus = item;
            this.playerStatusSubject.next(item);
        }
    }

    getPlayerStatus() {
        return this.playerStatusSubject.asObservable();
    }

    openMultiple(videos: string[]) {
        this.player.clearVideo();
        this.player.loadPlaylist(videos);
    }

    openOne(id: string) {
        this.player.clearVideo();
        this.player.loadVideoById(id);
    }

    public play() {
        this.player.playVideo();
    }

    public pause() {
        this.player.pauseVideo();
    }

    public next() {
        this.player.nextVideo();
    }

    public previous() {
        this.player.previousVideo();
    }

    add(id: string) {
        this.player.cueVideoById(id);
    }
}
