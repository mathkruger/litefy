import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { SpotifyArtistService } from './../../services/spotify-artist.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  constructor(private artistService: SpotifyArtistService, private activatedRoute: ActivatedRoute) { }

  artist: any;
  topTracks: any[] = [];
  related: any[] = [];
  albums: any[] = [];

  id: string;

  ngOnInit() {
    this.activatedRoute.params.subscribe(item => {
      this.id = item.id;
      this.getAllInfoFromArtist();
    });
  }

  getAllInfoFromArtist() {
    let requests = [];

    requests.push(
      this.getArtist(),
      this.getArtistTopTracks(),
      this.getArtistRelated(),
      this.getArtistAlbums(),
    );

    forkJoin(requests)
      .subscribe((items: any[]) => {
        this.artist = items[0];
        this.topTracks = items[1];
        this.related = items[2];
        this.albums = items[3];

        window.scrollTo(0, 0);
      });
  }

  getArtist() {
    return this.artistService.getArtist(this.id);
  }

  getArtistTopTracks() {
    return this.artistService.getArtistTopTracks(this.id);
  }

  getArtistRelated() {
    return this.artistService.getArtistRelated(this.id);
  }

  getArtistAlbums() {
    return this.artistService.getArtistAlbums(this.id);
  }
}
