import { AuthService } from './../../services/auth.service';
import { SpotifyPlayerService } from './../../services/spotify-player.service';
import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit } from '@angular/core';

declare var Spotify: any;

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
})
export class PlayerComponent implements OnInit, OnChanges {
  constructor(private auth: AuthService, private playerService: SpotifyPlayerService) { }

  player: any;
  playerStatus: any;
  device_id: string;
  next_tracks: any[];
  previous_tracks: any[];

  mostraPlayer: boolean = false;


  ngOnInit() {
    this.initPlayer();
  }

  ngOnChanges() {
    this.transferirPlayer();
  }

  initPlayer() {
    (<any>window).onSpotifyWebPlaybackSDKReady = () => {
      this.mostraPlayer = true;
      const token = this.auth.getAuth();

      this.player = new Spotify.Player({
        name: 'Litefy Player',
        getOAuthToken: cb => { cb(token); }
      });

      this.player.addListener('ready', ({ device_id }) => {
        this.device_id = device_id;
        this.playerService.setDeviceId(device_id);
        this.transferirPlayer();
      });

      this.player.connect();
    };

    this.playerService.getPlayerStatus().subscribe(item => {
      this.playerStatus = item;
    })
  }

  transferirPlayer() {
    this.playerService.transferPlayback(this.device_id)
      .subscribe((data) => {
        this.playerService.getCurrentState()
          .subscribe(item => {
            this.playerStatus = item;

            this.playerService.add(this.playerStatus.item.uri, this.device_id)
              .subscribe(item => {
                // HACK PRA FUNCIONAR NO ANGULAR
                var someLink = document.querySelector('.click-inicial');
                this.simulateClick(someLink);
              });
          });
      });
  }

  play() {
    this.playerService.play(this.device_id)
      .subscribe(item => {
        this.getCurrentState();
      })
  }

  pause() {
    this.playerService.pause(this.device_id)
      .subscribe(item => {
        this.getCurrentState();
      })
  }

  previous() {
    this.playerService.previous(this.device_id)
      .subscribe(item => {
        this.getCurrentState();
      })
  }

  next() {
    this.playerService.next(this.device_id)
      .subscribe(item => {
        this.getCurrentState();
      })
  }

  getCurrentState() {
    this.playerService.getCurrentState()
      .subscribe(item => {
        this.playerStatus = item;
        this.playerService.setPlayerStatus(this.playerStatus);
      })
  }

  simulateClick (elem) {
    // Create our event (with options)
    var evt = new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      view: window
    });
    // If cancelled, don't dispatch our event
    var canceled = !elem.dispatchEvent(evt);
  };

}
