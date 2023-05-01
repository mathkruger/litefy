import { SpotifyPlayerService } from "./../../services/spotify-player.service";
import {Component, Inject, Injector, Input, OnInit} from "@angular/core";
import { Settings } from "src/app/models/settings";
import { UserService } from "src/app/services/user.service";
import { User } from "src/app/models/user";
import {SpotifyUserService} from "../../services/spotify-user.service";
import {forkJoin, Observable} from "rxjs";
import {SpotifyPlaylistService} from "../../services/spotify-playlist.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
    selector: "app-select-playlist",
    templateUrl: "./select-playlist.component.html",
    styleUrls: ["./select-playlist.component.css"],
})
export class SelectPlaylistComponent implements OnInit {
    constructor(private playerService: SpotifyPlayerService,
                private playlistService: SpotifyPlaylistService,
                private userService: UserService,
                private serviceUserService: SpotifyUserService,
                private dialogRef: MatDialogRef<SelectPlaylistComponent>,
                @Inject(MAT_DIALOG_DATA) data) {
        this.trackId = data.trackId;
    }

    user: User;
    settings: Settings[];

    device_id: string;
    premium = true;
    form: any;
    selectedPlaylist: any;
    userPlaylists: SpotifyApi.PagingObject<SpotifyApi.PlaylistObjectSimplified>;
    trackId: string;

    ngOnInit() {
        this.userService.getUser().subscribe((item) => {
            this.user = item;
            this.premium = this.user?.product === "premium";
            this.getUserPlaylists();

            if (this.premium) {
                this.playerService.getDeviceId().subscribe((deviceId) => {
                    this.device_id = deviceId;
                });
                // this.getPlayerStatus();
            }
        });
    }

    close() {
        this.dialogRef.close();
    }

    getUserPlaylists() {
        const requests = [];

        requests.push(this.serviceUserService.getUserPlaylists());

        forkJoin(requests)
            .subscribe((items: any[]) => {
                this.userPlaylists = items[0].items;
            });
    }

    playlistSelected(playlist: SpotifyApi.PlaylistObjectSimplified) {
        this.playlistService.addTrack(playlist.id, this.trackId);
        this.dialogRef.close();
    }
}
