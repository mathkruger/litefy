import { SpotifyArtistService } from './../../services/spotify-artist.service';
import { AppModule } from './../../app.module';
import { waitForAsync, ComponentFixture, inject, TestBed } from '@angular/core/testing';

import { ArtistComponent } from './artist.component';
import { of } from 'rxjs/internal/observable/of';

describe('ArtistComponent', () => {
  let component: ArtistComponent;
  let fixture: ComponentFixture<ArtistComponent>;
  let artistService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ArtistComponent],
      imports: [AppModule]
    })
      .compileComponents();
  }));

  beforeEach(inject([SpotifyArtistService], s => {
    artistService = s;
    fixture = TestBed.createComponent(ArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get all info from artist', () => {
    const responseArtist: SpotifyApi.SingleArtistResponse = {
      'external_urls': {
        'spotify': 'https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y'
      },
      'followers': {
        'href': null,
        'total': 294684
      },
      'genres': ['brazilian metal', 'brazilian power metal', 'brazilian progressive metal', 'latin metal', 'metal', 'neo classical metal', 'power metal', 'progressive metal', 'progressive power metal', 'speed metal', 'symphonic metal'],
      'href': 'https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y',
      'id': '7IAXZaLTb6nkJr8RmVPn5y',
      'images': [{
        'height': 640,
        'url': 'https://i.scdn.co/image/8a4db555cb1c768304fd6bf1a0a8795a3c84d540',
        'width': 640
      }, {
        'height': 320,
        'url': 'https://i.scdn.co/image/d771e2ab1c2abcf51cf16f5acb12d3c34ee1c81f',
        'width': 320
      }, {
        'height': 160,
        'url': 'https://i.scdn.co/image/e8bab2a73294ac559a578a54d90ff165c33faeea',
        'width': 160
      }],
      'name': 'Angra',
      'popularity': 56,
      'type': 'artist',
      'uri': 'spotify:artist:7IAXZaLTb6nkJr8RmVPn5y'
    };
    const responseTracks = {
      'tracks': [{
        'album': {
          'album_type': 'album',
          'artists': [{
            'external_urls': {
              'spotify': 'https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y'
            },
            'href': 'https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y',
            'id': '7IAXZaLTb6nkJr8RmVPn5y',
            'name': 'Angra',
            'type': 'artist',
            'uri': 'spotify:artist:7IAXZaLTb6nkJr8RmVPn5y'
          }],
          'external_urls': {
            'spotify': 'https://open.spotify.com/album/4Ul2fXqMbl2cdIULyOae4l'
          },
          'href': 'https://api.spotify.com/v1/albums/4Ul2fXqMbl2cdIULyOae4l',
          'id': '4Ul2fXqMbl2cdIULyOae4l',
          'images': [{
            'height': 640,
            'url': 'https://i.scdn.co/image/ab67616d0000b273f68a2cf47abe45475d048d09',
            'width': 640
          }, {
            'height': 300,
            'url': 'https://i.scdn.co/image/ab67616d00001e02f68a2cf47abe45475d048d09',
            'width': 300
          }, {
            'height': 64,
            'url': 'https://i.scdn.co/image/ab67616d00004851f68a2cf47abe45475d048d09',
            'width': 64
          }],
          'name': 'Angels Cry / Holy Land',
          'release_date': '1998-01-01',
          'release_date_precision': 'day',
          'total_tracks': 19,
          'type': 'album',
          'uri': 'spotify:album:4Ul2fXqMbl2cdIULyOae4l'
        },
        'artists': [{
          'external_urls': {
            'spotify': 'https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y'
          },
          'href': 'https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y',
          'id': '7IAXZaLTb6nkJr8RmVPn5y',
          'name': 'Angra',
          'type': 'artist',
          'uri': 'spotify:artist:7IAXZaLTb6nkJr8RmVPn5y'
        }],
        'disc_number': 2,
        'duration_ms': 279933,
        'explicit': false,
        'external_ids': {
          'isrc': 'DEA459805710'
        },
        'external_urls': {
          'spotify': 'https://open.spotify.com/track/5xSBa09B7hWV7wzSKA9Bsg'
        },
        'href': 'https://api.spotify.com/v1/tracks/5xSBa09B7hWV7wzSKA9Bsg',
        'id': '5xSBa09B7hWV7wzSKA9Bsg',
        'is_local': false,
        'is_playable': true,
        'name': 'Wuthering Heights',
        'popularity': 51,
        'preview_url': 'https://p.scdn.co/mp3-preview/b5ae5f8d57429650682cb9fe9e748b9918c60f44?cid=d2efaa241b0140e1b3cec365631430a7',
        'track_number': 7,
        'type': 'track',
        'uri': 'spotify:track:5xSBa09B7hWV7wzSKA9Bsg'
      }, {
        'album': {
          'album_type': 'album',
          'artists': [{
            'external_urls': {
              'spotify': 'https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y'
            },
            'href': 'https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y',
            'id': '7IAXZaLTb6nkJr8RmVPn5y',
            'name': 'Angra',
            'type': 'artist',
            'uri': 'spotify:artist:7IAXZaLTb6nkJr8RmVPn5y'
          }],
          'external_urls': {
            'spotify': 'https://open.spotify.com/album/2ruinOPJ9p66TuwYUoOANI'
          },
          'href': 'https://api.spotify.com/v1/albums/2ruinOPJ9p66TuwYUoOANI',
          'id': '2ruinOPJ9p66TuwYUoOANI',
          'images': [{
            'height': 640,
            'url': 'https://i.scdn.co/image/ab67616d0000b273a3c4dfe506ff3c5728363e2c',
            'width': 640
          }, {
            'height': 300,
            'url': 'https://i.scdn.co/image/ab67616d00001e02a3c4dfe506ff3c5728363e2c',
            'width': 300
          }, {
            'height': 64,
            'url': 'https://i.scdn.co/image/ab67616d00004851a3c4dfe506ff3c5728363e2c',
            'width': 64
          }],
          'name': 'Rebirth',
          'release_date': '2001',
          'release_date_precision': 'year',
          'total_tracks': 10,
          'type': 'album',
          'uri': 'spotify:album:2ruinOPJ9p66TuwYUoOANI'
        },
        'artists': [{
          'external_urls': {
            'spotify': 'https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y'
          },
          'href': 'https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y',
          'id': '7IAXZaLTb6nkJr8RmVPn5y',
          'name': 'Angra',
          'type': 'artist',
          'uri': 'spotify:artist:7IAXZaLTb6nkJr8RmVPn5y'
        }],
        'disc_number': 1,
        'duration_ms': 317573,
        'explicit': false,
        'external_ids': {
          'isrc': 'BRBRI0500517'
        },
        'external_urls': {
          'spotify': 'https://open.spotify.com/track/1hEVuE88R6SC3Q8ogis00B'
        },
        'href': 'https://api.spotify.com/v1/tracks/1hEVuE88R6SC3Q8ogis00B',
        'id': '1hEVuE88R6SC3Q8ogis00B',
        'is_local': false,
        'is_playable': true,
        'name': 'Rebirth',
        'popularity': 51,
        'preview_url': 'https://p.scdn.co/mp3-preview/0033f0a0fa46cb6c59bc063ad0914c97aae02e82?cid=d2efaa241b0140e1b3cec365631430a7',
        'track_number': 7,
        'type': 'track',
        'uri': 'spotify:track:1hEVuE88R6SC3Q8ogis00B'
      }, {
        'album': {
          'album_type': 'album',
          'artists': [{
            'external_urls': {
              'spotify': 'https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y'
            },
            'href': 'https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y',
            'id': '7IAXZaLTb6nkJr8RmVPn5y',
            'name': 'Angra',
            'type': 'artist',
            'uri': 'spotify:artist:7IAXZaLTb6nkJr8RmVPn5y'
          }],
          'external_urls': {
            'spotify': 'https://open.spotify.com/album/4Ul2fXqMbl2cdIULyOae4l'
          },
          'href': 'https://api.spotify.com/v1/albums/4Ul2fXqMbl2cdIULyOae4l',
          'id': '4Ul2fXqMbl2cdIULyOae4l',
          'images': [{
            'height': 640,
            'url': 'https://i.scdn.co/image/ab67616d0000b273f68a2cf47abe45475d048d09',
            'width': 640
          }, {
            'height': 300,
            'url': 'https://i.scdn.co/image/ab67616d00001e02f68a2cf47abe45475d048d09',
            'width': 300
          }, {
            'height': 64,
            'url': 'https://i.scdn.co/image/ab67616d00004851f68a2cf47abe45475d048d09',
            'width': 64
          }],
          'name': 'Angels Cry / Holy Land',
          'release_date': '1998-01-01',
          'release_date_precision': 'day',
          'total_tracks': 19,
          'type': 'album',
          'uri': 'spotify:album:4Ul2fXqMbl2cdIULyOae4l'
        },
        'artists': [{
          'external_urls': {
            'spotify': 'https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y'
          },
          'href': 'https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y',
          'id': '7IAXZaLTb6nkJr8RmVPn5y',
          'name': 'Angra',
          'type': 'artist',
          'uri': 'spotify:artist:7IAXZaLTb6nkJr8RmVPn5y'
        }],
        'disc_number': 2,
        'duration_ms': 305720,
        'explicit': false,
        'external_ids': {
          'isrc': 'DEA459805660'
        },
        'external_urls': {
          'spotify': 'https://open.spotify.com/track/5LeELq5JsClPraPpxk0Pz9'
        },
        'href': 'https://api.spotify.com/v1/tracks/5LeELq5JsClPraPpxk0Pz9',
        'id': '5LeELq5JsClPraPpxk0Pz9',
        'is_local': false,
        'is_playable': true,
        'name': 'Carry On',
        'popularity': 49,
        'preview_url': 'https://p.scdn.co/mp3-preview/3f88e34efd3fe5e5b0d18b498bce29e66eae5185?cid=d2efaa241b0140e1b3cec365631430a7',
        'track_number': 2,
        'type': 'track',
        'uri': 'spotify:track:5LeELq5JsClPraPpxk0Pz9'
      }, {
        'album': {
          'album_type': 'album',
          'artists': [{
            'external_urls': {
              'spotify': 'https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y'
            },
            'href': 'https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y',
            'id': '7IAXZaLTb6nkJr8RmVPn5y',
            'name': 'Angra',
            'type': 'artist',
            'uri': 'spotify:artist:7IAXZaLTb6nkJr8RmVPn5y'
          }],
          'external_urls': {
            'spotify': 'https://open.spotify.com/album/2ruinOPJ9p66TuwYUoOANI'
          },
          'href': 'https://api.spotify.com/v1/albums/2ruinOPJ9p66TuwYUoOANI',
          'id': '2ruinOPJ9p66TuwYUoOANI',
          'images': [{
            'height': 640,
            'url': 'https://i.scdn.co/image/ab67616d0000b273a3c4dfe506ff3c5728363e2c',
            'width': 640
          }, {
            'height': 300,
            'url': 'https://i.scdn.co/image/ab67616d00001e02a3c4dfe506ff3c5728363e2c',
            'width': 300
          }, {
            'height': 64,
            'url': 'https://i.scdn.co/image/ab67616d00004851a3c4dfe506ff3c5728363e2c',
            'width': 64
          }],
          'name': 'Rebirth',
          'release_date': '2001',
          'release_date_precision': 'year',
          'total_tracks': 10,
          'type': 'album',
          'uri': 'spotify:album:2ruinOPJ9p66TuwYUoOANI'
        },
        'artists': [{
          'external_urls': {
            'spotify': 'https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y'
          },
          'href': 'https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y',
          'id': '7IAXZaLTb6nkJr8RmVPn5y',
          'name': 'Angra',
          'type': 'artist',
          'uri': 'spotify:artist:7IAXZaLTb6nkJr8RmVPn5y'
        }],
        'disc_number': 1,
        'duration_ms': 292120,
        'explicit': false,
        'external_ids': {
          'isrc': 'BRBRI0500390'
        },
        'external_urls': {
          'spotify': 'https://open.spotify.com/track/4hDYYEsCDLRlcBO8TbL8TK'
        },
        'href': 'https://api.spotify.com/v1/tracks/4hDYYEsCDLRlcBO8TbL8TK',
        'id': '4hDYYEsCDLRlcBO8TbL8TK',
        'is_local': false,
        'is_playable': true,
        'name': 'Nova Era',
        'popularity': 48,
        'preview_url': 'https://p.scdn.co/mp3-preview/655d2653c7115c5f161e054e09f25b437775a275?cid=d2efaa241b0140e1b3cec365631430a7',
        'track_number': 2,
        'type': 'track',
        'uri': 'spotify:track:4hDYYEsCDLRlcBO8TbL8TK'
      }, {
        'album': {
          'album_type': 'album',
          'artists': [{
            'external_urls': {
              'spotify': 'https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y'
            },
            'href': 'https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y',
            'id': '7IAXZaLTb6nkJr8RmVPn5y',
            'name': 'Angra',
            'type': 'artist',
            'uri': 'spotify:artist:7IAXZaLTb6nkJr8RmVPn5y'
          }],
          'external_urls': {
            'spotify': 'https://open.spotify.com/album/7InbifA9jm46xap6mBG2FA'
          },
          'href': 'https://api.spotify.com/v1/albums/7InbifA9jm46xap6mBG2FA',
          'id': '7InbifA9jm46xap6mBG2FA',
          'images': [{
            'height': 640,
            'url': 'https://i.scdn.co/image/ab67616d0000b273a16028b1f038e61aa52772d1',
            'width': 640
          }, {
            'height': 300,
            'url': 'https://i.scdn.co/image/ab67616d00001e02a16028b1f038e61aa52772d1',
            'width': 300
          }, {
            'height': 64,
            'url': 'https://i.scdn.co/image/ab67616d00004851a16028b1f038e61aa52772d1',
            'width': 64
          }],
          'name': 'Hunters and Prey',
          'release_date': '2002',
          'release_date_precision': 'year',
          'total_tracks': 8,
          'type': 'album',
          'uri': 'spotify:album:7InbifA9jm46xap6mBG2FA'
        },
        'artists': [{
          'external_urls': {
            'spotify': 'https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y'
          },
          'href': 'https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y',
          'id': '7IAXZaLTb6nkJr8RmVPn5y',
          'name': 'Angra',
          'type': 'artist',
          'uri': 'spotify:artist:7IAXZaLTb6nkJr8RmVPn5y'
        }],
        'disc_number': 1,
        'duration_ms': 246053,
        'explicit': false,
        'external_ids': {
          'isrc': 'BRBRI0500424'
        },
        'external_urls': {
          'spotify': 'https://open.spotify.com/track/4m2HvlrZ1kKsgFpcLh5h0V'
        },
        'href': 'https://api.spotify.com/v1/tracks/4m2HvlrZ1kKsgFpcLh5h0V',
        'id': '4m2HvlrZ1kKsgFpcLh5h0V',
        'is_local': false,
        'is_playable': true,
        'name': 'Bleeding Heart',
        'popularity': 48,
        'preview_url': 'https://p.scdn.co/mp3-preview/75661297cd6d30d919d378084e59b4f9e8de632f?cid=d2efaa241b0140e1b3cec365631430a7',
        'track_number': 2,
        'type': 'track',
        'uri': 'spotify:track:4m2HvlrZ1kKsgFpcLh5h0V'
      }, {
        'album': {
          'album_type': 'album',
          'artists': [{
            'external_urls': {
              'spotify': 'https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y'
            },
            'href': 'https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y',
            'id': '7IAXZaLTb6nkJr8RmVPn5y',
            'name': 'Angra',
            'type': 'artist',
            'uri': 'spotify:artist:7IAXZaLTb6nkJr8RmVPn5y'
          }],
          'external_urls': {
            'spotify': 'https://open.spotify.com/album/2ruinOPJ9p66TuwYUoOANI'
          },
          'href': 'https://api.spotify.com/v1/albums/2ruinOPJ9p66TuwYUoOANI',
          'id': '2ruinOPJ9p66TuwYUoOANI',
          'images': [{
            'height': 640,
            'url': 'https://i.scdn.co/image/ab67616d0000b273a3c4dfe506ff3c5728363e2c',
            'width': 640
          }, {
            'height': 300,
            'url': 'https://i.scdn.co/image/ab67616d00001e02a3c4dfe506ff3c5728363e2c',
            'width': 300
          }, {
            'height': 64,
            'url': 'https://i.scdn.co/image/ab67616d00004851a3c4dfe506ff3c5728363e2c',
            'width': 64
          }],
          'name': 'Rebirth',
          'release_date': '2001',
          'release_date_precision': 'year',
          'total_tracks': 10,
          'type': 'album',
          'uri': 'spotify:album:2ruinOPJ9p66TuwYUoOANI'
        },
        'artists': [{
          'external_urls': {
            'spotify': 'https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y'
          },
          'href': 'https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y',
          'id': '7IAXZaLTb6nkJr8RmVPn5y',
          'name': 'Angra',
          'type': 'artist',
          'uri': 'spotify:artist:7IAXZaLTb6nkJr8RmVPn5y'
        }],
        'disc_number': 1,
        'duration_ms': 279346,
        'explicit': false,
        'external_ids': {
          'isrc': 'BRBRI0500393'
        },
        'external_urls': {
          'spotify': 'https://open.spotify.com/track/7cNyONpVADZVrW9xe3qq4z'
        },
        'href': 'https://api.spotify.com/v1/tracks/7cNyONpVADZVrW9xe3qq4z',
        'id': '7cNyONpVADZVrW9xe3qq4z',
        'is_local': false,
        'is_playable': true,
        'name': 'Heroes of Sand',
        'popularity': 46,
        'preview_url': 'https://p.scdn.co/mp3-preview/0dfa57cbc6c7ea5de30f6653d514bbecbdc4099c?cid=d2efaa241b0140e1b3cec365631430a7',
        'track_number': 5,
        'type': 'track',
        'uri': 'spotify:track:7cNyONpVADZVrW9xe3qq4z'
      }, {
        'album': {
          'album_type': 'album',
          'artists': [{
            'external_urls': {
              'spotify': 'https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y'
            },
            'href': 'https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y',
            'id': '7IAXZaLTb6nkJr8RmVPn5y',
            'name': 'Angra',
            'type': 'artist',
            'uri': 'spotify:artist:7IAXZaLTb6nkJr8RmVPn5y'
          }],
          'external_urls': {
            'spotify': 'https://open.spotify.com/album/2J1e7x33Aejx7KFmVbgoGW'
          },
          'href': 'https://api.spotify.com/v1/albums/2J1e7x33Aejx7KFmVbgoGW',
          'id': '2J1e7x33Aejx7KFmVbgoGW',
          'images': [{
            'height': 640,
            'url': 'https://i.scdn.co/image/ab67616d0000b273951115ee4a64529ba1d49787',
            'width': 640
          }, {
            'height': 300,
            'url': 'https://i.scdn.co/image/ab67616d00001e02951115ee4a64529ba1d49787',
            'width': 300
          }, {
            'height': 64,
            'url': 'https://i.scdn.co/image/ab67616d00004851951115ee4a64529ba1d49787',
            'width': 64
          }],
          'name': 'Temple of Shadows',
          'release_date': '2004-11-15',
          'release_date_precision': 'day',
          'total_tracks': 13,
          'type': 'album',
          'uri': 'spotify:album:2J1e7x33Aejx7KFmVbgoGW'
        },
        'artists': [{
          'external_urls': {
            'spotify': 'https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y'
          },
          'href': 'https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y',
          'id': '7IAXZaLTb6nkJr8RmVPn5y',
          'name': 'Angra',
          'type': 'artist',
          'uri': 'spotify:artist:7IAXZaLTb6nkJr8RmVPn5y'
        }],
        'disc_number': 1,
        'duration_ms': 315440,
        'explicit': false,
        'external_ids': {
          'isrc': 'BRBRI0500415'
        },
        'external_urls': {
          'spotify': 'https://open.spotify.com/track/02fRcwuJ1JGrthFULV03th'
        },
        'href': 'https://api.spotify.com/v1/tracks/02fRcwuJ1JGrthFULV03th',
        'id': '02fRcwuJ1JGrthFULV03th',
        'is_local': false,
        'is_playable': true,
        'name': 'The Temple of Hate',
        'popularity': 45,
        'preview_url': 'https://p.scdn.co/mp3-preview/1919823ea2881f80cb013de208bc1006d9a13a20?cid=d2efaa241b0140e1b3cec365631430a7',
        'track_number': 6,
        'type': 'track',
        'uri': 'spotify:track:02fRcwuJ1JGrthFULV03th'
      }, {
        'album': {
          'album_type': 'album',
          'artists': [{
            'external_urls': {
              'spotify': 'https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y'
            },
            'href': 'https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y',
            'id': '7IAXZaLTb6nkJr8RmVPn5y',
            'name': 'Angra',
            'type': 'artist',
            'uri': 'spotify:artist:7IAXZaLTb6nkJr8RmVPn5y'
          }],
          'external_urls': {
            'spotify': 'https://open.spotify.com/album/2J1e7x33Aejx7KFmVbgoGW'
          },
          'href': 'https://api.spotify.com/v1/albums/2J1e7x33Aejx7KFmVbgoGW',
          'id': '2J1e7x33Aejx7KFmVbgoGW',
          'images': [{
            'height': 640,
            'url': 'https://i.scdn.co/image/ab67616d0000b273951115ee4a64529ba1d49787',
            'width': 640
          }, {
            'height': 300,
            'url': 'https://i.scdn.co/image/ab67616d00001e02951115ee4a64529ba1d49787',
            'width': 300
          }, {
            'height': 64,
            'url': 'https://i.scdn.co/image/ab67616d00004851951115ee4a64529ba1d49787',
            'width': 64
          }],
          'name': 'Temple of Shadows',
          'release_date': '2004-11-15',
          'release_date_precision': 'day',
          'total_tracks': 13,
          'type': 'album',
          'uri': 'spotify:album:2J1e7x33Aejx7KFmVbgoGW'
        },
        'artists': [{
          'external_urls': {
            'spotify': 'https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y'
          },
          'href': 'https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y',
          'id': '7IAXZaLTb6nkJr8RmVPn5y',
          'name': 'Angra',
          'type': 'artist',
          'uri': 'spotify:artist:7IAXZaLTb6nkJr8RmVPn5y'
        }],
        'disc_number': 1,
        'duration_ms': 267373,
        'explicit': false,
        'external_ids': {
          'isrc': 'BRBRI0500411'
        },
        'external_urls': {
          'spotify': 'https://open.spotify.com/track/4I9j55n6CXUTfcV6RfcX5A'
        },
        'href': 'https://api.spotify.com/v1/tracks/4I9j55n6CXUTfcV6RfcX5A',
        'id': '4I9j55n6CXUTfcV6RfcX5A',
        'is_local': false,
        'is_playable': true,
        'name': 'Spread Your Fire',
        'popularity': 44,
        'preview_url': 'https://p.scdn.co/mp3-preview/8a62fade1987d9d469a9230464a307f80e5943ee?cid=d2efaa241b0140e1b3cec365631430a7',
        'track_number': 2,
        'type': 'track',
        'uri': 'spotify:track:4I9j55n6CXUTfcV6RfcX5A'
      }, {
        'album': {
          'album_type': 'album',
          'artists': [{
            'external_urls': {
              'spotify': 'https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y'
            },
            'href': 'https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y',
            'id': '7IAXZaLTb6nkJr8RmVPn5y',
            'name': 'Angra',
            'type': 'artist',
            'uri': 'spotify:artist:7IAXZaLTb6nkJr8RmVPn5y'
          }],
          'external_urls': {
            'spotify': 'https://open.spotify.com/album/2ruinOPJ9p66TuwYUoOANI'
          },
          'href': 'https://api.spotify.com/v1/albums/2ruinOPJ9p66TuwYUoOANI',
          'id': '2ruinOPJ9p66TuwYUoOANI',
          'images': [{
            'height': 640,
            'url': 'https://i.scdn.co/image/ab67616d0000b273a3c4dfe506ff3c5728363e2c',
            'width': 640
          }, {
            'height': 300,
            'url': 'https://i.scdn.co/image/ab67616d00001e02a3c4dfe506ff3c5728363e2c',
            'width': 300
          }, {
            'height': 64,
            'url': 'https://i.scdn.co/image/ab67616d00004851a3c4dfe506ff3c5728363e2c',
            'width': 64
          }],
          'name': 'Rebirth',
          'release_date': '2001',
          'release_date_precision': 'year',
          'total_tracks': 10,
          'type': 'album',
          'uri': 'spotify:album:2ruinOPJ9p66TuwYUoOANI'
        },
        'artists': [{
          'external_urls': {
            'spotify': 'https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y'
          },
          'href': 'https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y',
          'id': '7IAXZaLTb6nkJr8RmVPn5y',
          'name': 'Angra',
          'type': 'artist',
          'uri': 'spotify:artist:7IAXZaLTb6nkJr8RmVPn5y'
        }],
        'disc_number': 1,
        'duration_ms': 367826,
        'explicit': false,
        'external_ids': {
          'isrc': 'BRBRI0500391'
        },
        'external_urls': {
          'spotify': 'https://open.spotify.com/track/3w1E8naCvkSDjSOEVpAo0X'
        },
        'href': 'https://api.spotify.com/v1/tracks/3w1E8naCvkSDjSOEVpAo0X',
        'id': '3w1E8naCvkSDjSOEVpAo0X',
        'is_local': false,
        'is_playable': true,
        'name': 'Acid Rain',
        'popularity': 42,
        'preview_url': 'https://p.scdn.co/mp3-preview/fb054f08a7ff62669167c570889e53c1b46bc60e?cid=d2efaa241b0140e1b3cec365631430a7',
        'track_number': 4,
        'type': 'track',
        'uri': 'spotify:track:3w1E8naCvkSDjSOEVpAo0X'
      }, {
        'album': {
          'album_type': 'album',
          'artists': [{
            'external_urls': {
              'spotify': 'https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y'
            },
            'href': 'https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y',
            'id': '7IAXZaLTb6nkJr8RmVPn5y',
            'name': 'Angra',
            'type': 'artist',
            'uri': 'spotify:artist:7IAXZaLTb6nkJr8RmVPn5y'
          }],
          'external_urls': {
            'spotify': 'https://open.spotify.com/album/2J1e7x33Aejx7KFmVbgoGW'
          },
          'href': 'https://api.spotify.com/v1/albums/2J1e7x33Aejx7KFmVbgoGW',
          'id': '2J1e7x33Aejx7KFmVbgoGW',
          'images': [{
            'height': 640,
            'url': 'https://i.scdn.co/image/ab67616d0000b273951115ee4a64529ba1d49787',
            'width': 640
          }, {
            'height': 300,
            'url': 'https://i.scdn.co/image/ab67616d00001e02951115ee4a64529ba1d49787',
            'width': 300
          }, {
            'height': 64,
            'url': 'https://i.scdn.co/image/ab67616d00004851951115ee4a64529ba1d49787',
            'width': 64
          }],
          'name': 'Temple of Shadows',
          'release_date': '2004-11-15',
          'release_date_precision': 'day',
          'total_tracks': 13,
          'type': 'album',
          'uri': 'spotify:album:2J1e7x33Aejx7KFmVbgoGW'
        },
        'artists': [{
          'external_urls': {
            'spotify': 'https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y'
          },
          'href': 'https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y',
          'id': '7IAXZaLTb6nkJr8RmVPn5y',
          'name': 'Angra',
          'type': 'artist',
          'uri': 'spotify:artist:7IAXZaLTb6nkJr8RmVPn5y'
        }],
        'disc_number': 1,
        'duration_ms': 241573,
        'explicit': false,
        'external_ids': {
          'isrc': 'BRBRI0500414'
        },
        'external_urls': {
          'spotify': 'https://open.spotify.com/track/5DrkawyIGaFlnWqDqZwuEe'
        },
        'href': 'https://api.spotify.com/v1/tracks/5DrkawyIGaFlnWqDqZwuEe',
        'id': '5DrkawyIGaFlnWqDqZwuEe',
        'is_local': false,
        'is_playable': true,
        'name': 'Wishing Well',
        'popularity': 41,
        'preview_url': 'https://p.scdn.co/mp3-preview/e6d3088e53a2f9de67b7a4dfd3ea5abd7acd4b47?cid=d2efaa241b0140e1b3cec365631430a7',
        'track_number': 5,
        'type': 'track',
        'uri': 'spotify:track:5DrkawyIGaFlnWqDqZwuEe'
      }]
    };
    const responseRelated = {
      'artists': [{
        'external_urls': {
          'spotify': 'https://open.spotify.com/artist/2THaGrUq7RPnj8Uax9zQ1m'
        },
        'followers': {
          'href': null,
          'total': 86728
        },
        'genres': ['brazilian metal', 'brazilian power metal', 'brazilian progressive metal', 'neo classical metal', 'power metal', 'progressive power metal'],
        'href': 'https://api.spotify.com/v1/artists/2THaGrUq7RPnj8Uax9zQ1m',
        'id': '2THaGrUq7RPnj8Uax9zQ1m',
        'images': [{
          'height': 640,
          'url': 'https://i.scdn.co/image/ab67616d0000b2730be199bbe7ae13e71afa2a5c',
          'width': 640
        }, {
          'height': 300,
          'url': 'https://i.scdn.co/image/ab67616d00001e020be199bbe7ae13e71afa2a5c',
          'width': 300
        }, {
          'height': 64,
          'url': 'https://i.scdn.co/image/ab67616d000048510be199bbe7ae13e71afa2a5c',
          'width': 64
        }],
        'name': 'Shaman',
        'popularity': 44,
        'type': 'artist',
        'uri': 'spotify:artist:2THaGrUq7RPnj8Uax9zQ1m'
      }, {
        'external_urls': {
          'spotify': 'https://open.spotify.com/artist/41zxOMwuASgUJp0c697KDm'
        },
        'followers': {
          'href': null,
          'total': 37860
        },
        'genres': ['brazilian metal', 'brazilian power metal', 'brazilian progressive metal', 'christian power metal',
          'neo classical metal', 'power metal'],
        'href': 'https://api.spotify.com/v1/artists/41zxOMwuASgUJp0c697KDm',
        'id': '41zxOMwuASgUJp0c697KDm',
        'images': [{
          'height': 640,
          'url': 'https://i.scdn.co/image/ab67616d0000b273f68141d8a50a0f994ea091b2',
          'width': 640
        }, {
          'height': 300,
          'url': 'https://i.scdn.co/image/ab67616d00001e02f68141d8a50a0f994ea091b2',
          'width': 300
        }, {
          'height': 64,
          'url': 'https://i.scdn.co/image/ab67616d00004851f68141d8a50a0f994ea091b2',
          'width': 64
        }],
        'name': 'Almah',
        'popularity': 32,
        'type': 'artist',
        'uri': 'spotify:artist:41zxOMwuASgUJp0c697KDm'
      }, {
        'external_urls': {
          'spotify': 'https://open.spotify.com/artist/6ywWIQgZrAOTcmA3XxGIk7'
        },
        'followers': {
          'href': null,
          'total': 26718
        },
        'genres': ['brazilian metal', 'power metal'],
        'href': 'https://api.spotify.com/v1/artists/6ywWIQgZrAOTcmA3XxGIk7',
        'id': '6ywWIQgZrAOTcmA3XxGIk7',
        'images': [{
          'height': 640,
          'url': 'https://i.scdn.co/image/64d996078d1d8435f6ca0195c9826a3e26be598e',
          'width': 640
        }, {
          'height': 320,
          'url': 'https://i.scdn.co/image/16a937dd96ea25d86da90f7dee8c9fa498008f15',
          'width': 320
        }, {
          'height': 160,
          'url': 'https://i.scdn.co/image/a106c5cbd707bc2333ab8eb1eb9142d3c2c956e3',
          'width': 160
        }],
        'name': 'Viper',
        'popularity': 33,
        'type': 'artist',
        'uri': 'spotify:artist:6ywWIQgZrAOTcmA3XxGIk7'
      }, {
        'external_urls': {
          'spotify': 'https://open.spotify.com/artist/1Ih0fEQQsy9EeAJbYEeQRa'
        },
        'followers': {
          'href': null,
          'total': 309446
        },
        'genres': ['german metal', 'german power metal', 'melodic metal', 'metal', 'neo classical metal', 'opera metal', 'power metal', 'symphonic metal'],
        'href': 'https://api.spotify.com/v1/artists/1Ih0fEQQsy9EeAJbYEeQRa',
        'id': '1Ih0fEQQsy9EeAJbYEeQRa',
        'images': [{
          'height': 640,
          'url': 'https://i.scdn.co/image/4fdbba3e73123f7933b8dfa3323e432a25958188',
          'width': 640
        }, {
          'height': 320,
          'url': 'https://i.scdn.co/image/e6a4fed077f4ab7777c45dd1552e9c1355036953',
          'width': 320
        }, {
          'height': 160,
          'url': 'https://i.scdn.co/image/a04ee8f5f03a426aa635466ed619f2a3f93b229b',
          'width': 160
        }],
        'name': 'Avantasia',
        'popularity': 56,
        'type': 'artist',
        'uri': 'spotify:artist:1Ih0fEQQsy9EeAJbYEeQRa'
      }, {
        'external_urls': {
          'spotify': 'https://open.spotify.com/artist/7jxJ25p0pPjk0MStloN6o6'
        },
        'followers': {
          'href': null,
          'total': 494485
        },
        'genres': ['german metal', 'german power metal', 'hard rock', 'melodic metal', 'metal', 'neo classical metal', 'power metal', 'speed metal', 'symphonic metal'],
        'href': 'https://api.spotify.com/v1/artists/7jxJ25p0pPjk0MStloN6o6',
        'id': '7jxJ25p0pPjk0MStloN6o6',
        'images': [{
          'height': 1000,
          'url': 'https://i.scdn.co/image/ab6772690000c46c131ce8946cbe55c7585aa60f',
          'width': 1000
        }, {
          'height': 640,
          'url': 'https://i.scdn.co/image/ab6772690000dd22131ce8946cbe55c7585aa60f',
          'width': 640
        }, {
          'height': 200,
          'url': 'https://i.scdn.co/image/ab6772690000bac3131ce8946cbe55c7585aa60f',
          'width': 200
        }, {
          'height': 64,
          'url': 'https://i.scdn.co/image/ab67726900008f74131ce8946cbe55c7585aa60f',
          'width': 64
        }],
        'name': 'Blind Guardian',
        'popularity': 58,
        'type': 'artist',
        'uri': 'spotify:artist:7jxJ25p0pPjk0MStloN6o6'
      }, {
        'external_urls': {
          'spotify': 'https://open.spotify.com/artist/3AGFqPP3gt5rMSvhR87Xxu'
        },
        'followers': {
          'href': null,
          'total': 198127
        },
        'genres': ['german metal', 'german power metal', 'melodic metal', 'metal', 'neo classical metal',
          'power metal', 'progressive metal', 'symphonic metal'],
        'href': 'https://api.spotify.com/v1/artists/3AGFqPP3gt5rMSvhR87Xxu',
        'id': '3AGFqPP3gt5rMSvhR87Xxu',
        'images': [{
          'height': 1000,
          'url': 'https://i.scdn.co/image/ab6772690000c46cec078670d746fddbe7674e78',
          'width': 1000
        }, {
          'height': 640,
          'url': 'https://i.scdn.co/image/ab6772690000dd22ec078670d746fddbe7674e78',
          'width': 640
        }, {
          'height': 200,
          'url': 'https://i.scdn.co/image/ab6772690000bac3ec078670d746fddbe7674e78',
          'width': 200
        }, {
          'height': 64,
          'url': 'https://i.scdn.co/image/ab67726900008f74ec078670d746fddbe7674e78',
          'width': 64
        }],
        'name': 'Edguy',
        'popularity': 52,
        'type': 'artist',
        'uri': 'spotify:artist:3AGFqPP3gt5rMSvhR87Xxu'
      }, {
        'external_urls': {
          'spotify': 'https://open.spotify.com/artist/5BrPgtYnoVfEoDYzw0AHGz'
        },
        'followers': {
          'href': null,
          'total': 24185
        },
        'genres': ['brazilian metal', 'brazilian power metal', 'brazilian progressive metal'],
        'href': 'https://api.spotify.com/v1/artists/5BrPgtYnoVfEoDYzw0AHGz',
        'id': '5BrPgtYnoVfEoDYzw0AHGz',
        'images': [{
          'height': 640,
          'url': 'https://i.scdn.co/image/8012fbceab1c1e6f505020ec6868f589fa5d42ee',
          'width': 640
        }, {
          'height': 320,
          'url': 'https://i.scdn.co/image/e65beda423115e04fd0ae254a0b313fa941eb556',
          'width': 320
        }, {
          'height': 160,
          'url': 'https://i.scdn.co/image/37657baeb15a3bf4bf6a0782e66e7f0019a83c2d',
          'width': 160
        }],
        'name': 'Edu Falaschi',
        'popularity': 29,
        'type': 'artist',
        'uri': 'spotify:artist:5BrPgtYnoVfEoDYzw0AHGz'
      }, {
        'external_urls': {
          'spotify': 'https://open.spotify.com/artist/4FhjNTlKUnMbaeS21fouvd'
        },
        'followers': {
          'href': null,
          'total': 41434
        },
        'genres': ['brazilian metal', 'neo classical metal', 'power metal'],
        'href': 'https://api.spotify.com/v1/artists/4FhjNTlKUnMbaeS21fouvd',
        'id': '4FhjNTlKUnMbaeS21fouvd',
        'images': [{
          'height': 640,
          'url': 'https://i.scdn.co/image/14b8d2527b0dacc1cb37af59471ada1e47a48cf3',
          'width': 640
        }, {
          'height': 320,
          'url': 'https://i.scdn.co/image/7fc08e505a9315a58e57b2c9c40577095c992e84',
          'width': 320
        }, {
          'height': 160,
          'url': 'https://i.scdn.co/image/7765c9b0505d8fe49ae1952991ba7f4b6b3ad9b4',
          'width': 160
        }],
        'name': 'Andre Matos',
        'popularity': 32,
        'type': 'artist',
        'uri': 'spotify:artist:4FhjNTlKUnMbaeS21fouvd'
      }, {
        'external_urls': {
          'spotify': 'https://open.spotify.com/artist/1OHNvr18TssBKYK0A75yvx'
        },
        'followers': {
          'href': null,
          'total': 70260
        },
        'genres': ['german metal', 'german power metal', 'melodic metal', 'metal', 'neo classical metal', 'power metal',
          'progressive metal', 'symphonic metal'],
        'href': 'https://api.spotify.com/v1/artists/1OHNvr18TssBKYK0A75yvx',
        'id': '1OHNvr18TssBKYK0A75yvx',
        'images': [{
          'height': 640,
          'url': 'https://i.scdn.co/image/edad76d7c993d865f851960759c83a21b8fae4b9',
          'width': 640
        }, {
          'height': 320,
          'url': 'https://i.scdn.co/image/07188c51738101ab414bc08c288950423cc7dbec',
          'width': 320
        }, {
          'height': 160,
          'url': 'https://i.scdn.co/image/cc4ac2c4aba30ea114d96eae1a87dba0e1d618e9',
          'width': 160
        }],
        'name': 'Masterplan',
        'popularity': 43,
        'type': 'artist',
        'uri': 'spotify:artist:1OHNvr18TssBKYK0A75yvx'
      }, {
        'external_urls': {
          'spotify': 'https://open.spotify.com/artist/72rswq5X0csZgWCsAqDwfU'
        },
        'followers': {
          'href': null,
          'total': 19533
        },
        'genres': ['brazilian metal', 'brazilian power metal', 'metal gaucho', 'neo classical metal', 'power metal'],
        'href': 'https://api.spotify.com/v1/artists/72rswq5X0csZgWCsAqDwfU',
        'id': '72rswq5X0csZgWCsAqDwfU',
        'images': [{
          'height': 640,
          'url': 'https://i.scdn.co/image/5e3c014457b9e55c4fcc7998db8a0714466cad42',
          'width': 640
        }, {
          'height': 320,
          'url': 'https://i.scdn.co/image/962e0a376f47adcafcc2810e40851f8e67bdf65b',
          'width': 320
        }, {
          'height': 160,
          'url': 'https://i.scdn.co/image/9bbc036cb06173560a3fc0d75e2b3cbc89298b2c',
          'width': 160
        }],
        'name': 'Hibria',
        'popularity': 27,
        'type': 'artist',
        'uri': 'spotify:artist:72rswq5X0csZgWCsAqDwfU'
      }, {
        'external_urls': {
          'spotify': 'https://open.spotify.com/artist/5L6lO4X5v3GJpTkBg1BdW2'
        },
        'followers': {
          'href': null,
          'total': 32617
        },
        'genres': ['christian power metal', 'italian metal', 'italian power metal', 'melodic metal',
          'neo classical metal',
          'power metal', 'progressive metal', 'progressive power metal'],
        'href': 'https://api.spotify.com/v1/artists/5L6lO4X5v3GJpTkBg1BdW2',
        'id': '5L6lO4X5v3GJpTkBg1BdW2',
        'images': [{
          'height': 640,
          'url': 'https://i.scdn.co/image/1dea49f317e05ebf05765efe4d68cce913bf7276',
          'width': 640
        }, {
          'height': 320,
          'url': 'https://i.scdn.co/image/bb47b64bad7df5fc5a3dabf11b60ca4ab3f9cc68',
          'width': 320
        }, {
          'height': 160,
          'url': 'https://i.scdn.co/image/574114a1a8e8a7711ea1b0a7a96fa980948c8e86',
          'width': 160
        }],
        'name': 'Vision Divine',
        'popularity': 34,
        'type': 'artist',
        'uri': 'spotify:artist:5L6lO4X5v3GJpTkBg1BdW2'
      }, {
        'external_urls': {
          'spotify': 'https://open.spotify.com/artist/1O8CSXsPwEqxcoBE360PPO'
        },
        'followers': {
          'href': null,
          'total': 426727
        },
        'genres': ['finnish power metal', 'melodic metal', 'metal', 'neo classical metal', 'power metal',
          'progressive metal', 'symphonic metal'],
        'href': 'https://api.spotify.com/v1/artists/1O8CSXsPwEqxcoBE360PPO',
        'id': '1O8CSXsPwEqxcoBE360PPO',
        'images': [{
          'height': 640,
          'url': 'https://i.scdn.co/image/8285d6793a22dab9982fafc1a7cb43a41ff6fae3',
          'width': 640
        }, {
          'height': 320,
          'url': 'https://i.scdn.co/image/ff46b7ae4f095874bddc7a3738c235d5a49c7596',
          'width': 320
        }, {
          'height': 160,
          'url': 'https://i.scdn.co/image/aa243f0e1686260e63df633fc6762f34de02adee',
          'width': 160
        }],
        'name': 'Stratovarius',
        'popularity': 57,
        'type': 'artist',
        'uri': 'spotify:artist:1O8CSXsPwEqxcoBE360PPO'
      }, {
        'external_urls': {
          'spotify': 'https://open.spotify.com/artist/6LZE884lDIsCSLHuTplfGp'
        },
        'followers': {
          'href': null,
          'total': 187819
        },
        'genres': ['german metal', 'german power metal', 'hard rock', 'melodic metal', 'metal',
          'neo classical metal', 'power metal', 'speed metal'],
        'href': 'https://api.spotify.com/v1/artists/6LZE884lDIsCSLHuTplfGp',
        'id': '6LZE884lDIsCSLHuTplfGp',
        'images': [{
          'height': 530,
          'url': 'https://i.scdn.co/image/a58d18e7c32d99d6889bd4199c7d0976409fed32',
          'width': 800
        }, {
          'height': 424,
          'url': 'https://i.scdn.co/image/5c6fbe65a2af00746cb3f5e36f34a925aca39c72',
          'width': 640
        }, {
          'height': 133,
          'url': 'https://i.scdn.co/image/a304da7f737bacfa1709c7a2048772ec08f634b0',
          'width': 200
        }, {
          'height': 42,
          'url': 'https://i.scdn.co/image/094d387df4837a7df7d7a08e63accf3cd2a985aa',
          'width': 63
        }],
        'name': 'Gamma Ray',
        'popularity': 47,
        'type': 'artist',
        'uri': 'spotify:artist:6LZE884lDIsCSLHuTplfGp'
      }, {
        'external_urls': {
          'spotify': 'https://open.spotify.com/artist/4pQN0GB0fNEEOfQCaWotsY'
        },
        'followers': {
          'href': null,
          'total': 779063
        },
        'genres': ['german metal', 'german power metal', 'hard rock', 'melodic metal',
          'metal', 'neo classical metal', 'old school thrash', 'power metal', 'rock', 'speed metal'],
        'href': 'https://api.spotify.com/v1/artists/4pQN0GB0fNEEOfQCaWotsY',
        'id': '4pQN0GB0fNEEOfQCaWotsY',
        'images': [{
          'height': 640,
          'url': 'https://i.scdn.co/image/40f2d7c6df6c1796c052cb60185b7b914249aa12',
          'width': 640
        }, {
          'height': 320,
          'url': 'https://i.scdn.co/image/3a87f5204f5b53b1235d69949d8e0871778cf9e0',
          'width': 320
        }, {
          'height': 160,
          'url': 'https://i.scdn.co/image/a493dc6652d09e3be0bb4921c91f1af331242555',
          'width': 160
        }],
        'name': 'Helloween',
        'popularity': 62,
        'type': 'artist',
        'uri': 'spotify:artist:4pQN0GB0fNEEOfQCaWotsY'
      }, {
        'external_urls': {
          'spotify': 'https://open.spotify.com/artist/2jqA2OsMhBDu0M2GLDIvsH'
        },
        'followers': {
          'href': null,
          'total': 67669
        },
        'genres': ['italian metal', 'italian power metal', 'melodic metal', 'neo classical metal', 'power metal', 'symphonic metal'],
        'href': 'https://api.spotify.com/v1/artists/2jqA2OsMhBDu0M2GLDIvsH',
        'id': '2jqA2OsMhBDu0M2GLDIvsH',
        'images': [{
          'height': 640,
          'url': 'https://i.scdn.co/image/285fbfb7d0ba61bbbff75dd0df0c2d392648e6b6',
          'width': 640
        }, {
          'height': 320,
          'url': 'https://i.scdn.co/image/70be5f6fc2baf5e2ac511ea1a905a47e804225fe',
          'width': 320
        }, {
          'height': 160,
          'url': 'https://i.scdn.co/image/1c5a8779d4743bcafa095b8ceee564010a9fc572',
          'width': 160
        }],
        'name': 'Luca Turilli',
        'popularity': 40,
        'type': 'artist',
        'uri': 'spotify:artist:2jqA2OsMhBDu0M2GLDIvsH'
      }, {
        'external_urls': {
          'spotify': 'https://open.spotify.com/artist/4O6RDLeFX5xuQ7IePFzVcl'
        },
        'followers': {
          'href': null,
          'total': 84702
        },
        'genres': ['german metal', 'german power metal', 'melodic metal', 'metal', 'neo classical metal',
          'power metal', 'progressive metal', 'symphonic metal'],
        'href': 'https://api.spotify.com/v1/artists/4O6RDLeFX5xuQ7IePFzVcl',
        'id': '4O6RDLeFX5xuQ7IePFzVcl',
        'images': [{
          'height': 640,
          'url': 'https://i.scdn.co/image/5249e7a935f453f93e4f6d9927ecbcb73b331d6e',
          'width': 640
        }, {
          'height': 320,
          'url': 'https://i.scdn.co/image/ad6c10ca056ebaf5a39910068b190ca53adee3c4',
          'width': 320
        }, {
          'height': 160,
          'url': 'https://i.scdn.co/image/1a9f4d6e3ef35ae0892335cce23bf107dca1678b',
          'width': 160
        }],
        'name': 'Demons & Wizards',
        'popularity': 46,
        'type': 'artist',
        'uri': 'spotify:artist:4O6RDLeFX5xuQ7IePFzVcl'
      }, {
        'external_urls': {
          'spotify': 'https://open.spotify.com/artist/2GnCQNJbs4xqFulqAdAg2U'
        },
        'followers': {
          'href': null,
          'total': 276103
        },
        'genres': ['italian folk metal', 'italian metal', 'italian power metal', 'melodic metal', 'neo classical metal', 'power metal', 'symphonic metal'],
        'href': 'https://api.spotify.com/v1/artists/2GnCQNJbs4xqFulqAdAg2U',
        'id': '2GnCQNJbs4xqFulqAdAg2U',
        'images': [{
          'height': 640,
          'url': 'https://i.scdn.co/image/bb3753bcdf8ee6e2bfd3caf9299a2dfb3bde6b05',
          'width': 640
        }, {
          'height': 320,
          'url': 'https://i.scdn.co/image/11ad977b685d797f32c3465adefbb9b975758b44',
          'width': 320
        }, {
          'height': 160,
          'url': 'https://i.scdn.co/image/7eca7a2460733fe7065670cbd10ca009f79405b2',
          'width': 160
        }],
        'name': 'Rhapsody Of Fire',
        'popularity': 48,
        'type': 'artist',
        'uri': 'spotify:artist:2GnCQNJbs4xqFulqAdAg2U'
      }, {
        'external_urls': {
          'spotify': 'https://open.spotify.com/artist/073v2aQjS8tVeaUsp86lkd'
        },
        'followers': {
          'href': null,
          'total': 17859
        },
        'genres': ['brazilian metal', 'brazilian power metal', 'brazilian progressive metal', 'metal gaucho', 'progressive power metal'],
        'href': 'https://api.spotify.com/v1/artists/073v2aQjS8tVeaUsp86lkd',
        'id': '073v2aQjS8tVeaUsp86lkd',
        'images': [{
          'height': 640,
          'url': 'https://i.scdn.co/image/ab67616d0000b27310f643846217a236a609020f',
          'width': 640
        }, {
          'height': 300,
          'url': 'https://i.scdn.co/image/ab67616d00001e0210f643846217a236a609020f',
          'width': 300
        }, {
          'height': 64,
          'url': 'https://i.scdn.co/image/ab67616d0000485110f643846217a236a609020f',
          'width': 64
        }],
        'name': 'Hangar',
        'popularity': 31,
        'type': 'artist',
        'uri': 'spotify:artist:073v2aQjS8tVeaUsp86lkd'
      }, {
        'external_urls': {
          'spotify': 'https://open.spotify.com/artist/7gTbq5nTZGQIUgjEGXQpOS'
        },
        'followers': {
          'href': null,
          'total': 283859
        },
        'genres': ['gothic symphonic metal', 'melodic metal', 'metal', 'neo classical metal', 'power metal', 'progressive metal', 'symphonic metal'],
        'href': 'https://api.spotify.com/v1/artists/7gTbq5nTZGQIUgjEGXQpOS',
        'id': '7gTbq5nTZGQIUgjEGXQpOS',
        'images': [{
          'height': 640,
          'url': 'https://i.scdn.co/image/f993aa40319bc43d45f872d0e8b9cad9047e9ecc',
          'width': 640
        }, {
          'height': 320,
          'url': 'https://i.scdn.co/image/69caaacc0bca6c4832d25c22e07327012f9f1fed',
          'width': 320
        }, {
          'height': 160,
          'url': 'https://i.scdn.co/image/1b461513ac0bacb66ed38199296d9e395a3dbc16',
          'width': 160
        }],
        'name': 'Kamelot',
        'popularity': 55,
        'type': 'artist',
        'uri': 'spotify:artist:7gTbq5nTZGQIUgjEGXQpOS'
      }, {
        'external_urls': {
          'spotify': 'https://open.spotify.com/artist/0YWKRTzA4kBceGwjywtMkh'
        },
        'followers': {
          'href': null,
          'total': 56274
        },
        'genres': ['melodic metal', 'neo classical metal', 'power metal', 'spanish metal', 'symphonic metal'],
        'href': 'https://api.spotify.com/v1/artists/0YWKRTzA4kBceGwjywtMkh',
        'id': '0YWKRTzA4kBceGwjywtMkh',
        'images': [{
          'height': 624,
          'url': 'https://i.scdn.co/image/beecd1d4a17893700eecad14210639a0d3b5bfbf',
          'width': 806
        }, {
          'height': 495,
          'url': 'https://i.scdn.co/image/b3b35ae38f2fb1feb9b54fcd42e7c08f5bc57980',
          'width': 639
        }, {
          'height': 155,
          'url': 'https://i.scdn.co/image/e56f1a98798295e266b70b6d2b37dc757be07fa1',
          'width': 200
        }, {
          'height': 50,
          'url': 'https://i.scdn.co/image/e8bf7b4714dc563aa8df6f4ca71dd5e5fe140a61',
          'width': 64
        }],
        'name': 'Dark Moor',
        'popularity': 41,
        'type': 'artist',
        'uri': 'spotify:artist:0YWKRTzA4kBceGwjywtMkh'
      }]
    };
    const responseAlbum = {
      'href': 'https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y/albums?offset=0&limit=20&include_groups=album,single,compilation,appears_on',
      'items': [{
        'album_group': 'album',
        'album_type': 'album',
        'artists': [{
          'external_urls': {
            'spotify': 'https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y'
          },
          'href': 'https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y',
          'id': '7IAXZaLTb6nkJr8RmVPn5y',
          'name': 'Angra',
          'type': 'artist',
          'uri': 'spotify:artist:7IAXZaLTb6nkJr8RmVPn5y'
        }],
        'available_markets': ['AU', 'NZ'],
        'external_urls': {
          'spotify': 'https://open.spotify.com/album/4TB2OMEi6ylnca5iourIbY'
        },
        'href': 'https://api.spotify.com/v1/albums/4TB2OMEi6ylnca5iourIbY',
        'id': '4TB2OMEi6ylnca5iourIbY',
        'images': [{
          'height': 640,
          'url': 'https://i.scdn.co/image/ab67616d0000b2734c84aa371ebe7868e61cc105',
          'width': 640
        }, {
          'height': 300,
          'url': 'https://i.scdn.co/image/ab67616d00001e024c84aa371ebe7868e61cc105',
          'width': 300
        }, {
          'height': 64,
          'url': 'https://i.scdn.co/image/ab67616d000048514c84aa371ebe7868e61cc105',
          'width': 64
        }],
        'name': 'ØMNI',
        'release_date': '2018-02-16',
        'release_date_precision': 'day',
        'total_tracks': 11,
        'type': 'album',
        'uri': 'spotify:album:4TB2OMEi6ylnca5iourIbY'
      }, {
        'album_group': 'album',
        'album_type': 'album',
        'artists': [{
          'external_urls': {
            'spotify': 'https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y'
          },
          'href': 'https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y',
          'id': '7IAXZaLTb6nkJr8RmVPn5y',
          'name': 'Angra',
          'type': 'artist',
          'uri': 'spotify:artist:7IAXZaLTb6nkJr8RmVPn5y'
        }],
        'available_markets': ['CA', 'US'],
        'external_urls': {
          'spotify': 'https://open.spotify.com/album/42CadsZy8wIjcps1GvGrPY'
        },
        'href': 'https://api.spotify.com/v1/albums/42CadsZy8wIjcps1GvGrPY',
        'id': '42CadsZy8wIjcps1GvGrPY',
        'images': [{
          'height': 640,
          'url': 'https://i.scdn.co/image/ab67616d0000b273a2e3e652e40fdea202ccb3a9',
          'width': 640
        }, {
          'height': 300,
          'url': 'https://i.scdn.co/image/ab67616d00001e02a2e3e652e40fdea202ccb3a9',
          'width': 300
        }, {
          'height': 64,
          'url': 'https://i.scdn.co/image/ab67616d00004851a2e3e652e40fdea202ccb3a9',
          'width': 64
        }],
        'name': 'ØMNI',
        'release_date': '2018-02-16',
        'release_date_precision': 'day',
        'total_tracks': 11,
        'type': 'album',
        'uri': 'spotify:album:42CadsZy8wIjcps1GvGrPY'
      }, {
        'album_group': 'album',
        'album_type': 'album',
        'artists': [{
          'external_urls': {
            'spotify': 'https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y'
          },
          'href': 'https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y',
          'id': '7IAXZaLTb6nkJr8RmVPn5y',
          'name': 'Angra',
          'type': 'artist',
          'uri': 'spotify:artist:7IAXZaLTb6nkJr8RmVPn5y'
        }],
        'available_markets': ['AD', 'AE', 'AL', 'AR', 'AT', 'BA', 'BE', 'BG', 'BH', 'BO', 'BR', 'BY', 'CH', 'CL', 'CO', 'CR', 'CY', 'CZ', 'DE', 'DK', 'DO', 'DZ', 'EC', 'EE', 'EG', 'ES', 'FI', 'FR', 'GB', 'GR', 'GT', 'HN', 'HR', 'HU', 'IE', 'IL', 'IN', 'IS', 'IT', 'JO', 'KW', 'KZ', 'LB', 'LI', 'LT', 'LU', 'LV', 'MA', 'MC', 'MD', 'ME', 'MK', 'MT', 'MX', 'NI', 'NL', 'NO', 'OM', 'PA', 'PE', 'PL', 'PS', 'PT', 'PY', 'QA', 'RO', 'RS', 'SA', 'SE', 'SI', 'SK', 'SV', 'TN', 'TR', 'UA', 'VN', 'XK'],
        'external_urls': {
          'spotify': 'https://open.spotify.com/album/4noKmVBHY6sBOT4zA1wfo2'
        },
        'href': 'https://api.spotify.com/v1/albums/4noKmVBHY6sBOT4zA1wfo2',
        'id': '4noKmVBHY6sBOT4zA1wfo2',
        'images': [{
          'height': 640,
          'url': 'https://i.scdn.co/image/ab67616d0000b2732a074db1edfd8ca84cef8545',
          'width': 640
        }, {
          'height': 300,
          'url': 'https://i.scdn.co/image/ab67616d00001e022a074db1edfd8ca84cef8545',
          'width': 300
        }, {
          'height': 64,
          'url': 'https://i.scdn.co/image/ab67616d000048512a074db1edfd8ca84cef8545',
          'width': 64
        }],
        'name': 'Ømni',
        'release_date': '2018-02-16',
        'release_date_precision': 'day',
        'total_tracks': 11,
        'type': 'album',
        'uri': 'spotify:album:4noKmVBHY6sBOT4zA1wfo2'
      }, {
        'album_group': 'album',
        'album_type': 'album',
        'artists': [{
          'external_urls': {
            'spotify': 'https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y'
          },
          'href': 'https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y',
          'id': '7IAXZaLTb6nkJr8RmVPn5y',
          'name': 'Angra',
          'type': 'artist',
          'uri': 'spotify:artist:7IAXZaLTb6nkJr8RmVPn5y'
        }],
        'available_markets': ['HK', 'ID', 'JP', 'MY', 'PH', 'SG', 'TH', 'TW'],
        'external_urls': {
          'spotify': 'https://open.spotify.com/album/47YXQOyRlJfAidxzZVLeTd'
        },
        'href': 'https://api.spotify.com/v1/albums/47YXQOyRlJfAidxzZVLeTd',
        'id': '47YXQOyRlJfAidxzZVLeTd',
        'images': [{
          'height': 640,
          'url': 'https://i.scdn.co/image/ab67616d0000b2731fe6d9cd907cee6ffe749ded',
          'width': 640
        }, {
          'height': 300,
          'url': 'https://i.scdn.co/image/ab67616d00001e021fe6d9cd907cee6ffe749ded',
          'width': 300
        }, {
          'height': 64,
          'url': 'https://i.scdn.co/image/ab67616d000048511fe6d9cd907cee6ffe749ded',
          'width': 64
        }],
        'name': 'OMNI',
        'release_date': '2018-02-16',
        'release_date_precision': 'day',
        'total_tracks': 11,
        'type': 'album',
        'uri': 'spotify:album:47YXQOyRlJfAidxzZVLeTd'
      }, {
        'album_group': 'album',
        'album_type': 'album',
        'artists': [{
          'external_urls': {
            'spotify': 'https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y'
          },
          'href': 'https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y',
          'id': '7IAXZaLTb6nkJr8RmVPn5y',
          'name': 'Angra',
          'type': 'artist',
          'uri': 'spotify:artist:7IAXZaLTb6nkJr8RmVPn5y'
        }],
        'available_markets': ['CA', 'US'],
        'external_urls': {
          'spotify': 'https://open.spotify.com/album/6rkvw5CIgaxzROOW94SxLV'
        },
        'href': 'https://api.spotify.com/v1/albums/6rkvw5CIgaxzROOW94SxLV',
        'id': '6rkvw5CIgaxzROOW94SxLV',
        'images': [{
          'height': 640,
          'url': 'https://i.scdn.co/image/ab67616d0000b2736b5d85b02eed30851a8ede1b',
          'width': 640
        }, {
          'height': 300,
          'url': 'https://i.scdn.co/image/ab67616d00001e026b5d85b02eed30851a8ede1b',
          'width': 300
        }, {
          'height': 64,
          'url': 'https://i.scdn.co/image/ab67616d000048516b5d85b02eed30851a8ede1b',
          'width': 64
        }],
        'name': 'Secret Garden',
        'release_date': '2015-01-16',
        'release_date_precision': 'day',
        'total_tracks': 11,
        'type': 'album',
        'uri': 'spotify:album:6rkvw5CIgaxzROOW94SxLV'
      }, {
        'album_group': 'album',
        'album_type': 'album',
        'artists': [{
          'external_urls': {
            'spotify': 'https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y'
          },
          'href': 'https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y',
          'id': '7IAXZaLTb6nkJr8RmVPn5y',
          'name': 'Angra',
          'type': 'artist',
          'uri': 'spotify:artist:7IAXZaLTb6nkJr8RmVPn5y'
        }],
        'available_markets': ['JP'],
        'external_urls': {
          'spotify': 'https://open.spotify.com/album/0SpGRr7xN2QTsOHoAJu1B1'
        },
        'href': 'https://api.spotify.com/v1/albums/0SpGRr7xN2QTsOHoAJu1B1',
        'id': '0SpGRr7xN2QTsOHoAJu1B1',
        'images': [{
          'height': 640,
          'url': 'https://i.scdn.co/image/ab67616d0000b2736a173a12b56eca2f94f99767',
          'width': 640
        }, {
          'height': 300,
          'url': 'https://i.scdn.co/image/ab67616d00001e026a173a12b56eca2f94f99767',
          'width': 300
        }, {
          'height': 64,
          'url': 'https://i.scdn.co/image/ab67616d000048516a173a12b56eca2f94f99767',
          'width': 64
        }],
        'name': 'Secret Garden',
        'release_date': '2014-12-17',
        'release_date_precision': 'day',
        'total_tracks': 10,
        'type': 'album',
        'uri': 'spotify:album:0SpGRr7xN2QTsOHoAJu1B1'
      }, {
        'album_group': 'album',
        'album_type': 'album',
        'artists': [{
          'external_urls': {
            'spotify': 'https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y'
          },
          'href': 'https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y',
          'id': '7IAXZaLTb6nkJr8RmVPn5y',
          'name': 'Angra',
          'type': 'artist',
          'uri': 'spotify:artist:7IAXZaLTb6nkJr8RmVPn5y'
        }],
        'available_markets': ['CA', 'US'],
        'external_urls': {
          'spotify': 'https://open.spotify.com/album/6chIzgROd6sbgmtDJNGrCe'
        },
        'href': 'https://api.spotify.com/v1/albums/6chIzgROd6sbgmtDJNGrCe',
        'id': '6chIzgROd6sbgmtDJNGrCe',
        'images': [{
          'height': 640,
          'url': 'https://i.scdn.co/image/ab67616d0000b27346e05e6720691ee780fd826e',
          'width': 640
        }, {
          'height': 300,
          'url': 'https://i.scdn.co/image/ab67616d00001e0246e05e6720691ee780fd826e',
          'width': 300
        }, {
          'height': 64,
          'url': 'https://i.scdn.co/image/ab67616d0000485146e05e6720691ee780fd826e',
          'width': 64
        }],
        'name': 'Angels Cry - 20th Anniversary Tour (Live)',
        'release_date': '2014-01-31',
        'release_date_precision': 'day',
        'total_tracks': 20,
        'type': 'album',
        'uri': 'spotify:album:6chIzgROd6sbgmtDJNGrCe'
      }, {
        'album_group': 'album',
        'album_type': 'album',
        'artists': [{
          'external_urls': {
            'spotify': 'https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y'
          },
          'href': 'https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y',
          'id': '7IAXZaLTb6nkJr8RmVPn5y',
          'name': 'Angra',
          'type': 'artist',
          'uri': 'spotify:artist:7IAXZaLTb6nkJr8RmVPn5y'
        }],
        'available_markets': ['AD', 'AE', 'AL', 'AT', 'AU', 'BA', 'BE', 'BG', 'BH', 'BY', 'CA', 'CH', 'CR', 'CY', 'CZ', 'DE', 'DK', 'DO', 'DZ', 'EE', 'EG', 'ES', 'FI', 'FR', 'GB', 'GR', 'GT', 'HK', 'HN', 'HR', 'HU', 'IE', 'IL', 'IN', 'IS', 'IT', 'JO', 'KW', 'KZ', 'LB', 'LI', 'LT', 'LU', 'LV', 'MA', 'MC', 'MD', 'ME', 'MK', 'MT', 'MX', 'NI', 'NL', 'NO', 'NZ', 'OM', 'PA', 'PL', 'PS', 'PT', 'PY', 'QA', 'RO', 'RS', 'RU', 'SA', 'SE', 'SI', 'SK', 'SV', 'TN', 'TR', 'UA', 'VN', 'XK', 'ZA'],
        'external_urls': {
          'spotify': 'https://open.spotify.com/album/0kAARs7jIgXxVrjiLr1EPQ'
        },
        'href': 'https://api.spotify.com/v1/albums/0kAARs7jIgXxVrjiLr1EPQ',
        'id': '0kAARs7jIgXxVrjiLr1EPQ',
        'images': [{
          'height': 640,
          'url': 'https://i.scdn.co/image/ab67616d0000b2732673fd94cb3a5ce606a16318',
          'width': 640
        }, {
          'height': 300,
          'url': 'https://i.scdn.co/image/ab67616d00001e022673fd94cb3a5ce606a16318',
          'width': 300
        }, {
          'height': 64,
          'url': 'https://i.scdn.co/image/ab67616d000048512673fd94cb3a5ce606a16318',
          'width': 64
        }],
        'name': 'Secret Garden',
        'release_date': '2014',
        'release_date_precision': 'year',
        'total_tracks': 11,
        'type': 'album',
        'uri': 'spotify:album:0kAARs7jIgXxVrjiLr1EPQ'
      }, {
        'album_group': 'album',
        'album_type': 'album',
        'artists': [{
          'external_urls': {
            'spotify': 'https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y'
          },
          'href': 'https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y',
          'id': '7IAXZaLTb6nkJr8RmVPn5y',
          'name': 'Angra',
          'type': 'artist',
          'uri': 'spotify:artist:7IAXZaLTb6nkJr8RmVPn5y'
        }],
        'available_markets': ['AR', 'BO', 'BR', 'CL', 'CO', 'CR', 'DO', 'EC', 'GT', 'HN', 'MX', 'NI', 'PA', 'PE', 'PY', 'SV', 'UY'],
        'external_urls': {
          'spotify': 'https://open.spotify.com/album/4etZZGXgHo8lCSH5CEw6Z7'
        },
        'href': 'https://api.spotify.com/v1/albums/4etZZGXgHo8lCSH5CEw6Z7',
        'id': '4etZZGXgHo8lCSH5CEw6Z7',
        'images': [{
          'height': 640,
          'url': 'https://i.scdn.co/image/ab67616d0000b27339c7984e3da3664f6b1e6f6a',
          'width': 640
        }, {
          'height': 300,
          'url': 'https://i.scdn.co/image/ab67616d00001e0239c7984e3da3664f6b1e6f6a',
          'width': 300
        }, {
          'height': 64,
          'url': 'https://i.scdn.co/image/ab67616d0000485139c7984e3da3664f6b1e6f6a',
          'width': 64
        }],
        'name': 'Secret Garden',
        'release_date': '2014',
        'release_date_precision': 'year',
        'total_tracks': 10,
        'type': 'album',
        'uri': 'spotify:album:4etZZGXgHo8lCSH5CEw6Z7'
      }, {
        'album_group': 'album',
        'album_type': 'album',
        'artists': [{
          'external_urls': {
            'spotify': 'https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y'
          },
          'href': 'https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y',
          'id': '7IAXZaLTb6nkJr8RmVPn5y',
          'name': 'Angra',
          'type': 'artist',
          'uri': 'spotify:artist:7IAXZaLTb6nkJr8RmVPn5y'
        }],
        'available_markets': ['JP'],
        'external_urls': {
          'spotify': 'https://open.spotify.com/album/1KiXQJF7mXsSY71hAnovz1'
        },
        'href': 'https://api.spotify.com/v1/albums/1KiXQJF7mXsSY71hAnovz1',
        'id': '1KiXQJF7mXsSY71hAnovz1',
        'images': [{
          'height': 640,
          'url': 'https://i.scdn.co/image/ab67616d0000b2731a6c4b869f4dc826dc1bf73f',
          'width': 640
        }, {
          'height': 300,
          'url': 'https://i.scdn.co/image/ab67616d00001e021a6c4b869f4dc826dc1bf73f',
          'width': 300
        }, {
          'height': 64,
          'url': 'https://i.scdn.co/image/ab67616d000048511a6c4b869f4dc826dc1bf73f',
          'width': 64
        }],
        'name': 'Angels Cry 20th Anniversary Tour',
        'release_date': '2013-11-27',
        'release_date_precision': 'day',
        'total_tracks': 21,
        'type': 'album',
        'uri': 'spotify:album:1KiXQJF7mXsSY71hAnovz1'
      }, {
        'album_group': 'album',
        'album_type': 'album',
        'artists': [{
          'external_urls': {
            'spotify': 'https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y'
          },
          'href': 'https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y',
          'id': '7IAXZaLTb6nkJr8RmVPn5y',
          'name': 'Angra',
          'type': 'artist',
          'uri': 'spotify:artist:7IAXZaLTb6nkJr8RmVPn5y'
        }],
        'available_markets': ['AD', 'AE', 'AL', 'AT', 'BA', 'BE', 'BG', 'BH', 'BY', 'CA', 'CH', 'CR', 'CY', 'CZ', 'DE', 'DK', 'DO', 'DZ', 'EE', 'EG', 'ES', 'FI', 'FR', 'GB', 'GR', 'GT', 'HK', 'HN', 'HR', 'HU', 'ID', 'IE', 'IL', 'IN', 'IS', 'IT', 'JO', 'KW', 'KZ', 'LB', 'LI', 'LT', 'LU', 'LV', 'MA', 'MC', 'MD', 'ME', 'MK', 'MT', 'MX', 'MY', 'NI', 'NL', 'NO', 'OM', 'PA', 'PH', 'PL', 'PS', 'PT', 'PY', 'QA', 'RO', 'RS', 'RU', 'SA', 'SE', 'SG', 'SI', 'SK', 'SV', 'TH', 'TN', 'TR', 'TW', 'UA', 'VN', 'XK', 'ZA'],
        'external_urls': {
          'spotify': 'https://open.spotify.com/album/2SgTtCgXvRpWwd8jTgapM6'
        },
        'href': 'https://api.spotify.com/v1/albums/2SgTtCgXvRpWwd8jTgapM6',
        'id': '2SgTtCgXvRpWwd8jTgapM6',
        'images': [{
          'height': 640,
          'url': 'https://i.scdn.co/image/ab67616d0000b273529f5b482ac89b53575a814b',
          'width': 640
        }, {
          'height': 300,
          'url': 'https://i.scdn.co/image/ab67616d00001e02529f5b482ac89b53575a814b',
          'width': 300
        }, {
          'height': 64,
          'url': 'https://i.scdn.co/image/ab67616d00004851529f5b482ac89b53575a814b',
          'width': 64
        }],
        'name': 'Angels Cry - 20th Anniversary Tour (Live)',
        'release_date': '2013',
        'release_date_precision': 'year',
        'total_tracks': 20,
        'type': 'album',
        'uri': 'spotify:album:2SgTtCgXvRpWwd8jTgapM6'
      }, {
        'album_group': 'album',
        'album_type': 'album',
        'artists': [{
          'external_urls': {
            'spotify': 'https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y'
          },
          'href': 'https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y',
          'id': '7IAXZaLTb6nkJr8RmVPn5y',
          'name': 'Angra',
          'type': 'artist',
          'uri': 'spotify:artist:7IAXZaLTb6nkJr8RmVPn5y'
        }],
        'available_markets': ['AR', 'BO', 'BR', 'CL', 'CO', 'CR', 'DO', 'EC', 'GT', 'HN', 'MX', 'NI', 'PA', 'PE', 'PY', 'SV', 'UY'],
        'external_urls': {
          'spotify': 'https://open.spotify.com/album/4WP6Dmy0sQA7KwFhcsovhQ'
        },
        'href': 'https://api.spotify.com/v1/albums/4WP6Dmy0sQA7KwFhcsovhQ',
        'id': '4WP6Dmy0sQA7KwFhcsovhQ',
        'images': [{
          'height': 640,
          'url': 'https://i.scdn.co/image/ab67616d0000b273a0881e13f3632d62e19db40d',
          'width': 640
        }, {
          'height': 300,
          'url': 'https://i.scdn.co/image/ab67616d00001e02a0881e13f3632d62e19db40d',
          'width': 300
        }, {
          'height': 64,
          'url': 'https://i.scdn.co/image/ab67616d00004851a0881e13f3632d62e19db40d',
          'width': 64
        }],
        'name': 'Angels Cry - 20th Anniversary Tour (Live)',
        'release_date': '2013',
        'release_date_precision': 'year',
        'total_tracks': 15,
        'type': 'album',
        'uri': 'spotify:album:4WP6Dmy0sQA7KwFhcsovhQ'
      }, {
        'album_group': 'album',
        'album_type': 'album',
        'artists': [{
          'external_urls': {
            'spotify': 'https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y'
          },
          'href': 'https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y',
          'id': '7IAXZaLTb6nkJr8RmVPn5y',
          'name': 'Angra',
          'type': 'artist',
          'uri': 'spotify:artist:7IAXZaLTb6nkJr8RmVPn5y'
        }],
        'available_markets': ['AD', 'AE', 'AL', 'AT', 'AU', 'BA', 'BE', 'BG', 'BH', 'BY', 'CH', 'CR', 'CY', 'CZ', 'DE', 'DK', 'DO', 'DZ', 'EE', 'EG', 'ES', 'FI', 'FR', 'GB', 'GR', 'GT', 'HK', 'HN', 'HR', 'HU', 'ID', 'IE', 'IL', 'IS', 'IT', 'JO', 'KW', 'KZ', 'LB', 'LI', 'LT', 'LU', 'LV', 'MA', 'MC', 'MD', 'ME', 'MK', 'MT', 'MX', 'MY', 'NI', 'NL', 'NO', 'NZ', 'OM', 'PA', 'PH', 'PL', 'PS', 'PT', 'QA', 'RO', 'RS', 'RU', 'SA', 'SE', 'SG', 'SI', 'SK', 'SV', 'TH', 'TN', 'TR', 'TW', 'UA', 'VN', 'XK', 'ZA'],
        'external_urls': {
          'spotify': 'https://open.spotify.com/album/0kba91hhaN03CICGE4exvj'
        },
        'href': 'https://api.spotify.com/v1/albums/0kba91hhaN03CICGE4exvj',
        'id': '0kba91hhaN03CICGE4exvj',
        'images': [{
          'height': 640,
          'url': 'https://i.scdn.co/image/ab67616d0000b2733e7d044121d0920585e99f3c',
          'width': 640
        }, {
          'height': 300,
          'url': 'https://i.scdn.co/image/ab67616d00001e023e7d044121d0920585e99f3c',
          'width': 300
        }, {
          'height': 64,
          'url': 'https://i.scdn.co/image/ab67616d000048513e7d044121d0920585e99f3c',
          'width': 64
        }],
        'name': 'Best Reached Horizons',
        'release_date': '2012-10-26',
        'release_date_precision': 'day',
        'total_tracks': 20,
        'type': 'album',
        'uri': 'spotify:album:0kba91hhaN03CICGE4exvj'
      }, {
        'album_group': 'album',
        'album_type': 'album',
        'artists': [{
          'external_urls': {
            'spotify': 'https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y'
          },
          'href': 'https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y',
          'id': '7IAXZaLTb6nkJr8RmVPn5y',
          'name': 'Angra',
          'type': 'artist',
          'uri': 'spotify:artist:7IAXZaLTb6nkJr8RmVPn5y'
        }],
        'available_markets': ['JP'],
        'external_urls': {
          'spotify': 'https://open.spotify.com/album/0HJIfsbmEbdXXf9zoIDI5l'
        },
        'href': 'https://api.spotify.com/v1/albums/0HJIfsbmEbdXXf9zoIDI5l',
        'id': '0HJIfsbmEbdXXf9zoIDI5l',
        'images': [{
          'height': 640,
          'url': 'https://i.scdn.co/image/ab67616d0000b2736a81d624aedc3c56d27f78f2',
          'width': 640
        }, {
          'height': 300,
          'url': 'https://i.scdn.co/image/ab67616d00001e026a81d624aedc3c56d27f78f2',
          'width': 300
        }, {
          'height': 64,
          'url': 'https://i.scdn.co/image/ab67616d000048516a81d624aedc3c56d27f78f2',
          'width': 64
        }],
        'name': 'Best Reached Horizons - Japan Edition',
        'release_date': '2012-09-19',
        'release_date_precision': 'day',
        'total_tracks': 18,
        'type': 'album',
        'uri': 'spotify:album:0HJIfsbmEbdXXf9zoIDI5l'
      }, {
        'album_group': 'album',
        'album_type': 'album',
        'artists': [{
          'external_urls': {
            'spotify': 'https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y'
          },
          'href': 'https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y',
          'id': '7IAXZaLTb6nkJr8RmVPn5y',
          'name': 'Angra',
          'type': 'artist',
          'uri': 'spotify:artist:7IAXZaLTb6nkJr8RmVPn5y'
        }],
        'available_markets': ['AD', 'AE', 'AL', 'AR', 'AT', 'AU', 'BA', 'BE', 'BG', 'BH', 'BO', 'BR', 'BY', 'CA', 'CH', 'CL', 'CO', 'CR', 'CY', 'CZ', 'DE', 'DK', 'DO', 'DZ', 'EC', 'EE', 'EG', 'ES', 'FI', 'FR', 'GB', 'GR', 'GT', 'HK', 'HN', 'HR', 'HU', 'ID', 'IE', 'IL', 'IS', 'IT', 'JO', 'JP', 'KW', 'KZ', 'LB', 'LI', 'LT', 'LU', 'LV', 'MA', 'MC', 'MD', 'ME', 'MK', 'MT', 'MX', 'MY', 'NI', 'NL', 'NO', 'NZ', 'OM', 'PA', 'PE', 'PH', 'PL', 'PS', 'PT', 'PY', 'QA', 'RO', 'RS', 'RU', 'SA', 'SE', 'SG', 'SI', 'SK', 'SV', 'TH', 'TN', 'TR', 'TW', 'UA', 'US', 'UY', 'VN', 'XK', 'ZA'],
        'external_urls': {
          'spotify': 'https://open.spotify.com/album/5kaCxwkNOt2GrhR7egsJZp'
        },
        'href': 'https://api.spotify.com/v1/albums/5kaCxwkNOt2GrhR7egsJZp',
        'id': '5kaCxwkNOt2GrhR7egsJZp',
        'images': [{
          'height': 640,
          'url': 'https://i.scdn.co/image/ab67616d0000b2736643b10c61b98d14ac7849db',
          'width': 640
        }, {
          'height': 300,
          'url': 'https://i.scdn.co/image/ab67616d00001e026643b10c61b98d14ac7849db',
          'width': 300
        }, {
          'height': 64,
          'url': 'https://i.scdn.co/image/ab67616d000048516643b10c61b98d14ac7849db',
          'width': 64
        }],
        'name': 'Aqua',
        'release_date': '2010-09-24',
        'release_date_precision': 'day',
        'total_tracks': 10,
        'type': 'album',
        'uri': 'spotify:album:5kaCxwkNOt2GrhR7egsJZp'
      }, {
        'album_group': 'album',
        'album_type': 'album',
        'artists': [{
          'external_urls': {
            'spotify': 'https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y'
          },
          'href': 'https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y',
          'id': '7IAXZaLTb6nkJr8RmVPn5y',
          'name': 'Angra',
          'type': 'artist',
          'uri': 'spotify:artist:7IAXZaLTb6nkJr8RmVPn5y'
        }],
        'available_markets': ['JP'],
        'external_urls': {
          'spotify': 'https://open.spotify.com/album/2M9RdMmhiRcsov2Hx5suL4'
        },
        'href': 'https://api.spotify.com/v1/albums/2M9RdMmhiRcsov2Hx5suL4',
        'id': '2M9RdMmhiRcsov2Hx5suL4',
        'images': [{
          'height': 640,
          'url': 'https://i.scdn.co/image/ab67616d0000b27339201768a8609708c44a59b6',
          'width': 640
        }, {
          'height': 300,
          'url': 'https://i.scdn.co/image/ab67616d00001e0239201768a8609708c44a59b6',
          'width': 300
        }, {
          'height': 64,
          'url': 'https://i.scdn.co/image/ab67616d0000485139201768a8609708c44a59b6',
          'width': 64
        }],
        'name': 'AQUA',
        'release_date': '2010-08-11',
        'release_date_precision': 'day',
        'total_tracks': 11,
        'type': 'album',
        'uri': 'spotify:album:2M9RdMmhiRcsov2Hx5suL4'
      }, {
        'album_group': 'album',
        'album_type': 'album',
        'artists': [{
          'external_urls': {
            'spotify': 'https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y'
          },
          'href': 'https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y',
          'id': '7IAXZaLTb6nkJr8RmVPn5y',
          'name': 'Angra',
          'type': 'artist',
          'uri': 'spotify:artist:7IAXZaLTb6nkJr8RmVPn5y'
        }],
        'available_markets': ['AD', 'AE', 'AL', 'AR', 'AU', 'BA', 'BE', 'BG', 'BH', 'BO', 'BR', 'BY', 'CA', 'CH', 'CL', 'CO', 'CR', 'CY', 'CZ', 'DK', 'DO', 'DZ', 'EC', 'EE', 'EG', 'FI', 'GB', 'GR', 'GT', 'HK', 'HN', 'HR', 'HU', 'IE', 'IL', 'IN', 'IS', 'JO', 'KW', 'KZ', 'LB', 'LI', 'LT', 'LU', 'LV', 'MA', 'MC', 'MD', 'ME', 'MK', 'MT', 'MX', 'MY', 'NI', 'NO', 'NZ', 'OM', 'PA', 'PE', 'PH', 'PL', 'PS', 'PY', 'QA', 'RO', 'RS', 'RU', 'SA', 'SE', 'SI', 'SK', 'SV', 'TH', 'TN', 'TR', 'TW', 'UA', 'US', 'UY', 'VN', 'XK', 'ZA'],
        'external_urls': {
          'spotify': 'https://open.spotify.com/album/2Gs5diTDcNvlzMIzvMAwfo'
        },
        'href': 'https://api.spotify.com/v1/albums/2Gs5diTDcNvlzMIzvMAwfo',
        'id': '2Gs5diTDcNvlzMIzvMAwfo',
        'images': [{
          'height': 640,
          'url': 'https://i.scdn.co/image/ab67616d0000b27366703ccacc13949d037fba7b',
          'width': 640
        }, {
          'height': 300,
          'url': 'https://i.scdn.co/image/ab67616d00001e0266703ccacc13949d037fba7b',
          'width': 300
        }, {
          'height': 64,
          'url': 'https://i.scdn.co/image/ab67616d0000485166703ccacc13949d037fba7b',
          'width': 64
        }],
        'name': 'Aqua',
        'release_date': '2010',
        'release_date_precision': 'year',
        'total_tracks': 10,
        'type': 'album',
        'uri': 'spotify:album:2Gs5diTDcNvlzMIzvMAwfo'
      }, {
        'album_group': 'album',
        'album_type': 'album',
        'artists': [{
          'external_urls': {
            'spotify': 'https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y'
          },
          'href': 'https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y',
          'id': '7IAXZaLTb6nkJr8RmVPn5y',
          'name': 'Angra',
          'type': 'artist',
          'uri': 'spotify:artist:7IAXZaLTb6nkJr8RmVPn5y'
        }],
        'available_markets': ['AD', 'AE', 'AL', 'AR', 'AT', 'AU', 'BA', 'BE', 'BG', 'BH', 'BO', 'BR', 'BY', 'CA', 'CH', 'CL', 'CO', 'CR', 'CY', 'CZ', 'DE', 'DK', 'DO', 'DZ', 'EC', 'EE', 'EG', 'ES', 'FI', 'FR', 'GB', 'GR', 'GT', 'HK', 'HN', 'HR', 'HU', 'ID', 'IE', 'IL', 'IN', 'IS', 'IT', 'JO', 'JP', 'KW', 'KZ', 'LB', 'LI', 'LT', 'LU', 'LV', 'MA', 'MC', 'MD', 'ME', 'MK', 'MT', 'MX', 'MY', 'NI', 'NL', 'NO', 'NZ', 'OM', 'PA', 'PE', 'PH', 'PL', 'PS', 'PT', 'PY', 'QA', 'RO', 'RS', 'RU', 'SA', 'SE', 'SG', 'SI', 'SK', 'SV', 'TH', 'TN', 'TR', 'TW', 'UA', 'US', 'UY', 'VN', 'XK', 'ZA'],
        'external_urls': {
          'spotify': 'https://open.spotify.com/album/2cJQ62cj3fFpGlZh2THeEB'
        },
        'href': 'https://api.spotify.com/v1/albums/2cJQ62cj3fFpGlZh2THeEB',
        'id': '2cJQ62cj3fFpGlZh2THeEB',
        'images': [{
          'height': 640,
          'url': 'https://i.scdn.co/image/ab67616d0000b2738bbbed0c99c967eec65f864e',
          'width': 640
        }, {
          'height': 300,
          'url': 'https://i.scdn.co/image/ab67616d00001e028bbbed0c99c967eec65f864e',
          'width': 300
        }, {
          'height': 64,
          'url': 'https://i.scdn.co/image/ab67616d000048518bbbed0c99c967eec65f864e',
          'width': 64
        }],
        'name': 'Aurora Consurgens',
        'release_date': '2006-10-27',
        'release_date_precision': 'day',
        'total_tracks': 10,
        'type': 'album',
        'uri': 'spotify:album:2cJQ62cj3fFpGlZh2THeEB'
      }, {
        'album_group': 'album',
        'album_type': 'album',
        'artists': [{
          'external_urls': {
            'spotify': 'https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y'
          },
          'href': 'https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y',
          'id': '7IAXZaLTb6nkJr8RmVPn5y',
          'name': 'Angra',
          'type': 'artist',
          'uri': 'spotify:artist:7IAXZaLTb6nkJr8RmVPn5y'
        }],
        'available_markets': ['JP'],
        'external_urls': {
          'spotify': 'https://open.spotify.com/album/00gKRmwfnKPZo3X9cyCcMK'
        },
        'href': 'https://api.spotify.com/v1/albums/00gKRmwfnKPZo3X9cyCcMK',
        'id': '00gKRmwfnKPZo3X9cyCcMK',
        'images': [{
          'height': 640,
          'url': 'https://i.scdn.co/image/ab67616d0000b2735bce4bae74f911ab8ccf2728',
          'width': 640
        }, {
          'height': 300,
          'url': 'https://i.scdn.co/image/ab67616d00001e025bce4bae74f911ab8ccf2728',
          'width': 300
        }, {
          'height': 64,
          'url': 'https://i.scdn.co/image/ab67616d000048515bce4bae74f911ab8ccf2728',
          'width': 64
        }],
        'name': 'Aurora Consurgens',
        'release_date': '2006-10-25',
        'release_date_precision': 'day',
        'total_tracks': 11,
        'type': 'album',
        'uri': 'spotify:album:00gKRmwfnKPZo3X9cyCcMK'
      }, {
        'album_group': 'album',
        'album_type': 'album',
        'artists': [{
          'external_urls': {
            'spotify': 'https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y'
          },
          'href': 'https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y',
          'id': '7IAXZaLTb6nkJr8RmVPn5y',
          'name': 'Angra',
          'type': 'artist',
          'uri': 'spotify:artist:7IAXZaLTb6nkJr8RmVPn5y'
        }],
        'available_markets': ['AD', 'AL', 'AT', 'BA', 'BE', 'BG', 'BY', 'CH', 'CZ', 'DE', 'DK', 'EE', 'ES', 'FI', 'FR', 'GB', 'GR', 'HR', 'HU', 'IE', 'IS', 'IT', 'KZ', 'LI', 'LT', 'LU', 'LV', 'MC', 'MD', 'MK', 'MT', 'NL', 'NO', 'PL', 'PT', 'RO', 'SE', 'SI', 'SK', 'UA'],
        'external_urls': {
          'spotify': 'https://open.spotify.com/album/0Nt9cqhrIFxVh113ic2XE8'
        },
        'href': 'https://api.spotify.com/v1/albums/0Nt9cqhrIFxVh113ic2XE8',
        'id': '0Nt9cqhrIFxVh113ic2XE8',
        'images': [{
          'height': 640,
          'url': 'https://i.scdn.co/image/ab67616d0000b273c44b245d9dda187d944ae9eb',
          'width': 640
        }, {
          'height': 300,
          'url': 'https://i.scdn.co/image/ab67616d00001e02c44b245d9dda187d944ae9eb',
          'width': 300
        }, {
          'height': 64,
          'url': 'https://i.scdn.co/image/ab67616d00004851c44b245d9dda187d944ae9eb',
          'width': 64
        }],
        'name': 'Temple of Shadows',
        'release_date': '2005-01-11',
        'release_date_precision': 'day',
        'total_tracks': 13,
        'type': 'album',
        'uri': 'spotify:album:0Nt9cqhrIFxVh113ic2XE8'
      }],
      'limit': 20,
      'next': 'https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y/albums?offset=20&limit=20&include_groups=album,single,compilation,appears_on',
      'offset': 0,
      'previous': null,
      'total': 50
    };

    spyOn(artistService, 'getArtist').and.returnValue(of(responseArtist));
    spyOn(artistService, 'getArtistTopTracks').and.returnValue(of(responseTracks));
    spyOn(artistService, 'getArtistRelated').and.returnValue(of(responseRelated));
    spyOn(artistService, 'getArtistAlbums').and.returnValue(of(responseAlbum));

    component.getAllInfoFromArtist();

    fixture.detectChanges();
    expect(component.artist).toEqual(responseArtist);
  });
});
