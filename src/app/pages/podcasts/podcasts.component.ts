/// <reference path="../../../../node_modules/@types/spotify-api/index.d.ts" />

import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { User } from 'src/app/models/user';
import { SpotifyUserService } from 'src/app/services/spotify-user.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-podcasts',
  templateUrl: './podcasts.component.html',
  styleUrls: ['./podcasts.component.css']
})
export class PodcastsComponent implements OnInit {

  constructor(private serviceUsuario: SpotifyUserService, private usuario: UserService) { }

  userShows: SpotifyApi.ShowObjectFull;
  userEpisodes: SpotifyApi.EpisodeObjectFull;

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

  getUserLibrary() {
    const requests = [];

    requests.push(this.serviceUsuario.getUserShows(), this.serviceUsuario.getUserEpisodes());

    forkJoin(requests)
      .subscribe((items: any[]) => {
        this.userShows = items[0].items;
        this.userEpisodes = items[1].items;
      });
  }

}
