/// <reference path="../../../../node_modules/@types/spotify-api/index.d.ts" />

import { Component, OnInit } from '@angular/core';
import { forkJoin, ReplaySubject } from 'rxjs';
import { User } from 'src/app/models/user';
import { SpotifyUserService } from 'src/app/services/spotify-user.service';
import { UserService } from 'src/app/services/user.service';
import { SpotifyPlaylistService } from 'src/app/services/spotify-playlist.service';
import { FileUploadService } from 'src/app/file-upload.service';


@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  constructor(private serviceUsuario: SpotifyUserService, private usuario: UserService, private playlistService: SpotifyPlaylistService, private fileUploadService: FileUploadService) { }

  userPlaylists: SpotifyApi.PagingObject<SpotifyApi.PlaylistObjectSimplified>;
  userAlbums: SpotifyApi.PagingObject<SpotifyApi.SavedAlbumObject>;
  userTracks: SpotifyApi.PagingObject<SpotifyApi.SavedTrackObject>;

  usuarioLogado: User;

  shortLink: string = "";
  file: File;
  base64Output : string;
  hello: string = "rando"

  ngOnInit() {
    this.getLoggedUser();
    this.getUserLibrary();
    this.file = null;
    this.base64Output = "";
  }

  getLoggedUser() {
    this.usuario.getUser()
      .subscribe(item => {
        this.usuarioLogado = item;
      });
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



  createPlaylist(name, description, collaborative, publicOrPriv) {
    //console.log("create");

    if (!collaborative) {
      collaborative = false
    }
    if (!publicOrPriv) {
      publicOrPriv = false
    }
    if (publicOrPriv && collaborative) {
      //Public must be false if it is a collaborative playlist
      publicOrPriv = false
    }
    if (name.viewModel && description.viewModel) {
      const createdPlaylist = this.playlistService.createPlaylist(name.viewModel, description.viewModel, collaborative, publicOrPriv)
      createdPlaylist.subscribe(val => console.log(val))
      alert("Your playlist " + name.viewModel + 
            " has been created!");
    //     var id = ""
    //     var bits = this.base64Output
    //     var service = this.playlistService
    //     function updatePlaylistCover() {
    //       service.updatePlaylistCover(id, bits);
    //     }
    //   createdPlaylist.subscribe(val => {
    //     id = val.id;
    //     console.log(id);},
    //     (err) => console.error(err),
    //     () => updatePlaylistCover())
    //  }
     
  }

  // onChange(event) {
  //   this.file = event.target.files[0];
  //   this.convertFile(this.file).subscribe(base64 => {
  //     this.base64Output = base64;
  //   });
  // }
  // convertFile(file : File)  {
  //   const result = new ReplaySubject<string>(1);
  //   const reader = new FileReader();
  //   reader.readAsBinaryString(file);
  //   reader.onload = (event) => result.next(btoa(event.target.result.toString()));
  //   return result;
  // }

// OnClick of button Upload
  // onUpload() {
  //     console.log(this.file);
  //     console.log(this.base64Output);
  //     this.fileUploadService.upload(this.file).subscribe(
  //         (event: any) => {
  //             if (typeof (event) === 'object') {
  //                 // Short link via api response
  //                 this.shortLink = event.link;

  //             }
  //         }
  //     );
  // }

}
}
