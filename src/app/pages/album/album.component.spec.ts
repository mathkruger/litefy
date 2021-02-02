import { SpotifyAlbumService } from './../../services/spotify-album.service';
import { AppModule } from './../../app.module';
import { waitForAsync, ComponentFixture, inject, TestBed } from '@angular/core/testing';


import { AlbumComponent } from './album.component';
import { of } from 'rxjs/internal/observable/of';

describe('AlbumComponent', () => {
  let component: AlbumComponent;
  let fixture: ComponentFixture<AlbumComponent>;
  let albumService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AlbumComponent],
      imports: [AppModule]
    })
      .compileComponents();
  }));

  beforeEach(inject([SpotifyAlbumService], s => {
    albumService = s;
    fixture = TestBed.createComponent(AlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get an album', () => {
    const response: SpotifyApi.SingleAlbumResponse = {
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
      'available_markets': ['AD', 'AE', 'AL', 'AR', 'AT', 'AU', 'BA', 'BE', 'BG', 'BH', 'BO', 'BR',
        'BY', 'CA', 'CH', 'CL', 'CO', 'CR', 'CY', 'CZ', 'DE', 'DK', 'DO', 'DZ', 'EC', 'EE', 'EG', 'ES',
        'FI', 'FR', 'GB', 'GR', 'GT', 'HK', 'HN', 'HR', 'HU', 'ID', 'IE', 'IL', 'IN', 'IS', 'IT',
        'JO', 'JP', 'KW', 'KZ', 'LB', 'LI', 'LT', 'LU', 'LV', 'MA', 'MC', 'MD', 'ME', 'MK', 'MT',
        'MX', 'MY', 'NI', 'NL', 'NO', 'NZ', 'OM', 'PA', 'PE', 'PH', 'PL', 'PS', 'PT', 'PY', 'QA',
        'RO', 'RS', 'RU', 'SA', 'SE', 'SG', 'SI', 'SK', 'SV', 'TH', 'TN', 'TR', 'TW', 'UA', 'US',
        'UY', 'VN', 'XK', 'ZA'],
      'copyrights': [{
        'text': '2016 Angra',
        'type': 'C'
      }],
      'external_ids': {
        'upc': '191061558569'
      },
      'external_urls': {
        'spotify': 'https://open.spotify.com/album/2J1e7x33Aejx7KFmVbgoGW'
      },
      'genres': [],
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
      'label': 'Angra',
      'name': 'Temple of Shadows',
      'popularity': 51,
      'release_date': '2004-11-15',
      'release_date_precision': 'day',
      'tracks': {
        'href': 'https://api.spotify.com/v1/albums/2J1e7x33Aejx7KFmVbgoGW/tracks?offset=0&limit=50',
        'items': [{
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
          'available_markets': ['AD', 'AE', 'AL', 'AR', 'AT', 'AU', 'BA', 'BE', 'BG', 'BH', 'BO', 'BR',
            'BY', 'CA', 'CH', 'CL', 'CO', 'CR', 'CY', 'CZ', 'DE', 'DK', 'DO', 'DZ', 'EC', 'EE', 'EG',
            'ES', 'FI', 'FR', 'GB', 'GR', 'GT', 'HK', 'HN', 'HR', 'HU', 'ID', 'IE', 'IL', 'IN', 'IS',
            'IT', 'JO', 'JP', 'KW', 'KZ', 'LB', 'LI', 'LT', 'LU', 'LV', 'MA', 'MC', 'MD', 'ME', 'MK',
            'MT', 'MX', 'MY', 'NI', 'NL', 'NO', 'NZ', 'OM', 'PA', 'PE', 'PH', 'PL', 'PS', 'PT', 'PY',
            'QA', 'RO', 'RS', 'RU', 'SA', 'SE', 'SG', 'SI', 'SK', 'SV', 'TH', 'TN', 'TR', 'TW', 'UA',
            'US', 'UY', 'VN', 'XK', 'ZA'],
          'disc_number': 1,
          'duration_ms': 54186,
          'explicit': false,
          'external_urls': {
            'spotify': 'https://open.spotify.com/track/5eYkFRuIHGaZZXUnBbsF0D'
          },
          'href': 'https://api.spotify.com/v1/tracks/5eYkFRuIHGaZZXUnBbsF0D',
          'id': '5eYkFRuIHGaZZXUnBbsF0D',
          'name': 'Deus Le Volt!',
          'preview_url': 'https://p.scdn.co/mp3-preview/2482dd4b523629361040c032abb11513abde5cac?cid=d2efaa241b0140e1b3cec365631430a7',
          'track_number': 1,
          'type': 'track',
          'uri': 'spotify:track:5eYkFRuIHGaZZXUnBbsF0D'
        }, {
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
          'disc_number': 1,
          'duration_ms': 267373,
          'explicit': false,
          'external_urls': {
            'spotify': 'https://open.spotify.com/track/4I9j55n6CXUTfcV6RfcX5A'
          },
          'href': 'https://api.spotify.com/v1/tracks/4I9j55n6CXUTfcV6RfcX5A',
          'id': '4I9j55n6CXUTfcV6RfcX5A',
          'name': 'Spread Your Fire',
          'preview_url': 'https://p.scdn.co/mp3-preview/8a62fade1987d9d469a9230464a307f80e5943ee?cid=d2efaa241b0140e1b3cec365631430a7',
          'track_number': 2,
          'type': 'track',
          'uri': 'spotify:track:4I9j55n6CXUTfcV6RfcX5A'
        }, {
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
          'disc_number': 1,
          'duration_ms': 252933,
          'explicit': false,
          'external_urls': {
            'spotify': 'https://open.spotify.com/track/07Wh8AHhvJssF7Sn7X6aQP'
          },
          'href': 'https://api.spotify.com/v1/tracks/07Wh8AHhvJssF7Sn7X6aQP',
          'id': '07Wh8AHhvJssF7Sn7X6aQP',
          'name': 'Angels and Demons',
          'preview_url': 'https://p.scdn.co/mp3-preview/22522c47b78d352815563c58b85864e5adcd4ee9?cid=d2efaa241b0140e1b3cec365631430a7',
          'track_number': 3,
          'type': 'track',
          'uri': 'spotify:track:07Wh8AHhvJssF7Sn7X6aQP'
        }, {
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
          'disc_number': 1,
          'duration_ms': 297173,
          'explicit': false,
          'external_urls': {
            'spotify': 'https://open.spotify.com/track/0zliAIq64I0K68Jpy2uCga'
          },
          'href': 'https://api.spotify.com/v1/tracks/0zliAIq64I0K68Jpy2uCga',
          'id': '0zliAIq64I0K68Jpy2uCga',
          'name': 'Waiting Silence',
          'preview_url': 'https://p.scdn.co/mp3-preview/a131edf24379d1ff2ec29e274e3dd2a78f60b1e1?cid=d2efaa241b0140e1b3cec365631430a7',
          'track_number': 4,
          'type': 'track',
          'uri': 'spotify:track:0zliAIq64I0K68Jpy2uCga'
        }, {
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
          'disc_number': 1,
          'duration_ms': 241573,
          'explicit': false,
          'external_urls': {
            'spotify': 'https://open.spotify.com/track/5DrkawyIGaFlnWqDqZwuEe'
          },
          'href': 'https://api.spotify.com/v1/tracks/5DrkawyIGaFlnWqDqZwuEe',
          'id': '5DrkawyIGaFlnWqDqZwuEe',
          'name': 'Wishing Well',
          'preview_url': 'https://p.scdn.co/mp3-preview/e6d3088e53a2f9de67b7a4dfd3ea5abd7acd4b47?cid=d2efaa241b0140e1b3cec365631430a7',
          'track_number': 5,
          'type': 'track',
          'uri': 'spotify:track:5DrkawyIGaFlnWqDqZwuEe'
        }, {
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
          'disc_number': 1,
          'duration_ms': 315440,
          'explicit': false,
          'external_urls': {
            'spotify': 'https://open.spotify.com/track/02fRcwuJ1JGrthFULV03th'
          },
          'href': 'https://api.spotify.com/v1/tracks/02fRcwuJ1JGrthFULV03th',
          'id': '02fRcwuJ1JGrthFULV03th',
          'name': 'The Temple of Hate',
          'preview_url': 'https://p.scdn.co/mp3-preview/1919823ea2881f80cb013de208bc1006d9a13a20?cid=d2efaa241b0140e1b3cec365631430a7',
          'track_number': 6,
          'type': 'track',
          'uri': 'spotify:track:02fRcwuJ1JGrthFULV03th'
        }, {
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
          'disc_number': 1,
          'duration_ms': 488493,
          'explicit': false,
          'external_urls': {
            'spotify': 'https://open.spotify.com/track/3tMOHXczJyzFCitFAjLUY7'
          },
          'href': 'https://api.spotify.com/v1/tracks/3tMOHXczJyzFCitFAjLUY7',
          'id': '3tMOHXczJyzFCitFAjLUY7',
          'name': 'The Shadow Hunter',
          'preview_url': 'https://p.scdn.co/mp3-preview/0ef5ba6109f76f57483a758a5aa25c393fe707b5?cid=d2efaa241b0140e1b3cec365631430a7',
          'track_number': 7,
          'type': 'track',
          'uri': 'spotify:track:3tMOHXczJyzFCitFAjLUY7'
        }, {
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
          'disc_number': 1,
          'duration_ms': 307360,
          'explicit': false,
          'external_urls': {
            'spotify': 'https://open.spotify.com/track/4c32lu5t3cEcXDl0sbbkbn'
          },
          'href': 'https://api.spotify.com/v1/tracks/4c32lu5t3cEcXDl0sbbkbn',
          'id': '4c32lu5t3cEcXDl0sbbkbn',
          'name': 'No Pain for the Dead',
          'preview_url': 'https://p.scdn.co/mp3-preview/2df4a1b59021be2b73784a05f88448249db2fffb?cid=d2efaa241b0140e1b3cec365631430a7',
          'track_number': 8,
          'type': 'track',
          'uri': 'spotify:track:4c32lu5t3cEcXDl0sbbkbn'
        }, {
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
          'disc_number': 1,
          'duration_ms': 418346,
          'explicit': false,
          'external_urls': {
            'spotify': 'https://open.spotify.com/track/2yWl2rW3ews5FmruYnVIOZ'
          },
          'href': 'https://api.spotify.com/v1/tracks/2yWl2rW3ews5FmruYnVIOZ',
          'id': '2yWl2rW3ews5FmruYnVIOZ',
          'name': 'Winds of Destination',
          'preview_url': 'https://p.scdn.co/mp3-preview/15a0d406c3df973547e19bdda4c6e4cf24cc6b28?cid=d2efaa241b0140e1b3cec365631430a7',
          'track_number': 9,
          'type': 'track',
          'uri': 'spotify:track:2yWl2rW3ews5FmruYnVIOZ'
        }, {
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
          'disc_number': 1,
          'duration_ms': 311253,
          'explicit': false,
          'external_urls': {
            'spotify': 'https://open.spotify.com/track/2CJpGsBc0YVXNhJFF9pOXW'
          },
          'href': 'https://api.spotify.com/v1/tracks/2CJpGsBc0YVXNhJFF9pOXW',
          'id': '2CJpGsBc0YVXNhJFF9pOXW',
          'name': 'Sprouts of Time',
          'preview_url': 'https://p.scdn.co/mp3-preview/e818152e636eca490b8b177bfb6a6207ba9df310?cid=d2efaa241b0140e1b3cec365631430a7',
          'track_number': 10,
          'type': 'track',
          'uri': 'spotify:track:2CJpGsBc0YVXNhJFF9pOXW'
        }, {
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
          'disc_number': 1,
          'duration_ms': 461466,
          'explicit': false,
          'external_urls': {
            'spotify': 'https://open.spotify.com/track/5EEMizxBSufXnb4Lbr5w1i'
          },
          'href': 'https://api.spotify.com/v1/tracks/5EEMizxBSufXnb4Lbr5w1i',
          'id': '5EEMizxBSufXnb4Lbr5w1i',
          'name': 'Morning Star',
          'preview_url': 'https://p.scdn.co/mp3-preview/01c64e5514f8bc6d2d8d8c02936f33741f1319c5?cid=d2efaa241b0140e1b3cec365631430a7',
          'track_number': 11,
          'type': 'track',
          'uri': 'spotify:track:5EEMizxBSufXnb4Lbr5w1i'
        }, {
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
          'disc_number': 1,
          'duration_ms': 297346,
          'explicit': false,
          'external_urls': {
            'spotify': 'https://open.spotify.com/track/5t1QeMUH5z0mzTUZM79inL'
          },
          'href': 'https://api.spotify.com/v1/tracks/5t1QeMUH5z0mzTUZM79inL',
          'id': '5t1QeMUH5z0mzTUZM79inL',
          'name': 'Late Redemption',
          'preview_url': 'https://p.scdn.co/mp3-preview/ae42dc7a188fce75d872ab718fc7d4a7e02f7aa4?cid=d2efaa241b0140e1b3cec365631430a7',
          'track_number': 12,
          'type': 'track',
          'uri': 'spotify:track:5t1QeMUH5z0mzTUZM79inL'
        }, {
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
          'disc_number': 1,
          'duration_ms': 305586,
          'explicit': false,
          'external_urls': {
            'spotify': 'https://open.spotify.com/track/0pNv82mKuhd0FtziticHSa'
          },
          'href': 'https://api.spotify.com/v1/tracks/0pNv82mKuhd0FtziticHSa',
          'id': '0pNv82mKuhd0FtziticHSa',
          'name': 'Gate XIII',
          'preview_url': 'https://p.scdn.co/mp3-preview/7e20cf77a76397ca3fbae4ecc75e641484dff50f?cid=d2efaa241b0140e1b3cec365631430a7',
          'track_number': 13,
          'type': 'track',
          'uri': 'spotify:track:0pNv82mKuhd0FtziticHSa'
        }],
        'limit': 50,
        'next': null,
        'offset': 0,
        'previous': null,
        'total': 13
      },
      'type': 'album',
      'uri': 'spotify:album:2J1e7x33Aejx7KFmVbgoGW'
    };

    spyOn(albumService, 'getAlbum').and.returnValue(of(response));
    component.getAlbum('2J1e7x33Aejx7KFmVbgoGW');

    fixture.detectChanges();
    expect(component.album).toEqual(response);
  });
});
