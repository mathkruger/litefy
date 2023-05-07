/// <reference path="../../../../node_modules/@types/spotify-api/index.d.ts" />

import { SpotifyBrowseService } from "./../../services/spotify-browse.service";
import { UserService } from "./../../services/user.service";
import { SpotifyUserService } from "./../../services/spotify-user.service";
import { Component, OnInit } from "@angular/core";
import { forkJoin } from "rxjs";
import { User } from "src/app/models/user";
import { TranslateService } from "@ngx-translate/core";

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
    constructor(
        private serviceUsuario: SpotifyUserService,
        private browseService: SpotifyBrowseService,
        private userService: UserService,
        public translateService: TranslateService
    ) {}

    topArtists: SpotifyApi.PagingObject<SpotifyApi.ArtistObjectFull>;
    topTracks: SpotifyApi.PagingObject<SpotifyApi.TrackObjectFull>;
    featuredPlaylists: SpotifyApi.PagingObject<SpotifyApi.PlaylistObjectSimplified>;
    
    requisicoesCompletas = false;

    activeUser: User;

    range = "medium_term"

    ngOnInit() {
        this.getAllHomeData();
        this.userService.getUser().subscribe((item) => {
            this.activeUser = item;
        });
    }

    getAllHomeData() {
        const requests = [];
        console.log("getAllHomeData");
        requests.push(
            this.serviceUsuario.getUserTopArtists(this.range),
            this.serviceUsuario.getUserTopTracks(this.range),
            this.browseService.getFeaturedPlaylists()
        );

        forkJoin(requests).subscribe((items: any[]) => {
            this.topArtists = items[0].items;
            this.topTracks = items[1].items;
            this.featuredPlaylists = items[2].playlists.items;
            this.requisicoesCompletas = true;
        });
    }

    changeRange(recievedRange: any){
        this.range = recievedRange;
        this.getAllHomeData();
        const shortButt = document.getElementById("short_term");
        const medButt = document.getElementById("medium_term");
        const longButt = document.getElementById("long_term");
        shortButt.style.backgroundColor = "#13aa52";
        medButt.style.backgroundColor = "#13aa52";
        longButt.style.backgroundColor = "#13aa52";
        const clickedButt = document.getElementById(recievedRange);
        clickedButt.style.backgroundColor = "#0e512a";
    }

    
}
