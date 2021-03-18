import { LyricsResult } from "./../../models/lyrics-result";
import { LyricsService } from "./../../services/lyrics.service";
import { SpotifyPlayerService } from "./../../services/spotify-player.service";
import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { YoutubePlayerService } from "src/app/services/youtube/youtube-player.service";
import { UserService } from "src/app/services/user.service";

@Component({
    selector: "app-karaoke",
    templateUrl: "./karaoke.component.html",
    styleUrls: ["./karaoke.component.css"],
})
export class KaraokeComponent implements OnInit {
    constructor(
        private playerService: SpotifyPlayerService,
        private lyricsService: LyricsService,
        public youtubePlayerService: YoutubePlayerService,
        private cd: ChangeDetectorRef,
        private userService: UserService
    ) {}

    lastStatus: any;
    playerStatus: any;
    lyrics: LyricsResult;

    firstRequest = true;
    notFound = true;

    premium = true;

    ngOnInit() {
        this.userService.getUser().subscribe((user) => {
            let req = null;
            if (user.product === "premium") {
                this.premium = true;
                req = this.playerService.getPlayerStatus();
            } else {
                this.premium = false;
                req = this.youtubePlayerService.getPlayerStatus();
            }

            req.subscribe((item) => {
                this.lastStatus = this.playerStatus
                    ? JSON.parse(JSON.stringify(this.playerStatus))
                    : item;
                this.playerStatus = item;

                this.cd.detectChanges();
                this.getLyrics();
            });
        });
    }

    getLyrics(id: string = null) {
        if (this.lastStatus && this.playerStatus) {
            if (this.premium) {
                if (
                    this.lastStatus.item.id !== this.playerStatus.item.id ||
                    this.firstRequest
                ) {
                    if (id === null) {
                        this.lyricsService
                            .getLyrics(
                                this.playerStatus.item.album.artists[0]?.name,
                                this.playerStatus.item.name
                            )
                            .subscribe((item) => {
                                this.validateReceivedLyrics(item);
                            });
                    } else {
                        this.lyricsService
                            .getLyricsById(id)
                            .subscribe((item) => {
                                this.validateReceivedLyrics(item);
                            });
                    }
                }
            } else {
                if (
                    this.lastStatus.trackName !== this.playerStatus.trackName ||
                    this.firstRequest
                ) {
                    if (id === null) {
                        this.lyricsService
                            .getLyrics(
                                this.playerStatus.artistName,
                                this.playerStatus.trackName
                            )
                            .subscribe((item) => {
                                this.cd.detectChanges();
                                this.validateReceivedLyrics(item);
                            });
                    } else {
                        this.lyricsService
                            .getLyricsById(id)
                            .subscribe((item) => {
                                this.cd.detectChanges();
                                this.validateReceivedLyrics(item);
                            });
                    }
                }
            }
        }
    }

    searchByTerm() {
        const term = this.premium
            ? this.playerStatus.item.name.split("-")
            : this.playerStatus.trackName.split("-");

        this.lyricsService
            .searchForLyrics(
                term.length > 0 ? term[0] : this.playerStatus.item.name
            )
            .subscribe((item) => {
                if (item.response.docs.length > 0) {
                    this.getLyrics(item.response.docs[0].id);
                } else {
                    this.notFound = true;
                }
            });
    }

    validateReceivedLyrics(item: LyricsResult) {
        if (item.type === "song_notfound" || item.type === "notfound") {
            this.searchByTerm();
        } else {
            this.lyrics = item;
            this.firstRequest = false;
            this.notFound = false;
        }
    }
}
