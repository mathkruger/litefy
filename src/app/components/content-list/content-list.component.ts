import { Router } from "@angular/router";
import { ServiceBase } from "./../../services/service.base";
import { SpotifyPlayerService } from "./../../services/spotify-player.service";
import { Component, Injector, Input, OnInit } from "@angular/core";
import { Settings } from "src/app/models/settings";
import { SettingsBase } from "src/app/models/base/settings-base";
import { YoutubeService } from "src/app/services/youtube/youtube.service";
import { YoutubePlayerService } from "src/app/services/youtube/youtube-player.service";
import { UserService } from "src/app/services/user.service";
import { User } from "src/app/models/user";
import { forkJoin } from "rxjs";
import { YoutubePlayerStatus } from "src/app/models/youtube-player-status";
import { TranslateService } from "@ngx-translate/core";


@Component({
    selector: "app-content-list",
    templateUrl: "./content-list.component.html",
    styleUrls: ["./content-list.component.css"],
})
export class ContentListComponent extends SettingsBase implements OnInit {
    constructor(
        private playerService: SpotifyPlayerService,
        private service: ServiceBase,
        private router: Router,
        private youtubeService: YoutubeService,
        private youtubePlayerService: YoutubePlayerService,
        private userService: UserService,
        public translateService: TranslateService,
        injector: Injector
    ) {
        super(injector);
    }

    user: User;
    settings: Settings[];

    @Input() title: string;
    @Input() type: "track" | "playlist" | "album" | "artist" | "show" | "podcast";
    @Input() list: any[];
    @Input() rootItem: string = null;
    @Input() album: any = null;
    @Input() mobileMode = true;

    device_id: string;
    playerState: any;
    premium = true;
    currentAlbum = "";
    lastItem = 9;

    ngOnInit() {
        this.userService.getUser().subscribe((item) => {
            this.user = item;
            this.premium = this.user?.product === "premium";

            if (this.premium) {
                this.playerService.getDeviceId().subscribe((deviceId) => {
                    this.device_id = deviceId;
                });

                this.getPlayerStatus();
            }

            super.init();
        });
    }

    homeRoute(){
        return this.router.url === "/";
    }

    getPlayerStatus() {
        this.playerService.getPlayerStatus().subscribe((item) => {
            this.playerState = item;
            if (this.playerState?.item.type == "track") {
                this.currentAlbum = this.playerState?.item.album.id
            } else if (this.playerState?.item.type == "episode") {
                this.currentAlbum = this.playerState?.item.show.id
            } else {
                this.currentAlbum = "";
            }
        });
    }

    pause() {
        this.playerService.pause(this.device_id).subscribe();
    }

    getRootItem(item: any) {
        if (this.rootItem) {
            return item[this.rootItem];
        }

        return item;
    }

    openArtist(id) {
        if (id != null) {
            this.router.navigate(["/artist/" + id]);
        }
    }

    playTrack(selectItem) {
        if (this.premium) {
            if (
                this.playerState?.item.id ===
                this.getRootItem(selectItem).id
            ) {
                if (!this.playerState?.is_playing) {
                    this.select(this.getRootItem(selectItem).uri);
                } else {
                    this.pause();
                }
            } else {
                this.select(this.getRootItem(selectItem).uri);
            }
        } else {
            const artist = this.album
                ? this.album.artists[0].name
                : this.getRootItem(selectItem).album.artists[0].name;
            const track = this.getRootItem(selectItem).name;
            this.youtubeService.getVideo(artist, track).subscribe((id) => {
                const aux = new YoutubePlayerStatus();

                aux.artistName = artist;
                aux.trackName = track;

                this.youtubePlayerService.setPlayerStatus(aux);

                this.youtubePlayerService.openOne(id);
                this.youtubePlayerService.play();
            });
        }
    }

    select(selectItem) {
        this.playerService
            .play(this.device_id, selectItem)
            .subscribe(() => {
                this.playerService.getCurrentState().subscribe((item) => {
                    this.playerService.setPlayerStatus(item);
                });
            });
    }

    add(selectItem) {
        this.playerService
            .add(this.getRootItem(selectItem).uri, this.device_id)
            .subscribe(() => {
                this.playerService.getCurrentState().subscribe((item) => {
                    this.playerService.setPlayerStatus(item);
                });
            });
    }

