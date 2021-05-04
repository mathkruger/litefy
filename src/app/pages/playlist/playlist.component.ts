/// <reference path="../../../../node_modules/@types/spotify-api/index.d.ts" />

import { ActivatedRoute } from '@angular/router';
import { SpotifyPlaylistService } from './../../services/spotify-playlist.service';
import { Component, Injector, OnInit } from '@angular/core';
import { SettingsBase } from 'src/app/models/base/settings-base';
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent extends SettingsBase implements OnInit {

  constructor(private playlistService: SpotifyPlaylistService, private activatedRoute: ActivatedRoute, injector: Injector, public translateService: TranslateService,) {
    super(injector);
  }

  playlist: SpotifyApi.SinglePlaylistResponse;
  id: string;

  ngOnInit() {
    this.activatedRoute.params.subscribe(item => {
      this.id = item.id;

      this.playlistService.getPlaylist(this.id)
      .subscribe(playlist => {
        this.playlist = playlist;
      });
    });

    super.init();
  }

}
