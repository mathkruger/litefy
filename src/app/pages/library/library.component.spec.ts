import { User } from './../../models/user';
import { AppModule } from './../../app.module';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryComponent } from './library.component';
import { SpotifyUserService } from 'src/app/services/spotify-user.service';
import { UserService } from 'src/app/services/user.service';
import { of } from 'rxjs';

describe('LibraryComponent', () => {
  let component: LibraryComponent;
  let fixture: ComponentFixture<LibraryComponent>;
  let userService;
  let usuarioLogadoService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LibraryComponent],
      imports: [AppModule]
    })
      .compileComponents();
  }));

  beforeEach(inject([SpotifyUserService, UserService], (s, l) => {
    userService = s;
    usuarioLogadoService = l;

    fixture = TestBed.createComponent(LibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get user library', () => {
    const userPlaylists = {
      "href" : "https://api.spotify.com/v1/users/ms-kruger/playlists?offset=0&limit=50",
      "items" : [ {
        "collaborative" : false,
        "description" : "",
        "external_urls" : {
          "spotify" : "https://open.spotify.com/playlist/5JCu997lT5No0YkitpHbUm"
        },
        "href" : "https://api.spotify.com/v1/playlists/5JCu997lT5No0YkitpHbUm",
        "id" : "5JCu997lT5No0YkitpHbUm",
        "images" : [ {
          "height" : 640,
          "url" : "https://mosaic.scdn.co/640/ab67616d0000b27303ed1d4ad1d0ce2907f3270dab67616d0000b2731a5d37302f8d8c56dc44fa3aab67616d0000b2735a589614f6a4fc6b829a1508ab67616d0000b273b0c735c256520fd53a5980c6",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://mosaic.scdn.co/300/ab67616d0000b27303ed1d4ad1d0ce2907f3270dab67616d0000b2731a5d37302f8d8c56dc44fa3aab67616d0000b2735a589614f6a4fc6b829a1508ab67616d0000b273b0c735c256520fd53a5980c6",
          "width" : 300
        }, {
          "height" : 60,
          "url" : "https://mosaic.scdn.co/60/ab67616d0000b27303ed1d4ad1d0ce2907f3270dab67616d0000b2731a5d37302f8d8c56dc44fa3aab67616d0000b2735a589614f6a4fc6b829a1508ab67616d0000b273b0c735c256520fd53a5980c6",
          "width" : 60
        } ],
        "name" : "Gather Vocal Band — Best Of The Gaither Vocal Band",
        "owner" : {
          "display_name" : "linneafast",
          "external_urls" : {
            "spotify" : "https://open.spotify.com/user/linneafast"
          },
          "href" : "https://api.spotify.com/v1/users/linneafast",
          "id" : "linneafast",
          "type" : "user",
          "uri" : "spotify:user:linneafast"
        },
        "primary_color" : null,
        "public" : true,
        "snapshot_id" : "MyxjMGVkMmUzMGRlOTA1ZDgyODk4YTVlODc0NjY4ODY5Mjg4ZDMwZjJm",
        "tracks" : {
          "href" : "https://api.spotify.com/v1/playlists/5JCu997lT5No0YkitpHbUm/tracks",
          "total" : 12
        },
        "type" : "playlist",
        "uri" : "spotify:playlist:5JCu997lT5No0YkitpHbUm"
      }, {
        "collaborative" : false,
        "description" : "This is Gaither Vocal Band. Todos os maiores hits em uma só playlist.",
        "external_urls" : {
          "spotify" : "https://open.spotify.com/playlist/37i9dQZF1DZ06evO0aKTbP"
        },
        "href" : "https://api.spotify.com/v1/playlists/37i9dQZF1DZ06evO0aKTbP",
        "id" : "37i9dQZF1DZ06evO0aKTbP",
        "images" : [ {
          "height" : null,
          "url" : "https://thisis-images.scdn.co/37i9dQZF1DZ06evO0aKTbP-large.jpg",
          "width" : null
        } ],
        "name" : "This Is Gaither Vocal Band",
        "owner" : {
          "display_name" : "Spotify",
          "external_urls" : {
            "spotify" : "https://open.spotify.com/user/spotify"
          },
          "href" : "https://api.spotify.com/v1/users/spotify",
          "id" : "spotify",
          "type" : "user",
          "uri" : "spotify:user:spotify"
        },
        "primary_color" : null,
        "public" : true,
        "snapshot_id" : "MjY4NjM3ODMsMDAwMDAwMDA4ZmRiY2UwNzg2MjgzYjk3YTI1NWQ1ODA1YmU3M2E0NQ==",
        "tracks" : {
          "href" : "https://api.spotify.com/v1/playlists/37i9dQZF1DZ06evO0aKTbP/tracks",
          "total" : 50
        },
        "type" : "playlist",
        "uri" : "spotify:playlist:37i9dQZF1DZ06evO0aKTbP"
      }, {
        "collaborative" : false,
        "description" : "",
        "external_urls" : {
          "spotify" : "https://open.spotify.com/playlist/7iIcIl2r4exNdkKIyPwsfT"
        },
        "href" : "https://api.spotify.com/v1/playlists/7iIcIl2r4exNdkKIyPwsfT",
        "id" : "7iIcIl2r4exNdkKIyPwsfT",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b2736ff59d18c018a2845758deed",
          "width" : 640
        } ],
        "name" : "Frozen",
        "owner" : {
          "display_name" : "Matheus Silva Kruger",
          "external_urls" : {
            "spotify" : "https://open.spotify.com/user/ms-kruger"
          },
          "href" : "https://api.spotify.com/v1/users/ms-kruger",
          "id" : "ms-kruger",
          "type" : "user",
          "uri" : "spotify:user:ms-kruger"
        },
        "primary_color" : null,
        "public" : true,
        "snapshot_id" : "MTksZGFmZGE5YTU2NGRiZGM4MTZjMDFjMzA3NTA2YjljOTg2ZjJhMmViMQ==",
        "tracks" : {
          "href" : "https://api.spotify.com/v1/playlists/7iIcIl2r4exNdkKIyPwsfT/tracks",
          "total" : 9
        },
        "type" : "playlist",
        "uri" : "spotify:playlist:7iIcIl2r4exNdkKIyPwsfT"
      }, {
        "collaborative" : false,
        "description" : "Minha adolescência resumida em músicas ... Saudades!",
        "external_urls" : {
          "spotify" : "https://open.spotify.com/playlist/2EeHTtWENllbW68fXiOXyQ"
        },
        "href" : "https://api.spotify.com/v1/playlists/2EeHTtWENllbW68fXiOXyQ",
        "id" : "2EeHTtWENllbW68fXiOXyQ",
        "images" : [ {
          "height" : 640,
          "url" : "https://mosaic.scdn.co/640/ab67616d0000b2737f329fe2f47d2c4abb121986ab67616d0000b273a221e98b84122f233ebe2e81ab67616d0000b273a7292b6863258e889b78d787ab67616d0000b273fb41d8226239a35d2facf4b6",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://mosaic.scdn.co/300/ab67616d0000b2737f329fe2f47d2c4abb121986ab67616d0000b273a221e98b84122f233ebe2e81ab67616d0000b273a7292b6863258e889b78d787ab67616d0000b273fb41d8226239a35d2facf4b6",
          "width" : 300
        }, {
          "height" : 60,
          "url" : "https://mosaic.scdn.co/60/ab67616d0000b2737f329fe2f47d2c4abb121986ab67616d0000b273a221e98b84122f233ebe2e81ab67616d0000b273a7292b6863258e889b78d787ab67616d0000b273fb41d8226239a35d2facf4b6",
          "width" : 60
        } ],
        "name" : "Teenage Fellings",
        "owner" : {
          "display_name" : "Matheus Silva Kruger",
          "external_urls" : {
            "spotify" : "https://open.spotify.com/user/ms-kruger"
          },
          "href" : "https://api.spotify.com/v1/users/ms-kruger",
          "id" : "ms-kruger",
          "type" : "user",
          "uri" : "spotify:user:ms-kruger"
        },
        "primary_color" : null,
        "public" : true,
        "snapshot_id" : "NTUsNTc1YTM2NjllMWNhODMzYzRjNGMwZmI4NjYyMGM0NDM2YmRhYjQ0Yw==",
        "tracks" : {
          "href" : "https://api.spotify.com/v1/playlists/2EeHTtWENllbW68fXiOXyQ/tracks",
          "total" : 51
        },
        "type" : "playlist",
        "uri" : "spotify:playlist:2EeHTtWENllbW68fXiOXyQ"
      }, {
        "collaborative" : false,
        "description" : "",
        "external_urls" : {
          "spotify" : "https://open.spotify.com/playlist/2Ey9gOELtKHW8AE26x8oYO"
        },
        "href" : "https://api.spotify.com/v1/playlists/2Ey9gOELtKHW8AE26x8oYO",
        "id" : "2Ey9gOELtKHW8AE26x8oYO",
        "images" : [ {
          "height" : 640,
          "url" : "https://mosaic.scdn.co/640/ab67616d0000b2732277bb90c118b76d2f9bd74fab67616d0000b2736b45ad25cf61f99234881346ab67616d0000b273caaa456c44f69f10c8b2aa53ab67616d0000b273cdac19bbaee5cc123edcc26f",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://mosaic.scdn.co/300/ab67616d0000b2732277bb90c118b76d2f9bd74fab67616d0000b2736b45ad25cf61f99234881346ab67616d0000b273caaa456c44f69f10c8b2aa53ab67616d0000b273cdac19bbaee5cc123edcc26f",
          "width" : 300
        }, {
          "height" : 60,
          "url" : "https://mosaic.scdn.co/60/ab67616d0000b2732277bb90c118b76d2f9bd74fab67616d0000b2736b45ad25cf61f99234881346ab67616d0000b273caaa456c44f69f10c8b2aa53ab67616d0000b273cdac19bbaee5cc123edcc26f",
          "width" : 60
        } ],
        "name" : "Liked from Radio",
        "owner" : {
          "display_name" : "Matheus Silva Kruger",
          "external_urls" : {
            "spotify" : "https://open.spotify.com/user/ms-kruger"
          },
          "href" : "https://api.spotify.com/v1/users/ms-kruger",
          "id" : "ms-kruger",
          "type" : "user",
          "uri" : "spotify:user:ms-kruger"
        },
        "primary_color" : null,
        "public" : true,
        "snapshot_id" : "MTAsMTdiNGU0MmYyZThmYWQyZDYwMzQ2Y2I3MGU3MGU3NDUzMzAxNzA3Nw==",
        "tracks" : {
          "href" : "https://api.spotify.com/v1/playlists/2Ey9gOELtKHW8AE26x8oYO/tracks",
          "total" : 9
        },
        "type" : "playlist",
        "uri" : "spotify:playlist:2Ey9gOELtKHW8AE26x8oYO"
      }, {
        "collaborative" : false,
        "description" : "",
        "external_urls" : {
          "spotify" : "https://open.spotify.com/playlist/3C5YvQt7D4j9jM0XK5AX49"
        },
        "href" : "https://api.spotify.com/v1/playlists/3C5YvQt7D4j9jM0XK5AX49",
        "id" : "3C5YvQt7D4j9jM0XK5AX49",
        "images" : [ {
          "height" : 640,
          "url" : "https://mosaic.scdn.co/640/ab67616d0000b27339c7984e3da3664f6b1e6f6aab67616d0000b27356c868c8c85e7e4e62bd9ec1ab67616d0000b273601c5174eb7d0073bb79764fab67616d0000b273bf10ac06751e59d5b7a15171",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://mosaic.scdn.co/300/ab67616d0000b27339c7984e3da3664f6b1e6f6aab67616d0000b27356c868c8c85e7e4e62bd9ec1ab67616d0000b273601c5174eb7d0073bb79764fab67616d0000b273bf10ac06751e59d5b7a15171",
          "width" : 300
        }, {
          "height" : 60,
          "url" : "https://mosaic.scdn.co/60/ab67616d0000b27339c7984e3da3664f6b1e6f6aab67616d0000b27356c868c8c85e7e4e62bd9ec1ab67616d0000b273601c5174eb7d0073bb79764fab67616d0000b273bf10ac06751e59d5b7a15171",
          "width" : 60
        } ],
        "name" : "Acalmando os nervos",
        "owner" : {
          "display_name" : "Matheus Silva Kruger",
          "external_urls" : {
            "spotify" : "https://open.spotify.com/user/ms-kruger"
          },
          "href" : "https://api.spotify.com/v1/users/ms-kruger",
          "id" : "ms-kruger",
          "type" : "user",
          "uri" : "spotify:user:ms-kruger"
        },
        "primary_color" : null,
        "public" : true,
        "snapshot_id" : "MzgsNWE0YmYzNWFiNzUxMWFlOTIxNjZjNjJhZmI1M2U3ZGEyNWYyNjg5Ng==",
        "tracks" : {
          "href" : "https://api.spotify.com/v1/playlists/3C5YvQt7D4j9jM0XK5AX49/tracks",
          "total" : 35
        },
        "type" : "playlist",
        "uri" : "spotify:playlist:3C5YvQt7D4j9jM0XK5AX49"
      } ],
      "limit" : 50,
      "next" : null,
      "offset" : 0,
      "previous" : null,
      "total" : 6
    };
    const userAlbums = {
      "href" : "https://api.spotify.com/v1/me/albums?offset=0&limit=50",
      "items" : [ {
        "added_at" : "2020-02-27T20:49:18Z",
        "album" : {
          "album_type" : "compilation",
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/0LyfQWJT6nXafLPZqxe9Of"
            },
            "href" : "https://api.spotify.com/v1/artists/0LyfQWJT6nXafLPZqxe9Of",
            "id" : "0LyfQWJT6nXafLPZqxe9Of",
            "name" : "Vários intérpretes",
            "type" : "artist",
            "uri" : "spotify:artist:0LyfQWJT6nXafLPZqxe9Of"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
          "copyrights" : [ {
            "text" : "© 2006 Walt Disney Records/Pixar",
            "type" : "C"
          }, {
            "text" : "This Compilation ℗ 2006 Disney Enterprises, Inc./Pixar",
            "type" : "P"
          } ],
          "external_ids" : {
            "upc" : "00050087349707"
          },
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/3Xiz5kq12VOzTw9Kun7m0f"
          },
          "genres" : [ ],
          "href" : "https://api.spotify.com/v1/albums/3Xiz5kq12VOzTw9Kun7m0f",
          "id" : "3Xiz5kq12VOzTw9Kun7m0f",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b273a73bb6afa8cb999aafb3c150",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e02a73bb6afa8cb999aafb3c150",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d00004851a73bb6afa8cb999aafb3c150",
            "width" : 64
          } ],
          "label" : "Walt Disney Records",
          "name" : "Cars (Original Motion Picture Soundtrack)",
          "popularity" : 63,
          "release_date" : "2006-01-01",
          "release_date_precision" : "day",
          "total_tracks" : 20,
          "tracks" : {
            "href" : "https://api.spotify.com/v1/albums/3Xiz5kq12VOzTw9Kun7m0f/tracks?offset=0&limit=50",
            "items" : [ {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/4TKTii6gnOnUXQHyuo9JaD"
                },
                "href" : "https://api.spotify.com/v1/artists/4TKTii6gnOnUXQHyuo9JaD",
                "id" : "4TKTii6gnOnUXQHyuo9JaD",
                "name" : "Sheryl Crow",
                "type" : "artist",
                "uri" : "spotify:artist:4TKTii6gnOnUXQHyuo9JaD"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 200733,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/45dGKmN6jw7PgK6Dw2rEp2"
              },
              "href" : "https://api.spotify.com/v1/tracks/45dGKmN6jw7PgK6Dw2rEp2",
              "id" : "45dGKmN6jw7PgK6Dw2rEp2",
              "is_local" : false,
              "name" : "Real Gone",
              "preview_url" : "https://p.scdn.co/mp3-preview/f626d50d0aadcf796d7d7dca8225e3b92e947e43?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 1,
              "type" : "track",
              "uri" : "spotify:track:45dGKmN6jw7PgK6Dw2rEp2"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/293zczrfYafIItmnmM3coR"
                },
                "href" : "https://api.spotify.com/v1/artists/293zczrfYafIItmnmM3coR",
                "id" : "293zczrfYafIItmnmM3coR",
                "name" : "Chuck Berry",
                "type" : "artist",
                "uri" : "spotify:artist:293zczrfYafIItmnmM3coR"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 170933,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/0LGF5lHk51Xa0BCJsWXrJv"
              },
              "href" : "https://api.spotify.com/v1/tracks/0LGF5lHk51Xa0BCJsWXrJv",
              "id" : "0LGF5lHk51Xa0BCJsWXrJv",
              "is_local" : false,
              "name" : "Route 66",
              "preview_url" : null,
              "track_number" : 2,
              "type" : "track",
              "uri" : "spotify:track:0LGF5lHk51Xa0BCJsWXrJv"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/0a1gHP0HAqALbEyxaD5Ngn"
                },
                "href" : "https://api.spotify.com/v1/artists/0a1gHP0HAqALbEyxaD5Ngn",
                "id" : "0a1gHP0HAqALbEyxaD5Ngn",
                "name" : "Rascal Flatts",
                "type" : "artist",
                "uri" : "spotify:artist:0a1gHP0HAqALbEyxaD5Ngn"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 275640,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/5gB2IrxOCX2j9bMnHKP38i"
              },
              "href" : "https://api.spotify.com/v1/tracks/5gB2IrxOCX2j9bMnHKP38i",
              "id" : "5gB2IrxOCX2j9bMnHKP38i",
              "is_local" : false,
              "name" : "Life is a Highway",
              "preview_url" : "https://p.scdn.co/mp3-preview/6b45df92aba4de3fce3177ae055faa9f12d0c95b?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 3,
              "type" : "track",
              "uri" : "spotify:track:5gB2IrxOCX2j9bMnHKP38i"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/13YmWQJFwgZrd4bf5IjMY4"
                },
                "href" : "https://api.spotify.com/v1/artists/13YmWQJFwgZrd4bf5IjMY4",
                "id" : "13YmWQJFwgZrd4bf5IjMY4",
                "name" : "Brad Paisley",
                "type" : "artist",
                "uri" : "spotify:artist:13YmWQJFwgZrd4bf5IjMY4"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 248960,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/6P7PgRkTCUAt2n4Lzv5pLN"
              },
              "href" : "https://api.spotify.com/v1/tracks/6P7PgRkTCUAt2n4Lzv5pLN",
              "id" : "6P7PgRkTCUAt2n4Lzv5pLN",
              "is_local" : false,
              "name" : "Behind the Clouds",
              "preview_url" : "https://p.scdn.co/mp3-preview/f4a65209ba7ca141c72c2648adf2724e4f457312?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 4,
              "type" : "track",
              "uri" : "spotify:track:6P7PgRkTCUAt2n4Lzv5pLN"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/0vn7UBvSQECKJm2817Yf1P"
                },
                "href" : "https://api.spotify.com/v1/artists/0vn7UBvSQECKJm2817Yf1P",
                "id" : "0vn7UBvSQECKJm2817Yf1P",
                "name" : "James Taylor",
                "type" : "artist",
                "uri" : "spotify:artist:0vn7UBvSQECKJm2817Yf1P"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 247400,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/72V7HVj71eNXogp7y4gfVw"
              },
              "href" : "https://api.spotify.com/v1/tracks/72V7HVj71eNXogp7y4gfVw",
              "id" : "72V7HVj71eNXogp7y4gfVw",
              "is_local" : false,
              "name" : "Our Town",
              "preview_url" : "https://p.scdn.co/mp3-preview/d490d13ff20a3c44859596656aa1b87cd942010d?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 5,
              "type" : "track",
              "uri" : "spotify:track:72V7HVj71eNXogp7y4gfVw"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/3xXSg1WJPGJuNjQV0REAzk"
                },
                "href" : "https://api.spotify.com/v1/artists/3xXSg1WJPGJuNjQV0REAzk",
                "id" : "3xXSg1WJPGJuNjQV0REAzk",
                "name" : "The Chords",
                "type" : "artist",
                "uri" : "spotify:artist:3xXSg1WJPGJuNjQV0REAzk"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 145866,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/1jeQT4ymqWO7TJr4Ei8NLz"
              },
              "href" : "https://api.spotify.com/v1/tracks/1jeQT4ymqWO7TJr4Ei8NLz",
              "id" : "1jeQT4ymqWO7TJr4Ei8NLz",
              "is_local" : false,
              "name" : "Sh-Boom",
              "preview_url" : "https://p.scdn.co/mp3-preview/75dad448828233ac7333ad0a1c73c68eb3f25a4a?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 6,
              "type" : "track",
              "uri" : "spotify:track:1jeQT4ymqWO7TJr4Ei8NLz"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/0hEurMDQu99nJRq8pTxO14"
                },
                "href" : "https://api.spotify.com/v1/artists/0hEurMDQu99nJRq8pTxO14",
                "id" : "0hEurMDQu99nJRq8pTxO14",
                "name" : "John Mayer",
                "type" : "artist",
                "uri" : "spotify:artist:0hEurMDQu99nJRq8pTxO14"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 204666,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/186e6auMzLcbHmTf19Ed60"
              },
              "href" : "https://api.spotify.com/v1/tracks/186e6auMzLcbHmTf19Ed60",
              "id" : "186e6auMzLcbHmTf19Ed60",
              "is_local" : false,
              "name" : "Route 66",
              "preview_url" : null,
              "track_number" : 7,
              "type" : "track",
              "uri" : "spotify:track:186e6auMzLcbHmTf19Ed60"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/13YmWQJFwgZrd4bf5IjMY4"
                },
                "href" : "https://api.spotify.com/v1/artists/13YmWQJFwgZrd4bf5IjMY4",
                "id" : "13YmWQJFwgZrd4bf5IjMY4",
                "name" : "Brad Paisley",
                "type" : "artist",
                "uri" : "spotify:artist:13YmWQJFwgZrd4bf5IjMY4"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 250333,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/3OCS075lQnGG3gOUI0bava"
              },
              "href" : "https://api.spotify.com/v1/tracks/3OCS075lQnGG3gOUI0bava",
              "id" : "3OCS075lQnGG3gOUI0bava",
              "is_local" : false,
              "name" : "Find Yourself",
              "preview_url" : "https://p.scdn.co/mp3-preview/819abd9690c906498b66b13506183578dbc011f4?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 8,
              "type" : "track",
              "uri" : "spotify:track:3OCS075lQnGG3gOUI0bava"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/3HQyFCFFfJO3KKBlUfZsyW"
                },
                "href" : "https://api.spotify.com/v1/artists/3HQyFCFFfJO3KKBlUfZsyW",
                "id" : "3HQyFCFFfJO3KKBlUfZsyW",
                "name" : "Randy Newman",
                "type" : "artist",
                "uri" : "spotify:artist:3HQyFCFFfJO3KKBlUfZsyW"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 124666,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/6qfba0w04MpxEIJBbu2bX0"
              },
              "href" : "https://api.spotify.com/v1/tracks/6qfba0w04MpxEIJBbu2bX0",
              "id" : "6qfba0w04MpxEIJBbu2bX0",
              "is_local" : false,
              "name" : "Opening Race",
              "preview_url" : "https://p.scdn.co/mp3-preview/5595e399457f1ac33444c51a1142ddffc04a053f?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 9,
              "type" : "track",
              "uri" : "spotify:track:6qfba0w04MpxEIJBbu2bX0"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/3HQyFCFFfJO3KKBlUfZsyW"
                },
                "href" : "https://api.spotify.com/v1/artists/3HQyFCFFfJO3KKBlUfZsyW",
                "id" : "3HQyFCFFfJO3KKBlUfZsyW",
                "name" : "Randy Newman",
                "type" : "artist",
                "uri" : "spotify:artist:3HQyFCFFfJO3KKBlUfZsyW"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 148733,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/3UcT06I6rJLUxhZDtGorCi"
              },
              "href" : "https://api.spotify.com/v1/tracks/3UcT06I6rJLUxhZDtGorCi",
              "id" : "3UcT06I6rJLUxhZDtGorCi",
              "is_local" : false,
              "name" : "McQueen's Lost",
              "preview_url" : "https://p.scdn.co/mp3-preview/ae2ed9217be2cfe2bbf2f9d2481a5b2c64b4fa45?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 10,
              "type" : "track",
              "uri" : "spotify:track:3UcT06I6rJLUxhZDtGorCi"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/1FClsNYBUoNFtGgzeG74dW"
                },
                "href" : "https://api.spotify.com/v1/artists/1FClsNYBUoNFtGgzeG74dW",
                "id" : "1FClsNYBUoNFtGgzeG74dW",
                "name" : "Hank Williams",
                "type" : "artist",
                "uri" : "spotify:artist:1FClsNYBUoNFtGgzeG74dW"
              }, {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/6LF21o9Yfj4a16Rw38Vxml"
                },
                "href" : "https://api.spotify.com/v1/artists/6LF21o9Yfj4a16Rw38Vxml",
                "id" : "6LF21o9Yfj4a16Rw38Vxml",
                "name" : "Drifting Cowboys",
                "type" : "artist",
                "uri" : "spotify:artist:6LF21o9Yfj4a16Rw38Vxml"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 144906,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/6hAy4sLkqaPQRmC6FtnxXg"
              },
              "href" : "https://api.spotify.com/v1/tracks/6hAy4sLkqaPQRmC6FtnxXg",
              "id" : "6hAy4sLkqaPQRmC6FtnxXg",
              "is_local" : false,
              "name" : "My Heart Would Know - Single Version",
              "preview_url" : null,
              "track_number" : 11,
              "type" : "track",
              "uri" : "spotify:track:6hAy4sLkqaPQRmC6FtnxXg"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/3HQyFCFFfJO3KKBlUfZsyW"
                },
                "href" : "https://api.spotify.com/v1/artists/3HQyFCFFfJO3KKBlUfZsyW",
                "id" : "3HQyFCFFfJO3KKBlUfZsyW",
                "name" : "Randy Newman",
                "type" : "artist",
                "uri" : "spotify:artist:3HQyFCFFfJO3KKBlUfZsyW"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 58800,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/6JYJgz6WMNZzoao0Uxrdx2"
              },
              "href" : "https://api.spotify.com/v1/tracks/6JYJgz6WMNZzoao0Uxrdx2",
              "id" : "6JYJgz6WMNZzoao0Uxrdx2",
              "is_local" : false,
              "name" : "Bessie",
              "preview_url" : "https://p.scdn.co/mp3-preview/2d6b18fd35086c9da7d5655b63a9e526e3736465?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 12,
              "type" : "track",
              "uri" : "spotify:track:6JYJgz6WMNZzoao0Uxrdx2"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/3HQyFCFFfJO3KKBlUfZsyW"
                },
                "href" : "https://api.spotify.com/v1/artists/3HQyFCFFfJO3KKBlUfZsyW",
                "id" : "3HQyFCFFfJO3KKBlUfZsyW",
                "name" : "Randy Newman",
                "type" : "artist",
                "uri" : "spotify:artist:3HQyFCFFfJO3KKBlUfZsyW"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 86773,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/4EFpp7sC2t0cjqSB7YWakp"
              },
              "href" : "https://api.spotify.com/v1/tracks/4EFpp7sC2t0cjqSB7YWakp",
              "id" : "4EFpp7sC2t0cjqSB7YWakp",
              "is_local" : false,
              "name" : "Dirt Is Different",
              "preview_url" : "https://p.scdn.co/mp3-preview/a154a83065a804bebeb72fc99f89cc9f30269048?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 13,
              "type" : "track",
              "uri" : "spotify:track:4EFpp7sC2t0cjqSB7YWakp"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/3HQyFCFFfJO3KKBlUfZsyW"
                },
                "href" : "https://api.spotify.com/v1/artists/3HQyFCFFfJO3KKBlUfZsyW",
                "id" : "3HQyFCFFfJO3KKBlUfZsyW",
                "name" : "Randy Newman",
                "type" : "artist",
                "uri" : "spotify:artist:3HQyFCFFfJO3KKBlUfZsyW"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 77240,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/735UEdFZnWMjS7m8nv6np5"
              },
              "href" : "https://api.spotify.com/v1/tracks/735UEdFZnWMjS7m8nv6np5",
              "id" : "735UEdFZnWMjS7m8nv6np5",
              "is_local" : false,
              "name" : "New Road",
              "preview_url" : "https://p.scdn.co/mp3-preview/16441a99f0e93011ee61615b160464f44f583a07?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 14,
              "type" : "track",
              "uri" : "spotify:track:735UEdFZnWMjS7m8nv6np5"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/3HQyFCFFfJO3KKBlUfZsyW"
                },
                "href" : "https://api.spotify.com/v1/artists/3HQyFCFFfJO3KKBlUfZsyW",
                "id" : "3HQyFCFFfJO3KKBlUfZsyW",
                "name" : "Randy Newman",
                "type" : "artist",
                "uri" : "spotify:artist:3HQyFCFFfJO3KKBlUfZsyW"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 80266,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/1fBMuKmddJ5fqXaHLJjQOQ"
              },
              "href" : "https://api.spotify.com/v1/tracks/1fBMuKmddJ5fqXaHLJjQOQ",
              "id" : "1fBMuKmddJ5fqXaHLJjQOQ",
              "is_local" : false,
              "name" : "Tractor Tipping",
              "preview_url" : "https://p.scdn.co/mp3-preview/c969f954f96e0492e0df1244de22a3cf05dbd128?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 15,
              "type" : "track",
              "uri" : "spotify:track:1fBMuKmddJ5fqXaHLJjQOQ"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/3HQyFCFFfJO3KKBlUfZsyW"
                },
                "href" : "https://api.spotify.com/v1/artists/3HQyFCFFfJO3KKBlUfZsyW",
                "id" : "3HQyFCFFfJO3KKBlUfZsyW",
                "name" : "Randy Newman",
                "type" : "artist",
                "uri" : "spotify:artist:3HQyFCFFfJO3KKBlUfZsyW"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 119173,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/47OC0Xl9TIijX4gkafSX1G"
              },
              "href" : "https://api.spotify.com/v1/tracks/47OC0Xl9TIijX4gkafSX1G",
              "id" : "47OC0Xl9TIijX4gkafSX1G",
              "is_local" : false,
              "name" : "McQueen and Sally",
              "preview_url" : "https://p.scdn.co/mp3-preview/615afe613ec72c551c75a54c5a16496ee0b959fe?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 16,
              "type" : "track",
              "uri" : "spotify:track:47OC0Xl9TIijX4gkafSX1G"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/3HQyFCFFfJO3KKBlUfZsyW"
                },
                "href" : "https://api.spotify.com/v1/artists/3HQyFCFFfJO3KKBlUfZsyW",
                "id" : "3HQyFCFFfJO3KKBlUfZsyW",
                "name" : "Randy Newman",
                "type" : "artist",
                "uri" : "spotify:artist:3HQyFCFFfJO3KKBlUfZsyW"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 161000,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/7819cMyksP6H9re9etg6pK"
              },
              "href" : "https://api.spotify.com/v1/tracks/7819cMyksP6H9re9etg6pK",
              "id" : "7819cMyksP6H9re9etg6pK",
              "is_local" : false,
              "name" : "Goodbye",
              "preview_url" : "https://p.scdn.co/mp3-preview/7e379aebd89d35ddcc103b785c289434ba414ecd?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 17,
              "type" : "track",
              "uri" : "spotify:track:7819cMyksP6H9re9etg6pK"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/3HQyFCFFfJO3KKBlUfZsyW"
                },
                "href" : "https://api.spotify.com/v1/artists/3HQyFCFFfJO3KKBlUfZsyW",
                "id" : "3HQyFCFFfJO3KKBlUfZsyW",
                "name" : "Randy Newman",
                "type" : "artist",
                "uri" : "spotify:artist:3HQyFCFFfJO3KKBlUfZsyW"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 89533,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/31SQzEn2j6IqoBM41axtX4"
              },
              "href" : "https://api.spotify.com/v1/tracks/31SQzEn2j6IqoBM41axtX4",
              "id" : "31SQzEn2j6IqoBM41axtX4",
              "is_local" : false,
              "name" : "Pre-Race Pageantry",
              "preview_url" : "https://p.scdn.co/mp3-preview/fd0412def7eac144c864d2facec1cac70df2a8af?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 18,
              "type" : "track",
              "uri" : "spotify:track:31SQzEn2j6IqoBM41axtX4"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/3HQyFCFFfJO3KKBlUfZsyW"
                },
                "href" : "https://api.spotify.com/v1/artists/3HQyFCFFfJO3KKBlUfZsyW",
                "id" : "3HQyFCFFfJO3KKBlUfZsyW",
                "name" : "Randy Newman",
                "type" : "artist",
                "uri" : "spotify:artist:3HQyFCFFfJO3KKBlUfZsyW"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 112386,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/2LwbqMBDHVgePOlAsYkJpY"
              },
              "href" : "https://api.spotify.com/v1/tracks/2LwbqMBDHVgePOlAsYkJpY",
              "id" : "2LwbqMBDHVgePOlAsYkJpY",
              "is_local" : false,
              "name" : "The Piston Cup",
              "preview_url" : "https://p.scdn.co/mp3-preview/5dd36bd6e194c6e629f5436f75a365c25bd36624?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 19,
              "type" : "track",
              "uri" : "spotify:track:2LwbqMBDHVgePOlAsYkJpY"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/3HQyFCFFfJO3KKBlUfZsyW"
                },
                "href" : "https://api.spotify.com/v1/artists/3HQyFCFFfJO3KKBlUfZsyW",
                "id" : "3HQyFCFFfJO3KKBlUfZsyW",
                "name" : "Randy Newman",
                "type" : "artist",
                "uri" : "spotify:artist:3HQyFCFFfJO3KKBlUfZsyW"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 187186,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/4nbE2qIb4Dplf4ssGA8ETW"
              },
              "href" : "https://api.spotify.com/v1/tracks/4nbE2qIb4Dplf4ssGA8ETW",
              "id" : "4nbE2qIb4Dplf4ssGA8ETW",
              "is_local" : false,
              "name" : "The Big Race",
              "preview_url" : "https://p.scdn.co/mp3-preview/e713e0cfa5c19af1a385eb8b00e59e05ae7adc8f?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 20,
              "type" : "track",
              "uri" : "spotify:track:4nbE2qIb4Dplf4ssGA8ETW"
            } ],
            "limit" : 50,
            "next" : null,
            "offset" : 0,
            "previous" : null,
            "total" : 20
          },
          "type" : "album",
          "uri" : "spotify:album:3Xiz5kq12VOzTw9Kun7m0f"
        }
      }, {
        "added_at" : "2019-10-01T13:30:30Z",
        "album" : {
          "album_type" : "album",
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/5u7Nm1nRMAHWrzoVmCP7fo"
            },
            "href" : "https://api.spotify.com/v1/artists/5u7Nm1nRMAHWrzoVmCP7fo",
            "id" : "5u7Nm1nRMAHWrzoVmCP7fo",
            "name" : "Pense",
            "type" : "artist",
            "uri" : "spotify:artist:5u7Nm1nRMAHWrzoVmCP7fo"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
          "copyrights" : [ {
            "text" : "2014 Pense",
            "type" : "C"
          }, {
            "text" : "2014 Pense",
            "type" : "P"
          } ],
          "external_ids" : {
            "upc" : "632103014716"
          },
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/5QlWd9sCuzJM1bRNywOJiD"
          },
          "genres" : [ ],
          "href" : "https://api.spotify.com/v1/albums/5QlWd9sCuzJM1bRNywOJiD",
          "id" : "5QlWd9sCuzJM1bRNywOJiD",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b273de1b1160a38ce4b8654a6e66",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e02de1b1160a38ce4b8654a6e66",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d00004851de1b1160a38ce4b8654a6e66",
            "width" : 64
          } ],
          "label" : "Together Records",
          "name" : "Além Daquilo Que Te Cega",
          "popularity" : 37,
          "release_date" : "2014-06-27",
          "release_date_precision" : "day",
          "total_tracks" : 10,
          "tracks" : {
            "href" : "https://api.spotify.com/v1/albums/5QlWd9sCuzJM1bRNywOJiD/tracks?offset=0&limit=50",
            "items" : [ {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/5u7Nm1nRMAHWrzoVmCP7fo"
                },
                "href" : "https://api.spotify.com/v1/artists/5u7Nm1nRMAHWrzoVmCP7fo",
                "id" : "5u7Nm1nRMAHWrzoVmCP7fo",
                "name" : "Pense",
                "type" : "artist",
                "uri" : "spotify:artist:5u7Nm1nRMAHWrzoVmCP7fo"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 226033,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/2JVATRYbHtGbsEUw60zXng"
              },
              "href" : "https://api.spotify.com/v1/tracks/2JVATRYbHtGbsEUw60zXng",
              "id" : "2JVATRYbHtGbsEUw60zXng",
              "is_local" : false,
              "name" : "Contra-Cultura",
              "preview_url" : "https://p.scdn.co/mp3-preview/f092cbed151496e9b7a5b13bf087434b5197bd75?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 1,
              "type" : "track",
              "uri" : "spotify:track:2JVATRYbHtGbsEUw60zXng"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/5u7Nm1nRMAHWrzoVmCP7fo"
                },
                "href" : "https://api.spotify.com/v1/artists/5u7Nm1nRMAHWrzoVmCP7fo",
                "id" : "5u7Nm1nRMAHWrzoVmCP7fo",
                "name" : "Pense",
                "type" : "artist",
                "uri" : "spotify:artist:5u7Nm1nRMAHWrzoVmCP7fo"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 153313,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/2AbK6yoYFu16k7V1ZZkOmE"
              },
              "href" : "https://api.spotify.com/v1/tracks/2AbK6yoYFu16k7V1ZZkOmE",
              "id" : "2AbK6yoYFu16k7V1ZZkOmE",
              "is_local" : false,
              "name" : "Aponte pro Espelho",
              "preview_url" : "https://p.scdn.co/mp3-preview/674b58088760c57a9683df83d5db15a883980431?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 2,
              "type" : "track",
              "uri" : "spotify:track:2AbK6yoYFu16k7V1ZZkOmE"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/5u7Nm1nRMAHWrzoVmCP7fo"
                },
                "href" : "https://api.spotify.com/v1/artists/5u7Nm1nRMAHWrzoVmCP7fo",
                "id" : "5u7Nm1nRMAHWrzoVmCP7fo",
                "name" : "Pense",
                "type" : "artist",
                "uri" : "spotify:artist:5u7Nm1nRMAHWrzoVmCP7fo"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 145043,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/0UXYMQHbVhzy477hxrEVUe"
              },
              "href" : "https://api.spotify.com/v1/tracks/0UXYMQHbVhzy477hxrEVUe",
              "id" : "0UXYMQHbVhzy477hxrEVUe",
              "is_local" : false,
              "name" : "Gota a Gota",
              "preview_url" : "https://p.scdn.co/mp3-preview/03a80e9e8c730ba9bde3d4423d985cd461bc58be?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 3,
              "type" : "track",
              "uri" : "spotify:track:0UXYMQHbVhzy477hxrEVUe"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/5u7Nm1nRMAHWrzoVmCP7fo"
                },
                "href" : "https://api.spotify.com/v1/artists/5u7Nm1nRMAHWrzoVmCP7fo",
                "id" : "5u7Nm1nRMAHWrzoVmCP7fo",
                "name" : "Pense",
                "type" : "artist",
                "uri" : "spotify:artist:5u7Nm1nRMAHWrzoVmCP7fo"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 236663,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/6YbysAROEcJZuRNiES0hP6"
              },
              "href" : "https://api.spotify.com/v1/tracks/6YbysAROEcJZuRNiES0hP6",
              "id" : "6YbysAROEcJZuRNiES0hP6",
              "is_local" : false,
              "name" : "Andando Sobre Pedras",
              "preview_url" : "https://p.scdn.co/mp3-preview/46c397cc2d9281698a1106687f636d70fecc2ea1?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 4,
              "type" : "track",
              "uri" : "spotify:track:6YbysAROEcJZuRNiES0hP6"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/5u7Nm1nRMAHWrzoVmCP7fo"
                },
                "href" : "https://api.spotify.com/v1/artists/5u7Nm1nRMAHWrzoVmCP7fo",
                "id" : "5u7Nm1nRMAHWrzoVmCP7fo",
                "name" : "Pense",
                "type" : "artist",
                "uri" : "spotify:artist:5u7Nm1nRMAHWrzoVmCP7fo"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 171296,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/4nAHQzkGHGVLDmsKwFMIqK"
              },
              "href" : "https://api.spotify.com/v1/tracks/4nAHQzkGHGVLDmsKwFMIqK",
              "id" : "4nAHQzkGHGVLDmsKwFMIqK",
              "is_local" : false,
              "name" : "Falta",
              "preview_url" : "https://p.scdn.co/mp3-preview/270b848f5f9f2c110d742dc4d1aca89300d3f9a2?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 5,
              "type" : "track",
              "uri" : "spotify:track:4nAHQzkGHGVLDmsKwFMIqK"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/5u7Nm1nRMAHWrzoVmCP7fo"
                },
                "href" : "https://api.spotify.com/v1/artists/5u7Nm1nRMAHWrzoVmCP7fo",
                "id" : "5u7Nm1nRMAHWrzoVmCP7fo",
                "name" : "Pense",
                "type" : "artist",
                "uri" : "spotify:artist:5u7Nm1nRMAHWrzoVmCP7fo"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 203695,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/3hVwQ1NM2jRUszpOEfYFLj"
              },
              "href" : "https://api.spotify.com/v1/tracks/3hVwQ1NM2jRUszpOEfYFLj",
              "id" : "3hVwQ1NM2jRUszpOEfYFLj",
              "is_local" : false,
              "name" : "O Que Me Cega",
              "preview_url" : "https://p.scdn.co/mp3-preview/b7cfe9aa1c472bb3c2657b0d19f5be4dcbc71daa?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 6,
              "type" : "track",
              "uri" : "spotify:track:3hVwQ1NM2jRUszpOEfYFLj"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/5u7Nm1nRMAHWrzoVmCP7fo"
                },
                "href" : "https://api.spotify.com/v1/artists/5u7Nm1nRMAHWrzoVmCP7fo",
                "id" : "5u7Nm1nRMAHWrzoVmCP7fo",
                "name" : "Pense",
                "type" : "artist",
                "uri" : "spotify:artist:5u7Nm1nRMAHWrzoVmCP7fo"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 152357,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/3V1EkjSuwAbpoXcbaPFXxU"
              },
              "href" : "https://api.spotify.com/v1/tracks/3V1EkjSuwAbpoXcbaPFXxU",
              "id" : "3V1EkjSuwAbpoXcbaPFXxU",
              "is_local" : false,
              "name" : "Ismos",
              "preview_url" : "https://p.scdn.co/mp3-preview/6b59d9faacd9e5814d1daea8c055be801f2a087f?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 7,
              "type" : "track",
              "uri" : "spotify:track:3V1EkjSuwAbpoXcbaPFXxU"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/5u7Nm1nRMAHWrzoVmCP7fo"
                },
                "href" : "https://api.spotify.com/v1/artists/5u7Nm1nRMAHWrzoVmCP7fo",
                "id" : "5u7Nm1nRMAHWrzoVmCP7fo",
                "name" : "Pense",
                "type" : "artist",
                "uri" : "spotify:artist:5u7Nm1nRMAHWrzoVmCP7fo"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 160530,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/1IXnSyp78wOLjfpxvTvAgt"
              },
              "href" : "https://api.spotify.com/v1/tracks/1IXnSyp78wOLjfpxvTvAgt",
              "id" : "1IXnSyp78wOLjfpxvTvAgt",
              "is_local" : false,
              "name" : "Paciência",
              "preview_url" : "https://p.scdn.co/mp3-preview/8dd8c73bb80c18d516be609dd3d05c862d3f901f?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 8,
              "type" : "track",
              "uri" : "spotify:track:1IXnSyp78wOLjfpxvTvAgt"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/5u7Nm1nRMAHWrzoVmCP7fo"
                },
                "href" : "https://api.spotify.com/v1/artists/5u7Nm1nRMAHWrzoVmCP7fo",
                "id" : "5u7Nm1nRMAHWrzoVmCP7fo",
                "name" : "Pense",
                "type" : "artist",
                "uri" : "spotify:artist:5u7Nm1nRMAHWrzoVmCP7fo"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 184944,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/0K5XSFEf5rUfPeQNyILpgG"
              },
              "href" : "https://api.spotify.com/v1/tracks/0K5XSFEf5rUfPeQNyILpgG",
              "id" : "0K5XSFEf5rUfPeQNyILpgG",
              "is_local" : false,
              "name" : "Seguro Demais",
              "preview_url" : "https://p.scdn.co/mp3-preview/11f8e89597ce8d784681d3e9a92845a38b137fb0?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 9,
              "type" : "track",
              "uri" : "spotify:track:0K5XSFEf5rUfPeQNyILpgG"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/5u7Nm1nRMAHWrzoVmCP7fo"
                },
                "href" : "https://api.spotify.com/v1/artists/5u7Nm1nRMAHWrzoVmCP7fo",
                "id" : "5u7Nm1nRMAHWrzoVmCP7fo",
                "name" : "Pense",
                "type" : "artist",
                "uri" : "spotify:artist:5u7Nm1nRMAHWrzoVmCP7fo"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 207200,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/3zlqhbM9FuDu2NwMhcrF4y"
              },
              "href" : "https://api.spotify.com/v1/tracks/3zlqhbM9FuDu2NwMhcrF4y",
              "id" : "3zlqhbM9FuDu2NwMhcrF4y",
              "is_local" : false,
              "name" : "Expansão da Consciência",
              "preview_url" : "https://p.scdn.co/mp3-preview/9918a35efb9cac3453d61f6c76dd0bc288225bd8?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 10,
              "type" : "track",
              "uri" : "spotify:track:3zlqhbM9FuDu2NwMhcrF4y"
            } ],
            "limit" : 50,
            "next" : null,
            "offset" : 0,
            "previous" : null,
            "total" : 10
          },
          "type" : "album",
          "uri" : "spotify:album:5QlWd9sCuzJM1bRNywOJiD"
        }
      }, {
        "added_at" : "2019-01-12T14:06:13Z",
        "album" : {
          "album_type" : "single",
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/7lbSsjYACZHn1MSDXPxNF2"
            },
            "href" : "https://api.spotify.com/v1/artists/7lbSsjYACZHn1MSDXPxNF2",
            "id" : "7lbSsjYACZHn1MSDXPxNF2",
            "name" : "Hikaru Utada",
            "type" : "artist",
            "uri" : "spotify:artist:7lbSsjYACZHn1MSDXPxNF2"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
          "copyrights" : [ {
            "text" : "(P) 2018 Epic Records Japan",
            "type" : "P"
          } ],
          "external_ids" : {
            "upc" : "886447459379"
          },
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/1bQFTo3WUbUSO4SAK743iJ"
          },
          "genres" : [ ],
          "href" : "https://api.spotify.com/v1/albums/1bQFTo3WUbUSO4SAK743iJ",
          "id" : "1bQFTo3WUbUSO4SAK743iJ",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b2739b4041a80f4f48a49ce716d2",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e029b4041a80f4f48a49ce716d2",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d000048519b4041a80f4f48a49ce716d2",
            "width" : 64
          } ],
          "label" : "NITRON concepts",
          "name" : "Chikai",
          "popularity" : 25,
          "release_date" : "2018-06-27",
          "release_date_precision" : "day",
          "total_tracks" : 1,
          "tracks" : {
            "href" : "https://api.spotify.com/v1/albums/1bQFTo3WUbUSO4SAK743iJ/tracks?offset=0&limit=50",
            "items" : [ {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7lbSsjYACZHn1MSDXPxNF2"
                },
                "href" : "https://api.spotify.com/v1/artists/7lbSsjYACZHn1MSDXPxNF2",
                "id" : "7lbSsjYACZHn1MSDXPxNF2",
                "name" : "Hikaru Utada",
                "type" : "artist",
                "uri" : "spotify:artist:7lbSsjYACZHn1MSDXPxNF2"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 277706,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/2wmGOkqm2Qj9iVjmuID9Ro"
              },
              "href" : "https://api.spotify.com/v1/tracks/2wmGOkqm2Qj9iVjmuID9Ro",
              "id" : "2wmGOkqm2Qj9iVjmuID9Ro",
              "is_local" : false,
              "name" : "誓い",
              "preview_url" : "https://p.scdn.co/mp3-preview/9f3bf8b1fa5cf34b42212bd0cf6df471bf7e5c89?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 1,
              "type" : "track",
              "uri" : "spotify:track:2wmGOkqm2Qj9iVjmuID9Ro"
            } ],
            "limit" : 50,
            "next" : null,
            "offset" : 0,
            "previous" : null,
            "total" : 1
          },
          "type" : "album",
          "uri" : "spotify:album:1bQFTo3WUbUSO4SAK743iJ"
        }
      }, {
        "added_at" : "2019-01-12T13:00:09Z",
        "album" : {
          "album_type" : "album",
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/59FrDXDVJz0EKqYg39dnT2"
            },
            "href" : "https://api.spotify.com/v1/artists/59FrDXDVJz0EKqYg39dnT2",
            "id" : "59FrDXDVJz0EKqYg39dnT2",
            "name" : "Jão",
            "type" : "artist",
            "uri" : "spotify:artist:59FrDXDVJz0EKqYg39dnT2"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
          "copyrights" : [ {
            "text" : "© 2018 Head Media, Under Exclusive License to Universal Music International",
            "type" : "C"
          }, {
            "text" : "℗ 2018 Head Media, Under Exclusive License to Universal Music International",
            "type" : "P"
          } ],
          "external_ids" : {
            "upc" : "00602567960850"
          },
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/67a6pDoMKQYOKGMnmUQZbq"
          },
          "genres" : [ ],
          "href" : "https://api.spotify.com/v1/albums/67a6pDoMKQYOKGMnmUQZbq",
          "id" : "67a6pDoMKQYOKGMnmUQZbq",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b273ba01cd6034a0f28721b57127",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e02ba01cd6034a0f28721b57127",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d00004851ba01cd6034a0f28721b57127",
            "width" : 64
          } ],
          "label" : "Universal Music Ltda.",
          "name" : "LOBOS",
          "popularity" : 63,
          "release_date" : "2018-08-17",
          "release_date_precision" : "day",
          "total_tracks" : 10,
          "tracks" : {
            "href" : "https://api.spotify.com/v1/albums/67a6pDoMKQYOKGMnmUQZbq/tracks?offset=0&limit=50",
            "items" : [ {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/59FrDXDVJz0EKqYg39dnT2"
                },
                "href" : "https://api.spotify.com/v1/artists/59FrDXDVJz0EKqYg39dnT2",
                "id" : "59FrDXDVJz0EKqYg39dnT2",
                "name" : "Jão",
                "type" : "artist",
                "uri" : "spotify:artist:59FrDXDVJz0EKqYg39dnT2"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 174519,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/1XVN2BVHfKUUcMH0jxSRZ5"
              },
              "href" : "https://api.spotify.com/v1/tracks/1XVN2BVHfKUUcMH0jxSRZ5",
              "id" : "1XVN2BVHfKUUcMH0jxSRZ5",
              "is_local" : false,
              "name" : "Vou Morrer Sozinho",
              "preview_url" : "https://p.scdn.co/mp3-preview/371e11ed93e73dc33b9560ae5969a241cb4511e8?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 1,
              "type" : "track",
              "uri" : "spotify:track:1XVN2BVHfKUUcMH0jxSRZ5"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/59FrDXDVJz0EKqYg39dnT2"
                },
                "href" : "https://api.spotify.com/v1/artists/59FrDXDVJz0EKqYg39dnT2",
                "id" : "59FrDXDVJz0EKqYg39dnT2",
                "name" : "Jão",
                "type" : "artist",
                "uri" : "spotify:artist:59FrDXDVJz0EKqYg39dnT2"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 196658,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/7kRhodBTcAQXGoZdTEw8fZ"
              },
              "href" : "https://api.spotify.com/v1/tracks/7kRhodBTcAQXGoZdTEw8fZ",
              "id" : "7kRhodBTcAQXGoZdTEw8fZ",
              "is_local" : false,
              "name" : "Me Beija Com Raiva",
              "preview_url" : "https://p.scdn.co/mp3-preview/27d8710500a2fc9a1c17496b1e41099f7d590f64?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 2,
              "type" : "track",
              "uri" : "spotify:track:7kRhodBTcAQXGoZdTEw8fZ"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/59FrDXDVJz0EKqYg39dnT2"
                },
                "href" : "https://api.spotify.com/v1/artists/59FrDXDVJz0EKqYg39dnT2",
                "id" : "59FrDXDVJz0EKqYg39dnT2",
                "name" : "Jão",
                "type" : "artist",
                "uri" : "spotify:artist:59FrDXDVJz0EKqYg39dnT2"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 180286,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/2703CNb2od5iv56bRo2Y3h"
              },
              "href" : "https://api.spotify.com/v1/tracks/2703CNb2od5iv56bRo2Y3h",
              "id" : "2703CNb2od5iv56bRo2Y3h",
              "is_local" : false,
              "name" : "Lindo Demais",
              "preview_url" : "https://p.scdn.co/mp3-preview/371cb262e55af986493992638ca13c10359c47fa?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 3,
              "type" : "track",
              "uri" : "spotify:track:2703CNb2od5iv56bRo2Y3h"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/59FrDXDVJz0EKqYg39dnT2"
                },
                "href" : "https://api.spotify.com/v1/artists/59FrDXDVJz0EKqYg39dnT2",
                "id" : "59FrDXDVJz0EKqYg39dnT2",
                "name" : "Jão",
                "type" : "artist",
                "uri" : "spotify:artist:59FrDXDVJz0EKqYg39dnT2"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 178186,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/0S86atec73KKaexn67JsDy"
              },
              "href" : "https://api.spotify.com/v1/tracks/0S86atec73KKaexn67JsDy",
              "id" : "0S86atec73KKaexn67JsDy",
              "is_local" : false,
              "name" : "Imaturo",
              "preview_url" : "https://p.scdn.co/mp3-preview/95bcb21b243bc72e5c649499b6298abf31a3b14f?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 4,
              "type" : "track",
              "uri" : "spotify:track:0S86atec73KKaexn67JsDy"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/59FrDXDVJz0EKqYg39dnT2"
                },
                "href" : "https://api.spotify.com/v1/artists/59FrDXDVJz0EKqYg39dnT2",
                "id" : "59FrDXDVJz0EKqYg39dnT2",
                "name" : "Jão",
                "type" : "artist",
                "uri" : "spotify:artist:59FrDXDVJz0EKqYg39dnT2"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 190062,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/55GFbaI6W1laRMFdLdRw8Z"
              },
              "href" : "https://api.spotify.com/v1/tracks/55GFbaI6W1laRMFdLdRw8Z",
              "id" : "55GFbaI6W1laRMFdLdRw8Z",
              "is_local" : false,
              "name" : "Ainda Te Amo",
              "preview_url" : "https://p.scdn.co/mp3-preview/85dd6551455ca73ebf7e216fe151af56423160e2?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 5,
              "type" : "track",
              "uri" : "spotify:track:55GFbaI6W1laRMFdLdRw8Z"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/59FrDXDVJz0EKqYg39dnT2"
                },
                "href" : "https://api.spotify.com/v1/artists/59FrDXDVJz0EKqYg39dnT2",
                "id" : "59FrDXDVJz0EKqYg39dnT2",
                "name" : "Jão",
                "type" : "artist",
                "uri" : "spotify:artist:59FrDXDVJz0EKqYg39dnT2"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 156297,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/2OKEIwfQhf2a6lJuR3aMXJ"
              },
              "href" : "https://api.spotify.com/v1/tracks/2OKEIwfQhf2a6lJuR3aMXJ",
              "id" : "2OKEIwfQhf2a6lJuR3aMXJ",
              "is_local" : false,
              "name" : "A Rua",
              "preview_url" : "https://p.scdn.co/mp3-preview/2cfa1f6edfd231bf3a8fddb61caf8eeef17f90ff?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 6,
              "type" : "track",
              "uri" : "spotify:track:2OKEIwfQhf2a6lJuR3aMXJ"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/59FrDXDVJz0EKqYg39dnT2"
                },
                "href" : "https://api.spotify.com/v1/artists/59FrDXDVJz0EKqYg39dnT2",
                "id" : "59FrDXDVJz0EKqYg39dnT2",
                "name" : "Jão",
                "type" : "artist",
                "uri" : "spotify:artist:59FrDXDVJz0EKqYg39dnT2"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 223090,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/0x6VtkygihOEhwoPQppHYU"
              },
              "href" : "https://api.spotify.com/v1/tracks/0x6VtkygihOEhwoPQppHYU",
              "id" : "0x6VtkygihOEhwoPQppHYU",
              "is_local" : false,
              "name" : "Lobos",
              "preview_url" : "https://p.scdn.co/mp3-preview/62a6f81a4b3371d0ab0b41b34b46d8a4be3510a0?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 7,
              "type" : "track",
              "uri" : "spotify:track:0x6VtkygihOEhwoPQppHYU"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/59FrDXDVJz0EKqYg39dnT2"
                },
                "href" : "https://api.spotify.com/v1/artists/59FrDXDVJz0EKqYg39dnT2",
                "id" : "59FrDXDVJz0EKqYg39dnT2",
                "name" : "Jão",
                "type" : "artist",
                "uri" : "spotify:artist:59FrDXDVJz0EKqYg39dnT2"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 189707,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/3XbqMexOs4oiE9n6ATZ35K"
              },
              "href" : "https://api.spotify.com/v1/tracks/3XbqMexOs4oiE9n6ATZ35K",
              "id" : "3XbqMexOs4oiE9n6ATZ35K",
              "is_local" : false,
              "name" : "Eu Quero Ser Como Você",
              "preview_url" : "https://p.scdn.co/mp3-preview/1bb08fb472969ede848940f99468f4dd9dcf40a0?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 8,
              "type" : "track",
              "uri" : "spotify:track:3XbqMexOs4oiE9n6ATZ35K"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/59FrDXDVJz0EKqYg39dnT2"
                },
                "href" : "https://api.spotify.com/v1/artists/59FrDXDVJz0EKqYg39dnT2",
                "id" : "59FrDXDVJz0EKqYg39dnT2",
                "name" : "Jão",
                "type" : "artist",
                "uri" : "spotify:artist:59FrDXDVJz0EKqYg39dnT2"
              }, {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/3tOS3iTJSHwowFPRdR4Wsf"
                },
                "href" : "https://api.spotify.com/v1/artists/3tOS3iTJSHwowFPRdR4Wsf",
                "id" : "3tOS3iTJSHwowFPRdR4Wsf",
                "name" : "Diogo Piçarra",
                "type" : "artist",
                "uri" : "spotify:artist:3tOS3iTJSHwowFPRdR4Wsf"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 171347,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/5rsJRsqaigb8Y39kjmGLmG"
              },
              "href" : "https://api.spotify.com/v1/tracks/5rsJRsqaigb8Y39kjmGLmG",
              "id" : "5rsJRsqaigb8Y39kjmGLmG",
              "is_local" : false,
              "name" : "Aqui",
              "preview_url" : "https://p.scdn.co/mp3-preview/13131340ae95ee2337bf033b60e26f49ba670e53?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 9,
              "type" : "track",
              "uri" : "spotify:track:5rsJRsqaigb8Y39kjmGLmG"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/59FrDXDVJz0EKqYg39dnT2"
                },
                "href" : "https://api.spotify.com/v1/artists/59FrDXDVJz0EKqYg39dnT2",
                "id" : "59FrDXDVJz0EKqYg39dnT2",
                "name" : "Jão",
                "type" : "artist",
                "uri" : "spotify:artist:59FrDXDVJz0EKqYg39dnT2"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 255028,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/1y2plShqBMDQ0T6ZhmfmeE"
              },
              "href" : "https://api.spotify.com/v1/tracks/1y2plShqBMDQ0T6ZhmfmeE",
              "id" : "1y2plShqBMDQ0T6ZhmfmeE",
              "is_local" : false,
              "name" : "Monstros",
              "preview_url" : "https://p.scdn.co/mp3-preview/69750b5792eac464c32f49be9fd87930974d4d70?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 10,
              "type" : "track",
              "uri" : "spotify:track:1y2plShqBMDQ0T6ZhmfmeE"
            } ],
            "limit" : 50,
            "next" : null,
            "offset" : 0,
            "previous" : null,
            "total" : 10
          },
          "type" : "album",
          "uri" : "spotify:album:67a6pDoMKQYOKGMnmUQZbq"
        }
      }, {
        "added_at" : "2018-10-13T14:51:00Z",
        "album" : {
          "album_type" : "album",
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/1dmuH57XGYywDg64k2YBlY"
            },
            "href" : "https://api.spotify.com/v1/artists/1dmuH57XGYywDg64k2YBlY",
            "id" : "1dmuH57XGYywDg64k2YBlY",
            "name" : "Família Essência",
            "type" : "artist",
            "uri" : "spotify:artist:1dmuH57XGYywDg64k2YBlY"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
          "copyrights" : [ {
            "text" : "2018 Família Essência",
            "type" : "C"
          }, {
            "text" : "2018 Família Essência",
            "type" : "P"
          } ],
          "external_ids" : {
            "upc" : "192914780748"
          },
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/2F7j4Z0gM3dOprYyKYEW6R"
          },
          "genres" : [ ],
          "href" : "https://api.spotify.com/v1/albums/2F7j4Z0gM3dOprYyKYEW6R",
          "id" : "2F7j4Z0gM3dOprYyKYEW6R",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b273e4058000921a0aa7d69bbf76",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e02e4058000921a0aa7d69bbf76",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d00004851e4058000921a0aa7d69bbf76",
            "width" : 64
          } ],
          "label" : "Família Essência",
          "name" : "Vou Voltar",
          "popularity" : 4,
          "release_date" : "2018-09-02",
          "release_date_precision" : "day",
          "total_tracks" : 10,
          "tracks" : {
            "href" : "https://api.spotify.com/v1/albums/2F7j4Z0gM3dOprYyKYEW6R/tracks?offset=0&limit=50",
            "items" : [ {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/1dmuH57XGYywDg64k2YBlY"
                },
                "href" : "https://api.spotify.com/v1/artists/1dmuH57XGYywDg64k2YBlY",
                "id" : "1dmuH57XGYywDg64k2YBlY",
                "name" : "Família Essência",
                "type" : "artist",
                "uri" : "spotify:artist:1dmuH57XGYywDg64k2YBlY"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 243426,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/0ybbz4MmtY1DkGQX5VeRKB"
              },
              "href" : "https://api.spotify.com/v1/tracks/0ybbz4MmtY1DkGQX5VeRKB",
              "id" : "0ybbz4MmtY1DkGQX5VeRKB",
              "is_local" : false,
              "name" : "Perdoado",
              "preview_url" : "https://p.scdn.co/mp3-preview/25584479ec13fc9c4a2bad144aea91f886118020?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 1,
              "type" : "track",
              "uri" : "spotify:track:0ybbz4MmtY1DkGQX5VeRKB"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/1dmuH57XGYywDg64k2YBlY"
                },
                "href" : "https://api.spotify.com/v1/artists/1dmuH57XGYywDg64k2YBlY",
                "id" : "1dmuH57XGYywDg64k2YBlY",
                "name" : "Família Essência",
                "type" : "artist",
                "uri" : "spotify:artist:1dmuH57XGYywDg64k2YBlY"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 353280,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/304pQCGl5qpkgzYriMvmHw"
              },
              "href" : "https://api.spotify.com/v1/tracks/304pQCGl5qpkgzYriMvmHw",
              "id" : "304pQCGl5qpkgzYriMvmHw",
              "is_local" : false,
              "name" : "Ele Me Amou",
              "preview_url" : "https://p.scdn.co/mp3-preview/c8d3feb052636dcb34a9ab46dec7383b8c00c1b4?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 2,
              "type" : "track",
              "uri" : "spotify:track:304pQCGl5qpkgzYriMvmHw"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/1dmuH57XGYywDg64k2YBlY"
                },
                "href" : "https://api.spotify.com/v1/artists/1dmuH57XGYywDg64k2YBlY",
                "id" : "1dmuH57XGYywDg64k2YBlY",
                "name" : "Família Essência",
                "type" : "artist",
                "uri" : "spotify:artist:1dmuH57XGYywDg64k2YBlY"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 211426,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/0DE41Rb9IMgzKWSehVJnVu"
              },
              "href" : "https://api.spotify.com/v1/tracks/0DE41Rb9IMgzKWSehVJnVu",
              "id" : "0DE41Rb9IMgzKWSehVJnVu",
              "is_local" : false,
              "name" : "Digitais",
              "preview_url" : "https://p.scdn.co/mp3-preview/db3ebe6b38b4484144865e1f792116984daea8ee?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 3,
              "type" : "track",
              "uri" : "spotify:track:0DE41Rb9IMgzKWSehVJnVu"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/1dmuH57XGYywDg64k2YBlY"
                },
                "href" : "https://api.spotify.com/v1/artists/1dmuH57XGYywDg64k2YBlY",
                "id" : "1dmuH57XGYywDg64k2YBlY",
                "name" : "Família Essência",
                "type" : "artist",
                "uri" : "spotify:artist:1dmuH57XGYywDg64k2YBlY"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 259079,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/3oOg23nxKvjIrLUQz1QuY6"
              },
              "href" : "https://api.spotify.com/v1/tracks/3oOg23nxKvjIrLUQz1QuY6",
              "id" : "3oOg23nxKvjIrLUQz1QuY6",
              "is_local" : false,
              "name" : "Nunca Te Deixarei",
              "preview_url" : "https://p.scdn.co/mp3-preview/6cc1b10e810493d8f2ee78da8cacb725d0dec250?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 4,
              "type" : "track",
              "uri" : "spotify:track:3oOg23nxKvjIrLUQz1QuY6"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/1dmuH57XGYywDg64k2YBlY"
                },
                "href" : "https://api.spotify.com/v1/artists/1dmuH57XGYywDg64k2YBlY",
                "id" : "1dmuH57XGYywDg64k2YBlY",
                "name" : "Família Essência",
                "type" : "artist",
                "uri" : "spotify:artist:1dmuH57XGYywDg64k2YBlY"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 315386,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/3W1Tqq2UReMSoXCuINP94W"
              },
              "href" : "https://api.spotify.com/v1/tracks/3W1Tqq2UReMSoXCuINP94W",
              "id" : "3W1Tqq2UReMSoXCuINP94W",
              "is_local" : false,
              "name" : "Vou Voltar",
              "preview_url" : "https://p.scdn.co/mp3-preview/3af9c19feb0b8a73cd125acd4996fbc3237c12e3?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 5,
              "type" : "track",
              "uri" : "spotify:track:3W1Tqq2UReMSoXCuINP94W"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/1dmuH57XGYywDg64k2YBlY"
                },
                "href" : "https://api.spotify.com/v1/artists/1dmuH57XGYywDg64k2YBlY",
                "id" : "1dmuH57XGYywDg64k2YBlY",
                "name" : "Família Essência",
                "type" : "artist",
                "uri" : "spotify:artist:1dmuH57XGYywDg64k2YBlY"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 274586,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/4QlzEpEV74g8TVbzRLydAb"
              },
              "href" : "https://api.spotify.com/v1/tracks/4QlzEpEV74g8TVbzRLydAb",
              "id" : "4QlzEpEV74g8TVbzRLydAb",
              "is_local" : false,
              "name" : "Escolho Deus",
              "preview_url" : "https://p.scdn.co/mp3-preview/14acc27d5a0089c91b83e8826915cd4a421d4faa?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 6,
              "type" : "track",
              "uri" : "spotify:track:4QlzEpEV74g8TVbzRLydAb"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/1dmuH57XGYywDg64k2YBlY"
                },
                "href" : "https://api.spotify.com/v1/artists/1dmuH57XGYywDg64k2YBlY",
                "id" : "1dmuH57XGYywDg64k2YBlY",
                "name" : "Família Essência",
                "type" : "artist",
                "uri" : "spotify:artist:1dmuH57XGYywDg64k2YBlY"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 206840,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/144dCZYegQOGJWnEN9BBF2"
              },
              "href" : "https://api.spotify.com/v1/tracks/144dCZYegQOGJWnEN9BBF2",
              "id" : "144dCZYegQOGJWnEN9BBF2",
              "is_local" : false,
              "name" : "Esse É Meu Coração",
              "preview_url" : "https://p.scdn.co/mp3-preview/d6d9e48caaee887100989a3104e0cf0a0c78a5db?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 7,
              "type" : "track",
              "uri" : "spotify:track:144dCZYegQOGJWnEN9BBF2"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/1dmuH57XGYywDg64k2YBlY"
                },
                "href" : "https://api.spotify.com/v1/artists/1dmuH57XGYywDg64k2YBlY",
                "id" : "1dmuH57XGYywDg64k2YBlY",
                "name" : "Família Essência",
                "type" : "artist",
                "uri" : "spotify:artist:1dmuH57XGYywDg64k2YBlY"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 221000,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/3pMGXpNiJIZl4ujpMwdxQ4"
              },
              "href" : "https://api.spotify.com/v1/tracks/3pMGXpNiJIZl4ujpMwdxQ4",
              "id" : "3pMGXpNiJIZl4ujpMwdxQ4",
              "is_local" : false,
              "name" : "Mais Que Vencedor",
              "preview_url" : "https://p.scdn.co/mp3-preview/10e810b3adab06bde2bbd6e52c2e5d252d88a2c3?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 8,
              "type" : "track",
              "uri" : "spotify:track:3pMGXpNiJIZl4ujpMwdxQ4"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/1dmuH57XGYywDg64k2YBlY"
                },
                "href" : "https://api.spotify.com/v1/artists/1dmuH57XGYywDg64k2YBlY",
                "id" : "1dmuH57XGYywDg64k2YBlY",
                "name" : "Família Essência",
                "type" : "artist",
                "uri" : "spotify:artist:1dmuH57XGYywDg64k2YBlY"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 222480,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/1FKu9jaBF19qFG8Xr2AJrB"
              },
              "href" : "https://api.spotify.com/v1/tracks/1FKu9jaBF19qFG8Xr2AJrB",
              "id" : "1FKu9jaBF19qFG8Xr2AJrB",
              "is_local" : false,
              "name" : "Te Louvamos",
              "preview_url" : "https://p.scdn.co/mp3-preview/e9d9d1bd16c175bfca054c7b41ed98c06c69265a?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 9,
              "type" : "track",
              "uri" : "spotify:track:1FKu9jaBF19qFG8Xr2AJrB"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/1dmuH57XGYywDg64k2YBlY"
                },
                "href" : "https://api.spotify.com/v1/artists/1dmuH57XGYywDg64k2YBlY",
                "id" : "1dmuH57XGYywDg64k2YBlY",
                "name" : "Família Essência",
                "type" : "artist",
                "uri" : "spotify:artist:1dmuH57XGYywDg64k2YBlY"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 251160,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/3TfuK7qMHxAIwUeLjBeu0x"
              },
              "href" : "https://api.spotify.com/v1/tracks/3TfuK7qMHxAIwUeLjBeu0x",
              "id" : "3TfuK7qMHxAIwUeLjBeu0x",
              "is_local" : false,
              "name" : "Filho Meu",
              "preview_url" : "https://p.scdn.co/mp3-preview/b042f83343074b826f1453cb0d42293fb520048d?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 10,
              "type" : "track",
              "uri" : "spotify:track:3TfuK7qMHxAIwUeLjBeu0x"
            } ],
            "limit" : 50,
            "next" : null,
            "offset" : 0,
            "previous" : null,
            "total" : 10
          },
          "type" : "album",
          "uri" : "spotify:album:2F7j4Z0gM3dOprYyKYEW6R"
        }
      }, {
        "added_at" : "2018-04-20T20:23:06Z",
        "album" : {
          "album_type" : "album",
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/5HA5aLY3jJV7eimXWkRBBp"
            },
            "href" : "https://api.spotify.com/v1/artists/5HA5aLY3jJV7eimXWkRBBp",
            "id" : "5HA5aLY3jJV7eimXWkRBBp",
            "name" : "Epica",
            "type" : "artist",
            "uri" : "spotify:artist:5HA5aLY3jJV7eimXWkRBBp"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
          "copyrights" : [ {
            "text" : "2017 Transmission",
            "type" : "C"
          }, {
            "text" : "2017 Transmission",
            "type" : "P"
          } ],
          "external_ids" : {
            "upc" : "0803343166729"
          },
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/1vBNhnD8XleJ5wtJYiKzuD"
          },
          "genres" : [ ],
          "href" : "https://api.spotify.com/v1/albums/1vBNhnD8XleJ5wtJYiKzuD",
          "id" : "1vBNhnD8XleJ5wtJYiKzuD",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b273ce31d19fdcca7e222b9b6492",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e02ce31d19fdcca7e222b9b6492",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d00004851ce31d19fdcca7e222b9b6492",
            "width" : 64
          } ],
          "label" : "Transmission",
          "name" : "The Score 2.0: An Epic Journey",
          "popularity" : 38,
          "release_date" : "2017-11-11",
          "release_date_precision" : "day",
          "total_tracks" : 40,
          "tracks" : {
            "href" : "https://api.spotify.com/v1/albums/1vBNhnD8XleJ5wtJYiKzuD/tracks?offset=0&limit=50",
            "items" : [ {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/5HA5aLY3jJV7eimXWkRBBp"
                },
                "href" : "https://api.spotify.com/v1/artists/5HA5aLY3jJV7eimXWkRBBp",
                "id" : "5HA5aLY3jJV7eimXWkRBBp",
                "name" : "Epica",
                "type" : "artist",
                "uri" : "spotify:artist:5HA5aLY3jJV7eimXWkRBBp"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 149101,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/0rOkKdRve8HZ0jwEKuWqHN"
              },
              "href" : "https://api.spotify.com/v1/tracks/0rOkKdRve8HZ0jwEKuWqHN",
              "id" : "0rOkKdRve8HZ0jwEKuWqHN",
              "is_local" : false,
              "name" : "Vengeance Is Mine (2.0 Version)",
              "preview_url" : "https://p.scdn.co/mp3-preview/b68656452ef211135d93e52e728c62071fe6c90a?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 1,
              "type" : "track",
              "uri" : "spotify:track:0rOkKdRve8HZ0jwEKuWqHN"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/5HA5aLY3jJV7eimXWkRBBp"
                },
                "href" : "https://api.spotify.com/v1/artists/5HA5aLY3jJV7eimXWkRBBp",
                "id" : "5HA5aLY3jJV7eimXWkRBBp",
                "name" : "Epica",
                "type" : "artist",
                "uri" : "spotify:artist:5HA5aLY3jJV7eimXWkRBBp"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 181749,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/6LnY0KLhXY6dXaRkxbnldf"
              },
              "href" : "https://api.spotify.com/v1/tracks/6LnY0KLhXY6dXaRkxbnldf",
              "id" : "6LnY0KLhXY6dXaRkxbnldf",
              "is_local" : false,
              "name" : "Unholy Trinity (2.0 Version)",
              "preview_url" : "https://p.scdn.co/mp3-preview/6020c3475afe5b858b636d769150e519dad67dc2?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 2,
              "type" : "track",
              "uri" : "spotify:track:6LnY0KLhXY6dXaRkxbnldf"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/5HA5aLY3jJV7eimXWkRBBp"
                },
                "href" : "https://api.spotify.com/v1/artists/5HA5aLY3jJV7eimXWkRBBp",
                "id" : "5HA5aLY3jJV7eimXWkRBBp",
                "name" : "Epica",
                "type" : "artist",
                "uri" : "spotify:artist:5HA5aLY3jJV7eimXWkRBBp"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 127180,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/2uFtcjDJYOad0WUabfDKYp"
              },
              "href" : "https://api.spotify.com/v1/tracks/2uFtcjDJYOad0WUabfDKYp",
              "id" : "2uFtcjDJYOad0WUabfDKYp",
              "is_local" : false,
              "name" : "The Valley (2.0 Version)",
              "preview_url" : "https://p.scdn.co/mp3-preview/cadae80b50e0239b2a4b699f60a88b8b6dbaadd0?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 3,
              "type" : "track",
              "uri" : "spotify:track:2uFtcjDJYOad0WUabfDKYp"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/5HA5aLY3jJV7eimXWkRBBp"
                },
                "href" : "https://api.spotify.com/v1/artists/5HA5aLY3jJV7eimXWkRBBp",
                "id" : "5HA5aLY3jJV7eimXWkRBBp",
                "name" : "Epica",
                "type" : "artist",
                "uri" : "spotify:artist:5HA5aLY3jJV7eimXWkRBBp"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 271552,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/15yaOXjITm61R6nUsl4XgM"
              },
              "href" : "https://api.spotify.com/v1/tracks/15yaOXjITm61R6nUsl4XgM",
              "id" : "15yaOXjITm61R6nUsl4XgM",
              "is_local" : false,
              "name" : "Caught in a Web (2.0 Version)",
              "preview_url" : "https://p.scdn.co/mp3-preview/ed03edc6a610a376531aed85209639497e3b2b62?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 4,
              "type" : "track",
              "uri" : "spotify:track:15yaOXjITm61R6nUsl4XgM"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/5HA5aLY3jJV7eimXWkRBBp"
                },
                "href" : "https://api.spotify.com/v1/artists/5HA5aLY3jJV7eimXWkRBBp",
                "id" : "5HA5aLY3jJV7eimXWkRBBp",
                "name" : "Epica",
                "type" : "artist",
                "uri" : "spotify:artist:5HA5aLY3jJV7eimXWkRBBp"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 144288,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/2Cz3q7eAs2kT03LH3LdcLA"
              },
              "href" : "https://api.spotify.com/v1/tracks/2Cz3q7eAs2kT03LH3LdcLA",
              "id" : "2Cz3q7eAs2kT03LH3LdcLA",
              "is_local" : false,
              "name" : "Insomnia (2.0 Version)",
              "preview_url" : "https://p.scdn.co/mp3-preview/c53a650109842bd30cb15b0495c095a5eb0c5e6f?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 5,
              "type" : "track",
              "uri" : "spotify:track:2Cz3q7eAs2kT03LH3LdcLA"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/5HA5aLY3jJV7eimXWkRBBp"
                },
                "href" : "https://api.spotify.com/v1/artists/5HA5aLY3jJV7eimXWkRBBp",
                "id" : "5HA5aLY3jJV7eimXWkRBBp",
                "name" : "Epica",
                "type" : "artist",
                "uri" : "spotify:artist:5HA5aLY3jJV7eimXWkRBBp"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 171947,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/0WNvQrI2o4o8ofoYfgDwoG"
              },
              "href" : "https://api.spotify.com/v1/tracks/0WNvQrI2o4o8ofoYfgDwoG",
              "id" : "0WNvQrI2o4o8ofoYfgDwoG",
              "is_local" : false,
              "name" : "Under the Aegis (2.0 Version)",
              "preview_url" : "https://p.scdn.co/mp3-preview/608e95877ba30eb6ececae7b3ebe82ad93daec18?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 6,
              "type" : "track",
              "uri" : "spotify:track:0WNvQrI2o4o8ofoYfgDwoG"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/5HA5aLY3jJV7eimXWkRBBp"
                },
                "href" : "https://api.spotify.com/v1/artists/5HA5aLY3jJV7eimXWkRBBp",
                "id" : "5HA5aLY3jJV7eimXWkRBBp",
                "name" : "Epica",
                "type" : "artist",
                "uri" : "spotify:artist:5HA5aLY3jJV7eimXWkRBBp"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 282554,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/3n3ewRzwyAbWFy7sZzzfPq"
              },
              "href" : "https://api.spotify.com/v1/tracks/3n3ewRzwyAbWFy7sZzzfPq",
              "id" : "3n3ewRzwyAbWFy7sZzzfPq",
              "is_local" : false,
              "name" : "Trois Vierges (Solo 2.0 Version)",
              "preview_url" : "https://p.scdn.co/mp3-preview/428baa368b2e363ada9e0b53c3b03e6e38290c7e?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 7,
              "type" : "track",
              "uri" : "spotify:track:3n3ewRzwyAbWFy7sZzzfPq"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/5HA5aLY3jJV7eimXWkRBBp"
                },
                "href" : "https://api.spotify.com/v1/artists/5HA5aLY3jJV7eimXWkRBBp",
                "id" : "5HA5aLY3jJV7eimXWkRBBp",
                "name" : "Epica",
                "type" : "artist",
                "uri" : "spotify:artist:5HA5aLY3jJV7eimXWkRBBp"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 165080,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/26HZZgTps4umfbgSinFQgX"
              },
              "href" : "https://api.spotify.com/v1/tracks/26HZZgTps4umfbgSinFQgX",
              "id" : "26HZZgTps4umfbgSinFQgX",
              "is_local" : false,
              "name" : "Mystica (2.0 Version)",
              "preview_url" : "https://p.scdn.co/mp3-preview/413f4a195d94b9533ae1e21c76b9a5dd72255eee?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 8,
              "type" : "track",
              "uri" : "spotify:track:26HZZgTps4umfbgSinFQgX"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/5HA5aLY3jJV7eimXWkRBBp"
                },
                "href" : "https://api.spotify.com/v1/artists/5HA5aLY3jJV7eimXWkRBBp",
                "id" : "5HA5aLY3jJV7eimXWkRBBp",
                "name" : "Epica",
                "type" : "artist",
                "uri" : "spotify:artist:5HA5aLY3jJV7eimXWkRBBp"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 339078,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/6gmVvm412mxrCAOM1jN8nU"
              },
              "href" : "https://api.spotify.com/v1/tracks/6gmVvm412mxrCAOM1jN8nU",
              "id" : "6gmVvm412mxrCAOM1jN8nU",
              "is_local" : false,
              "name" : "Valley of Sins (2.0 Version)",
              "preview_url" : "https://p.scdn.co/mp3-preview/a3fc975e812f78851fc77aae175834cd9174b9ab?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 9,
              "type" : "track",
              "uri" : "spotify:track:6gmVvm412mxrCAOM1jN8nU"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/5HA5aLY3jJV7eimXWkRBBp"
                },
                "href" : "https://api.spotify.com/v1/artists/5HA5aLY3jJV7eimXWkRBBp",
                "id" : "5HA5aLY3jJV7eimXWkRBBp",
                "name" : "Epica",
                "type" : "artist",
                "uri" : "spotify:artist:5HA5aLY3jJV7eimXWkRBBp"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 143781,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/270YM2JhSWdWY80bblo57H"
              },
              "href" : "https://api.spotify.com/v1/tracks/270YM2JhSWdWY80bblo57H",
              "id" : "270YM2JhSWdWY80bblo57H",
              "is_local" : false,
              "name" : "Empty Gaze (2.0 Version)",
              "preview_url" : "https://p.scdn.co/mp3-preview/6f9e3d90a57052726d467686f58b83eefac22867?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 10,
              "type" : "track",
              "uri" : "spotify:track:270YM2JhSWdWY80bblo57H"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/5HA5aLY3jJV7eimXWkRBBp"
                },
                "href" : "https://api.spotify.com/v1/artists/5HA5aLY3jJV7eimXWkRBBp",
                "id" : "5HA5aLY3jJV7eimXWkRBBp",
                "name" : "Epica",
                "type" : "artist",
                "uri" : "spotify:artist:5HA5aLY3jJV7eimXWkRBBp"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 153531,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/5hjc4yqtHG2F52y4OkQRlU"
              },
              "href" : "https://api.spotify.com/v1/tracks/5hjc4yqtHG2F52y4OkQRlU",
              "id" : "5hjc4yqtHG2F52y4OkQRlU",
              "is_local" : false,
              "name" : "The Alleged Paradigm (2.0 Version)",
              "preview_url" : "https://p.scdn.co/mp3-preview/206067bf07335071a813e00b0da19467fa2e0758?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 11,
              "type" : "track",
              "uri" : "spotify:track:5hjc4yqtHG2F52y4OkQRlU"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/5HA5aLY3jJV7eimXWkRBBp"
                },
                "href" : "https://api.spotify.com/v1/artists/5HA5aLY3jJV7eimXWkRBBp",
                "id" : "5HA5aLY3jJV7eimXWkRBBp",
                "name" : "Epica",
                "type" : "artist",
                "uri" : "spotify:artist:5HA5aLY3jJV7eimXWkRBBp"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 204175,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/0gZeyxpHzY4UryAslAXnOV"
              },
              "href" : "https://api.spotify.com/v1/tracks/0gZeyxpHzY4UryAslAXnOV",
              "id" : "0gZeyxpHzY4UryAslAXnOV",
              "is_local" : false,
              "name" : "Supremacy (2.0 Version)",
              "preview_url" : "https://p.scdn.co/mp3-preview/9fb93331938cbeb9148faee4dc71899fd1ea2f3b?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 12,
              "type" : "track",
              "uri" : "spotify:track:0gZeyxpHzY4UryAslAXnOV"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/5HA5aLY3jJV7eimXWkRBBp"
                },
                "href" : "https://api.spotify.com/v1/artists/5HA5aLY3jJV7eimXWkRBBp",
                "id" : "5HA5aLY3jJV7eimXWkRBBp",
                "name" : "Epica",
                "type" : "artist",
                "uri" : "spotify:artist:5HA5aLY3jJV7eimXWkRBBp"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 117725,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/0sgj6SZ8kvDoaK1iwlpj8O"
              },
              "href" : "https://api.spotify.com/v1/tracks/0sgj6SZ8kvDoaK1iwlpj8O",
              "id" : "0sgj6SZ8kvDoaK1iwlpj8O",
              "is_local" : false,
              "name" : "Beyond the Depth (2.0 Version)",
              "preview_url" : "https://p.scdn.co/mp3-preview/d9da5a2e83a043155dffa2456d12874faeefec9a?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 13,
              "type" : "track",
              "uri" : "spotify:track:0sgj6SZ8kvDoaK1iwlpj8O"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/5HA5aLY3jJV7eimXWkRBBp"
                },
                "href" : "https://api.spotify.com/v1/artists/5HA5aLY3jJV7eimXWkRBBp",
                "id" : "5HA5aLY3jJV7eimXWkRBBp",
                "name" : "Epica",
                "type" : "artist",
                "uri" : "spotify:artist:5HA5aLY3jJV7eimXWkRBBp"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 83905,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/4Fb5ybkP51QZCUHYEHjRgn"
              },
              "href" : "https://api.spotify.com/v1/tracks/4Fb5ybkP51QZCUHYEHjRgn",
              "id" : "4Fb5ybkP51QZCUHYEHjRgn",
              "is_local" : false,
              "name" : "Epitome (2.0 Version)",
              "preview_url" : "https://p.scdn.co/mp3-preview/d7f9e0722fb38c9a96069052f2c38392fd81b3b3?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 14,
              "type" : "track",
              "uri" : "spotify:track:4Fb5ybkP51QZCUHYEHjRgn"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/5HA5aLY3jJV7eimXWkRBBp"
                },
                "href" : "https://api.spotify.com/v1/artists/5HA5aLY3jJV7eimXWkRBBp",
                "id" : "5HA5aLY3jJV7eimXWkRBBp",
                "name" : "Epica",
                "type" : "artist",
                "uri" : "spotify:artist:5HA5aLY3jJV7eimXWkRBBp"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 253652,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/6KWXbv1vyJjPE0piwdh9M1"
              },
              "href" : "https://api.spotify.com/v1/tracks/6KWXbv1vyJjPE0piwdh9M1",
              "id" : "6KWXbv1vyJjPE0piwdh9M1",
              "is_local" : false,
              "name" : "Inevitable Embrace (2.0 Version)",
              "preview_url" : "https://p.scdn.co/mp3-preview/c93d5af4d9399d9b2fbfaea0d043f18e40250c4e?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 15,
              "type" : "track",
              "uri" : "spotify:track:6KWXbv1vyJjPE0piwdh9M1"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/5HA5aLY3jJV7eimXWkRBBp"
                },
                "href" : "https://api.spotify.com/v1/artists/5HA5aLY3jJV7eimXWkRBBp",
                "id" : "5HA5aLY3jJV7eimXWkRBBp",
                "name" : "Epica",
                "type" : "artist",
                "uri" : "spotify:artist:5HA5aLY3jJV7eimXWkRBBp"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 224902,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/0dX6B9QjBOMcy6ofnn4bCh"
              },
              "href" : "https://api.spotify.com/v1/tracks/0dX6B9QjBOMcy6ofnn4bCh",
              "id" : "0dX6B9QjBOMcy6ofnn4bCh",
              "is_local" : false,
              "name" : "Angel of Death (2.0 Version)",
              "preview_url" : "https://p.scdn.co/mp3-preview/1b196772d53df11eacbc9fb545199eccfc28d445?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 16,
              "type" : "track",
              "uri" : "spotify:track:0dX6B9QjBOMcy6ofnn4bCh"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/5HA5aLY3jJV7eimXWkRBBp"
                },
                "href" : "https://api.spotify.com/v1/artists/5HA5aLY3jJV7eimXWkRBBp",
                "id" : "5HA5aLY3jJV7eimXWkRBBp",
                "name" : "Epica",
                "type" : "artist",
                "uri" : "spotify:artist:5HA5aLY3jJV7eimXWkRBBp"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 315893,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/7HGnrMfALZhy1PTjGN9r0y"
              },
              "href" : "https://api.spotify.com/v1/tracks/7HGnrMfALZhy1PTjGN9r0y",
              "id" : "7HGnrMfALZhy1PTjGN9r0y",
              "is_local" : false,
              "name" : "The Ultimate Return (2.0 Version)",
              "preview_url" : "https://p.scdn.co/mp3-preview/4664b760455ac8751b8fea51cc3ec294c67509ee?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 17,
              "type" : "track",
              "uri" : "spotify:track:7HGnrMfALZhy1PTjGN9r0y"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/5HA5aLY3jJV7eimXWkRBBp"
                },
                "href" : "https://api.spotify.com/v1/artists/5HA5aLY3jJV7eimXWkRBBp",
                "id" : "5HA5aLY3jJV7eimXWkRBBp",
                "name" : "Epica",
                "type" : "artist",
                "uri" : "spotify:artist:5HA5aLY3jJV7eimXWkRBBp"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 83949,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/3ruDXFwTeXupgCZQszAN7z"
              },
              "href" : "https://api.spotify.com/v1/tracks/3ruDXFwTeXupgCZQszAN7z",
              "id" : "3ruDXFwTeXupgCZQszAN7z",
              "is_local" : false,
              "name" : "Trois Vierges (Reprise 2.0 Version)",
              "preview_url" : "https://p.scdn.co/mp3-preview/aa222c15ce901019cca429ede48769bc6eb0aa63?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 18,
              "type" : "track",
              "uri" : "spotify:track:3ruDXFwTeXupgCZQszAN7z"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/5HA5aLY3jJV7eimXWkRBBp"
                },
                "href" : "https://api.spotify.com/v1/artists/5HA5aLY3jJV7eimXWkRBBp",
                "id" : "5HA5aLY3jJV7eimXWkRBBp",
                "name" : "Epica",
                "type" : "artist",
                "uri" : "spotify:artist:5HA5aLY3jJV7eimXWkRBBp"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 244015,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/4xZBL6j3fQWdgMMpjMawB2"
              },
              "href" : "https://api.spotify.com/v1/tracks/4xZBL6j3fQWdgMMpjMawB2",
              "id" : "4xZBL6j3fQWdgMMpjMawB2",
              "is_local" : false,
              "name" : "Solitary Ground (Piano 2.0 Version)",
              "preview_url" : "https://p.scdn.co/mp3-preview/8279908a4c641269b68397b82a2c92423f4553af?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 19,
              "type" : "track",
              "uri" : "spotify:track:4xZBL6j3fQWdgMMpjMawB2"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/5HA5aLY3jJV7eimXWkRBBp"
                },
                "href" : "https://api.spotify.com/v1/artists/5HA5aLY3jJV7eimXWkRBBp",
                "id" : "5HA5aLY3jJV7eimXWkRBBp",
                "name" : "Epica",
                "type" : "artist",
                "uri" : "spotify:artist:5HA5aLY3jJV7eimXWkRBBp"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 245208,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/5KEY0ZgqpdwFndVaaNvqND"
              },
              "href" : "https://api.spotify.com/v1/tracks/5KEY0ZgqpdwFndVaaNvqND",
              "id" : "5KEY0ZgqpdwFndVaaNvqND",
              "is_local" : false,
              "name" : "Quietus (Score 2.0 Version)",
              "preview_url" : "https://p.scdn.co/mp3-preview/654f317704f59f0e0c90dc4096c1cb102078b21e?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 20,
              "type" : "track",
              "uri" : "spotify:track:5KEY0ZgqpdwFndVaaNvqND"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/5HA5aLY3jJV7eimXWkRBBp"
                },
                "href" : "https://api.spotify.com/v1/artists/5HA5aLY3jJV7eimXWkRBBp",
                "id" : "5HA5aLY3jJV7eimXWkRBBp",
                "name" : "Epica",
                "type" : "artist",
                "uri" : "spotify:artist:5HA5aLY3jJV7eimXWkRBBp"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 112628,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/6eQQ8gB4IRz29c0ruvsdrF"
              },
              "href" : "https://api.spotify.com/v1/tracks/6eQQ8gB4IRz29c0ruvsdrF",
              "id" : "6eQQ8gB4IRz29c0ruvsdrF",
              "is_local" : false,
              "name" : "Vengeance Is Mine (Remastered)",
              "preview_url" : "https://p.scdn.co/mp3-preview/5ef5394b1aeed2aaf5338858d9cd2beeef6881e8?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 21,
              "type" : "track",
              "uri" : "spotify:track:6eQQ8gB4IRz29c0ruvsdrF"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/5HA5aLY3jJV7eimXWkRBBp"
                },
                "href" : "https://api.spotify.com/v1/artists/5HA5aLY3jJV7eimXWkRBBp",
                "id" : "5HA5aLY3jJV7eimXWkRBBp",
                "name" : "Epica",
                "type" : "artist",
                "uri" : "spotify:artist:5HA5aLY3jJV7eimXWkRBBp"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 184167,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/0HiWfJTDMq4uhMu8koNwDT"
              },
              "href" : "https://api.spotify.com/v1/tracks/0HiWfJTDMq4uhMu8koNwDT",
              "id" : "0HiWfJTDMq4uhMu8koNwDT",
              "is_local" : false,
              "name" : "Unholy Trinity (Remastered)",
              "preview_url" : "https://p.scdn.co/mp3-preview/5a6353ceb5f6449e4f6c63ddfdcd2dc3c03addd0?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 22,
              "type" : "track",
              "uri" : "spotify:track:0HiWfJTDMq4uhMu8koNwDT"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/5HA5aLY3jJV7eimXWkRBBp"
                },
                "href" : "https://api.spotify.com/v1/artists/5HA5aLY3jJV7eimXWkRBBp",
                "id" : "5HA5aLY3jJV7eimXWkRBBp",
                "name" : "Epica",
                "type" : "artist",
                "uri" : "spotify:artist:5HA5aLY3jJV7eimXWkRBBp"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 128278,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/6ChHH34lETxAaJwNQmcvbt"
              },
              "href" : "https://api.spotify.com/v1/tracks/6ChHH34lETxAaJwNQmcvbt",
              "id" : "6ChHH34lETxAaJwNQmcvbt",
              "is_local" : false,
              "name" : "The Valley (Remastered)",
              "preview_url" : "https://p.scdn.co/mp3-preview/830005b8bd59d417893839dff0317a0f908d71f3?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 23,
              "type" : "track",
              "uri" : "spotify:track:6ChHH34lETxAaJwNQmcvbt"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/5HA5aLY3jJV7eimXWkRBBp"
                },
                "href" : "https://api.spotify.com/v1/artists/5HA5aLY3jJV7eimXWkRBBp",
                "id" : "5HA5aLY3jJV7eimXWkRBBp",
                "name" : "Epica",
                "type" : "artist",
                "uri" : "spotify:artist:5HA5aLY3jJV7eimXWkRBBp"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 265395,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/7ktJxNyWgXJH3T36FwDZNd"
              },
              "href" : "https://api.spotify.com/v1/tracks/7ktJxNyWgXJH3T36FwDZNd",
              "id" : "7ktJxNyWgXJH3T36FwDZNd",
              "is_local" : false,
              "name" : "Caught in a Web (Remastered)",
              "preview_url" : "https://p.scdn.co/mp3-preview/06303c9ad49b725caf11054238dc6ca5123c616e?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 24,
              "type" : "track",
              "uri" : "spotify:track:7ktJxNyWgXJH3T36FwDZNd"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/5HA5aLY3jJV7eimXWkRBBp"
                },
                "href" : "https://api.spotify.com/v1/artists/5HA5aLY3jJV7eimXWkRBBp",
                "id" : "5HA5aLY3jJV7eimXWkRBBp",
                "name" : "Epica",
                "type" : "artist",
                "uri" : "spotify:artist:5HA5aLY3jJV7eimXWkRBBp"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 126683,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/1BJRR0diLCU5I2DdzmZqFW"
              },
              "href" : "https://api.spotify.com/v1/tracks/1BJRR0diLCU5I2DdzmZqFW",
              "id" : "1BJRR0diLCU5I2DdzmZqFW",
              "is_local" : false,
              "name" : "Insomnia (Remastered)",
              "preview_url" : "https://p.scdn.co/mp3-preview/1bd5a00732af1103bd2144f589f449c15fbe12ea?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 25,
              "type" : "track",
              "uri" : "spotify:track:1BJRR0diLCU5I2DdzmZqFW"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/5HA5aLY3jJV7eimXWkRBBp"
                },
                "href" : "https://api.spotify.com/v1/artists/5HA5aLY3jJV7eimXWkRBBp",
                "id" : "5HA5aLY3jJV7eimXWkRBBp",
                "name" : "Epica",
                "type" : "artist",
                "uri" : "spotify:artist:5HA5aLY3jJV7eimXWkRBBp"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 167875,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/02NitVBTdoiJBovghXNFNS"
              },
              "href" : "https://api.spotify.com/v1/tracks/02NitVBTdoiJBovghXNFNS",
              "id" : "02NitVBTdoiJBovghXNFNS",
              "is_local" : false,
              "name" : "Under the Aegis (Remastered)",
              "preview_url" : "https://p.scdn.co/mp3-preview/e67eb7778a651a256b91448d58121a5c10541df2?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 26,
              "type" : "track",
              "uri" : "spotify:track:02NitVBTdoiJBovghXNFNS"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/5HA5aLY3jJV7eimXWkRBBp"
                },
                "href" : "https://api.spotify.com/v1/artists/5HA5aLY3jJV7eimXWkRBBp",
                "id" : "5HA5aLY3jJV7eimXWkRBBp",
                "name" : "Epica",
                "type" : "artist",
                "uri" : "spotify:artist:5HA5aLY3jJV7eimXWkRBBp"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 280738,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/4TyNHy5LbYiBN7r096GPRd"
              },
              "href" : "https://api.spotify.com/v1/tracks/4TyNHy5LbYiBN7r096GPRd",
              "id" : "4TyNHy5LbYiBN7r096GPRd",
              "is_local" : false,
              "name" : "Trois Vierges (Solo Version Remastered)",
              "preview_url" : "https://p.scdn.co/mp3-preview/3935e0009960c33e946ebdde32d4b94d5db58477?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 27,
              "type" : "track",
              "uri" : "spotify:track:4TyNHy5LbYiBN7r096GPRd"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/5HA5aLY3jJV7eimXWkRBBp"
                },
                "href" : "https://api.spotify.com/v1/artists/5HA5aLY3jJV7eimXWkRBBp",
                "id" : "5HA5aLY3jJV7eimXWkRBBp",
                "name" : "Epica",
                "type" : "artist",
                "uri" : "spotify:artist:5HA5aLY3jJV7eimXWkRBBp"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 165638,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/0nCRdQq5YfaMhRqgilXZI7"
              },
              "href" : "https://api.spotify.com/v1/tracks/0nCRdQq5YfaMhRqgilXZI7",
              "id" : "0nCRdQq5YfaMhRqgilXZI7",
              "is_local" : false,
              "name" : "Mystica (Remastered)",
              "preview_url" : "https://p.scdn.co/mp3-preview/29003c76b019548b31d127adf32a665dfe306506?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 28,
              "type" : "track",
              "uri" : "spotify:track:0nCRdQq5YfaMhRqgilXZI7"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/5HA5aLY3jJV7eimXWkRBBp"
                },
                "href" : "https://api.spotify.com/v1/artists/5HA5aLY3jJV7eimXWkRBBp",
                "id" : "5HA5aLY3jJV7eimXWkRBBp",
                "name" : "Epica",
                "type" : "artist",
                "uri" : "spotify:artist:5HA5aLY3jJV7eimXWkRBBp"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 339157,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/6Uud6zhP7oEA7ALeh3J1VU"
              },
              "href" : "https://api.spotify.com/v1/tracks/6Uud6zhP7oEA7ALeh3J1VU",
              "id" : "6Uud6zhP7oEA7ALeh3J1VU",
              "is_local" : false,
              "name" : "Valley of Sins (Remastered)",
              "preview_url" : "https://p.scdn.co/mp3-preview/f7475b721bf299a1463826d32710c90f05d4af78?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 29,
              "type" : "track",
              "uri" : "spotify:track:6Uud6zhP7oEA7ALeh3J1VU"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/5HA5aLY3jJV7eimXWkRBBp"
                },
                "href" : "https://api.spotify.com/v1/artists/5HA5aLY3jJV7eimXWkRBBp",
                "id" : "5HA5aLY3jJV7eimXWkRBBp",
                "name" : "Epica",
                "type" : "artist",
                "uri" : "spotify:artist:5HA5aLY3jJV7eimXWkRBBp"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 129313,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/1sPRp1FiQwmzpi9vhB3szK"
              },
              "href" : "https://api.spotify.com/v1/tracks/1sPRp1FiQwmzpi9vhB3szK",
              "id" : "1sPRp1FiQwmzpi9vhB3szK",
              "is_local" : false,
              "name" : "Empty Gaze (Remastered)",
              "preview_url" : "https://p.scdn.co/mp3-preview/e2eef05b26bc236f7da5e20fd20534d57ba942b1?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 30,
              "type" : "track",
              "uri" : "spotify:track:1sPRp1FiQwmzpi9vhB3szK"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/5HA5aLY3jJV7eimXWkRBBp"
                },
                "href" : "https://api.spotify.com/v1/artists/5HA5aLY3jJV7eimXWkRBBp",
                "id" : "5HA5aLY3jJV7eimXWkRBBp",
                "name" : "Epica",
                "type" : "artist",
                "uri" : "spotify:artist:5HA5aLY3jJV7eimXWkRBBp"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 143654,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/2Hx3NBKKFtAoycKexzhFQj"
              },
              "href" : "https://api.spotify.com/v1/tracks/2Hx3NBKKFtAoycKexzhFQj",
              "id" : "2Hx3NBKKFtAoycKexzhFQj",
              "is_local" : false,
              "name" : "The Alleged Paradigm (Remastered)",
              "preview_url" : "https://p.scdn.co/mp3-preview/4821d61763f528060fbdef39d5926aa64b8eafa1?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 31,
              "type" : "track",
              "uri" : "spotify:track:2Hx3NBKKFtAoycKexzhFQj"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/5HA5aLY3jJV7eimXWkRBBp"
                },
                "href" : "https://api.spotify.com/v1/artists/5HA5aLY3jJV7eimXWkRBBp",
                "id" : "5HA5aLY3jJV7eimXWkRBBp",
                "name" : "Epica",
                "type" : "artist",
                "uri" : "spotify:artist:5HA5aLY3jJV7eimXWkRBBp"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 198744,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/3EClqNyrK4qpgFiqhWTjcN"
              },
              "href" : "https://api.spotify.com/v1/tracks/3EClqNyrK4qpgFiqhWTjcN",
              "id" : "3EClqNyrK4qpgFiqhWTjcN",
              "is_local" : false,
              "name" : "Supremacy (Remastered)",
              "preview_url" : "https://p.scdn.co/mp3-preview/d6082c49990353f8b022d1887bdc793c692892a6?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 32,
              "type" : "track",
              "uri" : "spotify:track:3EClqNyrK4qpgFiqhWTjcN"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/5HA5aLY3jJV7eimXWkRBBp"
                },
                "href" : "https://api.spotify.com/v1/artists/5HA5aLY3jJV7eimXWkRBBp",
                "id" : "5HA5aLY3jJV7eimXWkRBBp",
                "name" : "Epica",
                "type" : "artist",
                "uri" : "spotify:artist:5HA5aLY3jJV7eimXWkRBBp"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 115498,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/3PFKU4vULfCu4onPcNPqMs"
              },
              "href" : "https://api.spotify.com/v1/tracks/3PFKU4vULfCu4onPcNPqMs",
              "id" : "3PFKU4vULfCu4onPcNPqMs",
              "is_local" : false,
              "name" : "Beyond the Depth (Remastered)",
              "preview_url" : "https://p.scdn.co/mp3-preview/ecf2a3cb5b4fc8c7696add9f83b2b28a01e817b2?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 33,
              "type" : "track",
              "uri" : "spotify:track:3PFKU4vULfCu4onPcNPqMs"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/5HA5aLY3jJV7eimXWkRBBp"
                },
                "href" : "https://api.spotify.com/v1/artists/5HA5aLY3jJV7eimXWkRBBp",
                "id" : "5HA5aLY3jJV7eimXWkRBBp",
                "name" : "Epica",
                "type" : "artist",
                "uri" : "spotify:artist:5HA5aLY3jJV7eimXWkRBBp"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 76909,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/27LYuIPBtEkKkpHZ4XK9Jv"
              },
              "href" : "https://api.spotify.com/v1/tracks/27LYuIPBtEkKkpHZ4XK9Jv",
              "id" : "27LYuIPBtEkKkpHZ4XK9Jv",
              "is_local" : false,
              "name" : "Epitome (Remastered)",
              "preview_url" : "https://p.scdn.co/mp3-preview/005a86cd2b29d1e72fc8f70ccbdec8140e9f1dfa?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 34,
              "type" : "track",
              "uri" : "spotify:track:27LYuIPBtEkKkpHZ4XK9Jv"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/5HA5aLY3jJV7eimXWkRBBp"
                },
                "href" : "https://api.spotify.com/v1/artists/5HA5aLY3jJV7eimXWkRBBp",
                "id" : "5HA5aLY3jJV7eimXWkRBBp",
                "name" : "Epica",
                "type" : "artist",
                "uri" : "spotify:artist:5HA5aLY3jJV7eimXWkRBBp"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 229611,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/3sGdS26Vhq2eFs8GgXObMx"
              },
              "href" : "https://api.spotify.com/v1/tracks/3sGdS26Vhq2eFs8GgXObMx",
              "id" : "3sGdS26Vhq2eFs8GgXObMx",
              "is_local" : false,
              "name" : "Inevitable Embrace (Remastered)",
              "preview_url" : "https://p.scdn.co/mp3-preview/38c2716a46e6372056b7756a75d63824995c3797?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 35,
              "type" : "track",
              "uri" : "spotify:track:3sGdS26Vhq2eFs8GgXObMx"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/5HA5aLY3jJV7eimXWkRBBp"
                },
                "href" : "https://api.spotify.com/v1/artists/5HA5aLY3jJV7eimXWkRBBp",
                "id" : "5HA5aLY3jJV7eimXWkRBBp",
                "name" : "Epica",
                "type" : "artist",
                "uri" : "spotify:artist:5HA5aLY3jJV7eimXWkRBBp"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 208358,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/4wh9kCOscI5k9twzFMhRSq"
              },
              "href" : "https://api.spotify.com/v1/tracks/4wh9kCOscI5k9twzFMhRSq",
              "id" : "4wh9kCOscI5k9twzFMhRSq",
              "is_local" : false,
              "name" : "Angel of Death (Remastered)",
              "preview_url" : "https://p.scdn.co/mp3-preview/2df1acafd6e0d32521c4af2f1eff30df2972efec?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 36,
              "type" : "track",
              "uri" : "spotify:track:4wh9kCOscI5k9twzFMhRSq"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/5HA5aLY3jJV7eimXWkRBBp"
                },
                "href" : "https://api.spotify.com/v1/artists/5HA5aLY3jJV7eimXWkRBBp",
                "id" : "5HA5aLY3jJV7eimXWkRBBp",
                "name" : "Epica",
                "type" : "artist",
                "uri" : "spotify:artist:5HA5aLY3jJV7eimXWkRBBp"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 285925,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/6kO4xaODGSmxVrWtA9Iqfn"
              },
              "href" : "https://api.spotify.com/v1/tracks/6kO4xaODGSmxVrWtA9Iqfn",
              "id" : "6kO4xaODGSmxVrWtA9Iqfn",
              "is_local" : false,
              "name" : "The Ultimate Return (Remastered)",
              "preview_url" : "https://p.scdn.co/mp3-preview/9c5ae968c6d0dcd0753f3a39d998042502b3d1a6?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 37,
              "type" : "track",
              "uri" : "spotify:track:6kO4xaODGSmxVrWtA9Iqfn"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/5HA5aLY3jJV7eimXWkRBBp"
                },
                "href" : "https://api.spotify.com/v1/artists/5HA5aLY3jJV7eimXWkRBBp",
                "id" : "5HA5aLY3jJV7eimXWkRBBp",
                "name" : "Epica",
                "type" : "artist",
                "uri" : "spotify:artist:5HA5aLY3jJV7eimXWkRBBp"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 123859,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/5kLZf77fLX7Sh9IMjw8jrk"
              },
              "href" : "https://api.spotify.com/v1/tracks/5kLZf77fLX7Sh9IMjw8jrk",
              "id" : "5kLZf77fLX7Sh9IMjw8jrk",
              "is_local" : false,
              "name" : "Trois Vierges (Reprise Remastered)",
              "preview_url" : "https://p.scdn.co/mp3-preview/e5dcf0e02f1aeacf409be43ad6a2c3b7c3affe72?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 38,
              "type" : "track",
              "uri" : "spotify:track:5kLZf77fLX7Sh9IMjw8jrk"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/5HA5aLY3jJV7eimXWkRBBp"
                },
                "href" : "https://api.spotify.com/v1/artists/5HA5aLY3jJV7eimXWkRBBp",
                "id" : "5HA5aLY3jJV7eimXWkRBBp",
                "name" : "Epica",
                "type" : "artist",
                "uri" : "spotify:artist:5HA5aLY3jJV7eimXWkRBBp"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 246095,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/6I929rJ9yRDxRg7FHjUbfY"
              },
              "href" : "https://api.spotify.com/v1/tracks/6I929rJ9yRDxRg7FHjUbfY",
              "id" : "6I929rJ9yRDxRg7FHjUbfY",
              "is_local" : false,
              "name" : "Solitary Ground (Piano Version Remastered)",
              "preview_url" : "https://p.scdn.co/mp3-preview/06fcf04ae97b14d696c6bbc6491d155b00f1e5c3?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 39,
              "type" : "track",
              "uri" : "spotify:track:6I929rJ9yRDxRg7FHjUbfY"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/5HA5aLY3jJV7eimXWkRBBp"
                },
                "href" : "https://api.spotify.com/v1/artists/5HA5aLY3jJV7eimXWkRBBp",
                "id" : "5HA5aLY3jJV7eimXWkRBBp",
                "name" : "Epica",
                "type" : "artist",
                "uri" : "spotify:artist:5HA5aLY3jJV7eimXWkRBBp"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 234688,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/3d5SeH5DhGoCxQmBG9Rcw1"
              },
              "href" : "https://api.spotify.com/v1/tracks/3d5SeH5DhGoCxQmBG9Rcw1",
              "id" : "3d5SeH5DhGoCxQmBG9Rcw1",
              "is_local" : false,
              "name" : "Quietus (Score Version Remastered)",
              "preview_url" : "https://p.scdn.co/mp3-preview/da99396a6770dfb1cde91611c58e6147bb8299ca?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 40,
              "type" : "track",
              "uri" : "spotify:track:3d5SeH5DhGoCxQmBG9Rcw1"
            } ],
            "limit" : 50,
            "next" : null,
            "offset" : 0,
            "previous" : null,
            "total" : 40
          },
          "type" : "album",
          "uri" : "spotify:album:1vBNhnD8XleJ5wtJYiKzuD"
        }
      }, {
        "added_at" : "2018-02-16T11:12:28Z",
        "album" : {
          "album_type" : "album",
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
            },
            "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
            "id" : "7IAXZaLTb6nkJr8RmVPn5y",
            "name" : "Angra",
            "type" : "artist",
            "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
          } ],
          "available_markets" : [ ],
          "copyrights" : [ {
            "text" : "2018 Edel Germany GmbH. earMUSIC is a project of Edel.",
            "type" : "C"
          }, {
            "text" : "2018 Edel Germany GmbH. earMUSIC is a project of Edel.",
            "type" : "P"
          } ],
          "external_ids" : {
            "upc" : "4029759127673"
          },
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/5nwuV8ZeyyMJTwa8qxyLyo"
          },
          "genres" : [ ],
          "href" : "https://api.spotify.com/v1/albums/5nwuV8ZeyyMJTwa8qxyLyo",
          "id" : "5nwuV8ZeyyMJTwa8qxyLyo",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b2730c375f9f6b4c2367967e26ae",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e020c375f9f6b4c2367967e26ae",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d000048510c375f9f6b4c2367967e26ae",
            "width" : 64
          } ],
          "label" : "earMUSIC",
          "name" : "Ømni",
          "popularity" : 0,
          "release_date" : "2018-02-16",
          "release_date_precision" : "day",
          "total_tracks" : 11,
          "tracks" : {
            "href" : "https://api.spotify.com/v1/albums/5nwuV8ZeyyMJTwa8qxyLyo/tracks?offset=0&limit=50",
            "items" : [ {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 276893,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/5eJS3FoEESiFSxYtJBKfd6"
              },
              "href" : "https://api.spotify.com/v1/tracks/5eJS3FoEESiFSxYtJBKfd6",
              "id" : "5eJS3FoEESiFSxYtJBKfd6",
              "is_local" : false,
              "name" : "Light of Transcendence",
              "preview_url" : null,
              "track_number" : 1,
              "type" : "track",
              "uri" : "spotify:track:5eJS3FoEESiFSxYtJBKfd6"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 267473,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/72ejTKSE1USO0F5IOmT7q3"
              },
              "href" : "https://api.spotify.com/v1/tracks/72ejTKSE1USO0F5IOmT7q3",
              "id" : "72ejTKSE1USO0F5IOmT7q3",
              "is_local" : false,
              "name" : "Travelers of Time",
              "preview_url" : null,
              "track_number" : 2,
              "type" : "track",
              "uri" : "spotify:track:72ejTKSE1USO0F5IOmT7q3"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              }, {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/0t9i2yNpYr4QGde2gz8YVg"
                },
                "href" : "https://api.spotify.com/v1/artists/0t9i2yNpYr4QGde2gz8YVg",
                "id" : "0t9i2yNpYr4QGde2gz8YVg",
                "name" : "Alissa White-Gluz",
                "type" : "artist",
                "uri" : "spotify:artist:0t9i2yNpYr4QGde2gz8YVg"
              }, {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/4ZfTpxwHwtot9Ps59bXAF8"
                },
                "href" : "https://api.spotify.com/v1/artists/4ZfTpxwHwtot9Ps59bXAF8",
                "id" : "4ZfTpxwHwtot9Ps59bXAF8",
                "name" : "Sandy",
                "type" : "artist",
                "uri" : "spotify:artist:4ZfTpxwHwtot9Ps59bXAF8"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 349197,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/0VcQ4c6ysb8LSfImBi1oD2"
              },
              "href" : "https://api.spotify.com/v1/tracks/0VcQ4c6ysb8LSfImBi1oD2",
              "id" : "0VcQ4c6ysb8LSfImBi1oD2",
              "is_local" : false,
              "name" : "Black Widow's Web",
              "preview_url" : null,
              "track_number" : 3,
              "type" : "track",
              "uri" : "spotify:track:0VcQ4c6ysb8LSfImBi1oD2"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 331920,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/4Hz7essXaeZ46wdrM9DTyy"
              },
              "href" : "https://api.spotify.com/v1/tracks/4Hz7essXaeZ46wdrM9DTyy",
              "id" : "4Hz7essXaeZ46wdrM9DTyy",
              "is_local" : false,
              "name" : "Insania",
              "preview_url" : null,
              "track_number" : 4,
              "type" : "track",
              "uri" : "spotify:track:4Hz7essXaeZ46wdrM9DTyy"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 259413,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/5TBQpDv2UpJ7OLnpP1VhlJ"
              },
              "href" : "https://api.spotify.com/v1/tracks/5TBQpDv2UpJ7OLnpP1VhlJ",
              "id" : "5TBQpDv2UpJ7OLnpP1VhlJ",
              "is_local" : false,
              "name" : "The Bottom of My Soul",
              "preview_url" : null,
              "track_number" : 5,
              "type" : "track",
              "uri" : "spotify:track:5TBQpDv2UpJ7OLnpP1VhlJ"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              }, {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/5RmLUrjJz5bpP8dF4lYdyK"
                },
                "href" : "https://api.spotify.com/v1/artists/5RmLUrjJz5bpP8dF4lYdyK",
                "id" : "5RmLUrjJz5bpP8dF4lYdyK",
                "name" : "Kiko Loureiro",
                "type" : "artist",
                "uri" : "spotify:artist:5RmLUrjJz5bpP8dF4lYdyK"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 283213,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/14Kjh2wayyA992jz3mrXiX"
              },
              "href" : "https://api.spotify.com/v1/tracks/14Kjh2wayyA992jz3mrXiX",
              "id" : "14Kjh2wayyA992jz3mrXiX",
              "is_local" : false,
              "name" : "War Horns",
              "preview_url" : null,
              "track_number" : 6,
              "type" : "track",
              "uri" : "spotify:track:14Kjh2wayyA992jz3mrXiX"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 353409,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/4ZovVMzcmqAJeEP1kMBtmq"
              },
              "href" : "https://api.spotify.com/v1/tracks/4ZovVMzcmqAJeEP1kMBtmq",
              "id" : "4ZovVMzcmqAJeEP1kMBtmq",
              "is_local" : false,
              "name" : "Caveman",
              "preview_url" : null,
              "track_number" : 7,
              "type" : "track",
              "uri" : "spotify:track:4ZovVMzcmqAJeEP1kMBtmq"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 418240,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/31awxV2d42gB1gbzoN9cr1"
              },
              "href" : "https://api.spotify.com/v1/tracks/31awxV2d42gB1gbzoN9cr1",
              "id" : "31awxV2d42gB1gbzoN9cr1",
              "is_local" : false,
              "name" : "Magic Mirror",
              "preview_url" : null,
              "track_number" : 8,
              "type" : "track",
              "uri" : "spotify:track:31awxV2d42gB1gbzoN9cr1"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 283720,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/0eqUkHG6IfgqYPuYisuOYm"
              },
              "href" : "https://api.spotify.com/v1/tracks/0eqUkHG6IfgqYPuYisuOYm",
              "id" : "0eqUkHG6IfgqYPuYisuOYm",
              "is_local" : false,
              "name" : "Always More",
              "preview_url" : null,
              "track_number" : 9,
              "type" : "track",
              "uri" : "spotify:track:0eqUkHG6IfgqYPuYisuOYm"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 511025,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/4ANNms9WMCmM4Q61kUjavH"
              },
              "href" : "https://api.spotify.com/v1/tracks/4ANNms9WMCmM4Q61kUjavH",
              "id" : "4ANNms9WMCmM4Q61kUjavH",
              "is_local" : false,
              "name" : "Ømni - Silence Inside",
              "preview_url" : null,
              "track_number" : 10,
              "type" : "track",
              "uri" : "spotify:track:4ANNms9WMCmM4Q61kUjavH"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 314493,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/4Cy2MOsYOpNNaYbNeOuSPt"
              },
              "href" : "https://api.spotify.com/v1/tracks/4Cy2MOsYOpNNaYbNeOuSPt",
              "id" : "4Cy2MOsYOpNNaYbNeOuSPt",
              "is_local" : false,
              "name" : "Ømni - Infinite Nothing",
              "preview_url" : null,
              "track_number" : 11,
              "type" : "track",
              "uri" : "spotify:track:4Cy2MOsYOpNNaYbNeOuSPt"
            } ],
            "limit" : 50,
            "next" : null,
            "offset" : 0,
            "previous" : null,
            "total" : 11
          },
          "type" : "album",
          "uri" : "spotify:album:5nwuV8ZeyyMJTwa8qxyLyo"
        }
      }, {
        "added_at" : "2018-01-30T13:08:14Z",
        "album" : {
          "album_type" : "album",
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/7xOY9EUkfeLNjlgsgXpfcA"
            },
            "href" : "https://api.spotify.com/v1/artists/7xOY9EUkfeLNjlgsgXpfcA",
            "id" : "7xOY9EUkfeLNjlgsgXpfcA",
            "name" : "Symbols",
            "type" : "artist",
            "uri" : "spotify:artist:7xOY9EUkfeLNjlgsgXpfcA"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
          "copyrights" : [ {
            "text" : "2017 Eduardo Teixeira da Fonseca Vasconcellos",
            "type" : "C"
          }, {
            "text" : "2017 Eduardo Teixeira da Fonseca Vasconcellos",
            "type" : "P"
          } ],
          "external_ids" : {
            "upc" : "191924997214"
          },
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/6NiUnTcZSKPXfATQDjYx24"
          },
          "genres" : [ ],
          "href" : "https://api.spotify.com/v1/albums/6NiUnTcZSKPXfATQDjYx24",
          "id" : "6NiUnTcZSKPXfATQDjYx24",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b273e086f240f3dcbe6396b1d048",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e02e086f240f3dcbe6396b1d048",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d00004851e086f240f3dcbe6396b1d048",
            "width" : 64
          } ],
          "label" : "Symbols",
          "name" : "Call to the End",
          "popularity" : 21,
          "release_date" : "2017-06-02",
          "release_date_precision" : "day",
          "total_tracks" : 9,
          "tracks" : {
            "href" : "https://api.spotify.com/v1/albums/6NiUnTcZSKPXfATQDjYx24/tracks?offset=0&limit=50",
            "items" : [ {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7xOY9EUkfeLNjlgsgXpfcA"
                },
                "href" : "https://api.spotify.com/v1/artists/7xOY9EUkfeLNjlgsgXpfcA",
                "id" : "7xOY9EUkfeLNjlgsgXpfcA",
                "name" : "Symbols",
                "type" : "artist",
                "uri" : "spotify:artist:7xOY9EUkfeLNjlgsgXpfcA"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 334250,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/5t6DNxe0z964tfiSAfpGyK"
              },
              "href" : "https://api.spotify.com/v1/tracks/5t6DNxe0z964tfiSAfpGyK",
              "id" : "5t6DNxe0z964tfiSAfpGyK",
              "is_local" : false,
              "name" : "Eyes in Flames",
              "preview_url" : "https://p.scdn.co/mp3-preview/ac55137b6e881b9dcbcd438ea53a8f64547e560d?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 1,
              "type" : "track",
              "uri" : "spotify:track:5t6DNxe0z964tfiSAfpGyK"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7xOY9EUkfeLNjlgsgXpfcA"
                },
                "href" : "https://api.spotify.com/v1/artists/7xOY9EUkfeLNjlgsgXpfcA",
                "id" : "7xOY9EUkfeLNjlgsgXpfcA",
                "name" : "Symbols",
                "type" : "artist",
                "uri" : "spotify:artist:7xOY9EUkfeLNjlgsgXpfcA"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 256640,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/13CxpAYxAdKgM75fBL91Lc"
              },
              "href" : "https://api.spotify.com/v1/tracks/13CxpAYxAdKgM75fBL91Lc",
              "id" : "13CxpAYxAdKgM75fBL91Lc",
              "is_local" : false,
              "name" : "Power Machine",
              "preview_url" : "https://p.scdn.co/mp3-preview/d408880ca6d5cc6591bb8866b13aea5413cd393e?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 2,
              "type" : "track",
              "uri" : "spotify:track:13CxpAYxAdKgM75fBL91Lc"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7xOY9EUkfeLNjlgsgXpfcA"
                },
                "href" : "https://api.spotify.com/v1/artists/7xOY9EUkfeLNjlgsgXpfcA",
                "id" : "7xOY9EUkfeLNjlgsgXpfcA",
                "name" : "Symbols",
                "type" : "artist",
                "uri" : "spotify:artist:7xOY9EUkfeLNjlgsgXpfcA"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 199773,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/2bi3M5bYWdFC459DdvvLom"
              },
              "href" : "https://api.spotify.com/v1/tracks/2bi3M5bYWdFC459DdvvLom",
              "id" : "2bi3M5bYWdFC459DdvvLom",
              "is_local" : false,
              "name" : "Call to the End",
              "preview_url" : "https://p.scdn.co/mp3-preview/0c13cacf48bb391b0fb0b249d1238c9eba6aaf60?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 3,
              "type" : "track",
              "uri" : "spotify:track:2bi3M5bYWdFC459DdvvLom"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7xOY9EUkfeLNjlgsgXpfcA"
                },
                "href" : "https://api.spotify.com/v1/artists/7xOY9EUkfeLNjlgsgXpfcA",
                "id" : "7xOY9EUkfeLNjlgsgXpfcA",
                "name" : "Symbols",
                "type" : "artist",
                "uri" : "spotify:artist:7xOY9EUkfeLNjlgsgXpfcA"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 243186,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/2p3nGl8sy5DtLdwk91nQlJ"
              },
              "href" : "https://api.spotify.com/v1/tracks/2p3nGl8sy5DtLdwk91nQlJ",
              "id" : "2p3nGl8sy5DtLdwk91nQlJ",
              "is_local" : false,
              "name" : "The Traveller",
              "preview_url" : "https://p.scdn.co/mp3-preview/967e74ec31d7e2c4f21bc4f8793ce9b682efa38f?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 4,
              "type" : "track",
              "uri" : "spotify:track:2p3nGl8sy5DtLdwk91nQlJ"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7xOY9EUkfeLNjlgsgXpfcA"
                },
                "href" : "https://api.spotify.com/v1/artists/7xOY9EUkfeLNjlgsgXpfcA",
                "id" : "7xOY9EUkfeLNjlgsgXpfcA",
                "name" : "Symbols",
                "type" : "artist",
                "uri" : "spotify:artist:7xOY9EUkfeLNjlgsgXpfcA"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 256773,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/3YxSQfxBEh3zG5IJDyCvLx"
              },
              "href" : "https://api.spotify.com/v1/tracks/3YxSQfxBEh3zG5IJDyCvLx",
              "id" : "3YxSQfxBEh3zG5IJDyCvLx",
              "is_local" : false,
              "name" : "Introspection",
              "preview_url" : "https://p.scdn.co/mp3-preview/0b1018eeebe078b435bade4e2e443ce0e75d99f8?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 5,
              "type" : "track",
              "uri" : "spotify:track:3YxSQfxBEh3zG5IJDyCvLx"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7xOY9EUkfeLNjlgsgXpfcA"
                },
                "href" : "https://api.spotify.com/v1/artists/7xOY9EUkfeLNjlgsgXpfcA",
                "id" : "7xOY9EUkfeLNjlgsgXpfcA",
                "name" : "Symbols",
                "type" : "artist",
                "uri" : "spotify:artist:7xOY9EUkfeLNjlgsgXpfcA"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 224280,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/3pgM7ltKMMmJTjlkY5SKu5"
              },
              "href" : "https://api.spotify.com/v1/tracks/3pgM7ltKMMmJTjlkY5SKu5",
              "id" : "3pgM7ltKMMmJTjlkY5SKu5",
              "is_local" : false,
              "name" : "Save Africa",
              "preview_url" : "https://p.scdn.co/mp3-preview/309dd95cb2361577251297db68f1ad4b04de1db7?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 6,
              "type" : "track",
              "uri" : "spotify:track:3pgM7ltKMMmJTjlkY5SKu5"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7xOY9EUkfeLNjlgsgXpfcA"
                },
                "href" : "https://api.spotify.com/v1/artists/7xOY9EUkfeLNjlgsgXpfcA",
                "id" : "7xOY9EUkfeLNjlgsgXpfcA",
                "name" : "Symbols",
                "type" : "artist",
                "uri" : "spotify:artist:7xOY9EUkfeLNjlgsgXpfcA"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 355826,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/3fQu1pJoyd2otXbC8b4PsR"
              },
              "href" : "https://api.spotify.com/v1/tracks/3fQu1pJoyd2otXbC8b4PsR",
              "id" : "3fQu1pJoyd2otXbC8b4PsR",
              "is_local" : false,
              "name" : "Stop the Wars",
              "preview_url" : "https://p.scdn.co/mp3-preview/573eb238b56b9e515e1328df1e0db30ef7fcba85?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 7,
              "type" : "track",
              "uri" : "spotify:track:3fQu1pJoyd2otXbC8b4PsR"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7xOY9EUkfeLNjlgsgXpfcA"
                },
                "href" : "https://api.spotify.com/v1/artists/7xOY9EUkfeLNjlgsgXpfcA",
                "id" : "7xOY9EUkfeLNjlgsgXpfcA",
                "name" : "Symbols",
                "type" : "artist",
                "uri" : "spotify:artist:7xOY9EUkfeLNjlgsgXpfcA"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 400053,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/2fDQPBkj3mfx0BLEuarVBd"
              },
              "href" : "https://api.spotify.com/v1/tracks/2fDQPBkj3mfx0BLEuarVBd",
              "id" : "2fDQPBkj3mfx0BLEuarVBd",
              "is_local" : false,
              "name" : "Sons of Lord",
              "preview_url" : "https://p.scdn.co/mp3-preview/36e56adccb8ac6110796a67c177b08f3521a2b29?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 8,
              "type" : "track",
              "uri" : "spotify:track:2fDQPBkj3mfx0BLEuarVBd"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7xOY9EUkfeLNjlgsgXpfcA"
                },
                "href" : "https://api.spotify.com/v1/artists/7xOY9EUkfeLNjlgsgXpfcA",
                "id" : "7xOY9EUkfeLNjlgsgXpfcA",
                "name" : "Symbols",
                "type" : "artist",
                "uri" : "spotify:artist:7xOY9EUkfeLNjlgsgXpfcA"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 284226,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/5PSKp0LgzOSQAxHWfxIHrh"
              },
              "href" : "https://api.spotify.com/v1/tracks/5PSKp0LgzOSQAxHWfxIHrh",
              "id" : "5PSKp0LgzOSQAxHWfxIHrh",
              "is_local" : false,
              "name" : "Everything I Want",
              "preview_url" : "https://p.scdn.co/mp3-preview/cba4ebd590220456d2ee905ec8824c3fefb7705b?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 9,
              "type" : "track",
              "uri" : "spotify:track:5PSKp0LgzOSQAxHWfxIHrh"
            } ],
            "limit" : 50,
            "next" : null,
            "offset" : 0,
            "previous" : null,
            "total" : 9
          },
          "type" : "album",
          "uri" : "spotify:album:6NiUnTcZSKPXfATQDjYx24"
        }
      }, {
        "added_at" : "2017-11-15T19:08:05Z",
        "album" : {
          "album_type" : "album",
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/0LyfQWJT6nXafLPZqxe9Of"
            },
            "href" : "https://api.spotify.com/v1/artists/0LyfQWJT6nXafLPZqxe9Of",
            "id" : "0LyfQWJT6nXafLPZqxe9Of",
            "name" : "Vários intérpretes",
            "type" : "artist",
            "uri" : "spotify:artist:0LyfQWJT6nXafLPZqxe9Of"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
          "copyrights" : [ {
            "text" : "2014 Novo Tempo",
            "type" : "C"
          }, {
            "text" : "2014 Novo Tempo",
            "type" : "P"
          } ],
          "external_ids" : {
            "upc" : "702730633229"
          },
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/4p5DlLldrI7h6Y0RBF4tym"
          },
          "genres" : [ ],
          "href" : "https://api.spotify.com/v1/albums/4p5DlLldrI7h6Y0RBF4tym",
          "id" : "4p5DlLldrI7h6Y0RBF4tym",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b273fe50802fef8e121f8dde614c",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e02fe50802fef8e121f8dde614c",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d00004851fe50802fef8e121f8dde614c",
            "width" : 64
          } ],
          "label" : "Novo Tempo",
          "name" : "Duetos Novo Tempo, Vol. 4 (Playback)",
          "popularity" : 8,
          "release_date" : "2014-08-19",
          "release_date_precision" : "day",
          "total_tracks" : 10,
          "tracks" : {
            "href" : "https://api.spotify.com/v1/albums/4p5DlLldrI7h6Y0RBF4tym/tracks?offset=0&limit=50",
            "items" : [ {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/3f0bV2cF70GNSrGlv7i2Wa"
                },
                "href" : "https://api.spotify.com/v1/artists/3f0bV2cF70GNSrGlv7i2Wa",
                "id" : "3f0bV2cF70GNSrGlv7i2Wa",
                "name" : "Daniel Lüdtke",
                "type" : "artist",
                "uri" : "spotify:artist:3f0bV2cF70GNSrGlv7i2Wa"
              }, {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/54IDWdM8TrNpxWiQAL1U3z"
                },
                "href" : "https://api.spotify.com/v1/artists/54IDWdM8TrNpxWiQAL1U3z",
                "id" : "54IDWdM8TrNpxWiQAL1U3z",
                "name" : "Joyce Carnassale",
                "type" : "artist",
                "uri" : "spotify:artist:54IDWdM8TrNpxWiQAL1U3z"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 280026,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/5EbctetUD3nsGHZp0kLk7V"
              },
              "href" : "https://api.spotify.com/v1/tracks/5EbctetUD3nsGHZp0kLk7V",
              "id" : "5EbctetUD3nsGHZp0kLk7V",
              "is_local" : false,
              "name" : "Muito Mais - Playback",
              "preview_url" : "https://p.scdn.co/mp3-preview/1264baf40d702acd5c007bd7d5bb5d3dc94267d1?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 1,
              "type" : "track",
              "uri" : "spotify:track:5EbctetUD3nsGHZp0kLk7V"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/0p942FANsPACepQGy7HuF7"
                },
                "href" : "https://api.spotify.com/v1/artists/0p942FANsPACepQGy7HuF7",
                "id" : "0p942FANsPACepQGy7HuF7",
                "name" : "Társis Iraídes",
                "type" : "artist",
                "uri" : "spotify:artist:0p942FANsPACepQGy7HuF7"
              }, {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/6Ng4Nwy2aeHuz5mexqZ1tQ"
                },
                "href" : "https://api.spotify.com/v1/artists/6Ng4Nwy2aeHuz5mexqZ1tQ",
                "id" : "6Ng4Nwy2aeHuz5mexqZ1tQ",
                "name" : "Rafaela Pinho",
                "type" : "artist",
                "uri" : "spotify:artist:6Ng4Nwy2aeHuz5mexqZ1tQ"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 278866,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/7vHufeFAjmDy5uxOHPr0oU"
              },
              "href" : "https://api.spotify.com/v1/tracks/7vHufeFAjmDy5uxOHPr0oU",
              "id" : "7vHufeFAjmDy5uxOHPr0oU",
              "is_local" : false,
              "name" : "Quando a Luz Se Apagar - Playback",
              "preview_url" : "https://p.scdn.co/mp3-preview/c361d07b32b6bc4f65dbf9ef97f94178c8793761?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 2,
              "type" : "track",
              "uri" : "spotify:track:7vHufeFAjmDy5uxOHPr0oU"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/4JQfsmohGrlVT9z3xcy1Hx"
                },
                "href" : "https://api.spotify.com/v1/artists/4JQfsmohGrlVT9z3xcy1Hx",
                "id" : "4JQfsmohGrlVT9z3xcy1Hx",
                "name" : "Marquinhos Maraial",
                "type" : "artist",
                "uri" : "spotify:artist:4JQfsmohGrlVT9z3xcy1Hx"
              }, {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/44QKgWEOgO8Au3u2fzrTAo"
                },
                "href" : "https://api.spotify.com/v1/artists/44QKgWEOgO8Au3u2fzrTAo",
                "id" : "44QKgWEOgO8Au3u2fzrTAo",
                "name" : "Cintia Alves",
                "type" : "artist",
                "uri" : "spotify:artist:44QKgWEOgO8Au3u2fzrTAo"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 242560,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/0DTpccWCkBmOiVQw1XUhL1"
              },
              "href" : "https://api.spotify.com/v1/tracks/0DTpccWCkBmOiVQw1XUhL1",
              "id" : "0DTpccWCkBmOiVQw1XUhL1",
              "is_local" : false,
              "name" : "Vitória - Playback",
              "preview_url" : "https://p.scdn.co/mp3-preview/9a70421743206fbd8b95df08260729e0c982e46f?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 3,
              "type" : "track",
              "uri" : "spotify:track:0DTpccWCkBmOiVQw1XUhL1"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/4vqAhxv4WcsEcTv34ABpcZ"
                },
                "href" : "https://api.spotify.com/v1/artists/4vqAhxv4WcsEcTv34ABpcZ",
                "id" : "4vqAhxv4WcsEcTv34ABpcZ",
                "name" : "Jeferson Pillar",
                "type" : "artist",
                "uri" : "spotify:artist:4vqAhxv4WcsEcTv34ABpcZ"
              }, {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IA37SdSZ1CegKmhRJU0DS"
                },
                "href" : "https://api.spotify.com/v1/artists/7IA37SdSZ1CegKmhRJU0DS",
                "id" : "7IA37SdSZ1CegKmhRJU0DS",
                "name" : "Melissa Barcelos",
                "type" : "artist",
                "uri" : "spotify:artist:7IA37SdSZ1CegKmhRJU0DS"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 191426,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/6nNrKUzrzRjzjR0mHZaPSh"
              },
              "href" : "https://api.spotify.com/v1/tracks/6nNrKUzrzRjzjR0mHZaPSh",
              "id" : "6nNrKUzrzRjzjR0mHZaPSh",
              "is_local" : false,
              "name" : "Amor Teimoso - Playback",
              "preview_url" : "https://p.scdn.co/mp3-preview/62279e9c790a42eccab2cd0af4e2796fa343ada6?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 4,
              "type" : "track",
              "uri" : "spotify:track:6nNrKUzrzRjzjR0mHZaPSh"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/5RoiDOVNpwDOEshlAIXAir"
                },
                "href" : "https://api.spotify.com/v1/artists/5RoiDOVNpwDOEshlAIXAir",
                "id" : "5RoiDOVNpwDOEshlAIXAir",
                "name" : "Darlene Lima",
                "type" : "artist",
                "uri" : "spotify:artist:5RoiDOVNpwDOEshlAIXAir"
              }, {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/5tGvhYNg0VGgpigaO1jzBA"
                },
                "href" : "https://api.spotify.com/v1/artists/5tGvhYNg0VGgpigaO1jzBA",
                "id" : "5tGvhYNg0VGgpigaO1jzBA",
                "name" : "Diene",
                "type" : "artist",
                "uri" : "spotify:artist:5tGvhYNg0VGgpigaO1jzBA"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 297173,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/4D8uswfqAliat2WLYpH0Yw"
              },
              "href" : "https://api.spotify.com/v1/tracks/4D8uswfqAliat2WLYpH0Yw",
              "id" : "4D8uswfqAliat2WLYpH0Yw",
              "is_local" : false,
              "name" : "Descando e Paz - Playback",
              "preview_url" : "https://p.scdn.co/mp3-preview/4f16bddd7d9136a6f4888e42a7cf02d68b76bc4d?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 5,
              "type" : "track",
              "uri" : "spotify:track:4D8uswfqAliat2WLYpH0Yw"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/73YSZqLfqQ4ScLC3KiSEyX"
                },
                "href" : "https://api.spotify.com/v1/artists/73YSZqLfqQ4ScLC3KiSEyX",
                "id" : "73YSZqLfqQ4ScLC3KiSEyX",
                "name" : "Fernando Iglesias",
                "type" : "artist",
                "uri" : "spotify:artist:73YSZqLfqQ4ScLC3KiSEyX"
              }, {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/4FvOojv0yKggpl7Cc7EnnJ"
                },
                "href" : "https://api.spotify.com/v1/artists/4FvOojv0yKggpl7Cc7EnnJ",
                "id" : "4FvOojv0yKggpl7Cc7EnnJ",
                "name" : "Jairo Souza",
                "type" : "artist",
                "uri" : "spotify:artist:4FvOojv0yKggpl7Cc7EnnJ"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 250280,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/5NyI5uMR8mxNpRHbCSk7gp"
              },
              "href" : "https://api.spotify.com/v1/tracks/5NyI5uMR8mxNpRHbCSk7gp",
              "id" : "5NyI5uMR8mxNpRHbCSk7gp",
              "is_local" : false,
              "name" : "Paz - Playback",
              "preview_url" : "https://p.scdn.co/mp3-preview/fcfb7c3a0d49737785468a906c80ebbe4c39151e?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 6,
              "type" : "track",
              "uri" : "spotify:track:5NyI5uMR8mxNpRHbCSk7gp"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/2EpXG8Ya30dtA5znwtoxri"
                },
                "href" : "https://api.spotify.com/v1/artists/2EpXG8Ya30dtA5znwtoxri",
                "id" : "2EpXG8Ya30dtA5znwtoxri",
                "name" : "Vagner Dida",
                "type" : "artist",
                "uri" : "spotify:artist:2EpXG8Ya30dtA5znwtoxri"
              }, {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/0E1oRpzxvYNUa22sbZtAPM"
                },
                "href" : "https://api.spotify.com/v1/artists/0E1oRpzxvYNUa22sbZtAPM",
                "id" : "0E1oRpzxvYNUa22sbZtAPM",
                "name" : "Fernanda Lara",
                "type" : "artist",
                "uri" : "spotify:artist:0E1oRpzxvYNUa22sbZtAPM"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 292213,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/56rgvOeZhroNR5qadpUdZY"
              },
              "href" : "https://api.spotify.com/v1/tracks/56rgvOeZhroNR5qadpUdZY",
              "id" : "56rgvOeZhroNR5qadpUdZY",
              "is_local" : false,
              "name" : "Meu Louvor - Playback",
              "preview_url" : "https://p.scdn.co/mp3-preview/70fb28e995feca10efe4c252bde956bc8212daf7?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 7,
              "type" : "track",
              "uri" : "spotify:track:56rgvOeZhroNR5qadpUdZY"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/09BDr1YTa7t1YaOg3kg8QU"
                },
                "href" : "https://api.spotify.com/v1/artists/09BDr1YTa7t1YaOg3kg8QU",
                "id" : "09BDr1YTa7t1YaOg3kg8QU",
                "name" : "Laura Morena",
                "type" : "artist",
                "uri" : "spotify:artist:09BDr1YTa7t1YaOg3kg8QU"
              }, {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/6cNJIc6NAZU72xaSTxDP1x"
                },
                "href" : "https://api.spotify.com/v1/artists/6cNJIc6NAZU72xaSTxDP1x",
                "id" : "6cNJIc6NAZU72xaSTxDP1x",
                "name" : "Regina Mota",
                "type" : "artist",
                "uri" : "spotify:artist:6cNJIc6NAZU72xaSTxDP1x"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 274200,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/2XFOc8IJ2CDLav8pr2czen"
              },
              "href" : "https://api.spotify.com/v1/tracks/2XFOc8IJ2CDLav8pr2czen",
              "id" : "2XFOc8IJ2CDLav8pr2czen",
              "is_local" : false,
              "name" : "Quão Alto Eu Poderia Ir - Playback",
              "preview_url" : "https://p.scdn.co/mp3-preview/ea4aefb7b3c4125b2f6091ccd18904a374a0a82f?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 8,
              "type" : "track",
              "uri" : "spotify:track:2XFOc8IJ2CDLav8pr2czen"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/442efJxluUga5XFAgio1l5"
                },
                "href" : "https://api.spotify.com/v1/artists/442efJxluUga5XFAgio1l5",
                "id" : "442efJxluUga5XFAgio1l5",
                "name" : "Rawfy Welton",
                "type" : "artist",
                "uri" : "spotify:artist:442efJxluUga5XFAgio1l5"
              }, {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/4bJ1wkkofxsCiEDIJbuV5L"
                },
                "href" : "https://api.spotify.com/v1/artists/4bJ1wkkofxsCiEDIJbuV5L",
                "id" : "4bJ1wkkofxsCiEDIJbuV5L",
                "name" : "Riane Junqueira",
                "type" : "artist",
                "uri" : "spotify:artist:4bJ1wkkofxsCiEDIJbuV5L"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 289520,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/2J59CmxPJre8yxuy9xaxm8"
              },
              "href" : "https://api.spotify.com/v1/tracks/2J59CmxPJre8yxuy9xaxm8",
              "id" : "2J59CmxPJre8yxuy9xaxm8",
              "is_local" : false,
              "name" : "Mais - Playback",
              "preview_url" : "https://p.scdn.co/mp3-preview/d5a0ecccd75547ccec1681770276af2cad495cbb?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 9,
              "type" : "track",
              "uri" : "spotify:track:2J59CmxPJre8yxuy9xaxm8"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/5DryKQflX5HNeODEbXYoBu"
                },
                "href" : "https://api.spotify.com/v1/artists/5DryKQflX5HNeODEbXYoBu",
                "id" : "5DryKQflX5HNeODEbXYoBu",
                "name" : "Marllos Molino",
                "type" : "artist",
                "uri" : "spotify:artist:5DryKQflX5HNeODEbXYoBu"
              }, {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/2VO8rsGA7lKqgoM5fFkgx9"
                },
                "href" : "https://api.spotify.com/v1/artists/2VO8rsGA7lKqgoM5fFkgx9",
                "id" : "2VO8rsGA7lKqgoM5fFkgx9",
                "name" : "Joyce Zanardi",
                "type" : "artist",
                "uri" : "spotify:artist:2VO8rsGA7lKqgoM5fFkgx9"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 217360,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/60bCFAFIlJw8N2gHzNGhZ8"
              },
              "href" : "https://api.spotify.com/v1/tracks/60bCFAFIlJw8N2gHzNGhZ8",
              "id" : "60bCFAFIlJw8N2gHzNGhZ8",
              "is_local" : false,
              "name" : "A Voz - Playback",
              "preview_url" : "https://p.scdn.co/mp3-preview/07f0e4a314d531baf2cf29bb68c134bf9a13d029?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 10,
              "type" : "track",
              "uri" : "spotify:track:60bCFAFIlJw8N2gHzNGhZ8"
            } ],
            "limit" : 50,
            "next" : null,
            "offset" : 0,
            "previous" : null,
            "total" : 10
          },
          "type" : "album",
          "uri" : "spotify:album:4p5DlLldrI7h6Y0RBF4tym"
        }
      }, {
        "added_at" : "2017-06-22T19:15:40Z",
        "album" : {
          "album_type" : "album",
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/5eAWCfyUhZtHHtBdNk56l1"
            },
            "href" : "https://api.spotify.com/v1/artists/5eAWCfyUhZtHHtBdNk56l1",
            "id" : "5eAWCfyUhZtHHtBdNk56l1",
            "name" : "System Of A Down",
            "type" : "artist",
            "uri" : "spotify:artist:5eAWCfyUhZtHHtBdNk56l1"
          } ],
          "available_markets" : [ ],
          "copyrights" : [ {
            "text" : "(P) 2002 Sony Music Entertainment Inc.",
            "type" : "P"
          } ],
          "external_ids" : {
            "upc" : "5099751024897"
          },
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/5hrHoS2XWBqb1lYHz37p6E"
          },
          "genres" : [ ],
          "href" : "https://api.spotify.com/v1/albums/5hrHoS2XWBqb1lYHz37p6E",
          "id" : "5hrHoS2XWBqb1lYHz37p6E",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b273aebf99f454916c188b63d4b6",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e02aebf99f454916c188b63d4b6",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d00004851aebf99f454916c188b63d4b6",
            "width" : 64
          } ],
          "label" : "Columbia",
          "name" : "Steal This Album!",
          "popularity" : 0,
          "release_date" : "2002-11-26",
          "release_date_precision" : "day",
          "total_tracks" : 16,
          "tracks" : {
            "href" : "https://api.spotify.com/v1/albums/5hrHoS2XWBqb1lYHz37p6E/tracks?offset=0&limit=50",
            "items" : [ {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/5eAWCfyUhZtHHtBdNk56l1"
                },
                "href" : "https://api.spotify.com/v1/artists/5eAWCfyUhZtHHtBdNk56l1",
                "id" : "5eAWCfyUhZtHHtBdNk56l1",
                "name" : "System Of A Down",
                "type" : "artist",
                "uri" : "spotify:artist:5eAWCfyUhZtHHtBdNk56l1"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 143626,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/6zxevMyLrhOyGGLspElEjy"
              },
              "href" : "https://api.spotify.com/v1/tracks/6zxevMyLrhOyGGLspElEjy",
              "id" : "6zxevMyLrhOyGGLspElEjy",
              "is_local" : false,
              "name" : "Chic 'N' Stu",
              "preview_url" : null,
              "track_number" : 1,
              "type" : "track",
              "uri" : "spotify:track:6zxevMyLrhOyGGLspElEjy"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/5eAWCfyUhZtHHtBdNk56l1"
                },
                "href" : "https://api.spotify.com/v1/artists/5eAWCfyUhZtHHtBdNk56l1",
                "id" : "5eAWCfyUhZtHHtBdNk56l1",
                "name" : "System Of A Down",
                "type" : "artist",
                "uri" : "spotify:artist:5eAWCfyUhZtHHtBdNk56l1"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 153773,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/45FIAvozaJMvSY43AwPqld"
              },
              "href" : "https://api.spotify.com/v1/tracks/45FIAvozaJMvSY43AwPqld",
              "id" : "45FIAvozaJMvSY43AwPqld",
              "is_local" : false,
              "name" : "Innervision",
              "preview_url" : null,
              "track_number" : 2,
              "type" : "track",
              "uri" : "spotify:track:45FIAvozaJMvSY43AwPqld"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/5eAWCfyUhZtHHtBdNk56l1"
                },
                "href" : "https://api.spotify.com/v1/artists/5eAWCfyUhZtHHtBdNk56l1",
                "id" : "5eAWCfyUhZtHHtBdNk56l1",
                "name" : "System Of A Down",
                "type" : "artist",
                "uri" : "spotify:artist:5eAWCfyUhZtHHtBdNk56l1"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 116893,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/1nVaY0UYkE4fqOBGjqR0By"
              },
              "href" : "https://api.spotify.com/v1/tracks/1nVaY0UYkE4fqOBGjqR0By",
              "id" : "1nVaY0UYkE4fqOBGjqR0By",
              "is_local" : false,
              "name" : "Bubbles",
              "preview_url" : null,
              "track_number" : 3,
              "type" : "track",
              "uri" : "spotify:track:1nVaY0UYkE4fqOBGjqR0By"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/5eAWCfyUhZtHHtBdNk56l1"
                },
                "href" : "https://api.spotify.com/v1/artists/5eAWCfyUhZtHHtBdNk56l1",
                "id" : "5eAWCfyUhZtHHtBdNk56l1",
                "name" : "System Of A Down",
                "type" : "artist",
                "uri" : "spotify:artist:5eAWCfyUhZtHHtBdNk56l1"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 134906,
              "explicit" : true,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/0ayV7kwyDrBCk4AN0ADkUd"
              },
              "href" : "https://api.spotify.com/v1/tracks/0ayV7kwyDrBCk4AN0ADkUd",
              "id" : "0ayV7kwyDrBCk4AN0ADkUd",
              "is_local" : false,
              "name" : "Boom!",
              "preview_url" : null,
              "track_number" : 4,
              "type" : "track",
              "uri" : "spotify:track:0ayV7kwyDrBCk4AN0ADkUd"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/5eAWCfyUhZtHHtBdNk56l1"
                },
                "href" : "https://api.spotify.com/v1/artists/5eAWCfyUhZtHHtBdNk56l1",
                "id" : "5eAWCfyUhZtHHtBdNk56l1",
                "name" : "System Of A Down",
                "type" : "artist",
                "uri" : "spotify:artist:5eAWCfyUhZtHHtBdNk56l1"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 150360,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/5QSowYoykQSCFSI8W0Fy5A"
              },
              "href" : "https://api.spotify.com/v1/tracks/5QSowYoykQSCFSI8W0Fy5A",
              "id" : "5QSowYoykQSCFSI8W0Fy5A",
              "is_local" : false,
              "name" : "Nüguns",
              "preview_url" : null,
              "track_number" : 5,
              "type" : "track",
              "uri" : "spotify:track:5QSowYoykQSCFSI8W0Fy5A"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/5eAWCfyUhZtHHtBdNk56l1"
                },
                "href" : "https://api.spotify.com/v1/artists/5eAWCfyUhZtHHtBdNk56l1",
                "id" : "5eAWCfyUhZtHHtBdNk56l1",
                "name" : "System Of A Down",
                "type" : "artist",
                "uri" : "spotify:artist:5eAWCfyUhZtHHtBdNk56l1"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 197306,
              "explicit" : true,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/4NHm6wj9TOEngPQZBQ2Pgh"
              },
              "href" : "https://api.spotify.com/v1/tracks/4NHm6wj9TOEngPQZBQ2Pgh",
              "id" : "4NHm6wj9TOEngPQZBQ2Pgh",
              "is_local" : false,
              "name" : "A.D.D. (American Dream Denial)",
              "preview_url" : null,
              "track_number" : 6,
              "type" : "track",
              "uri" : "spotify:track:4NHm6wj9TOEngPQZBQ2Pgh"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/5eAWCfyUhZtHHtBdNk56l1"
                },
                "href" : "https://api.spotify.com/v1/artists/5eAWCfyUhZtHHtBdNk56l1",
                "id" : "5eAWCfyUhZtHHtBdNk56l1",
                "name" : "System Of A Down",
                "type" : "artist",
                "uri" : "spotify:artist:5eAWCfyUhZtHHtBdNk56l1"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 249626,
              "explicit" : true,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/58tfvjGHFDa3ES9yL95EBA"
              },
              "href" : "https://api.spotify.com/v1/tracks/58tfvjGHFDa3ES9yL95EBA",
              "id" : "58tfvjGHFDa3ES9yL95EBA",
              "is_local" : false,
              "name" : "Mr. Jack",
              "preview_url" : null,
              "track_number" : 7,
              "type" : "track",
              "uri" : "spotify:track:58tfvjGHFDa3ES9yL95EBA"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/5eAWCfyUhZtHHtBdNk56l1"
                },
                "href" : "https://api.spotify.com/v1/artists/5eAWCfyUhZtHHtBdNk56l1",
                "id" : "5eAWCfyUhZtHHtBdNk56l1",
                "name" : "System Of A Down",
                "type" : "artist",
                "uri" : "spotify:artist:5eAWCfyUhZtHHtBdNk56l1"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 188600,
              "explicit" : true,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/3Jhl9Bjqg8lTCoJTE9YtpD"
              },
              "href" : "https://api.spotify.com/v1/tracks/3Jhl9Bjqg8lTCoJTE9YtpD",
              "id" : "3Jhl9Bjqg8lTCoJTE9YtpD",
              "is_local" : false,
              "name" : "I-E-A-I-A-I-O",
              "preview_url" : null,
              "track_number" : 8,
              "type" : "track",
              "uri" : "spotify:track:3Jhl9Bjqg8lTCoJTE9YtpD"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/5eAWCfyUhZtHHtBdNk56l1"
                },
                "href" : "https://api.spotify.com/v1/artists/5eAWCfyUhZtHHtBdNk56l1",
                "id" : "5eAWCfyUhZtHHtBdNk56l1",
                "name" : "System Of A Down",
                "type" : "artist",
                "uri" : "spotify:artist:5eAWCfyUhZtHHtBdNk56l1"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 46333,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/3O0iMvy3BJOuysY0mYZpL3"
              },
              "href" : "https://api.spotify.com/v1/tracks/3O0iMvy3BJOuysY0mYZpL3",
              "id" : "3O0iMvy3BJOuysY0mYZpL3",
              "is_local" : false,
              "name" : "36",
              "preview_url" : null,
              "track_number" : 9,
              "type" : "track",
              "uri" : "spotify:track:3O0iMvy3BJOuysY0mYZpL3"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/5eAWCfyUhZtHHtBdNk56l1"
                },
                "href" : "https://api.spotify.com/v1/artists/5eAWCfyUhZtHHtBdNk56l1",
                "id" : "5eAWCfyUhZtHHtBdNk56l1",
                "name" : "System Of A Down",
                "type" : "artist",
                "uri" : "spotify:artist:5eAWCfyUhZtHHtBdNk56l1"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 126306,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/665skTtDw4q7nHFfDBAhyZ"
              },
              "href" : "https://api.spotify.com/v1/tracks/665skTtDw4q7nHFfDBAhyZ",
              "id" : "665skTtDw4q7nHFfDBAhyZ",
              "is_local" : false,
              "name" : "Pictures",
              "preview_url" : null,
              "track_number" : 10,
              "type" : "track",
              "uri" : "spotify:track:665skTtDw4q7nHFfDBAhyZ"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/5eAWCfyUhZtHHtBdNk56l1"
                },
                "href" : "https://api.spotify.com/v1/artists/5eAWCfyUhZtHHtBdNk56l1",
                "id" : "5eAWCfyUhZtHHtBdNk56l1",
                "name" : "System Of A Down",
                "type" : "artist",
                "uri" : "spotify:artist:5eAWCfyUhZtHHtBdNk56l1"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 193626,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/608KO69b3Z6OqzhwzL9YUc"
              },
              "href" : "https://api.spotify.com/v1/tracks/608KO69b3Z6OqzhwzL9YUc",
              "id" : "608KO69b3Z6OqzhwzL9YUc",
              "is_local" : false,
              "name" : "Highway Song",
              "preview_url" : null,
              "track_number" : 11,
              "type" : "track",
              "uri" : "spotify:track:608KO69b3Z6OqzhwzL9YUc"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/5eAWCfyUhZtHHtBdNk56l1"
                },
                "href" : "https://api.spotify.com/v1/artists/5eAWCfyUhZtHHtBdNk56l1",
                "id" : "5eAWCfyUhZtHHtBdNk56l1",
                "name" : "System Of A Down",
                "type" : "artist",
                "uri" : "spotify:artist:5eAWCfyUhZtHHtBdNk56l1"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 132733,
              "explicit" : true,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/4d38pBjhItBlFBN9CneBtl"
              },
              "href" : "https://api.spotify.com/v1/tracks/4d38pBjhItBlFBN9CneBtl",
              "id" : "4d38pBjhItBlFBN9CneBtl",
              "is_local" : false,
              "name" : "F**k The System",
              "preview_url" : null,
              "track_number" : 12,
              "type" : "track",
              "uri" : "spotify:track:4d38pBjhItBlFBN9CneBtl"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/5eAWCfyUhZtHHtBdNk56l1"
                },
                "href" : "https://api.spotify.com/v1/artists/5eAWCfyUhZtHHtBdNk56l1",
                "id" : "5eAWCfyUhZtHHtBdNk56l1",
                "name" : "System Of A Down",
                "type" : "artist",
                "uri" : "spotify:artist:5eAWCfyUhZtHHtBdNk56l1"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 201906,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/4UETwsO8LvGLQ4K2K6T6tJ"
              },
              "href" : "https://api.spotify.com/v1/tracks/4UETwsO8LvGLQ4K2K6T6tJ",
              "id" : "4UETwsO8LvGLQ4K2K6T6tJ",
              "is_local" : false,
              "name" : "Ego Brain",
              "preview_url" : null,
              "track_number" : 13,
              "type" : "track",
              "uri" : "spotify:track:4UETwsO8LvGLQ4K2K6T6tJ"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/5eAWCfyUhZtHHtBdNk56l1"
                },
                "href" : "https://api.spotify.com/v1/artists/5eAWCfyUhZtHHtBdNk56l1",
                "id" : "5eAWCfyUhZtHHtBdNk56l1",
                "name" : "System Of A Down",
                "type" : "artist",
                "uri" : "spotify:artist:5eAWCfyUhZtHHtBdNk56l1"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 156600,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/6SScTPWuJcphg7rNXMR0lT"
              },
              "href" : "https://api.spotify.com/v1/tracks/6SScTPWuJcphg7rNXMR0lT",
              "id" : "6SScTPWuJcphg7rNXMR0lT",
              "is_local" : false,
              "name" : "Thetawaves",
              "preview_url" : null,
              "track_number" : 14,
              "type" : "track",
              "uri" : "spotify:track:6SScTPWuJcphg7rNXMR0lT"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/5eAWCfyUhZtHHtBdNk56l1"
                },
                "href" : "https://api.spotify.com/v1/artists/5eAWCfyUhZtHHtBdNk56l1",
                "id" : "5eAWCfyUhZtHHtBdNk56l1",
                "name" : "System Of A Down",
                "type" : "artist",
                "uri" : "spotify:artist:5eAWCfyUhZtHHtBdNk56l1"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 201200,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/0tjwR6GCwsd7eyGUC7d75L"
              },
              "href" : "https://api.spotify.com/v1/tracks/0tjwR6GCwsd7eyGUC7d75L",
              "id" : "0tjwR6GCwsd7eyGUC7d75L",
              "is_local" : false,
              "name" : "Roulette",
              "preview_url" : null,
              "track_number" : 15,
              "type" : "track",
              "uri" : "spotify:track:0tjwR6GCwsd7eyGUC7d75L"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/5eAWCfyUhZtHHtBdNk56l1"
                },
                "href" : "https://api.spotify.com/v1/artists/5eAWCfyUhZtHHtBdNk56l1",
                "id" : "5eAWCfyUhZtHHtBdNk56l1",
                "name" : "System Of A Down",
                "type" : "artist",
                "uri" : "spotify:artist:5eAWCfyUhZtHHtBdNk56l1"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 217600,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/2RkRQJIrTEmx0KDptkoV14"
              },
              "href" : "https://api.spotify.com/v1/tracks/2RkRQJIrTEmx0KDptkoV14",
              "id" : "2RkRQJIrTEmx0KDptkoV14",
              "is_local" : false,
              "name" : "Streamline",
              "preview_url" : null,
              "track_number" : 16,
              "type" : "track",
              "uri" : "spotify:track:2RkRQJIrTEmx0KDptkoV14"
            } ],
            "limit" : 50,
            "next" : null,
            "offset" : 0,
            "previous" : null,
            "total" : 16
          },
          "type" : "album",
          "uri" : "spotify:album:5hrHoS2XWBqb1lYHz37p6E"
        }
      }, {
        "added_at" : "2017-06-22T19:15:33Z",
        "album" : {
          "album_type" : "album",
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/5eAWCfyUhZtHHtBdNk56l1"
            },
            "href" : "https://api.spotify.com/v1/artists/5eAWCfyUhZtHHtBdNk56l1",
            "id" : "5eAWCfyUhZtHHtBdNk56l1",
            "name" : "System Of A Down",
            "type" : "artist",
            "uri" : "spotify:artist:5eAWCfyUhZtHHtBdNk56l1"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
          "copyrights" : [ {
            "text" : "(P) 2005 Columbia Records, a division of Sony Music Entertainment",
            "type" : "P"
          } ],
          "external_ids" : {
            "upc" : "827969064825"
          },
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/0cn6MHyx4YuZauaB7Pb66o"
          },
          "genres" : [ ],
          "href" : "https://api.spotify.com/v1/albums/0cn6MHyx4YuZauaB7Pb66o",
          "id" : "0cn6MHyx4YuZauaB7Pb66o",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b273c65f8d04502eeddbdd61fa71",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e02c65f8d04502eeddbdd61fa71",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d00004851c65f8d04502eeddbdd61fa71",
            "width" : 64
          } ],
          "label" : "American/Columbia",
          "name" : "Mezmerize",
          "popularity" : 76,
          "release_date" : "2005-05-17",
          "release_date_precision" : "day",
          "total_tracks" : 11,
          "tracks" : {
            "href" : "https://api.spotify.com/v1/albums/0cn6MHyx4YuZauaB7Pb66o/tracks?offset=0&limit=50",
            "items" : [ {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/5eAWCfyUhZtHHtBdNk56l1"
                },
                "href" : "https://api.spotify.com/v1/artists/5eAWCfyUhZtHHtBdNk56l1",
                "id" : "5eAWCfyUhZtHHtBdNk56l1",
                "name" : "System Of A Down",
                "type" : "artist",
                "uri" : "spotify:artist:5eAWCfyUhZtHHtBdNk56l1"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 63666,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/6f1HJMVJ1CgUeCIM6r795H"
              },
              "href" : "https://api.spotify.com/v1/tracks/6f1HJMVJ1CgUeCIM6r795H",
              "id" : "6f1HJMVJ1CgUeCIM6r795H",
              "is_local" : false,
              "name" : "Soldier Side - Intro",
              "preview_url" : "https://p.scdn.co/mp3-preview/432bdfbf80ac46e6cf95f9525b78cbb2538cec41?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 1,
              "type" : "track",
              "uri" : "spotify:track:6f1HJMVJ1CgUeCIM6r795H"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/5eAWCfyUhZtHHtBdNk56l1"
                },
                "href" : "https://api.spotify.com/v1/artists/5eAWCfyUhZtHHtBdNk56l1",
                "id" : "5eAWCfyUhZtHHtBdNk56l1",
                "name" : "System Of A Down",
                "type" : "artist",
                "uri" : "spotify:artist:5eAWCfyUhZtHHtBdNk56l1"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 255466,
              "explicit" : true,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/0EYOdF5FCkgOJJla8DI2Md"
              },
              "href" : "https://api.spotify.com/v1/tracks/0EYOdF5FCkgOJJla8DI2Md",
              "id" : "0EYOdF5FCkgOJJla8DI2Md",
              "is_local" : false,
              "name" : "B.Y.O.B.",
              "preview_url" : "https://p.scdn.co/mp3-preview/2f373f029e1110b19c265b8f4bc4d265e5fa9539?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 2,
              "type" : "track",
              "uri" : "spotify:track:0EYOdF5FCkgOJJla8DI2Md"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/5eAWCfyUhZtHHtBdNk56l1"
                },
                "href" : "https://api.spotify.com/v1/artists/5eAWCfyUhZtHHtBdNk56l1",
                "id" : "5eAWCfyUhZtHHtBdNk56l1",
                "name" : "System Of A Down",
                "type" : "artist",
                "uri" : "spotify:artist:5eAWCfyUhZtHHtBdNk56l1"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 228026,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/577mOFb1LAvSANIUZ4mbQ7"
              },
              "href" : "https://api.spotify.com/v1/tracks/577mOFb1LAvSANIUZ4mbQ7",
              "id" : "577mOFb1LAvSANIUZ4mbQ7",
              "is_local" : false,
              "name" : "Revenga",
              "preview_url" : "https://p.scdn.co/mp3-preview/430698f15baa5cdc5e8860c76f268d3d86332cf3?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 3,
              "type" : "track",
              "uri" : "spotify:track:577mOFb1LAvSANIUZ4mbQ7"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/5eAWCfyUhZtHHtBdNk56l1"
                },
                "href" : "https://api.spotify.com/v1/artists/5eAWCfyUhZtHHtBdNk56l1",
                "id" : "5eAWCfyUhZtHHtBdNk56l1",
                "name" : "System Of A Down",
                "type" : "artist",
                "uri" : "spotify:artist:5eAWCfyUhZtHHtBdNk56l1"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 131706,
              "explicit" : true,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/47EqCQZG5v4o0WFMufGf5S"
              },
              "href" : "https://api.spotify.com/v1/tracks/47EqCQZG5v4o0WFMufGf5S",
              "id" : "47EqCQZG5v4o0WFMufGf5S",
              "is_local" : false,
              "name" : "Cigaro",
              "preview_url" : "https://p.scdn.co/mp3-preview/e2162decdb810fefb98af11bea3830f60767a3b7?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 4,
              "type" : "track",
              "uri" : "spotify:track:47EqCQZG5v4o0WFMufGf5S"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/5eAWCfyUhZtHHtBdNk56l1"
                },
                "href" : "https://api.spotify.com/v1/artists/5eAWCfyUhZtHHtBdNk56l1",
                "id" : "5eAWCfyUhZtHHtBdNk56l1",
                "name" : "System Of A Down",
                "type" : "artist",
                "uri" : "spotify:artist:5eAWCfyUhZtHHtBdNk56l1"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 249226,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/41pOIT2t1rvr2Trg1HQChZ"
              },
              "href" : "https://api.spotify.com/v1/tracks/41pOIT2t1rvr2Trg1HQChZ",
              "id" : "41pOIT2t1rvr2Trg1HQChZ",
              "is_local" : false,
              "name" : "Radio/Video",
              "preview_url" : "https://p.scdn.co/mp3-preview/8e83539b33d333b7f93031a659a61774bb4e181e?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 5,
              "type" : "track",
              "uri" : "spotify:track:41pOIT2t1rvr2Trg1HQChZ"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/5eAWCfyUhZtHHtBdNk56l1"
                },
                "href" : "https://api.spotify.com/v1/artists/5eAWCfyUhZtHHtBdNk56l1",
                "id" : "5eAWCfyUhZtHHtBdNk56l1",
                "name" : "System Of A Down",
                "type" : "artist",
                "uri" : "spotify:artist:5eAWCfyUhZtHHtBdNk56l1"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 128240,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/0DVHR5FQ0Gp2dsZJz7hfdy"
              },
              "href" : "https://api.spotify.com/v1/tracks/0DVHR5FQ0Gp2dsZJz7hfdy",
              "id" : "0DVHR5FQ0Gp2dsZJz7hfdy",
              "is_local" : false,
              "name" : "This Cocaine Makes Me Feel Like I'm On This Song",
              "preview_url" : "https://p.scdn.co/mp3-preview/9cb8c93199749b07e427dd4d50b14135bed3ec85?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 6,
              "type" : "track",
              "uri" : "spotify:track:0DVHR5FQ0Gp2dsZJz7hfdy"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/5eAWCfyUhZtHHtBdNk56l1"
                },
                "href" : "https://api.spotify.com/v1/artists/5eAWCfyUhZtHHtBdNk56l1",
                "id" : "5eAWCfyUhZtHHtBdNk56l1",
                "name" : "System Of A Down",
                "type" : "artist",
                "uri" : "spotify:artist:5eAWCfyUhZtHHtBdNk56l1"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 211333,
              "explicit" : true,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/249Z7XT6mf8B2zuI0RaeS0"
              },
              "href" : "https://api.spotify.com/v1/tracks/249Z7XT6mf8B2zuI0RaeS0",
              "id" : "249Z7XT6mf8B2zuI0RaeS0",
              "is_local" : false,
              "name" : "Violent Pornography",
              "preview_url" : "https://p.scdn.co/mp3-preview/c89badc7eb466d36f4e8ed42932bfed97d90a4c5?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 7,
              "type" : "track",
              "uri" : "spotify:track:249Z7XT6mf8B2zuI0RaeS0"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/5eAWCfyUhZtHHtBdNk56l1"
                },
                "href" : "https://api.spotify.com/v1/artists/5eAWCfyUhZtHHtBdNk56l1",
                "id" : "5eAWCfyUhZtHHtBdNk56l1",
                "name" : "System Of A Down",
                "type" : "artist",
                "uri" : "spotify:artist:5eAWCfyUhZtHHtBdNk56l1"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 200600,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/6y2DHyCYf6azhUfXmnuH6w"
              },
              "href" : "https://api.spotify.com/v1/tracks/6y2DHyCYf6azhUfXmnuH6w",
              "id" : "6y2DHyCYf6azhUfXmnuH6w",
              "is_local" : false,
              "name" : "Question!",
              "preview_url" : "https://p.scdn.co/mp3-preview/354839fcda01d550b201eb8702b7ab238dfad135?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 8,
              "type" : "track",
              "uri" : "spotify:track:6y2DHyCYf6azhUfXmnuH6w"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/5eAWCfyUhZtHHtBdNk56l1"
                },
                "href" : "https://api.spotify.com/v1/artists/5eAWCfyUhZtHHtBdNk56l1",
                "id" : "5eAWCfyUhZtHHtBdNk56l1",
                "name" : "System Of A Down",
                "type" : "artist",
                "uri" : "spotify:artist:5eAWCfyUhZtHHtBdNk56l1"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 205800,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/1wGRSG94dLt8fIZWhR3rGG"
              },
              "href" : "https://api.spotify.com/v1/tracks/1wGRSG94dLt8fIZWhR3rGG",
              "id" : "1wGRSG94dLt8fIZWhR3rGG",
              "is_local" : false,
              "name" : "Sad Statue",
              "preview_url" : "https://p.scdn.co/mp3-preview/05d669fe39af01de6310453d163a9455e822f887?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 9,
              "type" : "track",
              "uri" : "spotify:track:1wGRSG94dLt8fIZWhR3rGG"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/5eAWCfyUhZtHHtBdNk56l1"
                },
                "href" : "https://api.spotify.com/v1/artists/5eAWCfyUhZtHHtBdNk56l1",
                "id" : "5eAWCfyUhZtHHtBdNk56l1",
                "name" : "System Of A Down",
                "type" : "artist",
                "uri" : "spotify:artist:5eAWCfyUhZtHHtBdNk56l1"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 176866,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/6iFVJGxSVdFkzYQJL7Rgdk"
              },
              "href" : "https://api.spotify.com/v1/tracks/6iFVJGxSVdFkzYQJL7Rgdk",
              "id" : "6iFVJGxSVdFkzYQJL7Rgdk",
              "is_local" : false,
              "name" : "Old School Hollywood",
              "preview_url" : "https://p.scdn.co/mp3-preview/ceb7c834e8543e5b7d5239d5a89c55cc1bae4134?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 10,
              "type" : "track",
              "uri" : "spotify:track:6iFVJGxSVdFkzYQJL7Rgdk"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/5eAWCfyUhZtHHtBdNk56l1"
                },
                "href" : "https://api.spotify.com/v1/artists/5eAWCfyUhZtHHtBdNk56l1",
                "id" : "5eAWCfyUhZtHHtBdNk56l1",
                "name" : "System Of A Down",
                "type" : "artist",
                "uri" : "spotify:artist:5eAWCfyUhZtHHtBdNk56l1"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 320693,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/0GrHWVTDsaWcD4nrCGr7VE"
              },
              "href" : "https://api.spotify.com/v1/tracks/0GrHWVTDsaWcD4nrCGr7VE",
              "id" : "0GrHWVTDsaWcD4nrCGr7VE",
              "is_local" : false,
              "name" : "Lost In Hollywood",
              "preview_url" : "https://p.scdn.co/mp3-preview/bdaad68f6bb8ed361d0c2d8e9bc127f696f480d9?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 11,
              "type" : "track",
              "uri" : "spotify:track:0GrHWVTDsaWcD4nrCGr7VE"
            } ],
            "limit" : 50,
            "next" : null,
            "offset" : 0,
            "previous" : null,
            "total" : 11
          },
          "type" : "album",
          "uri" : "spotify:album:0cn6MHyx4YuZauaB7Pb66o"
        }
      }, {
        "added_at" : "2017-06-21T20:57:48Z",
        "album" : {
          "album_type" : "album",
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/2THaGrUq7RPnj8Uax9zQ1m"
            },
            "href" : "https://api.spotify.com/v1/artists/2THaGrUq7RPnj8Uax9zQ1m",
            "id" : "2THaGrUq7RPnj8Uax9zQ1m",
            "name" : "Shaman",
            "type" : "artist",
            "uri" : "spotify:artist:2THaGrUq7RPnj8Uax9zQ1m"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AT", "AU", "BA", "BE", "BG", "BH", "BY", "CH", "CY", "CZ", "DE", "DK", "DZ", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "HK", "HR", "HU", "IE", "IL", "IN", "IS", "IT", "JO", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "NL", "NO", "NZ", "OM", "PH", "PL", "PS", "PT", "QA", "RO", "RS", "RU", "SA", "SE", "SI", "SK", "TN", "TR", "TW", "UA", "XK", "ZA" ],
          "copyrights" : [ {
            "text" : "2004 AFM Records, a Division of Soulfood Music Distribution GmbH",
            "type" : "C"
          }, {
            "text" : "2004 AFM Records, a Division of Soulfood Music Distribution GmbH",
            "type" : "P"
          } ],
          "external_ids" : {
            "upc" : "5099751617921"
          },
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/0v0yfVUKS4FdtOcZ2M3BgI"
          },
          "genres" : [ ],
          "href" : "https://api.spotify.com/v1/albums/0v0yfVUKS4FdtOcZ2M3BgI",
          "id" : "0v0yfVUKS4FdtOcZ2M3BgI",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b273c11f5969e0c8a16734fcdff7",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e02c11f5969e0c8a16734fcdff7",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d00004851c11f5969e0c8a16734fcdff7",
            "width" : 64
          } ],
          "label" : "AFM Records",
          "name" : "Ritual",
          "popularity" : 20,
          "release_date" : "2004-04-05",
          "release_date_precision" : "day",
          "total_tracks" : 10,
          "tracks" : {
            "href" : "https://api.spotify.com/v1/albums/0v0yfVUKS4FdtOcZ2M3BgI/tracks?offset=0&limit=50",
            "items" : [ {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/2THaGrUq7RPnj8Uax9zQ1m"
                },
                "href" : "https://api.spotify.com/v1/artists/2THaGrUq7RPnj8Uax9zQ1m",
                "id" : "2THaGrUq7RPnj8Uax9zQ1m",
                "name" : "Shaman",
                "type" : "artist",
                "uri" : "spotify:artist:2THaGrUq7RPnj8Uax9zQ1m"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AT", "AU", "BA", "BE", "BG", "BH", "BY", "CH", "CY", "CZ", "DE", "DK", "DZ", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "HK", "HR", "HU", "IE", "IL", "IN", "IS", "IT", "JO", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "NL", "NO", "NZ", "OM", "PH", "PL", "PS", "PT", "QA", "RO", "RS", "RU", "SA", "SE", "SI", "SK", "TN", "TR", "TW", "UA", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 196746,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/4G5tcWCmFJ2WQN3x2h1xcg"
              },
              "href" : "https://api.spotify.com/v1/tracks/4G5tcWCmFJ2WQN3x2h1xcg",
              "id" : "4G5tcWCmFJ2WQN3x2h1xcg",
              "is_local" : false,
              "name" : "Ancient Winds",
              "preview_url" : "https://p.scdn.co/mp3-preview/22c453e75dacb49e1945f72e447ba36e67de7bcd?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 1,
              "type" : "track",
              "uri" : "spotify:track:4G5tcWCmFJ2WQN3x2h1xcg"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/2THaGrUq7RPnj8Uax9zQ1m"
                },
                "href" : "https://api.spotify.com/v1/artists/2THaGrUq7RPnj8Uax9zQ1m",
                "id" : "2THaGrUq7RPnj8Uax9zQ1m",
                "name" : "Shaman",
                "type" : "artist",
                "uri" : "spotify:artist:2THaGrUq7RPnj8Uax9zQ1m"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AT", "AU", "BA", "BE", "BG", "BH", "BY", "CH", "CY", "CZ", "DE", "DK", "DZ", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "HK", "HR", "HU", "IE", "IL", "IN", "IS", "IT", "JO", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "NL", "NO", "NZ", "OM", "PH", "PL", "PS", "PT", "QA", "RO", "RS", "RU", "SA", "SE", "SI", "SK", "TN", "TR", "TW", "UA", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 355786,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/10LFLRCw1aOLP6jrqG8qb1"
              },
              "href" : "https://api.spotify.com/v1/tracks/10LFLRCw1aOLP6jrqG8qb1",
              "id" : "10LFLRCw1aOLP6jrqG8qb1",
              "is_local" : false,
              "name" : "Here I Am",
              "preview_url" : "https://p.scdn.co/mp3-preview/27cca595faa5ae10e74020fe109024ff5838acff?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 2,
              "type" : "track",
              "uri" : "spotify:track:10LFLRCw1aOLP6jrqG8qb1"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/2THaGrUq7RPnj8Uax9zQ1m"
                },
                "href" : "https://api.spotify.com/v1/artists/2THaGrUq7RPnj8Uax9zQ1m",
                "id" : "2THaGrUq7RPnj8Uax9zQ1m",
                "name" : "Shaman",
                "type" : "artist",
                "uri" : "spotify:artist:2THaGrUq7RPnj8Uax9zQ1m"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AT", "AU", "BA", "BE", "BG", "BH", "BY", "CH", "CY", "CZ", "DE", "DK", "DZ", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "HK", "HR", "HU", "IE", "IL", "IN", "IS", "IT", "JO", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "NL", "NO", "NZ", "OM", "PH", "PL", "PS", "PT", "QA", "RO", "RS", "RU", "SA", "SE", "SI", "SK", "TN", "TR", "TW", "UA", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 382200,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/4xMqZ6dXNTSOw1WvEcUXpo"
              },
              "href" : "https://api.spotify.com/v1/tracks/4xMqZ6dXNTSOw1WvEcUXpo",
              "id" : "4xMqZ6dXNTSOw1WvEcUXpo",
              "is_local" : false,
              "name" : "Distant Thunder",
              "preview_url" : "https://p.scdn.co/mp3-preview/43803d4b948605d949f762cd4cb4024d77c1e48e?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 3,
              "type" : "track",
              "uri" : "spotify:track:4xMqZ6dXNTSOw1WvEcUXpo"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/2THaGrUq7RPnj8Uax9zQ1m"
                },
                "href" : "https://api.spotify.com/v1/artists/2THaGrUq7RPnj8Uax9zQ1m",
                "id" : "2THaGrUq7RPnj8Uax9zQ1m",
                "name" : "Shaman",
                "type" : "artist",
                "uri" : "spotify:artist:2THaGrUq7RPnj8Uax9zQ1m"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AT", "AU", "BA", "BE", "BG", "BH", "BY", "CH", "CY", "CZ", "DE", "DK", "DZ", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "HK", "HR", "HU", "IE", "IL", "IN", "IS", "IT", "JO", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "NL", "NO", "NZ", "OM", "PH", "PL", "PS", "PT", "QA", "RO", "RS", "RU", "SA", "SE", "SI", "SK", "TN", "TR", "TW", "UA", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 405440,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/4EoW9HuG3iFwV0B6w4Khkf"
              },
              "href" : "https://api.spotify.com/v1/tracks/4EoW9HuG3iFwV0B6w4Khkf",
              "id" : "4EoW9HuG3iFwV0B6w4Khkf",
              "is_local" : false,
              "name" : "For Tomorrow",
              "preview_url" : "https://p.scdn.co/mp3-preview/037e517fbf1e6f738934bb77ced70973c4ab9b50?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 4,
              "type" : "track",
              "uri" : "spotify:track:4EoW9HuG3iFwV0B6w4Khkf"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/2THaGrUq7RPnj8Uax9zQ1m"
                },
                "href" : "https://api.spotify.com/v1/artists/2THaGrUq7RPnj8Uax9zQ1m",
                "id" : "2THaGrUq7RPnj8Uax9zQ1m",
                "name" : "Shaman",
                "type" : "artist",
                "uri" : "spotify:artist:2THaGrUq7RPnj8Uax9zQ1m"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AT", "AU", "BA", "BE", "BG", "BH", "BY", "CH", "CY", "CZ", "DE", "DK", "DZ", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "HK", "HR", "HU", "IE", "IL", "IN", "IS", "IT", "JO", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "NL", "NO", "NZ", "OM", "PH", "PL", "PS", "PT", "QA", "RO", "RS", "RU", "SA", "SE", "SI", "SK", "TN", "TR", "TW", "UA", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 332826,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/55X7J9IxY6iI9ZLeigsqXB"
              },
              "href" : "https://api.spotify.com/v1/tracks/55X7J9IxY6iI9ZLeigsqXB",
              "id" : "55X7J9IxY6iI9ZLeigsqXB",
              "is_local" : false,
              "name" : "Time Will Come",
              "preview_url" : "https://p.scdn.co/mp3-preview/b62ce4efc10002d65ed0fc69fe88fe9ca4d84ab6?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 5,
              "type" : "track",
              "uri" : "spotify:track:55X7J9IxY6iI9ZLeigsqXB"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/2THaGrUq7RPnj8Uax9zQ1m"
                },
                "href" : "https://api.spotify.com/v1/artists/2THaGrUq7RPnj8Uax9zQ1m",
                "id" : "2THaGrUq7RPnj8Uax9zQ1m",
                "name" : "Shaman",
                "type" : "artist",
                "uri" : "spotify:artist:2THaGrUq7RPnj8Uax9zQ1m"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AT", "AU", "BA", "BE", "BG", "BH", "BY", "CH", "CY", "CZ", "DE", "DK", "DZ", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "HK", "HR", "HU", "IE", "IL", "IN", "IS", "IT", "JO", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "NL", "NO", "NZ", "OM", "PH", "PL", "PS", "PT", "QA", "RO", "RS", "RU", "SA", "SE", "SI", "SK", "TN", "TR", "TW", "UA", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 396986,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/5L7UJCn9LXCbifHXPUTcMg"
              },
              "href" : "https://api.spotify.com/v1/tracks/5L7UJCn9LXCbifHXPUTcMg",
              "id" : "5L7UJCn9LXCbifHXPUTcMg",
              "is_local" : false,
              "name" : "Over Your Head",
              "preview_url" : "https://p.scdn.co/mp3-preview/27f2139aec42a953e05582ca26b9add9dc697999?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 6,
              "type" : "track",
              "uri" : "spotify:track:5L7UJCn9LXCbifHXPUTcMg"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/2THaGrUq7RPnj8Uax9zQ1m"
                },
                "href" : "https://api.spotify.com/v1/artists/2THaGrUq7RPnj8Uax9zQ1m",
                "id" : "2THaGrUq7RPnj8Uax9zQ1m",
                "name" : "Shaman",
                "type" : "artist",
                "uri" : "spotify:artist:2THaGrUq7RPnj8Uax9zQ1m"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AT", "AU", "BA", "BE", "BG", "BH", "BY", "CH", "CY", "CZ", "DE", "DK", "DZ", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "HK", "HR", "HU", "IE", "IL", "IN", "IS", "IT", "JO", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "NL", "NO", "NZ", "OM", "PH", "PL", "PS", "PT", "QA", "RO", "RS", "RU", "SA", "SE", "SI", "SK", "TN", "TR", "TW", "UA", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 413186,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/1PEwvBsDeKYQTfgGZfyz3O"
              },
              "href" : "https://api.spotify.com/v1/tracks/1PEwvBsDeKYQTfgGZfyz3O",
              "id" : "1PEwvBsDeKYQTfgGZfyz3O",
              "is_local" : false,
              "name" : "Fairy Tale",
              "preview_url" : "https://p.scdn.co/mp3-preview/244325cf4f896967e2f2175f1627b8cf7ea10471?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 7,
              "type" : "track",
              "uri" : "spotify:track:1PEwvBsDeKYQTfgGZfyz3O"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/2THaGrUq7RPnj8Uax9zQ1m"
                },
                "href" : "https://api.spotify.com/v1/artists/2THaGrUq7RPnj8Uax9zQ1m",
                "id" : "2THaGrUq7RPnj8Uax9zQ1m",
                "name" : "Shaman",
                "type" : "artist",
                "uri" : "spotify:artist:2THaGrUq7RPnj8Uax9zQ1m"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AT", "AU", "BA", "BE", "BG", "BH", "BY", "CH", "CY", "CZ", "DE", "DK", "DZ", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "HK", "HR", "HU", "IE", "IL", "IN", "IS", "IT", "JO", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "NL", "NO", "NZ", "OM", "PH", "PL", "PS", "PT", "QA", "RO", "RS", "RU", "SA", "SE", "SI", "SK", "TN", "TR", "TW", "UA", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 274306,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/0Gdd6Mqsh9JIk0sGYRjYfa"
              },
              "href" : "https://api.spotify.com/v1/tracks/0Gdd6Mqsh9JIk0sGYRjYfa",
              "id" : "0Gdd6Mqsh9JIk0sGYRjYfa",
              "is_local" : false,
              "name" : "Blind Spell",
              "preview_url" : "https://p.scdn.co/mp3-preview/225ead6cc6afc70a3dd963c97d420e1bb4d10b11?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 8,
              "type" : "track",
              "uri" : "spotify:track:0Gdd6Mqsh9JIk0sGYRjYfa"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/2THaGrUq7RPnj8Uax9zQ1m"
                },
                "href" : "https://api.spotify.com/v1/artists/2THaGrUq7RPnj8Uax9zQ1m",
                "id" : "2THaGrUq7RPnj8Uax9zQ1m",
                "name" : "Shaman",
                "type" : "artist",
                "uri" : "spotify:artist:2THaGrUq7RPnj8Uax9zQ1m"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AT", "AU", "BA", "BE", "BG", "BH", "BY", "CH", "CY", "CZ", "DE", "DK", "DZ", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "HK", "HR", "HU", "IE", "IL", "IN", "IS", "IT", "JO", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "NL", "NO", "NZ", "OM", "PH", "PL", "PS", "PT", "QA", "RO", "RS", "RU", "SA", "SE", "SI", "SK", "TN", "TR", "TW", "UA", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 397000,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/3QvghMmg3EiOcZl317efuq"
              },
              "href" : "https://api.spotify.com/v1/tracks/3QvghMmg3EiOcZl317efuq",
              "id" : "3QvghMmg3EiOcZl317efuq",
              "is_local" : false,
              "name" : "Ritual",
              "preview_url" : "https://p.scdn.co/mp3-preview/d5343886213fb6708208fd44594c7d9844199092?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 9,
              "type" : "track",
              "uri" : "spotify:track:3QvghMmg3EiOcZl317efuq"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/2THaGrUq7RPnj8Uax9zQ1m"
                },
                "href" : "https://api.spotify.com/v1/artists/2THaGrUq7RPnj8Uax9zQ1m",
                "id" : "2THaGrUq7RPnj8Uax9zQ1m",
                "name" : "Shaman",
                "type" : "artist",
                "uri" : "spotify:artist:2THaGrUq7RPnj8Uax9zQ1m"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AT", "AU", "BA", "BE", "BG", "BH", "BY", "CH", "CY", "CZ", "DE", "DK", "DZ", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "HK", "HR", "HU", "IE", "IL", "IN", "IS", "IT", "JO", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "NL", "NO", "NZ", "OM", "PH", "PL", "PS", "PT", "QA", "RO", "RS", "RU", "SA", "SE", "SI", "SK", "TN", "TR", "TW", "UA", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 251453,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/0RRBbVO7YMMzfrmPN385X8"
              },
              "href" : "https://api.spotify.com/v1/tracks/0RRBbVO7YMMzfrmPN385X8",
              "id" : "0RRBbVO7YMMzfrmPN385X8",
              "is_local" : false,
              "name" : "Pride",
              "preview_url" : "https://p.scdn.co/mp3-preview/9061df814f3f07f8e7f601ccf91f1bafe9f422d1?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 10,
              "type" : "track",
              "uri" : "spotify:track:0RRBbVO7YMMzfrmPN385X8"
            } ],
            "limit" : 50,
            "next" : null,
            "offset" : 0,
            "previous" : null,
            "total" : 10
          },
          "type" : "album",
          "uri" : "spotify:album:0v0yfVUKS4FdtOcZ2M3BgI"
        }
      }, {
        "added_at" : "2017-06-07T14:44:11Z",
        "album" : {
          "album_type" : "album",
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/3LkSiHbjqOHCKCqBfEZOTv"
            },
            "href" : "https://api.spotify.com/v1/artists/3LkSiHbjqOHCKCqBfEZOTv",
            "id" : "3LkSiHbjqOHCKCqBfEZOTv",
            "name" : "Atreyu",
            "type" : "artist",
            "uri" : "spotify:artist:3LkSiHbjqOHCKCqBfEZOTv"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "IE", "IL", "IS", "IT", "JO", "JP", "KW", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PL", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "UY", "XK", "ZA" ],
          "copyrights" : [ {
            "text" : "2007 Atreyu, Inc.",
            "type" : "C"
          }, {
            "text" : "2007 Atreyu, Inc.",
            "type" : "P"
          } ],
          "external_ids" : {
            "upc" : "016861795702"
          },
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/1iTr1QCKteUqPY5oQL8xuD"
          },
          "genres" : [ ],
          "href" : "https://api.spotify.com/v1/albums/1iTr1QCKteUqPY5oQL8xuD",
          "id" : "1iTr1QCKteUqPY5oQL8xuD",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b273fb41d8226239a35d2facf4b6",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e02fb41d8226239a35d2facf4b6",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d00004851fb41d8226239a35d2facf4b6",
            "width" : 64
          } ],
          "label" : "Roadrunner Records",
          "name" : "Lead Sails Paper Anchor",
          "popularity" : 52,
          "release_date" : "2007-07-23",
          "release_date_precision" : "day",
          "total_tracks" : 11,
          "tracks" : {
            "href" : "https://api.spotify.com/v1/albums/1iTr1QCKteUqPY5oQL8xuD/tracks?offset=0&limit=50",
            "items" : [ {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/3LkSiHbjqOHCKCqBfEZOTv"
                },
                "href" : "https://api.spotify.com/v1/artists/3LkSiHbjqOHCKCqBfEZOTv",
                "id" : "3LkSiHbjqOHCKCqBfEZOTv",
                "name" : "Atreyu",
                "type" : "artist",
                "uri" : "spotify:artist:3LkSiHbjqOHCKCqBfEZOTv"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "IE", "IL", "IS", "IT", "JO", "JP", "KW", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PL", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "UY", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 199599,
              "explicit" : true,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/0kJ2vuQQAO8QGBGnX21VbE"
              },
              "href" : "https://api.spotify.com/v1/tracks/0kJ2vuQQAO8QGBGnX21VbE",
              "id" : "0kJ2vuQQAO8QGBGnX21VbE",
              "is_local" : false,
              "name" : "Doomsday",
              "preview_url" : "https://p.scdn.co/mp3-preview/3b26c3b1a3b207000f59f0b4fcebc625ec0503a8?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 1,
              "type" : "track",
              "uri" : "spotify:track:0kJ2vuQQAO8QGBGnX21VbE"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/3LkSiHbjqOHCKCqBfEZOTv"
                },
                "href" : "https://api.spotify.com/v1/artists/3LkSiHbjqOHCKCqBfEZOTv",
                "id" : "3LkSiHbjqOHCKCqBfEZOTv",
                "name" : "Atreyu",
                "type" : "artist",
                "uri" : "spotify:artist:3LkSiHbjqOHCKCqBfEZOTv"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "IE", "IL", "IS", "IT", "JO", "JP", "KW", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PL", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "UY", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 190746,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/3jVLXEMlnmM1j3PvETYPmg"
              },
              "href" : "https://api.spotify.com/v1/tracks/3jVLXEMlnmM1j3PvETYPmg",
              "id" : "3jVLXEMlnmM1j3PvETYPmg",
              "is_local" : false,
              "name" : "Honor",
              "preview_url" : "https://p.scdn.co/mp3-preview/54e532de3f504e62b589c8d4f5e053ef984b991e?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 2,
              "type" : "track",
              "uri" : "spotify:track:3jVLXEMlnmM1j3PvETYPmg"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/3LkSiHbjqOHCKCqBfEZOTv"
                },
                "href" : "https://api.spotify.com/v1/artists/3LkSiHbjqOHCKCqBfEZOTv",
                "id" : "3LkSiHbjqOHCKCqBfEZOTv",
                "name" : "Atreyu",
                "type" : "artist",
                "uri" : "spotify:artist:3LkSiHbjqOHCKCqBfEZOTv"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "IE", "IL", "IS", "IT", "JO", "JP", "KW", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PL", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "UY", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 181653,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/4FSzFdrCg4m1d0lN08IQXr"
              },
              "href" : "https://api.spotify.com/v1/tracks/4FSzFdrCg4m1d0lN08IQXr",
              "id" : "4FSzFdrCg4m1d0lN08IQXr",
              "is_local" : false,
              "name" : "Falling Down",
              "preview_url" : "https://p.scdn.co/mp3-preview/beea91b7e4bb44458afd707951c71a611ac48399?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 3,
              "type" : "track",
              "uri" : "spotify:track:4FSzFdrCg4m1d0lN08IQXr"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/3LkSiHbjqOHCKCqBfEZOTv"
                },
                "href" : "https://api.spotify.com/v1/artists/3LkSiHbjqOHCKCqBfEZOTv",
                "id" : "3LkSiHbjqOHCKCqBfEZOTv",
                "name" : "Atreyu",
                "type" : "artist",
                "uri" : "spotify:artist:3LkSiHbjqOHCKCqBfEZOTv"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "IE", "IL", "IS", "IT", "JO", "JP", "KW", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PL", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "UY", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 222599,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/4PImbgKXvsKCZatXSPevI1"
              },
              "href" : "https://api.spotify.com/v1/tracks/4PImbgKXvsKCZatXSPevI1",
              "id" : "4PImbgKXvsKCZatXSPevI1",
              "is_local" : false,
              "name" : "Becoming the Bull",
              "preview_url" : "https://p.scdn.co/mp3-preview/ad38bb271eabb7471ff29011c4fa8f96f30e0cc1?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 4,
              "type" : "track",
              "uri" : "spotify:track:4PImbgKXvsKCZatXSPevI1"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/3LkSiHbjqOHCKCqBfEZOTv"
                },
                "href" : "https://api.spotify.com/v1/artists/3LkSiHbjqOHCKCqBfEZOTv",
                "id" : "3LkSiHbjqOHCKCqBfEZOTv",
                "name" : "Atreyu",
                "type" : "artist",
                "uri" : "spotify:artist:3LkSiHbjqOHCKCqBfEZOTv"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "IE", "IL", "IS", "IT", "JO", "JP", "KW", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PL", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "UY", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 282959,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/5ZvWrmUIfzwNLpVISMqeI1"
              },
              "href" : "https://api.spotify.com/v1/tracks/5ZvWrmUIfzwNLpVISMqeI1",
              "id" : "5ZvWrmUIfzwNLpVISMqeI1",
              "is_local" : false,
              "name" : "Two Become One",
              "preview_url" : "https://p.scdn.co/mp3-preview/dd4d3a3a061f207d961c4010ea281743ac70e3db?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 5,
              "type" : "track",
              "uri" : "spotify:track:5ZvWrmUIfzwNLpVISMqeI1"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/3LkSiHbjqOHCKCqBfEZOTv"
                },
                "href" : "https://api.spotify.com/v1/artists/3LkSiHbjqOHCKCqBfEZOTv",
                "id" : "3LkSiHbjqOHCKCqBfEZOTv",
                "name" : "Atreyu",
                "type" : "artist",
                "uri" : "spotify:artist:3LkSiHbjqOHCKCqBfEZOTv"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "IE", "IL", "IS", "IT", "JO", "JP", "KW", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PL", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "UY", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 240319,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/7ztceHSOAMShaNxdDxiR8d"
              },
              "href" : "https://api.spotify.com/v1/tracks/7ztceHSOAMShaNxdDxiR8d",
              "id" : "7ztceHSOAMShaNxdDxiR8d",
              "is_local" : false,
              "name" : "Lose It",
              "preview_url" : "https://p.scdn.co/mp3-preview/2e68ff403182d6cb9f702ac60705cc9238514984?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 6,
              "type" : "track",
              "uri" : "spotify:track:7ztceHSOAMShaNxdDxiR8d"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/3LkSiHbjqOHCKCqBfEZOTv"
                },
                "href" : "https://api.spotify.com/v1/artists/3LkSiHbjqOHCKCqBfEZOTv",
                "id" : "3LkSiHbjqOHCKCqBfEZOTv",
                "name" : "Atreyu",
                "type" : "artist",
                "uri" : "spotify:artist:3LkSiHbjqOHCKCqBfEZOTv"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "IE", "IL", "IS", "IT", "JO", "JP", "KW", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PL", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "UY", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 185253,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/6YWZYXddg8Tl533NeYt9El"
              },
              "href" : "https://api.spotify.com/v1/tracks/6YWZYXddg8Tl533NeYt9El",
              "id" : "6YWZYXddg8Tl533NeYt9El",
              "is_local" : false,
              "name" : "No One Cares",
              "preview_url" : "https://p.scdn.co/mp3-preview/0bc6cf85bb0377dc6fa966ab16ae672531aa965d?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 7,
              "type" : "track",
              "uri" : "spotify:track:6YWZYXddg8Tl533NeYt9El"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/3LkSiHbjqOHCKCqBfEZOTv"
                },
                "href" : "https://api.spotify.com/v1/artists/3LkSiHbjqOHCKCqBfEZOTv",
                "id" : "3LkSiHbjqOHCKCqBfEZOTv",
                "name" : "Atreyu",
                "type" : "artist",
                "uri" : "spotify:artist:3LkSiHbjqOHCKCqBfEZOTv"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "IE", "IL", "IS", "IT", "JO", "JP", "KW", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PL", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "UY", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 244159,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/4ARMIaO2jnOtALltVvzOc8"
              },
              "href" : "https://api.spotify.com/v1/tracks/4ARMIaO2jnOtALltVvzOc8",
              "id" : "4ARMIaO2jnOtALltVvzOc8",
              "is_local" : false,
              "name" : "Can't Happen Here",
              "preview_url" : "https://p.scdn.co/mp3-preview/c0b9bfd60a46d6061e12d7e69d50f5b8dd43ad6a?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 8,
              "type" : "track",
              "uri" : "spotify:track:4ARMIaO2jnOtALltVvzOc8"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/3LkSiHbjqOHCKCqBfEZOTv"
                },
                "href" : "https://api.spotify.com/v1/artists/3LkSiHbjqOHCKCqBfEZOTv",
                "id" : "3LkSiHbjqOHCKCqBfEZOTv",
                "name" : "Atreyu",
                "type" : "artist",
                "uri" : "spotify:artist:3LkSiHbjqOHCKCqBfEZOTv"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "IE", "IL", "IS", "IT", "JO", "JP", "KW", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PL", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "UY", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 208479,
              "explicit" : true,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/6PbM9Gm4NvgOnB3UYcZ0MY"
              },
              "href" : "https://api.spotify.com/v1/tracks/6PbM9Gm4NvgOnB3UYcZ0MY",
              "id" : "6PbM9Gm4NvgOnB3UYcZ0MY",
              "is_local" : false,
              "name" : "Slow Burn",
              "preview_url" : "https://p.scdn.co/mp3-preview/47d3ec996c52503909a11cf69c5e244a626da602?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 9,
              "type" : "track",
              "uri" : "spotify:track:6PbM9Gm4NvgOnB3UYcZ0MY"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/3LkSiHbjqOHCKCqBfEZOTv"
                },
                "href" : "https://api.spotify.com/v1/artists/3LkSiHbjqOHCKCqBfEZOTv",
                "id" : "3LkSiHbjqOHCKCqBfEZOTv",
                "name" : "Atreyu",
                "type" : "artist",
                "uri" : "spotify:artist:3LkSiHbjqOHCKCqBfEZOTv"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "IE", "IL", "IS", "IT", "JO", "JP", "KW", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PL", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "UY", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 251453,
              "explicit" : true,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/1QQPdR1BYLoZyYe8C8XW9C"
              },
              "href" : "https://api.spotify.com/v1/tracks/1QQPdR1BYLoZyYe8C8XW9C",
              "id" : "1QQPdR1BYLoZyYe8C8XW9C",
              "is_local" : false,
              "name" : "Blow",
              "preview_url" : "https://p.scdn.co/mp3-preview/b15997c0c96dbb3cca4c3dedbc3d5f709e236599?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 10,
              "type" : "track",
              "uri" : "spotify:track:1QQPdR1BYLoZyYe8C8XW9C"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/3LkSiHbjqOHCKCqBfEZOTv"
                },
                "href" : "https://api.spotify.com/v1/artists/3LkSiHbjqOHCKCqBfEZOTv",
                "id" : "3LkSiHbjqOHCKCqBfEZOTv",
                "name" : "Atreyu",
                "type" : "artist",
                "uri" : "spotify:artist:3LkSiHbjqOHCKCqBfEZOTv"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "IE", "IL", "IS", "IT", "JO", "JP", "KW", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PL", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "UY", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 287413,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/1NgD64oAiQV0FVkRvIM2VN"
              },
              "href" : "https://api.spotify.com/v1/tracks/1NgD64oAiQV0FVkRvIM2VN",
              "id" : "1NgD64oAiQV0FVkRvIM2VN",
              "is_local" : false,
              "name" : "Lead Sails (And a Paper Anchor)",
              "preview_url" : "https://p.scdn.co/mp3-preview/19d4f51247082db73a1f0c98087fb294b370ff49?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 11,
              "type" : "track",
              "uri" : "spotify:track:1NgD64oAiQV0FVkRvIM2VN"
            } ],
            "limit" : 50,
            "next" : null,
            "offset" : 0,
            "previous" : null,
            "total" : 11
          },
          "type" : "album",
          "uri" : "spotify:album:1iTr1QCKteUqPY5oQL8xuD"
        }
      }, {
        "added_at" : "2017-05-26T14:48:16Z",
        "album" : {
          "album_type" : "album",
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/77yY2QmM6bYvjJ3y5L2R0v"
            },
            "href" : "https://api.spotify.com/v1/artists/77yY2QmM6bYvjJ3y5L2R0v",
            "id" : "77yY2QmM6bYvjJ3y5L2R0v",
            "name" : "Jeremy Soule",
            "type" : "artist",
            "uri" : "spotify:artist:77yY2QmM6bYvjJ3y5L2R0v"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
          "copyrights" : [ {
            "text" : "2013 Bethesda Softworks",
            "type" : "C"
          }, {
            "text" : "2013 Bethesda Softworks",
            "type" : "P"
          } ],
          "external_ids" : {
            "upc" : "093155172029"
          },
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/25r7pEf31viAbsoVHC6bQ4"
          },
          "genres" : [ ],
          "href" : "https://api.spotify.com/v1/albums/25r7pEf31viAbsoVHC6bQ4",
          "id" : "25r7pEf31viAbsoVHC6bQ4",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b2736d30303243e6bd56a5482e9b",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e026d30303243e6bd56a5482e9b",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d000048516d30303243e6bd56a5482e9b",
            "width" : 64
          } ],
          "label" : "Bethesda Softworks",
          "name" : "The Elder Scrolls V: Skyrim: Original Game Soundtrack",
          "popularity" : 74,
          "release_date" : "2013-01-31",
          "release_date_precision" : "day",
          "total_tracks" : 53,
          "tracks" : {
            "href" : "https://api.spotify.com/v1/albums/25r7pEf31viAbsoVHC6bQ4/tracks?offset=0&limit=50",
            "items" : [ {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/77yY2QmM6bYvjJ3y5L2R0v"
                },
                "href" : "https://api.spotify.com/v1/artists/77yY2QmM6bYvjJ3y5L2R0v",
                "id" : "77yY2QmM6bYvjJ3y5L2R0v",
                "name" : "Jeremy Soule",
                "type" : "artist",
                "uri" : "spotify:artist:77yY2QmM6bYvjJ3y5L2R0v"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 235636,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/2gaZJDgE71VL9PzzUUlpMg"
              },
              "href" : "https://api.spotify.com/v1/tracks/2gaZJDgE71VL9PzzUUlpMg",
              "id" : "2gaZJDgE71VL9PzzUUlpMg",
              "is_local" : false,
              "name" : "Dragonborn",
              "preview_url" : "https://p.scdn.co/mp3-preview/409b4b09bec98af789176949ef9fbcbeecb437c8?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 1,
              "type" : "track",
              "uri" : "spotify:track:2gaZJDgE71VL9PzzUUlpMg"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/77yY2QmM6bYvjJ3y5L2R0v"
                },
                "href" : "https://api.spotify.com/v1/artists/77yY2QmM6bYvjJ3y5L2R0v",
                "id" : "77yY2QmM6bYvjJ3y5L2R0v",
                "name" : "Jeremy Soule",
                "type" : "artist",
                "uri" : "spotify:artist:77yY2QmM6bYvjJ3y5L2R0v"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 92899,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/0DrhapFEF5d9Yzg4v914dp"
              },
              "href" : "https://api.spotify.com/v1/tracks/0DrhapFEF5d9Yzg4v914dp",
              "id" : "0DrhapFEF5d9Yzg4v914dp",
              "is_local" : false,
              "name" : "Awake",
              "preview_url" : "https://p.scdn.co/mp3-preview/34216a584a466ab76f93ce4f8890bba0678121b0?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 2,
              "type" : "track",
              "uri" : "spotify:track:0DrhapFEF5d9Yzg4v914dp"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/77yY2QmM6bYvjJ3y5L2R0v"
                },
                "href" : "https://api.spotify.com/v1/artists/77yY2QmM6bYvjJ3y5L2R0v",
                "id" : "77yY2QmM6bYvjJ3y5L2R0v",
                "name" : "Jeremy Soule",
                "type" : "artist",
                "uri" : "spotify:artist:77yY2QmM6bYvjJ3y5L2R0v"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 304007,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/0zke8Vmo0bgbPjxL3pUhqk"
              },
              "href" : "https://api.spotify.com/v1/tracks/0zke8Vmo0bgbPjxL3pUhqk",
              "id" : "0zke8Vmo0bgbPjxL3pUhqk",
              "is_local" : false,
              "name" : "From Past to Present",
              "preview_url" : "https://p.scdn.co/mp3-preview/e62f8a809addffaaa45dcfe7af1c2768bf9327a4?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 3,
              "type" : "track",
              "uri" : "spotify:track:0zke8Vmo0bgbPjxL3pUhqk"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/77yY2QmM6bYvjJ3y5L2R0v"
                },
                "href" : "https://api.spotify.com/v1/artists/77yY2QmM6bYvjJ3y5L2R0v",
                "id" : "77yY2QmM6bYvjJ3y5L2R0v",
                "name" : "Jeremy Soule",
                "type" : "artist",
                "uri" : "spotify:artist:77yY2QmM6bYvjJ3y5L2R0v"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 384173,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/5XcivSLcE4sR5s9ItTxROd"
              },
              "href" : "https://api.spotify.com/v1/tracks/5XcivSLcE4sR5s9ItTxROd",
              "id" : "5XcivSLcE4sR5s9ItTxROd",
              "is_local" : false,
              "name" : "Unbroken Road",
              "preview_url" : "https://p.scdn.co/mp3-preview/1c26f19fef51d666c09e535b9b8bf4ca585b7731?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 4,
              "type" : "track",
              "uri" : "spotify:track:5XcivSLcE4sR5s9ItTxROd"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/77yY2QmM6bYvjJ3y5L2R0v"
                },
                "href" : "https://api.spotify.com/v1/artists/77yY2QmM6bYvjJ3y5L2R0v",
                "id" : "77yY2QmM6bYvjJ3y5L2R0v",
                "name" : "Jeremy Soule",
                "type" : "artist",
                "uri" : "spotify:artist:77yY2QmM6bYvjJ3y5L2R0v"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 285531,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/2gEAHKw83WHPD875YqDHH2"
              },
              "href" : "https://api.spotify.com/v1/tracks/2gEAHKw83WHPD875YqDHH2",
              "id" : "2gEAHKw83WHPD875YqDHH2",
              "is_local" : false,
              "name" : "Ancient Stones",
              "preview_url" : "https://p.scdn.co/mp3-preview/c824d1303afc781f470caaea073a3e1bb3e2fc76?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 5,
              "type" : "track",
              "uri" : "spotify:track:2gEAHKw83WHPD875YqDHH2"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/77yY2QmM6bYvjJ3y5L2R0v"
                },
                "href" : "https://api.spotify.com/v1/artists/77yY2QmM6bYvjJ3y5L2R0v",
                "id" : "77yY2QmM6bYvjJ3y5L2R0v",
                "name" : "Jeremy Soule",
                "type" : "artist",
                "uri" : "spotify:artist:77yY2QmM6bYvjJ3y5L2R0v"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 226058,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/1l7bKxkdTymsFbxWzsK3vw"
              },
              "href" : "https://api.spotify.com/v1/tracks/1l7bKxkdTymsFbxWzsK3vw",
              "id" : "1l7bKxkdTymsFbxWzsK3vw",
              "is_local" : false,
              "name" : "The City Gates",
              "preview_url" : "https://p.scdn.co/mp3-preview/79ccdde2007f7ae98751b20e23c27f4a460bb8ae?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 6,
              "type" : "track",
              "uri" : "spotify:track:1l7bKxkdTymsFbxWzsK3vw"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/77yY2QmM6bYvjJ3y5L2R0v"
                },
                "href" : "https://api.spotify.com/v1/artists/77yY2QmM6bYvjJ3y5L2R0v",
                "id" : "77yY2QmM6bYvjJ3y5L2R0v",
                "name" : "Jeremy Soule",
                "type" : "artist",
                "uri" : "spotify:artist:77yY2QmM6bYvjJ3y5L2R0v"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 171219,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/1VwrnHBdrWJZOwWv99XjHh"
              },
              "href" : "https://api.spotify.com/v1/tracks/1VwrnHBdrWJZOwWv99XjHh",
              "id" : "1VwrnHBdrWJZOwWv99XjHh",
              "is_local" : false,
              "name" : "Silent Footsteps",
              "preview_url" : "https://p.scdn.co/mp3-preview/998e96f32a519d438458af58f40809e2d52d0d6a?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 7,
              "type" : "track",
              "uri" : "spotify:track:1VwrnHBdrWJZOwWv99XjHh"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/77yY2QmM6bYvjJ3y5L2R0v"
                },
                "href" : "https://api.spotify.com/v1/artists/77yY2QmM6bYvjJ3y5L2R0v",
                "id" : "77yY2QmM6bYvjJ3y5L2R0v",
                "name" : "Jeremy Soule",
                "type" : "artist",
                "uri" : "spotify:artist:77yY2QmM6bYvjJ3y5L2R0v"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 140936,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/3A6B7EgDzGsBakF8u6Jvlw"
              },
              "href" : "https://api.spotify.com/v1/tracks/3A6B7EgDzGsBakF8u6Jvlw",
              "id" : "3A6B7EgDzGsBakF8u6Jvlw",
              "is_local" : false,
              "name" : "Dragonsreach",
              "preview_url" : "https://p.scdn.co/mp3-preview/27f988dbf4adfed4376a88b77315c365612f3f31?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 8,
              "type" : "track",
              "uri" : "spotify:track:3A6B7EgDzGsBakF8u6Jvlw"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/77yY2QmM6bYvjJ3y5L2R0v"
                },
                "href" : "https://api.spotify.com/v1/artists/77yY2QmM6bYvjJ3y5L2R0v",
                "id" : "77yY2QmM6bYvjJ3y5L2R0v",
                "name" : "Jeremy Soule",
                "type" : "artist",
                "uri" : "spotify:artist:77yY2QmM6bYvjJ3y5L2R0v"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 108816,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/4rJSq9z60yScNTlJ4Lvpei"
              },
              "href" : "https://api.spotify.com/v1/tracks/4rJSq9z60yScNTlJ4Lvpei",
              "id" : "4rJSq9z60yScNTlJ4Lvpei",
              "is_local" : false,
              "name" : "Tooth and Claw",
              "preview_url" : "https://p.scdn.co/mp3-preview/31d181d7548f55dcba9f19e3f325311848d126a1?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 9,
              "type" : "track",
              "uri" : "spotify:track:4rJSq9z60yScNTlJ4Lvpei"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/77yY2QmM6bYvjJ3y5L2R0v"
                },
                "href" : "https://api.spotify.com/v1/artists/77yY2QmM6bYvjJ3y5L2R0v",
                "id" : "77yY2QmM6bYvjJ3y5L2R0v",
                "name" : "Jeremy Soule",
                "type" : "artist",
                "uri" : "spotify:artist:77yY2QmM6bYvjJ3y5L2R0v"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 221649,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/2ykpGxtio3h7TN2pe31YFi"
              },
              "href" : "https://api.spotify.com/v1/tracks/2ykpGxtio3h7TN2pe31YFi",
              "id" : "2ykpGxtio3h7TN2pe31YFi",
              "is_local" : false,
              "name" : "Under an Ancient Sun",
              "preview_url" : "https://p.scdn.co/mp3-preview/cd2fdd20ca69cf3e755e2fc8d6307aff7f30fb9c?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 10,
              "type" : "track",
              "uri" : "spotify:track:2ykpGxtio3h7TN2pe31YFi"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/77yY2QmM6bYvjJ3y5L2R0v"
                },
                "href" : "https://api.spotify.com/v1/artists/77yY2QmM6bYvjJ3y5L2R0v",
                "id" : "77yY2QmM6bYvjJ3y5L2R0v",
                "name" : "Jeremy Soule",
                "type" : "artist",
                "uri" : "spotify:artist:77yY2QmM6bYvjJ3y5L2R0v"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 180483,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/2MsJZoon1bDM3KC9RaoZxu"
              },
              "href" : "https://api.spotify.com/v1/tracks/2MsJZoon1bDM3KC9RaoZxu",
              "id" : "2MsJZoon1bDM3KC9RaoZxu",
              "is_local" : false,
              "name" : "Death or Sovngarde",
              "preview_url" : "https://p.scdn.co/mp3-preview/05d370081c1c458a7b5a8c1c6fbfc1b077125a39?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 11,
              "type" : "track",
              "uri" : "spotify:track:2MsJZoon1bDM3KC9RaoZxu"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/77yY2QmM6bYvjJ3y5L2R0v"
                },
                "href" : "https://api.spotify.com/v1/artists/77yY2QmM6bYvjJ3y5L2R0v",
                "id" : "77yY2QmM6bYvjJ3y5L2R0v",
                "name" : "Jeremy Soule",
                "type" : "artist",
                "uri" : "spotify:artist:77yY2QmM6bYvjJ3y5L2R0v"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 364425,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/5qjqvjJQ15sH6dIgXUzg5I"
              },
              "href" : "https://api.spotify.com/v1/tracks/5qjqvjJQ15sH6dIgXUzg5I",
              "id" : "5qjqvjJQ15sH6dIgXUzg5I",
              "is_local" : false,
              "name" : "Masser",
              "preview_url" : "https://p.scdn.co/mp3-preview/3d167f476b8cbcebb0762c81485f1827d8c1f859?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 12,
              "type" : "track",
              "uri" : "spotify:track:5qjqvjJQ15sH6dIgXUzg5I"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/77yY2QmM6bYvjJ3y5L2R0v"
                },
                "href" : "https://api.spotify.com/v1/artists/77yY2QmM6bYvjJ3y5L2R0v",
                "id" : "77yY2QmM6bYvjJ3y5L2R0v",
                "name" : "Jeremy Soule",
                "type" : "artist",
                "uri" : "spotify:artist:77yY2QmM6bYvjJ3y5L2R0v"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 232870,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/3wnSHCMTtD1fxwOzTc5Gdh"
              },
              "href" : "https://api.spotify.com/v1/tracks/3wnSHCMTtD1fxwOzTc5Gdh",
              "id" : "3wnSHCMTtD1fxwOzTc5Gdh",
              "is_local" : false,
              "name" : "Distant Horizons",
              "preview_url" : "https://p.scdn.co/mp3-preview/94306fee4ce2d4a022be94d6858547640082cf9b?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 13,
              "type" : "track",
              "uri" : "spotify:track:3wnSHCMTtD1fxwOzTc5Gdh"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/77yY2QmM6bYvjJ3y5L2R0v"
                },
                "href" : "https://api.spotify.com/v1/artists/77yY2QmM6bYvjJ3y5L2R0v",
                "id" : "77yY2QmM6bYvjJ3y5L2R0v",
                "name" : "Jeremy Soule",
                "type" : "artist",
                "uri" : "spotify:artist:77yY2QmM6bYvjJ3y5L2R0v"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 237794,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/63zmiYZRPVSRLoYXbqfLPv"
              },
              "href" : "https://api.spotify.com/v1/tracks/63zmiYZRPVSRLoYXbqfLPv",
              "id" : "63zmiYZRPVSRLoYXbqfLPv",
              "is_local" : false,
              "name" : "Dawn",
              "preview_url" : "https://p.scdn.co/mp3-preview/647fb94695c8c6a8ef5050db20c75f0ee19dc68b?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 14,
              "type" : "track",
              "uri" : "spotify:track:63zmiYZRPVSRLoYXbqfLPv"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/77yY2QmM6bYvjJ3y5L2R0v"
                },
                "href" : "https://api.spotify.com/v1/artists/77yY2QmM6bYvjJ3y5L2R0v",
                "id" : "77yY2QmM6bYvjJ3y5L2R0v",
                "name" : "Jeremy Soule",
                "type" : "artist",
                "uri" : "spotify:artist:77yY2QmM6bYvjJ3y5L2R0v"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 199840,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/45Oh87YCFHuXgw95CFc9du"
              },
              "href" : "https://api.spotify.com/v1/tracks/45Oh87YCFHuXgw95CFc9du",
              "id" : "45Oh87YCFHuXgw95CFc9du",
              "is_local" : false,
              "name" : "The Jerall Mountains",
              "preview_url" : "https://p.scdn.co/mp3-preview/d4f5c928b14faf9aaeffc5759e60a6a291435299?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 15,
              "type" : "track",
              "uri" : "spotify:track:45Oh87YCFHuXgw95CFc9du"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/77yY2QmM6bYvjJ3y5L2R0v"
                },
                "href" : "https://api.spotify.com/v1/artists/77yY2QmM6bYvjJ3y5L2R0v",
                "id" : "77yY2QmM6bYvjJ3y5L2R0v",
                "name" : "Jeremy Soule",
                "type" : "artist",
                "uri" : "spotify:artist:77yY2QmM6bYvjJ3y5L2R0v"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 103000,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/5p5Q14joitJC1nMxWlBkGm"
              },
              "href" : "https://api.spotify.com/v1/tracks/5p5Q14joitJC1nMxWlBkGm",
              "id" : "5p5Q14joitJC1nMxWlBkGm",
              "is_local" : false,
              "name" : "Steel on Steel",
              "preview_url" : "https://p.scdn.co/mp3-preview/5d979fadc2434e6532db8f94750c4ccd824d0dc5?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 16,
              "type" : "track",
              "uri" : "spotify:track:5p5Q14joitJC1nMxWlBkGm"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/77yY2QmM6bYvjJ3y5L2R0v"
                },
                "href" : "https://api.spotify.com/v1/artists/77yY2QmM6bYvjJ3y5L2R0v",
                "id" : "77yY2QmM6bYvjJ3y5L2R0v",
                "name" : "Jeremy Soule",
                "type" : "artist",
                "uri" : "spotify:artist:77yY2QmM6bYvjJ3y5L2R0v"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 123216,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/5fHgBb5r91Jmdr8Q7dwmad"
              },
              "href" : "https://api.spotify.com/v1/tracks/5fHgBb5r91Jmdr8Q7dwmad",
              "id" : "5fHgBb5r91Jmdr8Q7dwmad",
              "is_local" : false,
              "name" : "Secunda",
              "preview_url" : "https://p.scdn.co/mp3-preview/466883e78eaab2224e789c823115957f415629bc?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 17,
              "type" : "track",
              "uri" : "spotify:track:5fHgBb5r91Jmdr8Q7dwmad"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/77yY2QmM6bYvjJ3y5L2R0v"
                },
                "href" : "https://api.spotify.com/v1/artists/77yY2QmM6bYvjJ3y5L2R0v",
                "id" : "77yY2QmM6bYvjJ3y5L2R0v",
                "name" : "Jeremy Soule",
                "type" : "artist",
                "uri" : "spotify:artist:77yY2QmM6bYvjJ3y5L2R0v"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 142839,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/4N8henbzdhXRgTJY1zbWHP"
              },
              "href" : "https://api.spotify.com/v1/tracks/4N8henbzdhXRgTJY1zbWHP",
              "id" : "4N8henbzdhXRgTJY1zbWHP",
              "is_local" : false,
              "name" : "Imperial Throne",
              "preview_url" : "https://p.scdn.co/mp3-preview/66f0d3f6065d6def49b94e9b4e1f507421a7ef3b?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 18,
              "type" : "track",
              "uri" : "spotify:track:4N8henbzdhXRgTJY1zbWHP"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/77yY2QmM6bYvjJ3y5L2R0v"
                },
                "href" : "https://api.spotify.com/v1/artists/77yY2QmM6bYvjJ3y5L2R0v",
                "id" : "77yY2QmM6bYvjJ3y5L2R0v",
                "name" : "Jeremy Soule",
                "type" : "artist",
                "uri" : "spotify:artist:77yY2QmM6bYvjJ3y5L2R0v"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 206332,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/1BRtrNXFD8RrlsHfo61PS7"
              },
              "href" : "https://api.spotify.com/v1/tracks/1BRtrNXFD8RrlsHfo61PS7",
              "id" : "1BRtrNXFD8RrlsHfo61PS7",
              "is_local" : false,
              "name" : "Frostfall",
              "preview_url" : "https://p.scdn.co/mp3-preview/8154b744cb36b995805399aeace55114f2536737?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 19,
              "type" : "track",
              "uri" : "spotify:track:1BRtrNXFD8RrlsHfo61PS7"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/77yY2QmM6bYvjJ3y5L2R0v"
                },
                "href" : "https://api.spotify.com/v1/artists/77yY2QmM6bYvjJ3y5L2R0v",
                "id" : "77yY2QmM6bYvjJ3y5L2R0v",
                "name" : "Jeremy Soule",
                "type" : "artist",
                "uri" : "spotify:artist:77yY2QmM6bYvjJ3y5L2R0v"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 41421,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/5og1HzVWctdhPEGBa53sgf"
              },
              "href" : "https://api.spotify.com/v1/tracks/5og1HzVWctdhPEGBa53sgf",
              "id" : "5og1HzVWctdhPEGBa53sgf",
              "is_local" : false,
              "name" : "Night Without Stars",
              "preview_url" : "https://p.scdn.co/mp3-preview/cd4c0a818872abd7dd63cdc443c4a9e910dbf075?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 20,
              "type" : "track",
              "uri" : "spotify:track:5og1HzVWctdhPEGBa53sgf"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/77yY2QmM6bYvjJ3y5L2R0v"
                },
                "href" : "https://api.spotify.com/v1/artists/77yY2QmM6bYvjJ3y5L2R0v",
                "id" : "77yY2QmM6bYvjJ3y5L2R0v",
                "name" : "Jeremy Soule",
                "type" : "artist",
                "uri" : "spotify:artist:77yY2QmM6bYvjJ3y5L2R0v"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 172743,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/0SFWcamLEyYV9EtYz91oHG"
              },
              "href" : "https://api.spotify.com/v1/tracks/0SFWcamLEyYV9EtYz91oHG",
              "id" : "0SFWcamLEyYV9EtYz91oHG",
              "is_local" : false,
              "name" : "Into Darkness",
              "preview_url" : "https://p.scdn.co/mp3-preview/51f970da88bccb78d2fdafcce2dc6630dc9eddee?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 21,
              "type" : "track",
              "uri" : "spotify:track:0SFWcamLEyYV9EtYz91oHG"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/77yY2QmM6bYvjJ3y5L2R0v"
                },
                "href" : "https://api.spotify.com/v1/artists/77yY2QmM6bYvjJ3y5L2R0v",
                "id" : "77yY2QmM6bYvjJ3y5L2R0v",
                "name" : "Jeremy Soule",
                "type" : "artist",
                "uri" : "spotify:artist:77yY2QmM6bYvjJ3y5L2R0v"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 229517,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/6O9hBwcZKrzCVVhEeoieko"
              },
              "href" : "https://api.spotify.com/v1/tracks/6O9hBwcZKrzCVVhEeoieko",
              "id" : "6O9hBwcZKrzCVVhEeoieko",
              "is_local" : false,
              "name" : "Kyne's Peace",
              "preview_url" : "https://p.scdn.co/mp3-preview/48723b0a08e70807d7073489ce950a092863472a?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 22,
              "type" : "track",
              "uri" : "spotify:track:6O9hBwcZKrzCVVhEeoieko"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/77yY2QmM6bYvjJ3y5L2R0v"
                },
                "href" : "https://api.spotify.com/v1/artists/77yY2QmM6bYvjJ3y5L2R0v",
                "id" : "77yY2QmM6bYvjJ3y5L2R0v",
                "name" : "Jeremy Soule",
                "type" : "artist",
                "uri" : "spotify:artist:77yY2QmM6bYvjJ3y5L2R0v"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 92611,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/5ZiXhaYx9gkuYJs38r9MDu"
              },
              "href" : "https://api.spotify.com/v1/tracks/5ZiXhaYx9gkuYJs38r9MDu",
              "id" : "5ZiXhaYx9gkuYJs38r9MDu",
              "is_local" : false,
              "name" : "Unbound",
              "preview_url" : "https://p.scdn.co/mp3-preview/1ab7861a7a8c8205dc7d05f4c78cabcb4305173b?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 23,
              "type" : "track",
              "uri" : "spotify:track:5ZiXhaYx9gkuYJs38r9MDu"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/77yY2QmM6bYvjJ3y5L2R0v"
                },
                "href" : "https://api.spotify.com/v1/artists/77yY2QmM6bYvjJ3y5L2R0v",
                "id" : "77yY2QmM6bYvjJ3y5L2R0v",
                "name" : "Jeremy Soule",
                "type" : "artist",
                "uri" : "spotify:artist:77yY2QmM6bYvjJ3y5L2R0v"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 331475,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/2rtFUTZLSQ7cECBXfUOgJe"
              },
              "href" : "https://api.spotify.com/v1/tracks/2rtFUTZLSQ7cECBXfUOgJe",
              "id" : "2rtFUTZLSQ7cECBXfUOgJe",
              "is_local" : false,
              "name" : "Far Horizons",
              "preview_url" : "https://p.scdn.co/mp3-preview/e4413997637956afd074047f281d64205a4287d6?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 24,
              "type" : "track",
              "uri" : "spotify:track:2rtFUTZLSQ7cECBXfUOgJe"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/77yY2QmM6bYvjJ3y5L2R0v"
                },
                "href" : "https://api.spotify.com/v1/artists/77yY2QmM6bYvjJ3y5L2R0v",
                "id" : "77yY2QmM6bYvjJ3y5L2R0v",
                "name" : "Jeremy Soule",
                "type" : "artist",
                "uri" : "spotify:artist:77yY2QmM6bYvjJ3y5L2R0v"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 199866,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/26mWof6V1cuAmp8KSbTEIo"
              },
              "href" : "https://api.spotify.com/v1/tracks/26mWof6V1cuAmp8KSbTEIo",
              "id" : "26mWof6V1cuAmp8KSbTEIo",
              "is_local" : false,
              "name" : "A Winter's Tale",
              "preview_url" : "https://p.scdn.co/mp3-preview/8d3566ba11dfd6db7efccbf7c9892efe639cf8c6?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 25,
              "type" : "track",
              "uri" : "spotify:track:26mWof6V1cuAmp8KSbTEIo"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/77yY2QmM6bYvjJ3y5L2R0v"
                },
                "href" : "https://api.spotify.com/v1/artists/77yY2QmM6bYvjJ3y5L2R0v",
                "id" : "77yY2QmM6bYvjJ3y5L2R0v",
                "name" : "Jeremy Soule",
                "type" : "artist",
                "uri" : "spotify:artist:77yY2QmM6bYvjJ3y5L2R0v"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 148060,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/6BG6rbPZp6lEXy7KN2mCDg"
              },
              "href" : "https://api.spotify.com/v1/tracks/6BG6rbPZp6lEXy7KN2mCDg",
              "id" : "6BG6rbPZp6lEXy7KN2mCDg",
              "is_local" : false,
              "name" : "The Bannered Mare",
              "preview_url" : "https://p.scdn.co/mp3-preview/8462f31dddeb60b4f439793f909b477bde0caf63?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 26,
              "type" : "track",
              "uri" : "spotify:track:6BG6rbPZp6lEXy7KN2mCDg"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/77yY2QmM6bYvjJ3y5L2R0v"
                },
                "href" : "https://api.spotify.com/v1/artists/77yY2QmM6bYvjJ3y5L2R0v",
                "id" : "77yY2QmM6bYvjJ3y5L2R0v",
                "name" : "Jeremy Soule",
                "type" : "artist",
                "uri" : "spotify:artist:77yY2QmM6bYvjJ3y5L2R0v"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 244842,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/18CctEeOpjEDIAvWM5S7RE"
              },
              "href" : "https://api.spotify.com/v1/tracks/18CctEeOpjEDIAvWM5S7RE",
              "id" : "18CctEeOpjEDIAvWM5S7RE",
              "is_local" : false,
              "name" : "The Streets of Whiterun",
              "preview_url" : "https://p.scdn.co/mp3-preview/4844b821e592be0fec82c33592561d69f3136866?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 27,
              "type" : "track",
              "uri" : "spotify:track:18CctEeOpjEDIAvWM5S7RE"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/77yY2QmM6bYvjJ3y5L2R0v"
                },
                "href" : "https://api.spotify.com/v1/artists/77yY2QmM6bYvjJ3y5L2R0v",
                "id" : "77yY2QmM6bYvjJ3y5L2R0v",
                "name" : "Jeremy Soule",
                "type" : "artist",
                "uri" : "spotify:artist:77yY2QmM6bYvjJ3y5L2R0v"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 194123,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/1czhAnpBVEcFN9DTLAsfAQ"
              },
              "href" : "https://api.spotify.com/v1/tracks/1czhAnpBVEcFN9DTLAsfAQ",
              "id" : "1czhAnpBVEcFN9DTLAsfAQ",
              "is_local" : false,
              "name" : "One They Fear",
              "preview_url" : "https://p.scdn.co/mp3-preview/e8ec3e03dcbe43907433cb57f3aa0a370447adb8?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 28,
              "type" : "track",
              "uri" : "spotify:track:1czhAnpBVEcFN9DTLAsfAQ"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/77yY2QmM6bYvjJ3y5L2R0v"
                },
                "href" : "https://api.spotify.com/v1/artists/77yY2QmM6bYvjJ3y5L2R0v",
                "id" : "77yY2QmM6bYvjJ3y5L2R0v",
                "name" : "Jeremy Soule",
                "type" : "artist",
                "uri" : "spotify:artist:77yY2QmM6bYvjJ3y5L2R0v"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 209103,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/5ZTOYmie4S8M0mdpQyxptN"
              },
              "href" : "https://api.spotify.com/v1/tracks/5ZTOYmie4S8M0mdpQyxptN",
              "id" : "5ZTOYmie4S8M0mdpQyxptN",
              "is_local" : false,
              "name" : "The White River",
              "preview_url" : "https://p.scdn.co/mp3-preview/ce38f427a701de701f14e4dcfc8e10df8fd286dd?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 29,
              "type" : "track",
              "uri" : "spotify:track:5ZTOYmie4S8M0mdpQyxptN"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/77yY2QmM6bYvjJ3y5L2R0v"
                },
                "href" : "https://api.spotify.com/v1/artists/77yY2QmM6bYvjJ3y5L2R0v",
                "id" : "77yY2QmM6bYvjJ3y5L2R0v",
                "name" : "Jeremy Soule",
                "type" : "artist",
                "uri" : "spotify:artist:77yY2QmM6bYvjJ3y5L2R0v"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 141845,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/4XAZRGBgDIunpDTCLPmFBI"
              },
              "href" : "https://api.spotify.com/v1/tracks/4XAZRGBgDIunpDTCLPmFBI",
              "id" : "4XAZRGBgDIunpDTCLPmFBI",
              "is_local" : false,
              "name" : "Silence Unbroken",
              "preview_url" : "https://p.scdn.co/mp3-preview/aa2b684243758aec7284f923ee0f2c3c0f70baf9?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 30,
              "type" : "track",
              "uri" : "spotify:track:4XAZRGBgDIunpDTCLPmFBI"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/77yY2QmM6bYvjJ3y5L2R0v"
                },
                "href" : "https://api.spotify.com/v1/artists/77yY2QmM6bYvjJ3y5L2R0v",
                "id" : "77yY2QmM6bYvjJ3y5L2R0v",
                "name" : "Jeremy Soule",
                "type" : "artist",
                "uri" : "spotify:artist:77yY2QmM6bYvjJ3y5L2R0v"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 396835,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/77Fw7rWYBsjA5Uf2cSocUN"
              },
              "href" : "https://api.spotify.com/v1/tracks/77Fw7rWYBsjA5Uf2cSocUN",
              "id" : "77Fw7rWYBsjA5Uf2cSocUN",
              "is_local" : false,
              "name" : "Standing Stones",
              "preview_url" : "https://p.scdn.co/mp3-preview/de1f7b69301e557a3ee6f8e83bd3356b8073a6b8?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 31,
              "type" : "track",
              "uri" : "spotify:track:77Fw7rWYBsjA5Uf2cSocUN"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/77yY2QmM6bYvjJ3y5L2R0v"
                },
                "href" : "https://api.spotify.com/v1/artists/77yY2QmM6bYvjJ3y5L2R0v",
                "id" : "77yY2QmM6bYvjJ3y5L2R0v",
                "name" : "Jeremy Soule",
                "type" : "artist",
                "uri" : "spotify:artist:77yY2QmM6bYvjJ3y5L2R0v"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 253990,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/2fV0IaXWhhw3qH1UqIlxLJ"
              },
              "href" : "https://api.spotify.com/v1/tracks/2fV0IaXWhhw3qH1UqIlxLJ",
              "id" : "2fV0IaXWhhw3qH1UqIlxLJ",
              "is_local" : false,
              "name" : "Beneath the Ice",
              "preview_url" : "https://p.scdn.co/mp3-preview/0b8f766638ac294d58a38e3b36b2d7350d421ea6?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 32,
              "type" : "track",
              "uri" : "spotify:track:2fV0IaXWhhw3qH1UqIlxLJ"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/77yY2QmM6bYvjJ3y5L2R0v"
                },
                "href" : "https://api.spotify.com/v1/artists/77yY2QmM6bYvjJ3y5L2R0v",
                "id" : "77yY2QmM6bYvjJ3y5L2R0v",
                "name" : "Jeremy Soule",
                "type" : "artist",
                "uri" : "spotify:artist:77yY2QmM6bYvjJ3y5L2R0v"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 229500,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/0lIDOHnoe4RJgm6rzowj6x"
              },
              "href" : "https://api.spotify.com/v1/tracks/0lIDOHnoe4RJgm6rzowj6x",
              "id" : "0lIDOHnoe4RJgm6rzowj6x",
              "is_local" : false,
              "name" : "Tundra",
              "preview_url" : "https://p.scdn.co/mp3-preview/010809bc8997596f302a434a0e4607a05664c530?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 33,
              "type" : "track",
              "uri" : "spotify:track:0lIDOHnoe4RJgm6rzowj6x"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/77yY2QmM6bYvjJ3y5L2R0v"
                },
                "href" : "https://api.spotify.com/v1/artists/77yY2QmM6bYvjJ3y5L2R0v",
                "id" : "77yY2QmM6bYvjJ3y5L2R0v",
                "name" : "Jeremy Soule",
                "type" : "artist",
                "uri" : "spotify:artist:77yY2QmM6bYvjJ3y5L2R0v"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 249902,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/5OEXISM55Inhcs4Ea29Iej"
              },
              "href" : "https://api.spotify.com/v1/tracks/5OEXISM55Inhcs4Ea29Iej",
              "id" : "5OEXISM55Inhcs4Ea29Iej",
              "is_local" : false,
              "name" : "Journey's End",
              "preview_url" : "https://p.scdn.co/mp3-preview/c2e4db6407c356809228012408d07b57cac404c6?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 34,
              "type" : "track",
              "uri" : "spotify:track:5OEXISM55Inhcs4Ea29Iej"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/77yY2QmM6bYvjJ3y5L2R0v"
                },
                "href" : "https://api.spotify.com/v1/artists/77yY2QmM6bYvjJ3y5L2R0v",
                "id" : "77yY2QmM6bYvjJ3y5L2R0v",
                "name" : "Jeremy Soule",
                "type" : "artist",
                "uri" : "spotify:artist:77yY2QmM6bYvjJ3y5L2R0v"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 67045,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/6ARhVYRijhEVK51s2krtgv"
              },
              "href" : "https://api.spotify.com/v1/tracks/6ARhVYRijhEVK51s2krtgv",
              "id" : "6ARhVYRijhEVK51s2krtgv",
              "is_local" : false,
              "name" : "Before the Storm",
              "preview_url" : "https://p.scdn.co/mp3-preview/ca885310eb99ea2d7cb7682e044b483a77441e21?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 35,
              "type" : "track",
              "uri" : "spotify:track:6ARhVYRijhEVK51s2krtgv"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/77yY2QmM6bYvjJ3y5L2R0v"
                },
                "href" : "https://api.spotify.com/v1/artists/77yY2QmM6bYvjJ3y5L2R0v",
                "id" : "77yY2QmM6bYvjJ3y5L2R0v",
                "name" : "Jeremy Soule",
                "type" : "artist",
                "uri" : "spotify:artist:77yY2QmM6bYvjJ3y5L2R0v"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 189885,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/0lmT9W6HJBuHTTLAx55CEI"
              },
              "href" : "https://api.spotify.com/v1/tracks/0lmT9W6HJBuHTTLAx55CEI",
              "id" : "0lmT9W6HJBuHTTLAx55CEI",
              "is_local" : false,
              "name" : "A Chance Meeting",
              "preview_url" : "https://p.scdn.co/mp3-preview/2fe07fd13f3b45ead67e97b009f8d2f963eb042a?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 36,
              "type" : "track",
              "uri" : "spotify:track:0lmT9W6HJBuHTTLAx55CEI"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/77yY2QmM6bYvjJ3y5L2R0v"
                },
                "href" : "https://api.spotify.com/v1/artists/77yY2QmM6bYvjJ3y5L2R0v",
                "id" : "77yY2QmM6bYvjJ3y5L2R0v",
                "name" : "Jeremy Soule",
                "type" : "artist",
                "uri" : "spotify:artist:77yY2QmM6bYvjJ3y5L2R0v"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 182346,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/0OA1MDhAZUytHW5o3sGNa9"
              },
              "href" : "https://api.spotify.com/v1/tracks/0OA1MDhAZUytHW5o3sGNa9",
              "id" : "0OA1MDhAZUytHW5o3sGNa9",
              "is_local" : false,
              "name" : "Out of the Cold",
              "preview_url" : "https://p.scdn.co/mp3-preview/23accc9fe5457ae41b94e768ee985437e4defde6?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 37,
              "type" : "track",
              "uri" : "spotify:track:0OA1MDhAZUytHW5o3sGNa9"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/77yY2QmM6bYvjJ3y5L2R0v"
                },
                "href" : "https://api.spotify.com/v1/artists/77yY2QmM6bYvjJ3y5L2R0v",
                "id" : "77yY2QmM6bYvjJ3y5L2R0v",
                "name" : "Jeremy Soule",
                "type" : "artist",
                "uri" : "spotify:artist:77yY2QmM6bYvjJ3y5L2R0v"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 189929,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/0JP97EPP5NkoemtNNjQYPR"
              },
              "href" : "https://api.spotify.com/v1/tracks/0JP97EPP5NkoemtNNjQYPR",
              "id" : "0JP97EPP5NkoemtNNjQYPR",
              "is_local" : false,
              "name" : "Around the Fire",
              "preview_url" : "https://p.scdn.co/mp3-preview/7e0c93d70419bf8893d48bb78bea6bd0d90ccc2b?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 38,
              "type" : "track",
              "uri" : "spotify:track:0JP97EPP5NkoemtNNjQYPR"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/77yY2QmM6bYvjJ3y5L2R0v"
                },
                "href" : "https://api.spotify.com/v1/artists/77yY2QmM6bYvjJ3y5L2R0v",
                "id" : "77yY2QmM6bYvjJ3y5L2R0v",
                "name" : "Jeremy Soule",
                "type" : "artist",
                "uri" : "spotify:artist:77yY2QmM6bYvjJ3y5L2R0v"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 139354,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/2xovTJpFp6nIish7Umbxnw"
              },
              "href" : "https://api.spotify.com/v1/tracks/2xovTJpFp6nIish7Umbxnw",
              "id" : "2xovTJpFp6nIish7Umbxnw",
              "is_local" : false,
              "name" : "Shadows and Echoes",
              "preview_url" : "https://p.scdn.co/mp3-preview/f1793ea3af8dd8ce1c13547f100f751a43369fe6?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 39,
              "type" : "track",
              "uri" : "spotify:track:2xovTJpFp6nIish7Umbxnw"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/77yY2QmM6bYvjJ3y5L2R0v"
                },
                "href" : "https://api.spotify.com/v1/artists/77yY2QmM6bYvjJ3y5L2R0v",
                "id" : "77yY2QmM6bYvjJ3y5L2R0v",
                "name" : "Jeremy Soule",
                "type" : "artist",
                "uri" : "spotify:artist:77yY2QmM6bYvjJ3y5L2R0v"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 70608,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/6KarkdG6uQw710E0yNTXCS"
              },
              "href" : "https://api.spotify.com/v1/tracks/6KarkdG6uQw710E0yNTXCS",
              "id" : "6KarkdG6uQw710E0yNTXCS",
              "is_local" : false,
              "name" : "Caught off Guard",
              "preview_url" : "https://p.scdn.co/mp3-preview/e8f75bf12ad8c084e10cbd5f41c5dc56c88a7597?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 40,
              "type" : "track",
              "uri" : "spotify:track:6KarkdG6uQw710E0yNTXCS"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/77yY2QmM6bYvjJ3y5L2R0v"
                },
                "href" : "https://api.spotify.com/v1/artists/77yY2QmM6bYvjJ3y5L2R0v",
                "id" : "77yY2QmM6bYvjJ3y5L2R0v",
                "name" : "Jeremy Soule",
                "type" : "artist",
                "uri" : "spotify:artist:77yY2QmM6bYvjJ3y5L2R0v"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 441463,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/2jd20t5nkaFrEbTPJNXDzi"
              },
              "href" : "https://api.spotify.com/v1/tracks/2jd20t5nkaFrEbTPJNXDzi",
              "id" : "2jd20t5nkaFrEbTPJNXDzi",
              "is_local" : false,
              "name" : "Aurora",
              "preview_url" : "https://p.scdn.co/mp3-preview/3be6741bc76e28e11a9fe37d9f97d1e300c5aff6?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 41,
              "type" : "track",
              "uri" : "spotify:track:2jd20t5nkaFrEbTPJNXDzi"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/77yY2QmM6bYvjJ3y5L2R0v"
                },
                "href" : "https://api.spotify.com/v1/artists/77yY2QmM6bYvjJ3y5L2R0v",
                "id" : "77yY2QmM6bYvjJ3y5L2R0v",
                "name" : "Jeremy Soule",
                "type" : "artist",
                "uri" : "spotify:artist:77yY2QmM6bYvjJ3y5L2R0v"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 130385,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/425Vkd1jC6NkRg2UQTGDDt"
              },
              "href" : "https://api.spotify.com/v1/tracks/425Vkd1jC6NkRg2UQTGDDt",
              "id" : "425Vkd1jC6NkRg2UQTGDDt",
              "is_local" : false,
              "name" : "Blood and Steel",
              "preview_url" : "https://p.scdn.co/mp3-preview/9631a87a3006435534364a2ac4991a5263bd3f0b?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 42,
              "type" : "track",
              "uri" : "spotify:track:425Vkd1jC6NkRg2UQTGDDt"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/77yY2QmM6bYvjJ3y5L2R0v"
                },
                "href" : "https://api.spotify.com/v1/artists/77yY2QmM6bYvjJ3y5L2R0v",
                "id" : "77yY2QmM6bYvjJ3y5L2R0v",
                "name" : "Jeremy Soule",
                "type" : "artist",
                "uri" : "spotify:artist:77yY2QmM6bYvjJ3y5L2R0v"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 141786,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/0o9tFXB50ZHr80WuBETEV5"
              },
              "href" : "https://api.spotify.com/v1/tracks/0o9tFXB50ZHr80WuBETEV5",
              "id" : "0o9tFXB50ZHr80WuBETEV5",
              "is_local" : false,
              "name" : "Towers and Shadows",
              "preview_url" : "https://p.scdn.co/mp3-preview/5d15a6c9bc1b5109785ab75062bbfe45ab42a174?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 43,
              "type" : "track",
              "uri" : "spotify:track:0o9tFXB50ZHr80WuBETEV5"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/77yY2QmM6bYvjJ3y5L2R0v"
                },
                "href" : "https://api.spotify.com/v1/artists/77yY2QmM6bYvjJ3y5L2R0v",
                "id" : "77yY2QmM6bYvjJ3y5L2R0v",
                "name" : "Jeremy Soule",
                "type" : "artist",
                "uri" : "spotify:artist:77yY2QmM6bYvjJ3y5L2R0v"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 66270,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/4SPhOt358dgTB2xyKh8CQu"
              },
              "href" : "https://api.spotify.com/v1/tracks/4SPhOt358dgTB2xyKh8CQu",
              "id" : "4SPhOt358dgTB2xyKh8CQu",
              "is_local" : false,
              "name" : "Seven Thousand Steps",
              "preview_url" : "https://p.scdn.co/mp3-preview/a7cef20fb9f03c6d6bd5ac50053bf04a38db1ee2?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 44,
              "type" : "track",
              "uri" : "spotify:track:4SPhOt358dgTB2xyKh8CQu"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/77yY2QmM6bYvjJ3y5L2R0v"
                },
                "href" : "https://api.spotify.com/v1/artists/77yY2QmM6bYvjJ3y5L2R0v",
                "id" : "77yY2QmM6bYvjJ3y5L2R0v",
                "name" : "Jeremy Soule",
                "type" : "artist",
                "uri" : "spotify:artist:77yY2QmM6bYvjJ3y5L2R0v"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 130229,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/7gkkNoM0zgRc4i42w3tnts"
              },
              "href" : "https://api.spotify.com/v1/tracks/7gkkNoM0zgRc4i42w3tnts",
              "id" : "7gkkNoM0zgRc4i42w3tnts",
              "is_local" : false,
              "name" : "Solitude",
              "preview_url" : "https://p.scdn.co/mp3-preview/8393e73f9f4e610d2041ecc1023635e2ba046fc3?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 45,
              "type" : "track",
              "uri" : "spotify:track:7gkkNoM0zgRc4i42w3tnts"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/77yY2QmM6bYvjJ3y5L2R0v"
                },
                "href" : "https://api.spotify.com/v1/artists/77yY2QmM6bYvjJ3y5L2R0v",
                "id" : "77yY2QmM6bYvjJ3y5L2R0v",
                "name" : "Jeremy Soule",
                "type" : "artist",
                "uri" : "spotify:artist:77yY2QmM6bYvjJ3y5L2R0v"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 140724,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/7b1m8chT0FFlokVcUtRqif"
              },
              "href" : "https://api.spotify.com/v1/tracks/7b1m8chT0FFlokVcUtRqif",
              "id" : "7b1m8chT0FFlokVcUtRqif",
              "is_local" : false,
              "name" : "Watch the Skies",
              "preview_url" : "https://p.scdn.co/mp3-preview/20ea10e0c0bc7d9cfc1febaf8287d5f972a0ff4f?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 46,
              "type" : "track",
              "uri" : "spotify:track:7b1m8chT0FFlokVcUtRqif"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/77yY2QmM6bYvjJ3y5L2R0v"
                },
                "href" : "https://api.spotify.com/v1/artists/77yY2QmM6bYvjJ3y5L2R0v",
                "id" : "77yY2QmM6bYvjJ3y5L2R0v",
                "name" : "Jeremy Soule",
                "type" : "artist",
                "uri" : "spotify:artist:77yY2QmM6bYvjJ3y5L2R0v"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 173246,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/1SCZdUny74IGIsMOb5OYjL"
              },
              "href" : "https://api.spotify.com/v1/tracks/1SCZdUny74IGIsMOb5OYjL",
              "id" : "1SCZdUny74IGIsMOb5OYjL",
              "is_local" : false,
              "name" : "The Gathering Storm",
              "preview_url" : "https://p.scdn.co/mp3-preview/6ce03ecef440cc1a01b641aa43abdbb68bbbdc30?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 47,
              "type" : "track",
              "uri" : "spotify:track:1SCZdUny74IGIsMOb5OYjL"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/77yY2QmM6bYvjJ3y5L2R0v"
                },
                "href" : "https://api.spotify.com/v1/artists/77yY2QmM6bYvjJ3y5L2R0v",
                "id" : "77yY2QmM6bYvjJ3y5L2R0v",
                "name" : "Jeremy Soule",
                "type" : "artist",
                "uri" : "spotify:artist:77yY2QmM6bYvjJ3y5L2R0v"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 236864,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/5dmkAW2HpEJgFDSgkywm8N"
              },
              "href" : "https://api.spotify.com/v1/tracks/5dmkAW2HpEJgFDSgkywm8N",
              "id" : "5dmkAW2HpEJgFDSgkywm8N",
              "is_local" : false,
              "name" : "Sky Above, Voice Within",
              "preview_url" : "https://p.scdn.co/mp3-preview/c193b58dc2308fd4674ad4a991d565b6de1031c4?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 48,
              "type" : "track",
              "uri" : "spotify:track:5dmkAW2HpEJgFDSgkywm8N"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/77yY2QmM6bYvjJ3y5L2R0v"
                },
                "href" : "https://api.spotify.com/v1/artists/77yY2QmM6bYvjJ3y5L2R0v",
                "id" : "77yY2QmM6bYvjJ3y5L2R0v",
                "name" : "Jeremy Soule",
                "type" : "artist",
                "uri" : "spotify:artist:77yY2QmM6bYvjJ3y5L2R0v"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 155669,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/1q2Mit91oCqQtuO8TJa77S"
              },
              "href" : "https://api.spotify.com/v1/tracks/1q2Mit91oCqQtuO8TJa77S",
              "id" : "1q2Mit91oCqQtuO8TJa77S",
              "is_local" : false,
              "name" : "Death in the Darkness",
              "preview_url" : "https://p.scdn.co/mp3-preview/e0506018dede1bcb9a1bf833981e18d9ab012bd6?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 49,
              "type" : "track",
              "uri" : "spotify:track:1q2Mit91oCqQtuO8TJa77S"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/77yY2QmM6bYvjJ3y5L2R0v"
                },
                "href" : "https://api.spotify.com/v1/artists/77yY2QmM6bYvjJ3y5L2R0v",
                "id" : "77yY2QmM6bYvjJ3y5L2R0v",
                "name" : "Jeremy Soule",
                "type" : "artist",
                "uri" : "spotify:artist:77yY2QmM6bYvjJ3y5L2R0v"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 158247,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/4QRwVzgh1IfaWGAz2eA3YN"
              },
              "href" : "https://api.spotify.com/v1/tracks/4QRwVzgh1IfaWGAz2eA3YN",
              "id" : "4QRwVzgh1IfaWGAz2eA3YN",
              "is_local" : false,
              "name" : "Shattered Shields",
              "preview_url" : "https://p.scdn.co/mp3-preview/f5ff04fe69e3d0e4b9909cba99ca6347d47a27ef?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 50,
              "type" : "track",
              "uri" : "spotify:track:4QRwVzgh1IfaWGAz2eA3YN"
            } ],
            "limit" : 50,
            "next" : "https://api.spotify.com/v1/albums/25r7pEf31viAbsoVHC6bQ4/tracks?offset=50&limit=50",
            "offset" : 0,
            "previous" : null,
            "total" : 53
          },
          "type" : "album",
          "uri" : "spotify:album:25r7pEf31viAbsoVHC6bQ4"
        }
      }, {
        "added_at" : "2017-01-15T21:39:02Z",
        "album" : {
          "album_type" : "album",
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/3tybwof5hhq09nqwDiESev"
            },
            "href" : "https://api.spotify.com/v1/artists/3tybwof5hhq09nqwDiESev",
            "id" : "3tybwof5hhq09nqwDiESev",
            "name" : "Felipe Valente",
            "type" : "artist",
            "uri" : "spotify:artist:3tybwof5hhq09nqwDiESev"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
          "copyrights" : [ {
            "text" : "(P) 2016 LG7 Estúdio LTDA ME sob licença exclusiva de Sony Music Entertainment Brasil ltda.",
            "type" : "P"
          } ],
          "external_ids" : {
            "upc" : "886446288086"
          },
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/4774VMRwMcfv4AYBannljw"
          },
          "genres" : [ ],
          "href" : "https://api.spotify.com/v1/albums/4774VMRwMcfv4AYBannljw",
          "id" : "4774VMRwMcfv4AYBannljw",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b273514b25dba40af4baf83b454d",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e02514b25dba40af4baf83b454d",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d00004851514b25dba40af4baf83b454d",
            "width" : 64
          } ],
          "label" : "Sony Music Entertainment",
          "name" : "Reversos",
          "popularity" : 39,
          "release_date" : "2017-01-13",
          "release_date_precision" : "day",
          "total_tracks" : 11,
          "tracks" : {
            "href" : "https://api.spotify.com/v1/albums/4774VMRwMcfv4AYBannljw/tracks?offset=0&limit=50",
            "items" : [ {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/3tybwof5hhq09nqwDiESev"
                },
                "href" : "https://api.spotify.com/v1/artists/3tybwof5hhq09nqwDiESev",
                "id" : "3tybwof5hhq09nqwDiESev",
                "name" : "Felipe Valente",
                "type" : "artist",
                "uri" : "spotify:artist:3tybwof5hhq09nqwDiESev"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 249960,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/6J3HFsNpcUhLrrDPzLHdf5"
              },
              "href" : "https://api.spotify.com/v1/tracks/6J3HFsNpcUhLrrDPzLHdf5",
              "id" : "6J3HFsNpcUhLrrDPzLHdf5",
              "is_local" : false,
              "name" : "Despreocupado",
              "preview_url" : "https://p.scdn.co/mp3-preview/e418e619ea98c1eac7f122abd536d9ad97885579?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 1,
              "type" : "track",
              "uri" : "spotify:track:6J3HFsNpcUhLrrDPzLHdf5"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/3tybwof5hhq09nqwDiESev"
                },
                "href" : "https://api.spotify.com/v1/artists/3tybwof5hhq09nqwDiESev",
                "id" : "3tybwof5hhq09nqwDiESev",
                "name" : "Felipe Valente",
                "type" : "artist",
                "uri" : "spotify:artist:3tybwof5hhq09nqwDiESev"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 304813,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/1pjkNTKqJFdkgx0IMKmJwT"
              },
              "href" : "https://api.spotify.com/v1/tracks/1pjkNTKqJFdkgx0IMKmJwT",
              "id" : "1pjkNTKqJFdkgx0IMKmJwT",
              "is_local" : false,
              "name" : "Chão da Vida",
              "preview_url" : "https://p.scdn.co/mp3-preview/d9b9f410009a172b2b9c41d2010428b22ef17e04?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 2,
              "type" : "track",
              "uri" : "spotify:track:1pjkNTKqJFdkgx0IMKmJwT"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/3tybwof5hhq09nqwDiESev"
                },
                "href" : "https://api.spotify.com/v1/artists/3tybwof5hhq09nqwDiESev",
                "id" : "3tybwof5hhq09nqwDiESev",
                "name" : "Felipe Valente",
                "type" : "artist",
                "uri" : "spotify:artist:3tybwof5hhq09nqwDiESev"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 217466,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/3O5uLc2osTqv09SMnjsVuB"
              },
              "href" : "https://api.spotify.com/v1/tracks/3O5uLc2osTqv09SMnjsVuB",
              "id" : "3O5uLc2osTqv09SMnjsVuB",
              "is_local" : false,
              "name" : "Justiça e Poder",
              "preview_url" : "https://p.scdn.co/mp3-preview/545e0f4748d5d67b5549694c241f2cb2e277e50a?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 3,
              "type" : "track",
              "uri" : "spotify:track:3O5uLc2osTqv09SMnjsVuB"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/3tybwof5hhq09nqwDiESev"
                },
                "href" : "https://api.spotify.com/v1/artists/3tybwof5hhq09nqwDiESev",
                "id" : "3tybwof5hhq09nqwDiESev",
                "name" : "Felipe Valente",
                "type" : "artist",
                "uri" : "spotify:artist:3tybwof5hhq09nqwDiESev"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 275373,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/0LTyTXWBsxb6lB0G55MC3T"
              },
              "href" : "https://api.spotify.com/v1/tracks/0LTyTXWBsxb6lB0G55MC3T",
              "id" : "0LTyTXWBsxb6lB0G55MC3T",
              "is_local" : false,
              "name" : "Verei",
              "preview_url" : "https://p.scdn.co/mp3-preview/5efc5f70a691aa3a26873fae17bfb475e8fb8a97?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 4,
              "type" : "track",
              "uri" : "spotify:track:0LTyTXWBsxb6lB0G55MC3T"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/3tybwof5hhq09nqwDiESev"
                },
                "href" : "https://api.spotify.com/v1/artists/3tybwof5hhq09nqwDiESev",
                "id" : "3tybwof5hhq09nqwDiESev",
                "name" : "Felipe Valente",
                "type" : "artist",
                "uri" : "spotify:artist:3tybwof5hhq09nqwDiESev"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 265280,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/7wdz9y3OZqOBKbOvd6tlG8"
              },
              "href" : "https://api.spotify.com/v1/tracks/7wdz9y3OZqOBKbOvd6tlG8",
              "id" : "7wdz9y3OZqOBKbOvd6tlG8",
              "is_local" : false,
              "name" : "Canção de Quem Fica",
              "preview_url" : "https://p.scdn.co/mp3-preview/b1ec54fcd590953ac40cfff7706a0094143817f1?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 5,
              "type" : "track",
              "uri" : "spotify:track:7wdz9y3OZqOBKbOvd6tlG8"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/3tybwof5hhq09nqwDiESev"
                },
                "href" : "https://api.spotify.com/v1/artists/3tybwof5hhq09nqwDiESev",
                "id" : "3tybwof5hhq09nqwDiESev",
                "name" : "Felipe Valente",
                "type" : "artist",
                "uri" : "spotify:artist:3tybwof5hhq09nqwDiESev"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 296706,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/06HeY11oFhA7AQBnrZMjTe"
              },
              "href" : "https://api.spotify.com/v1/tracks/06HeY11oFhA7AQBnrZMjTe",
              "id" : "06HeY11oFhA7AQBnrZMjTe",
              "is_local" : false,
              "name" : "Aleluia",
              "preview_url" : "https://p.scdn.co/mp3-preview/f1636dc9b0a3854e0591bd54349107e75434099a?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 6,
              "type" : "track",
              "uri" : "spotify:track:06HeY11oFhA7AQBnrZMjTe"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/3tybwof5hhq09nqwDiESev"
                },
                "href" : "https://api.spotify.com/v1/artists/3tybwof5hhq09nqwDiESev",
                "id" : "3tybwof5hhq09nqwDiESev",
                "name" : "Felipe Valente",
                "type" : "artist",
                "uri" : "spotify:artist:3tybwof5hhq09nqwDiESev"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 256160,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/7lQDf3JHiy7zgOApyMbObm"
              },
              "href" : "https://api.spotify.com/v1/tracks/7lQDf3JHiy7zgOApyMbObm",
              "id" : "7lQDf3JHiy7zgOApyMbObm",
              "is_local" : false,
              "name" : "Não Ando Só",
              "preview_url" : "https://p.scdn.co/mp3-preview/99a614ca74ac383e467ceb2ea87d1ef406a25c33?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 7,
              "type" : "track",
              "uri" : "spotify:track:7lQDf3JHiy7zgOApyMbObm"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/3tybwof5hhq09nqwDiESev"
                },
                "href" : "https://api.spotify.com/v1/artists/3tybwof5hhq09nqwDiESev",
                "id" : "3tybwof5hhq09nqwDiESev",
                "name" : "Felipe Valente",
                "type" : "artist",
                "uri" : "spotify:artist:3tybwof5hhq09nqwDiESev"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 276880,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/41pvPNlsP9Ff2iyYLZvueB"
              },
              "href" : "https://api.spotify.com/v1/tracks/41pvPNlsP9Ff2iyYLZvueB",
              "id" : "41pvPNlsP9Ff2iyYLZvueB",
              "is_local" : false,
              "name" : "Paralelo",
              "preview_url" : "https://p.scdn.co/mp3-preview/5b472bb9672f5d618d980e3283df14a9307c5e38?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 8,
              "type" : "track",
              "uri" : "spotify:track:41pvPNlsP9Ff2iyYLZvueB"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/3tybwof5hhq09nqwDiESev"
                },
                "href" : "https://api.spotify.com/v1/artists/3tybwof5hhq09nqwDiESev",
                "id" : "3tybwof5hhq09nqwDiESev",
                "name" : "Felipe Valente",
                "type" : "artist",
                "uri" : "spotify:artist:3tybwof5hhq09nqwDiESev"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 294520,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/4jrhU8APmzapPydlt49KE3"
              },
              "href" : "https://api.spotify.com/v1/tracks/4jrhU8APmzapPydlt49KE3",
              "id" : "4jrhU8APmzapPydlt49KE3",
              "is_local" : false,
              "name" : "Outra Ordem",
              "preview_url" : "https://p.scdn.co/mp3-preview/dfb369b03fca68b9cb71e15fb55c0e02394d0432?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 9,
              "type" : "track",
              "uri" : "spotify:track:4jrhU8APmzapPydlt49KE3"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/3tybwof5hhq09nqwDiESev"
                },
                "href" : "https://api.spotify.com/v1/artists/3tybwof5hhq09nqwDiESev",
                "id" : "3tybwof5hhq09nqwDiESev",
                "name" : "Felipe Valente",
                "type" : "artist",
                "uri" : "spotify:artist:3tybwof5hhq09nqwDiESev"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 232800,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/5lUa4CCD9krxzY1tYWmSYF"
              },
              "href" : "https://api.spotify.com/v1/tracks/5lUa4CCD9krxzY1tYWmSYF",
              "id" : "5lUa4CCD9krxzY1tYWmSYF",
              "is_local" : false,
              "name" : "Monte Nebo",
              "preview_url" : "https://p.scdn.co/mp3-preview/55ce7768c944def64221a31adae496ce529f5dc8?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 10,
              "type" : "track",
              "uri" : "spotify:track:5lUa4CCD9krxzY1tYWmSYF"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/3tybwof5hhq09nqwDiESev"
                },
                "href" : "https://api.spotify.com/v1/artists/3tybwof5hhq09nqwDiESev",
                "id" : "3tybwof5hhq09nqwDiESev",
                "name" : "Felipe Valente",
                "type" : "artist",
                "uri" : "spotify:artist:3tybwof5hhq09nqwDiESev"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 357066,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/133AU2kEkIwjxglwYwgLhT"
              },
              "href" : "https://api.spotify.com/v1/tracks/133AU2kEkIwjxglwYwgLhT",
              "id" : "133AU2kEkIwjxglwYwgLhT",
              "is_local" : false,
              "name" : "Reversos",
              "preview_url" : "https://p.scdn.co/mp3-preview/b97e8fcb2ec2e4a773631b24937ec75babb8fb8d?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 11,
              "type" : "track",
              "uri" : "spotify:track:133AU2kEkIwjxglwYwgLhT"
            } ],
            "limit" : 50,
            "next" : null,
            "offset" : 0,
            "previous" : null,
            "total" : 11
          },
          "type" : "album",
          "uri" : "spotify:album:4774VMRwMcfv4AYBannljw"
        }
      }, {
        "added_at" : "2016-09-21T15:22:43Z",
        "album" : {
          "album_type" : "album",
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/41zxOMwuASgUJp0c697KDm"
            },
            "href" : "https://api.spotify.com/v1/artists/41zxOMwuASgUJp0c697KDm",
            "id" : "41zxOMwuASgUJp0c697KDm",
            "name" : "Almah",
            "type" : "artist",
            "uri" : "spotify:artist:41zxOMwuASgUJp0c697KDm"
          } ],
          "available_markets" : [ ],
          "copyrights" : [ {
            "text" : "2016 Pride & Joy Music",
            "type" : "C"
          }, {
            "text" : "2016 Pride & Joy Music",
            "type" : "P"
          } ],
          "external_ids" : {
            "upc" : "4260432910322"
          },
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/7zG4b76sbJNZhLPANbv0gP"
          },
          "genres" : [ ],
          "href" : "https://api.spotify.com/v1/albums/7zG4b76sbJNZhLPANbv0gP",
          "id" : "7zG4b76sbJNZhLPANbv0gP",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b27367488f48fe627418e643c14a",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e0267488f48fe627418e643c14a",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d0000485167488f48fe627418e643c14a",
            "width" : 64
          } ],
          "label" : "Pride & Joy Music",
          "name" : "E.V.O",
          "popularity" : 0,
          "release_date" : "2016-09-23",
          "release_date_precision" : "day",
          "total_tracks" : 11,
          "tracks" : {
            "href" : "https://api.spotify.com/v1/albums/7zG4b76sbJNZhLPANbv0gP/tracks?offset=0&limit=50",
            "items" : [ {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/41zxOMwuASgUJp0c697KDm"
                },
                "href" : "https://api.spotify.com/v1/artists/41zxOMwuASgUJp0c697KDm",
                "id" : "41zxOMwuASgUJp0c697KDm",
                "name" : "Almah",
                "type" : "artist",
                "uri" : "spotify:artist:41zxOMwuASgUJp0c697KDm"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 433386,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/0NXFagVGSlYhuKghwT39nY"
              },
              "href" : "https://api.spotify.com/v1/tracks/0NXFagVGSlYhuKghwT39nY",
              "id" : "0NXFagVGSlYhuKghwT39nY",
              "is_local" : false,
              "name" : "Age of Aquarius",
              "preview_url" : null,
              "track_number" : 1,
              "type" : "track",
              "uri" : "spotify:track:0NXFagVGSlYhuKghwT39nY"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/41zxOMwuASgUJp0c697KDm"
                },
                "href" : "https://api.spotify.com/v1/artists/41zxOMwuASgUJp0c697KDm",
                "id" : "41zxOMwuASgUJp0c697KDm",
                "name" : "Almah",
                "type" : "artist",
                "uri" : "spotify:artist:41zxOMwuASgUJp0c697KDm"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 295813,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/75H6np8MMEzvH9EXJWAaSY"
              },
              "href" : "https://api.spotify.com/v1/tracks/75H6np8MMEzvH9EXJWAaSY",
              "id" : "75H6np8MMEzvH9EXJWAaSY",
              "is_local" : false,
              "name" : "Speranza",
              "preview_url" : null,
              "track_number" : 2,
              "type" : "track",
              "uri" : "spotify:track:75H6np8MMEzvH9EXJWAaSY"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/41zxOMwuASgUJp0c697KDm"
                },
                "href" : "https://api.spotify.com/v1/artists/41zxOMwuASgUJp0c697KDm",
                "id" : "41zxOMwuASgUJp0c697KDm",
                "name" : "Almah",
                "type" : "artist",
                "uri" : "spotify:artist:41zxOMwuASgUJp0c697KDm"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 281933,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/75nbV17mDodpVI14EY8SYS"
              },
              "href" : "https://api.spotify.com/v1/tracks/75nbV17mDodpVI14EY8SYS",
              "id" : "75nbV17mDodpVI14EY8SYS",
              "is_local" : false,
              "name" : "The Brotherhood",
              "preview_url" : null,
              "track_number" : 3,
              "type" : "track",
              "uri" : "spotify:track:75nbV17mDodpVI14EY8SYS"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/41zxOMwuASgUJp0c697KDm"
                },
                "href" : "https://api.spotify.com/v1/artists/41zxOMwuASgUJp0c697KDm",
                "id" : "41zxOMwuASgUJp0c697KDm",
                "name" : "Almah",
                "type" : "artist",
                "uri" : "spotify:artist:41zxOMwuASgUJp0c697KDm"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 275533,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/3aAR9OFxbkEJ5aLUOGzxCf"
              },
              "href" : "https://api.spotify.com/v1/tracks/3aAR9OFxbkEJ5aLUOGzxCf",
              "id" : "3aAR9OFxbkEJ5aLUOGzxCf",
              "is_local" : false,
              "name" : "Innocence",
              "preview_url" : null,
              "track_number" : 4,
              "type" : "track",
              "uri" : "spotify:track:3aAR9OFxbkEJ5aLUOGzxCf"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/41zxOMwuASgUJp0c697KDm"
                },
                "href" : "https://api.spotify.com/v1/artists/41zxOMwuASgUJp0c697KDm",
                "id" : "41zxOMwuASgUJp0c697KDm",
                "name" : "Almah",
                "type" : "artist",
                "uri" : "spotify:artist:41zxOMwuASgUJp0c697KDm"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 309933,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/5asTEoL7K7t8ZOcFhgVQPL"
              },
              "href" : "https://api.spotify.com/v1/tracks/5asTEoL7K7t8ZOcFhgVQPL",
              "id" : "5asTEoL7K7t8ZOcFhgVQPL",
              "is_local" : false,
              "name" : "Higher",
              "preview_url" : null,
              "track_number" : 5,
              "type" : "track",
              "uri" : "spotify:track:5asTEoL7K7t8ZOcFhgVQPL"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/41zxOMwuASgUJp0c697KDm"
                },
                "href" : "https://api.spotify.com/v1/artists/41zxOMwuASgUJp0c697KDm",
                "id" : "41zxOMwuASgUJp0c697KDm",
                "name" : "Almah",
                "type" : "artist",
                "uri" : "spotify:artist:41zxOMwuASgUJp0c697KDm"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 245040,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/1MEH8F3Ct3UuyrVGXVa23H"
              },
              "href" : "https://api.spotify.com/v1/tracks/1MEH8F3Ct3UuyrVGXVa23H",
              "id" : "1MEH8F3Ct3UuyrVGXVa23H",
              "is_local" : false,
              "name" : "Infatuated",
              "preview_url" : null,
              "track_number" : 6,
              "type" : "track",
              "uri" : "spotify:track:1MEH8F3Ct3UuyrVGXVa23H"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/41zxOMwuASgUJp0c697KDm"
                },
                "href" : "https://api.spotify.com/v1/artists/41zxOMwuASgUJp0c697KDm",
                "id" : "41zxOMwuASgUJp0c697KDm",
                "name" : "Almah",
                "type" : "artist",
                "uri" : "spotify:artist:41zxOMwuASgUJp0c697KDm"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 264480,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/3vjILcNZ9lggXtS1u6GNoA"
              },
              "href" : "https://api.spotify.com/v1/tracks/3vjILcNZ9lggXtS1u6GNoA",
              "id" : "3vjILcNZ9lggXtS1u6GNoA",
              "is_local" : false,
              "name" : "Pleased to Meet You",
              "preview_url" : null,
              "track_number" : 7,
              "type" : "track",
              "uri" : "spotify:track:3vjILcNZ9lggXtS1u6GNoA"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/41zxOMwuASgUJp0c697KDm"
                },
                "href" : "https://api.spotify.com/v1/artists/41zxOMwuASgUJp0c697KDm",
                "id" : "41zxOMwuASgUJp0c697KDm",
                "name" : "Almah",
                "type" : "artist",
                "uri" : "spotify:artist:41zxOMwuASgUJp0c697KDm"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 253573,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/3xpx2Fk5ibN2WYlrPdopY8"
              },
              "href" : "https://api.spotify.com/v1/tracks/3xpx2Fk5ibN2WYlrPdopY8",
              "id" : "3xpx2Fk5ibN2WYlrPdopY8",
              "is_local" : false,
              "name" : "Final Warning",
              "preview_url" : null,
              "track_number" : 8,
              "type" : "track",
              "uri" : "spotify:track:3xpx2Fk5ibN2WYlrPdopY8"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/41zxOMwuASgUJp0c697KDm"
                },
                "href" : "https://api.spotify.com/v1/artists/41zxOMwuASgUJp0c697KDm",
                "id" : "41zxOMwuASgUJp0c697KDm",
                "name" : "Almah",
                "type" : "artist",
                "uri" : "spotify:artist:41zxOMwuASgUJp0c697KDm"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 226453,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/5majouEOLAJBqK6q7lPwmS"
              },
              "href" : "https://api.spotify.com/v1/tracks/5majouEOLAJBqK6q7lPwmS",
              "id" : "5majouEOLAJBqK6q7lPwmS",
              "is_local" : false,
              "name" : "Indigo",
              "preview_url" : null,
              "track_number" : 9,
              "type" : "track",
              "uri" : "spotify:track:5majouEOLAJBqK6q7lPwmS"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/41zxOMwuASgUJp0c697KDm"
                },
                "href" : "https://api.spotify.com/v1/artists/41zxOMwuASgUJp0c697KDm",
                "id" : "41zxOMwuASgUJp0c697KDm",
                "name" : "Almah",
                "type" : "artist",
                "uri" : "spotify:artist:41zxOMwuASgUJp0c697KDm"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 258986,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/2FEzc82ipUZYsjgChLpyQ8"
              },
              "href" : "https://api.spotify.com/v1/tracks/2FEzc82ipUZYsjgChLpyQ8",
              "id" : "2FEzc82ipUZYsjgChLpyQ8",
              "is_local" : false,
              "name" : "Corporate War",
              "preview_url" : null,
              "track_number" : 10,
              "type" : "track",
              "uri" : "spotify:track:2FEzc82ipUZYsjgChLpyQ8"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/41zxOMwuASgUJp0c697KDm"
                },
                "href" : "https://api.spotify.com/v1/artists/41zxOMwuASgUJp0c697KDm",
                "id" : "41zxOMwuASgUJp0c697KDm",
                "name" : "Almah",
                "type" : "artist",
                "uri" : "spotify:artist:41zxOMwuASgUJp0c697KDm"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 240733,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/6OE3akrGSgvVsV6pPrx8lk"
              },
              "href" : "https://api.spotify.com/v1/tracks/6OE3akrGSgvVsV6pPrx8lk",
              "id" : "6OE3akrGSgvVsV6pPrx8lk",
              "is_local" : false,
              "name" : "Capital Punishment",
              "preview_url" : null,
              "track_number" : 11,
              "type" : "track",
              "uri" : "spotify:track:6OE3akrGSgvVsV6pPrx8lk"
            } ],
            "limit" : 50,
            "next" : null,
            "offset" : 0,
            "previous" : null,
            "total" : 11
          },
          "type" : "album",
          "uri" : "spotify:album:7zG4b76sbJNZhLPANbv0gP"
        }
      }, {
        "added_at" : "2016-08-18T12:50:28Z",
        "album" : {
          "album_type" : "album",
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
            },
            "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
            "id" : "7IAXZaLTb6nkJr8RmVPn5y",
            "name" : "Angra",
            "type" : "artist",
            "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
          } ],
          "available_markets" : [ ],
          "copyrights" : [ {
            "text" : "2016 Angra",
            "type" : "C"
          }, {
            "text" : "2016 Angra",
            "type" : "P"
          } ],
          "external_ids" : {
            "upc" : "7891591005276"
          },
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/7yMXnGqA8VgFVD4L3Y6Xri"
          },
          "genres" : [ ],
          "href" : "https://api.spotify.com/v1/albums/7yMXnGqA8VgFVD4L3Y6Xri",
          "id" : "7yMXnGqA8VgFVD4L3Y6Xri",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b273134d6c1b12dba134916e87ce",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e02134d6c1b12dba134916e87ce",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d00004851134d6c1b12dba134916e87ce",
            "width" : 64
          } ],
          "label" : "Angra",
          "name" : "Angels Cry",
          "popularity" : 0,
          "release_date" : "1993",
          "release_date_precision" : "year",
          "total_tracks" : 10,
          "tracks" : {
            "href" : "https://api.spotify.com/v1/albums/7yMXnGqA8VgFVD4L3Y6Xri/tracks?offset=0&limit=50",
            "items" : [ {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 73373,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/7FiBrV2glfhPu5gGkhnDUn"
              },
              "href" : "https://api.spotify.com/v1/tracks/7FiBrV2glfhPu5gGkhnDUn",
              "id" : "7FiBrV2glfhPu5gGkhnDUn",
              "is_local" : false,
              "name" : "Unfinished Allegro",
              "preview_url" : null,
              "track_number" : 1,
              "type" : "track",
              "uri" : "spotify:track:7FiBrV2glfhPu5gGkhnDUn"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 305093,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/2SYnUqZocEO2gvVxrwyN5V"
              },
              "href" : "https://api.spotify.com/v1/tracks/2SYnUqZocEO2gvVxrwyN5V",
              "id" : "2SYnUqZocEO2gvVxrwyN5V",
              "is_local" : false,
              "name" : "Carry On",
              "preview_url" : null,
              "track_number" : 2,
              "type" : "track",
              "uri" : "spotify:track:2SYnUqZocEO2gvVxrwyN5V"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 357773,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/1qbWTONOMNl5QKCRaHZdaH"
              },
              "href" : "https://api.spotify.com/v1/tracks/1qbWTONOMNl5QKCRaHZdaH",
              "id" : "1qbWTONOMNl5QKCRaHZdaH",
              "is_local" : false,
              "name" : "Time",
              "preview_url" : null,
              "track_number" : 3,
              "type" : "track",
              "uri" : "spotify:track:1qbWTONOMNl5QKCRaHZdaH"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 408826,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/3aMfoKhyq3M2yXbD33gv5q"
              },
              "href" : "https://api.spotify.com/v1/tracks/3aMfoKhyq3M2yXbD33gv5q",
              "id" : "3aMfoKhyq3M2yXbD33gv5q",
              "is_local" : false,
              "name" : "Angels Cry",
              "preview_url" : null,
              "track_number" : 4,
              "type" : "track",
              "uri" : "spotify:track:3aMfoKhyq3M2yXbD33gv5q"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 297466,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/0foP1WLNgoWig5kP06AHfR"
              },
              "href" : "https://api.spotify.com/v1/tracks/0foP1WLNgoWig5kP06AHfR",
              "id" : "0foP1WLNgoWig5kP06AHfR",
              "is_local" : false,
              "name" : "Stand Away",
              "preview_url" : null,
              "track_number" : 5,
              "type" : "track",
              "uri" : "spotify:track:0foP1WLNgoWig5kP06AHfR"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 470000,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/4px6gKqzWsmUMZMnx7ihoH"
              },
              "href" : "https://api.spotify.com/v1/tracks/4px6gKqzWsmUMZMnx7ihoH",
              "id" : "4px6gKqzWsmUMZMnx7ihoH",
              "is_local" : false,
              "name" : "Never Understand",
              "preview_url" : null,
              "track_number" : 6,
              "type" : "track",
              "uri" : "spotify:track:4px6gKqzWsmUMZMnx7ihoH"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 279733,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/7aqN90sMpdna8G3VeA0zSA"
              },
              "href" : "https://api.spotify.com/v1/tracks/7aqN90sMpdna8G3VeA0zSA",
              "id" : "7aqN90sMpdna8G3VeA0zSA",
              "is_local" : false,
              "name" : "Wuthering Heights",
              "preview_url" : null,
              "track_number" : 7,
              "type" : "track",
              "uri" : "spotify:track:7aqN90sMpdna8G3VeA0zSA"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 303773,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/6so43e9BVKancwDQHIvE2S"
              },
              "href" : "https://api.spotify.com/v1/tracks/6so43e9BVKancwDQHIvE2S",
              "id" : "6so43e9BVKancwDQHIvE2S",
              "is_local" : false,
              "name" : "Streets of Tomorrow",
              "preview_url" : null,
              "track_number" : 8,
              "type" : "track",
              "uri" : "spotify:track:6so43e9BVKancwDQHIvE2S"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 402200,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/3vyDuJHoMBKk76tfqiKn26"
              },
              "href" : "https://api.spotify.com/v1/tracks/3vyDuJHoMBKk76tfqiKn26",
              "id" : "3vyDuJHoMBKk76tfqiKn26",
              "is_local" : false,
              "name" : "Evil Warning",
              "preview_url" : null,
              "track_number" : 9,
              "type" : "track",
              "uri" : "spotify:track:3vyDuJHoMBKk76tfqiKn26"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 454666,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/2AtPzZmZd8JpmWW9KMewh9"
              },
              "href" : "https://api.spotify.com/v1/tracks/2AtPzZmZd8JpmWW9KMewh9",
              "id" : "2AtPzZmZd8JpmWW9KMewh9",
              "is_local" : false,
              "name" : "Lasting Child",
              "preview_url" : null,
              "track_number" : 10,
              "type" : "track",
              "uri" : "spotify:track:2AtPzZmZd8JpmWW9KMewh9"
            } ],
            "limit" : 50,
            "next" : null,
            "offset" : 0,
            "previous" : null,
            "total" : 10
          },
          "type" : "album",
          "uri" : "spotify:album:7yMXnGqA8VgFVD4L3Y6Xri"
        }
      }, {
        "added_at" : "2016-08-18T12:50:27Z",
        "album" : {
          "album_type" : "single",
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
            },
            "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
            "id" : "7IAXZaLTb6nkJr8RmVPn5y",
            "name" : "Angra",
            "type" : "artist",
            "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
          } ],
          "available_markets" : [ ],
          "copyrights" : [ {
            "text" : "2016 Angra",
            "type" : "C"
          }, {
            "text" : "2016 Angra",
            "type" : "P"
          } ],
          "external_ids" : {
            "upc" : "7891591005269"
          },
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/5bsOBsdef4lJhGlmrkRMkP"
          },
          "genres" : [ ],
          "href" : "https://api.spotify.com/v1/albums/5bsOBsdef4lJhGlmrkRMkP",
          "id" : "5bsOBsdef4lJhGlmrkRMkP",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b273e97a4a181cd66b683a7f3374",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e02e97a4a181cd66b683a7f3374",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d00004851e97a4a181cd66b683a7f3374",
            "width" : 64
          } ],
          "label" : "Angra",
          "name" : "Freedom Call",
          "popularity" : 0,
          "release_date" : "1996",
          "release_date_precision" : "year",
          "total_tracks" : 8,
          "tracks" : {
            "href" : "https://api.spotify.com/v1/albums/5bsOBsdef4lJhGlmrkRMkP/tracks?offset=0&limit=50",
            "items" : [ {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 306200,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/0h5Al094JUvKUlMVIxhFib"
              },
              "href" : "https://api.spotify.com/v1/tracks/0h5Al094JUvKUlMVIxhFib",
              "id" : "0h5Al094JUvKUlMVIxhFib",
              "is_local" : false,
              "name" : "Freedom Call",
              "preview_url" : null,
              "track_number" : 1,
              "type" : "track",
              "uri" : "spotify:track:0h5Al094JUvKUlMVIxhFib"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 277760,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/7BxKCNjcpPrnSF3Bk1KA9y"
              },
              "href" : "https://api.spotify.com/v1/tracks/7BxKCNjcpPrnSF3Bk1KA9y",
              "id" : "7BxKCNjcpPrnSF3Bk1KA9y",
              "is_local" : false,
              "name" : "Queen of the Night (Remixed Version)",
              "preview_url" : null,
              "track_number" : 2,
              "type" : "track",
              "uri" : "spotify:track:7BxKCNjcpPrnSF3Bk1KA9y"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 308200,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/00Y8536c8imLNLL2xjQQRT"
              },
              "href" : "https://api.spotify.com/v1/tracks/00Y8536c8imLNLL2xjQQRT",
              "id" : "00Y8536c8imLNLL2xjQQRT",
              "is_local" : false,
              "name" : "Reaching Horizons",
              "preview_url" : null,
              "track_number" : 3,
              "type" : "track",
              "uri" : "spotify:track:00Y8536c8imLNLL2xjQQRT"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 279586,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/3IkJ9ZEjs11ImwUuu8O71l"
              },
              "href" : "https://api.spotify.com/v1/tracks/3IkJ9ZEjs11ImwUuu8O71l",
              "id" : "3IkJ9ZEjs11ImwUuu8O71l",
              "is_local" : false,
              "name" : "Stand Away (Orchestral Version)",
              "preview_url" : null,
              "track_number" : 4,
              "type" : "track",
              "uri" : "spotify:track:3IkJ9ZEjs11ImwUuu8O71l"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 364933,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/4d9p8ZkHUxD00Z68v6BdcQ"
              },
              "href" : "https://api.spotify.com/v1/tracks/4d9p8ZkHUxD00Z68v6BdcQ",
              "id" : "4d9p8ZkHUxD00Z68v6BdcQ",
              "is_local" : false,
              "name" : "Painkiller (Remixed Version)",
              "preview_url" : null,
              "track_number" : 5,
              "type" : "track",
              "uri" : "spotify:track:4d9p8ZkHUxD00Z68v6BdcQ"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 236093,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/3mYX6gKah5GhhC1gVM5nAO"
              },
              "href" : "https://api.spotify.com/v1/tracks/3mYX6gKah5GhhC1gVM5nAO",
              "id" : "3mYX6gKah5GhhC1gVM5nAO",
              "is_local" : false,
              "name" : "Deep Blue",
              "preview_url" : null,
              "track_number" : 6,
              "type" : "track",
              "uri" : "spotify:track:3mYX6gKah5GhhC1gVM5nAO"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 594146,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/426wmzajopFQs3WP98l88m"
              },
              "href" : "https://api.spotify.com/v1/tracks/426wmzajopFQs3WP98l88m",
              "id" : "426wmzajopFQs3WP98l88m",
              "is_local" : false,
              "name" : "Angels Cry (Acoustic) [Live]",
              "preview_url" : null,
              "track_number" : 7,
              "type" : "track",
              "uri" : "spotify:track:426wmzajopFQs3WP98l88m"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 382360,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/6cjCkcgGAWD2PDxn4S9wRB"
              },
              "href" : "https://api.spotify.com/v1/tracks/6cjCkcgGAWD2PDxn4S9wRB",
              "id" : "6cjCkcgGAWD2PDxn4S9wRB",
              "is_local" : false,
              "name" : "Never Understand (Acoustic) [Live]",
              "preview_url" : null,
              "track_number" : 8,
              "type" : "track",
              "uri" : "spotify:track:6cjCkcgGAWD2PDxn4S9wRB"
            } ],
            "limit" : 50,
            "next" : null,
            "offset" : 0,
            "previous" : null,
            "total" : 8
          },
          "type" : "album",
          "uri" : "spotify:album:5bsOBsdef4lJhGlmrkRMkP"
        }
      }, {
        "added_at" : "2016-08-18T12:50:25Z",
        "album" : {
          "album_type" : "album",
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
            },
            "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
            "id" : "7IAXZaLTb6nkJr8RmVPn5y",
            "name" : "Angra",
            "type" : "artist",
            "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
          } ],
          "available_markets" : [ ],
          "copyrights" : [ {
            "text" : "2016 Angra",
            "type" : "C"
          }, {
            "text" : "2016 Angra",
            "type" : "P"
          } ],
          "external_ids" : {
            "upc" : "7891591005283"
          },
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/4TsIKnK593DueuhPLbH2BL"
          },
          "genres" : [ ],
          "href" : "https://api.spotify.com/v1/albums/4TsIKnK593DueuhPLbH2BL",
          "id" : "4TsIKnK593DueuhPLbH2BL",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b2739a661770a00ea69f29ad780f",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e029a661770a00ea69f29ad780f",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d000048519a661770a00ea69f29ad780f",
            "width" : 64
          } ],
          "label" : "Angra",
          "name" : "Holy Land",
          "popularity" : 0,
          "release_date" : "1996",
          "release_date_precision" : "year",
          "total_tracks" : 10,
          "tracks" : {
            "href" : "https://api.spotify.com/v1/albums/4TsIKnK593DueuhPLbH2BL/tracks?offset=0&limit=50",
            "items" : [ {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 115666,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/2VpvRBsr6tCZODnSQQ9kbJ"
              },
              "href" : "https://api.spotify.com/v1/tracks/2VpvRBsr6tCZODnSQQ9kbJ",
              "id" : "2VpvRBsr6tCZODnSQQ9kbJ",
              "is_local" : false,
              "name" : "Crossing",
              "preview_url" : null,
              "track_number" : 1,
              "type" : "track",
              "uri" : "spotify:track:2VpvRBsr6tCZODnSQQ9kbJ"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 382066,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/3bcWERlt9BaCKAlKXrZ0qw"
              },
              "href" : "https://api.spotify.com/v1/tracks/3bcWERlt9BaCKAlKXrZ0qw",
              "id" : "3bcWERlt9BaCKAlKXrZ0qw",
              "is_local" : false,
              "name" : "Nothing to Say",
              "preview_url" : null,
              "track_number" : 2,
              "type" : "track",
              "uri" : "spotify:track:3bcWERlt9BaCKAlKXrZ0qw"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 333466,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/7xZqnqCfpov8NZnwhypd85"
              },
              "href" : "https://api.spotify.com/v1/tracks/7xZqnqCfpov8NZnwhypd85",
              "id" : "7xZqnqCfpov8NZnwhypd85",
              "is_local" : false,
              "name" : "Silence and Distance",
              "preview_url" : null,
              "track_number" : 3,
              "type" : "track",
              "uri" : "spotify:track:7xZqnqCfpov8NZnwhypd85"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 635466,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/1tTKUpESLyHCtQOzD5sxGZ"
              },
              "href" : "https://api.spotify.com/v1/tracks/1tTKUpESLyHCtQOzD5sxGZ",
              "id" : "1tTKUpESLyHCtQOzD5sxGZ",
              "is_local" : false,
              "name" : "Carolina IV",
              "preview_url" : null,
              "track_number" : 4,
              "type" : "track",
              "uri" : "spotify:track:1tTKUpESLyHCtQOzD5sxGZ"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 386133,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/1PwmIP6iqITtBgIhVQDpEg"
              },
              "href" : "https://api.spotify.com/v1/tracks/1PwmIP6iqITtBgIhVQDpEg",
              "id" : "1PwmIP6iqITtBgIhVQDpEg",
              "is_local" : false,
              "name" : "Holy Land",
              "preview_url" : null,
              "track_number" : 5,
              "type" : "track",
              "uri" : "spotify:track:1PwmIP6iqITtBgIhVQDpEg"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 323733,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/1xA9pFRTTW22EfuN7sn68P"
              },
              "href" : "https://api.spotify.com/v1/tracks/1xA9pFRTTW22EfuN7sn68P",
              "id" : "1xA9pFRTTW22EfuN7sn68P",
              "is_local" : false,
              "name" : "The Shaman",
              "preview_url" : null,
              "track_number" : 6,
              "type" : "track",
              "uri" : "spotify:track:1xA9pFRTTW22EfuN7sn68P"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 353333,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/5K5jYm4Rfyiz3pZZknFMVh"
              },
              "href" : "https://api.spotify.com/v1/tracks/5K5jYm4Rfyiz3pZZknFMVh",
              "id" : "5K5jYm4Rfyiz3pZZknFMVh",
              "is_local" : false,
              "name" : "Make Believe",
              "preview_url" : null,
              "track_number" : 7,
              "type" : "track",
              "uri" : "spotify:track:5K5jYm4Rfyiz3pZZknFMVh"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 364400,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/2IsdUyD1kzuWCjrpIX7tOh"
              },
              "href" : "https://api.spotify.com/v1/tracks/2IsdUyD1kzuWCjrpIX7tOh",
              "id" : "2IsdUyD1kzuWCjrpIX7tOh",
              "is_local" : false,
              "name" : "Z.I.T.O.",
              "preview_url" : null,
              "track_number" : 8,
              "type" : "track",
              "uri" : "spotify:track:2IsdUyD1kzuWCjrpIX7tOh"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 348466,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/1WFtWIqSzuTEUi2AhEnd7u"
              },
              "href" : "https://api.spotify.com/v1/tracks/1WFtWIqSzuTEUi2AhEnd7u",
              "id" : "1WFtWIqSzuTEUi2AhEnd7u",
              "is_local" : false,
              "name" : "Deep Blue",
              "preview_url" : null,
              "track_number" : 9,
              "type" : "track",
              "uri" : "spotify:track:1WFtWIqSzuTEUi2AhEnd7u"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 162266,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/162zuC37ZScibvH6iVg6v6"
              },
              "href" : "https://api.spotify.com/v1/tracks/162zuC37ZScibvH6iVg6v6",
              "id" : "162zuC37ZScibvH6iVg6v6",
              "is_local" : false,
              "name" : "Lullaby for Lucifer",
              "preview_url" : null,
              "track_number" : 10,
              "type" : "track",
              "uri" : "spotify:track:162zuC37ZScibvH6iVg6v6"
            } ],
            "limit" : 50,
            "next" : null,
            "offset" : 0,
            "previous" : null,
            "total" : 10
          },
          "type" : "album",
          "uri" : "spotify:album:4TsIKnK593DueuhPLbH2BL"
        }
      }, {
        "added_at" : "2016-08-18T12:50:23Z",
        "album" : {
          "album_type" : "album",
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
            },
            "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
            "id" : "7IAXZaLTb6nkJr8RmVPn5y",
            "name" : "Angra",
            "type" : "artist",
            "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
          } ],
          "available_markets" : [ ],
          "copyrights" : [ {
            "text" : "2016 Angra",
            "type" : "C"
          }, {
            "text" : "2016 Angra",
            "type" : "P"
          } ],
          "external_ids" : {
            "upc" : "7891591003135"
          },
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/3tf50POByBTayLqOeN7J8u"
          },
          "genres" : [ ],
          "href" : "https://api.spotify.com/v1/albums/3tf50POByBTayLqOeN7J8u",
          "id" : "3tf50POByBTayLqOeN7J8u",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b273b161efe94b858d0f0b1f9e56",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e02b161efe94b858d0f0b1f9e56",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d00004851b161efe94b858d0f0b1f9e56",
            "width" : 64
          } ],
          "label" : "Angra",
          "name" : "Holy Live",
          "popularity" : 0,
          "release_date" : "1997",
          "release_date_precision" : "year",
          "total_tracks" : 6,
          "tracks" : {
            "href" : "https://api.spotify.com/v1/albums/3tf50POByBTayLqOeN7J8u/tracks?offset=0&limit=50",
            "items" : [ {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 146773,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/6naqYMg4tYEbU6rIwxXgj9"
              },
              "href" : "https://api.spotify.com/v1/tracks/6naqYMg4tYEbU6rIwxXgj9",
              "id" : "6naqYMg4tYEbU6rIwxXgj9",
              "is_local" : false,
              "name" : "Crossing (Live)",
              "preview_url" : null,
              "track_number" : 1,
              "type" : "track",
              "uri" : "spotify:track:6naqYMg4tYEbU6rIwxXgj9"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 386920,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/2WLXS8JhTcS2ibTW1F8tMt"
              },
              "href" : "https://api.spotify.com/v1/tracks/2WLXS8JhTcS2ibTW1F8tMt",
              "id" : "2WLXS8JhTcS2ibTW1F8tMt",
              "is_local" : false,
              "name" : "Nothing to Say (Live)",
              "preview_url" : null,
              "track_number" : 2,
              "type" : "track",
              "uri" : "spotify:track:2WLXS8JhTcS2ibTW1F8tMt"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 407320,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/0LE37xB3659WPyibYguOiH"
              },
              "href" : "https://api.spotify.com/v1/tracks/0LE37xB3659WPyibYguOiH",
              "id" : "0LE37xB3659WPyibYguOiH",
              "is_local" : false,
              "name" : "Z.I.T.O. (Live)",
              "preview_url" : null,
              "track_number" : 3,
              "type" : "track",
              "uri" : "spotify:track:0LE37xB3659WPyibYguOiH"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 793320,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/17TE4FNWDLUEmK7btdDHGm"
              },
              "href" : "https://api.spotify.com/v1/tracks/17TE4FNWDLUEmK7btdDHGm",
              "id" : "17TE4FNWDLUEmK7btdDHGm",
              "is_local" : false,
              "name" : "Carolina IV (Live)",
              "preview_url" : null,
              "track_number" : 4,
              "type" : "track",
              "uri" : "spotify:track:17TE4FNWDLUEmK7btdDHGm"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 74800,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/0chpvJuxdCMscfyiKrKaqv"
              },
              "href" : "https://api.spotify.com/v1/tracks/0chpvJuxdCMscfyiKrKaqv",
              "id" : "0chpvJuxdCMscfyiKrKaqv",
              "is_local" : false,
              "name" : "Unfinished Allegro (Live)",
              "preview_url" : null,
              "track_number" : 5,
              "type" : "track",
              "uri" : "spotify:track:0chpvJuxdCMscfyiKrKaqv"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 321546,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/0E0Q5TVDv18M7YOYlxPPnD"
              },
              "href" : "https://api.spotify.com/v1/tracks/0E0Q5TVDv18M7YOYlxPPnD",
              "id" : "0E0Q5TVDv18M7YOYlxPPnD",
              "is_local" : false,
              "name" : "Carry on (Live)",
              "preview_url" : null,
              "track_number" : 6,
              "type" : "track",
              "uri" : "spotify:track:0E0Q5TVDv18M7YOYlxPPnD"
            } ],
            "limit" : 50,
            "next" : null,
            "offset" : 0,
            "previous" : null,
            "total" : 6
          },
          "type" : "album",
          "uri" : "spotify:album:3tf50POByBTayLqOeN7J8u"
        }
      }, {
        "added_at" : "2016-08-18T12:50:21Z",
        "album" : {
          "album_type" : "album",
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
            },
            "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
            "id" : "7IAXZaLTb6nkJr8RmVPn5y",
            "name" : "Angra",
            "type" : "artist",
            "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
          } ],
          "available_markets" : [ ],
          "copyrights" : [ {
            "text" : "2016 Angra",
            "type" : "C"
          }, {
            "text" : "2016 Angra",
            "type" : "P"
          } ],
          "external_ids" : {
            "upc" : "7891591015947"
          },
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/3zSZiYl2MoPGFs0dJfWpcS"
          },
          "genres" : [ ],
          "href" : "https://api.spotify.com/v1/albums/3zSZiYl2MoPGFs0dJfWpcS",
          "id" : "3zSZiYl2MoPGFs0dJfWpcS",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b27352933de27a7d25c52062cc6b",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e0252933de27a7d25c52062cc6b",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d0000485152933de27a7d25c52062cc6b",
            "width" : 64
          } ],
          "label" : "Angra",
          "name" : "Rebirth World Tour: Live in São Paulo",
          "popularity" : 0,
          "release_date" : "2002",
          "release_date_precision" : "year",
          "total_tracks" : 18,
          "tracks" : {
            "href" : "https://api.spotify.com/v1/albums/3zSZiYl2MoPGFs0dJfWpcS/tracks?offset=0&limit=50",
            "items" : [ {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 113521,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/0juGmUaRD8FtH2uqCR5lD0"
              },
              "href" : "https://api.spotify.com/v1/tracks/0juGmUaRD8FtH2uqCR5lD0",
              "id" : "0juGmUaRD8FtH2uqCR5lD0",
              "is_local" : false,
              "name" : "In Excelsis (Live)",
              "preview_url" : null,
              "track_number" : 1,
              "type" : "track",
              "uri" : "spotify:track:0juGmUaRD8FtH2uqCR5lD0"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 292786,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/6HtgWgCYcLtd8kAGRZI88y"
              },
              "href" : "https://api.spotify.com/v1/tracks/6HtgWgCYcLtd8kAGRZI88y",
              "id" : "6HtgWgCYcLtd8kAGRZI88y",
              "is_local" : false,
              "name" : "Nova Era (Live)",
              "preview_url" : null,
              "track_number" : 2,
              "type" : "track",
              "uri" : "spotify:track:6HtgWgCYcLtd8kAGRZI88y"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 366133,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/2Rqs1oP9rTkiIV1vOyugps"
              },
              "href" : "https://api.spotify.com/v1/tracks/2Rqs1oP9rTkiIV1vOyugps",
              "id" : "2Rqs1oP9rTkiIV1vOyugps",
              "is_local" : false,
              "name" : "Acid Rain (Live)",
              "preview_url" : null,
              "track_number" : 3,
              "type" : "track",
              "uri" : "spotify:track:2Rqs1oP9rTkiIV1vOyugps"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 425200,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/6Bs4BMxc6qJDrWClLOQYHC"
              },
              "href" : "https://api.spotify.com/v1/tracks/6Bs4BMxc6qJDrWClLOQYHC",
              "id" : "6Bs4BMxc6qJDrWClLOQYHC",
              "is_local" : false,
              "name" : "Angels Cry (Live)",
              "preview_url" : null,
              "track_number" : 4,
              "type" : "track",
              "uri" : "spotify:track:6Bs4BMxc6qJDrWClLOQYHC"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 267973,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/7zSoW1txiryvdEgFjhX9g7"
              },
              "href" : "https://api.spotify.com/v1/tracks/7zSoW1txiryvdEgFjhX9g7",
              "id" : "7zSoW1txiryvdEgFjhX9g7",
              "is_local" : false,
              "name" : "Heroes of Sand (Live)",
              "preview_url" : null,
              "track_number" : 5,
              "type" : "track",
              "uri" : "spotify:track:7zSoW1txiryvdEgFjhX9g7"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 543093,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/31btlvwAkbiLsns0p9Fij7"
              },
              "href" : "https://api.spotify.com/v1/tracks/31btlvwAkbiLsns0p9Fij7",
              "id" : "31btlvwAkbiLsns0p9Fij7",
              "is_local" : false,
              "name" : "Metal Icarus (Live)",
              "preview_url" : null,
              "track_number" : 6,
              "type" : "track",
              "uri" : "spotify:track:31btlvwAkbiLsns0p9Fij7"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 308506,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/5nu5na4NEYElIpyPzspuIp"
              },
              "href" : "https://api.spotify.com/v1/tracks/5nu5na4NEYElIpyPzspuIp",
              "id" : "5nu5na4NEYElIpyPzspuIp",
              "is_local" : false,
              "name" : "Millenium Sun (Live)",
              "preview_url" : null,
              "track_number" : 7,
              "type" : "track",
              "uri" : "spotify:track:5nu5na4NEYElIpyPzspuIp"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 351400,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/5rqEV5ytkmB9tDsE85x2hq"
              },
              "href" : "https://api.spotify.com/v1/tracks/5rqEV5ytkmB9tDsE85x2hq",
              "id" : "5rqEV5ytkmB9tDsE85x2hq",
              "is_local" : false,
              "name" : "Make Believe (Live)",
              "preview_url" : null,
              "track_number" : 8,
              "type" : "track",
              "uri" : "spotify:track:5rqEV5ytkmB9tDsE85x2hq"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 316533,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/2nfEu4a7SG9EmgVMt5kUQh"
              },
              "href" : "https://api.spotify.com/v1/tracks/2nfEu4a7SG9EmgVMt5kUQh",
              "id" : "2nfEu4a7SG9EmgVMt5kUQh",
              "is_local" : false,
              "name" : "Drums Solo (Live)",
              "preview_url" : null,
              "track_number" : 9,
              "type" : "track",
              "uri" : "spotify:track:2nfEu4a7SG9EmgVMt5kUQh"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 2,
              "duration_ms" : 500466,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/5TohKG9dF2aRWkhK613rZ4"
              },
              "href" : "https://api.spotify.com/v1/tracks/5TohKG9dF2aRWkhK613rZ4",
              "id" : "5TohKG9dF2aRWkhK613rZ4",
              "is_local" : false,
              "name" : "Unholy Wars (Live)",
              "preview_url" : null,
              "track_number" : 1,
              "type" : "track",
              "uri" : "spotify:track:5TohKG9dF2aRWkhK613rZ4"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 2,
              "duration_ms" : 326520,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/2u4IrFLZPd6JIvC082x8Sp"
              },
              "href" : "https://api.spotify.com/v1/tracks/2u4IrFLZPd6JIvC082x8Sp",
              "id" : "2u4IrFLZPd6JIvC082x8Sp",
              "is_local" : false,
              "name" : "Rebirth (Live)",
              "preview_url" : null,
              "track_number" : 2,
              "type" : "track",
              "uri" : "spotify:track:2u4IrFLZPd6JIvC082x8Sp"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 2,
              "duration_ms" : 362986,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/1pgRjQ8J1Fm3N3iCkgumHa"
              },
              "href" : "https://api.spotify.com/v1/tracks/1pgRjQ8J1Fm3N3iCkgumHa",
              "id" : "1pgRjQ8J1Fm3N3iCkgumHa",
              "is_local" : false,
              "name" : "Time (Live)",
              "preview_url" : null,
              "track_number" : 3,
              "type" : "track",
              "uri" : "spotify:track:1pgRjQ8J1Fm3N3iCkgumHa"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 2,
              "duration_ms" : 445240,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/4efUhGUb62mPbcuwXhEwyf"
              },
              "href" : "https://api.spotify.com/v1/tracks/4efUhGUb62mPbcuwXhEwyf",
              "id" : "4efUhGUb62mPbcuwXhEwyf",
              "is_local" : false,
              "name" : "Running Alone (Live)",
              "preview_url" : null,
              "track_number" : 4,
              "type" : "track",
              "uri" : "spotify:track:4efUhGUb62mPbcuwXhEwyf"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 2,
              "duration_ms" : 113120,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/4fmGVmE8A2V8U2kTQyUKPD"
              },
              "href" : "https://api.spotify.com/v1/tracks/4fmGVmE8A2V8U2kTQyUKPD",
              "id" : "4fmGVmE8A2V8U2kTQyUKPD",
              "is_local" : false,
              "name" : "Crossing (Live)",
              "preview_url" : null,
              "track_number" : 5,
              "type" : "track",
              "uri" : "spotify:track:4fmGVmE8A2V8U2kTQyUKPD"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 2,
              "duration_ms" : 413360,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/7Fq39TWNsNaZbrpGpS8pCy"
              },
              "href" : "https://api.spotify.com/v1/tracks/7Fq39TWNsNaZbrpGpS8pCy",
              "id" : "7Fq39TWNsNaZbrpGpS8pCy",
              "is_local" : false,
              "name" : "Nothing to Say (Live)",
              "preview_url" : null,
              "track_number" : 6,
              "type" : "track",
              "uri" : "spotify:track:7Fq39TWNsNaZbrpGpS8pCy"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 2,
              "duration_ms" : 74320,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/5UvMACJlB6y5FLFG7Dsx9C"
              },
              "href" : "https://api.spotify.com/v1/tracks/5UvMACJlB6y5FLFG7Dsx9C",
              "id" : "5UvMACJlB6y5FLFG7Dsx9C",
              "is_local" : false,
              "name" : "Unfinished Allegro (Live)",
              "preview_url" : null,
              "track_number" : 7,
              "type" : "track",
              "uri" : "spotify:track:5UvMACJlB6y5FLFG7Dsx9C"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 2,
              "duration_ms" : 319385,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/0De4yrKwMLP2CCo0HMlQGC"
              },
              "href" : "https://api.spotify.com/v1/tracks/0De4yrKwMLP2CCo0HMlQGC",
              "id" : "0De4yrKwMLP2CCo0HMlQGC",
              "is_local" : false,
              "name" : "Carry On (Live)",
              "preview_url" : null,
              "track_number" : 8,
              "type" : "track",
              "uri" : "spotify:track:0De4yrKwMLP2CCo0HMlQGC"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 2,
              "duration_ms" : 358453,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/5WvPB19rGgYGN3U5EIOIch"
              },
              "href" : "https://api.spotify.com/v1/tracks/5WvPB19rGgYGN3U5EIOIch",
              "id" : "5WvPB19rGgYGN3U5EIOIch",
              "is_local" : false,
              "name" : "The Number of the Beast (Live)",
              "preview_url" : null,
              "track_number" : 9,
              "type" : "track",
              "uri" : "spotify:track:5WvPB19rGgYGN3U5EIOIch"
            } ],
            "limit" : 50,
            "next" : null,
            "offset" : 0,
            "previous" : null,
            "total" : 18
          },
          "type" : "album",
          "uri" : "spotify:album:3zSZiYl2MoPGFs0dJfWpcS"
        }
      }, {
        "added_at" : "2016-08-18T12:50:18Z",
        "album" : {
          "album_type" : "album",
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
            },
            "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
            "id" : "7IAXZaLTb6nkJr8RmVPn5y",
            "name" : "Angra",
            "type" : "artist",
            "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
          } ],
          "available_markets" : [ ],
          "copyrights" : [ {
            "text" : "2016 Angra",
            "type" : "C"
          }, {
            "text" : "2016 Angra",
            "type" : "P"
          } ],
          "external_ids" : {
            "upc" : "7899555003146"
          },
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/6QXaDDrmB1EYcEp7o67Szq"
          },
          "genres" : [ ],
          "href" : "https://api.spotify.com/v1/albums/6QXaDDrmB1EYcEp7o67Szq",
          "id" : "6QXaDDrmB1EYcEp7o67Szq",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b2733d436e42ecda4415bfb232cc",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e023d436e42ecda4415bfb232cc",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d000048513d436e42ecda4415bfb232cc",
            "width" : 64
          } ],
          "label" : "Angra",
          "name" : "Aqua",
          "popularity" : 0,
          "release_date" : "2010",
          "release_date_precision" : "year",
          "total_tracks" : 10,
          "tracks" : {
            "href" : "https://api.spotify.com/v1/albums/6QXaDDrmB1EYcEp7o67Szq/tracks?offset=0&limit=50",
            "items" : [ {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 59946,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/5HV5va2whX2YXdinUHyo9f"
              },
              "href" : "https://api.spotify.com/v1/tracks/5HV5va2whX2YXdinUHyo9f",
              "id" : "5HV5va2whX2YXdinUHyo9f",
              "is_local" : false,
              "name" : "Viderunt Te Aquae",
              "preview_url" : null,
              "track_number" : 1,
              "type" : "track",
              "uri" : "spotify:track:5HV5va2whX2YXdinUHyo9f"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 292186,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/578hyDoylBWVqAOlKo0S7m"
              },
              "href" : "https://api.spotify.com/v1/tracks/578hyDoylBWVqAOlKo0S7m",
              "id" : "578hyDoylBWVqAOlKo0S7m",
              "is_local" : false,
              "name" : "Arising Thunder",
              "preview_url" : null,
              "track_number" : 2,
              "type" : "track",
              "uri" : "spotify:track:578hyDoylBWVqAOlKo0S7m"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 354026,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/5rQJhlkyHLNug3cZmVgLuQ"
              },
              "href" : "https://api.spotify.com/v1/tracks/5rQJhlkyHLNug3cZmVgLuQ",
              "id" : "5rQJhlkyHLNug3cZmVgLuQ",
              "is_local" : false,
              "name" : "Awake from Darkness",
              "preview_url" : null,
              "track_number" : 3,
              "type" : "track",
              "uri" : "spotify:track:5rQJhlkyHLNug3cZmVgLuQ"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 273653,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/4RQedMOANV2Yg0Dex7MPY8"
              },
              "href" : "https://api.spotify.com/v1/tracks/4RQedMOANV2Yg0Dex7MPY8",
              "id" : "4RQedMOANV2Yg0Dex7MPY8",
              "is_local" : false,
              "name" : "Lease of Life",
              "preview_url" : null,
              "track_number" : 4,
              "type" : "track",
              "uri" : "spotify:track:4RQedMOANV2Yg0Dex7MPY8"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 333786,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/2ZrFe5aMXgj08KL7xZNGSs"
              },
              "href" : "https://api.spotify.com/v1/tracks/2ZrFe5aMXgj08KL7xZNGSs",
              "id" : "2ZrFe5aMXgj08KL7xZNGSs",
              "is_local" : false,
              "name" : "The Rage of the Waters",
              "preview_url" : null,
              "track_number" : 5,
              "type" : "track",
              "uri" : "spotify:track:2ZrFe5aMXgj08KL7xZNGSs"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 322986,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/7wZ9hZ5933wUe6NPYcWgMt"
              },
              "href" : "https://api.spotify.com/v1/tracks/7wZ9hZ5933wUe6NPYcWgMt",
              "id" : "7wZ9hZ5933wUe6NPYcWgMt",
              "is_local" : false,
              "name" : "Spirit of the Air",
              "preview_url" : null,
              "track_number" : 6,
              "type" : "track",
              "uri" : "spotify:track:7wZ9hZ5933wUe6NPYcWgMt"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 330400,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/3SNx7OkGKJAsOJs01hCbvJ"
              },
              "href" : "https://api.spotify.com/v1/tracks/3SNx7OkGKJAsOJs01hCbvJ",
              "id" : "3SNx7OkGKJAsOJs01hCbvJ",
              "is_local" : false,
              "name" : "Hollow",
              "preview_url" : null,
              "track_number" : 7,
              "type" : "track",
              "uri" : "spotify:track:3SNx7OkGKJAsOJs01hCbvJ"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 315493,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/1kA1xvr0t4dH0HWxQEugzV"
              },
              "href" : "https://api.spotify.com/v1/tracks/1kA1xvr0t4dH0HWxQEugzV",
              "id" : "1kA1xvr0t4dH0HWxQEugzV",
              "is_local" : false,
              "name" : "A Monster in Her Eyes",
              "preview_url" : null,
              "track_number" : 8,
              "type" : "track",
              "uri" : "spotify:track:1kA1xvr0t4dH0HWxQEugzV"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 372120,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/5a7zqg5WRlDvwren73iKQ5"
              },
              "href" : "https://api.spotify.com/v1/tracks/5a7zqg5WRlDvwren73iKQ5",
              "id" : "5a7zqg5WRlDvwren73iKQ5",
              "is_local" : false,
              "name" : "Weakness of a Man",
              "preview_url" : null,
              "track_number" : 9,
              "type" : "track",
              "uri" : "spotify:track:5a7zqg5WRlDvwren73iKQ5"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 305866,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/1K26iQcDC062AFDrsVEXB9"
              },
              "href" : "https://api.spotify.com/v1/tracks/1K26iQcDC062AFDrsVEXB9",
              "id" : "1K26iQcDC062AFDrsVEXB9",
              "is_local" : false,
              "name" : "Ashes",
              "preview_url" : null,
              "track_number" : 10,
              "type" : "track",
              "uri" : "spotify:track:1K26iQcDC062AFDrsVEXB9"
            } ],
            "limit" : 50,
            "next" : null,
            "offset" : 0,
            "previous" : null,
            "total" : 10
          },
          "type" : "album",
          "uri" : "spotify:album:6QXaDDrmB1EYcEp7o67Szq"
        }
      }, {
        "added_at" : "2016-08-18T12:50:16Z",
        "album" : {
          "album_type" : "album",
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
            },
            "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
            "id" : "7IAXZaLTb6nkJr8RmVPn5y",
            "name" : "Angra",
            "type" : "artist",
            "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
          } ],
          "available_markets" : [ ],
          "copyrights" : [ {
            "text" : "2016 Angra",
            "type" : "C"
          }, {
            "text" : "2016 Angra",
            "type" : "P"
          } ],
          "external_ids" : {
            "upc" : "7898181129893"
          },
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/4OnFanOgq4MPWxe90Yge1W"
          },
          "genres" : [ ],
          "href" : "https://api.spotify.com/v1/albums/4OnFanOgq4MPWxe90Yge1W",
          "id" : "4OnFanOgq4MPWxe90Yge1W",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b2731dc5bbd44e0a9fb212039a0f",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e021dc5bbd44e0a9fb212039a0f",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d000048511dc5bbd44e0a9fb212039a0f",
            "width" : 64
          } ],
          "label" : "Angra",
          "name" : "Aurora Consurgens",
          "popularity" : 0,
          "release_date" : "2006-10-27",
          "release_date_precision" : "day",
          "total_tracks" : 10,
          "tracks" : {
            "href" : "https://api.spotify.com/v1/albums/4OnFanOgq4MPWxe90Yge1W/tracks?offset=0&limit=50",
            "items" : [ {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 270600,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/3EWRQGrq7AVPwvbvjLJinK"
              },
              "href" : "https://api.spotify.com/v1/tracks/3EWRQGrq7AVPwvbvjLJinK",
              "id" : "3EWRQGrq7AVPwvbvjLJinK",
              "is_local" : false,
              "name" : "The Course of Nature",
              "preview_url" : null,
              "track_number" : 1,
              "type" : "track",
              "uri" : "spotify:track:3EWRQGrq7AVPwvbvjLJinK"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 327880,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/2z2FNFrsJmnCqRnZBL9CAg"
              },
              "href" : "https://api.spotify.com/v1/tracks/2z2FNFrsJmnCqRnZBL9CAg",
              "id" : "2z2FNFrsJmnCqRnZBL9CAg",
              "is_local" : false,
              "name" : "The Voice Commanding You",
              "preview_url" : null,
              "track_number" : 2,
              "type" : "track",
              "uri" : "spotify:track:2z2FNFrsJmnCqRnZBL9CAg"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 338226,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/6kiKQTky5v8GGBs3d27wOM"
              },
              "href" : "https://api.spotify.com/v1/tracks/6kiKQTky5v8GGBs3d27wOM",
              "id" : "6kiKQTky5v8GGBs3d27wOM",
              "is_local" : false,
              "name" : "Ego Painted Grey",
              "preview_url" : null,
              "track_number" : 3,
              "type" : "track",
              "uri" : "spotify:track:6kiKQTky5v8GGBs3d27wOM"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 209880,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/6ZLnNfvuVWK3NcIpTaMoq9"
              },
              "href" : "https://api.spotify.com/v1/tracks/6ZLnNfvuVWK3NcIpTaMoq9",
              "id" : "6ZLnNfvuVWK3NcIpTaMoq9",
              "is_local" : false,
              "name" : "Breaking Ties",
              "preview_url" : null,
              "track_number" : 4,
              "type" : "track",
              "uri" : "spotify:track:6ZLnNfvuVWK3NcIpTaMoq9"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 261666,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/6ozwCJGBUgg1RXbEn2GkIn"
              },
              "href" : "https://api.spotify.com/v1/tracks/6ozwCJGBUgg1RXbEn2GkIn",
              "id" : "6ozwCJGBUgg1RXbEn2GkIn",
              "is_local" : false,
              "name" : "Salvation: Suicide",
              "preview_url" : null,
              "track_number" : 5,
              "type" : "track",
              "uri" : "spotify:track:6ozwCJGBUgg1RXbEn2GkIn"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 362040,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/04C2YzMs0wvfgDoY98P7dD"
              },
              "href" : "https://api.spotify.com/v1/tracks/04C2YzMs0wvfgDoY98P7dD",
              "id" : "04C2YzMs0wvfgDoY98P7dD",
              "is_local" : false,
              "name" : "Window to Nowhere",
              "preview_url" : null,
              "track_number" : 6,
              "type" : "track",
              "uri" : "spotify:track:04C2YzMs0wvfgDoY98P7dD"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 429200,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/1KgSjgaEJ9oNKYsDF69w4f"
              },
              "href" : "https://api.spotify.com/v1/tracks/1KgSjgaEJ9oNKYsDF69w4f",
              "id" : "1KgSjgaEJ9oNKYsDF69w4f",
              "is_local" : false,
              "name" : "So Near so Far",
              "preview_url" : null,
              "track_number" : 7,
              "type" : "track",
              "uri" : "spotify:track:1KgSjgaEJ9oNKYsDF69w4f"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 392746,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/7mVKd38lZpHgUGYjt95vAG"
              },
              "href" : "https://api.spotify.com/v1/tracks/7mVKd38lZpHgUGYjt95vAG",
              "id" : "7mVKd38lZpHgUGYjt95vAG",
              "is_local" : false,
              "name" : "Passing by",
              "preview_url" : null,
              "track_number" : 8,
              "type" : "track",
              "uri" : "spotify:track:7mVKd38lZpHgUGYjt95vAG"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 265613,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/2MLCKf3WfXl1yY4iJeqxMB"
              },
              "href" : "https://api.spotify.com/v1/tracks/2MLCKf3WfXl1yY4iJeqxMB",
              "id" : "2MLCKf3WfXl1yY4iJeqxMB",
              "is_local" : false,
              "name" : "Scream Your Heart Out",
              "preview_url" : null,
              "track_number" : 9,
              "type" : "track",
              "uri" : "spotify:track:2MLCKf3WfXl1yY4iJeqxMB"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 189906,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/7742zxoPIaOVShNS3xbDyE"
              },
              "href" : "https://api.spotify.com/v1/tracks/7742zxoPIaOVShNS3xbDyE",
              "id" : "7742zxoPIaOVShNS3xbDyE",
              "is_local" : false,
              "name" : "Abandoned Fate",
              "preview_url" : null,
              "track_number" : 10,
              "type" : "track",
              "uri" : "spotify:track:7742zxoPIaOVShNS3xbDyE"
            } ],
            "limit" : 50,
            "next" : null,
            "offset" : 0,
            "previous" : null,
            "total" : 10
          },
          "type" : "album",
          "uri" : "spotify:album:4OnFanOgq4MPWxe90Yge1W"
        }
      }, {
        "added_at" : "2016-08-18T12:50:07Z",
        "album" : {
          "album_type" : "album",
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
            },
            "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
            "id" : "7IAXZaLTb6nkJr8RmVPn5y",
            "name" : "Angra",
            "type" : "artist",
            "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
          } ],
          "available_markets" : [ "AR", "BO", "BR", "CL", "CO", "CR", "DO", "EC", "GT", "HN", "MX", "NI", "PA", "PE", "PY", "SV", "UY" ],
          "copyrights" : [ {
            "text" : "2015 Toplinkmusic",
            "type" : "C"
          }, {
            "text" : "2015 Toplinkmusic",
            "type" : "P"
          } ],
          "external_ids" : {
            "upc" : "646809648472"
          },
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/4WP6Dmy0sQA7KwFhcsovhQ"
          },
          "genres" : [ ],
          "href" : "https://api.spotify.com/v1/albums/4WP6Dmy0sQA7KwFhcsovhQ",
          "id" : "4WP6Dmy0sQA7KwFhcsovhQ",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b273a0881e13f3632d62e19db40d",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e02a0881e13f3632d62e19db40d",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d00004851a0881e13f3632d62e19db40d",
            "width" : 64
          } ],
          "label" : "Toplink",
          "name" : "Angels Cry - 20th Anniversary Tour (Live)",
          "popularity" : 35,
          "release_date" : "2013",
          "release_date_precision" : "year",
          "total_tracks" : 15,
          "tracks" : {
            "href" : "https://api.spotify.com/v1/albums/4WP6Dmy0sQA7KwFhcsovhQ/tracks?offset=0&limit=50",
            "items" : [ {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ "AR", "BO", "BR", "CL", "CO", "CR", "DO", "EC", "GT", "HN", "MX", "NI", "PA", "PE", "PY", "SV", "UY" ],
              "disc_number" : 1,
              "duration_ms" : 424813,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/1cEVTWDOAE2JHYh8OqHAFr"
              },
              "href" : "https://api.spotify.com/v1/tracks/1cEVTWDOAE2JHYh8OqHAFr",
              "id" : "1cEVTWDOAE2JHYh8OqHAFr",
              "is_local" : false,
              "name" : "Angels Cry - Live",
              "preview_url" : "https://p.scdn.co/mp3-preview/b51f5d8c16c37873d88459b09b3b25d871b7ce7b?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 1,
              "type" : "track",
              "uri" : "spotify:track:1cEVTWDOAE2JHYh8OqHAFr"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ "AR", "BO", "BR", "CL", "CO", "CR", "DO", "EC", "GT", "HN", "MX", "NI", "PA", "PE", "PY", "SV", "UY" ],
              "disc_number" : 1,
              "duration_ms" : 387280,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/3JL3OgnOvNM4C8aF84jbtm"
              },
              "href" : "https://api.spotify.com/v1/tracks/3JL3OgnOvNM4C8aF84jbtm",
              "id" : "3JL3OgnOvNM4C8aF84jbtm",
              "is_local" : false,
              "name" : "Nothing to Say - Live",
              "preview_url" : "https://p.scdn.co/mp3-preview/bda13958d0d60c1a96873dce224eb3150c67253b?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 2,
              "type" : "track",
              "uri" : "spotify:track:3JL3OgnOvNM4C8aF84jbtm"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ "AR", "BO", "BR", "CL", "CO", "CR", "DO", "EC", "GT", "HN", "MX", "NI", "PA", "PE", "PY", "SV", "UY" ],
              "disc_number" : 1,
              "duration_ms" : 299586,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/1ZyQbDA6OzX2VRtdKo6JiV"
              },
              "href" : "https://api.spotify.com/v1/tracks/1ZyQbDA6OzX2VRtdKo6JiV",
              "id" : "1ZyQbDA6OzX2VRtdKo6JiV",
              "is_local" : false,
              "name" : "Waiting Silence - Live",
              "preview_url" : "https://p.scdn.co/mp3-preview/93366326f68f01f7889fddf850c83472359c6148?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 3,
              "type" : "track",
              "uri" : "spotify:track:1ZyQbDA6OzX2VRtdKo6JiV"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ "AR", "BO", "BR", "CL", "CO", "CR", "DO", "EC", "GT", "HN", "MX", "NI", "PA", "PE", "PY", "SV", "UY" ],
              "disc_number" : 1,
              "duration_ms" : 308933,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/6d6xrgiKZVwJbB4zozfFHL"
              },
              "href" : "https://api.spotify.com/v1/tracks/6d6xrgiKZVwJbB4zozfFHL",
              "id" : "6d6xrgiKZVwJbB4zozfFHL",
              "is_local" : false,
              "name" : "Lisbon - Live",
              "preview_url" : "https://p.scdn.co/mp3-preview/d5adaa609bd32303981a4aa85d4442d1db787535?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 4,
              "type" : "track",
              "uri" : "spotify:track:6d6xrgiKZVwJbB4zozfFHL"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ "AR", "BO", "BR", "CL", "CO", "CR", "DO", "EC", "GT", "HN", "MX", "NI", "PA", "PE", "PY", "SV", "UY" ],
              "disc_number" : 1,
              "duration_ms" : 355746,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/1Fhfb6YWSQryGMeRgB8VxW"
              },
              "href" : "https://api.spotify.com/v1/tracks/1Fhfb6YWSQryGMeRgB8VxW",
              "id" : "1Fhfb6YWSQryGMeRgB8VxW",
              "is_local" : false,
              "name" : "Time - Live",
              "preview_url" : "https://p.scdn.co/mp3-preview/37d219682c9d2f2868b272928987a11a71b2d126?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 5,
              "type" : "track",
              "uri" : "spotify:track:1Fhfb6YWSQryGMeRgB8VxW"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ "AR", "BO", "BR", "CL", "CO", "CR", "DO", "EC", "GT", "HN", "MX", "NI", "PA", "PE", "PY", "SV", "UY" ],
              "disc_number" : 1,
              "duration_ms" : 334880,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/68icDGMEfwL4d53Vq4FdZf"
              },
              "href" : "https://api.spotify.com/v1/tracks/68icDGMEfwL4d53Vq4FdZf",
              "id" : "68icDGMEfwL4d53Vq4FdZf",
              "is_local" : false,
              "name" : "Gentle Change - Live",
              "preview_url" : "https://p.scdn.co/mp3-preview/9070a76ccd367c8fcfb34fc4481f6d156daf183d?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 6,
              "type" : "track",
              "uri" : "spotify:track:68icDGMEfwL4d53Vq4FdZf"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ "AR", "BO", "BR", "CL", "CO", "CR", "DO", "EC", "GT", "HN", "MX", "NI", "PA", "PE", "PY", "SV", "UY" ],
              "disc_number" : 1,
              "duration_ms" : 304373,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/7hm5EDryKnoLPagfy29N71"
              },
              "href" : "https://api.spotify.com/v1/tracks/7hm5EDryKnoLPagfy29N71",
              "id" : "7hm5EDryKnoLPagfy29N71",
              "is_local" : false,
              "name" : "Late Redemption - Live",
              "preview_url" : "https://p.scdn.co/mp3-preview/61754a784731d8e76ab88a164e4acdd23c2829bf?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 7,
              "type" : "track",
              "uri" : "spotify:track:7hm5EDryKnoLPagfy29N71"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ "AR", "BO", "BR", "CL", "CO", "CR", "DO", "EC", "GT", "HN", "MX", "NI", "PA", "PE", "PY", "SV", "UY" ],
              "disc_number" : 1,
              "duration_ms" : 358066,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/7BCALpaJjoCPsUrHHqtTdo"
              },
              "href" : "https://api.spotify.com/v1/tracks/7BCALpaJjoCPsUrHHqtTdo",
              "id" : "7BCALpaJjoCPsUrHHqtTdo",
              "is_local" : false,
              "name" : "Silence and Distance - Live",
              "preview_url" : "https://p.scdn.co/mp3-preview/48bb14779c6f794f245c4834b9ad27eec45ee5a0?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 8,
              "type" : "track",
              "uri" : "spotify:track:7BCALpaJjoCPsUrHHqtTdo"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ "AR", "BO", "BR", "CL", "CO", "CR", "DO", "EC", "GT", "HN", "MX", "NI", "PA", "PE", "PY", "SV", "UY" ],
              "disc_number" : 1,
              "duration_ms" : 206266,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/4ZIuxqhiTgJSyQqC7u2HiR"
              },
              "href" : "https://api.spotify.com/v1/tracks/4ZIuxqhiTgJSyQqC7u2HiR",
              "id" : "4ZIuxqhiTgJSyQqC7u2HiR",
              "is_local" : false,
              "name" : "Reaching Horizons - Live",
              "preview_url" : "https://p.scdn.co/mp3-preview/20f1fea40aa91122e04ec726154913a640364875?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 9,
              "type" : "track",
              "uri" : "spotify:track:4ZIuxqhiTgJSyQqC7u2HiR"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ "AR", "BO", "BR", "CL", "CO", "CR", "DO", "EC", "GT", "HN", "MX", "NI", "PA", "PE", "PY", "SV", "UY" ],
              "disc_number" : 1,
              "duration_ms" : 332546,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/2a9JUt16qIH7g1LZEOcUHD"
              },
              "href" : "https://api.spotify.com/v1/tracks/2a9JUt16qIH7g1LZEOcUHD",
              "id" : "2a9JUt16qIH7g1LZEOcUHD",
              "is_local" : false,
              "name" : "Stand Away - Live",
              "preview_url" : "https://p.scdn.co/mp3-preview/ba09e14bdcc012e084f8236e4eafc0b6276eda54?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 10,
              "type" : "track",
              "uri" : "spotify:track:2a9JUt16qIH7g1LZEOcUHD"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ "AR", "BO", "BR", "CL", "CO", "CR", "DO", "EC", "GT", "HN", "MX", "NI", "PA", "PE", "PY", "SV", "UY" ],
              "disc_number" : 1,
              "duration_ms" : 282746,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/66sxs2LHELROniZCgqPwRV"
              },
              "href" : "https://api.spotify.com/v1/tracks/66sxs2LHELROniZCgqPwRV",
              "id" : "66sxs2LHELROniZCgqPwRV",
              "is_local" : false,
              "name" : "Wuthering Heights - Live",
              "preview_url" : "https://p.scdn.co/mp3-preview/c9df68dbe6a5e13ea46aac4f2d456bae41c57cf6?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 11,
              "type" : "track",
              "uri" : "spotify:track:66sxs2LHELROniZCgqPwRV"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ "AR", "BO", "BR", "CL", "CO", "CR", "DO", "EC", "GT", "HN", "MX", "NI", "PA", "PE", "PY", "SV", "UY" ],
              "disc_number" : 1,
              "duration_ms" : 389373,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/3wTkmMBp63kRVlspx7rlyK"
              },
              "href" : "https://api.spotify.com/v1/tracks/3wTkmMBp63kRVlspx7rlyK",
              "id" : "3wTkmMBp63kRVlspx7rlyK",
              "is_local" : false,
              "name" : "Unfinished Allegro / Carry On - Live",
              "preview_url" : "https://p.scdn.co/mp3-preview/0dc1451d321478458126abbc2c108f05b86db03c?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 12,
              "type" : "track",
              "uri" : "spotify:track:3wTkmMBp63kRVlspx7rlyK"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ "AR", "BO", "BR", "CL", "CO", "CR", "DO", "EC", "GT", "HN", "MX", "NI", "PA", "PE", "PY", "SV", "UY" ],
              "disc_number" : 1,
              "duration_ms" : 346306,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/0r1tJIrnmir1oqHB0qqXug"
              },
              "href" : "https://api.spotify.com/v1/tracks/0r1tJIrnmir1oqHB0qqXug",
              "id" : "0r1tJIrnmir1oqHB0qqXug",
              "is_local" : false,
              "name" : "Rebirth - Live",
              "preview_url" : "https://p.scdn.co/mp3-preview/a5c8ecd1c173ebf6193c0b85cf15a54ee9598980?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 13,
              "type" : "track",
              "uri" : "spotify:track:0r1tJIrnmir1oqHB0qqXug"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ "AR", "BO", "BR", "CL", "CO", "CR", "DO", "EC", "GT", "HN", "MX", "NI", "PA", "PE", "PY", "SV", "UY" ],
              "disc_number" : 1,
              "duration_ms" : 53973,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/7Fgt4wrwEZMTRcDIzAJA8R"
              },
              "href" : "https://api.spotify.com/v1/tracks/7Fgt4wrwEZMTRcDIzAJA8R",
              "id" : "7Fgt4wrwEZMTRcDIzAJA8R",
              "is_local" : false,
              "name" : "In Excelsis - Live",
              "preview_url" : "https://p.scdn.co/mp3-preview/9cdcc04503dac5e3cf8b95872dd982879717800d?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 14,
              "type" : "track",
              "uri" : "spotify:track:7Fgt4wrwEZMTRcDIzAJA8R"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ "AR", "BO", "BR", "CL", "CO", "CR", "DO", "EC", "GT", "HN", "MX", "NI", "PA", "PE", "PY", "SV", "UY" ],
              "disc_number" : 1,
              "duration_ms" : 363986,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/5Dd73y1EtpXoNjTPqWeDes"
              },
              "href" : "https://api.spotify.com/v1/tracks/5Dd73y1EtpXoNjTPqWeDes",
              "id" : "5Dd73y1EtpXoNjTPqWeDes",
              "is_local" : false,
              "name" : "Nova Era - Live",
              "preview_url" : "https://p.scdn.co/mp3-preview/8110873a2c9f186b9f75f102ba06bb784acf3ce7?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 15,
              "type" : "track",
              "uri" : "spotify:track:5Dd73y1EtpXoNjTPqWeDes"
            } ],
            "limit" : 50,
            "next" : null,
            "offset" : 0,
            "previous" : null,
            "total" : 15
          },
          "type" : "album",
          "uri" : "spotify:album:4WP6Dmy0sQA7KwFhcsovhQ"
        }
      }, {
        "added_at" : "2016-08-18T12:50:05Z",
        "album" : {
          "album_type" : "album",
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
            },
            "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
            "id" : "7IAXZaLTb6nkJr8RmVPn5y",
            "name" : "Angra",
            "type" : "artist",
            "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
          } ],
          "available_markets" : [ "AR", "BO", "BR", "CL", "CO", "CR", "DO", "EC", "GT", "HN", "MX", "NI", "PA", "PE", "PY", "SV", "UY" ],
          "copyrights" : [ {
            "text" : "2015 Toplinkmusic",
            "type" : "C"
          }, {
            "text" : "2015 Toplinkmusic",
            "type" : "P"
          } ],
          "external_ids" : {
            "upc" : "646809640889"
          },
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/4etZZGXgHo8lCSH5CEw6Z7"
          },
          "genres" : [ ],
          "href" : "https://api.spotify.com/v1/albums/4etZZGXgHo8lCSH5CEw6Z7",
          "id" : "4etZZGXgHo8lCSH5CEw6Z7",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b27339c7984e3da3664f6b1e6f6a",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e0239c7984e3da3664f6b1e6f6a",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d0000485139c7984e3da3664f6b1e6f6a",
            "width" : 64
          } ],
          "label" : "Toplink",
          "name" : "Secret Garden",
          "popularity" : 39,
          "release_date" : "2014",
          "release_date_precision" : "year",
          "total_tracks" : 10,
          "tracks" : {
            "href" : "https://api.spotify.com/v1/albums/4etZZGXgHo8lCSH5CEw6Z7/tracks?offset=0&limit=50",
            "items" : [ {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ "AR", "BO", "BR", "CL", "CO", "CR", "DO", "EC", "GT", "HN", "MX", "NI", "PA", "PE", "PY", "SV", "UY" ],
              "disc_number" : 1,
              "duration_ms" : 373760,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/2bzaEuWfky9S7pvXse1uZU"
              },
              "href" : "https://api.spotify.com/v1/tracks/2bzaEuWfky9S7pvXse1uZU",
              "id" : "2bzaEuWfky9S7pvXse1uZU",
              "is_local" : false,
              "name" : "Newborn Me",
              "preview_url" : "https://p.scdn.co/mp3-preview/3d91295b4ff34a22a75d792fcf468a1585ab4430?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 1,
              "type" : "track",
              "uri" : "spotify:track:2bzaEuWfky9S7pvXse1uZU"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ "AR", "BO", "BR", "CL", "CO", "CR", "DO", "EC", "GT", "HN", "MX", "NI", "PA", "PE", "PY", "SV", "UY" ],
              "disc_number" : 1,
              "duration_ms" : 288733,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/6eEn2SwCuQjUBWUpGL9o3k"
              },
              "href" : "https://api.spotify.com/v1/tracks/6eEn2SwCuQjUBWUpGL9o3k",
              "id" : "6eEn2SwCuQjUBWUpGL9o3k",
              "is_local" : false,
              "name" : "Black Hearted Soul",
              "preview_url" : "https://p.scdn.co/mp3-preview/f7f24322b8a68ce98a1df429d6328b7945e8fe73?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 2,
              "type" : "track",
              "uri" : "spotify:track:6eEn2SwCuQjUBWUpGL9o3k"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ "AR", "BO", "BR", "CL", "CO", "CR", "DO", "EC", "GT", "HN", "MX", "NI", "PA", "PE", "PY", "SV", "UY" ],
              "disc_number" : 1,
              "duration_ms" : 264893,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/6qtRt9VdC2S8w5aFin1Vbe"
              },
              "href" : "https://api.spotify.com/v1/tracks/6qtRt9VdC2S8w5aFin1Vbe",
              "id" : "6qtRt9VdC2S8w5aFin1Vbe",
              "is_local" : false,
              "name" : "Final Light",
              "preview_url" : "https://p.scdn.co/mp3-preview/278ba34ec7795618597fc37cc373511e8c9d28eb?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 3,
              "type" : "track",
              "uri" : "spotify:track:6qtRt9VdC2S8w5aFin1Vbe"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ "AR", "BO", "BR", "CL", "CO", "CR", "DO", "EC", "GT", "HN", "MX", "NI", "PA", "PE", "PY", "SV", "UY" ],
              "disc_number" : 1,
              "duration_ms" : 296906,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/67JFGchljSsRlUWcY2F3PR"
              },
              "href" : "https://api.spotify.com/v1/tracks/67JFGchljSsRlUWcY2F3PR",
              "id" : "67JFGchljSsRlUWcY2F3PR",
              "is_local" : false,
              "name" : "Storm of Emotions",
              "preview_url" : "https://p.scdn.co/mp3-preview/c22fd0e3f304f84db4af44c36e4ceba5d89a5a55?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 4,
              "type" : "track",
              "uri" : "spotify:track:67JFGchljSsRlUWcY2F3PR"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ "AR", "BO", "BR", "CL", "CO", "CR", "DO", "EC", "GT", "HN", "MX", "NI", "PA", "PE", "PY", "SV", "UY" ],
              "disc_number" : 1,
              "duration_ms" : 288293,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/6nPMUwp7uZcb6KJiNwqdY9"
              },
              "href" : "https://api.spotify.com/v1/tracks/6nPMUwp7uZcb6KJiNwqdY9",
              "id" : "6nPMUwp7uZcb6KJiNwqdY9",
              "is_local" : false,
              "name" : "Violet Sky",
              "preview_url" : "https://p.scdn.co/mp3-preview/a2615cc347ef5b2ec9b21945ddc9d3df4a6c077b?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 5,
              "type" : "track",
              "uri" : "spotify:track:6nPMUwp7uZcb6KJiNwqdY9"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              }, {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/5Mbm3otSC2eWtbfbwOBgw4"
                },
                "href" : "https://api.spotify.com/v1/artists/5Mbm3otSC2eWtbfbwOBgw4",
                "id" : "5Mbm3otSC2eWtbfbwOBgw4",
                "name" : "Simone Simons",
                "type" : "artist",
                "uri" : "spotify:artist:5Mbm3otSC2eWtbfbwOBgw4"
              } ],
              "available_markets" : [ "AR", "BO", "BR", "CL", "CO", "CR", "DO", "EC", "GT", "HN", "MX", "NI", "PA", "PE", "PY", "SV", "UY" ],
              "disc_number" : 1,
              "duration_ms" : 243946,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/4lRMUX9Yi3OcrRBf1fOH7O"
              },
              "href" : "https://api.spotify.com/v1/tracks/4lRMUX9Yi3OcrRBf1fOH7O",
              "id" : "4lRMUX9Yi3OcrRBf1fOH7O",
              "is_local" : false,
              "name" : "Secret Garden",
              "preview_url" : "https://p.scdn.co/mp3-preview/bcaafbef924b3818b13ad27280e7bdc780cc35a8?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 6,
              "type" : "track",
              "uri" : "spotify:track:4lRMUX9Yi3OcrRBf1fOH7O"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ "AR", "BO", "BR", "CL", "CO", "CR", "DO", "EC", "GT", "HN", "MX", "NI", "PA", "PE", "PY", "SV", "UY" ],
              "disc_number" : 1,
              "duration_ms" : 388826,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/5V4L3ty5W9FaX3xQBBmfTm"
              },
              "href" : "https://api.spotify.com/v1/tracks/5V4L3ty5W9FaX3xQBBmfTm",
              "id" : "5V4L3ty5W9FaX3xQBBmfTm",
              "is_local" : false,
              "name" : "Upper Levels",
              "preview_url" : "https://p.scdn.co/mp3-preview/798f8169543bd7df219047136aa833b5ada9e7c2?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 7,
              "type" : "track",
              "uri" : "spotify:track:5V4L3ty5W9FaX3xQBBmfTm"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              }, {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/5GLeyUhj8B8f5pJxqZllKl"
                },
                "href" : "https://api.spotify.com/v1/artists/5GLeyUhj8B8f5pJxqZllKl",
                "id" : "5GLeyUhj8B8f5pJxqZllKl",
                "name" : "Doro",
                "type" : "artist",
                "uri" : "spotify:artist:5GLeyUhj8B8f5pJxqZllKl"
              } ],
              "available_markets" : [ "AR", "BO", "BR", "CL", "CO", "CR", "DO", "EC", "GT", "HN", "MX", "NI", "PA", "PE", "PY", "SV", "UY" ],
              "disc_number" : 1,
              "duration_ms" : 307093,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/18TyH4JNcLfEKCp11t9FbO"
              },
              "href" : "https://api.spotify.com/v1/tracks/18TyH4JNcLfEKCp11t9FbO",
              "id" : "18TyH4JNcLfEKCp11t9FbO",
              "is_local" : false,
              "name" : "Crushing Room",
              "preview_url" : "https://p.scdn.co/mp3-preview/933413051e14628fcc3430c598ccc70dccdf7c82?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 8,
              "type" : "track",
              "uri" : "spotify:track:18TyH4JNcLfEKCp11t9FbO"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ "AR", "BO", "BR", "CL", "CO", "CR", "DO", "EC", "GT", "HN", "MX", "NI", "PA", "PE", "PY", "SV", "UY" ],
              "disc_number" : 1,
              "duration_ms" : 262520,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/2lwRccgbgifX8dfsn5MQCh"
              },
              "href" : "https://api.spotify.com/v1/tracks/2lwRccgbgifX8dfsn5MQCh",
              "id" : "2lwRccgbgifX8dfsn5MQCh",
              "is_local" : false,
              "name" : "Perfect Symmetry",
              "preview_url" : "https://p.scdn.co/mp3-preview/8114ff057dbd3204b6a92694f045995be00ba4f2?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 9,
              "type" : "track",
              "uri" : "spotify:track:2lwRccgbgifX8dfsn5MQCh"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ "AR", "BO", "BR", "CL", "CO", "CR", "DO", "EC", "GT", "HN", "MX", "NI", "PA", "PE", "PY", "SV", "UY" ],
              "disc_number" : 1,
              "duration_ms" : 228600,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/3KWxRJ8JZuCQzEjHftcJ3P"
              },
              "href" : "https://api.spotify.com/v1/tracks/3KWxRJ8JZuCQzEjHftcJ3P",
              "id" : "3KWxRJ8JZuCQzEjHftcJ3P",
              "is_local" : false,
              "name" : "Silent Call",
              "preview_url" : "https://p.scdn.co/mp3-preview/e755a2b3b16b6eb9d066c6648d4cf788ade55e45?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 10,
              "type" : "track",
              "uri" : "spotify:track:3KWxRJ8JZuCQzEjHftcJ3P"
            } ],
            "limit" : 50,
            "next" : null,
            "offset" : 0,
            "previous" : null,
            "total" : 10
          },
          "type" : "album",
          "uri" : "spotify:album:4etZZGXgHo8lCSH5CEw6Z7"
        }
      }, {
        "added_at" : "2016-08-18T12:50:03Z",
        "album" : {
          "album_type" : "album",
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
            },
            "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
            "id" : "7IAXZaLTb6nkJr8RmVPn5y",
            "name" : "Angra",
            "type" : "artist",
            "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
          } ],
          "available_markets" : [ ],
          "copyrights" : [ {
            "text" : "2016 Angra",
            "type" : "C"
          }, {
            "text" : "2016 Angra",
            "type" : "P"
          } ],
          "external_ids" : {
            "upc" : "7891591007331"
          },
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/1GeC3JHufai87MqVhQbl7W"
          },
          "genres" : [ ],
          "href" : "https://api.spotify.com/v1/albums/1GeC3JHufai87MqVhQbl7W",
          "id" : "1GeC3JHufai87MqVhQbl7W",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b273015e713f634e9f099d8ed6f3",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e02015e713f634e9f099d8ed6f3",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d00004851015e713f634e9f099d8ed6f3",
            "width" : 64
          } ],
          "label" : "Angra",
          "name" : "Fireworks",
          "popularity" : 0,
          "release_date" : "1998-08-26",
          "release_date_precision" : "day",
          "total_tracks" : 10,
          "tracks" : {
            "href" : "https://api.spotify.com/v1/albums/1GeC3JHufai87MqVhQbl7W/tracks?offset=0&limit=50",
            "items" : [ {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 354466,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/5QLA3YbIsNGW4jn1ic3bAL"
              },
              "href" : "https://api.spotify.com/v1/tracks/5QLA3YbIsNGW4jn1ic3bAL",
              "id" : "5QLA3YbIsNGW4jn1ic3bAL",
              "is_local" : false,
              "name" : "Wings of Reality",
              "preview_url" : null,
              "track_number" : 1,
              "type" : "track",
              "uri" : "spotify:track:5QLA3YbIsNGW4jn1ic3bAL"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 365560,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/3PnqCb7EuD3Ba3a1EPqzBW"
              },
              "href" : "https://api.spotify.com/v1/tracks/3PnqCb7EuD3Ba3a1EPqzBW",
              "id" : "3PnqCb7EuD3Ba3a1EPqzBW",
              "is_local" : false,
              "name" : "Petrified Eyes",
              "preview_url" : null,
              "track_number" : 2,
              "type" : "track",
              "uri" : "spotify:track:3PnqCb7EuD3Ba3a1EPqzBW"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 313306,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/1nOA3CsRwtYvtDCyDCRf82"
              },
              "href" : "https://api.spotify.com/v1/tracks/1nOA3CsRwtYvtDCyDCRf82",
              "id" : "1nOA3CsRwtYvtDCyDCRf82",
              "is_local" : false,
              "name" : "Lisbon",
              "preview_url" : null,
              "track_number" : 3,
              "type" : "track",
              "uri" : "spotify:track:1nOA3CsRwtYvtDCyDCRf82"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 383600,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/09nGdFzsnNdHp4yOO2Livd"
              },
              "href" : "https://api.spotify.com/v1/tracks/09nGdFzsnNdHp4yOO2Livd",
              "id" : "09nGdFzsnNdHp4yOO2Livd",
              "is_local" : false,
              "name" : "Metal Icarus",
              "preview_url" : null,
              "track_number" : 4,
              "type" : "track",
              "uri" : "spotify:track:09nGdFzsnNdHp4yOO2Livd"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 458200,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/73fRaGSmpZlLfkyTSo1tfX"
              },
              "href" : "https://api.spotify.com/v1/tracks/73fRaGSmpZlLfkyTSo1tfX",
              "id" : "73fRaGSmpZlLfkyTSo1tfX",
              "is_local" : false,
              "name" : "Paradise",
              "preview_url" : null,
              "track_number" : 5,
              "type" : "track",
              "uri" : "spotify:track:73fRaGSmpZlLfkyTSo1tfX"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 251893,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/3VMSUG0CA2vc2SwfF9gPVq"
              },
              "href" : "https://api.spotify.com/v1/tracks/3VMSUG0CA2vc2SwfF9gPVq",
              "id" : "3VMSUG0CA2vc2SwfF9gPVq",
              "is_local" : false,
              "name" : "Mystery Machine",
              "preview_url" : null,
              "track_number" : 6,
              "type" : "track",
              "uri" : "spotify:track:3VMSUG0CA2vc2SwfF9gPVq"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 380800,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/0GNGcWOHOeS35KYO3jff9W"
              },
              "href" : "https://api.spotify.com/v1/tracks/0GNGcWOHOeS35KYO3jff9W",
              "id" : "0GNGcWOHOeS35KYO3jff9W",
              "is_local" : false,
              "name" : "Fireworks",
              "preview_url" : null,
              "track_number" : 7,
              "type" : "track",
              "uri" : "spotify:track:0GNGcWOHOeS35KYO3jff9W"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 256800,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/1hsxBKPcuRcTgV3yoMxJCW"
              },
              "href" : "https://api.spotify.com/v1/tracks/1hsxBKPcuRcTgV3yoMxJCW",
              "id" : "1hsxBKPcuRcTgV3yoMxJCW",
              "is_local" : false,
              "name" : "Extreme Dream",
              "preview_url" : null,
              "track_number" : 8,
              "type" : "track",
              "uri" : "spotify:track:1hsxBKPcuRcTgV3yoMxJCW"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 335733,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/1m6tRZ1CHckiNSw355JAp9"
              },
              "href" : "https://api.spotify.com/v1/tracks/1m6tRZ1CHckiNSw355JAp9",
              "id" : "1m6tRZ1CHckiNSw355JAp9",
              "is_local" : false,
              "name" : "Gentle Change",
              "preview_url" : null,
              "track_number" : 9,
              "type" : "track",
              "uri" : "spotify:track:1m6tRZ1CHckiNSw355JAp9"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 357600,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/2djOP0c8Df2CdxfdOuVULt"
              },
              "href" : "https://api.spotify.com/v1/tracks/2djOP0c8Df2CdxfdOuVULt",
              "id" : "2djOP0c8Df2CdxfdOuVULt",
              "is_local" : false,
              "name" : "Speed",
              "preview_url" : null,
              "track_number" : 10,
              "type" : "track",
              "uri" : "spotify:track:2djOP0c8Df2CdxfdOuVULt"
            } ],
            "limit" : 50,
            "next" : null,
            "offset" : 0,
            "previous" : null,
            "total" : 10
          },
          "type" : "album",
          "uri" : "spotify:album:1GeC3JHufai87MqVhQbl7W"
        }
      }, {
        "added_at" : "2016-08-18T12:50:01Z",
        "album" : {
          "album_type" : "album",
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
            },
            "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
            "id" : "7IAXZaLTb6nkJr8RmVPn5y",
            "name" : "Angra",
            "type" : "artist",
            "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
          } ],
          "available_markets" : [ ],
          "copyrights" : [ {
            "text" : "2016 Angra",
            "type" : "C"
          }, {
            "text" : "2016 Angra",
            "type" : "P"
          } ],
          "external_ids" : {
            "upc" : "7891591012731"
          },
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/5LYK5UzHjvyDl6G379HXQx"
          },
          "genres" : [ ],
          "href" : "https://api.spotify.com/v1/albums/5LYK5UzHjvyDl6G379HXQx",
          "id" : "5LYK5UzHjvyDl6G379HXQx",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b27395b947f0b39323c2c02dc380",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e0295b947f0b39323c2c02dc380",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d0000485195b947f0b39323c2c02dc380",
            "width" : 64
          } ],
          "label" : "Angra",
          "name" : "Rebirth",
          "popularity" : 0,
          "release_date" : "2001",
          "release_date_precision" : "year",
          "total_tracks" : 10,
          "tracks" : {
            "href" : "https://api.spotify.com/v1/albums/5LYK5UzHjvyDl6G379HXQx/tracks?offset=0&limit=50",
            "items" : [ {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 63146,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/47A0KWv6f3ygBEXtqPEtpd"
              },
              "href" : "https://api.spotify.com/v1/tracks/47A0KWv6f3ygBEXtqPEtpd",
              "id" : "47A0KWv6f3ygBEXtqPEtpd",
              "is_local" : false,
              "name" : "In Excelsis",
              "preview_url" : null,
              "track_number" : 1,
              "type" : "track",
              "uri" : "spotify:track:47A0KWv6f3ygBEXtqPEtpd"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 292120,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/0Ct2urZf4Ufmx6D8J2JBOJ"
              },
              "href" : "https://api.spotify.com/v1/tracks/0Ct2urZf4Ufmx6D8J2JBOJ",
              "id" : "0Ct2urZf4Ufmx6D8J2JBOJ",
              "is_local" : false,
              "name" : "Nova Era",
              "preview_url" : null,
              "track_number" : 2,
              "type" : "track",
              "uri" : "spotify:track:0Ct2urZf4Ufmx6D8J2JBOJ"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 311453,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/23epAZAytNRPvpcFDUxll0"
              },
              "href" : "https://api.spotify.com/v1/tracks/23epAZAytNRPvpcFDUxll0",
              "id" : "23epAZAytNRPvpcFDUxll0",
              "is_local" : false,
              "name" : "Millennium Sun",
              "preview_url" : null,
              "track_number" : 3,
              "type" : "track",
              "uri" : "spotify:track:23epAZAytNRPvpcFDUxll0"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 367826,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/3pd2dfAEc0yvxVVfkgnpec"
              },
              "href" : "https://api.spotify.com/v1/tracks/3pd2dfAEc0yvxVVfkgnpec",
              "id" : "3pd2dfAEc0yvxVVfkgnpec",
              "is_local" : false,
              "name" : "Acid Rain",
              "preview_url" : null,
              "track_number" : 4,
              "type" : "track",
              "uri" : "spotify:track:3pd2dfAEc0yvxVVfkgnpec"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 279346,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/1o47ACCZud6LNpl7ojb5GM"
              },
              "href" : "https://api.spotify.com/v1/tracks/1o47ACCZud6LNpl7ojb5GM",
              "id" : "1o47ACCZud6LNpl7ojb5GM",
              "is_local" : false,
              "name" : "Heroes of Sand",
              "preview_url" : null,
              "track_number" : 5,
              "type" : "track",
              "uri" : "spotify:track:1o47ACCZud6LNpl7ojb5GM"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 493893,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/1pOphLiy5aK3qx3soXn3m5"
              },
              "href" : "https://api.spotify.com/v1/tracks/1pOphLiy5aK3qx3soXn3m5",
              "id" : "1pOphLiy5aK3qx3soXn3m5",
              "is_local" : false,
              "name" : "Unholy Wars",
              "preview_url" : null,
              "track_number" : 6,
              "type" : "track",
              "uri" : "spotify:track:1pOphLiy5aK3qx3soXn3m5"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 317573,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/5QtswlcoTZAysUDdmv843Y"
              },
              "href" : "https://api.spotify.com/v1/tracks/5QtswlcoTZAysUDdmv843Y",
              "id" : "5QtswlcoTZAysUDdmv843Y",
              "is_local" : false,
              "name" : "Rebirth",
              "preview_url" : null,
              "track_number" : 7,
              "type" : "track",
              "uri" : "spotify:track:5QtswlcoTZAysUDdmv843Y"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 340173,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/5Z8N0IpqLpjfcw0PwEv23l"
              },
              "href" : "https://api.spotify.com/v1/tracks/5Z8N0IpqLpjfcw0PwEv23l",
              "id" : "5Z8N0IpqLpjfcw0PwEv23l",
              "is_local" : false,
              "name" : "Judgement Day",
              "preview_url" : null,
              "track_number" : 8,
              "type" : "track",
              "uri" : "spotify:track:5Z8N0IpqLpjfcw0PwEv23l"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 434173,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/13sYo83hMieU6PnehxkAkk"
              },
              "href" : "https://api.spotify.com/v1/tracks/13sYo83hMieU6PnehxkAkk",
              "id" : "13sYo83hMieU6PnehxkAkk",
              "is_local" : false,
              "name" : "Running Alone",
              "preview_url" : null,
              "track_number" : 9,
              "type" : "track",
              "uri" : "spotify:track:13sYo83hMieU6PnehxkAkk"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 272000,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/687g7kxIX3omF2zwJGW5Uh"
              },
              "href" : "https://api.spotify.com/v1/tracks/687g7kxIX3omF2zwJGW5Uh",
              "id" : "687g7kxIX3omF2zwJGW5Uh",
              "is_local" : false,
              "name" : "Visions Prelude",
              "preview_url" : null,
              "track_number" : 10,
              "type" : "track",
              "uri" : "spotify:track:687g7kxIX3omF2zwJGW5Uh"
            } ],
            "limit" : 50,
            "next" : null,
            "offset" : 0,
            "previous" : null,
            "total" : 10
          },
          "type" : "album",
          "uri" : "spotify:album:5LYK5UzHjvyDl6G379HXQx"
        }
      }, {
        "added_at" : "2016-08-18T12:49:59Z",
        "album" : {
          "album_type" : "single",
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
            },
            "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
            "id" : "7IAXZaLTb6nkJr8RmVPn5y",
            "name" : "Angra",
            "type" : "artist",
            "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
          } ],
          "available_markets" : [ ],
          "copyrights" : [ {
            "text" : "2016 Angra",
            "type" : "C"
          }, {
            "text" : "2016 Angra",
            "type" : "P"
          } ],
          "external_ids" : {
            "upc" : "7891591013844"
          },
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/4ZEODPg1MvmAplMUMd3bIh"
          },
          "genres" : [ ],
          "href" : "https://api.spotify.com/v1/albums/4ZEODPg1MvmAplMUMd3bIh",
          "id" : "4ZEODPg1MvmAplMUMd3bIh",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b273fdb294ec19fa022dc602d852",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e02fdb294ec19fa022dc602d852",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d00004851fdb294ec19fa022dc602d852",
            "width" : 64
          } ],
          "label" : "Angra",
          "name" : "Hunters and Prey",
          "popularity" : 0,
          "release_date" : "2002",
          "release_date_precision" : "year",
          "total_tracks" : 8,
          "tracks" : {
            "href" : "https://api.spotify.com/v1/albums/4ZEODPg1MvmAplMUMd3bIh/tracks?offset=0&limit=50",
            "items" : [ {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 252293,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/4YEC6FY1vtwW11INtXfEJo"
              },
              "href" : "https://api.spotify.com/v1/tracks/4YEC6FY1vtwW11INtXfEJo",
              "id" : "4YEC6FY1vtwW11INtXfEJo",
              "is_local" : false,
              "name" : "Live and Learn",
              "preview_url" : null,
              "track_number" : 1,
              "type" : "track",
              "uri" : "spotify:track:4YEC6FY1vtwW11INtXfEJo"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 244053,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/1DtMRYnTaLxKASua0QITjQ"
              },
              "href" : "https://api.spotify.com/v1/tracks/1DtMRYnTaLxKASua0QITjQ",
              "id" : "1DtMRYnTaLxKASua0QITjQ",
              "is_local" : false,
              "name" : "Bleeding Heart",
              "preview_url" : null,
              "track_number" : 2,
              "type" : "track",
              "uri" : "spotify:track:1DtMRYnTaLxKASua0QITjQ"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 389280,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/2s0xvV2rHF9Md86Qophvgi"
              },
              "href" : "https://api.spotify.com/v1/tracks/2s0xvV2rHF9Md86Qophvgi",
              "id" : "2s0xvV2rHF9Md86Qophvgi",
              "is_local" : false,
              "name" : "Hunters and Prey",
              "preview_url" : null,
              "track_number" : 3,
              "type" : "track",
              "uri" : "spotify:track:2s0xvV2rHF9Md86Qophvgi"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 255973,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/2hWCNgfeqUlYt4rL2dxCMo"
              },
              "href" : "https://api.spotify.com/v1/tracks/2hWCNgfeqUlYt4rL2dxCMo",
              "id" : "2hWCNgfeqUlYt4rL2dxCMo",
              "is_local" : false,
              "name" : "Eyes of Christ",
              "preview_url" : null,
              "track_number" : 4,
              "type" : "track",
              "uri" : "spotify:track:2hWCNgfeqUlYt4rL2dxCMo"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 215533,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/4lJYNNVlZ52BGsMmku6II9"
              },
              "href" : "https://api.spotify.com/v1/tracks/4lJYNNVlZ52BGsMmku6II9",
              "id" : "4lJYNNVlZ52BGsMmku6II9",
              "is_local" : false,
              "name" : "Rebirth (Acoustic Version)",
              "preview_url" : null,
              "track_number" : 5,
              "type" : "track",
              "uri" : "spotify:track:4lJYNNVlZ52BGsMmku6II9"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 230306,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/22yT8sbi6FnKpbjgYN3SSO"
              },
              "href" : "https://api.spotify.com/v1/tracks/22yT8sbi6FnKpbjgYN3SSO",
              "id" : "22yT8sbi6FnKpbjgYN3SSO",
              "is_local" : false,
              "name" : "Heroes of Sand (Acoustic Version)",
              "preview_url" : null,
              "track_number" : 6,
              "type" : "track",
              "uri" : "spotify:track:22yT8sbi6FnKpbjgYN3SSO"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 319973,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/0uw2vXjX4adozFT8nCuvSL"
              },
              "href" : "https://api.spotify.com/v1/tracks/0uw2vXjX4adozFT8nCuvSL",
              "id" : "0uw2vXjX4adozFT8nCuvSL",
              "is_local" : false,
              "name" : "Mama",
              "preview_url" : null,
              "track_number" : 7,
              "type" : "track",
              "uri" : "spotify:track:0uw2vXjX4adozFT8nCuvSL"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 388226,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/6ciKRkxCwmggMsESOU6C54"
              },
              "href" : "https://api.spotify.com/v1/tracks/6ciKRkxCwmggMsESOU6C54",
              "id" : "6ciKRkxCwmggMsESOU6C54",
              "is_local" : false,
              "name" : "Caça e Caçador",
              "preview_url" : null,
              "track_number" : 8,
              "type" : "track",
              "uri" : "spotify:track:6ciKRkxCwmggMsESOU6C54"
            } ],
            "limit" : 50,
            "next" : null,
            "offset" : 0,
            "previous" : null,
            "total" : 8
          },
          "type" : "album",
          "uri" : "spotify:album:4ZEODPg1MvmAplMUMd3bIh"
        }
      }, {
        "added_at" : "2016-08-18T12:49:57Z",
        "album" : {
          "album_type" : "album",
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
            },
            "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
            "id" : "7IAXZaLTb6nkJr8RmVPn5y",
            "name" : "Angra",
            "type" : "artist",
            "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
          } ],
          "available_markets" : [ ],
          "copyrights" : [ {
            "text" : "2016 Angra",
            "type" : "C"
          }, {
            "text" : "2016 Angra",
            "type" : "P"
          } ],
          "external_ids" : {
            "upc" : "7891591018795"
          },
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/0GrDqcN7QQlOwKMhQ0NIgg"
          },
          "genres" : [ ],
          "href" : "https://api.spotify.com/v1/albums/0GrDqcN7QQlOwKMhQ0NIgg",
          "id" : "0GrDqcN7QQlOwKMhQ0NIgg",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b273a928242eb0bba4c7d7352143",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e02a928242eb0bba4c7d7352143",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d00004851a928242eb0bba4c7d7352143",
            "width" : 64
          } ],
          "label" : "Angra",
          "name" : "Temple of Shadows",
          "popularity" : 0,
          "release_date" : "2004-11-15",
          "release_date_precision" : "day",
          "total_tracks" : 13,
          "tracks" : {
            "href" : "https://api.spotify.com/v1/albums/0GrDqcN7QQlOwKMhQ0NIgg/tracks?offset=0&limit=50",
            "items" : [ {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 52186,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/6ic6DpXmVjoluAoRSEgTxg"
              },
              "href" : "https://api.spotify.com/v1/tracks/6ic6DpXmVjoluAoRSEgTxg",
              "id" : "6ic6DpXmVjoluAoRSEgTxg",
              "is_local" : false,
              "name" : "Deus Le Volt!",
              "preview_url" : null,
              "track_number" : 1,
              "type" : "track",
              "uri" : "spotify:track:6ic6DpXmVjoluAoRSEgTxg"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 265373,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/7hqba4Inmu3vDyAGcMXdIk"
              },
              "href" : "https://api.spotify.com/v1/tracks/7hqba4Inmu3vDyAGcMXdIk",
              "id" : "7hqba4Inmu3vDyAGcMXdIk",
              "is_local" : false,
              "name" : "Spread Your Fire",
              "preview_url" : null,
              "track_number" : 2,
              "type" : "track",
              "uri" : "spotify:track:7hqba4Inmu3vDyAGcMXdIk"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 250933,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/3M4XenUa0UBObqJvm6xg2H"
              },
              "href" : "https://api.spotify.com/v1/tracks/3M4XenUa0UBObqJvm6xg2H",
              "id" : "3M4XenUa0UBObqJvm6xg2H",
              "is_local" : false,
              "name" : "Angels and Demons",
              "preview_url" : null,
              "track_number" : 3,
              "type" : "track",
              "uri" : "spotify:track:3M4XenUa0UBObqJvm6xg2H"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 295173,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/1i43NoFGtLDqsDn9ti5P85"
              },
              "href" : "https://api.spotify.com/v1/tracks/1i43NoFGtLDqsDn9ti5P85",
              "id" : "1i43NoFGtLDqsDn9ti5P85",
              "is_local" : false,
              "name" : "Waiting Silence",
              "preview_url" : null,
              "track_number" : 4,
              "type" : "track",
              "uri" : "spotify:track:1i43NoFGtLDqsDn9ti5P85"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 239573,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/2eA2TFlkrpBLMTMA3YFC3R"
              },
              "href" : "https://api.spotify.com/v1/tracks/2eA2TFlkrpBLMTMA3YFC3R",
              "id" : "2eA2TFlkrpBLMTMA3YFC3R",
              "is_local" : false,
              "name" : "Wishing Well",
              "preview_url" : null,
              "track_number" : 5,
              "type" : "track",
              "uri" : "spotify:track:2eA2TFlkrpBLMTMA3YFC3R"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 313440,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/0UgNzhymAxUJD51nsiDZHf"
              },
              "href" : "https://api.spotify.com/v1/tracks/0UgNzhymAxUJD51nsiDZHf",
              "id" : "0UgNzhymAxUJD51nsiDZHf",
              "is_local" : false,
              "name" : "The Temple of Hate",
              "preview_url" : null,
              "track_number" : 6,
              "type" : "track",
              "uri" : "spotify:track:0UgNzhymAxUJD51nsiDZHf"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 486493,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/39xrAQBUGR0s7hDO62YB03"
              },
              "href" : "https://api.spotify.com/v1/tracks/39xrAQBUGR0s7hDO62YB03",
              "id" : "39xrAQBUGR0s7hDO62YB03",
              "is_local" : false,
              "name" : "The Shadow Hunter",
              "preview_url" : null,
              "track_number" : 7,
              "type" : "track",
              "uri" : "spotify:track:39xrAQBUGR0s7hDO62YB03"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 305360,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/5dGZYQvgLbbs6wwIGkoaof"
              },
              "href" : "https://api.spotify.com/v1/tracks/5dGZYQvgLbbs6wwIGkoaof",
              "id" : "5dGZYQvgLbbs6wwIGkoaof",
              "is_local" : false,
              "name" : "No Pain for the Dead",
              "preview_url" : null,
              "track_number" : 8,
              "type" : "track",
              "uri" : "spotify:track:5dGZYQvgLbbs6wwIGkoaof"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 416346,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/17E7U1zrnDBjKJbWAtddcn"
              },
              "href" : "https://api.spotify.com/v1/tracks/17E7U1zrnDBjKJbWAtddcn",
              "id" : "17E7U1zrnDBjKJbWAtddcn",
              "is_local" : false,
              "name" : "Winds of Destination",
              "preview_url" : null,
              "track_number" : 9,
              "type" : "track",
              "uri" : "spotify:track:17E7U1zrnDBjKJbWAtddcn"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 309253,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/1iSSgJh8GGP40kouy5W9Ad"
              },
              "href" : "https://api.spotify.com/v1/tracks/1iSSgJh8GGP40kouy5W9Ad",
              "id" : "1iSSgJh8GGP40kouy5W9Ad",
              "is_local" : false,
              "name" : "Sprouts of Time",
              "preview_url" : null,
              "track_number" : 10,
              "type" : "track",
              "uri" : "spotify:track:1iSSgJh8GGP40kouy5W9Ad"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 459466,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/5fySa9DyXHxoHmbEIoQJ81"
              },
              "href" : "https://api.spotify.com/v1/tracks/5fySa9DyXHxoHmbEIoQJ81",
              "id" : "5fySa9DyXHxoHmbEIoQJ81",
              "is_local" : false,
              "name" : "Morning Star",
              "preview_url" : null,
              "track_number" : 11,
              "type" : "track",
              "uri" : "spotify:track:5fySa9DyXHxoHmbEIoQJ81"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 295346,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/5S4Nk50ZKo9TjK1836TKmN"
              },
              "href" : "https://api.spotify.com/v1/tracks/5S4Nk50ZKo9TjK1836TKmN",
              "id" : "5S4Nk50ZKo9TjK1836TKmN",
              "is_local" : false,
              "name" : "Late Redemption",
              "preview_url" : null,
              "track_number" : 12,
              "type" : "track",
              "uri" : "spotify:track:5S4Nk50ZKo9TjK1836TKmN"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
                },
                "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
                "id" : "7IAXZaLTb6nkJr8RmVPn5y",
                "name" : "Angra",
                "type" : "artist",
                "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 305586,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/2JT0QDMJDUYIuCmcY6je1L"
              },
              "href" : "https://api.spotify.com/v1/tracks/2JT0QDMJDUYIuCmcY6je1L",
              "id" : "2JT0QDMJDUYIuCmcY6je1L",
              "is_local" : false,
              "name" : "Gate Xiii",
              "preview_url" : null,
              "track_number" : 13,
              "type" : "track",
              "uri" : "spotify:track:2JT0QDMJDUYIuCmcY6je1L"
            } ],
            "limit" : 50,
            "next" : null,
            "offset" : 0,
            "previous" : null,
            "total" : 13
          },
          "type" : "album",
          "uri" : "spotify:album:0GrDqcN7QQlOwKMhQ0NIgg"
        }
      }, {
        "added_at" : "2016-08-14T11:27:33Z",
        "album" : {
          "album_type" : "album",
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/3LkSiHbjqOHCKCqBfEZOTv"
            },
            "href" : "https://api.spotify.com/v1/artists/3LkSiHbjqOHCKCqBfEZOTv",
            "id" : "3LkSiHbjqOHCKCqBfEZOTv",
            "name" : "Atreyu",
            "type" : "artist",
            "uri" : "spotify:artist:3LkSiHbjqOHCKCqBfEZOTv"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "UY", "VN", "XK", "ZA" ],
          "copyrights" : [ {
            "text" : "© 2015 Spinefarm Records",
            "type" : "C"
          }, {
            "text" : "℗ 2015 Spinefarm Records",
            "type" : "P"
          } ],
          "external_ids" : {
            "upc" : "00602547428226"
          },
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/03JyddDpHtjQkNFdTzsdYj"
          },
          "genres" : [ ],
          "href" : "https://api.spotify.com/v1/albums/03JyddDpHtjQkNFdTzsdYj",
          "id" : "03JyddDpHtjQkNFdTzsdYj",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b2738f29c9314d92877be085aad0",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e028f29c9314d92877be085aad0",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d000048518f29c9314d92877be085aad0",
            "width" : 64
          } ],
          "label" : "Spinefarm Records UK",
          "name" : "Long Live",
          "popularity" : 37,
          "release_date" : "2015-09-18",
          "release_date_precision" : "day",
          "total_tracks" : 13,
          "tracks" : {
            "href" : "https://api.spotify.com/v1/albums/03JyddDpHtjQkNFdTzsdYj/tracks?offset=0&limit=50",
            "items" : [ {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/3LkSiHbjqOHCKCqBfEZOTv"
                },
                "href" : "https://api.spotify.com/v1/artists/3LkSiHbjqOHCKCqBfEZOTv",
                "id" : "3LkSiHbjqOHCKCqBfEZOTv",
                "name" : "Atreyu",
                "type" : "artist",
                "uri" : "spotify:artist:3LkSiHbjqOHCKCqBfEZOTv"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 208813,
              "explicit" : true,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/5snX18n2ECdzcGvWLeZOtB"
              },
              "href" : "https://api.spotify.com/v1/tracks/5snX18n2ECdzcGvWLeZOtB",
              "id" : "5snX18n2ECdzcGvWLeZOtB",
              "is_local" : false,
              "name" : "Long Live",
              "preview_url" : "https://p.scdn.co/mp3-preview/cbd86dea58e008d54dbeff214688b067da5d5dda?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 1,
              "type" : "track",
              "uri" : "spotify:track:5snX18n2ECdzcGvWLeZOtB"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/3LkSiHbjqOHCKCqBfEZOTv"
                },
                "href" : "https://api.spotify.com/v1/artists/3LkSiHbjqOHCKCqBfEZOTv",
                "id" : "3LkSiHbjqOHCKCqBfEZOTv",
                "name" : "Atreyu",
                "type" : "artist",
                "uri" : "spotify:artist:3LkSiHbjqOHCKCqBfEZOTv"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 193960,
              "explicit" : true,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/3vgAzbPGiua21kvK6AXdW4"
              },
              "href" : "https://api.spotify.com/v1/tracks/3vgAzbPGiua21kvK6AXdW4",
              "id" : "3vgAzbPGiua21kvK6AXdW4",
              "is_local" : false,
              "name" : "Live To Labor",
              "preview_url" : "https://p.scdn.co/mp3-preview/3ad654221ced25b1a036158ccbce390c2b6d1671?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 2,
              "type" : "track",
              "uri" : "spotify:track:3vgAzbPGiua21kvK6AXdW4"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/3LkSiHbjqOHCKCqBfEZOTv"
                },
                "href" : "https://api.spotify.com/v1/artists/3LkSiHbjqOHCKCqBfEZOTv",
                "id" : "3LkSiHbjqOHCKCqBfEZOTv",
                "name" : "Atreyu",
                "type" : "artist",
                "uri" : "spotify:artist:3LkSiHbjqOHCKCqBfEZOTv"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 250560,
              "explicit" : true,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/0nueKMOLtswt5iYctjOXIt"
              },
              "href" : "https://api.spotify.com/v1/tracks/0nueKMOLtswt5iYctjOXIt",
              "id" : "0nueKMOLtswt5iYctjOXIt",
              "is_local" : false,
              "name" : "I Would Kill / Lie / Die (For You)",
              "preview_url" : "https://p.scdn.co/mp3-preview/002a09cc99b1fb3b8e6f8e4b3ecfb2be4d958d94?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 3,
              "type" : "track",
              "uri" : "spotify:track:0nueKMOLtswt5iYctjOXIt"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/3LkSiHbjqOHCKCqBfEZOTv"
                },
                "href" : "https://api.spotify.com/v1/artists/3LkSiHbjqOHCKCqBfEZOTv",
                "id" : "3LkSiHbjqOHCKCqBfEZOTv",
                "name" : "Atreyu",
                "type" : "artist",
                "uri" : "spotify:artist:3LkSiHbjqOHCKCqBfEZOTv"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 300173,
              "explicit" : true,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/08Um7KYjq8IVmMqZtrqgpe"
              },
              "href" : "https://api.spotify.com/v1/tracks/08Um7KYjq8IVmMqZtrqgpe",
              "id" : "08Um7KYjq8IVmMqZtrqgpe",
              "is_local" : false,
              "name" : "Cut Off The Head",
              "preview_url" : "https://p.scdn.co/mp3-preview/df44306b383d02f51b4435cab43895fb1b7b5b39?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 4,
              "type" : "track",
              "uri" : "spotify:track:08Um7KYjq8IVmMqZtrqgpe"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/3LkSiHbjqOHCKCqBfEZOTv"
                },
                "href" : "https://api.spotify.com/v1/artists/3LkSiHbjqOHCKCqBfEZOTv",
                "id" : "3LkSiHbjqOHCKCqBfEZOTv",
                "name" : "Atreyu",
                "type" : "artist",
                "uri" : "spotify:artist:3LkSiHbjqOHCKCqBfEZOTv"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 238240,
              "explicit" : true,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/4hoJZGacRRUJDHivc276Ef"
              },
              "href" : "https://api.spotify.com/v1/tracks/4hoJZGacRRUJDHivc276Ef",
              "id" : "4hoJZGacRRUJDHivc276Ef",
              "is_local" : false,
              "name" : "A Bitter Broken Memory",
              "preview_url" : "https://p.scdn.co/mp3-preview/295348eae91fd1727960692ad7a38cd8feaf6a3c?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 5,
              "type" : "track",
              "uri" : "spotify:track:4hoJZGacRRUJDHivc276Ef"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/3LkSiHbjqOHCKCqBfEZOTv"
                },
                "href" : "https://api.spotify.com/v1/artists/3LkSiHbjqOHCKCqBfEZOTv",
                "id" : "3LkSiHbjqOHCKCqBfEZOTv",
                "name" : "Atreyu",
                "type" : "artist",
                "uri" : "spotify:artist:3LkSiHbjqOHCKCqBfEZOTv"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 230920,
              "explicit" : true,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/7KZzsjWcP5DytrULMbhcRh"
              },
              "href" : "https://api.spotify.com/v1/tracks/7KZzsjWcP5DytrULMbhcRh",
              "id" : "7KZzsjWcP5DytrULMbhcRh",
              "is_local" : false,
              "name" : "Do You Know Who You Are?",
              "preview_url" : "https://p.scdn.co/mp3-preview/960e3742cb264c083cccf5ae67649c271a4ec1bc?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 6,
              "type" : "track",
              "uri" : "spotify:track:7KZzsjWcP5DytrULMbhcRh"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/3LkSiHbjqOHCKCqBfEZOTv"
                },
                "href" : "https://api.spotify.com/v1/artists/3LkSiHbjqOHCKCqBfEZOTv",
                "id" : "3LkSiHbjqOHCKCqBfEZOTv",
                "name" : "Atreyu",
                "type" : "artist",
                "uri" : "spotify:artist:3LkSiHbjqOHCKCqBfEZOTv"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 101986,
              "explicit" : true,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/6L3ss1WT6mZdoMx2qnuxVy"
              },
              "href" : "https://api.spotify.com/v1/tracks/6L3ss1WT6mZdoMx2qnuxVy",
              "id" : "6L3ss1WT6mZdoMx2qnuxVy",
              "is_local" : false,
              "name" : "Revival",
              "preview_url" : "https://p.scdn.co/mp3-preview/985b724500c58b74ee5cf22ef4211cfe23951e60?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 7,
              "type" : "track",
              "uri" : "spotify:track:6L3ss1WT6mZdoMx2qnuxVy"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/3LkSiHbjqOHCKCqBfEZOTv"
                },
                "href" : "https://api.spotify.com/v1/artists/3LkSiHbjqOHCKCqBfEZOTv",
                "id" : "3LkSiHbjqOHCKCqBfEZOTv",
                "name" : "Atreyu",
                "type" : "artist",
                "uri" : "spotify:artist:3LkSiHbjqOHCKCqBfEZOTv"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 219640,
              "explicit" : true,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/3tTJLNHT5LxmGzeTUoHs3x"
              },
              "href" : "https://api.spotify.com/v1/tracks/3tTJLNHT5LxmGzeTUoHs3x",
              "id" : "3tTJLNHT5LxmGzeTUoHs3x",
              "is_local" : false,
              "name" : "Heartbeats And Flatlines",
              "preview_url" : "https://p.scdn.co/mp3-preview/05bd21bd6bfe89ae617599e2e9e3277538951fa9?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 8,
              "type" : "track",
              "uri" : "spotify:track:3tTJLNHT5LxmGzeTUoHs3x"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/3LkSiHbjqOHCKCqBfEZOTv"
                },
                "href" : "https://api.spotify.com/v1/artists/3LkSiHbjqOHCKCqBfEZOTv",
                "id" : "3LkSiHbjqOHCKCqBfEZOTv",
                "name" : "Atreyu",
                "type" : "artist",
                "uri" : "spotify:artist:3LkSiHbjqOHCKCqBfEZOTv"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 208186,
              "explicit" : true,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/1JCVWQVT71anjHla7WOfQX"
              },
              "href" : "https://api.spotify.com/v1/tracks/1JCVWQVT71anjHla7WOfQX",
              "id" : "1JCVWQVT71anjHla7WOfQX",
              "is_local" : false,
              "name" : "Brass Balls",
              "preview_url" : "https://p.scdn.co/mp3-preview/9f6cc6fd5528d78ecc06c8ecc4900c1f7d9c9479?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 9,
              "type" : "track",
              "uri" : "spotify:track:1JCVWQVT71anjHla7WOfQX"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/3LkSiHbjqOHCKCqBfEZOTv"
                },
                "href" : "https://api.spotify.com/v1/artists/3LkSiHbjqOHCKCqBfEZOTv",
                "id" : "3LkSiHbjqOHCKCqBfEZOTv",
                "name" : "Atreyu",
                "type" : "artist",
                "uri" : "spotify:artist:3LkSiHbjqOHCKCqBfEZOTv"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 325306,
              "explicit" : true,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/4sIgRmQUyECjaMGcqc94iP"
              },
              "href" : "https://api.spotify.com/v1/tracks/4sIgRmQUyECjaMGcqc94iP",
              "id" : "4sIgRmQUyECjaMGcqc94iP",
              "is_local" : false,
              "name" : "Moments Before Dawn",
              "preview_url" : "https://p.scdn.co/mp3-preview/9722bbe4a3f19d8e8a4ed2126623318423b2e375?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 10,
              "type" : "track",
              "uri" : "spotify:track:4sIgRmQUyECjaMGcqc94iP"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/3LkSiHbjqOHCKCqBfEZOTv"
                },
                "href" : "https://api.spotify.com/v1/artists/3LkSiHbjqOHCKCqBfEZOTv",
                "id" : "3LkSiHbjqOHCKCqBfEZOTv",
                "name" : "Atreyu",
                "type" : "artist",
                "uri" : "spotify:artist:3LkSiHbjqOHCKCqBfEZOTv"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 280520,
              "explicit" : true,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/7gIajyfGcFpqpPJglySdl7"
              },
              "href" : "https://api.spotify.com/v1/tracks/7gIajyfGcFpqpPJglySdl7",
              "id" : "7gIajyfGcFpqpPJglySdl7",
              "is_local" : false,
              "name" : "Start To Break",
              "preview_url" : "https://p.scdn.co/mp3-preview/3e7ee04f20a557656321b1dcb740e3a517d6e2ff?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 11,
              "type" : "track",
              "uri" : "spotify:track:7gIajyfGcFpqpPJglySdl7"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/3LkSiHbjqOHCKCqBfEZOTv"
                },
                "href" : "https://api.spotify.com/v1/artists/3LkSiHbjqOHCKCqBfEZOTv",
                "id" : "3LkSiHbjqOHCKCqBfEZOTv",
                "name" : "Atreyu",
                "type" : "artist",
                "uri" : "spotify:artist:3LkSiHbjqOHCKCqBfEZOTv"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 271040,
              "explicit" : true,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/70GjbJwzHQJ4mI1JDDgrRU"
              },
              "href" : "https://api.spotify.com/v1/tracks/70GjbJwzHQJ4mI1JDDgrRU",
              "id" : "70GjbJwzHQJ4mI1JDDgrRU",
              "is_local" : false,
              "name" : "Reckless",
              "preview_url" : "https://p.scdn.co/mp3-preview/759d32b28edab61fd2825d7562cd35fdde11fb20?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 12,
              "type" : "track",
              "uri" : "spotify:track:70GjbJwzHQJ4mI1JDDgrRU"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/3LkSiHbjqOHCKCqBfEZOTv"
                },
                "href" : "https://api.spotify.com/v1/artists/3LkSiHbjqOHCKCqBfEZOTv",
                "id" : "3LkSiHbjqOHCKCqBfEZOTv",
                "name" : "Atreyu",
                "type" : "artist",
                "uri" : "spotify:artist:3LkSiHbjqOHCKCqBfEZOTv"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 258693,
              "explicit" : true,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/66EHjkZDI0SMsVZckYem3b"
              },
              "href" : "https://api.spotify.com/v1/tracks/66EHjkZDI0SMsVZckYem3b",
              "id" : "66EHjkZDI0SMsVZckYem3b",
              "is_local" : false,
              "name" : "So Others May Live",
              "preview_url" : "https://p.scdn.co/mp3-preview/2611743f217e9afa8aba82cddf5a81ef789b06c2?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 13,
              "type" : "track",
              "uri" : "spotify:track:66EHjkZDI0SMsVZckYem3b"
            } ],
            "limit" : 50,
            "next" : null,
            "offset" : 0,
            "previous" : null,
            "total" : 13
          },
          "type" : "album",
          "uri" : "spotify:album:03JyddDpHtjQkNFdTzsdYj"
        }
      }, {
        "added_at" : "2016-07-30T01:33:56Z",
        "album" : {
          "album_type" : "album",
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/0pjLiK5qb4Zr0PWRNkdd2o"
            },
            "href" : "https://api.spotify.com/v1/artists/0pjLiK5qb4Zr0PWRNkdd2o",
            "id" : "0pjLiK5qb4Zr0PWRNkdd2o",
            "name" : "Gaither Vocal Band",
            "type" : "artist",
            "uri" : "spotify:artist:0pjLiK5qb4Zr0PWRNkdd2o"
          } ],
          "available_markets" : [ ],
          "copyrights" : [ {
            "text" : "© 2016 Spring House Music Group",
            "type" : "C"
          }, {
            "text" : "℗ 2016 Spring House Music Group",
            "type" : "P"
          } ],
          "external_ids" : {
            "upc" : "00617884023416"
          },
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/6E0ayqmlTPNMUZQpeUIUGC"
          },
          "genres" : [ ],
          "href" : "https://api.spotify.com/v1/albums/6E0ayqmlTPNMUZQpeUIUGC",
          "id" : "6E0ayqmlTPNMUZQpeUIUGC",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b273f3341121544c085e00dee46f",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e02f3341121544c085e00dee46f",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d00004851f3341121544c085e00dee46f",
            "width" : 64
          } ],
          "label" : "Universal Music Group",
          "name" : "The Ultimate Playlist",
          "popularity" : 0,
          "release_date" : "2016-04-29",
          "release_date_precision" : "day",
          "total_tracks" : 20,
          "tracks" : {
            "href" : "https://api.spotify.com/v1/albums/6E0ayqmlTPNMUZQpeUIUGC/tracks?offset=0&limit=50",
            "items" : [ {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/0pjLiK5qb4Zr0PWRNkdd2o"
                },
                "href" : "https://api.spotify.com/v1/artists/0pjLiK5qb4Zr0PWRNkdd2o",
                "id" : "0pjLiK5qb4Zr0PWRNkdd2o",
                "name" : "Gaither Vocal Band",
                "type" : "artist",
                "uri" : "spotify:artist:0pjLiK5qb4Zr0PWRNkdd2o"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 189213,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/3GQ3lKotZ3tVfYq2XeF7Xc"
              },
              "href" : "https://api.spotify.com/v1/tracks/3GQ3lKotZ3tVfYq2XeF7Xc",
              "id" : "3GQ3lKotZ3tVfYq2XeF7Xc",
              "is_local" : false,
              "name" : "He Touched Me",
              "preview_url" : null,
              "track_number" : 1,
              "type" : "track",
              "uri" : "spotify:track:3GQ3lKotZ3tVfYq2XeF7Xc"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/0pjLiK5qb4Zr0PWRNkdd2o"
                },
                "href" : "https://api.spotify.com/v1/artists/0pjLiK5qb4Zr0PWRNkdd2o",
                "id" : "0pjLiK5qb4Zr0PWRNkdd2o",
                "name" : "Gaither Vocal Band",
                "type" : "artist",
                "uri" : "spotify:artist:0pjLiK5qb4Zr0PWRNkdd2o"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 274760,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/5kgV49WZDBAMn8I1HRT111"
              },
              "href" : "https://api.spotify.com/v1/tracks/5kgV49WZDBAMn8I1HRT111",
              "id" : "5kgV49WZDBAMn8I1HRT111",
              "is_local" : false,
              "name" : "Alpha And Omega",
              "preview_url" : null,
              "track_number" : 2,
              "type" : "track",
              "uri" : "spotify:track:5kgV49WZDBAMn8I1HRT111"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/0pjLiK5qb4Zr0PWRNkdd2o"
                },
                "href" : "https://api.spotify.com/v1/artists/0pjLiK5qb4Zr0PWRNkdd2o",
                "id" : "0pjLiK5qb4Zr0PWRNkdd2o",
                "name" : "Gaither Vocal Band",
                "type" : "artist",
                "uri" : "spotify:artist:0pjLiK5qb4Zr0PWRNkdd2o"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 311040,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/19QlV45LYieIz5wDWXy8nD"
              },
              "href" : "https://api.spotify.com/v1/tracks/19QlV45LYieIz5wDWXy8nD",
              "id" : "19QlV45LYieIz5wDWXy8nD",
              "is_local" : false,
              "name" : "You Are My All In All/Canon In D - Medley",
              "preview_url" : null,
              "track_number" : 3,
              "type" : "track",
              "uri" : "spotify:track:19QlV45LYieIz5wDWXy8nD"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/0pjLiK5qb4Zr0PWRNkdd2o"
                },
                "href" : "https://api.spotify.com/v1/artists/0pjLiK5qb4Zr0PWRNkdd2o",
                "id" : "0pjLiK5qb4Zr0PWRNkdd2o",
                "name" : "Gaither Vocal Band",
                "type" : "artist",
                "uri" : "spotify:artist:0pjLiK5qb4Zr0PWRNkdd2o"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 214853,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/6KbS2F4cCish0VlrYOjXI1"
              },
              "href" : "https://api.spotify.com/v1/tracks/6KbS2F4cCish0VlrYOjXI1",
              "id" : "6KbS2F4cCish0VlrYOjXI1",
              "is_local" : false,
              "name" : "Because He Lives",
              "preview_url" : null,
              "track_number" : 4,
              "type" : "track",
              "uri" : "spotify:track:6KbS2F4cCish0VlrYOjXI1"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/0pjLiK5qb4Zr0PWRNkdd2o"
                },
                "href" : "https://api.spotify.com/v1/artists/0pjLiK5qb4Zr0PWRNkdd2o",
                "id" : "0pjLiK5qb4Zr0PWRNkdd2o",
                "name" : "Gaither Vocal Band",
                "type" : "artist",
                "uri" : "spotify:artist:0pjLiK5qb4Zr0PWRNkdd2o"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 339666,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/4HWwkcrZtXwNHzWGEFcfHJ"
              },
              "href" : "https://api.spotify.com/v1/tracks/4HWwkcrZtXwNHzWGEFcfHJ",
              "id" : "4HWwkcrZtXwNHzWGEFcfHJ",
              "is_local" : false,
              "name" : "Sometimes It Takes A Mountain",
              "preview_url" : null,
              "track_number" : 5,
              "type" : "track",
              "uri" : "spotify:track:4HWwkcrZtXwNHzWGEFcfHJ"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/0pjLiK5qb4Zr0PWRNkdd2o"
                },
                "href" : "https://api.spotify.com/v1/artists/0pjLiK5qb4Zr0PWRNkdd2o",
                "id" : "0pjLiK5qb4Zr0PWRNkdd2o",
                "name" : "Gaither Vocal Band",
                "type" : "artist",
                "uri" : "spotify:artist:0pjLiK5qb4Zr0PWRNkdd2o"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 206426,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/1fLkWpdkK3qGkHRUcbDOtu"
              },
              "href" : "https://api.spotify.com/v1/tracks/1fLkWpdkK3qGkHRUcbDOtu",
              "id" : "1fLkWpdkK3qGkHRUcbDOtu",
              "is_local" : false,
              "name" : "I Believe In A Hill Called Mount Calvary",
              "preview_url" : null,
              "track_number" : 6,
              "type" : "track",
              "uri" : "spotify:track:1fLkWpdkK3qGkHRUcbDOtu"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/0pjLiK5qb4Zr0PWRNkdd2o"
                },
                "href" : "https://api.spotify.com/v1/artists/0pjLiK5qb4Zr0PWRNkdd2o",
                "id" : "0pjLiK5qb4Zr0PWRNkdd2o",
                "name" : "Gaither Vocal Band",
                "type" : "artist",
                "uri" : "spotify:artist:0pjLiK5qb4Zr0PWRNkdd2o"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 229786,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/7DEe171hIs15iHGxSvCTiW"
              },
              "href" : "https://api.spotify.com/v1/tracks/7DEe171hIs15iHGxSvCTiW",
              "id" : "7DEe171hIs15iHGxSvCTiW",
              "is_local" : false,
              "name" : "Amazing Grace",
              "preview_url" : null,
              "track_number" : 7,
              "type" : "track",
              "uri" : "spotify:track:7DEe171hIs15iHGxSvCTiW"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/0pjLiK5qb4Zr0PWRNkdd2o"
                },
                "href" : "https://api.spotify.com/v1/artists/0pjLiK5qb4Zr0PWRNkdd2o",
                "id" : "0pjLiK5qb4Zr0PWRNkdd2o",
                "name" : "Gaither Vocal Band",
                "type" : "artist",
                "uri" : "spotify:artist:0pjLiK5qb4Zr0PWRNkdd2o"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 312866,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/32KH1yTHCg5zQ8u0b41spw"
              },
              "href" : "https://api.spotify.com/v1/tracks/32KH1yTHCg5zQ8u0b41spw",
              "id" : "32KH1yTHCg5zQ8u0b41spw",
              "is_local" : false,
              "name" : "The King Is Coming",
              "preview_url" : null,
              "track_number" : 8,
              "type" : "track",
              "uri" : "spotify:track:32KH1yTHCg5zQ8u0b41spw"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/0pjLiK5qb4Zr0PWRNkdd2o"
                },
                "href" : "https://api.spotify.com/v1/artists/0pjLiK5qb4Zr0PWRNkdd2o",
                "id" : "0pjLiK5qb4Zr0PWRNkdd2o",
                "name" : "Gaither Vocal Band",
                "type" : "artist",
                "uri" : "spotify:artist:0pjLiK5qb4Zr0PWRNkdd2o"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 265693,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/5v62NHXvvaeMo7998DeM1O"
              },
              "href" : "https://api.spotify.com/v1/tracks/5v62NHXvvaeMo7998DeM1O",
              "id" : "5v62NHXvvaeMo7998DeM1O",
              "is_local" : false,
              "name" : "When I Cry",
              "preview_url" : null,
              "track_number" : 9,
              "type" : "track",
              "uri" : "spotify:track:5v62NHXvvaeMo7998DeM1O"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/0pjLiK5qb4Zr0PWRNkdd2o"
                },
                "href" : "https://api.spotify.com/v1/artists/0pjLiK5qb4Zr0PWRNkdd2o",
                "id" : "0pjLiK5qb4Zr0PWRNkdd2o",
                "name" : "Gaither Vocal Band",
                "type" : "artist",
                "uri" : "spotify:artist:0pjLiK5qb4Zr0PWRNkdd2o"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 291720,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/1n1ccwQg4d8XbbiO326zJk"
              },
              "href" : "https://api.spotify.com/v1/tracks/1n1ccwQg4d8XbbiO326zJk",
              "id" : "1n1ccwQg4d8XbbiO326zJk",
              "is_local" : false,
              "name" : "At The Cross",
              "preview_url" : null,
              "track_number" : 10,
              "type" : "track",
              "uri" : "spotify:track:1n1ccwQg4d8XbbiO326zJk"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/0pjLiK5qb4Zr0PWRNkdd2o"
                },
                "href" : "https://api.spotify.com/v1/artists/0pjLiK5qb4Zr0PWRNkdd2o",
                "id" : "0pjLiK5qb4Zr0PWRNkdd2o",
                "name" : "Gaither Vocal Band",
                "type" : "artist",
                "uri" : "spotify:artist:0pjLiK5qb4Zr0PWRNkdd2o"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 247533,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/0g9fEpD50NrGUkhZXJqwkw"
              },
              "href" : "https://api.spotify.com/v1/tracks/0g9fEpD50NrGUkhZXJqwkw",
              "id" : "0g9fEpD50NrGUkhZXJqwkw",
              "is_local" : false,
              "name" : "A Few Good Men",
              "preview_url" : null,
              "track_number" : 11,
              "type" : "track",
              "uri" : "spotify:track:0g9fEpD50NrGUkhZXJqwkw"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/0pjLiK5qb4Zr0PWRNkdd2o"
                },
                "href" : "https://api.spotify.com/v1/artists/0pjLiK5qb4Zr0PWRNkdd2o",
                "id" : "0pjLiK5qb4Zr0PWRNkdd2o",
                "name" : "Gaither Vocal Band",
                "type" : "artist",
                "uri" : "spotify:artist:0pjLiK5qb4Zr0PWRNkdd2o"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 210733,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/0sk8C9xjSwitq6xD8MjISt"
              },
              "href" : "https://api.spotify.com/v1/tracks/0sk8C9xjSwitq6xD8MjISt",
              "id" : "0sk8C9xjSwitq6xD8MjISt",
              "is_local" : false,
              "name" : "‘Til The Storm Passes By",
              "preview_url" : null,
              "track_number" : 12,
              "type" : "track",
              "uri" : "spotify:track:0sk8C9xjSwitq6xD8MjISt"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/0pjLiK5qb4Zr0PWRNkdd2o"
                },
                "href" : "https://api.spotify.com/v1/artists/0pjLiK5qb4Zr0PWRNkdd2o",
                "id" : "0pjLiK5qb4Zr0PWRNkdd2o",
                "name" : "Gaither Vocal Band",
                "type" : "artist",
                "uri" : "spotify:artist:0pjLiK5qb4Zr0PWRNkdd2o"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 170466,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/5V7CGLhdeGTy7mSBB48m5h"
              },
              "href" : "https://api.spotify.com/v1/tracks/5V7CGLhdeGTy7mSBB48m5h",
              "id" : "5V7CGLhdeGTy7mSBB48m5h",
              "is_local" : false,
              "name" : "I’ll Fly Away",
              "preview_url" : null,
              "track_number" : 13,
              "type" : "track",
              "uri" : "spotify:track:5V7CGLhdeGTy7mSBB48m5h"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/0pjLiK5qb4Zr0PWRNkdd2o"
                },
                "href" : "https://api.spotify.com/v1/artists/0pjLiK5qb4Zr0PWRNkdd2o",
                "id" : "0pjLiK5qb4Zr0PWRNkdd2o",
                "name" : "Gaither Vocal Band",
                "type" : "artist",
                "uri" : "spotify:artist:0pjLiK5qb4Zr0PWRNkdd2o"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 174253,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/0Ib9ig9t7dpYYUCyNiOO08"
              },
              "href" : "https://api.spotify.com/v1/tracks/0Ib9ig9t7dpYYUCyNiOO08",
              "id" : "0Ib9ig9t7dpYYUCyNiOO08",
              "is_local" : false,
              "name" : "Redeemed",
              "preview_url" : null,
              "track_number" : 14,
              "type" : "track",
              "uri" : "spotify:track:0Ib9ig9t7dpYYUCyNiOO08"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/0pjLiK5qb4Zr0PWRNkdd2o"
                },
                "href" : "https://api.spotify.com/v1/artists/0pjLiK5qb4Zr0PWRNkdd2o",
                "id" : "0pjLiK5qb4Zr0PWRNkdd2o",
                "name" : "Gaither Vocal Band",
                "type" : "artist",
                "uri" : "spotify:artist:0pjLiK5qb4Zr0PWRNkdd2o"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 164066,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/0pSXWPBKUjSOexglmFQXuP"
              },
              "href" : "https://api.spotify.com/v1/tracks/0pSXWPBKUjSOexglmFQXuP",
              "id" : "0pSXWPBKUjSOexglmFQXuP",
              "is_local" : false,
              "name" : "Happy Rhythm",
              "preview_url" : null,
              "track_number" : 15,
              "type" : "track",
              "uri" : "spotify:track:0pSXWPBKUjSOexglmFQXuP"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/0pjLiK5qb4Zr0PWRNkdd2o"
                },
                "href" : "https://api.spotify.com/v1/artists/0pjLiK5qb4Zr0PWRNkdd2o",
                "id" : "0pjLiK5qb4Zr0PWRNkdd2o",
                "name" : "Gaither Vocal Band",
                "type" : "artist",
                "uri" : "spotify:artist:0pjLiK5qb4Zr0PWRNkdd2o"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 276906,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/3E8mTOoQRNMZrQNALTo5Kw"
              },
              "href" : "https://api.spotify.com/v1/tracks/3E8mTOoQRNMZrQNALTo5Kw",
              "id" : "3E8mTOoQRNMZrQNALTo5Kw",
              "is_local" : false,
              "name" : "The Old Rugged Cross",
              "preview_url" : null,
              "track_number" : 16,
              "type" : "track",
              "uri" : "spotify:track:3E8mTOoQRNMZrQNALTo5Kw"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/0pjLiK5qb4Zr0PWRNkdd2o"
                },
                "href" : "https://api.spotify.com/v1/artists/0pjLiK5qb4Zr0PWRNkdd2o",
                "id" : "0pjLiK5qb4Zr0PWRNkdd2o",
                "name" : "Gaither Vocal Band",
                "type" : "artist",
                "uri" : "spotify:artist:0pjLiK5qb4Zr0PWRNkdd2o"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 332840,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/5JQKIPlVFvw2I9b3ncFyby"
              },
              "href" : "https://api.spotify.com/v1/tracks/5JQKIPlVFvw2I9b3ncFyby",
              "id" : "5JQKIPlVFvw2I9b3ncFyby",
              "is_local" : false,
              "name" : "Sinner Saved By Grace",
              "preview_url" : null,
              "track_number" : 17,
              "type" : "track",
              "uri" : "spotify:track:5JQKIPlVFvw2I9b3ncFyby"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/0pjLiK5qb4Zr0PWRNkdd2o"
                },
                "href" : "https://api.spotify.com/v1/artists/0pjLiK5qb4Zr0PWRNkdd2o",
                "id" : "0pjLiK5qb4Zr0PWRNkdd2o",
                "name" : "Gaither Vocal Band",
                "type" : "artist",
                "uri" : "spotify:artist:0pjLiK5qb4Zr0PWRNkdd2o"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 106706,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/5EPZuIZSjXp9DoA8FuCUYA"
              },
              "href" : "https://api.spotify.com/v1/tracks/5EPZuIZSjXp9DoA8FuCUYA",
              "id" : "5EPZuIZSjXp9DoA8FuCUYA",
              "is_local" : false,
              "name" : "The Star-Spangled Banner",
              "preview_url" : null,
              "track_number" : 18,
              "type" : "track",
              "uri" : "spotify:track:5EPZuIZSjXp9DoA8FuCUYA"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/0pjLiK5qb4Zr0PWRNkdd2o"
                },
                "href" : "https://api.spotify.com/v1/artists/0pjLiK5qb4Zr0PWRNkdd2o",
                "id" : "0pjLiK5qb4Zr0PWRNkdd2o",
                "name" : "Gaither Vocal Band",
                "type" : "artist",
                "uri" : "spotify:artist:0pjLiK5qb4Zr0PWRNkdd2o"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 247786,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/6t7OjA9ylvRMlsJc3QywTZ"
              },
              "href" : "https://api.spotify.com/v1/tracks/6t7OjA9ylvRMlsJc3QywTZ",
              "id" : "6t7OjA9ylvRMlsJc3QywTZ",
              "is_local" : false,
              "name" : "The Love Of God",
              "preview_url" : null,
              "track_number" : 19,
              "type" : "track",
              "uri" : "spotify:track:6t7OjA9ylvRMlsJc3QywTZ"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/0pjLiK5qb4Zr0PWRNkdd2o"
                },
                "href" : "https://api.spotify.com/v1/artists/0pjLiK5qb4Zr0PWRNkdd2o",
                "id" : "0pjLiK5qb4Zr0PWRNkdd2o",
                "name" : "Gaither Vocal Band",
                "type" : "artist",
                "uri" : "spotify:artist:0pjLiK5qb4Zr0PWRNkdd2o"
              } ],
              "available_markets" : [ ],
              "disc_number" : 1,
              "duration_ms" : 325666,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/5gq9EKI68j9dw5IqBYzG6s"
              },
              "href" : "https://api.spotify.com/v1/tracks/5gq9EKI68j9dw5IqBYzG6s",
              "id" : "5gq9EKI68j9dw5IqBYzG6s",
              "is_local" : false,
              "name" : "Loving God, Loving Each Other",
              "preview_url" : null,
              "track_number" : 20,
              "type" : "track",
              "uri" : "spotify:track:5gq9EKI68j9dw5IqBYzG6s"
            } ],
            "limit" : 50,
            "next" : null,
            "offset" : 0,
            "previous" : null,
            "total" : 20
          },
          "type" : "album",
          "uri" : "spotify:album:6E0ayqmlTPNMUZQpeUIUGC"
        }
      }, {
        "added_at" : "2016-06-15T01:46:05Z",
        "album" : {
          "album_type" : "album",
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/2xX4MFASKCVjwvRp5ML2JI"
            },
            "href" : "https://api.spotify.com/v1/artists/2xX4MFASKCVjwvRp5ML2JI",
            "id" : "2xX4MFASKCVjwvRp5ML2JI",
            "name" : "A Taste of Freedom",
            "type" : "artist",
            "uri" : "spotify:artist:2xX4MFASKCVjwvRp5ML2JI"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
          "copyrights" : [ {
            "text" : "Brennus Music",
            "type" : "C"
          }, {
            "text" : "A Taste Of Freedom",
            "type" : "P"
          } ],
          "external_ids" : {
            "upc" : "3426300180209"
          },
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/5Qc0YBcw6uS031kmqBDfL5"
          },
          "genres" : [ ],
          "href" : "https://api.spotify.com/v1/albums/5Qc0YBcw6uS031kmqBDfL5",
          "id" : "5Qc0YBcw6uS031kmqBDfL5",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b273172b4822896034f4fad00913",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e02172b4822896034f4fad00913",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d00004851172b4822896034f4fad00913",
            "width" : 64
          } ],
          "label" : "Brennus",
          "name" : "Carved in Our Dreams",
          "popularity" : 1,
          "release_date" : "2016-06-06",
          "release_date_precision" : "day",
          "total_tracks" : 10,
          "tracks" : {
            "href" : "https://api.spotify.com/v1/albums/5Qc0YBcw6uS031kmqBDfL5/tracks?offset=0&limit=50",
            "items" : [ {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/2xX4MFASKCVjwvRp5ML2JI"
                },
                "href" : "https://api.spotify.com/v1/artists/2xX4MFASKCVjwvRp5ML2JI",
                "id" : "2xX4MFASKCVjwvRp5ML2JI",
                "name" : "A Taste of Freedom",
                "type" : "artist",
                "uri" : "spotify:artist:2xX4MFASKCVjwvRp5ML2JI"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 136240,
              "explicit" : true,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/0eF3e5JsIPruKYPsJsUpnT"
              },
              "href" : "https://api.spotify.com/v1/tracks/0eF3e5JsIPruKYPsJsUpnT",
              "id" : "0eF3e5JsIPruKYPsJsUpnT",
              "is_local" : false,
              "name" : "Lay Down and Fly",
              "preview_url" : "https://p.scdn.co/mp3-preview/9c0bfa58348d92995f3aac3ce39aa3d15fdc4a3b?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 1,
              "type" : "track",
              "uri" : "spotify:track:0eF3e5JsIPruKYPsJsUpnT"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/2xX4MFASKCVjwvRp5ML2JI"
                },
                "href" : "https://api.spotify.com/v1/artists/2xX4MFASKCVjwvRp5ML2JI",
                "id" : "2xX4MFASKCVjwvRp5ML2JI",
                "name" : "A Taste of Freedom",
                "type" : "artist",
                "uri" : "spotify:artist:2xX4MFASKCVjwvRp5ML2JI"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 231826,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/3E7c5Ry80WxfwJ8nab5XMa"
              },
              "href" : "https://api.spotify.com/v1/tracks/3E7c5Ry80WxfwJ8nab5XMa",
              "id" : "3E7c5Ry80WxfwJ8nab5XMa",
              "is_local" : false,
              "name" : "The Hangman",
              "preview_url" : "https://p.scdn.co/mp3-preview/d7e2edea3003dbd7fcdf11b60b53237837cc691f?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 2,
              "type" : "track",
              "uri" : "spotify:track:3E7c5Ry80WxfwJ8nab5XMa"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/2xX4MFASKCVjwvRp5ML2JI"
                },
                "href" : "https://api.spotify.com/v1/artists/2xX4MFASKCVjwvRp5ML2JI",
                "id" : "2xX4MFASKCVjwvRp5ML2JI",
                "name" : "A Taste of Freedom",
                "type" : "artist",
                "uri" : "spotify:artist:2xX4MFASKCVjwvRp5ML2JI"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 242560,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/5Hy5HMIWsZAAA8VHcHHsC1"
              },
              "href" : "https://api.spotify.com/v1/tracks/5Hy5HMIWsZAAA8VHcHHsC1",
              "id" : "5Hy5HMIWsZAAA8VHcHHsC1",
              "is_local" : false,
              "name" : "Call Me Legion",
              "preview_url" : "https://p.scdn.co/mp3-preview/efcf64aacf3a6ddcb6049218dd149ebdb467b452?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 3,
              "type" : "track",
              "uri" : "spotify:track:5Hy5HMIWsZAAA8VHcHHsC1"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/2xX4MFASKCVjwvRp5ML2JI"
                },
                "href" : "https://api.spotify.com/v1/artists/2xX4MFASKCVjwvRp5ML2JI",
                "id" : "2xX4MFASKCVjwvRp5ML2JI",
                "name" : "A Taste of Freedom",
                "type" : "artist",
                "uri" : "spotify:artist:2xX4MFASKCVjwvRp5ML2JI"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 447120,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/71XpnLvX0HktcUhXKp5z6X"
              },
              "href" : "https://api.spotify.com/v1/tracks/71XpnLvX0HktcUhXKp5z6X",
              "id" : "71XpnLvX0HktcUhXKp5z6X",
              "is_local" : false,
              "name" : "I Am You",
              "preview_url" : "https://p.scdn.co/mp3-preview/71b1c2fc52c6e20d8ddebd8e1b223a72b7723f70?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 4,
              "type" : "track",
              "uri" : "spotify:track:71XpnLvX0HktcUhXKp5z6X"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/2xX4MFASKCVjwvRp5ML2JI"
                },
                "href" : "https://api.spotify.com/v1/artists/2xX4MFASKCVjwvRp5ML2JI",
                "id" : "2xX4MFASKCVjwvRp5ML2JI",
                "name" : "A Taste of Freedom",
                "type" : "artist",
                "uri" : "spotify:artist:2xX4MFASKCVjwvRp5ML2JI"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 315280,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/7DaDvwGwYYTZP5OyyP2Gpb"
              },
              "href" : "https://api.spotify.com/v1/tracks/7DaDvwGwYYTZP5OyyP2Gpb",
              "id" : "7DaDvwGwYYTZP5OyyP2Gpb",
              "is_local" : false,
              "name" : "Ghost of Sparta",
              "preview_url" : "https://p.scdn.co/mp3-preview/9d701f4350e95d59673267d9fe990ace6e9cc391?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 5,
              "type" : "track",
              "uri" : "spotify:track:7DaDvwGwYYTZP5OyyP2Gpb"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/2xX4MFASKCVjwvRp5ML2JI"
                },
                "href" : "https://api.spotify.com/v1/artists/2xX4MFASKCVjwvRp5ML2JI",
                "id" : "2xX4MFASKCVjwvRp5ML2JI",
                "name" : "A Taste of Freedom",
                "type" : "artist",
                "uri" : "spotify:artist:2xX4MFASKCVjwvRp5ML2JI"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 344800,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/41ZUNjcvKrikomiy7DwOKu"
              },
              "href" : "https://api.spotify.com/v1/tracks/41ZUNjcvKrikomiy7DwOKu",
              "id" : "41ZUNjcvKrikomiy7DwOKu",
              "is_local" : false,
              "name" : "Homo Homini Lupus Est",
              "preview_url" : "https://p.scdn.co/mp3-preview/ef480d010987e284ef8dce09852772ce20546bb7?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 6,
              "type" : "track",
              "uri" : "spotify:track:41ZUNjcvKrikomiy7DwOKu"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/2xX4MFASKCVjwvRp5ML2JI"
                },
                "href" : "https://api.spotify.com/v1/artists/2xX4MFASKCVjwvRp5ML2JI",
                "id" : "2xX4MFASKCVjwvRp5ML2JI",
                "name" : "A Taste of Freedom",
                "type" : "artist",
                "uri" : "spotify:artist:2xX4MFASKCVjwvRp5ML2JI"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 328306,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/6GW4cXhXOnfQRnkAI4styJ"
              },
              "href" : "https://api.spotify.com/v1/tracks/6GW4cXhXOnfQRnkAI4styJ",
              "id" : "6GW4cXhXOnfQRnkAI4styJ",
              "is_local" : false,
              "name" : "Now or Never",
              "preview_url" : "https://p.scdn.co/mp3-preview/0b3af2258540f55e46cc84ba137fddc16d58f1ae?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 7,
              "type" : "track",
              "uri" : "spotify:track:6GW4cXhXOnfQRnkAI4styJ"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/2xX4MFASKCVjwvRp5ML2JI"
                },
                "href" : "https://api.spotify.com/v1/artists/2xX4MFASKCVjwvRp5ML2JI",
                "id" : "2xX4MFASKCVjwvRp5ML2JI",
                "name" : "A Taste of Freedom",
                "type" : "artist",
                "uri" : "spotify:artist:2xX4MFASKCVjwvRp5ML2JI"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 288000,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/3Wy3cRsPNl7irdgZlbsOQC"
              },
              "href" : "https://api.spotify.com/v1/tracks/3Wy3cRsPNl7irdgZlbsOQC",
              "id" : "3Wy3cRsPNl7irdgZlbsOQC",
              "is_local" : false,
              "name" : "Maybe Human",
              "preview_url" : "https://p.scdn.co/mp3-preview/19afd817567a686190ba10a965170a967b75484f?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 8,
              "type" : "track",
              "uri" : "spotify:track:3Wy3cRsPNl7irdgZlbsOQC"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/2xX4MFASKCVjwvRp5ML2JI"
                },
                "href" : "https://api.spotify.com/v1/artists/2xX4MFASKCVjwvRp5ML2JI",
                "id" : "2xX4MFASKCVjwvRp5ML2JI",
                "name" : "A Taste of Freedom",
                "type" : "artist",
                "uri" : "spotify:artist:2xX4MFASKCVjwvRp5ML2JI"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 413000,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/2GPboHA7M2c6NhjTc0YoES"
              },
              "href" : "https://api.spotify.com/v1/tracks/2GPboHA7M2c6NhjTc0YoES",
              "id" : "2GPboHA7M2c6NhjTc0YoES",
              "is_local" : false,
              "name" : "Last Resort",
              "preview_url" : "https://p.scdn.co/mp3-preview/1478193e2e47c16afde45e54f59f225751444035?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 9,
              "type" : "track",
              "uri" : "spotify:track:2GPboHA7M2c6NhjTc0YoES"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/2xX4MFASKCVjwvRp5ML2JI"
                },
                "href" : "https://api.spotify.com/v1/artists/2xX4MFASKCVjwvRp5ML2JI",
                "id" : "2xX4MFASKCVjwvRp5ML2JI",
                "name" : "A Taste of Freedom",
                "type" : "artist",
                "uri" : "spotify:artist:2xX4MFASKCVjwvRp5ML2JI"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 250120,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/4FVTboIrKamLoDokcweTVe"
              },
              "href" : "https://api.spotify.com/v1/tracks/4FVTboIrKamLoDokcweTVe",
              "id" : "4FVTboIrKamLoDokcweTVe",
              "is_local" : false,
              "name" : "Heroes of Our Times",
              "preview_url" : "https://p.scdn.co/mp3-preview/311e81405200f3b7824a8ee0fb3ad07afac69471?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 10,
              "type" : "track",
              "uri" : "spotify:track:4FVTboIrKamLoDokcweTVe"
            } ],
            "limit" : 50,
            "next" : null,
            "offset" : 0,
            "previous" : null,
            "total" : 10
          },
          "type" : "album",
          "uri" : "spotify:album:5Qc0YBcw6uS031kmqBDfL5"
        }
      }, {
        "added_at" : "2016-06-06T22:16:17Z",
        "album" : {
          "album_type" : "album",
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/5BrPgtYnoVfEoDYzw0AHGz"
            },
            "href" : "https://api.spotify.com/v1/artists/5BrPgtYnoVfEoDYzw0AHGz",
            "id" : "5BrPgtYnoVfEoDYzw0AHGz",
            "name" : "Edu Falaschi",
            "type" : "artist",
            "uri" : "spotify:artist:5BrPgtYnoVfEoDYzw0AHGz"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AU", "BA", "BG", "BH", "BO", "BR", "BY", "CL", "CO", "CR", "CY", "CZ", "DO", "DZ", "EC", "EE", "EG", "FI", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IL", "IN", "IS", "JO", "JP", "KW", "KZ", "LB", "LT", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MY", "NI", "NL", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PY", "QA", "RO", "RS", "RU", "SA", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "UY", "VN", "XK", "ZA" ],
          "copyrights" : [ {
            "text" : "2016 Edu Falaschi",
            "type" : "C"
          }, {
            "text" : "2016 Edu Falaschi",
            "type" : "P"
          } ],
          "external_ids" : {
            "upc" : "190394576059"
          },
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/518wRhJr50zPGXURBZjSKd"
          },
          "genres" : [ ],
          "href" : "https://api.spotify.com/v1/albums/518wRhJr50zPGXURBZjSKd",
          "id" : "518wRhJr50zPGXURBZjSKd",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b273c4070103dd30a10e3f667d86",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e02c4070103dd30a10e3f667d86",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d00004851c4070103dd30a10e3f667d86",
            "width" : 64
          } ],
          "label" : "Edu Falaschi",
          "name" : "Moonlight",
          "popularity" : 28,
          "release_date" : "2016-06-03",
          "release_date_precision" : "day",
          "total_tracks" : 9,
          "tracks" : {
            "href" : "https://api.spotify.com/v1/albums/518wRhJr50zPGXURBZjSKd/tracks?offset=0&limit=50",
            "items" : [ {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/5BrPgtYnoVfEoDYzw0AHGz"
                },
                "href" : "https://api.spotify.com/v1/artists/5BrPgtYnoVfEoDYzw0AHGz",
                "id" : "5BrPgtYnoVfEoDYzw0AHGz",
                "name" : "Edu Falaschi",
                "type" : "artist",
                "uri" : "spotify:artist:5BrPgtYnoVfEoDYzw0AHGz"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AU", "BA", "BG", "BH", "BO", "BR", "BY", "CL", "CO", "CR", "CY", "CZ", "DO", "DZ", "EC", "EE", "EG", "FI", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IL", "IN", "IS", "JO", "JP", "KW", "KZ", "LB", "LT", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MY", "NI", "NL", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PY", "QA", "RO", "RS", "RU", "SA", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 208468,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/1K9imevUdygnfuqQevdW7n"
              },
              "href" : "https://api.spotify.com/v1/tracks/1K9imevUdygnfuqQevdW7n",
              "id" : "1K9imevUdygnfuqQevdW7n",
              "is_local" : false,
              "name" : "Nova Era",
              "preview_url" : "https://p.scdn.co/mp3-preview/1359f03eea57d1af688c6d03138fde6ec0007aef?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 1,
              "type" : "track",
              "uri" : "spotify:track:1K9imevUdygnfuqQevdW7n"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/5BrPgtYnoVfEoDYzw0AHGz"
                },
                "href" : "https://api.spotify.com/v1/artists/5BrPgtYnoVfEoDYzw0AHGz",
                "id" : "5BrPgtYnoVfEoDYzw0AHGz",
                "name" : "Edu Falaschi",
                "type" : "artist",
                "uri" : "spotify:artist:5BrPgtYnoVfEoDYzw0AHGz"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AU", "BA", "BG", "BH", "BO", "BR", "BY", "CL", "CO", "CR", "CY", "CZ", "DO", "DZ", "EC", "EE", "EG", "FI", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IL", "IN", "IS", "JO", "JP", "KW", "KZ", "LB", "LT", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MY", "NI", "NL", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PY", "QA", "RO", "RS", "RU", "SA", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 273026,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/2EdNOJKoTAqv4yS0NYZAAY"
              },
              "href" : "https://api.spotify.com/v1/tracks/2EdNOJKoTAqv4yS0NYZAAY",
              "id" : "2EdNOJKoTAqv4yS0NYZAAY",
              "is_local" : false,
              "name" : "Bleeding Heart",
              "preview_url" : "https://p.scdn.co/mp3-preview/0006990f4db1a899e38a1b1b0ba726651fc1d1e3?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 2,
              "type" : "track",
              "uri" : "spotify:track:2EdNOJKoTAqv4yS0NYZAAY"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/5BrPgtYnoVfEoDYzw0AHGz"
                },
                "href" : "https://api.spotify.com/v1/artists/5BrPgtYnoVfEoDYzw0AHGz",
                "id" : "5BrPgtYnoVfEoDYzw0AHGz",
                "name" : "Edu Falaschi",
                "type" : "artist",
                "uri" : "spotify:artist:5BrPgtYnoVfEoDYzw0AHGz"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AU", "BA", "BG", "BH", "BO", "BR", "BY", "CL", "CO", "CR", "CY", "CZ", "DO", "DZ", "EC", "EE", "EG", "FI", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IL", "IN", "IS", "JO", "JP", "KW", "KZ", "LB", "LT", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MY", "NI", "NL", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PY", "QA", "RO", "RS", "RU", "SA", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 212272,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/2iTp80gVdZU1NDlHSOuFlm"
              },
              "href" : "https://api.spotify.com/v1/tracks/2iTp80gVdZU1NDlHSOuFlm",
              "id" : "2iTp80gVdZU1NDlHSOuFlm",
              "is_local" : false,
              "name" : "Arising Thunder",
              "preview_url" : "https://p.scdn.co/mp3-preview/ebfc96c2f582a31c11ec6e7b69aff236bda1d879?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 3,
              "type" : "track",
              "uri" : "spotify:track:2iTp80gVdZU1NDlHSOuFlm"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/5BrPgtYnoVfEoDYzw0AHGz"
                },
                "href" : "https://api.spotify.com/v1/artists/5BrPgtYnoVfEoDYzw0AHGz",
                "id" : "5BrPgtYnoVfEoDYzw0AHGz",
                "name" : "Edu Falaschi",
                "type" : "artist",
                "uri" : "spotify:artist:5BrPgtYnoVfEoDYzw0AHGz"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AU", "BA", "BG", "BH", "BO", "BR", "BY", "CL", "CO", "CR", "CY", "CZ", "DO", "DZ", "EC", "EE", "EG", "FI", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IL", "IN", "IS", "JO", "JP", "KW", "KZ", "LB", "LT", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MY", "NI", "NL", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PY", "QA", "RO", "RS", "RU", "SA", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 233760,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/5p8CDbwF7UiI9e9Uz28IzK"
              },
              "href" : "https://api.spotify.com/v1/tracks/5p8CDbwF7UiI9e9Uz28IzK",
              "id" : "5p8CDbwF7UiI9e9Uz28IzK",
              "is_local" : false,
              "name" : "Rebirth",
              "preview_url" : "https://p.scdn.co/mp3-preview/9a453b6eb54726b931611fe121caa3d88ef7f916?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 4,
              "type" : "track",
              "uri" : "spotify:track:5p8CDbwF7UiI9e9Uz28IzK"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/5BrPgtYnoVfEoDYzw0AHGz"
                },
                "href" : "https://api.spotify.com/v1/artists/5BrPgtYnoVfEoDYzw0AHGz",
                "id" : "5BrPgtYnoVfEoDYzw0AHGz",
                "name" : "Edu Falaschi",
                "type" : "artist",
                "uri" : "spotify:artist:5BrPgtYnoVfEoDYzw0AHGz"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AU", "BA", "BG", "BH", "BO", "BR", "BY", "CL", "CO", "CR", "CY", "CZ", "DO", "DZ", "EC", "EE", "EG", "FI", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IL", "IN", "IS", "JO", "JP", "KW", "KZ", "LB", "LT", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MY", "NI", "NL", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PY", "QA", "RO", "RS", "RU", "SA", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 214184,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/4nAJKjplPdWo9EeZpabFia"
              },
              "href" : "https://api.spotify.com/v1/tracks/4nAJKjplPdWo9EeZpabFia",
              "id" : "4nAJKjplPdWo9EeZpabFia",
              "is_local" : false,
              "name" : "Breathe",
              "preview_url" : "https://p.scdn.co/mp3-preview/b6a1c69f63a4d73e22e0ee10f11016084f84dd5d?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 5,
              "type" : "track",
              "uri" : "spotify:track:4nAJKjplPdWo9EeZpabFia"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/5BrPgtYnoVfEoDYzw0AHGz"
                },
                "href" : "https://api.spotify.com/v1/artists/5BrPgtYnoVfEoDYzw0AHGz",
                "id" : "5BrPgtYnoVfEoDYzw0AHGz",
                "name" : "Edu Falaschi",
                "type" : "artist",
                "uri" : "spotify:artist:5BrPgtYnoVfEoDYzw0AHGz"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AU", "BA", "BG", "BH", "BO", "BR", "BY", "CL", "CO", "CR", "CY", "CZ", "DO", "DZ", "EC", "EE", "EG", "FI", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IL", "IN", "IS", "JO", "JP", "KW", "KZ", "LB", "LT", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MY", "NI", "NL", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PY", "QA", "RO", "RS", "RU", "SA", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 288519,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/1gzhDUXueAZuPRH7OAhwnn"
              },
              "href" : "https://api.spotify.com/v1/tracks/1gzhDUXueAZuPRH7OAhwnn",
              "id" : "1gzhDUXueAZuPRH7OAhwnn",
              "is_local" : false,
              "name" : "Angels and Demons",
              "preview_url" : "https://p.scdn.co/mp3-preview/129da49ce06b816389971d5a65f57e47577748ee?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 6,
              "type" : "track",
              "uri" : "spotify:track:1gzhDUXueAZuPRH7OAhwnn"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/5BrPgtYnoVfEoDYzw0AHGz"
                },
                "href" : "https://api.spotify.com/v1/artists/5BrPgtYnoVfEoDYzw0AHGz",
                "id" : "5BrPgtYnoVfEoDYzw0AHGz",
                "name" : "Edu Falaschi",
                "type" : "artist",
                "uri" : "spotify:artist:5BrPgtYnoVfEoDYzw0AHGz"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AU", "BA", "BG", "BH", "BO", "BR", "BY", "CL", "CO", "CR", "CY", "CZ", "DO", "DZ", "EC", "EE", "EG", "FI", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IL", "IN", "IS", "JO", "JP", "KW", "KZ", "LB", "LT", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MY", "NI", "NL", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PY", "QA", "RO", "RS", "RU", "SA", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 281835,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/5Nfo9xGvqyZFK95IRc9TW9"
              },
              "href" : "https://api.spotify.com/v1/tracks/5Nfo9xGvqyZFK95IRc9TW9",
              "id" : "5Nfo9xGvqyZFK95IRc9TW9",
              "is_local" : false,
              "name" : "Spread Your Fire",
              "preview_url" : "https://p.scdn.co/mp3-preview/dedd30ec444181610c99b7793a9ba1a81fc63e87?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 7,
              "type" : "track",
              "uri" : "spotify:track:5Nfo9xGvqyZFK95IRc9TW9"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/5BrPgtYnoVfEoDYzw0AHGz"
                },
                "href" : "https://api.spotify.com/v1/artists/5BrPgtYnoVfEoDYzw0AHGz",
                "id" : "5BrPgtYnoVfEoDYzw0AHGz",
                "name" : "Edu Falaschi",
                "type" : "artist",
                "uri" : "spotify:artist:5BrPgtYnoVfEoDYzw0AHGz"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AU", "BA", "BG", "BH", "BO", "BR", "BY", "CL", "CO", "CR", "CY", "CZ", "DO", "DZ", "EC", "EE", "EG", "FI", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IL", "IN", "IS", "JO", "JP", "KW", "KZ", "LB", "LT", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MY", "NI", "NL", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PY", "QA", "RO", "RS", "RU", "SA", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 328659,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/7vO1hUB5S5msG9uTpidqic"
              },
              "href" : "https://api.spotify.com/v1/tracks/7vO1hUB5S5msG9uTpidqic",
              "id" : "7vO1hUB5S5msG9uTpidqic",
              "is_local" : false,
              "name" : "Wishing Well",
              "preview_url" : "https://p.scdn.co/mp3-preview/515d5b41f542d85fc9fe8215b5c3af61735a2b2a?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 8,
              "type" : "track",
              "uri" : "spotify:track:7vO1hUB5S5msG9uTpidqic"
            }, {
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/5BrPgtYnoVfEoDYzw0AHGz"
                },
                "href" : "https://api.spotify.com/v1/artists/5BrPgtYnoVfEoDYzw0AHGz",
                "id" : "5BrPgtYnoVfEoDYzw0AHGz",
                "name" : "Edu Falaschi",
                "type" : "artist",
                "uri" : "spotify:artist:5BrPgtYnoVfEoDYzw0AHGz"
              } ],
              "available_markets" : [ "AD", "AE", "AL", "AR", "AU", "BA", "BG", "BH", "BO", "BR", "BY", "CL", "CO", "CR", "CY", "CZ", "DO", "DZ", "EC", "EE", "EG", "FI", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IL", "IN", "IS", "JO", "JP", "KW", "KZ", "LB", "LT", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MY", "NI", "NL", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PY", "QA", "RO", "RS", "RU", "SA", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "UY", "VN", "XK", "ZA" ],
              "disc_number" : 1,
              "duration_ms" : 245812,
              "explicit" : false,
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/5RgCpiMoytvSkLA0kub7Tl"
              },
              "href" : "https://api.spotify.com/v1/tracks/5RgCpiMoytvSkLA0kub7Tl",
              "id" : "5RgCpiMoytvSkLA0kub7Tl",
              "is_local" : false,
              "name" : "Heroes of Sand",
              "preview_url" : "https://p.scdn.co/mp3-preview/691cb1c5d78c06191f7cdbd1318939378a6dca2f?cid=547fd8656e964ef1bacb47b20971ae02",
              "track_number" : 9,
              "type" : "track",
              "uri" : "spotify:track:5RgCpiMoytvSkLA0kub7Tl"
            } ],
            "limit" : 50,
            "next" : null,
            "offset" : 0,
            "previous" : null,
            "total" : 9
          },
          "type" : "album",
          "uri" : "spotify:album:518wRhJr50zPGXURBZjSKd"
        }
      } ],
      "limit" : 50,
      "next" : null,
      "offset" : 0,
      "previous" : null,
      "total" : 33
    };
    const userTracks = {
      "href" : "https://api.spotify.com/v1/me/tracks?offset=0&limit=50",
      "items" : [ {
        "added_at" : "2020-07-03T17:25:58Z",
        "track" : {
          "album" : {
            "album_type" : "album",
            "artists" : [ {
              "external_urls" : {
                "spotify" : "https://open.spotify.com/artist/4DWX7u8BV0vZIQSpJQQDWU"
              },
              "href" : "https://api.spotify.com/v1/artists/4DWX7u8BV0vZIQSpJQQDWU",
              "id" : "4DWX7u8BV0vZIQSpJQQDWU",
              "name" : "Alter Bridge",
              "type" : "artist",
              "uri" : "spotify:artist:4DWX7u8BV0vZIQSpJQQDWU"
            } ],
            "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "UY", "VN", "XK", "ZA" ],
            "external_urls" : {
              "spotify" : "https://open.spotify.com/album/14XXkmq6rjlKTxRkelMtZx"
            },
            "href" : "https://api.spotify.com/v1/albums/14XXkmq6rjlKTxRkelMtZx",
            "id" : "14XXkmq6rjlKTxRkelMtZx",
            "images" : [ {
              "height" : 640,
              "url" : "https://i.scdn.co/image/ab67616d0000b273382ee9dcc9d08cb3d58f434e",
              "width" : 640
            }, {
              "height" : 300,
              "url" : "https://i.scdn.co/image/ab67616d00001e02382ee9dcc9d08cb3d58f434e",
              "width" : 300
            }, {
              "height" : 64,
              "url" : "https://i.scdn.co/image/ab67616d00004851382ee9dcc9d08cb3d58f434e",
              "width" : 64
            } ],
            "name" : "Fortress",
            "release_date" : "2013-09-27",
            "release_date_precision" : "day",
            "total_tracks" : 12,
            "type" : "album",
            "uri" : "spotify:album:14XXkmq6rjlKTxRkelMtZx"
          },
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/4DWX7u8BV0vZIQSpJQQDWU"
            },
            "href" : "https://api.spotify.com/v1/artists/4DWX7u8BV0vZIQSpJQQDWU",
            "id" : "4DWX7u8BV0vZIQSpJQQDWU",
            "name" : "Alter Bridge",
            "type" : "artist",
            "uri" : "spotify:artist:4DWX7u8BV0vZIQSpJQQDWU"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "UY", "VN", "XK", "ZA" ],
          "disc_number" : 1,
          "duration_ms" : 364960,
          "explicit" : false,
          "external_ids" : {
            "isrc" : "NLA321392728"
          },
          "external_urls" : {
            "spotify" : "https://open.spotify.com/track/2fnpiSzoNVRJnYMnjho4P1"
          },
          "href" : "https://api.spotify.com/v1/tracks/2fnpiSzoNVRJnYMnjho4P1",
          "id" : "2fnpiSzoNVRJnYMnjho4P1",
          "is_local" : false,
          "name" : "Calm the Fire",
          "popularity" : 38,
          "preview_url" : "https://p.scdn.co/mp3-preview/8174ee9158c72087e7bfcad4602a5dc698c0c525?cid=547fd8656e964ef1bacb47b20971ae02",
          "track_number" : 7,
          "type" : "track",
          "uri" : "spotify:track:2fnpiSzoNVRJnYMnjho4P1"
        }
      }, {
        "added_at" : "2020-01-13T11:17:23Z",
        "track" : {
          "album" : {
            "album_type" : "album",
            "artists" : [ {
              "external_urls" : {
                "spotify" : "https://open.spotify.com/artist/1R486Y8DuEKEH01hypvW1B"
              },
              "href" : "https://api.spotify.com/v1/artists/1R486Y8DuEKEH01hypvW1B",
              "id" : "1R486Y8DuEKEH01hypvW1B",
              "name" : "David Phelps",
              "type" : "artist",
              "uri" : "spotify:artist:1R486Y8DuEKEH01hypvW1B"
            } ],
            "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
            "external_urls" : {
              "spotify" : "https://open.spotify.com/album/1ds0npcqVskrjpgrNKZGul"
            },
            "href" : "https://api.spotify.com/v1/albums/1ds0npcqVskrjpgrNKZGul",
            "id" : "1ds0npcqVskrjpgrNKZGul",
            "images" : [ {
              "height" : 640,
              "url" : "https://i.scdn.co/image/ab67616d0000b2736745461c77070327054c0310",
              "width" : 640
            }, {
              "height" : 300,
              "url" : "https://i.scdn.co/image/ab67616d00001e026745461c77070327054c0310",
              "width" : 300
            }, {
              "height" : 64,
              "url" : "https://i.scdn.co/image/ab67616d000048516745461c77070327054c0310",
              "width" : 64
            } ],
            "name" : "David Phelps",
            "release_date" : "2005-01-01",
            "release_date_precision" : "day",
            "total_tracks" : 11,
            "type" : "album",
            "uri" : "spotify:album:1ds0npcqVskrjpgrNKZGul"
          },
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/1R486Y8DuEKEH01hypvW1B"
            },
            "href" : "https://api.spotify.com/v1/artists/1R486Y8DuEKEH01hypvW1B",
            "id" : "1R486Y8DuEKEH01hypvW1B",
            "name" : "David Phelps",
            "type" : "artist",
            "uri" : "spotify:artist:1R486Y8DuEKEH01hypvW1B"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
          "disc_number" : 1,
          "duration_ms" : 329893,
          "explicit" : false,
          "external_ids" : {
            "isrc" : "USB4U0500299"
          },
          "external_urls" : {
            "spotify" : "https://open.spotify.com/track/4ZZjc7pUrhB9qePYCX49J4"
          },
          "href" : "https://api.spotify.com/v1/tracks/4ZZjc7pUrhB9qePYCX49J4",
          "id" : "4ZZjc7pUrhB9qePYCX49J4",
          "is_local" : false,
          "name" : "End Of The Beginning",
          "popularity" : 35,
          "preview_url" : "https://p.scdn.co/mp3-preview/04222be708b6c6cd2580a1050144d387bc59bf62?cid=547fd8656e964ef1bacb47b20971ae02",
          "track_number" : 2,
          "type" : "track",
          "uri" : "spotify:track:4ZZjc7pUrhB9qePYCX49J4"
        }
      }, {
        "added_at" : "2019-11-08T01:48:10Z",
        "track" : {
          "album" : {
            "album_type" : "album",
            "artists" : [ {
              "external_urls" : {
                "spotify" : "https://open.spotify.com/artist/2fBxIdkeMcxcjtBlPuWZl7"
              },
              "href" : "https://api.spotify.com/v1/artists/2fBxIdkeMcxcjtBlPuWZl7",
              "id" : "2fBxIdkeMcxcjtBlPuWZl7",
              "name" : "Pedro Valença",
              "type" : "artist",
              "uri" : "spotify:artist:2fBxIdkeMcxcjtBlPuWZl7"
            } ],
            "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
            "external_urls" : {
              "spotify" : "https://open.spotify.com/album/5g5gEMfOPudAOS7pU2wIYq"
            },
            "href" : "https://api.spotify.com/v1/albums/5g5gEMfOPudAOS7pU2wIYq",
            "id" : "5g5gEMfOPudAOS7pU2wIYq",
            "images" : [ {
              "height" : 640,
              "url" : "https://i.scdn.co/image/ab67616d0000b27394d48b2de1423f737f7f2429",
              "width" : 640
            }, {
              "height" : 300,
              "url" : "https://i.scdn.co/image/ab67616d00001e0294d48b2de1423f737f7f2429",
              "width" : 300
            }, {
              "height" : 64,
              "url" : "https://i.scdn.co/image/ab67616d0000485194d48b2de1423f737f7f2429",
              "width" : 64
            } ],
            "name" : "Pode Ser (Playback)",
            "release_date" : "2016-10-28",
            "release_date_precision" : "day",
            "total_tracks" : 11,
            "type" : "album",
            "uri" : "spotify:album:5g5gEMfOPudAOS7pU2wIYq"
          },
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/2fBxIdkeMcxcjtBlPuWZl7"
            },
            "href" : "https://api.spotify.com/v1/artists/2fBxIdkeMcxcjtBlPuWZl7",
            "id" : "2fBxIdkeMcxcjtBlPuWZl7",
            "name" : "Pedro Valença",
            "type" : "artist",
            "uri" : "spotify:artist:2fBxIdkeMcxcjtBlPuWZl7"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
          "disc_number" : 1,
          "duration_ms" : 318826,
          "explicit" : false,
          "external_ids" : {
            "isrc" : "BXINV1600019"
          },
          "external_urls" : {
            "spotify" : "https://open.spotify.com/track/3Go53kdghNDGpWcyysjmHO"
          },
          "href" : "https://api.spotify.com/v1/tracks/3Go53kdghNDGpWcyysjmHO",
          "id" : "3Go53kdghNDGpWcyysjmHO",
          "is_local" : false,
          "name" : "Saudade - Playback",
          "popularity" : 8,
          "preview_url" : "https://p.scdn.co/mp3-preview/aed107ea7f223d73c7894a9892f0537d86e4037e?cid=547fd8656e964ef1bacb47b20971ae02",
          "track_number" : 7,
          "type" : "track",
          "uri" : "spotify:track:3Go53kdghNDGpWcyysjmHO"
        }
      }, {
        "added_at" : "2019-01-22T18:14:03Z",
        "track" : {
          "album" : {
            "album_type" : "album",
            "artists" : [ {
              "external_urls" : {
                "spotify" : "https://open.spotify.com/artist/2THaGrUq7RPnj8Uax9zQ1m"
              },
              "href" : "https://api.spotify.com/v1/artists/2THaGrUq7RPnj8Uax9zQ1m",
              "id" : "2THaGrUq7RPnj8Uax9zQ1m",
              "name" : "Shaman",
              "type" : "artist",
              "uri" : "spotify:artist:2THaGrUq7RPnj8Uax9zQ1m"
            } ],
            "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
            "external_urls" : {
              "spotify" : "https://open.spotify.com/album/33cwfLb8zy91QaDRfLZc3p"
            },
            "href" : "https://api.spotify.com/v1/albums/33cwfLb8zy91QaDRfLZc3p",
            "id" : "33cwfLb8zy91QaDRfLZc3p",
            "images" : [ {
              "height" : 640,
              "url" : "https://i.scdn.co/image/ab67616d0000b27390dc43fd36fb0e5ccc769b00",
              "width" : 640
            }, {
              "height" : 300,
              "url" : "https://i.scdn.co/image/ab67616d00001e0290dc43fd36fb0e5ccc769b00",
              "width" : 300
            }, {
              "height" : 64,
              "url" : "https://i.scdn.co/image/ab67616d0000485190dc43fd36fb0e5ccc769b00",
              "width" : 64
            } ],
            "name" : "Reason",
            "release_date" : "2005-03-24",
            "release_date_precision" : "day",
            "total_tracks" : 10,
            "type" : "album",
            "uri" : "spotify:album:33cwfLb8zy91QaDRfLZc3p"
          },
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/2THaGrUq7RPnj8Uax9zQ1m"
            },
            "href" : "https://api.spotify.com/v1/artists/2THaGrUq7RPnj8Uax9zQ1m",
            "id" : "2THaGrUq7RPnj8Uax9zQ1m",
            "name" : "Shaman",
            "type" : "artist",
            "uri" : "spotify:artist:2THaGrUq7RPnj8Uax9zQ1m"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
          "disc_number" : 1,
          "duration_ms" : 274986,
          "explicit" : false,
          "external_ids" : {
            "isrc" : "BRDEP0400666"
          },
          "external_urls" : {
            "spotify" : "https://open.spotify.com/track/0uYvBM7c2KT8RZu5IFrAwX"
          },
          "href" : "https://api.spotify.com/v1/tracks/0uYvBM7c2KT8RZu5IFrAwX",
          "id" : "0uYvBM7c2KT8RZu5IFrAwX",
          "is_local" : false,
          "name" : "Innocence",
          "popularity" : 38,
          "preview_url" : "https://p.scdn.co/mp3-preview/78f7d02ff2c26143e5a2e07412a0645e461d071a?cid=547fd8656e964ef1bacb47b20971ae02",
          "track_number" : 4,
          "type" : "track",
          "uri" : "spotify:track:0uYvBM7c2KT8RZu5IFrAwX"
        }
      }, {
        "added_at" : "2019-01-22T18:13:47Z",
        "track" : {
          "album" : {
            "album_type" : "album",
            "artists" : [ {
              "external_urls" : {
                "spotify" : "https://open.spotify.com/artist/2pH3wEn4eYlMMIIQyKPbVR"
              },
              "href" : "https://api.spotify.com/v1/artists/2pH3wEn4eYlMMIIQyKPbVR",
              "id" : "2pH3wEn4eYlMMIIQyKPbVR",
              "name" : "DragonForce",
              "type" : "artist",
              "uri" : "spotify:artist:2pH3wEn4eYlMMIIQyKPbVR"
            } ],
            "available_markets" : [ "AD", "AL", "AR", "AT", "BA", "BE", "BG", "BO", "BR", "BY", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HN", "HR", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MD", "ME", "MK", "MT", "MX", "NI", "NL", "NO", "PA", "PE", "PL", "PT", "PY", "RO", "RS", "RU", "SE", "SI", "SK", "SV", "TR", "UA", "UY", "XK", "ZA" ],
            "external_urls" : {
              "spotify" : "https://open.spotify.com/album/4gDzHd64ZlZo1PfRT8pHU8"
            },
            "href" : "https://api.spotify.com/v1/albums/4gDzHd64ZlZo1PfRT8pHU8",
            "id" : "4gDzHd64ZlZo1PfRT8pHU8",
            "images" : [ {
              "height" : 640,
              "url" : "https://i.scdn.co/image/ab67616d0000b273c29213d0f7fd9a7601fcb670",
              "width" : 640
            }, {
              "height" : 300,
              "url" : "https://i.scdn.co/image/ab67616d00001e02c29213d0f7fd9a7601fcb670",
              "width" : 300
            }, {
              "height" : 64,
              "url" : "https://i.scdn.co/image/ab67616d00004851c29213d0f7fd9a7601fcb670",
              "width" : 64
            } ],
            "name" : "The Power Within",
            "release_date" : "2012-04-17",
            "release_date_precision" : "day",
            "total_tracks" : 10,
            "type" : "album",
            "uri" : "spotify:album:4gDzHd64ZlZo1PfRT8pHU8"
          },
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/2pH3wEn4eYlMMIIQyKPbVR"
            },
            "href" : "https://api.spotify.com/v1/artists/2pH3wEn4eYlMMIIQyKPbVR",
            "id" : "2pH3wEn4eYlMMIIQyKPbVR",
            "name" : "DragonForce",
            "type" : "artist",
            "uri" : "spotify:artist:2pH3wEn4eYlMMIIQyKPbVR"
          } ],
          "available_markets" : [ "AD", "AL", "AR", "AT", "BA", "BE", "BG", "BO", "BR", "BY", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HN", "HR", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MD", "ME", "MK", "MT", "MX", "NI", "NL", "NO", "PA", "PE", "PL", "PT", "PY", "RO", "RS", "RU", "SE", "SI", "SK", "SV", "TR", "UA", "UY", "XK", "ZA" ],
          "disc_number" : 1,
          "duration_ms" : 317613,
          "explicit" : false,
          "external_ids" : {
            "isrc" : "DEH841500444"
          },
          "external_urls" : {
            "spotify" : "https://open.spotify.com/track/45W8En2qul3ljQKzIbsyT4"
          },
          "href" : "https://api.spotify.com/v1/tracks/45W8En2qul3ljQKzIbsyT4",
          "id" : "45W8En2qul3ljQKzIbsyT4",
          "is_local" : false,
          "name" : "Cry Thunder",
          "popularity" : 34,
          "preview_url" : "https://p.scdn.co/mp3-preview/df05dcf9ce814ee7ae75004baca7dde0e81fa258?cid=547fd8656e964ef1bacb47b20971ae02",
          "track_number" : 3,
          "type" : "track",
          "uri" : "spotify:track:45W8En2qul3ljQKzIbsyT4"
        }
      }, {
        "added_at" : "2019-01-12T14:06:13Z",
        "track" : {
          "album" : {
            "album_type" : "single",
            "artists" : [ {
              "external_urls" : {
                "spotify" : "https://open.spotify.com/artist/7lbSsjYACZHn1MSDXPxNF2"
              },
              "href" : "https://api.spotify.com/v1/artists/7lbSsjYACZHn1MSDXPxNF2",
              "id" : "7lbSsjYACZHn1MSDXPxNF2",
              "name" : "Hikaru Utada",
              "type" : "artist",
              "uri" : "spotify:artist:7lbSsjYACZHn1MSDXPxNF2"
            } ],
            "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
            "external_urls" : {
              "spotify" : "https://open.spotify.com/album/1bQFTo3WUbUSO4SAK743iJ"
            },
            "href" : "https://api.spotify.com/v1/albums/1bQFTo3WUbUSO4SAK743iJ",
            "id" : "1bQFTo3WUbUSO4SAK743iJ",
            "images" : [ {
              "height" : 640,
              "url" : "https://i.scdn.co/image/ab67616d0000b2739b4041a80f4f48a49ce716d2",
              "width" : 640
            }, {
              "height" : 300,
              "url" : "https://i.scdn.co/image/ab67616d00001e029b4041a80f4f48a49ce716d2",
              "width" : 300
            }, {
              "height" : 64,
              "url" : "https://i.scdn.co/image/ab67616d000048519b4041a80f4f48a49ce716d2",
              "width" : 64
            } ],
            "name" : "Chikai",
            "release_date" : "2018-06-27",
            "release_date_precision" : "day",
            "total_tracks" : 1,
            "type" : "album",
            "uri" : "spotify:album:1bQFTo3WUbUSO4SAK743iJ"
          },
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/7lbSsjYACZHn1MSDXPxNF2"
            },
            "href" : "https://api.spotify.com/v1/artists/7lbSsjYACZHn1MSDXPxNF2",
            "id" : "7lbSsjYACZHn1MSDXPxNF2",
            "name" : "Hikaru Utada",
            "type" : "artist",
            "uri" : "spotify:artist:7lbSsjYACZHn1MSDXPxNF2"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
          "disc_number" : 1,
          "duration_ms" : 277706,
          "explicit" : false,
          "external_ids" : {
            "isrc" : "JPU901801545"
          },
          "external_urls" : {
            "spotify" : "https://open.spotify.com/track/2wmGOkqm2Qj9iVjmuID9Ro"
          },
          "href" : "https://api.spotify.com/v1/tracks/2wmGOkqm2Qj9iVjmuID9Ro",
          "id" : "2wmGOkqm2Qj9iVjmuID9Ro",
          "is_local" : false,
          "name" : "誓い",
          "popularity" : 29,
          "preview_url" : "https://p.scdn.co/mp3-preview/9f3bf8b1fa5cf34b42212bd0cf6df471bf7e5c89?cid=547fd8656e964ef1bacb47b20971ae02",
          "track_number" : 1,
          "type" : "track",
          "uri" : "spotify:track:2wmGOkqm2Qj9iVjmuID9Ro"
        }
      }, {
        "added_at" : "2019-01-12T13:00:09Z",
        "track" : {
          "album" : {
            "album_type" : "album",
            "artists" : [ {
              "external_urls" : {
                "spotify" : "https://open.spotify.com/artist/59FrDXDVJz0EKqYg39dnT2"
              },
              "href" : "https://api.spotify.com/v1/artists/59FrDXDVJz0EKqYg39dnT2",
              "id" : "59FrDXDVJz0EKqYg39dnT2",
              "name" : "Jão",
              "type" : "artist",
              "uri" : "spotify:artist:59FrDXDVJz0EKqYg39dnT2"
            } ],
            "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
            "external_urls" : {
              "spotify" : "https://open.spotify.com/album/67a6pDoMKQYOKGMnmUQZbq"
            },
            "href" : "https://api.spotify.com/v1/albums/67a6pDoMKQYOKGMnmUQZbq",
            "id" : "67a6pDoMKQYOKGMnmUQZbq",
            "images" : [ {
              "height" : 640,
              "url" : "https://i.scdn.co/image/ab67616d0000b273ba01cd6034a0f28721b57127",
              "width" : 640
            }, {
              "height" : 300,
              "url" : "https://i.scdn.co/image/ab67616d00001e02ba01cd6034a0f28721b57127",
              "width" : 300
            }, {
              "height" : 64,
              "url" : "https://i.scdn.co/image/ab67616d00004851ba01cd6034a0f28721b57127",
              "width" : 64
            } ],
            "name" : "LOBOS",
            "release_date" : "2018-08-17",
            "release_date_precision" : "day",
            "total_tracks" : 10,
            "type" : "album",
            "uri" : "spotify:album:67a6pDoMKQYOKGMnmUQZbq"
          },
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/59FrDXDVJz0EKqYg39dnT2"
            },
            "href" : "https://api.spotify.com/v1/artists/59FrDXDVJz0EKqYg39dnT2",
            "id" : "59FrDXDVJz0EKqYg39dnT2",
            "name" : "Jão",
            "type" : "artist",
            "uri" : "spotify:artist:59FrDXDVJz0EKqYg39dnT2"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
          "disc_number" : 1,
          "duration_ms" : 174519,
          "explicit" : false,
          "external_ids" : {
            "isrc" : "BXHAC1800024"
          },
          "external_urls" : {
            "spotify" : "https://open.spotify.com/track/1XVN2BVHfKUUcMH0jxSRZ5"
          },
          "href" : "https://api.spotify.com/v1/tracks/1XVN2BVHfKUUcMH0jxSRZ5",
          "id" : "1XVN2BVHfKUUcMH0jxSRZ5",
          "is_local" : false,
          "name" : "Vou Morrer Sozinho",
          "popularity" : 57,
          "preview_url" : "https://p.scdn.co/mp3-preview/371e11ed93e73dc33b9560ae5969a241cb4511e8?cid=547fd8656e964ef1bacb47b20971ae02",
          "track_number" : 1,
          "type" : "track",
          "uri" : "spotify:track:1XVN2BVHfKUUcMH0jxSRZ5"
        }
      }, {
        "added_at" : "2019-01-12T13:00:09Z",
        "track" : {
          "album" : {
            "album_type" : "album",
            "artists" : [ {
              "external_urls" : {
                "spotify" : "https://open.spotify.com/artist/59FrDXDVJz0EKqYg39dnT2"
              },
              "href" : "https://api.spotify.com/v1/artists/59FrDXDVJz0EKqYg39dnT2",
              "id" : "59FrDXDVJz0EKqYg39dnT2",
              "name" : "Jão",
              "type" : "artist",
              "uri" : "spotify:artist:59FrDXDVJz0EKqYg39dnT2"
            } ],
            "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
            "external_urls" : {
              "spotify" : "https://open.spotify.com/album/67a6pDoMKQYOKGMnmUQZbq"
            },
            "href" : "https://api.spotify.com/v1/albums/67a6pDoMKQYOKGMnmUQZbq",
            "id" : "67a6pDoMKQYOKGMnmUQZbq",
            "images" : [ {
              "height" : 640,
              "url" : "https://i.scdn.co/image/ab67616d0000b273ba01cd6034a0f28721b57127",
              "width" : 640
            }, {
              "height" : 300,
              "url" : "https://i.scdn.co/image/ab67616d00001e02ba01cd6034a0f28721b57127",
              "width" : 300
            }, {
              "height" : 64,
              "url" : "https://i.scdn.co/image/ab67616d00004851ba01cd6034a0f28721b57127",
              "width" : 64
            } ],
            "name" : "LOBOS",
            "release_date" : "2018-08-17",
            "release_date_precision" : "day",
            "total_tracks" : 10,
            "type" : "album",
            "uri" : "spotify:album:67a6pDoMKQYOKGMnmUQZbq"
          },
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/59FrDXDVJz0EKqYg39dnT2"
            },
            "href" : "https://api.spotify.com/v1/artists/59FrDXDVJz0EKqYg39dnT2",
            "id" : "59FrDXDVJz0EKqYg39dnT2",
            "name" : "Jão",
            "type" : "artist",
            "uri" : "spotify:artist:59FrDXDVJz0EKqYg39dnT2"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
          "disc_number" : 1,
          "duration_ms" : 196658,
          "explicit" : false,
          "external_ids" : {
            "isrc" : "BXHAC1800022"
          },
          "external_urls" : {
            "spotify" : "https://open.spotify.com/track/7kRhodBTcAQXGoZdTEw8fZ"
          },
          "href" : "https://api.spotify.com/v1/tracks/7kRhodBTcAQXGoZdTEw8fZ",
          "id" : "7kRhodBTcAQXGoZdTEw8fZ",
          "is_local" : false,
          "name" : "Me Beija Com Raiva",
          "popularity" : 56,
          "preview_url" : "https://p.scdn.co/mp3-preview/27d8710500a2fc9a1c17496b1e41099f7d590f64?cid=547fd8656e964ef1bacb47b20971ae02",
          "track_number" : 2,
          "type" : "track",
          "uri" : "spotify:track:7kRhodBTcAQXGoZdTEw8fZ"
        }
      }, {
        "added_at" : "2019-01-12T13:00:09Z",
        "track" : {
          "album" : {
            "album_type" : "album",
            "artists" : [ {
              "external_urls" : {
                "spotify" : "https://open.spotify.com/artist/59FrDXDVJz0EKqYg39dnT2"
              },
              "href" : "https://api.spotify.com/v1/artists/59FrDXDVJz0EKqYg39dnT2",
              "id" : "59FrDXDVJz0EKqYg39dnT2",
              "name" : "Jão",
              "type" : "artist",
              "uri" : "spotify:artist:59FrDXDVJz0EKqYg39dnT2"
            } ],
            "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
            "external_urls" : {
              "spotify" : "https://open.spotify.com/album/67a6pDoMKQYOKGMnmUQZbq"
            },
            "href" : "https://api.spotify.com/v1/albums/67a6pDoMKQYOKGMnmUQZbq",
            "id" : "67a6pDoMKQYOKGMnmUQZbq",
            "images" : [ {
              "height" : 640,
              "url" : "https://i.scdn.co/image/ab67616d0000b273ba01cd6034a0f28721b57127",
              "width" : 640
            }, {
              "height" : 300,
              "url" : "https://i.scdn.co/image/ab67616d00001e02ba01cd6034a0f28721b57127",
              "width" : 300
            }, {
              "height" : 64,
              "url" : "https://i.scdn.co/image/ab67616d00004851ba01cd6034a0f28721b57127",
              "width" : 64
            } ],
            "name" : "LOBOS",
            "release_date" : "2018-08-17",
            "release_date_precision" : "day",
            "total_tracks" : 10,
            "type" : "album",
            "uri" : "spotify:album:67a6pDoMKQYOKGMnmUQZbq"
          },
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/59FrDXDVJz0EKqYg39dnT2"
            },
            "href" : "https://api.spotify.com/v1/artists/59FrDXDVJz0EKqYg39dnT2",
            "id" : "59FrDXDVJz0EKqYg39dnT2",
            "name" : "Jão",
            "type" : "artist",
            "uri" : "spotify:artist:59FrDXDVJz0EKqYg39dnT2"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
          "disc_number" : 1,
          "duration_ms" : 180286,
          "explicit" : false,
          "external_ids" : {
            "isrc" : "BXHAC1800020"
          },
          "external_urls" : {
            "spotify" : "https://open.spotify.com/track/2703CNb2od5iv56bRo2Y3h"
          },
          "href" : "https://api.spotify.com/v1/tracks/2703CNb2od5iv56bRo2Y3h",
          "id" : "2703CNb2od5iv56bRo2Y3h",
          "is_local" : false,
          "name" : "Lindo Demais",
          "popularity" : 46,
          "preview_url" : "https://p.scdn.co/mp3-preview/371cb262e55af986493992638ca13c10359c47fa?cid=547fd8656e964ef1bacb47b20971ae02",
          "track_number" : 3,
          "type" : "track",
          "uri" : "spotify:track:2703CNb2od5iv56bRo2Y3h"
        }
      }, {
        "added_at" : "2019-01-12T13:00:09Z",
        "track" : {
          "album" : {
            "album_type" : "album",
            "artists" : [ {
              "external_urls" : {
                "spotify" : "https://open.spotify.com/artist/59FrDXDVJz0EKqYg39dnT2"
              },
              "href" : "https://api.spotify.com/v1/artists/59FrDXDVJz0EKqYg39dnT2",
              "id" : "59FrDXDVJz0EKqYg39dnT2",
              "name" : "Jão",
              "type" : "artist",
              "uri" : "spotify:artist:59FrDXDVJz0EKqYg39dnT2"
            } ],
            "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
            "external_urls" : {
              "spotify" : "https://open.spotify.com/album/67a6pDoMKQYOKGMnmUQZbq"
            },
            "href" : "https://api.spotify.com/v1/albums/67a6pDoMKQYOKGMnmUQZbq",
            "id" : "67a6pDoMKQYOKGMnmUQZbq",
            "images" : [ {
              "height" : 640,
              "url" : "https://i.scdn.co/image/ab67616d0000b273ba01cd6034a0f28721b57127",
              "width" : 640
            }, {
              "height" : 300,
              "url" : "https://i.scdn.co/image/ab67616d00001e02ba01cd6034a0f28721b57127",
              "width" : 300
            }, {
              "height" : 64,
              "url" : "https://i.scdn.co/image/ab67616d00004851ba01cd6034a0f28721b57127",
              "width" : 64
            } ],
            "name" : "LOBOS",
            "release_date" : "2018-08-17",
            "release_date_precision" : "day",
            "total_tracks" : 10,
            "type" : "album",
            "uri" : "spotify:album:67a6pDoMKQYOKGMnmUQZbq"
          },
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/59FrDXDVJz0EKqYg39dnT2"
            },
            "href" : "https://api.spotify.com/v1/artists/59FrDXDVJz0EKqYg39dnT2",
            "id" : "59FrDXDVJz0EKqYg39dnT2",
            "name" : "Jão",
            "type" : "artist",
            "uri" : "spotify:artist:59FrDXDVJz0EKqYg39dnT2"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
          "disc_number" : 1,
          "duration_ms" : 178186,
          "explicit" : false,
          "external_ids" : {
            "isrc" : "BXHAC1800002"
          },
          "external_urls" : {
            "spotify" : "https://open.spotify.com/track/0S86atec73KKaexn67JsDy"
          },
          "href" : "https://api.spotify.com/v1/tracks/0S86atec73KKaexn67JsDy",
          "id" : "0S86atec73KKaexn67JsDy",
          "is_local" : false,
          "name" : "Imaturo",
          "popularity" : 57,
          "preview_url" : "https://p.scdn.co/mp3-preview/95bcb21b243bc72e5c649499b6298abf31a3b14f?cid=547fd8656e964ef1bacb47b20971ae02",
          "track_number" : 4,
          "type" : "track",
          "uri" : "spotify:track:0S86atec73KKaexn67JsDy"
        }
      }, {
        "added_at" : "2019-01-12T13:00:09Z",
        "track" : {
          "album" : {
            "album_type" : "album",
            "artists" : [ {
              "external_urls" : {
                "spotify" : "https://open.spotify.com/artist/59FrDXDVJz0EKqYg39dnT2"
              },
              "href" : "https://api.spotify.com/v1/artists/59FrDXDVJz0EKqYg39dnT2",
              "id" : "59FrDXDVJz0EKqYg39dnT2",
              "name" : "Jão",
              "type" : "artist",
              "uri" : "spotify:artist:59FrDXDVJz0EKqYg39dnT2"
            } ],
            "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
            "external_urls" : {
              "spotify" : "https://open.spotify.com/album/67a6pDoMKQYOKGMnmUQZbq"
            },
            "href" : "https://api.spotify.com/v1/albums/67a6pDoMKQYOKGMnmUQZbq",
            "id" : "67a6pDoMKQYOKGMnmUQZbq",
            "images" : [ {
              "height" : 640,
              "url" : "https://i.scdn.co/image/ab67616d0000b273ba01cd6034a0f28721b57127",
              "width" : 640
            }, {
              "height" : 300,
              "url" : "https://i.scdn.co/image/ab67616d00001e02ba01cd6034a0f28721b57127",
              "width" : 300
            }, {
              "height" : 64,
              "url" : "https://i.scdn.co/image/ab67616d00004851ba01cd6034a0f28721b57127",
              "width" : 64
            } ],
            "name" : "LOBOS",
            "release_date" : "2018-08-17",
            "release_date_precision" : "day",
            "total_tracks" : 10,
            "type" : "album",
            "uri" : "spotify:album:67a6pDoMKQYOKGMnmUQZbq"
          },
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/59FrDXDVJz0EKqYg39dnT2"
            },
            "href" : "https://api.spotify.com/v1/artists/59FrDXDVJz0EKqYg39dnT2",
            "id" : "59FrDXDVJz0EKqYg39dnT2",
            "name" : "Jão",
            "type" : "artist",
            "uri" : "spotify:artist:59FrDXDVJz0EKqYg39dnT2"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
          "disc_number" : 1,
          "duration_ms" : 190062,
          "explicit" : false,
          "external_ids" : {
            "isrc" : "BXHAC1800017"
          },
          "external_urls" : {
            "spotify" : "https://open.spotify.com/track/55GFbaI6W1laRMFdLdRw8Z"
          },
          "href" : "https://api.spotify.com/v1/tracks/55GFbaI6W1laRMFdLdRw8Z",
          "id" : "55GFbaI6W1laRMFdLdRw8Z",
          "is_local" : false,
          "name" : "Ainda Te Amo",
          "popularity" : 52,
          "preview_url" : "https://p.scdn.co/mp3-preview/85dd6551455ca73ebf7e216fe151af56423160e2?cid=547fd8656e964ef1bacb47b20971ae02",
          "track_number" : 5,
          "type" : "track",
          "uri" : "spotify:track:55GFbaI6W1laRMFdLdRw8Z"
        }
      }, {
        "added_at" : "2019-01-12T13:00:09Z",
        "track" : {
          "album" : {
            "album_type" : "album",
            "artists" : [ {
              "external_urls" : {
                "spotify" : "https://open.spotify.com/artist/59FrDXDVJz0EKqYg39dnT2"
              },
              "href" : "https://api.spotify.com/v1/artists/59FrDXDVJz0EKqYg39dnT2",
              "id" : "59FrDXDVJz0EKqYg39dnT2",
              "name" : "Jão",
              "type" : "artist",
              "uri" : "spotify:artist:59FrDXDVJz0EKqYg39dnT2"
            } ],
            "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
            "external_urls" : {
              "spotify" : "https://open.spotify.com/album/67a6pDoMKQYOKGMnmUQZbq"
            },
            "href" : "https://api.spotify.com/v1/albums/67a6pDoMKQYOKGMnmUQZbq",
            "id" : "67a6pDoMKQYOKGMnmUQZbq",
            "images" : [ {
              "height" : 640,
              "url" : "https://i.scdn.co/image/ab67616d0000b273ba01cd6034a0f28721b57127",
              "width" : 640
            }, {
              "height" : 300,
              "url" : "https://i.scdn.co/image/ab67616d00001e02ba01cd6034a0f28721b57127",
              "width" : 300
            }, {
              "height" : 64,
              "url" : "https://i.scdn.co/image/ab67616d00004851ba01cd6034a0f28721b57127",
              "width" : 64
            } ],
            "name" : "LOBOS",
            "release_date" : "2018-08-17",
            "release_date_precision" : "day",
            "total_tracks" : 10,
            "type" : "album",
            "uri" : "spotify:album:67a6pDoMKQYOKGMnmUQZbq"
          },
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/59FrDXDVJz0EKqYg39dnT2"
            },
            "href" : "https://api.spotify.com/v1/artists/59FrDXDVJz0EKqYg39dnT2",
            "id" : "59FrDXDVJz0EKqYg39dnT2",
            "name" : "Jão",
            "type" : "artist",
            "uri" : "spotify:artist:59FrDXDVJz0EKqYg39dnT2"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
          "disc_number" : 1,
          "duration_ms" : 156297,
          "explicit" : false,
          "external_ids" : {
            "isrc" : "BXHAC1800016"
          },
          "external_urls" : {
            "spotify" : "https://open.spotify.com/track/2OKEIwfQhf2a6lJuR3aMXJ"
          },
          "href" : "https://api.spotify.com/v1/tracks/2OKEIwfQhf2a6lJuR3aMXJ",
          "id" : "2OKEIwfQhf2a6lJuR3aMXJ",
          "is_local" : false,
          "name" : "A Rua",
          "popularity" : 46,
          "preview_url" : "https://p.scdn.co/mp3-preview/2cfa1f6edfd231bf3a8fddb61caf8eeef17f90ff?cid=547fd8656e964ef1bacb47b20971ae02",
          "track_number" : 6,
          "type" : "track",
          "uri" : "spotify:track:2OKEIwfQhf2a6lJuR3aMXJ"
        }
      }, {
        "added_at" : "2019-01-12T13:00:09Z",
        "track" : {
          "album" : {
            "album_type" : "album",
            "artists" : [ {
              "external_urls" : {
                "spotify" : "https://open.spotify.com/artist/59FrDXDVJz0EKqYg39dnT2"
              },
              "href" : "https://api.spotify.com/v1/artists/59FrDXDVJz0EKqYg39dnT2",
              "id" : "59FrDXDVJz0EKqYg39dnT2",
              "name" : "Jão",
              "type" : "artist",
              "uri" : "spotify:artist:59FrDXDVJz0EKqYg39dnT2"
            } ],
            "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
            "external_urls" : {
              "spotify" : "https://open.spotify.com/album/67a6pDoMKQYOKGMnmUQZbq"
            },
            "href" : "https://api.spotify.com/v1/albums/67a6pDoMKQYOKGMnmUQZbq",
            "id" : "67a6pDoMKQYOKGMnmUQZbq",
            "images" : [ {
              "height" : 640,
              "url" : "https://i.scdn.co/image/ab67616d0000b273ba01cd6034a0f28721b57127",
              "width" : 640
            }, {
              "height" : 300,
              "url" : "https://i.scdn.co/image/ab67616d00001e02ba01cd6034a0f28721b57127",
              "width" : 300
            }, {
              "height" : 64,
              "url" : "https://i.scdn.co/image/ab67616d00004851ba01cd6034a0f28721b57127",
              "width" : 64
            } ],
            "name" : "LOBOS",
            "release_date" : "2018-08-17",
            "release_date_precision" : "day",
            "total_tracks" : 10,
            "type" : "album",
            "uri" : "spotify:album:67a6pDoMKQYOKGMnmUQZbq"
          },
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/59FrDXDVJz0EKqYg39dnT2"
            },
            "href" : "https://api.spotify.com/v1/artists/59FrDXDVJz0EKqYg39dnT2",
            "id" : "59FrDXDVJz0EKqYg39dnT2",
            "name" : "Jão",
            "type" : "artist",
            "uri" : "spotify:artist:59FrDXDVJz0EKqYg39dnT2"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
          "disc_number" : 1,
          "duration_ms" : 223090,
          "explicit" : false,
          "external_ids" : {
            "isrc" : "BXHAC1800021"
          },
          "external_urls" : {
            "spotify" : "https://open.spotify.com/track/0x6VtkygihOEhwoPQppHYU"
          },
          "href" : "https://api.spotify.com/v1/tracks/0x6VtkygihOEhwoPQppHYU",
          "id" : "0x6VtkygihOEhwoPQppHYU",
          "is_local" : false,
          "name" : "Lobos",
          "popularity" : 39,
          "preview_url" : "https://p.scdn.co/mp3-preview/62a6f81a4b3371d0ab0b41b34b46d8a4be3510a0?cid=547fd8656e964ef1bacb47b20971ae02",
          "track_number" : 7,
          "type" : "track",
          "uri" : "spotify:track:0x6VtkygihOEhwoPQppHYU"
        }
      }, {
        "added_at" : "2019-01-12T13:00:09Z",
        "track" : {
          "album" : {
            "album_type" : "album",
            "artists" : [ {
              "external_urls" : {
                "spotify" : "https://open.spotify.com/artist/59FrDXDVJz0EKqYg39dnT2"
              },
              "href" : "https://api.spotify.com/v1/artists/59FrDXDVJz0EKqYg39dnT2",
              "id" : "59FrDXDVJz0EKqYg39dnT2",
              "name" : "Jão",
              "type" : "artist",
              "uri" : "spotify:artist:59FrDXDVJz0EKqYg39dnT2"
            } ],
            "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
            "external_urls" : {
              "spotify" : "https://open.spotify.com/album/67a6pDoMKQYOKGMnmUQZbq"
            },
            "href" : "https://api.spotify.com/v1/albums/67a6pDoMKQYOKGMnmUQZbq",
            "id" : "67a6pDoMKQYOKGMnmUQZbq",
            "images" : [ {
              "height" : 640,
              "url" : "https://i.scdn.co/image/ab67616d0000b273ba01cd6034a0f28721b57127",
              "width" : 640
            }, {
              "height" : 300,
              "url" : "https://i.scdn.co/image/ab67616d00001e02ba01cd6034a0f28721b57127",
              "width" : 300
            }, {
              "height" : 64,
              "url" : "https://i.scdn.co/image/ab67616d00004851ba01cd6034a0f28721b57127",
              "width" : 64
            } ],
            "name" : "LOBOS",
            "release_date" : "2018-08-17",
            "release_date_precision" : "day",
            "total_tracks" : 10,
            "type" : "album",
            "uri" : "spotify:album:67a6pDoMKQYOKGMnmUQZbq"
          },
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/59FrDXDVJz0EKqYg39dnT2"
            },
            "href" : "https://api.spotify.com/v1/artists/59FrDXDVJz0EKqYg39dnT2",
            "id" : "59FrDXDVJz0EKqYg39dnT2",
            "name" : "Jão",
            "type" : "artist",
            "uri" : "spotify:artist:59FrDXDVJz0EKqYg39dnT2"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
          "disc_number" : 1,
          "duration_ms" : 189707,
          "explicit" : false,
          "external_ids" : {
            "isrc" : "BXHAC1800018"
          },
          "external_urls" : {
            "spotify" : "https://open.spotify.com/track/3XbqMexOs4oiE9n6ATZ35K"
          },
          "href" : "https://api.spotify.com/v1/tracks/3XbqMexOs4oiE9n6ATZ35K",
          "id" : "3XbqMexOs4oiE9n6ATZ35K",
          "is_local" : false,
          "name" : "Eu Quero Ser Como Você",
          "popularity" : 41,
          "preview_url" : "https://p.scdn.co/mp3-preview/1bb08fb472969ede848940f99468f4dd9dcf40a0?cid=547fd8656e964ef1bacb47b20971ae02",
          "track_number" : 8,
          "type" : "track",
          "uri" : "spotify:track:3XbqMexOs4oiE9n6ATZ35K"
        }
      }, {
        "added_at" : "2019-01-12T13:00:09Z",
        "track" : {
          "album" : {
            "album_type" : "album",
            "artists" : [ {
              "external_urls" : {
                "spotify" : "https://open.spotify.com/artist/59FrDXDVJz0EKqYg39dnT2"
              },
              "href" : "https://api.spotify.com/v1/artists/59FrDXDVJz0EKqYg39dnT2",
              "id" : "59FrDXDVJz0EKqYg39dnT2",
              "name" : "Jão",
              "type" : "artist",
              "uri" : "spotify:artist:59FrDXDVJz0EKqYg39dnT2"
            } ],
            "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
            "external_urls" : {
              "spotify" : "https://open.spotify.com/album/67a6pDoMKQYOKGMnmUQZbq"
            },
            "href" : "https://api.spotify.com/v1/albums/67a6pDoMKQYOKGMnmUQZbq",
            "id" : "67a6pDoMKQYOKGMnmUQZbq",
            "images" : [ {
              "height" : 640,
              "url" : "https://i.scdn.co/image/ab67616d0000b273ba01cd6034a0f28721b57127",
              "width" : 640
            }, {
              "height" : 300,
              "url" : "https://i.scdn.co/image/ab67616d00001e02ba01cd6034a0f28721b57127",
              "width" : 300
            }, {
              "height" : 64,
              "url" : "https://i.scdn.co/image/ab67616d00004851ba01cd6034a0f28721b57127",
              "width" : 64
            } ],
            "name" : "LOBOS",
            "release_date" : "2018-08-17",
            "release_date_precision" : "day",
            "total_tracks" : 10,
            "type" : "album",
            "uri" : "spotify:album:67a6pDoMKQYOKGMnmUQZbq"
          },
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/59FrDXDVJz0EKqYg39dnT2"
            },
            "href" : "https://api.spotify.com/v1/artists/59FrDXDVJz0EKqYg39dnT2",
            "id" : "59FrDXDVJz0EKqYg39dnT2",
            "name" : "Jão",
            "type" : "artist",
            "uri" : "spotify:artist:59FrDXDVJz0EKqYg39dnT2"
          }, {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/3tOS3iTJSHwowFPRdR4Wsf"
            },
            "href" : "https://api.spotify.com/v1/artists/3tOS3iTJSHwowFPRdR4Wsf",
            "id" : "3tOS3iTJSHwowFPRdR4Wsf",
            "name" : "Diogo Piçarra",
            "type" : "artist",
            "uri" : "spotify:artist:3tOS3iTJSHwowFPRdR4Wsf"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
          "disc_number" : 1,
          "duration_ms" : 171347,
          "explicit" : false,
          "external_ids" : {
            "isrc" : "BXHAC1800026"
          },
          "external_urls" : {
            "spotify" : "https://open.spotify.com/track/5rsJRsqaigb8Y39kjmGLmG"
          },
          "href" : "https://api.spotify.com/v1/tracks/5rsJRsqaigb8Y39kjmGLmG",
          "id" : "5rsJRsqaigb8Y39kjmGLmG",
          "is_local" : false,
          "name" : "Aqui",
          "popularity" : 36,
          "preview_url" : "https://p.scdn.co/mp3-preview/13131340ae95ee2337bf033b60e26f49ba670e53?cid=547fd8656e964ef1bacb47b20971ae02",
          "track_number" : 9,
          "type" : "track",
          "uri" : "spotify:track:5rsJRsqaigb8Y39kjmGLmG"
        }
      }, {
        "added_at" : "2019-01-12T13:00:09Z",
        "track" : {
          "album" : {
            "album_type" : "album",
            "artists" : [ {
              "external_urls" : {
                "spotify" : "https://open.spotify.com/artist/59FrDXDVJz0EKqYg39dnT2"
              },
              "href" : "https://api.spotify.com/v1/artists/59FrDXDVJz0EKqYg39dnT2",
              "id" : "59FrDXDVJz0EKqYg39dnT2",
              "name" : "Jão",
              "type" : "artist",
              "uri" : "spotify:artist:59FrDXDVJz0EKqYg39dnT2"
            } ],
            "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
            "external_urls" : {
              "spotify" : "https://open.spotify.com/album/67a6pDoMKQYOKGMnmUQZbq"
            },
            "href" : "https://api.spotify.com/v1/albums/67a6pDoMKQYOKGMnmUQZbq",
            "id" : "67a6pDoMKQYOKGMnmUQZbq",
            "images" : [ {
              "height" : 640,
              "url" : "https://i.scdn.co/image/ab67616d0000b273ba01cd6034a0f28721b57127",
              "width" : 640
            }, {
              "height" : 300,
              "url" : "https://i.scdn.co/image/ab67616d00001e02ba01cd6034a0f28721b57127",
              "width" : 300
            }, {
              "height" : 64,
              "url" : "https://i.scdn.co/image/ab67616d00004851ba01cd6034a0f28721b57127",
              "width" : 64
            } ],
            "name" : "LOBOS",
            "release_date" : "2018-08-17",
            "release_date_precision" : "day",
            "total_tracks" : 10,
            "type" : "album",
            "uri" : "spotify:album:67a6pDoMKQYOKGMnmUQZbq"
          },
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/59FrDXDVJz0EKqYg39dnT2"
            },
            "href" : "https://api.spotify.com/v1/artists/59FrDXDVJz0EKqYg39dnT2",
            "id" : "59FrDXDVJz0EKqYg39dnT2",
            "name" : "Jão",
            "type" : "artist",
            "uri" : "spotify:artist:59FrDXDVJz0EKqYg39dnT2"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
          "disc_number" : 1,
          "duration_ms" : 255028,
          "explicit" : false,
          "external_ids" : {
            "isrc" : "BXHAC1800023"
          },
          "external_urls" : {
            "spotify" : "https://open.spotify.com/track/1y2plShqBMDQ0T6ZhmfmeE"
          },
          "href" : "https://api.spotify.com/v1/tracks/1y2plShqBMDQ0T6ZhmfmeE",
          "id" : "1y2plShqBMDQ0T6ZhmfmeE",
          "is_local" : false,
          "name" : "Monstros",
          "popularity" : 41,
          "preview_url" : "https://p.scdn.co/mp3-preview/69750b5792eac464c32f49be9fd87930974d4d70?cid=547fd8656e964ef1bacb47b20971ae02",
          "track_number" : 10,
          "type" : "track",
          "uri" : "spotify:track:1y2plShqBMDQ0T6ZhmfmeE"
        }
      }, {
        "added_at" : "2019-01-09T20:59:59Z",
        "track" : {
          "album" : {
            "album_type" : "album",
            "artists" : [ {
              "external_urls" : {
                "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
              },
              "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
              "id" : "7IAXZaLTb6nkJr8RmVPn5y",
              "name" : "Angra",
              "type" : "artist",
              "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
            } ],
            "available_markets" : [ ],
            "external_urls" : {
              "spotify" : "https://open.spotify.com/album/7yMXnGqA8VgFVD4L3Y6Xri"
            },
            "href" : "https://api.spotify.com/v1/albums/7yMXnGqA8VgFVD4L3Y6Xri",
            "id" : "7yMXnGqA8VgFVD4L3Y6Xri",
            "images" : [ {
              "height" : 640,
              "url" : "https://i.scdn.co/image/ab67616d0000b273134d6c1b12dba134916e87ce",
              "width" : 640
            }, {
              "height" : 300,
              "url" : "https://i.scdn.co/image/ab67616d00001e02134d6c1b12dba134916e87ce",
              "width" : 300
            }, {
              "height" : 64,
              "url" : "https://i.scdn.co/image/ab67616d00004851134d6c1b12dba134916e87ce",
              "width" : 64
            } ],
            "name" : "Angels Cry",
            "release_date" : "1993",
            "release_date_precision" : "year",
            "total_tracks" : 10,
            "type" : "album",
            "uri" : "spotify:album:7yMXnGqA8VgFVD4L3Y6Xri"
          },
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
            },
            "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
            "id" : "7IAXZaLTb6nkJr8RmVPn5y",
            "name" : "Angra",
            "type" : "artist",
            "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
          } ],
          "available_markets" : [ ],
          "disc_number" : 1,
          "duration_ms" : 402200,
          "explicit" : false,
          "external_ids" : {
            "isrc" : "BRBRI0500782"
          },
          "external_urls" : {
            "spotify" : "https://open.spotify.com/track/3vyDuJHoMBKk76tfqiKn26"
          },
          "href" : "https://api.spotify.com/v1/tracks/3vyDuJHoMBKk76tfqiKn26",
          "id" : "3vyDuJHoMBKk76tfqiKn26",
          "is_local" : false,
          "name" : "Evil Warning",
          "popularity" : 0,
          "preview_url" : null,
          "track_number" : 9,
          "type" : "track",
          "uri" : "spotify:track:3vyDuJHoMBKk76tfqiKn26"
        }
      }, {
        "added_at" : "2018-10-13T14:51:00Z",
        "track" : {
          "album" : {
            "album_type" : "album",
            "artists" : [ {
              "external_urls" : {
                "spotify" : "https://open.spotify.com/artist/1dmuH57XGYywDg64k2YBlY"
              },
              "href" : "https://api.spotify.com/v1/artists/1dmuH57XGYywDg64k2YBlY",
              "id" : "1dmuH57XGYywDg64k2YBlY",
              "name" : "Família Essência",
              "type" : "artist",
              "uri" : "spotify:artist:1dmuH57XGYywDg64k2YBlY"
            } ],
            "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
            "external_urls" : {
              "spotify" : "https://open.spotify.com/album/2F7j4Z0gM3dOprYyKYEW6R"
            },
            "href" : "https://api.spotify.com/v1/albums/2F7j4Z0gM3dOprYyKYEW6R",
            "id" : "2F7j4Z0gM3dOprYyKYEW6R",
            "images" : [ {
              "height" : 640,
              "url" : "https://i.scdn.co/image/ab67616d0000b273e4058000921a0aa7d69bbf76",
              "width" : 640
            }, {
              "height" : 300,
              "url" : "https://i.scdn.co/image/ab67616d00001e02e4058000921a0aa7d69bbf76",
              "width" : 300
            }, {
              "height" : 64,
              "url" : "https://i.scdn.co/image/ab67616d00004851e4058000921a0aa7d69bbf76",
              "width" : 64
            } ],
            "name" : "Vou Voltar",
            "release_date" : "2018-09-02",
            "release_date_precision" : "day",
            "total_tracks" : 10,
            "type" : "album",
            "uri" : "spotify:album:2F7j4Z0gM3dOprYyKYEW6R"
          },
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/1dmuH57XGYywDg64k2YBlY"
            },
            "href" : "https://api.spotify.com/v1/artists/1dmuH57XGYywDg64k2YBlY",
            "id" : "1dmuH57XGYywDg64k2YBlY",
            "name" : "Família Essência",
            "type" : "artist",
            "uri" : "spotify:artist:1dmuH57XGYywDg64k2YBlY"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
          "disc_number" : 1,
          "duration_ms" : 243426,
          "explicit" : false,
          "external_ids" : {
            "isrc" : "BRA9B1800001"
          },
          "external_urls" : {
            "spotify" : "https://open.spotify.com/track/0ybbz4MmtY1DkGQX5VeRKB"
          },
          "href" : "https://api.spotify.com/v1/tracks/0ybbz4MmtY1DkGQX5VeRKB",
          "id" : "0ybbz4MmtY1DkGQX5VeRKB",
          "is_local" : false,
          "name" : "Perdoado",
          "popularity" : 2,
          "preview_url" : "https://p.scdn.co/mp3-preview/25584479ec13fc9c4a2bad144aea91f886118020?cid=547fd8656e964ef1bacb47b20971ae02",
          "track_number" : 1,
          "type" : "track",
          "uri" : "spotify:track:0ybbz4MmtY1DkGQX5VeRKB"
        }
      }, {
        "added_at" : "2018-10-13T14:51:00Z",
        "track" : {
          "album" : {
            "album_type" : "album",
            "artists" : [ {
              "external_urls" : {
                "spotify" : "https://open.spotify.com/artist/1dmuH57XGYywDg64k2YBlY"
              },
              "href" : "https://api.spotify.com/v1/artists/1dmuH57XGYywDg64k2YBlY",
              "id" : "1dmuH57XGYywDg64k2YBlY",
              "name" : "Família Essência",
              "type" : "artist",
              "uri" : "spotify:artist:1dmuH57XGYywDg64k2YBlY"
            } ],
            "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
            "external_urls" : {
              "spotify" : "https://open.spotify.com/album/2F7j4Z0gM3dOprYyKYEW6R"
            },
            "href" : "https://api.spotify.com/v1/albums/2F7j4Z0gM3dOprYyKYEW6R",
            "id" : "2F7j4Z0gM3dOprYyKYEW6R",
            "images" : [ {
              "height" : 640,
              "url" : "https://i.scdn.co/image/ab67616d0000b273e4058000921a0aa7d69bbf76",
              "width" : 640
            }, {
              "height" : 300,
              "url" : "https://i.scdn.co/image/ab67616d00001e02e4058000921a0aa7d69bbf76",
              "width" : 300
            }, {
              "height" : 64,
              "url" : "https://i.scdn.co/image/ab67616d00004851e4058000921a0aa7d69bbf76",
              "width" : 64
            } ],
            "name" : "Vou Voltar",
            "release_date" : "2018-09-02",
            "release_date_precision" : "day",
            "total_tracks" : 10,
            "type" : "album",
            "uri" : "spotify:album:2F7j4Z0gM3dOprYyKYEW6R"
          },
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/1dmuH57XGYywDg64k2YBlY"
            },
            "href" : "https://api.spotify.com/v1/artists/1dmuH57XGYywDg64k2YBlY",
            "id" : "1dmuH57XGYywDg64k2YBlY",
            "name" : "Família Essência",
            "type" : "artist",
            "uri" : "spotify:artist:1dmuH57XGYywDg64k2YBlY"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
          "disc_number" : 1,
          "duration_ms" : 353280,
          "explicit" : false,
          "external_ids" : {
            "isrc" : "BRA9B1800002"
          },
          "external_urls" : {
            "spotify" : "https://open.spotify.com/track/304pQCGl5qpkgzYriMvmHw"
          },
          "href" : "https://api.spotify.com/v1/tracks/304pQCGl5qpkgzYriMvmHw",
          "id" : "304pQCGl5qpkgzYriMvmHw",
          "is_local" : false,
          "name" : "Ele Me Amou",
          "popularity" : 2,
          "preview_url" : "https://p.scdn.co/mp3-preview/c8d3feb052636dcb34a9ab46dec7383b8c00c1b4?cid=547fd8656e964ef1bacb47b20971ae02",
          "track_number" : 2,
          "type" : "track",
          "uri" : "spotify:track:304pQCGl5qpkgzYriMvmHw"
        }
      }, {
        "added_at" : "2018-10-13T14:51:00Z",
        "track" : {
          "album" : {
            "album_type" : "album",
            "artists" : [ {
              "external_urls" : {
                "spotify" : "https://open.spotify.com/artist/1dmuH57XGYywDg64k2YBlY"
              },
              "href" : "https://api.spotify.com/v1/artists/1dmuH57XGYywDg64k2YBlY",
              "id" : "1dmuH57XGYywDg64k2YBlY",
              "name" : "Família Essência",
              "type" : "artist",
              "uri" : "spotify:artist:1dmuH57XGYywDg64k2YBlY"
            } ],
            "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
            "external_urls" : {
              "spotify" : "https://open.spotify.com/album/2F7j4Z0gM3dOprYyKYEW6R"
            },
            "href" : "https://api.spotify.com/v1/albums/2F7j4Z0gM3dOprYyKYEW6R",
            "id" : "2F7j4Z0gM3dOprYyKYEW6R",
            "images" : [ {
              "height" : 640,
              "url" : "https://i.scdn.co/image/ab67616d0000b273e4058000921a0aa7d69bbf76",
              "width" : 640
            }, {
              "height" : 300,
              "url" : "https://i.scdn.co/image/ab67616d00001e02e4058000921a0aa7d69bbf76",
              "width" : 300
            }, {
              "height" : 64,
              "url" : "https://i.scdn.co/image/ab67616d00004851e4058000921a0aa7d69bbf76",
              "width" : 64
            } ],
            "name" : "Vou Voltar",
            "release_date" : "2018-09-02",
            "release_date_precision" : "day",
            "total_tracks" : 10,
            "type" : "album",
            "uri" : "spotify:album:2F7j4Z0gM3dOprYyKYEW6R"
          },
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/1dmuH57XGYywDg64k2YBlY"
            },
            "href" : "https://api.spotify.com/v1/artists/1dmuH57XGYywDg64k2YBlY",
            "id" : "1dmuH57XGYywDg64k2YBlY",
            "name" : "Família Essência",
            "type" : "artist",
            "uri" : "spotify:artist:1dmuH57XGYywDg64k2YBlY"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
          "disc_number" : 1,
          "duration_ms" : 211426,
          "explicit" : false,
          "external_ids" : {
            "isrc" : "BRA9B1800003"
          },
          "external_urls" : {
            "spotify" : "https://open.spotify.com/track/0DE41Rb9IMgzKWSehVJnVu"
          },
          "href" : "https://api.spotify.com/v1/tracks/0DE41Rb9IMgzKWSehVJnVu",
          "id" : "0DE41Rb9IMgzKWSehVJnVu",
          "is_local" : false,
          "name" : "Digitais",
          "popularity" : 0,
          "preview_url" : "https://p.scdn.co/mp3-preview/db3ebe6b38b4484144865e1f792116984daea8ee?cid=547fd8656e964ef1bacb47b20971ae02",
          "track_number" : 3,
          "type" : "track",
          "uri" : "spotify:track:0DE41Rb9IMgzKWSehVJnVu"
        }
      }, {
        "added_at" : "2018-10-13T14:51:00Z",
        "track" : {
          "album" : {
            "album_type" : "album",
            "artists" : [ {
              "external_urls" : {
                "spotify" : "https://open.spotify.com/artist/1dmuH57XGYywDg64k2YBlY"
              },
              "href" : "https://api.spotify.com/v1/artists/1dmuH57XGYywDg64k2YBlY",
              "id" : "1dmuH57XGYywDg64k2YBlY",
              "name" : "Família Essência",
              "type" : "artist",
              "uri" : "spotify:artist:1dmuH57XGYywDg64k2YBlY"
            } ],
            "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
            "external_urls" : {
              "spotify" : "https://open.spotify.com/album/2F7j4Z0gM3dOprYyKYEW6R"
            },
            "href" : "https://api.spotify.com/v1/albums/2F7j4Z0gM3dOprYyKYEW6R",
            "id" : "2F7j4Z0gM3dOprYyKYEW6R",
            "images" : [ {
              "height" : 640,
              "url" : "https://i.scdn.co/image/ab67616d0000b273e4058000921a0aa7d69bbf76",
              "width" : 640
            }, {
              "height" : 300,
              "url" : "https://i.scdn.co/image/ab67616d00001e02e4058000921a0aa7d69bbf76",
              "width" : 300
            }, {
              "height" : 64,
              "url" : "https://i.scdn.co/image/ab67616d00004851e4058000921a0aa7d69bbf76",
              "width" : 64
            } ],
            "name" : "Vou Voltar",
            "release_date" : "2018-09-02",
            "release_date_precision" : "day",
            "total_tracks" : 10,
            "type" : "album",
            "uri" : "spotify:album:2F7j4Z0gM3dOprYyKYEW6R"
          },
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/1dmuH57XGYywDg64k2YBlY"
            },
            "href" : "https://api.spotify.com/v1/artists/1dmuH57XGYywDg64k2YBlY",
            "id" : "1dmuH57XGYywDg64k2YBlY",
            "name" : "Família Essência",
            "type" : "artist",
            "uri" : "spotify:artist:1dmuH57XGYywDg64k2YBlY"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
          "disc_number" : 1,
          "duration_ms" : 259079,
          "explicit" : false,
          "external_ids" : {
            "isrc" : "BRA9B1800004"
          },
          "external_urls" : {
            "spotify" : "https://open.spotify.com/track/3oOg23nxKvjIrLUQz1QuY6"
          },
          "href" : "https://api.spotify.com/v1/tracks/3oOg23nxKvjIrLUQz1QuY6",
          "id" : "3oOg23nxKvjIrLUQz1QuY6",
          "is_local" : false,
          "name" : "Nunca Te Deixarei",
          "popularity" : 1,
          "preview_url" : "https://p.scdn.co/mp3-preview/6cc1b10e810493d8f2ee78da8cacb725d0dec250?cid=547fd8656e964ef1bacb47b20971ae02",
          "track_number" : 4,
          "type" : "track",
          "uri" : "spotify:track:3oOg23nxKvjIrLUQz1QuY6"
        }
      }, {
        "added_at" : "2018-10-13T14:51:00Z",
        "track" : {
          "album" : {
            "album_type" : "album",
            "artists" : [ {
              "external_urls" : {
                "spotify" : "https://open.spotify.com/artist/1dmuH57XGYywDg64k2YBlY"
              },
              "href" : "https://api.spotify.com/v1/artists/1dmuH57XGYywDg64k2YBlY",
              "id" : "1dmuH57XGYywDg64k2YBlY",
              "name" : "Família Essência",
              "type" : "artist",
              "uri" : "spotify:artist:1dmuH57XGYywDg64k2YBlY"
            } ],
            "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
            "external_urls" : {
              "spotify" : "https://open.spotify.com/album/2F7j4Z0gM3dOprYyKYEW6R"
            },
            "href" : "https://api.spotify.com/v1/albums/2F7j4Z0gM3dOprYyKYEW6R",
            "id" : "2F7j4Z0gM3dOprYyKYEW6R",
            "images" : [ {
              "height" : 640,
              "url" : "https://i.scdn.co/image/ab67616d0000b273e4058000921a0aa7d69bbf76",
              "width" : 640
            }, {
              "height" : 300,
              "url" : "https://i.scdn.co/image/ab67616d00001e02e4058000921a0aa7d69bbf76",
              "width" : 300
            }, {
              "height" : 64,
              "url" : "https://i.scdn.co/image/ab67616d00004851e4058000921a0aa7d69bbf76",
              "width" : 64
            } ],
            "name" : "Vou Voltar",
            "release_date" : "2018-09-02",
            "release_date_precision" : "day",
            "total_tracks" : 10,
            "type" : "album",
            "uri" : "spotify:album:2F7j4Z0gM3dOprYyKYEW6R"
          },
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/1dmuH57XGYywDg64k2YBlY"
            },
            "href" : "https://api.spotify.com/v1/artists/1dmuH57XGYywDg64k2YBlY",
            "id" : "1dmuH57XGYywDg64k2YBlY",
            "name" : "Família Essência",
            "type" : "artist",
            "uri" : "spotify:artist:1dmuH57XGYywDg64k2YBlY"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
          "disc_number" : 1,
          "duration_ms" : 315386,
          "explicit" : false,
          "external_ids" : {
            "isrc" : "BRA9B1800005"
          },
          "external_urls" : {
            "spotify" : "https://open.spotify.com/track/3W1Tqq2UReMSoXCuINP94W"
          },
          "href" : "https://api.spotify.com/v1/tracks/3W1Tqq2UReMSoXCuINP94W",
          "id" : "3W1Tqq2UReMSoXCuINP94W",
          "is_local" : false,
          "name" : "Vou Voltar",
          "popularity" : 1,
          "preview_url" : "https://p.scdn.co/mp3-preview/3af9c19feb0b8a73cd125acd4996fbc3237c12e3?cid=547fd8656e964ef1bacb47b20971ae02",
          "track_number" : 5,
          "type" : "track",
          "uri" : "spotify:track:3W1Tqq2UReMSoXCuINP94W"
        }
      }, {
        "added_at" : "2018-10-13T14:51:00Z",
        "track" : {
          "album" : {
            "album_type" : "album",
            "artists" : [ {
              "external_urls" : {
                "spotify" : "https://open.spotify.com/artist/1dmuH57XGYywDg64k2YBlY"
              },
              "href" : "https://api.spotify.com/v1/artists/1dmuH57XGYywDg64k2YBlY",
              "id" : "1dmuH57XGYywDg64k2YBlY",
              "name" : "Família Essência",
              "type" : "artist",
              "uri" : "spotify:artist:1dmuH57XGYywDg64k2YBlY"
            } ],
            "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
            "external_urls" : {
              "spotify" : "https://open.spotify.com/album/2F7j4Z0gM3dOprYyKYEW6R"
            },
            "href" : "https://api.spotify.com/v1/albums/2F7j4Z0gM3dOprYyKYEW6R",
            "id" : "2F7j4Z0gM3dOprYyKYEW6R",
            "images" : [ {
              "height" : 640,
              "url" : "https://i.scdn.co/image/ab67616d0000b273e4058000921a0aa7d69bbf76",
              "width" : 640
            }, {
              "height" : 300,
              "url" : "https://i.scdn.co/image/ab67616d00001e02e4058000921a0aa7d69bbf76",
              "width" : 300
            }, {
              "height" : 64,
              "url" : "https://i.scdn.co/image/ab67616d00004851e4058000921a0aa7d69bbf76",
              "width" : 64
            } ],
            "name" : "Vou Voltar",
            "release_date" : "2018-09-02",
            "release_date_precision" : "day",
            "total_tracks" : 10,
            "type" : "album",
            "uri" : "spotify:album:2F7j4Z0gM3dOprYyKYEW6R"
          },
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/1dmuH57XGYywDg64k2YBlY"
            },
            "href" : "https://api.spotify.com/v1/artists/1dmuH57XGYywDg64k2YBlY",
            "id" : "1dmuH57XGYywDg64k2YBlY",
            "name" : "Família Essência",
            "type" : "artist",
            "uri" : "spotify:artist:1dmuH57XGYywDg64k2YBlY"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
          "disc_number" : 1,
          "duration_ms" : 274586,
          "explicit" : false,
          "external_ids" : {
            "isrc" : "BRA9B1800006"
          },
          "external_urls" : {
            "spotify" : "https://open.spotify.com/track/4QlzEpEV74g8TVbzRLydAb"
          },
          "href" : "https://api.spotify.com/v1/tracks/4QlzEpEV74g8TVbzRLydAb",
          "id" : "4QlzEpEV74g8TVbzRLydAb",
          "is_local" : false,
          "name" : "Escolho Deus",
          "popularity" : 0,
          "preview_url" : "https://p.scdn.co/mp3-preview/14acc27d5a0089c91b83e8826915cd4a421d4faa?cid=547fd8656e964ef1bacb47b20971ae02",
          "track_number" : 6,
          "type" : "track",
          "uri" : "spotify:track:4QlzEpEV74g8TVbzRLydAb"
        }
      }, {
        "added_at" : "2018-10-13T14:51:00Z",
        "track" : {
          "album" : {
            "album_type" : "album",
            "artists" : [ {
              "external_urls" : {
                "spotify" : "https://open.spotify.com/artist/1dmuH57XGYywDg64k2YBlY"
              },
              "href" : "https://api.spotify.com/v1/artists/1dmuH57XGYywDg64k2YBlY",
              "id" : "1dmuH57XGYywDg64k2YBlY",
              "name" : "Família Essência",
              "type" : "artist",
              "uri" : "spotify:artist:1dmuH57XGYywDg64k2YBlY"
            } ],
            "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
            "external_urls" : {
              "spotify" : "https://open.spotify.com/album/2F7j4Z0gM3dOprYyKYEW6R"
            },
            "href" : "https://api.spotify.com/v1/albums/2F7j4Z0gM3dOprYyKYEW6R",
            "id" : "2F7j4Z0gM3dOprYyKYEW6R",
            "images" : [ {
              "height" : 640,
              "url" : "https://i.scdn.co/image/ab67616d0000b273e4058000921a0aa7d69bbf76",
              "width" : 640
            }, {
              "height" : 300,
              "url" : "https://i.scdn.co/image/ab67616d00001e02e4058000921a0aa7d69bbf76",
              "width" : 300
            }, {
              "height" : 64,
              "url" : "https://i.scdn.co/image/ab67616d00004851e4058000921a0aa7d69bbf76",
              "width" : 64
            } ],
            "name" : "Vou Voltar",
            "release_date" : "2018-09-02",
            "release_date_precision" : "day",
            "total_tracks" : 10,
            "type" : "album",
            "uri" : "spotify:album:2F7j4Z0gM3dOprYyKYEW6R"
          },
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/1dmuH57XGYywDg64k2YBlY"
            },
            "href" : "https://api.spotify.com/v1/artists/1dmuH57XGYywDg64k2YBlY",
            "id" : "1dmuH57XGYywDg64k2YBlY",
            "name" : "Família Essência",
            "type" : "artist",
            "uri" : "spotify:artist:1dmuH57XGYywDg64k2YBlY"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
          "disc_number" : 1,
          "duration_ms" : 206840,
          "explicit" : false,
          "external_ids" : {
            "isrc" : "BRA9B1800007"
          },
          "external_urls" : {
            "spotify" : "https://open.spotify.com/track/144dCZYegQOGJWnEN9BBF2"
          },
          "href" : "https://api.spotify.com/v1/tracks/144dCZYegQOGJWnEN9BBF2",
          "id" : "144dCZYegQOGJWnEN9BBF2",
          "is_local" : false,
          "name" : "Esse É Meu Coração",
          "popularity" : 0,
          "preview_url" : "https://p.scdn.co/mp3-preview/d6d9e48caaee887100989a3104e0cf0a0c78a5db?cid=547fd8656e964ef1bacb47b20971ae02",
          "track_number" : 7,
          "type" : "track",
          "uri" : "spotify:track:144dCZYegQOGJWnEN9BBF2"
        }
      }, {
        "added_at" : "2018-10-13T14:51:00Z",
        "track" : {
          "album" : {
            "album_type" : "album",
            "artists" : [ {
              "external_urls" : {
                "spotify" : "https://open.spotify.com/artist/1dmuH57XGYywDg64k2YBlY"
              },
              "href" : "https://api.spotify.com/v1/artists/1dmuH57XGYywDg64k2YBlY",
              "id" : "1dmuH57XGYywDg64k2YBlY",
              "name" : "Família Essência",
              "type" : "artist",
              "uri" : "spotify:artist:1dmuH57XGYywDg64k2YBlY"
            } ],
            "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
            "external_urls" : {
              "spotify" : "https://open.spotify.com/album/2F7j4Z0gM3dOprYyKYEW6R"
            },
            "href" : "https://api.spotify.com/v1/albums/2F7j4Z0gM3dOprYyKYEW6R",
            "id" : "2F7j4Z0gM3dOprYyKYEW6R",
            "images" : [ {
              "height" : 640,
              "url" : "https://i.scdn.co/image/ab67616d0000b273e4058000921a0aa7d69bbf76",
              "width" : 640
            }, {
              "height" : 300,
              "url" : "https://i.scdn.co/image/ab67616d00001e02e4058000921a0aa7d69bbf76",
              "width" : 300
            }, {
              "height" : 64,
              "url" : "https://i.scdn.co/image/ab67616d00004851e4058000921a0aa7d69bbf76",
              "width" : 64
            } ],
            "name" : "Vou Voltar",
            "release_date" : "2018-09-02",
            "release_date_precision" : "day",
            "total_tracks" : 10,
            "type" : "album",
            "uri" : "spotify:album:2F7j4Z0gM3dOprYyKYEW6R"
          },
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/1dmuH57XGYywDg64k2YBlY"
            },
            "href" : "https://api.spotify.com/v1/artists/1dmuH57XGYywDg64k2YBlY",
            "id" : "1dmuH57XGYywDg64k2YBlY",
            "name" : "Família Essência",
            "type" : "artist",
            "uri" : "spotify:artist:1dmuH57XGYywDg64k2YBlY"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
          "disc_number" : 1,
          "duration_ms" : 221000,
          "explicit" : false,
          "external_ids" : {
            "isrc" : "BRA9B1800008"
          },
          "external_urls" : {
            "spotify" : "https://open.spotify.com/track/3pMGXpNiJIZl4ujpMwdxQ4"
          },
          "href" : "https://api.spotify.com/v1/tracks/3pMGXpNiJIZl4ujpMwdxQ4",
          "id" : "3pMGXpNiJIZl4ujpMwdxQ4",
          "is_local" : false,
          "name" : "Mais Que Vencedor",
          "popularity" : 0,
          "preview_url" : "https://p.scdn.co/mp3-preview/10e810b3adab06bde2bbd6e52c2e5d252d88a2c3?cid=547fd8656e964ef1bacb47b20971ae02",
          "track_number" : 8,
          "type" : "track",
          "uri" : "spotify:track:3pMGXpNiJIZl4ujpMwdxQ4"
        }
      }, {
        "added_at" : "2018-10-13T14:51:00Z",
        "track" : {
          "album" : {
            "album_type" : "album",
            "artists" : [ {
              "external_urls" : {
                "spotify" : "https://open.spotify.com/artist/1dmuH57XGYywDg64k2YBlY"
              },
              "href" : "https://api.spotify.com/v1/artists/1dmuH57XGYywDg64k2YBlY",
              "id" : "1dmuH57XGYywDg64k2YBlY",
              "name" : "Família Essência",
              "type" : "artist",
              "uri" : "spotify:artist:1dmuH57XGYywDg64k2YBlY"
            } ],
            "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
            "external_urls" : {
              "spotify" : "https://open.spotify.com/album/2F7j4Z0gM3dOprYyKYEW6R"
            },
            "href" : "https://api.spotify.com/v1/albums/2F7j4Z0gM3dOprYyKYEW6R",
            "id" : "2F7j4Z0gM3dOprYyKYEW6R",
            "images" : [ {
              "height" : 640,
              "url" : "https://i.scdn.co/image/ab67616d0000b273e4058000921a0aa7d69bbf76",
              "width" : 640
            }, {
              "height" : 300,
              "url" : "https://i.scdn.co/image/ab67616d00001e02e4058000921a0aa7d69bbf76",
              "width" : 300
            }, {
              "height" : 64,
              "url" : "https://i.scdn.co/image/ab67616d00004851e4058000921a0aa7d69bbf76",
              "width" : 64
            } ],
            "name" : "Vou Voltar",
            "release_date" : "2018-09-02",
            "release_date_precision" : "day",
            "total_tracks" : 10,
            "type" : "album",
            "uri" : "spotify:album:2F7j4Z0gM3dOprYyKYEW6R"
          },
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/1dmuH57XGYywDg64k2YBlY"
            },
            "href" : "https://api.spotify.com/v1/artists/1dmuH57XGYywDg64k2YBlY",
            "id" : "1dmuH57XGYywDg64k2YBlY",
            "name" : "Família Essência",
            "type" : "artist",
            "uri" : "spotify:artist:1dmuH57XGYywDg64k2YBlY"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
          "disc_number" : 1,
          "duration_ms" : 222480,
          "explicit" : false,
          "external_ids" : {
            "isrc" : "BRA9B1800009"
          },
          "external_urls" : {
            "spotify" : "https://open.spotify.com/track/1FKu9jaBF19qFG8Xr2AJrB"
          },
          "href" : "https://api.spotify.com/v1/tracks/1FKu9jaBF19qFG8Xr2AJrB",
          "id" : "1FKu9jaBF19qFG8Xr2AJrB",
          "is_local" : false,
          "name" : "Te Louvamos",
          "popularity" : 0,
          "preview_url" : "https://p.scdn.co/mp3-preview/e9d9d1bd16c175bfca054c7b41ed98c06c69265a?cid=547fd8656e964ef1bacb47b20971ae02",
          "track_number" : 9,
          "type" : "track",
          "uri" : "spotify:track:1FKu9jaBF19qFG8Xr2AJrB"
        }
      }, {
        "added_at" : "2018-10-13T14:51:00Z",
        "track" : {
          "album" : {
            "album_type" : "album",
            "artists" : [ {
              "external_urls" : {
                "spotify" : "https://open.spotify.com/artist/1dmuH57XGYywDg64k2YBlY"
              },
              "href" : "https://api.spotify.com/v1/artists/1dmuH57XGYywDg64k2YBlY",
              "id" : "1dmuH57XGYywDg64k2YBlY",
              "name" : "Família Essência",
              "type" : "artist",
              "uri" : "spotify:artist:1dmuH57XGYywDg64k2YBlY"
            } ],
            "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
            "external_urls" : {
              "spotify" : "https://open.spotify.com/album/2F7j4Z0gM3dOprYyKYEW6R"
            },
            "href" : "https://api.spotify.com/v1/albums/2F7j4Z0gM3dOprYyKYEW6R",
            "id" : "2F7j4Z0gM3dOprYyKYEW6R",
            "images" : [ {
              "height" : 640,
              "url" : "https://i.scdn.co/image/ab67616d0000b273e4058000921a0aa7d69bbf76",
              "width" : 640
            }, {
              "height" : 300,
              "url" : "https://i.scdn.co/image/ab67616d00001e02e4058000921a0aa7d69bbf76",
              "width" : 300
            }, {
              "height" : 64,
              "url" : "https://i.scdn.co/image/ab67616d00004851e4058000921a0aa7d69bbf76",
              "width" : 64
            } ],
            "name" : "Vou Voltar",
            "release_date" : "2018-09-02",
            "release_date_precision" : "day",
            "total_tracks" : 10,
            "type" : "album",
            "uri" : "spotify:album:2F7j4Z0gM3dOprYyKYEW6R"
          },
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/1dmuH57XGYywDg64k2YBlY"
            },
            "href" : "https://api.spotify.com/v1/artists/1dmuH57XGYywDg64k2YBlY",
            "id" : "1dmuH57XGYywDg64k2YBlY",
            "name" : "Família Essência",
            "type" : "artist",
            "uri" : "spotify:artist:1dmuH57XGYywDg64k2YBlY"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
          "disc_number" : 1,
          "duration_ms" : 251160,
          "explicit" : false,
          "external_ids" : {
            "isrc" : "BRA9B1800010"
          },
          "external_urls" : {
            "spotify" : "https://open.spotify.com/track/3TfuK7qMHxAIwUeLjBeu0x"
          },
          "href" : "https://api.spotify.com/v1/tracks/3TfuK7qMHxAIwUeLjBeu0x",
          "id" : "3TfuK7qMHxAIwUeLjBeu0x",
          "is_local" : false,
          "name" : "Filho Meu",
          "popularity" : 0,
          "preview_url" : "https://p.scdn.co/mp3-preview/b042f83343074b826f1453cb0d42293fb520048d?cid=547fd8656e964ef1bacb47b20971ae02",
          "track_number" : 10,
          "type" : "track",
          "uri" : "spotify:track:3TfuK7qMHxAIwUeLjBeu0x"
        }
      }, {
        "added_at" : "2018-09-13T18:00:36Z",
        "track" : {
          "album" : {
            "album_type" : "album",
            "artists" : [ {
              "external_urls" : {
                "spotify" : "https://open.spotify.com/artist/2DaxqgrOhkeH0fpeiQq2f4"
              },
              "href" : "https://api.spotify.com/v1/artists/2DaxqgrOhkeH0fpeiQq2f4",
              "id" : "2DaxqgrOhkeH0fpeiQq2f4",
              "name" : "Oasis",
              "type" : "artist",
              "uri" : "spotify:artist:2DaxqgrOhkeH0fpeiQq2f4"
            } ],
            "available_markets" : [ "AE", "AL", "AR", "AU", "BA", "BG", "BH", "BO", "BR", "BY", "CL", "CO", "CR", "CY", "CZ", "DO", "EC", "EG", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IL", "IN", "IT", "JO", "KW", "KZ", "LB", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PY", "QA", "RO", "RS", "RU", "SA", "SG", "SI", "SK", "SV", "TH", "TR", "TW", "UA", "UY", "VN", "XK", "ZA" ],
            "external_urls" : {
              "spotify" : "https://open.spotify.com/album/1VW1MFNstaJuygaoTPkdCk"
            },
            "href" : "https://api.spotify.com/v1/albums/1VW1MFNstaJuygaoTPkdCk",
            "id" : "1VW1MFNstaJuygaoTPkdCk",
            "images" : [ {
              "height" : 640,
              "url" : "https://i.scdn.co/image/ab67616d0000b27385e5dcc05cc216a10f141480",
              "width" : 640
            }, {
              "height" : 300,
              "url" : "https://i.scdn.co/image/ab67616d00001e0285e5dcc05cc216a10f141480",
              "width" : 300
            }, {
              "height" : 64,
              "url" : "https://i.scdn.co/image/ab67616d0000485185e5dcc05cc216a10f141480",
              "width" : 64
            } ],
            "name" : "(What's The Story) Morning Glory? [Remastered]",
            "release_date" : "1995-10-02",
            "release_date_precision" : "day",
            "total_tracks" : 40,
            "type" : "album",
            "uri" : "spotify:album:1VW1MFNstaJuygaoTPkdCk"
          },
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/2DaxqgrOhkeH0fpeiQq2f4"
            },
            "href" : "https://api.spotify.com/v1/artists/2DaxqgrOhkeH0fpeiQq2f4",
            "id" : "2DaxqgrOhkeH0fpeiQq2f4",
            "name" : "Oasis",
            "type" : "artist",
            "uri" : "spotify:artist:2DaxqgrOhkeH0fpeiQq2f4"
          } ],
          "available_markets" : [ "AE", "AL", "AR", "AU", "BA", "BG", "BH", "BO", "BR", "BY", "CL", "CO", "CR", "CY", "CZ", "DO", "EC", "EG", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IL", "IN", "IT", "JO", "KW", "KZ", "LB", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PY", "QA", "RO", "RS", "RU", "SA", "SG", "SI", "SK", "SV", "TH", "TR", "TW", "UA", "UY", "VN", "XK", "ZA" ],
          "disc_number" : 1,
          "duration_ms" : 258773,
          "explicit" : false,
          "external_ids" : {
            "isrc" : "GBQCP1400109"
          },
          "external_urls" : {
            "spotify" : "https://open.spotify.com/track/5qqabIl2vWzo9ApSC317sa"
          },
          "href" : "https://api.spotify.com/v1/tracks/5qqabIl2vWzo9ApSC317sa",
          "id" : "5qqabIl2vWzo9ApSC317sa",
          "is_local" : false,
          "name" : "Wonderwall - Remastered",
          "popularity" : 77,
          "preview_url" : "https://p.scdn.co/mp3-preview/d012e536916c927bd6c8ced0dae75ee3b7715983?cid=547fd8656e964ef1bacb47b20971ae02",
          "track_number" : 3,
          "type" : "track",
          "uri" : "spotify:track:5qqabIl2vWzo9ApSC317sa"
        }
      }, {
        "added_at" : "2018-09-06T11:45:05Z",
        "track" : {
          "album" : {
            "album_type" : "album",
            "artists" : [ {
              "external_urls" : {
                "spotify" : "https://open.spotify.com/artist/3LkSiHbjqOHCKCqBfEZOTv"
              },
              "href" : "https://api.spotify.com/v1/artists/3LkSiHbjqOHCKCqBfEZOTv",
              "id" : "3LkSiHbjqOHCKCqBfEZOTv",
              "name" : "Atreyu",
              "type" : "artist",
              "uri" : "spotify:artist:3LkSiHbjqOHCKCqBfEZOTv"
            } ],
            "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
            "external_urls" : {
              "spotify" : "https://open.spotify.com/album/2S7Gg4uwg8Xh7WC4abXpAK"
            },
            "href" : "https://api.spotify.com/v1/albums/2S7Gg4uwg8Xh7WC4abXpAK",
            "id" : "2S7Gg4uwg8Xh7WC4abXpAK",
            "images" : [ {
              "height" : 640,
              "url" : "https://i.scdn.co/image/ab67616d0000b2737f329fe2f47d2c4abb121986",
              "width" : 640
            }, {
              "height" : 300,
              "url" : "https://i.scdn.co/image/ab67616d00001e027f329fe2f47d2c4abb121986",
              "width" : 300
            }, {
              "height" : 64,
              "url" : "https://i.scdn.co/image/ab67616d000048517f329fe2f47d2c4abb121986",
              "width" : 64
            } ],
            "name" : "A Death-Grip On Yesterday",
            "release_date" : "2006-03-28",
            "release_date_precision" : "day",
            "total_tracks" : 9,
            "type" : "album",
            "uri" : "spotify:album:2S7Gg4uwg8Xh7WC4abXpAK"
          },
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/3LkSiHbjqOHCKCqBfEZOTv"
            },
            "href" : "https://api.spotify.com/v1/artists/3LkSiHbjqOHCKCqBfEZOTv",
            "id" : "3LkSiHbjqOHCKCqBfEZOTv",
            "name" : "Atreyu",
            "type" : "artist",
            "uri" : "spotify:artist:3LkSiHbjqOHCKCqBfEZOTv"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
          "disc_number" : 1,
          "duration_ms" : 179213,
          "explicit" : false,
          "external_ids" : {
            "isrc" : "USVIC0626701"
          },
          "external_urls" : {
            "spotify" : "https://open.spotify.com/track/2kH4Tyy2DUT9aa55SWgjkI"
          },
          "href" : "https://api.spotify.com/v1/tracks/2kH4Tyy2DUT9aa55SWgjkI",
          "id" : "2kH4Tyy2DUT9aa55SWgjkI",
          "is_local" : false,
          "name" : "Creature",
          "popularity" : 39,
          "preview_url" : "https://p.scdn.co/mp3-preview/88df910ec8164c0952e88d62c45675b56769b50f?cid=547fd8656e964ef1bacb47b20971ae02",
          "track_number" : 1,
          "type" : "track",
          "uri" : "spotify:track:2kH4Tyy2DUT9aa55SWgjkI"
        }
      }, {
        "added_at" : "2018-04-20T20:23:06Z",
        "track" : {
          "album" : {
            "album_type" : "album",
            "artists" : [ {
              "external_urls" : {
                "spotify" : "https://open.spotify.com/artist/5HA5aLY3jJV7eimXWkRBBp"
              },
              "href" : "https://api.spotify.com/v1/artists/5HA5aLY3jJV7eimXWkRBBp",
              "id" : "5HA5aLY3jJV7eimXWkRBBp",
              "name" : "Epica",
              "type" : "artist",
              "uri" : "spotify:artist:5HA5aLY3jJV7eimXWkRBBp"
            } ],
            "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
            "external_urls" : {
              "spotify" : "https://open.spotify.com/album/1vBNhnD8XleJ5wtJYiKzuD"
            },
            "href" : "https://api.spotify.com/v1/albums/1vBNhnD8XleJ5wtJYiKzuD",
            "id" : "1vBNhnD8XleJ5wtJYiKzuD",
            "images" : [ {
              "height" : 640,
              "url" : "https://i.scdn.co/image/ab67616d0000b273ce31d19fdcca7e222b9b6492",
              "width" : 640
            }, {
              "height" : 300,
              "url" : "https://i.scdn.co/image/ab67616d00001e02ce31d19fdcca7e222b9b6492",
              "width" : 300
            }, {
              "height" : 64,
              "url" : "https://i.scdn.co/image/ab67616d00004851ce31d19fdcca7e222b9b6492",
              "width" : 64
            } ],
            "name" : "The Score 2.0: An Epic Journey",
            "release_date" : "2017-11-11",
            "release_date_precision" : "day",
            "total_tracks" : 40,
            "type" : "album",
            "uri" : "spotify:album:1vBNhnD8XleJ5wtJYiKzuD"
          },
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/5HA5aLY3jJV7eimXWkRBBp"
            },
            "href" : "https://api.spotify.com/v1/artists/5HA5aLY3jJV7eimXWkRBBp",
            "id" : "5HA5aLY3jJV7eimXWkRBBp",
            "name" : "Epica",
            "type" : "artist",
            "uri" : "spotify:artist:5HA5aLY3jJV7eimXWkRBBp"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
          "disc_number" : 1,
          "duration_ms" : 149101,
          "explicit" : false,
          "external_ids" : {
            "isrc" : "NLP511700001"
          },
          "external_urls" : {
            "spotify" : "https://open.spotify.com/track/0rOkKdRve8HZ0jwEKuWqHN"
          },
          "href" : "https://api.spotify.com/v1/tracks/0rOkKdRve8HZ0jwEKuWqHN",
          "id" : "0rOkKdRve8HZ0jwEKuWqHN",
          "is_local" : false,
          "name" : "Vengeance Is Mine (2.0 Version)",
          "popularity" : 32,
          "preview_url" : "https://p.scdn.co/mp3-preview/b68656452ef211135d93e52e728c62071fe6c90a?cid=547fd8656e964ef1bacb47b20971ae02",
          "track_number" : 1,
          "type" : "track",
          "uri" : "spotify:track:0rOkKdRve8HZ0jwEKuWqHN"
        }
      }, {
        "added_at" : "2018-04-20T20:23:06Z",
        "track" : {
          "album" : {
            "album_type" : "album",
            "artists" : [ {
              "external_urls" : {
                "spotify" : "https://open.spotify.com/artist/5HA5aLY3jJV7eimXWkRBBp"
              },
              "href" : "https://api.spotify.com/v1/artists/5HA5aLY3jJV7eimXWkRBBp",
              "id" : "5HA5aLY3jJV7eimXWkRBBp",
              "name" : "Epica",
              "type" : "artist",
              "uri" : "spotify:artist:5HA5aLY3jJV7eimXWkRBBp"
            } ],
            "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
            "external_urls" : {
              "spotify" : "https://open.spotify.com/album/1vBNhnD8XleJ5wtJYiKzuD"
            },
            "href" : "https://api.spotify.com/v1/albums/1vBNhnD8XleJ5wtJYiKzuD",
            "id" : "1vBNhnD8XleJ5wtJYiKzuD",
            "images" : [ {
              "height" : 640,
              "url" : "https://i.scdn.co/image/ab67616d0000b273ce31d19fdcca7e222b9b6492",
              "width" : 640
            }, {
              "height" : 300,
              "url" : "https://i.scdn.co/image/ab67616d00001e02ce31d19fdcca7e222b9b6492",
              "width" : 300
            }, {
              "height" : 64,
              "url" : "https://i.scdn.co/image/ab67616d00004851ce31d19fdcca7e222b9b6492",
              "width" : 64
            } ],
            "name" : "The Score 2.0: An Epic Journey",
            "release_date" : "2017-11-11",
            "release_date_precision" : "day",
            "total_tracks" : 40,
            "type" : "album",
            "uri" : "spotify:album:1vBNhnD8XleJ5wtJYiKzuD"
          },
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/5HA5aLY3jJV7eimXWkRBBp"
            },
            "href" : "https://api.spotify.com/v1/artists/5HA5aLY3jJV7eimXWkRBBp",
            "id" : "5HA5aLY3jJV7eimXWkRBBp",
            "name" : "Epica",
            "type" : "artist",
            "uri" : "spotify:artist:5HA5aLY3jJV7eimXWkRBBp"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
          "disc_number" : 1,
          "duration_ms" : 127180,
          "explicit" : false,
          "external_ids" : {
            "isrc" : "NLP511700003"
          },
          "external_urls" : {
            "spotify" : "https://open.spotify.com/track/2uFtcjDJYOad0WUabfDKYp"
          },
          "href" : "https://api.spotify.com/v1/tracks/2uFtcjDJYOad0WUabfDKYp",
          "id" : "2uFtcjDJYOad0WUabfDKYp",
          "is_local" : false,
          "name" : "The Valley (2.0 Version)",
          "popularity" : 17,
          "preview_url" : "https://p.scdn.co/mp3-preview/cadae80b50e0239b2a4b699f60a88b8b6dbaadd0?cid=547fd8656e964ef1bacb47b20971ae02",
          "track_number" : 3,
          "type" : "track",
          "uri" : "spotify:track:2uFtcjDJYOad0WUabfDKYp"
        }
      }, {
        "added_at" : "2018-04-20T20:23:06Z",
        "track" : {
          "album" : {
            "album_type" : "album",
            "artists" : [ {
              "external_urls" : {
                "spotify" : "https://open.spotify.com/artist/5HA5aLY3jJV7eimXWkRBBp"
              },
              "href" : "https://api.spotify.com/v1/artists/5HA5aLY3jJV7eimXWkRBBp",
              "id" : "5HA5aLY3jJV7eimXWkRBBp",
              "name" : "Epica",
              "type" : "artist",
              "uri" : "spotify:artist:5HA5aLY3jJV7eimXWkRBBp"
            } ],
            "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
            "external_urls" : {
              "spotify" : "https://open.spotify.com/album/1vBNhnD8XleJ5wtJYiKzuD"
            },
            "href" : "https://api.spotify.com/v1/albums/1vBNhnD8XleJ5wtJYiKzuD",
            "id" : "1vBNhnD8XleJ5wtJYiKzuD",
            "images" : [ {
              "height" : 640,
              "url" : "https://i.scdn.co/image/ab67616d0000b273ce31d19fdcca7e222b9b6492",
              "width" : 640
            }, {
              "height" : 300,
              "url" : "https://i.scdn.co/image/ab67616d00001e02ce31d19fdcca7e222b9b6492",
              "width" : 300
            }, {
              "height" : 64,
              "url" : "https://i.scdn.co/image/ab67616d00004851ce31d19fdcca7e222b9b6492",
              "width" : 64
            } ],
            "name" : "The Score 2.0: An Epic Journey",
            "release_date" : "2017-11-11",
            "release_date_precision" : "day",
            "total_tracks" : 40,
            "type" : "album",
            "uri" : "spotify:album:1vBNhnD8XleJ5wtJYiKzuD"
          },
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/5HA5aLY3jJV7eimXWkRBBp"
            },
            "href" : "https://api.spotify.com/v1/artists/5HA5aLY3jJV7eimXWkRBBp",
            "id" : "5HA5aLY3jJV7eimXWkRBBp",
            "name" : "Epica",
            "type" : "artist",
            "uri" : "spotify:artist:5HA5aLY3jJV7eimXWkRBBp"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
          "disc_number" : 1,
          "duration_ms" : 271552,
          "explicit" : false,
          "external_ids" : {
            "isrc" : "NLP511700004"
          },
          "external_urls" : {
            "spotify" : "https://open.spotify.com/track/15yaOXjITm61R6nUsl4XgM"
          },
          "href" : "https://api.spotify.com/v1/tracks/15yaOXjITm61R6nUsl4XgM",
          "id" : "15yaOXjITm61R6nUsl4XgM",
          "is_local" : false,
          "name" : "Caught in a Web (2.0 Version)",
          "popularity" : 17,
          "preview_url" : "https://p.scdn.co/mp3-preview/ed03edc6a610a376531aed85209639497e3b2b62?cid=547fd8656e964ef1bacb47b20971ae02",
          "track_number" : 4,
          "type" : "track",
          "uri" : "spotify:track:15yaOXjITm61R6nUsl4XgM"
        }
      }, {
        "added_at" : "2018-04-20T20:23:06Z",
        "track" : {
          "album" : {
            "album_type" : "album",
            "artists" : [ {
              "external_urls" : {
                "spotify" : "https://open.spotify.com/artist/5HA5aLY3jJV7eimXWkRBBp"
              },
              "href" : "https://api.spotify.com/v1/artists/5HA5aLY3jJV7eimXWkRBBp",
              "id" : "5HA5aLY3jJV7eimXWkRBBp",
              "name" : "Epica",
              "type" : "artist",
              "uri" : "spotify:artist:5HA5aLY3jJV7eimXWkRBBp"
            } ],
            "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
            "external_urls" : {
              "spotify" : "https://open.spotify.com/album/1vBNhnD8XleJ5wtJYiKzuD"
            },
            "href" : "https://api.spotify.com/v1/albums/1vBNhnD8XleJ5wtJYiKzuD",
            "id" : "1vBNhnD8XleJ5wtJYiKzuD",
            "images" : [ {
              "height" : 640,
              "url" : "https://i.scdn.co/image/ab67616d0000b273ce31d19fdcca7e222b9b6492",
              "width" : 640
            }, {
              "height" : 300,
              "url" : "https://i.scdn.co/image/ab67616d00001e02ce31d19fdcca7e222b9b6492",
              "width" : 300
            }, {
              "height" : 64,
              "url" : "https://i.scdn.co/image/ab67616d00004851ce31d19fdcca7e222b9b6492",
              "width" : 64
            } ],
            "name" : "The Score 2.0: An Epic Journey",
            "release_date" : "2017-11-11",
            "release_date_precision" : "day",
            "total_tracks" : 40,
            "type" : "album",
            "uri" : "spotify:album:1vBNhnD8XleJ5wtJYiKzuD"
          },
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/5HA5aLY3jJV7eimXWkRBBp"
            },
            "href" : "https://api.spotify.com/v1/artists/5HA5aLY3jJV7eimXWkRBBp",
            "id" : "5HA5aLY3jJV7eimXWkRBBp",
            "name" : "Epica",
            "type" : "artist",
            "uri" : "spotify:artist:5HA5aLY3jJV7eimXWkRBBp"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
          "disc_number" : 1,
          "duration_ms" : 144288,
          "explicit" : false,
          "external_ids" : {
            "isrc" : "NLP511700005"
          },
          "external_urls" : {
            "spotify" : "https://open.spotify.com/track/2Cz3q7eAs2kT03LH3LdcLA"
          },
          "href" : "https://api.spotify.com/v1/tracks/2Cz3q7eAs2kT03LH3LdcLA",
          "id" : "2Cz3q7eAs2kT03LH3LdcLA",
          "is_local" : false,
          "name" : "Insomnia (2.0 Version)",
          "popularity" : 16,
          "preview_url" : "https://p.scdn.co/mp3-preview/c53a650109842bd30cb15b0495c095a5eb0c5e6f?cid=547fd8656e964ef1bacb47b20971ae02",
          "track_number" : 5,
          "type" : "track",
          "uri" : "spotify:track:2Cz3q7eAs2kT03LH3LdcLA"
        }
      }, {
        "added_at" : "2018-04-20T20:23:06Z",
        "track" : {
          "album" : {
            "album_type" : "album",
            "artists" : [ {
              "external_urls" : {
                "spotify" : "https://open.spotify.com/artist/5HA5aLY3jJV7eimXWkRBBp"
              },
              "href" : "https://api.spotify.com/v1/artists/5HA5aLY3jJV7eimXWkRBBp",
              "id" : "5HA5aLY3jJV7eimXWkRBBp",
              "name" : "Epica",
              "type" : "artist",
              "uri" : "spotify:artist:5HA5aLY3jJV7eimXWkRBBp"
            } ],
            "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
            "external_urls" : {
              "spotify" : "https://open.spotify.com/album/1vBNhnD8XleJ5wtJYiKzuD"
            },
            "href" : "https://api.spotify.com/v1/albums/1vBNhnD8XleJ5wtJYiKzuD",
            "id" : "1vBNhnD8XleJ5wtJYiKzuD",
            "images" : [ {
              "height" : 640,
              "url" : "https://i.scdn.co/image/ab67616d0000b273ce31d19fdcca7e222b9b6492",
              "width" : 640
            }, {
              "height" : 300,
              "url" : "https://i.scdn.co/image/ab67616d00001e02ce31d19fdcca7e222b9b6492",
              "width" : 300
            }, {
              "height" : 64,
              "url" : "https://i.scdn.co/image/ab67616d00004851ce31d19fdcca7e222b9b6492",
              "width" : 64
            } ],
            "name" : "The Score 2.0: An Epic Journey",
            "release_date" : "2017-11-11",
            "release_date_precision" : "day",
            "total_tracks" : 40,
            "type" : "album",
            "uri" : "spotify:album:1vBNhnD8XleJ5wtJYiKzuD"
          },
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/5HA5aLY3jJV7eimXWkRBBp"
            },
            "href" : "https://api.spotify.com/v1/artists/5HA5aLY3jJV7eimXWkRBBp",
            "id" : "5HA5aLY3jJV7eimXWkRBBp",
            "name" : "Epica",
            "type" : "artist",
            "uri" : "spotify:artist:5HA5aLY3jJV7eimXWkRBBp"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
          "disc_number" : 1,
          "duration_ms" : 171947,
          "explicit" : false,
          "external_ids" : {
            "isrc" : "NLP511700006"
          },
          "external_urls" : {
            "spotify" : "https://open.spotify.com/track/0WNvQrI2o4o8ofoYfgDwoG"
          },
          "href" : "https://api.spotify.com/v1/tracks/0WNvQrI2o4o8ofoYfgDwoG",
          "id" : "0WNvQrI2o4o8ofoYfgDwoG",
          "is_local" : false,
          "name" : "Under the Aegis (2.0 Version)",
          "popularity" : 16,
          "preview_url" : "https://p.scdn.co/mp3-preview/608e95877ba30eb6ececae7b3ebe82ad93daec18?cid=547fd8656e964ef1bacb47b20971ae02",
          "track_number" : 6,
          "type" : "track",
          "uri" : "spotify:track:0WNvQrI2o4o8ofoYfgDwoG"
        }
      }, {
        "added_at" : "2018-04-20T20:23:06Z",
        "track" : {
          "album" : {
            "album_type" : "album",
            "artists" : [ {
              "external_urls" : {
                "spotify" : "https://open.spotify.com/artist/5HA5aLY3jJV7eimXWkRBBp"
              },
              "href" : "https://api.spotify.com/v1/artists/5HA5aLY3jJV7eimXWkRBBp",
              "id" : "5HA5aLY3jJV7eimXWkRBBp",
              "name" : "Epica",
              "type" : "artist",
              "uri" : "spotify:artist:5HA5aLY3jJV7eimXWkRBBp"
            } ],
            "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
            "external_urls" : {
              "spotify" : "https://open.spotify.com/album/1vBNhnD8XleJ5wtJYiKzuD"
            },
            "href" : "https://api.spotify.com/v1/albums/1vBNhnD8XleJ5wtJYiKzuD",
            "id" : "1vBNhnD8XleJ5wtJYiKzuD",
            "images" : [ {
              "height" : 640,
              "url" : "https://i.scdn.co/image/ab67616d0000b273ce31d19fdcca7e222b9b6492",
              "width" : 640
            }, {
              "height" : 300,
              "url" : "https://i.scdn.co/image/ab67616d00001e02ce31d19fdcca7e222b9b6492",
              "width" : 300
            }, {
              "height" : 64,
              "url" : "https://i.scdn.co/image/ab67616d00004851ce31d19fdcca7e222b9b6492",
              "width" : 64
            } ],
            "name" : "The Score 2.0: An Epic Journey",
            "release_date" : "2017-11-11",
            "release_date_precision" : "day",
            "total_tracks" : 40,
            "type" : "album",
            "uri" : "spotify:album:1vBNhnD8XleJ5wtJYiKzuD"
          },
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/5HA5aLY3jJV7eimXWkRBBp"
            },
            "href" : "https://api.spotify.com/v1/artists/5HA5aLY3jJV7eimXWkRBBp",
            "id" : "5HA5aLY3jJV7eimXWkRBBp",
            "name" : "Epica",
            "type" : "artist",
            "uri" : "spotify:artist:5HA5aLY3jJV7eimXWkRBBp"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
          "disc_number" : 1,
          "duration_ms" : 282554,
          "explicit" : false,
          "external_ids" : {
            "isrc" : "NLP511700007"
          },
          "external_urls" : {
            "spotify" : "https://open.spotify.com/track/3n3ewRzwyAbWFy7sZzzfPq"
          },
          "href" : "https://api.spotify.com/v1/tracks/3n3ewRzwyAbWFy7sZzzfPq",
          "id" : "3n3ewRzwyAbWFy7sZzzfPq",
          "is_local" : false,
          "name" : "Trois Vierges (Solo 2.0 Version)",
          "popularity" : 18,
          "preview_url" : "https://p.scdn.co/mp3-preview/428baa368b2e363ada9e0b53c3b03e6e38290c7e?cid=547fd8656e964ef1bacb47b20971ae02",
          "track_number" : 7,
          "type" : "track",
          "uri" : "spotify:track:3n3ewRzwyAbWFy7sZzzfPq"
        }
      }, {
        "added_at" : "2018-04-20T20:23:06Z",
        "track" : {
          "album" : {
            "album_type" : "album",
            "artists" : [ {
              "external_urls" : {
                "spotify" : "https://open.spotify.com/artist/5HA5aLY3jJV7eimXWkRBBp"
              },
              "href" : "https://api.spotify.com/v1/artists/5HA5aLY3jJV7eimXWkRBBp",
              "id" : "5HA5aLY3jJV7eimXWkRBBp",
              "name" : "Epica",
              "type" : "artist",
              "uri" : "spotify:artist:5HA5aLY3jJV7eimXWkRBBp"
            } ],
            "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
            "external_urls" : {
              "spotify" : "https://open.spotify.com/album/1vBNhnD8XleJ5wtJYiKzuD"
            },
            "href" : "https://api.spotify.com/v1/albums/1vBNhnD8XleJ5wtJYiKzuD",
            "id" : "1vBNhnD8XleJ5wtJYiKzuD",
            "images" : [ {
              "height" : 640,
              "url" : "https://i.scdn.co/image/ab67616d0000b273ce31d19fdcca7e222b9b6492",
              "width" : 640
            }, {
              "height" : 300,
              "url" : "https://i.scdn.co/image/ab67616d00001e02ce31d19fdcca7e222b9b6492",
              "width" : 300
            }, {
              "height" : 64,
              "url" : "https://i.scdn.co/image/ab67616d00004851ce31d19fdcca7e222b9b6492",
              "width" : 64
            } ],
            "name" : "The Score 2.0: An Epic Journey",
            "release_date" : "2017-11-11",
            "release_date_precision" : "day",
            "total_tracks" : 40,
            "type" : "album",
            "uri" : "spotify:album:1vBNhnD8XleJ5wtJYiKzuD"
          },
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/5HA5aLY3jJV7eimXWkRBBp"
            },
            "href" : "https://api.spotify.com/v1/artists/5HA5aLY3jJV7eimXWkRBBp",
            "id" : "5HA5aLY3jJV7eimXWkRBBp",
            "name" : "Epica",
            "type" : "artist",
            "uri" : "spotify:artist:5HA5aLY3jJV7eimXWkRBBp"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
          "disc_number" : 1,
          "duration_ms" : 165080,
          "explicit" : false,
          "external_ids" : {
            "isrc" : "NLP511700008"
          },
          "external_urls" : {
            "spotify" : "https://open.spotify.com/track/26HZZgTps4umfbgSinFQgX"
          },
          "href" : "https://api.spotify.com/v1/tracks/26HZZgTps4umfbgSinFQgX",
          "id" : "26HZZgTps4umfbgSinFQgX",
          "is_local" : false,
          "name" : "Mystica (2.0 Version)",
          "popularity" : 16,
          "preview_url" : "https://p.scdn.co/mp3-preview/413f4a195d94b9533ae1e21c76b9a5dd72255eee?cid=547fd8656e964ef1bacb47b20971ae02",
          "track_number" : 8,
          "type" : "track",
          "uri" : "spotify:track:26HZZgTps4umfbgSinFQgX"
        }
      }, {
        "added_at" : "2018-04-20T20:23:06Z",
        "track" : {
          "album" : {
            "album_type" : "album",
            "artists" : [ {
              "external_urls" : {
                "spotify" : "https://open.spotify.com/artist/5HA5aLY3jJV7eimXWkRBBp"
              },
              "href" : "https://api.spotify.com/v1/artists/5HA5aLY3jJV7eimXWkRBBp",
              "id" : "5HA5aLY3jJV7eimXWkRBBp",
              "name" : "Epica",
              "type" : "artist",
              "uri" : "spotify:artist:5HA5aLY3jJV7eimXWkRBBp"
            } ],
            "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
            "external_urls" : {
              "spotify" : "https://open.spotify.com/album/1vBNhnD8XleJ5wtJYiKzuD"
            },
            "href" : "https://api.spotify.com/v1/albums/1vBNhnD8XleJ5wtJYiKzuD",
            "id" : "1vBNhnD8XleJ5wtJYiKzuD",
            "images" : [ {
              "height" : 640,
              "url" : "https://i.scdn.co/image/ab67616d0000b273ce31d19fdcca7e222b9b6492",
              "width" : 640
            }, {
              "height" : 300,
              "url" : "https://i.scdn.co/image/ab67616d00001e02ce31d19fdcca7e222b9b6492",
              "width" : 300
            }, {
              "height" : 64,
              "url" : "https://i.scdn.co/image/ab67616d00004851ce31d19fdcca7e222b9b6492",
              "width" : 64
            } ],
            "name" : "The Score 2.0: An Epic Journey",
            "release_date" : "2017-11-11",
            "release_date_precision" : "day",
            "total_tracks" : 40,
            "type" : "album",
            "uri" : "spotify:album:1vBNhnD8XleJ5wtJYiKzuD"
          },
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/5HA5aLY3jJV7eimXWkRBBp"
            },
            "href" : "https://api.spotify.com/v1/artists/5HA5aLY3jJV7eimXWkRBBp",
            "id" : "5HA5aLY3jJV7eimXWkRBBp",
            "name" : "Epica",
            "type" : "artist",
            "uri" : "spotify:artist:5HA5aLY3jJV7eimXWkRBBp"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
          "disc_number" : 1,
          "duration_ms" : 143781,
          "explicit" : false,
          "external_ids" : {
            "isrc" : "NLP511700010"
          },
          "external_urls" : {
            "spotify" : "https://open.spotify.com/track/270YM2JhSWdWY80bblo57H"
          },
          "href" : "https://api.spotify.com/v1/tracks/270YM2JhSWdWY80bblo57H",
          "id" : "270YM2JhSWdWY80bblo57H",
          "is_local" : false,
          "name" : "Empty Gaze (2.0 Version)",
          "popularity" : 15,
          "preview_url" : "https://p.scdn.co/mp3-preview/6f9e3d90a57052726d467686f58b83eefac22867?cid=547fd8656e964ef1bacb47b20971ae02",
          "track_number" : 10,
          "type" : "track",
          "uri" : "spotify:track:270YM2JhSWdWY80bblo57H"
        }
      }, {
        "added_at" : "2018-04-20T20:23:06Z",
        "track" : {
          "album" : {
            "album_type" : "album",
            "artists" : [ {
              "external_urls" : {
                "spotify" : "https://open.spotify.com/artist/5HA5aLY3jJV7eimXWkRBBp"
              },
              "href" : "https://api.spotify.com/v1/artists/5HA5aLY3jJV7eimXWkRBBp",
              "id" : "5HA5aLY3jJV7eimXWkRBBp",
              "name" : "Epica",
              "type" : "artist",
              "uri" : "spotify:artist:5HA5aLY3jJV7eimXWkRBBp"
            } ],
            "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
            "external_urls" : {
              "spotify" : "https://open.spotify.com/album/1vBNhnD8XleJ5wtJYiKzuD"
            },
            "href" : "https://api.spotify.com/v1/albums/1vBNhnD8XleJ5wtJYiKzuD",
            "id" : "1vBNhnD8XleJ5wtJYiKzuD",
            "images" : [ {
              "height" : 640,
              "url" : "https://i.scdn.co/image/ab67616d0000b273ce31d19fdcca7e222b9b6492",
              "width" : 640
            }, {
              "height" : 300,
              "url" : "https://i.scdn.co/image/ab67616d00001e02ce31d19fdcca7e222b9b6492",
              "width" : 300
            }, {
              "height" : 64,
              "url" : "https://i.scdn.co/image/ab67616d00004851ce31d19fdcca7e222b9b6492",
              "width" : 64
            } ],
            "name" : "The Score 2.0: An Epic Journey",
            "release_date" : "2017-11-11",
            "release_date_precision" : "day",
            "total_tracks" : 40,
            "type" : "album",
            "uri" : "spotify:album:1vBNhnD8XleJ5wtJYiKzuD"
          },
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/5HA5aLY3jJV7eimXWkRBBp"
            },
            "href" : "https://api.spotify.com/v1/artists/5HA5aLY3jJV7eimXWkRBBp",
            "id" : "5HA5aLY3jJV7eimXWkRBBp",
            "name" : "Epica",
            "type" : "artist",
            "uri" : "spotify:artist:5HA5aLY3jJV7eimXWkRBBp"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
          "disc_number" : 1,
          "duration_ms" : 204175,
          "explicit" : false,
          "external_ids" : {
            "isrc" : "NLP511700012"
          },
          "external_urls" : {
            "spotify" : "https://open.spotify.com/track/0gZeyxpHzY4UryAslAXnOV"
          },
          "href" : "https://api.spotify.com/v1/tracks/0gZeyxpHzY4UryAslAXnOV",
          "id" : "0gZeyxpHzY4UryAslAXnOV",
          "is_local" : false,
          "name" : "Supremacy (2.0 Version)",
          "popularity" : 15,
          "preview_url" : "https://p.scdn.co/mp3-preview/9fb93331938cbeb9148faee4dc71899fd1ea2f3b?cid=547fd8656e964ef1bacb47b20971ae02",
          "track_number" : 12,
          "type" : "track",
          "uri" : "spotify:track:0gZeyxpHzY4UryAslAXnOV"
        }
      }, {
        "added_at" : "2018-04-20T20:23:06Z",
        "track" : {
          "album" : {
            "album_type" : "album",
            "artists" : [ {
              "external_urls" : {
                "spotify" : "https://open.spotify.com/artist/5HA5aLY3jJV7eimXWkRBBp"
              },
              "href" : "https://api.spotify.com/v1/artists/5HA5aLY3jJV7eimXWkRBBp",
              "id" : "5HA5aLY3jJV7eimXWkRBBp",
              "name" : "Epica",
              "type" : "artist",
              "uri" : "spotify:artist:5HA5aLY3jJV7eimXWkRBBp"
            } ],
            "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
            "external_urls" : {
              "spotify" : "https://open.spotify.com/album/1vBNhnD8XleJ5wtJYiKzuD"
            },
            "href" : "https://api.spotify.com/v1/albums/1vBNhnD8XleJ5wtJYiKzuD",
            "id" : "1vBNhnD8XleJ5wtJYiKzuD",
            "images" : [ {
              "height" : 640,
              "url" : "https://i.scdn.co/image/ab67616d0000b273ce31d19fdcca7e222b9b6492",
              "width" : 640
            }, {
              "height" : 300,
              "url" : "https://i.scdn.co/image/ab67616d00001e02ce31d19fdcca7e222b9b6492",
              "width" : 300
            }, {
              "height" : 64,
              "url" : "https://i.scdn.co/image/ab67616d00004851ce31d19fdcca7e222b9b6492",
              "width" : 64
            } ],
            "name" : "The Score 2.0: An Epic Journey",
            "release_date" : "2017-11-11",
            "release_date_precision" : "day",
            "total_tracks" : 40,
            "type" : "album",
            "uri" : "spotify:album:1vBNhnD8XleJ5wtJYiKzuD"
          },
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/5HA5aLY3jJV7eimXWkRBBp"
            },
            "href" : "https://api.spotify.com/v1/artists/5HA5aLY3jJV7eimXWkRBBp",
            "id" : "5HA5aLY3jJV7eimXWkRBBp",
            "name" : "Epica",
            "type" : "artist",
            "uri" : "spotify:artist:5HA5aLY3jJV7eimXWkRBBp"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
          "disc_number" : 1,
          "duration_ms" : 117725,
          "explicit" : false,
          "external_ids" : {
            "isrc" : "NLP511700013"
          },
          "external_urls" : {
            "spotify" : "https://open.spotify.com/track/0sgj6SZ8kvDoaK1iwlpj8O"
          },
          "href" : "https://api.spotify.com/v1/tracks/0sgj6SZ8kvDoaK1iwlpj8O",
          "id" : "0sgj6SZ8kvDoaK1iwlpj8O",
          "is_local" : false,
          "name" : "Beyond the Depth (2.0 Version)",
          "popularity" : 15,
          "preview_url" : "https://p.scdn.co/mp3-preview/d9da5a2e83a043155dffa2456d12874faeefec9a?cid=547fd8656e964ef1bacb47b20971ae02",
          "track_number" : 13,
          "type" : "track",
          "uri" : "spotify:track:0sgj6SZ8kvDoaK1iwlpj8O"
        }
      }, {
        "added_at" : "2018-04-20T20:23:06Z",
        "track" : {
          "album" : {
            "album_type" : "album",
            "artists" : [ {
              "external_urls" : {
                "spotify" : "https://open.spotify.com/artist/5HA5aLY3jJV7eimXWkRBBp"
              },
              "href" : "https://api.spotify.com/v1/artists/5HA5aLY3jJV7eimXWkRBBp",
              "id" : "5HA5aLY3jJV7eimXWkRBBp",
              "name" : "Epica",
              "type" : "artist",
              "uri" : "spotify:artist:5HA5aLY3jJV7eimXWkRBBp"
            } ],
            "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
            "external_urls" : {
              "spotify" : "https://open.spotify.com/album/1vBNhnD8XleJ5wtJYiKzuD"
            },
            "href" : "https://api.spotify.com/v1/albums/1vBNhnD8XleJ5wtJYiKzuD",
            "id" : "1vBNhnD8XleJ5wtJYiKzuD",
            "images" : [ {
              "height" : 640,
              "url" : "https://i.scdn.co/image/ab67616d0000b273ce31d19fdcca7e222b9b6492",
              "width" : 640
            }, {
              "height" : 300,
              "url" : "https://i.scdn.co/image/ab67616d00001e02ce31d19fdcca7e222b9b6492",
              "width" : 300
            }, {
              "height" : 64,
              "url" : "https://i.scdn.co/image/ab67616d00004851ce31d19fdcca7e222b9b6492",
              "width" : 64
            } ],
            "name" : "The Score 2.0: An Epic Journey",
            "release_date" : "2017-11-11",
            "release_date_precision" : "day",
            "total_tracks" : 40,
            "type" : "album",
            "uri" : "spotify:album:1vBNhnD8XleJ5wtJYiKzuD"
          },
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/5HA5aLY3jJV7eimXWkRBBp"
            },
            "href" : "https://api.spotify.com/v1/artists/5HA5aLY3jJV7eimXWkRBBp",
            "id" : "5HA5aLY3jJV7eimXWkRBBp",
            "name" : "Epica",
            "type" : "artist",
            "uri" : "spotify:artist:5HA5aLY3jJV7eimXWkRBBp"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
          "disc_number" : 1,
          "duration_ms" : 224902,
          "explicit" : false,
          "external_ids" : {
            "isrc" : "NLP511700016"
          },
          "external_urls" : {
            "spotify" : "https://open.spotify.com/track/0dX6B9QjBOMcy6ofnn4bCh"
          },
          "href" : "https://api.spotify.com/v1/tracks/0dX6B9QjBOMcy6ofnn4bCh",
          "id" : "0dX6B9QjBOMcy6ofnn4bCh",
          "is_local" : false,
          "name" : "Angel of Death (2.0 Version)",
          "popularity" : 15,
          "preview_url" : "https://p.scdn.co/mp3-preview/1b196772d53df11eacbc9fb545199eccfc28d445?cid=547fd8656e964ef1bacb47b20971ae02",
          "track_number" : 16,
          "type" : "track",
          "uri" : "spotify:track:0dX6B9QjBOMcy6ofnn4bCh"
        }
      }, {
        "added_at" : "2018-04-20T20:23:06Z",
        "track" : {
          "album" : {
            "album_type" : "album",
            "artists" : [ {
              "external_urls" : {
                "spotify" : "https://open.spotify.com/artist/5HA5aLY3jJV7eimXWkRBBp"
              },
              "href" : "https://api.spotify.com/v1/artists/5HA5aLY3jJV7eimXWkRBBp",
              "id" : "5HA5aLY3jJV7eimXWkRBBp",
              "name" : "Epica",
              "type" : "artist",
              "uri" : "spotify:artist:5HA5aLY3jJV7eimXWkRBBp"
            } ],
            "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
            "external_urls" : {
              "spotify" : "https://open.spotify.com/album/1vBNhnD8XleJ5wtJYiKzuD"
            },
            "href" : "https://api.spotify.com/v1/albums/1vBNhnD8XleJ5wtJYiKzuD",
            "id" : "1vBNhnD8XleJ5wtJYiKzuD",
            "images" : [ {
              "height" : 640,
              "url" : "https://i.scdn.co/image/ab67616d0000b273ce31d19fdcca7e222b9b6492",
              "width" : 640
            }, {
              "height" : 300,
              "url" : "https://i.scdn.co/image/ab67616d00001e02ce31d19fdcca7e222b9b6492",
              "width" : 300
            }, {
              "height" : 64,
              "url" : "https://i.scdn.co/image/ab67616d00004851ce31d19fdcca7e222b9b6492",
              "width" : 64
            } ],
            "name" : "The Score 2.0: An Epic Journey",
            "release_date" : "2017-11-11",
            "release_date_precision" : "day",
            "total_tracks" : 40,
            "type" : "album",
            "uri" : "spotify:album:1vBNhnD8XleJ5wtJYiKzuD"
          },
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/5HA5aLY3jJV7eimXWkRBBp"
            },
            "href" : "https://api.spotify.com/v1/artists/5HA5aLY3jJV7eimXWkRBBp",
            "id" : "5HA5aLY3jJV7eimXWkRBBp",
            "name" : "Epica",
            "type" : "artist",
            "uri" : "spotify:artist:5HA5aLY3jJV7eimXWkRBBp"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
          "disc_number" : 1,
          "duration_ms" : 184167,
          "explicit" : false,
          "external_ids" : {
            "isrc" : "NLP510500020"
          },
          "external_urls" : {
            "spotify" : "https://open.spotify.com/track/0HiWfJTDMq4uhMu8koNwDT"
          },
          "href" : "https://api.spotify.com/v1/tracks/0HiWfJTDMq4uhMu8koNwDT",
          "id" : "0HiWfJTDMq4uhMu8koNwDT",
          "is_local" : false,
          "name" : "Unholy Trinity (Remastered)",
          "popularity" : 14,
          "preview_url" : "https://p.scdn.co/mp3-preview/5a6353ceb5f6449e4f6c63ddfdcd2dc3c03addd0?cid=547fd8656e964ef1bacb47b20971ae02",
          "track_number" : 22,
          "type" : "track",
          "uri" : "spotify:track:0HiWfJTDMq4uhMu8koNwDT"
        }
      }, {
        "added_at" : "2018-04-20T20:23:06Z",
        "track" : {
          "album" : {
            "album_type" : "album",
            "artists" : [ {
              "external_urls" : {
                "spotify" : "https://open.spotify.com/artist/5HA5aLY3jJV7eimXWkRBBp"
              },
              "href" : "https://api.spotify.com/v1/artists/5HA5aLY3jJV7eimXWkRBBp",
              "id" : "5HA5aLY3jJV7eimXWkRBBp",
              "name" : "Epica",
              "type" : "artist",
              "uri" : "spotify:artist:5HA5aLY3jJV7eimXWkRBBp"
            } ],
            "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
            "external_urls" : {
              "spotify" : "https://open.spotify.com/album/1vBNhnD8XleJ5wtJYiKzuD"
            },
            "href" : "https://api.spotify.com/v1/albums/1vBNhnD8XleJ5wtJYiKzuD",
            "id" : "1vBNhnD8XleJ5wtJYiKzuD",
            "images" : [ {
              "height" : 640,
              "url" : "https://i.scdn.co/image/ab67616d0000b273ce31d19fdcca7e222b9b6492",
              "width" : 640
            }, {
              "height" : 300,
              "url" : "https://i.scdn.co/image/ab67616d00001e02ce31d19fdcca7e222b9b6492",
              "width" : 300
            }, {
              "height" : 64,
              "url" : "https://i.scdn.co/image/ab67616d00004851ce31d19fdcca7e222b9b6492",
              "width" : 64
            } ],
            "name" : "The Score 2.0: An Epic Journey",
            "release_date" : "2017-11-11",
            "release_date_precision" : "day",
            "total_tracks" : 40,
            "type" : "album",
            "uri" : "spotify:album:1vBNhnD8XleJ5wtJYiKzuD"
          },
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/5HA5aLY3jJV7eimXWkRBBp"
            },
            "href" : "https://api.spotify.com/v1/artists/5HA5aLY3jJV7eimXWkRBBp",
            "id" : "5HA5aLY3jJV7eimXWkRBBp",
            "name" : "Epica",
            "type" : "artist",
            "uri" : "spotify:artist:5HA5aLY3jJV7eimXWkRBBp"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
          "disc_number" : 1,
          "duration_ms" : 126683,
          "explicit" : false,
          "external_ids" : {
            "isrc" : "NLP510500023"
          },
          "external_urls" : {
            "spotify" : "https://open.spotify.com/track/1BJRR0diLCU5I2DdzmZqFW"
          },
          "href" : "https://api.spotify.com/v1/tracks/1BJRR0diLCU5I2DdzmZqFW",
          "id" : "1BJRR0diLCU5I2DdzmZqFW",
          "is_local" : false,
          "name" : "Insomnia (Remastered)",
          "popularity" : 13,
          "preview_url" : "https://p.scdn.co/mp3-preview/1bd5a00732af1103bd2144f589f449c15fbe12ea?cid=547fd8656e964ef1bacb47b20971ae02",
          "track_number" : 25,
          "type" : "track",
          "uri" : "spotify:track:1BJRR0diLCU5I2DdzmZqFW"
        }
      }, {
        "added_at" : "2018-04-20T20:23:06Z",
        "track" : {
          "album" : {
            "album_type" : "album",
            "artists" : [ {
              "external_urls" : {
                "spotify" : "https://open.spotify.com/artist/5HA5aLY3jJV7eimXWkRBBp"
              },
              "href" : "https://api.spotify.com/v1/artists/5HA5aLY3jJV7eimXWkRBBp",
              "id" : "5HA5aLY3jJV7eimXWkRBBp",
              "name" : "Epica",
              "type" : "artist",
              "uri" : "spotify:artist:5HA5aLY3jJV7eimXWkRBBp"
            } ],
            "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
            "external_urls" : {
              "spotify" : "https://open.spotify.com/album/1vBNhnD8XleJ5wtJYiKzuD"
            },
            "href" : "https://api.spotify.com/v1/albums/1vBNhnD8XleJ5wtJYiKzuD",
            "id" : "1vBNhnD8XleJ5wtJYiKzuD",
            "images" : [ {
              "height" : 640,
              "url" : "https://i.scdn.co/image/ab67616d0000b273ce31d19fdcca7e222b9b6492",
              "width" : 640
            }, {
              "height" : 300,
              "url" : "https://i.scdn.co/image/ab67616d00001e02ce31d19fdcca7e222b9b6492",
              "width" : 300
            }, {
              "height" : 64,
              "url" : "https://i.scdn.co/image/ab67616d00004851ce31d19fdcca7e222b9b6492",
              "width" : 64
            } ],
            "name" : "The Score 2.0: An Epic Journey",
            "release_date" : "2017-11-11",
            "release_date_precision" : "day",
            "total_tracks" : 40,
            "type" : "album",
            "uri" : "spotify:album:1vBNhnD8XleJ5wtJYiKzuD"
          },
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/5HA5aLY3jJV7eimXWkRBBp"
            },
            "href" : "https://api.spotify.com/v1/artists/5HA5aLY3jJV7eimXWkRBBp",
            "id" : "5HA5aLY3jJV7eimXWkRBBp",
            "name" : "Epica",
            "type" : "artist",
            "uri" : "spotify:artist:5HA5aLY3jJV7eimXWkRBBp"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
          "disc_number" : 1,
          "duration_ms" : 167875,
          "explicit" : false,
          "external_ids" : {
            "isrc" : "NLP510500024"
          },
          "external_urls" : {
            "spotify" : "https://open.spotify.com/track/02NitVBTdoiJBovghXNFNS"
          },
          "href" : "https://api.spotify.com/v1/tracks/02NitVBTdoiJBovghXNFNS",
          "id" : "02NitVBTdoiJBovghXNFNS",
          "is_local" : false,
          "name" : "Under the Aegis (Remastered)",
          "popularity" : 13,
          "preview_url" : "https://p.scdn.co/mp3-preview/e67eb7778a651a256b91448d58121a5c10541df2?cid=547fd8656e964ef1bacb47b20971ae02",
          "track_number" : 26,
          "type" : "track",
          "uri" : "spotify:track:02NitVBTdoiJBovghXNFNS"
        }
      }, {
        "added_at" : "2018-04-20T20:23:06Z",
        "track" : {
          "album" : {
            "album_type" : "album",
            "artists" : [ {
              "external_urls" : {
                "spotify" : "https://open.spotify.com/artist/5HA5aLY3jJV7eimXWkRBBp"
              },
              "href" : "https://api.spotify.com/v1/artists/5HA5aLY3jJV7eimXWkRBBp",
              "id" : "5HA5aLY3jJV7eimXWkRBBp",
              "name" : "Epica",
              "type" : "artist",
              "uri" : "spotify:artist:5HA5aLY3jJV7eimXWkRBBp"
            } ],
            "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
            "external_urls" : {
              "spotify" : "https://open.spotify.com/album/1vBNhnD8XleJ5wtJYiKzuD"
            },
            "href" : "https://api.spotify.com/v1/albums/1vBNhnD8XleJ5wtJYiKzuD",
            "id" : "1vBNhnD8XleJ5wtJYiKzuD",
            "images" : [ {
              "height" : 640,
              "url" : "https://i.scdn.co/image/ab67616d0000b273ce31d19fdcca7e222b9b6492",
              "width" : 640
            }, {
              "height" : 300,
              "url" : "https://i.scdn.co/image/ab67616d00001e02ce31d19fdcca7e222b9b6492",
              "width" : 300
            }, {
              "height" : 64,
              "url" : "https://i.scdn.co/image/ab67616d00004851ce31d19fdcca7e222b9b6492",
              "width" : 64
            } ],
            "name" : "The Score 2.0: An Epic Journey",
            "release_date" : "2017-11-11",
            "release_date_precision" : "day",
            "total_tracks" : 40,
            "type" : "album",
            "uri" : "spotify:album:1vBNhnD8XleJ5wtJYiKzuD"
          },
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/5HA5aLY3jJV7eimXWkRBBp"
            },
            "href" : "https://api.spotify.com/v1/artists/5HA5aLY3jJV7eimXWkRBBp",
            "id" : "5HA5aLY3jJV7eimXWkRBBp",
            "name" : "Epica",
            "type" : "artist",
            "uri" : "spotify:artist:5HA5aLY3jJV7eimXWkRBBp"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
          "disc_number" : 1,
          "duration_ms" : 165638,
          "explicit" : false,
          "external_ids" : {
            "isrc" : "NLP510500026"
          },
          "external_urls" : {
            "spotify" : "https://open.spotify.com/track/0nCRdQq5YfaMhRqgilXZI7"
          },
          "href" : "https://api.spotify.com/v1/tracks/0nCRdQq5YfaMhRqgilXZI7",
          "id" : "0nCRdQq5YfaMhRqgilXZI7",
          "is_local" : false,
          "name" : "Mystica (Remastered)",
          "popularity" : 13,
          "preview_url" : "https://p.scdn.co/mp3-preview/29003c76b019548b31d127adf32a665dfe306506?cid=547fd8656e964ef1bacb47b20971ae02",
          "track_number" : 28,
          "type" : "track",
          "uri" : "spotify:track:0nCRdQq5YfaMhRqgilXZI7"
        }
      }, {
        "added_at" : "2018-04-20T20:23:06Z",
        "track" : {
          "album" : {
            "album_type" : "album",
            "artists" : [ {
              "external_urls" : {
                "spotify" : "https://open.spotify.com/artist/5HA5aLY3jJV7eimXWkRBBp"
              },
              "href" : "https://api.spotify.com/v1/artists/5HA5aLY3jJV7eimXWkRBBp",
              "id" : "5HA5aLY3jJV7eimXWkRBBp",
              "name" : "Epica",
              "type" : "artist",
              "uri" : "spotify:artist:5HA5aLY3jJV7eimXWkRBBp"
            } ],
            "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
            "external_urls" : {
              "spotify" : "https://open.spotify.com/album/1vBNhnD8XleJ5wtJYiKzuD"
            },
            "href" : "https://api.spotify.com/v1/albums/1vBNhnD8XleJ5wtJYiKzuD",
            "id" : "1vBNhnD8XleJ5wtJYiKzuD",
            "images" : [ {
              "height" : 640,
              "url" : "https://i.scdn.co/image/ab67616d0000b273ce31d19fdcca7e222b9b6492",
              "width" : 640
            }, {
              "height" : 300,
              "url" : "https://i.scdn.co/image/ab67616d00001e02ce31d19fdcca7e222b9b6492",
              "width" : 300
            }, {
              "height" : 64,
              "url" : "https://i.scdn.co/image/ab67616d00004851ce31d19fdcca7e222b9b6492",
              "width" : 64
            } ],
            "name" : "The Score 2.0: An Epic Journey",
            "release_date" : "2017-11-11",
            "release_date_precision" : "day",
            "total_tracks" : 40,
            "type" : "album",
            "uri" : "spotify:album:1vBNhnD8XleJ5wtJYiKzuD"
          },
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/5HA5aLY3jJV7eimXWkRBBp"
            },
            "href" : "https://api.spotify.com/v1/artists/5HA5aLY3jJV7eimXWkRBBp",
            "id" : "5HA5aLY3jJV7eimXWkRBBp",
            "name" : "Epica",
            "type" : "artist",
            "uri" : "spotify:artist:5HA5aLY3jJV7eimXWkRBBp"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
          "disc_number" : 1,
          "duration_ms" : 129313,
          "explicit" : false,
          "external_ids" : {
            "isrc" : "NLP510500028"
          },
          "external_urls" : {
            "spotify" : "https://open.spotify.com/track/1sPRp1FiQwmzpi9vhB3szK"
          },
          "href" : "https://api.spotify.com/v1/tracks/1sPRp1FiQwmzpi9vhB3szK",
          "id" : "1sPRp1FiQwmzpi9vhB3szK",
          "is_local" : false,
          "name" : "Empty Gaze (Remastered)",
          "popularity" : 13,
          "preview_url" : "https://p.scdn.co/mp3-preview/e2eef05b26bc236f7da5e20fd20534d57ba942b1?cid=547fd8656e964ef1bacb47b20971ae02",
          "track_number" : 30,
          "type" : "track",
          "uri" : "spotify:track:1sPRp1FiQwmzpi9vhB3szK"
        }
      }, {
        "added_at" : "2018-04-20T20:23:06Z",
        "track" : {
          "album" : {
            "album_type" : "album",
            "artists" : [ {
              "external_urls" : {
                "spotify" : "https://open.spotify.com/artist/5HA5aLY3jJV7eimXWkRBBp"
              },
              "href" : "https://api.spotify.com/v1/artists/5HA5aLY3jJV7eimXWkRBBp",
              "id" : "5HA5aLY3jJV7eimXWkRBBp",
              "name" : "Epica",
              "type" : "artist",
              "uri" : "spotify:artist:5HA5aLY3jJV7eimXWkRBBp"
            } ],
            "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
            "external_urls" : {
              "spotify" : "https://open.spotify.com/album/1vBNhnD8XleJ5wtJYiKzuD"
            },
            "href" : "https://api.spotify.com/v1/albums/1vBNhnD8XleJ5wtJYiKzuD",
            "id" : "1vBNhnD8XleJ5wtJYiKzuD",
            "images" : [ {
              "height" : 640,
              "url" : "https://i.scdn.co/image/ab67616d0000b273ce31d19fdcca7e222b9b6492",
              "width" : 640
            }, {
              "height" : 300,
              "url" : "https://i.scdn.co/image/ab67616d00001e02ce31d19fdcca7e222b9b6492",
              "width" : 300
            }, {
              "height" : 64,
              "url" : "https://i.scdn.co/image/ab67616d00004851ce31d19fdcca7e222b9b6492",
              "width" : 64
            } ],
            "name" : "The Score 2.0: An Epic Journey",
            "release_date" : "2017-11-11",
            "release_date_precision" : "day",
            "total_tracks" : 40,
            "type" : "album",
            "uri" : "spotify:album:1vBNhnD8XleJ5wtJYiKzuD"
          },
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/5HA5aLY3jJV7eimXWkRBBp"
            },
            "href" : "https://api.spotify.com/v1/artists/5HA5aLY3jJV7eimXWkRBBp",
            "id" : "5HA5aLY3jJV7eimXWkRBBp",
            "name" : "Epica",
            "type" : "artist",
            "uri" : "spotify:artist:5HA5aLY3jJV7eimXWkRBBp"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
          "disc_number" : 1,
          "duration_ms" : 143654,
          "explicit" : false,
          "external_ids" : {
            "isrc" : "NLP510500029"
          },
          "external_urls" : {
            "spotify" : "https://open.spotify.com/track/2Hx3NBKKFtAoycKexzhFQj"
          },
          "href" : "https://api.spotify.com/v1/tracks/2Hx3NBKKFtAoycKexzhFQj",
          "id" : "2Hx3NBKKFtAoycKexzhFQj",
          "is_local" : false,
          "name" : "The Alleged Paradigm (Remastered)",
          "popularity" : 14,
          "preview_url" : "https://p.scdn.co/mp3-preview/4821d61763f528060fbdef39d5926aa64b8eafa1?cid=547fd8656e964ef1bacb47b20971ae02",
          "track_number" : 31,
          "type" : "track",
          "uri" : "spotify:track:2Hx3NBKKFtAoycKexzhFQj"
        }
      }, {
        "added_at" : "2018-04-20T20:23:06Z",
        "track" : {
          "album" : {
            "album_type" : "album",
            "artists" : [ {
              "external_urls" : {
                "spotify" : "https://open.spotify.com/artist/5HA5aLY3jJV7eimXWkRBBp"
              },
              "href" : "https://api.spotify.com/v1/artists/5HA5aLY3jJV7eimXWkRBBp",
              "id" : "5HA5aLY3jJV7eimXWkRBBp",
              "name" : "Epica",
              "type" : "artist",
              "uri" : "spotify:artist:5HA5aLY3jJV7eimXWkRBBp"
            } ],
            "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
            "external_urls" : {
              "spotify" : "https://open.spotify.com/album/1vBNhnD8XleJ5wtJYiKzuD"
            },
            "href" : "https://api.spotify.com/v1/albums/1vBNhnD8XleJ5wtJYiKzuD",
            "id" : "1vBNhnD8XleJ5wtJYiKzuD",
            "images" : [ {
              "height" : 640,
              "url" : "https://i.scdn.co/image/ab67616d0000b273ce31d19fdcca7e222b9b6492",
              "width" : 640
            }, {
              "height" : 300,
              "url" : "https://i.scdn.co/image/ab67616d00001e02ce31d19fdcca7e222b9b6492",
              "width" : 300
            }, {
              "height" : 64,
              "url" : "https://i.scdn.co/image/ab67616d00004851ce31d19fdcca7e222b9b6492",
              "width" : 64
            } ],
            "name" : "The Score 2.0: An Epic Journey",
            "release_date" : "2017-11-11",
            "release_date_precision" : "day",
            "total_tracks" : 40,
            "type" : "album",
            "uri" : "spotify:album:1vBNhnD8XleJ5wtJYiKzuD"
          },
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/5HA5aLY3jJV7eimXWkRBBp"
            },
            "href" : "https://api.spotify.com/v1/artists/5HA5aLY3jJV7eimXWkRBBp",
            "id" : "5HA5aLY3jJV7eimXWkRBBp",
            "name" : "Epica",
            "type" : "artist",
            "uri" : "spotify:artist:5HA5aLY3jJV7eimXWkRBBp"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
          "disc_number" : 1,
          "duration_ms" : 198744,
          "explicit" : false,
          "external_ids" : {
            "isrc" : "NLP510500030"
          },
          "external_urls" : {
            "spotify" : "https://open.spotify.com/track/3EClqNyrK4qpgFiqhWTjcN"
          },
          "href" : "https://api.spotify.com/v1/tracks/3EClqNyrK4qpgFiqhWTjcN",
          "id" : "3EClqNyrK4qpgFiqhWTjcN",
          "is_local" : false,
          "name" : "Supremacy (Remastered)",
          "popularity" : 12,
          "preview_url" : "https://p.scdn.co/mp3-preview/d6082c49990353f8b022d1887bdc793c692892a6?cid=547fd8656e964ef1bacb47b20971ae02",
          "track_number" : 32,
          "type" : "track",
          "uri" : "spotify:track:3EClqNyrK4qpgFiqhWTjcN"
        }
      }, {
        "added_at" : "2018-04-20T20:23:06Z",
        "track" : {
          "album" : {
            "album_type" : "album",
            "artists" : [ {
              "external_urls" : {
                "spotify" : "https://open.spotify.com/artist/5HA5aLY3jJV7eimXWkRBBp"
              },
              "href" : "https://api.spotify.com/v1/artists/5HA5aLY3jJV7eimXWkRBBp",
              "id" : "5HA5aLY3jJV7eimXWkRBBp",
              "name" : "Epica",
              "type" : "artist",
              "uri" : "spotify:artist:5HA5aLY3jJV7eimXWkRBBp"
            } ],
            "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
            "external_urls" : {
              "spotify" : "https://open.spotify.com/album/1vBNhnD8XleJ5wtJYiKzuD"
            },
            "href" : "https://api.spotify.com/v1/albums/1vBNhnD8XleJ5wtJYiKzuD",
            "id" : "1vBNhnD8XleJ5wtJYiKzuD",
            "images" : [ {
              "height" : 640,
              "url" : "https://i.scdn.co/image/ab67616d0000b273ce31d19fdcca7e222b9b6492",
              "width" : 640
            }, {
              "height" : 300,
              "url" : "https://i.scdn.co/image/ab67616d00001e02ce31d19fdcca7e222b9b6492",
              "width" : 300
            }, {
              "height" : 64,
              "url" : "https://i.scdn.co/image/ab67616d00004851ce31d19fdcca7e222b9b6492",
              "width" : 64
            } ],
            "name" : "The Score 2.0: An Epic Journey",
            "release_date" : "2017-11-11",
            "release_date_precision" : "day",
            "total_tracks" : 40,
            "type" : "album",
            "uri" : "spotify:album:1vBNhnD8XleJ5wtJYiKzuD"
          },
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/5HA5aLY3jJV7eimXWkRBBp"
            },
            "href" : "https://api.spotify.com/v1/artists/5HA5aLY3jJV7eimXWkRBBp",
            "id" : "5HA5aLY3jJV7eimXWkRBBp",
            "name" : "Epica",
            "type" : "artist",
            "uri" : "spotify:artist:5HA5aLY3jJV7eimXWkRBBp"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
          "disc_number" : 1,
          "duration_ms" : 115498,
          "explicit" : false,
          "external_ids" : {
            "isrc" : "NLP510500031"
          },
          "external_urls" : {
            "spotify" : "https://open.spotify.com/track/3PFKU4vULfCu4onPcNPqMs"
          },
          "href" : "https://api.spotify.com/v1/tracks/3PFKU4vULfCu4onPcNPqMs",
          "id" : "3PFKU4vULfCu4onPcNPqMs",
          "is_local" : false,
          "name" : "Beyond the Depth (Remastered)",
          "popularity" : 13,
          "preview_url" : "https://p.scdn.co/mp3-preview/ecf2a3cb5b4fc8c7696add9f83b2b28a01e817b2?cid=547fd8656e964ef1bacb47b20971ae02",
          "track_number" : 33,
          "type" : "track",
          "uri" : "spotify:track:3PFKU4vULfCu4onPcNPqMs"
        }
      }, {
        "added_at" : "2018-04-20T20:23:06Z",
        "track" : {
          "album" : {
            "album_type" : "album",
            "artists" : [ {
              "external_urls" : {
                "spotify" : "https://open.spotify.com/artist/5HA5aLY3jJV7eimXWkRBBp"
              },
              "href" : "https://api.spotify.com/v1/artists/5HA5aLY3jJV7eimXWkRBBp",
              "id" : "5HA5aLY3jJV7eimXWkRBBp",
              "name" : "Epica",
              "type" : "artist",
              "uri" : "spotify:artist:5HA5aLY3jJV7eimXWkRBBp"
            } ],
            "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
            "external_urls" : {
              "spotify" : "https://open.spotify.com/album/1vBNhnD8XleJ5wtJYiKzuD"
            },
            "href" : "https://api.spotify.com/v1/albums/1vBNhnD8XleJ5wtJYiKzuD",
            "id" : "1vBNhnD8XleJ5wtJYiKzuD",
            "images" : [ {
              "height" : 640,
              "url" : "https://i.scdn.co/image/ab67616d0000b273ce31d19fdcca7e222b9b6492",
              "width" : 640
            }, {
              "height" : 300,
              "url" : "https://i.scdn.co/image/ab67616d00001e02ce31d19fdcca7e222b9b6492",
              "width" : 300
            }, {
              "height" : 64,
              "url" : "https://i.scdn.co/image/ab67616d00004851ce31d19fdcca7e222b9b6492",
              "width" : 64
            } ],
            "name" : "The Score 2.0: An Epic Journey",
            "release_date" : "2017-11-11",
            "release_date_precision" : "day",
            "total_tracks" : 40,
            "type" : "album",
            "uri" : "spotify:album:1vBNhnD8XleJ5wtJYiKzuD"
          },
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/5HA5aLY3jJV7eimXWkRBBp"
            },
            "href" : "https://api.spotify.com/v1/artists/5HA5aLY3jJV7eimXWkRBBp",
            "id" : "5HA5aLY3jJV7eimXWkRBBp",
            "name" : "Epica",
            "type" : "artist",
            "uri" : "spotify:artist:5HA5aLY3jJV7eimXWkRBBp"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
          "disc_number" : 1,
          "duration_ms" : 76909,
          "explicit" : false,
          "external_ids" : {
            "isrc" : "NLP510500032"
          },
          "external_urls" : {
            "spotify" : "https://open.spotify.com/track/27LYuIPBtEkKkpHZ4XK9Jv"
          },
          "href" : "https://api.spotify.com/v1/tracks/27LYuIPBtEkKkpHZ4XK9Jv",
          "id" : "27LYuIPBtEkKkpHZ4XK9Jv",
          "is_local" : false,
          "name" : "Epitome (Remastered)",
          "popularity" : 12,
          "preview_url" : "https://p.scdn.co/mp3-preview/005a86cd2b29d1e72fc8f70ccbdec8140e9f1dfa?cid=547fd8656e964ef1bacb47b20971ae02",
          "track_number" : 34,
          "type" : "track",
          "uri" : "spotify:track:27LYuIPBtEkKkpHZ4XK9Jv"
        }
      }, {
        "added_at" : "2018-04-20T20:23:06Z",
        "track" : {
          "album" : {
            "album_type" : "album",
            "artists" : [ {
              "external_urls" : {
                "spotify" : "https://open.spotify.com/artist/5HA5aLY3jJV7eimXWkRBBp"
              },
              "href" : "https://api.spotify.com/v1/artists/5HA5aLY3jJV7eimXWkRBBp",
              "id" : "5HA5aLY3jJV7eimXWkRBBp",
              "name" : "Epica",
              "type" : "artist",
              "uri" : "spotify:artist:5HA5aLY3jJV7eimXWkRBBp"
            } ],
            "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
            "external_urls" : {
              "spotify" : "https://open.spotify.com/album/1vBNhnD8XleJ5wtJYiKzuD"
            },
            "href" : "https://api.spotify.com/v1/albums/1vBNhnD8XleJ5wtJYiKzuD",
            "id" : "1vBNhnD8XleJ5wtJYiKzuD",
            "images" : [ {
              "height" : 640,
              "url" : "https://i.scdn.co/image/ab67616d0000b273ce31d19fdcca7e222b9b6492",
              "width" : 640
            }, {
              "height" : 300,
              "url" : "https://i.scdn.co/image/ab67616d00001e02ce31d19fdcca7e222b9b6492",
              "width" : 300
            }, {
              "height" : 64,
              "url" : "https://i.scdn.co/image/ab67616d00004851ce31d19fdcca7e222b9b6492",
              "width" : 64
            } ],
            "name" : "The Score 2.0: An Epic Journey",
            "release_date" : "2017-11-11",
            "release_date_precision" : "day",
            "total_tracks" : 40,
            "type" : "album",
            "uri" : "spotify:album:1vBNhnD8XleJ5wtJYiKzuD"
          },
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/5HA5aLY3jJV7eimXWkRBBp"
            },
            "href" : "https://api.spotify.com/v1/artists/5HA5aLY3jJV7eimXWkRBBp",
            "id" : "5HA5aLY3jJV7eimXWkRBBp",
            "name" : "Epica",
            "type" : "artist",
            "uri" : "spotify:artist:5HA5aLY3jJV7eimXWkRBBp"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "ZA" ],
          "disc_number" : 1,
          "duration_ms" : 234688,
          "explicit" : false,
          "external_ids" : {
            "isrc" : "NLP510500038"
          },
          "external_urls" : {
            "spotify" : "https://open.spotify.com/track/3d5SeH5DhGoCxQmBG9Rcw1"
          },
          "href" : "https://api.spotify.com/v1/tracks/3d5SeH5DhGoCxQmBG9Rcw1",
          "id" : "3d5SeH5DhGoCxQmBG9Rcw1",
          "is_local" : false,
          "name" : "Quietus (Score Version Remastered)",
          "popularity" : 15,
          "preview_url" : "https://p.scdn.co/mp3-preview/da99396a6770dfb1cde91611c58e6147bb8299ca?cid=547fd8656e964ef1bacb47b20971ae02",
          "track_number" : 40,
          "type" : "track",
          "uri" : "spotify:track:3d5SeH5DhGoCxQmBG9Rcw1"
        }
      } ],
      "limit" : 50,
      "next" : "https://api.spotify.com/v1/me/tracks?offset=50&limit=50",
      "offset" : 0,
      "previous" : null,
      "total" : 411
    };

    spyOn(userService, 'getUserPlaylists').and.returnValue(of(userPlaylists));
    spyOn(userService, 'getUserAlbums').and.returnValue(of(userPlaylists));
    spyOn(userService, 'getUserTracks').and.returnValue(of(userPlaylists));

    component.getUserLibrary();

    fixture.detectChanges();
    expect(component.userPlaylists).toEqual(userPlaylists.items);
    expect(component.userAlbums).toEqual(userAlbums.items);
    expect(component.userTracks).toEqual(userTracks.items);
  });

  it('should get logged user', () => {
    const loggedUser: any = {};

    loggedUser.display_name = 'Matheus';
    loggedUser.id = 'mathkruger';
    loggedUser.type = 'premium';
    loggedUser.images = [
      {
        width: 300,
        height: 300,
        url: 'https://conteudo.imguol.com.br/c/entretenimento/f7/2020/07/16/kasino-1594925259163_v2_900x506.jpg'
      }
    ]

    spyOn(usuarioLogadoService, 'getUser').and.returnValue(of(loggedUser));
    component.getLoggedUser();

    fixture.detectChanges();
    expect(component.usuarioLogado).toEqual(loggedUser);
  });
});
