/// <reference path="../../../../node_modules/@types/spotify-api/index.d.ts" />

import { ActivatedRoute } from '@angular/router';
import { SpotifyPlaylistService } from './../../services/spotify-playlist.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

  constructor(private playlistService: SpotifyPlaylistService, private activatedRoute: ActivatedRoute) { }

  playlist: SpotifyApi.SinglePlaylistResponse;
  id: string;

  ngOnInit() {
    this.activatedRoute.params.subscribe(item => {
      this.id = item.id;

      this.playlistService.getPlaylist(this.id)
      .subscribe(item => {
        this.playlist = item;
      });
    });
  }

}
