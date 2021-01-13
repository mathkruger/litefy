import { SpotifyPlayerService } from './../../services/spotify-player.service';
import { ServiceBase } from './../../services/service.base';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-shearch-box',
  templateUrl: './shearch-box.component.html',
  styleUrls: ['./shearch-box.component.css']
})
export class ShearchBoxComponent implements OnInit {

  constructor(private service: ServiceBase, private playerService: SpotifyPlayerService) { }

  resultadosTracks: any[];
  resultadosPlaylists: any[];
  resultadosAlbums: any[];

  apiLink: string = 'https://api.spotify.com/v1/search?query=$CUSTOM_QUERY$&type=track,album,playlist&offset=0&limit=20';

  device_id: string;

  ngOnInit() {
    this.playerService.getDeviceId().subscribe(deviceId => {
      this.device_id = deviceId;
    });
  }

  buscar(termo: string) {
    this.service.Get<any>(this.apiLink.replace('$CUSTOM_QUERY$', termo))
      .subscribe(items => {
        this.resultadosTracks = items.tracks.items;
        this.resultadosPlaylists = items.playlists.items;
        this.resultadosAlbums = items.albums.items;
      });
  }

  selecionar(itemSelecionado) {
    this.playerService.play(this.device_id, itemSelecionado)
      .subscribe(item => {
        this.playerService.getCurrentState()
          .subscribe(item => {
            this.playerService.setPlayerStatus(item);
          })
      });
  }

  add(itemSelecionado) {
    this.playerService.add(itemSelecionado, this.device_id)
      .subscribe(item => {
        this.playerService.getCurrentState()
          .subscribe(item => {
            this.playerService.setPlayerStatus(item);
          })
      });
  }

  playAlbum(id) {
    let uris = [];
    this.playerService.getAlbumTracks(id).subscribe(items => {
      items.items.forEach((track) => {
        uris.push(track.uri);
      });

      this.playerService.play(this.device_id, null, uris)
        .subscribe(item => {
          this.playerService.getCurrentState()
            .subscribe(item => {
              this.playerService.setPlayerStatus(item);
            })
        });
    });

  }

}
