/// <reference path="../../../../node_modules/@types/spotify-api/index.d.ts" />

import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { SpotifyArtistService } from './../../services/spotify-artist.service';
import { Component, Injector, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';
import { Settings } from 'src/app/models/settings';
import { SettingsBase } from 'src/app/models/base/settings-base';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent extends SettingsBase implements OnInit {

  constructor(
    private artistService: SpotifyArtistService,
    private activatedRoute: ActivatedRoute,
    injector: Injector
  ) {
    super(injector);
  }

  artist: SpotifyApi.SingleArtistResponse;
  topTracks: SpotifyApi.ArtistsTopTracksResponse;
  related: SpotifyApi.ArtistsRelatedArtistsResponse;
  albums: SpotifyApi.ArtistsAlbumsResponse;

  id: string;

  settings: Settings[];

  ngOnInit() {
    this.activatedRoute.params.subscribe(item => {
      this.id = item.id;
      this.getAllInfoFromArtist();
    });

    super.init();
  }

  getAllInfoFromArtist() {
    const requests = [];

    requests.push(
      this.getArtist(),
      this.getArtistTopTracks(),
      this.getArtistRelated(),
      this.getArtistAlbums(),
    );

    forkJoin(requests)
      .subscribe((items: any[]) => {
        this.artist = items[0];
        this.topTracks = items[1];
        this.related = items[2];
        this.albums = items[3];

        window.scrollTo(0, 0);
      });
  }

  getArtist() {
    return this.artistService.getArtist(this.id);
  }

  getArtistTopTracks() {
    return this.artistService.getArtistTopTracks(this.id);
  }

  getArtistRelated() {
    return this.artistService.getArtistRelated(this.id);
  }

  getArtistAlbums() {
    return this.artistService.getArtistAlbums(this.id);
  }
}
