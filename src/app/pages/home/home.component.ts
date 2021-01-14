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

  constructor(private serviceUsuario: SpotifyUserService, private usuario: UserService) { }

  userPlaylists: any[] = [];
  userAlbums: any[] = [];
  userTracks: any[] = [];

  usuarioLogado: User;

  ngOnInit() {
    let requests = [];

    requests.push(this.serviceUsuario.getUserPlaylists(), this.serviceUsuario.getUserAlbums(), this.serviceUsuario.getUserTracks());
    this.usuario.getUser()
      .subscribe(item => {
        this.usuarioLogado = item;
      });

    forkJoin(requests)
      .subscribe((items: any[]) => {
        this.userPlaylists = items[0].items;
        this.userAlbums = items[1].items;
        this.userTracks = items[2].items;
      });
  }
}
