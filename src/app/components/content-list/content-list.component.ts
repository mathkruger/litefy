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

    @Input() titulo: string;
    @Input() tipo: "track" | "playlist" | "album" | "artist";
    @Input() lista: any[];
    @Input() rootItem: string = null;
    @Input() album: any = null;
    @Input() modoMobile = true;

    device_id: string;
    playerState: any;
    premium = true;

    ngOnInit() {
        this.userService.getUser().subscribe((item) => {
            this.user = item;
            this.premium = this.user.product === "premium";

            if (this.premium) {
                this.playerService.getDeviceId().subscribe((deviceId) => {
                    this.device_id = deviceId;
                });

                this.getPlayerStatus();
            }

            super.init();
        });
    }

    getPlayerStatus() {
        this.playerService.getPlayerStatus().subscribe((item) => {
            this.playerState = item;
        });
    }

    pausar() {
        this.playerService.pause(this.device_id).subscribe();
    }

    getRootItem(item: any) {
        if (this.rootItem) {
            return item[this.rootItem];
        }

        return item;
    }

    abrirArtista(id) {
        if (id != null) {
            this.router.navigate(["/artist/" + id]);
        }
    }

    playTrack(itemSelecionado) {
        if (this.premium) {
            if (
                this.playerState?.item.id ===
                this.getRootItem(itemSelecionado).id
            ) {
                if (!this.playerState?.is_playing) {
                    this.selecionar(this.getRootItem(itemSelecionado).uri);
                } else {
                    this.pausar();
                }
            } else {
                this.selecionar(this.getRootItem(itemSelecionado).uri);
            }
        } else {
            const artist = this.album
                ? this.album.artists[0].name
                : this.getRootItem(itemSelecionado).album.artists[0].name;
            const track = this.getRootItem(itemSelecionado).name;
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

    selecionar(itemSelecionado) {
        this.playerService
            .play(this.device_id, itemSelecionado)
            .subscribe(() => {
                this.playerService.getCurrentState().subscribe((item) => {
                    this.playerService.setPlayerStatus(item);
                });
            });
    }

    add(itemSelecionado) {
        this.playerService
            .add(this.getRootItem(itemSelecionado).uri, this.device_id)
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

    tocarTodas() {
        if (this.premium) {
            this.playerService
                .play(
                    this.device_id,
                    null,
                    this.lista.map((item) => this.getRootItem(item).uri)
                )
                .subscribe(() => {
                    this.playerService.getCurrentState().subscribe((item) => {
                        this.playerService.setPlayerStatus(item);
                    });
                });
        } else {
            this.youtubePlayMultiple(this.lista, true);
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
}
