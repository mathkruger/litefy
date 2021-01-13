import { AuthService } from './../../services/auth.service';
import { SpotifyPlayerService } from './../../services/spotify-player.service';
import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

declare var Spotify: any;

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
})
export class PlayerComponent implements OnInit, OnChanges {
  constructor(private auth: AuthService, private playerService: SpotifyPlayerService, private toastr: ToastrService) { }

  player: any;
  playerStatus: any;
  device_id: string;
  next_tracks: any[];
  previous_tracks: any[];

  mostraPlayer: boolean = false;
  seekPlayerInterval: any = null;


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

      this.player.addListener('player_state_changed', state => {
        var someLink = document.querySelector('.click-inicial');
        this.simulateClick(someLink);
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
        // this.getCurrentState();
        this.toastr.success('Tocando');
        this.createSeekInterval();
      })
  }

  pause() {
    this.playerService.pause(this.device_id)
      .subscribe(item => {
        // this.getCurrentState();
        this.toastr.success('Pausado');
        this.clearSeekInterval();
      })
  }

  previous() {
    this.playerService.previous(this.device_id)
      .subscribe(item => {
        // this.getCurrentState();
        this.toastr.success('Faixa anterior');
        this.createSeekInterval();
      })
  }

  next() {
    this.playerService.next(this.device_id)
      .subscribe(item => {
        // this.getCurrentState();
        this.toastr.success('Próxima faixa');
        this.createSeekInterval();
      })
  }

  getCurrentState() {
    this.playerService.getCurrentState()
      .subscribe(item => {
        this.playerStatus = item;
        this.playerService.setPlayerStatus(this.playerStatus);
      })
  }

  simulateClick(elem) {
    // Create our event (with options)
    var evt = new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      view: window
    });
    // If cancelled, don't dispatch our event
    var canceled = !elem.dispatchEvent(evt);
  }

  convertMsToTimeString(ms) {
    let dateObj = new Date(ms);
    let hours = dateObj.getUTCHours();
    let minutes = dateObj.getUTCMinutes();
    let seconds = dateObj.getSeconds();

    let hourString = hours.toString().padStart(2, '0') + ':';
    let timeString =
      minutes.toString().padStart(2, '0') + ':' +
      seconds.toString().padStart(2, '0');

    return hourString != '00:' ? hourString + timeString : timeString;
  }

  createSeekInterval() {
    this.seekPlayerInterval = setInterval(() => {
      this.getCurrentState();
    }, 1000);
  }

  clearSeekInterval() {
    clearInterval(this.seekPlayerInterval);
  }
  
  seekToPosition(ms: number) {
    this.playerService.seekToPosition(this.device_id, ms)
    .subscribe(item => {
      this.getCurrentState();
    });
  }
}