    playAlbum(id) {
        const uris = [];

        this.playerService.getAlbumTracks(id).subscribe((items) => {
            if (this.premium) {
                items.items.forEach((track) => {
                    uris.push(track.uri);
                });

                this.playerService
                    .play(this.device_id, null, uris)
                    .subscribe(() => {
                        this.playerService
                            .getCurrentState()
                            .subscribe((state) => {
                                this.playerService.setPlayerStatus(state);
                            });
                    });
            } else {
                this.youtubePlayMultiple(items.items);
            }
        });
    }

    playShow(id) {
        const uris = [];

        this.playerService.getShowEpisodes(id).subscribe((items) => {
            if (this.premium) {
                items.items.forEach((track) => {
                    uris.push(track.uri);
                });

                this.playerService
                    .play(this.device_id, null, uris)
                    .subscribe(() => {
                        this.playerService
                            .getCurrentState()
                            .subscribe((state) => {
                                this.playerService.setPlayerStatus(state);
                            });
                    });
            } else {
                this.youtubePlayMultiple(items.items);
            }
        });
    }
    playEpisode(selectItem) {
        if (this.premium) {
            if (
                this.playerState?.item.id ===
                this.getRootItem(selectItem).id
            ) {
                if (!this.playerState?.is_playing) {
                    this.select(this.getRootItem(selectItem).uri);
                } else {
                    this.pause();
                }
            } else {
                this.select(this.getRootItem(selectItem).uri);
            }
        } else {
            const artist = this.album
                ? this.album.artists[0].name
                : this.getRootItem(selectItem).album.artists[0].name;
            const track = this.getRootItem(selectItem).name;
            this.youtubeService.getVideo(artist, track).subscribe((id) => {
                const aux = new YoutubePlayerStatus();

                aux.artistName = artist;
                aux.trackName = track;

                this.youtubePlayerService.setPlayerStatus(aux);

                this.youtubePlayerService.openOne(id);
                this.youtubePlayerService.play();
            });
        }
    }

    playPlaylist(item) {
        const uris = [];

        this.service.Get<any>(item.tracks.href).subscribe((items) => {
            if (this.premium) {
                items.items.forEach((track) => {
                    uris.push(track.track.uri);
                });

                this.playerService
                    .play(this.device_id, null, uris)
                    .subscribe(() => {
                        this.playerService
                            .getCurrentState()
                            .subscribe((item) => {
                                this.playerService.setPlayerStatus(item);
                            });
                    });
            } else {
                this.youtubePlayMultiple(items.items, false, true);
            }
        });
    }

    playAll() {
        if (this.premium) {
            this.playerService
                .play(
                    this.device_id,
                    null,
                    this.list.map((item) => this.getRootItem(item).uri)
                )
                .subscribe(() => {
                    this.playerService.getCurrentState().subscribe((item) => {
                        this.playerService.setPlayerStatus(item);
                    });
                });
        } else {
            this.youtubePlayMultiple(this.list, true);
        }
    }

    youtubePlayMultiple(list, useDifferentRoot = false, isPlaylist = false) {
        const reqs = [];
        this.youtubePlayerService.currentPlaylist = [];
        const aux = new YoutubePlayerStatus();

        list.forEach((track) => {
            if (useDifferentRoot) {
                reqs.push(
                    this.youtubeService.getVideo(
                        this.getRootItem(track).artists[0].name,
                        this.getRootItem(track).name
                    )
                );

                aux.artistName = this.getRootItem(track).artists[0].name;
                aux.trackName = this.getRootItem(track).name;
            } else if (isPlaylist) {
                reqs.push(
                    this.youtubeService.getVideo(
                        track.track.artists[0].name,
                        track.track.name
                    )
                );

                aux.artistName = track.track.artists[0].name;
                aux.trackName = track.track.name;
            } else {
                reqs.push(
                    this.youtubeService.getVideo(
                        track.artists[0].name,
                        track.name
                    )
                );

                aux.artistName = track.artists[0].name;
                aux.trackName = track.name;
            }

            this.youtubePlayerService.currentPlaylist.push(
                JSON.parse(JSON.stringify(aux))
            );
        });

        forkJoin(reqs).subscribe((ids) => {
            this.youtubePlayerService.openMultiple(ids as string[]);
        });
    }

    doScroll($event: HTMLInputElement & { target: HTMLInputElement}) {
        const scrollOffset = $event.target.scrollTop;
        const scrollMax = $event.target.scrollHeight - $event.target.clientHeight;

        if (scrollOffset === scrollMax && this.lastItem < (this.list.length - 1)) {
            this.lastItem += 10;
        }
    }
}
