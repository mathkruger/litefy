import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  resultadosTracks: any[] = [];
  resultadosPlaylists: any[] = [];
  resultadosAlbums: any[] = [];

  ngOnInit() {
  }

  obterResultados(items) {
    this.resultadosTracks = items.tracks.items;
    this.resultadosPlaylists = items.playlists.items;
    this.resultadosAlbums = items.albums.items;
  }

}
