import { Component, OnInit } from '@angular/core';
import { YoutubePlayerService } from 'src/app/services/youtube/youtube-player.service';

@Component({
  selector: 'app-youtube-player',
  templateUrl: './youtube-player.component.html',
  styleUrls: ['./youtube-player.component.css']
})
export class YoutubePlayerComponent implements OnInit {

  constructor(private playerService: YoutubePlayerService) { }

  showVideo = true;

  public YT: any;
  public video: any;
  public player: any;
  public reframed: Boolean = false;

  isRestricted = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  isPlaying = false;

  init() {
    if (window['YT']) {
      this.startVideo();
      return;
    }

    var tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window['onYouTubeIframeAPIReady'] = () => this.startVideo();
  }

  ngOnInit() {
    this.init();
  }

  toggleVideo() {
    if (this.showVideo)
      this.showVideo = false;
    else {
      this.showVideo = true;
      setTimeout(() => {
        this.init()
      })
    }
  }

  startVideo() {
    this.reframed = false;
    this.player = new window['YT'].Player('player-video', {
      height: '100',
      width: '100', 
      playerVars: {
        autoplay: 0,
        modestbranding: 0,
        controls: 0,
        disablekb: 1,
        rel: 0,
        showinfo: 0,
        fs: 0,
        playsinline: 1,
        playlist: ''
      },
      events: {
        'onStateChange': this.onPlayerStateChange.bind(this),
        'onError': this.onPlayerError.bind(this),
        'onReady': this.onPlayerReady.bind(this),
      }
    });
  }
  
  onPlayerReady(event) {
    this.playerService.setPlayerItem(this.player);
  }

  onPlayerStateChange(event) {
    switch (event.data) {
      case window['YT'].PlayerState.PLAYING:
        if (this.cleanTime() == 0) {
          console.log('started ' + this.cleanTime());
        } else {
          console.log('playing ' + this.cleanTime())
        };
        this.isPlaying = true;
        break;
      case window['YT'].PlayerState.PAUSED:
        if (this.player.getDuration() - this.player.getCurrentTime() != 0) {
          console.log('paused' + ' @ ' + this.cleanTime());
        };
        this.isPlaying = false;
        break;
      case window['YT'].PlayerState.ENDED:
        console.log('ended ');
        this.isPlaying = false;
        break;
    };
  };

  cleanTime() {
    return Math.round(this.player.getCurrentTime())
  };

  onPlayerError(event) {
    switch (event.data) {
      case 2:
        console.log('' + this.video)
        break;
      case 100:
        break;
      case 101 || 150:
        break;
    };
  };

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
