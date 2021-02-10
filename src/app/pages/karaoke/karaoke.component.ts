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
  notFound = true;

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

  getLyrics(id: string = null) {
    if (this.lastStatus && this.playerStatus) {
      if ((this.lastStatus.item.album.artists[0]?.name !== this.playerStatus.item.album.artists[0]?.name
        && this.lastStatus.item.name !== this.playerStatus.item.name) || this.firstRequest) {
        if (id === null) {
          this.lyricsService.getLyrics(this.playerStatus.item.album.artists[0]?.name, this.playerStatus.item.name)
            .subscribe(item => {
              this.validateReceivedLyrics(item);
            });
        } else {
          this.lyricsService.getLyricsById(id)
            .subscribe(item => {
              this.validateReceivedLyrics(item);
            });
        }
      }
    }
  }

  searchByTerm() {
    const term = this.playerStatus.item.name.split('-');

    this.lyricsService.searchForLyrics(term.length > 0 ? term[0] : this.playerStatus.item.name)
      .subscribe(item => {
        if (item.response.docs.length > 0) {
          this.getLyrics(item.response.docs[0].id);
        } else {
          this.notFound = true;
        }
      });
  }

  validateReceivedLyrics(item: LyricsResult) {
    if (item.type === 'song_notfound' || item.type === 'notfound') {
      this.searchByTerm();
    } else {
      this.lyrics = item;
      this.firstRequest = false;
      this.notFound = false;
    }
  }

}
