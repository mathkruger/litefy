/// <reference path="../../../../node_modules/@types/spotify-api/index.d.ts" />

import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import {SpotifyShowService} from './../../services/spotify-show.service';
import { Component, Injector, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';
import { Settings } from 'src/app/models/settings';
import { SettingsBase } from 'src/app/models/base/settings-base';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent extends SettingsBase implements OnInit {

  constructor(
    private showService: SpotifyShowService,
    private activatedRoute: ActivatedRoute,
    injector: Injector
  ) {
    super(injector);
  }

  show: SpotifyApi.ShowObjectFull;
  showEpisodes: SpotifyApi.EpisodeObjectFull;

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
      this.getShow(),
      this.getShowEpisodes(),
    );

    forkJoin(requests)
      .subscribe((items: any[]) => {
        this.show = items[0];
        this.showEpisodes = items[1].items;

        window.scrollTo(0, 0);
      });
  }

  getShow() {
    return this.showService.getShow(this.id);
  }

  getShowEpisodes() {
    return this.showService.getShowEpisodes(this.id);
  }

}
