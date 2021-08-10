import { SpotifyPlayerService } from './../../services/spotify-player.service';
import { ServiceBase } from './../../services/service.base';
import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Component({
  selector: 'app-shearch-box',
  templateUrl: './shearch-box.component.html',
  styleUrls: ['./shearch-box.component.css']
})
export class ShearchBoxComponent {

  constructor(private service: ServiceBase, private playerService: SpotifyPlayerService) { }

  @Input() exportaResultados = true;
  @Output() resultadosBusca = new EventEmitter<any>();

  termo: string;
  apiLink = 'https://api.spotify.com/v1/search?query=$CUSTOM_QUERY$&type=track,album,playlist,artist,show,episode&offset=0&limit=50';

  @HostListener('document:keydown', ['$event'])
  pressEnter(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.buscar();
    }
  }

  buscar() {
    this.service.Get<any>(this.apiLink.replace('$CUSTOM_QUERY$', this.termo))
      .subscribe(items => {
        this.resultadosBusca.emit(items);
      });
  }
}
