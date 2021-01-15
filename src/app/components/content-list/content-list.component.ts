import { ServiceBase } from './../../services/service.base';
import { SpotifyPlayerService } from './../../services/spotify-player.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {

  constructor(private playerService: SpotifyPlayerService, private service: ServiceBase) { }

  @Input() titulo: string;
  @Input() tipo: 'track' | 'playlist' | 'album';
  @Input() lista: any[];
  @Input() rootItem: string = null;

  device_id: string;

  ngOnInit() {
    this.playerService.getDeviceId().subscribe(deviceId => {
      this.device_id = deviceId;
    });
  }

  getRootItem(item: any) {
    if(this.rootItem) {
      return item[this.rootItem];
    }

    return item;
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

  playPlaylist(item) {
    let uris = [];

    
    this.service.Get<any>(item.tracks.href).subscribe(items => {
      items.items.forEach((track) => {
        uris.push(track.track.uri);
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
