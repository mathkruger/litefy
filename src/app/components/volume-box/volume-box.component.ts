import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SpotifyPlayerService } from 'src/app/services/spotify-player.service';

@Component({
  selector: 'app-volume-box',
  templateUrl: './volume-box.component.html',
  styleUrls: ['./volume-box.component.css']
})
export class VolumeBoxComponent implements OnInit {

  constructor(private playerService: SpotifyPlayerService) { }

  showVolume = false;
  volumeKey = 'volume';

  @Input() device_id: string;
  @Input() value: number;
  @Input() disabled = false;

  @Output() change = new EventEmitter<any>();

  ngOnInit() {
    const initialVolume = localStorage.getItem(this.volumeKey);
    if (initialVolume) {
      this.setVolume(parseInt(initialVolume));
    }
  }

  setVolume(volume: number) {
    this.playerService.setVolume(this.device_id, volume)
      .subscribe(() => {
        localStorage.setItem(this.volumeKey, volume.toString());
        this.change.emit();
      });
  }
}
