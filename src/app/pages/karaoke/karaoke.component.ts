import { LyricsResult } from './../../models/lyrics-result';
import { LyricsService } from './../../services/lyrics.service';
import { SpotifyPlayerService } from './../../services/spotify-player.service';
import { Component, OnInit } from '@angular/core';
import { last } from 'rxjs/operators';

@Component({
  selector: 'app-karaoke',
  templateUrl: './karaoke.component.html',
  styleUrls: ['./karaoke.component.css']
})
export class KaraokeComponent implements OnInit {

  constructor(private playerService: SpotifyPlayerService, private lyricsService: LyricsService) { }

  lastStatus: any;
  playerStatus: any;
  lyrics: LyricsResult;

  firstRequest = true;

  ngOnInit() {
    this.playerService.getPlayerStatus()
      .subscribe(item => {
        if (item !== undefined) {
          this.lastStatus = this.playerStatus ? JSON.parse(JSON.stringify(this.playerStatus)) : item;
          this.playerStatus = item;
          this.getLyrics();
        }
      });
  }

  getLyrics() {
    if (this.lastStatus && this.playerStatus) {
      if ((this.lastStatus.item.album.artists[0]?.name !== this.playerStatus.item.album.artists[0]?.name
            && this.lastStatus.item.name !== this.playerStatus.item.name) || this.firstRequest) {
        this.lyricsService.getLyrics(this.playerStatus.item.album.artists[0]?.name, this.playerStatus.item.name)
          .subscribe(item => {
            this.lyrics = item;
            this.firstRequest = false;
          });
      }
    }
  }

}
