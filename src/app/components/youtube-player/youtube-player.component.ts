import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { YoutubePlayerStatus } from 'src/app/models/youtube-player-status';
import { YoutubePlayerService } from 'src/app/services/youtube/youtube-player.service';

@Component({
  selector: 'app-youtube-player',
  templateUrl: './youtube-player.component.html',
  styleUrls: ['./youtube-player.component.css']
})
export class YoutubePlayerComponent implements OnInit {
  playerStatus: YoutubePlayerStatus;
  player: any;

  constructor(public playerService: YoutubePlayerService, private cd: ChangeDetectorRef) {
    this.playerService.videoContainerId = 'player-video';
  }

  ngOnInit() {
    this.playerService.init();

    this.playerService.getPlayerStatus()
    .subscribe(item => {
      this.playerStatus = item;
      this.cd.detectChanges();
    });

    this.playerService.getPlayerItem()
    .subscribe(item => {
      this.player = item;
    });
  }

  next() {
    this.player.nextVideo();
  }

  previous() {
    this.player.previousVideo();
  }

  pause() {
    this.player.pauseVideo();
  }

  play() {
    this.player.playVideo();
  }
}
