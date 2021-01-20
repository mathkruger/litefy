import { SpotifyBrowseService } from './../../services/spotify-browse.service';
import { User } from './../../models/user';
import { UserService } from './../../services/user.service';
import { SpotifyUserService } from './../../services/spotify-user.service';
import { ServiceBase } from './../../services/service.base';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private serviceUsuario: SpotifyUserService, private usuario: UserService, private browseService: SpotifyBrowseService) { }

  topArtists: any[] = [];
  topTracks: any[] = [];

  newAlbuns: any[] = [];
  featuredPlaylists: any[] = [];

  featuredMessage: string;

  requisicoesCompletas = false;


  ngOnInit() {
    this.getAllHomeData();
  }

  getAllHomeData() {
    let requests = [];

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
        this.featuredMessage = items[3].message;

        this.requisicoesCompletas = true;
      });
  }
}
