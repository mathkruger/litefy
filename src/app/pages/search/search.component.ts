import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  resultadosTracks: any[] = [];
  resultadosPlaylists: any[] = [];
  resultadosAlbums: any[] = [];
  resultadosArtistas: any[] = [];
  resultadosShows: any[] = [];
  resultadosEpisodes: any[] = [];

  getResults(items) {
    this.resultadosTracks = items.tracks.items;
    this.resultadosPlaylists = items.playlists.items;
    this.resultadosAlbums = items.albums.items;
    this.resultadosArtistas = items.artists.items;
    this.resultadosShows = items.shows.items;
    this.resultadosEpisodes = items.episodes.items;
  }

}
