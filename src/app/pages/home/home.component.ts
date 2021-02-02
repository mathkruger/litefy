/// <reference path="../../../../node_modules/@types/spotify-api/index.d.ts" />

import { SpotifyBrowseService } from './../../services/spotify-browse.service';
import { UserService } from './../../services/user.service';
import { SpotifyUserService } from './../../services/spotify-user.service';
import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private serviceUsuario: SpotifyUserService, private usuario: UserService, private browseService: SpotifyBrowseService) { }

  topArtists: SpotifyApi.PagingObject<SpotifyApi.ArtistObjectFull>;
  topTracks: SpotifyApi.PagingObject<SpotifyApi.TrackObjectFull>;

  newAlbuns: SpotifyApi.PagingObject<SpotifyApi.AlbumObjectSimplified>;
  featuredPlaylists: SpotifyApi.PagingObject<SpotifyApi.PlaylistObjectSimplified>;
  requisicoesCompletas = false;


  ngOnInit() {
    this.getAllHomeData();
  }

  getAllHomeData() {
    const requests = [];

    requests.push(
      this.serviceUsuario.getUserTopArtists(),
      this.serviceUsuario.getUserTopTracks(),
      this.browseService.getNewAlbuns(),
      this.browseService.getFeaturedPlaylists()
    );

    forkJoin(requests)
      .subscribe((items: any[]) => {
        this.topArtists = items[0].items;
        this.topTracks = items[1].items;

        this.newAlbuns = items[2].albums.items;
        this.featuredPlaylists = items[3].playlists.items;

        this.requisicoesCompletas = true;
      });
  }
}
