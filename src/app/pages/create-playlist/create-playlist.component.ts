import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { User } from 'src/app/models/user';
import { SpotifyUserService } from 'src/app/services/spotify-user.service';
import { UserService } from 'src/app/services/user.service';
import { SpotifyPlaylistService } from 'src/app/services/spotify-playlist.service';
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
    selector: 'app-create-playlist',
    templateUrl: './create-playlist.component.html',
    styleUrls: ['./create-playlist.component.css']
})
export class CreatePlaylistComponent implements OnInit {
    constructor(
        private spotifyUserService: SpotifyUserService,
        private userService: UserService,
        private playlistService: SpotifyPlaylistService,
        private router: Router
    ) { }

    userPlaylists: SpotifyApi.PagingObject<SpotifyApi.PlaylistObjectSimplified>;
    userAlbums: SpotifyApi.PagingObject<SpotifyApi.SavedAlbumObject>;
    userTracks: SpotifyApi.PagingObject<SpotifyApi.SavedTrackObject>;

    loggedUser: User;

    playlistForm = new FormGroup({
        name: new FormControl(''),
        description: new FormControl(''),
        collaborative: new FormControl(''),
        public: new FormControl(''),
    });

    ngOnInit() {
        this.getLoggedUser();
        this.getUserLibrary();
    }

    getLoggedUser() {
        this.userService.getUser()
            .subscribe(item => {
                this.loggedUser = item;
            });
    }

    createPlaylist() {
        const name = this.playlistForm.value.name;
        const description = this.playlistForm.value.description;
        let collaborative: boolean;
        let publicOrPrivate: boolean;
        if ((this.playlistForm.value.collaborative === "") || (this.playlistForm.value.collaborative === false)) {
            collaborative = false;
        } else {
            collaborative = true;
        }
        if ((this.playlistForm.value.public === "") || (this.playlistForm.value.public === false)) {
            publicOrPrivate = false;
        } else {
            publicOrPrivate = true;
        }

        if (publicOrPrivate && collaborative) {
            // Public must be false if it is a collaborative playlist
            publicOrPrivate = false;
        }
        if (name && description) {
            const createdPlaylist = this.playlistService.createPlaylist(
                name,
                description,
                collaborative,
                publicOrPrivate);
            createdPlaylist.subscribe(val => console.log(val));
        }
        this.router.navigate(["/library"]);
    }

    getUserLibrary() {
        const requests = [];

        requests.push(
            this.spotifyUserService.getUserPlaylists(),
            this.spotifyUserService.getUserAlbums(),
            this.spotifyUserService.getUserTracks()
        );

        forkJoin(requests)
            .subscribe((items: any[]) => {
                this.userPlaylists = items[0].items;
                this.userAlbums = items[1].items;
                this.userTracks = items[2].items;
            });
    }
}
