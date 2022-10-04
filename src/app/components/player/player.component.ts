import { Router } from "@angular/router";
import { AuthService } from "./../../services/auth.service";
import { SpotifyPlayerService } from "./../../services/spotify-player.service";
import { Component, Injector, Input, OnChanges, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { TranslateService } from "@ngx-translate/core";
import { SettingsBase } from "src/app/models/base/settings-base";

declare var Spotify: any;

@Component({
    selector: "app-player",
    templateUrl: "./player.component.html",
    styleUrls: ["./player.component.css"],
})
export class PlayerComponent extends SettingsBase implements OnInit, OnChanges {
    constructor(
        private auth: AuthService,
        private playerService: SpotifyPlayerService,
        private toastr: ToastrService,
        private router: Router,
        public translate: TranslateService,
        injector: Injector
    ) {
        super(injector);
        this.defaultLanguage = window.localStorage.getItem("languageSelected");
        translate.addLangs(["pt", "en", "es", "he"]);
        translate.setDefaultLang(this.defaultLanguage || "pt");
    }

    defaultLanguage: string;
    player: any;
    playerStatus: any;
    device_id: string;
    next_tracks: any[];
    previous_tracks: any[];

    showPlayer = false;
    showVolume = false;

    progress = 0;
    shuffle = false;
    seekStyle = {};

    trackTitle = "";
    trackAlbum = "";
    trackAuthor = "";
    trackImage = "";
    trackId = "";
    albumId = "";
    artistId = "";


    shufflemodeKey = "shuffle";

    @Input() premium = true;

    ngOnInit() {
        if (this.premium) {
            this.initPlayer();

            this.playerService.getPlayerProgress().subscribe((item) => {
                this.progress = item;
                this.setProgressBar();
            });

            this.translate.onLangChange.subscribe(item => {
                this.defaultLanguage = item.lang;
                this.setProgressBar();
            });

            const shuffleStatusSaved = localStorage.getItem(
                this.shufflemodeKey
            );

            if (shuffleStatusSaved === "true") {
                this.toggleShuffle();
            }

            super.init();
        }
    }

    ngOnChanges() {
        if (this.premium) {
            this.transferPlayer();
        }
    }

    setProgressBar() {
        const progressPercentage =
            (this.progress /
                (this.playerStatus?.item?.duration_ms || 0)) *
            100;
        this.seekStyle = {
            background: `linear-gradient(to ${this.defaultLanguage != 'he' ? 'right' : 'left'}, var(--spt-green) 0%, var(--spt-green) ${progressPercentage}%, #343a40 ${progressPercentage}%, #343a40 100%)`,
        };
    }

    addScript() {
        const script = document.createElement('script')
        script.async = true
        script.src = "https://sdk.scdn.co/spotify-player.js"
        document.head.appendChild(script)
    }

    initPlayer() {
        (<any>window).onSpotifyWebPlaybackSDKReady = () => {
            this.showPlayer = true;
            const token = this.auth.getAuth();

            this.player = new Spotify.Player({
                name: "Litefy Player",
                getOAuthToken: (cb) => {
                    cb(token);
                    this.addScript()
                },
            });

            this.player.addListener("initialization_error", ({ message }) => {
                console.error(message);
            });
            this.player.addListener("authentication_error", ({ message }) => {
                console.error(message);
                this.auth.logout();
                this.router.navigate(["login"]);
            });
            this.player.addListener("account_error", ({ message }) => {
                console.error(message);
            });
            this.player.addListener("playback_error", ({ message }) => {
                console.error(message);
            });

            this.player.addListener("player_state_changed", () => {
                const someLink = document.querySelector(".click-inicial");
                this.simulateClick(someLink);
            });

            this.player.addListener("ready", ({ device_id }) => {
                this.device_id = device_id;
                this.playerService.setDeviceId(device_id);
                this.transferPlayer();
            });

            this.player.connect();
        };

        this.playerService.getPlayerStatus().subscribe((item) => {
            this.playerStatus = item;
        });
    }

    transferPlayer() {
        this.playerService.transferPlayback(this.device_id).subscribe(() => {
            this.playerService.getCurrentState().subscribe((item) => {
                this.playerStatus = item;

                this.playerService
                    .add(this.playerStatus.item.uri, this.device_id)
                    .subscribe(() => {
                        // HACK PRA FUNCIONAR NO ANGULAR
                        const someLink = document.querySelector(
                            ".click-inicial"
                        );
                        this.simulateClick(someLink);
                    });
            });
        });
    }

    play() {
        this.playerService.play(this.device_id).subscribe(() => {
            this.translate.get("PlayingText").subscribe((item) => {
                this.toastr.success(item);
            });
        });
    }

    pause() {
        this.playerService.pause(this.device_id).subscribe(() => {
            this.translate.get("PausedText").subscribe((item) => {
                this.toastr.success(item);
            });
        });
    }

    previous() {
        this.playerService.previous(this.device_id).subscribe(() => {
            this.translate.get("PreviousText").subscribe((item) => {
                this.toastr.success(item);
            });
        });
    }

    next() {
        this.playerService.next(this.device_id).subscribe(() => {
            this.translate.get("NextText").subscribe((item) => {
                this.toastr.success(item);
            });
        });
    }



    getCurrentState() {
        this.playerService.getCurrentState().subscribe((item) => {
            this.playerStatus = item;

            if (this.playerStatus?.item.type == "track") {
                this.trackTitle = this.playerStatus?.item.name;
                this.trackAlbum = this.playerStatus?.item.album.name;
                this.trackAuthor = this.playerStatus?.item.album.artists[0]?.name;
                this.trackImage = this.playerStatus?.item.album.images[2].url;
                this.trackId = this.playerStatus?.item.id;
                this.albumId = 'album/' + this.playerStatus?.item.album.id;
                this.artistId = 'artist/' + this.playerStatus?.item.album.artists[0]?.id;
            } else if (this.playerStatus?.item.type == "episode") {
                this.trackTitle = this.playerStatus?.item.name;
                this.trackAlbum = this.playerStatus?.item.show.name;
                this.trackAuthor = this.playerStatus?.item.show.publisher;;
                this.trackImage = this.playerStatus?.item.images[2].url;
                this.trackId = this.playerStatus?.item.id;
                this.albumId = 'show/' + this.playerStatus?.item.show.id;
                this.artistId = 'show/' + this.playerStatus?.item.show.id;
            } else {
                this.trackTitle = "";
                this.trackAlbum = "";
                this.trackAuthor = "";
                this.trackImage = "";
                this.trackId = "";
                this.albumId = "";
                this.artistId = "";
            }

            this.playerService.setPlayerProgress(this.playerStatus.progress_ms);
            this.playerService.setPlayerStatus(this.playerStatus);
        });
    }

    simulateClick(elem) {
        const click = new MouseEvent("click", {
            bubbles: true,
            cancelable: true,
            view: window,
        });

        elem.click();

        return click;
    }

    convertMsToTimeString(ms) {
        const dateObj = new Date(ms);
        const hours = dateObj.getUTCHours();
        const minutes = dateObj.getUTCMinutes();
        const seconds = dateObj.getSeconds();

        const hourString = hours.toString().padStart(2, "0") + ":";
        const timeString =
            minutes.toString().padStart(2, "0") +
            ":" +
            seconds.toString().padStart(2, "0");

        return hourString !== "00:" ? hourString + timeString : timeString;
    }

    seekToPosition(ms: number) {
        this.playerService.seekToPosition(this.device_id, ms).subscribe(() => {
            this.getCurrentState();
        });
    }

    setVolume(volume: number) {
        this.playerService.setVolume(this.device_id, volume).subscribe(() => {
            this.getCurrentState();
        });
    }

    toggleShuffle() {
        this.shuffle = !this.shuffle;

        this.playerService
            .shuffle(this.shuffle, this.device_id)
            .subscribe(() => {
                localStorage.setItem(this.shufflemodeKey, `${this.shuffle}`);
                const stringTranslate = this.shuffle
                    ? "ShuffleOnText"
                    : "ShuffleOffText";
                this.translate.get(stringTranslate).subscribe((item) => {
                    this.toastr.success(item);
                });
            });
    }
}
