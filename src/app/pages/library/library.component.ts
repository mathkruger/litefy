/// <reference path="../../../../node_modules/@types/spotify-api/index.d.ts" />

import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { User } from '@models/user';
import { SpotifyUserService } from '@services/spotify-user.service';
import { UserService } from '@services/user.service';
import { SpotifyPlaylistService } from '@services/spotify-playlist.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  constructor(private serviceUsuario: SpotifyUserService,
              private usuario: UserService,
              private playlistService: SpotifyPlaylistService,
              private router: Router
  ) { }

  userPlaylists: SpotifyApi.PagingObject<SpotifyApi.PlaylistObjectSimplified>;
  userAlbums: SpotifyApi.PagingObject<SpotifyApi.SavedAlbumObject>;
  userTracks: SpotifyApi.PagingObject<SpotifyApi.SavedTrackObject>;

  usuarioLogado: User;

  ngOnInit() {
    this.getLoggedUser();
    this.getUserLibrary();
  }

  getLoggedUser() {
    this.usuario.getUser()
      .subscribe(item => {
        this.usuarioLogado = item;
      });
  }


  userActiveTabCreatePlaylist() {
      return this.router.url === "/create_playlist";
  }

  getUserLibrary() {
    const requests = [];

    requests.push(this.serviceUsuario.getUserPlaylists(), this.serviceUsuario.getUserAlbums(), this.serviceUsuario.getUserTracks());

    forkJoin(requests)
      .subscribe((items: any[]) => {
        this.userPlaylists = items[0].items;
        this.userAlbums = items[1].items;
        this.userTracks = items[2].items;
      });
  }

}
