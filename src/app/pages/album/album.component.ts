/// <reference path="../../../../node_modules/@types/spotify-api/index.d.ts" />

import { ActivatedRoute } from '@angular/router';
import { SpotifyAlbumService } from './../../services/spotify-album.service';
import { Component, Injector, OnInit } from '@angular/core';
import { SettingsBase } from 'src/app/models/base/settings-base';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent extends SettingsBase implements OnInit {

  constructor(private albumService: SpotifyAlbumService, private activatedRoute: ActivatedRoute, injector: Injector) {
    super(injector);
  }

  album: SpotifyApi.SingleAlbumResponse;
  id: string;

  ngOnInit() {
    this.activatedRoute.params.subscribe(item => {
      this.id = item.id;
      this.getAlbum(this.id);
    });

    super.init();
  }

  getAlbum(id) {
    this.albumService.getAlbum(id)
      .subscribe(item => this.album = item);
  }

  getDateFormat() {
    switch (this.album.release_date_precision) {
      case 'day':
        return 'dd/MM/yyy';

      case 'month':
        return 'MM/yyyy';

      case 'year':
        return 'yyyy';
    }
  }

}
