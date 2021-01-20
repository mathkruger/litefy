import { SpotifyBrowseService } from './../../services/spotify-browse.service';
import { SpotifyUserService } from 'src/app/services/spotify-user.service';
import { AppModule } from './../../app.module';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HomeComponent } from './home.component';
import { of } from 'rxjs/internal/observable/of';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let userService;
  let browseService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [AppModule]
    })
    .compileComponents();
  }));

  beforeEach(inject([SpotifyUserService, SpotifyBrowseService], (s, b) => {
    userService = s;
    browseService = b;
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get all home information', () => {
    const responseArtist = {
      "items" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
        },
        "followers" : {
          "href" : null,
          "total" : 294684
        },
        "genres" : [ "brazilian metal", "brazilian power metal", "brazilian progressive metal", "latin metal", "metal", "neo classical metal", "power metal", "progressive metal", "progressive power metal", "speed metal", "symphonic metal" ],
        "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
        "id" : "7IAXZaLTb6nkJr8RmVPn5y",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/8a4db555cb1c768304fd6bf1a0a8795a3c84d540",
          "width" : 640
        }, {
          "height" : 320,
          "url" : "https://i.scdn.co/image/d771e2ab1c2abcf51cf16f5acb12d3c34ee1c81f",
          "width" : 320
        }, {
          "height" : 160,
          "url" : "https://i.scdn.co/image/e8bab2a73294ac559a578a54d90ff165c33faeea",
          "width" : 160
        } ],
        "name" : "Angra",
        "popularity" : 56,
        "type" : "artist",
        "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/0nmQIMXWTXfhgOBdNzhGOs"
        },
        "followers" : {
          "href" : null,
          "total" : 4423528
        },
        "genres" : [ "alternative metal", "nu metal" ],
        "href" : "https://api.spotify.com/v1/artists/0nmQIMXWTXfhgOBdNzhGOs",
        "id" : "0nmQIMXWTXfhgOBdNzhGOs",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/e8469ef3c4e45f9574dc963a69043ac3f3e58d41",
          "width" : 640
        }, {
          "height" : 320,
          "url" : "https://i.scdn.co/image/73b9076ebae4987573b1c6dde101d4e1961d91a6",
          "width" : 320
        }, {
          "height" : 160,
          "url" : "https://i.scdn.co/image/50bb40412699a5e3c8a5a5752c1cd3fc9bfac687",
          "width" : 160
        } ],
        "name" : "Avenged Sevenfold",
        "popularity" : 77,
        "type" : "artist",
        "uri" : "spotify:artist:0nmQIMXWTXfhgOBdNzhGOs"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/41zxOMwuASgUJp0c697KDm"
        },
        "followers" : {
          "href" : null,
          "total" : 37860
        },
        "genres" : [ "brazilian metal", "brazilian power metal", "brazilian progressive metal", "christian power metal", "neo classical metal", "power metal" ],
        "href" : "https://api.spotify.com/v1/artists/41zxOMwuASgUJp0c697KDm",
        "id" : "41zxOMwuASgUJp0c697KDm",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b273f68141d8a50a0f994ea091b2",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e02f68141d8a50a0f994ea091b2",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d00004851f68141d8a50a0f994ea091b2",
          "width" : 64
        } ],
        "name" : "Almah",
        "popularity" : 32,
        "type" : "artist",
        "uri" : "spotify:artist:41zxOMwuASgUJp0c697KDm"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/36vknDs4OtlCZuloFIJAhN"
        },
        "followers" : {
          "href" : null,
          "total" : 103648
        },
        "genres" : [ "louvor" ],
        "href" : "https://api.spotify.com/v1/artists/36vknDs4OtlCZuloFIJAhN",
        "id" : "36vknDs4OtlCZuloFIJAhN",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b27366d07b5a09b742f498561021",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e0266d07b5a09b742f498561021",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d0000485166d07b5a09b742f498561021",
          "width" : 64
        } ],
        "name" : "Vocal Livre",
        "popularity" : 52,
        "type" : "artist",
        "uri" : "spotify:artist:36vknDs4OtlCZuloFIJAhN"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/11soWXBxIfc2I4oyt0IXSy"
        },
        "followers" : {
          "href" : null,
          "total" : 2388
        },
        "genres" : [ ],
        "href" : "https://api.spotify.com/v1/artists/11soWXBxIfc2I4oyt0IXSy",
        "id" : "11soWXBxIfc2I4oyt0IXSy",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b273f2247acea518646d0ab7e183",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e02f2247acea518646d0ab7e183",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d00004851f2247acea518646d0ab7e183",
          "width" : 64
        } ],
        "name" : "Bethoveen Complete Works",
        "popularity" : 36,
        "type" : "artist",
        "uri" : "spotify:artist:11soWXBxIfc2I4oyt0IXSy"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/2EMJULFeKwgKBeyybyQo9F"
        },
        "followers" : {
          "href" : null,
          "total" : 4624
        },
        "genres" : [ "asmr" ],
        "href" : "https://api.spotify.com/v1/artists/2EMJULFeKwgKBeyybyQo9F",
        "id" : "2EMJULFeKwgKBeyybyQo9F",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b2736b29d9ae66ee3491b4f470c2",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e026b29d9ae66ee3491b4f470c2",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d000048516b29d9ae66ee3491b4f470c2",
          "width" : 64
        } ],
        "name" : "Madi ASMR",
        "popularity" : 38,
        "type" : "artist",
        "uri" : "spotify:artist:2EMJULFeKwgKBeyybyQo9F"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/0vI4MOCSTElG0Pm4iMcCDI"
        },
        "followers" : {
          "href" : null,
          "total" : 196
        },
        "genres" : [ "sound" ],
        "href" : "https://api.spotify.com/v1/artists/0vI4MOCSTElG0Pm4iMcCDI",
        "id" : "0vI4MOCSTElG0Pm4iMcCDI",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b2731a6269894a47b7374274422e",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e021a6269894a47b7374274422e",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d000048511a6269894a47b7374274422e",
          "width" : 64
        } ],
        "name" : "Rain Sounds Lab",
        "popularity" : 46,
        "type" : "artist",
        "uri" : "spotify:artist:0vI4MOCSTElG0Pm4iMcCDI"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/1Yox196W7bzVNZI7RBaPnf"
        },
        "followers" : {
          "href" : null,
          "total" : 3104317
        },
        "genres" : [ "album rock", "alternative metal", "hard rock", "melodic thrash", "metal", "old school thrash", "rock", "speed metal", "thrash metal" ],
        "href" : "https://api.spotify.com/v1/artists/1Yox196W7bzVNZI7RBaPnf",
        "id" : "1Yox196W7bzVNZI7RBaPnf",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/fdbf93704b51d1b96df59e762060ed45c420b6d6",
          "width" : 640
        }, {
          "height" : 320,
          "url" : "https://i.scdn.co/image/b2076bb69020633fc742777c392405361c29477a",
          "width" : 320
        }, {
          "height" : 160,
          "url" : "https://i.scdn.co/image/af5698fd011924d66bdeeb621c6ebce3f151c48b",
          "width" : 160
        } ],
        "name" : "Megadeth",
        "popularity" : 71,
        "type" : "artist",
        "uri" : "spotify:artist:1Yox196W7bzVNZI7RBaPnf"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/3DgcBA7P0ji5co7Z1Gfp2Q"
        },
        "followers" : {
          "href" : null,
          "total" : 129647
        },
        "genres" : [ "broadway", "movie tunes", "show tunes" ],
        "href" : "https://api.spotify.com/v1/artists/3DgcBA7P0ji5co7Z1Gfp2Q",
        "id" : "3DgcBA7P0ji5co7Z1Gfp2Q",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/7eacdeb33b66c51c9af3b54e04f101fd8f19066f",
          "width" : 640
        }, {
          "height" : 320,
          "url" : "https://i.scdn.co/image/9d9e29a55990bc8e5915c2b4c770184d0eba5a4f",
          "width" : 320
        }, {
          "height" : 160,
          "url" : "https://i.scdn.co/image/eadfe0071c6ffc87cbb53349a166fda3050009bf",
          "width" : 160
        } ],
        "name" : "Kristin Chenoweth",
        "popularity" : 62,
        "type" : "artist",
        "uri" : "spotify:artist:3DgcBA7P0ji5co7Z1Gfp2Q"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/4DWX7u8BV0vZIQSpJQQDWU"
        },
        "followers" : {
          "href" : null,
          "total" : 805396
        },
        "genres" : [ "alternative metal", "nu metal", "post-grunge", "rock" ],
        "href" : "https://api.spotify.com/v1/artists/4DWX7u8BV0vZIQSpJQQDWU",
        "id" : "4DWX7u8BV0vZIQSpJQQDWU",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/eb5ef3bc27e00034429c3dfca94fc8210f092c5a",
          "width" : 640
        }, {
          "height" : 320,
          "url" : "https://i.scdn.co/image/0d0ec6a5d1ce960dbeca68db9c5d51d163de9029",
          "width" : 320
        }, {
          "height" : 160,
          "url" : "https://i.scdn.co/image/ece9a5de764ea3b9c1584f31a4f455fe596380ae",
          "width" : 160
        } ],
        "name" : "Alter Bridge",
        "popularity" : 65,
        "type" : "artist",
        "uri" : "spotify:artist:4DWX7u8BV0vZIQSpJQQDWU"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/5X0N2k3qMnI8kSrGJT3kfT"
        },
        "followers" : {
          "href" : null,
          "total" : 395301
        },
        "genres" : [ "bow pop", "celtic metal", "celtic rock", "folk metal", "hurdy-gurdy", "melodic death metal", "power metal", "swiss metal" ],
        "href" : "https://api.spotify.com/v1/artists/5X0N2k3qMnI8kSrGJT3kfT",
        "id" : "5X0N2k3qMnI8kSrGJT3kfT",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/394e7c9e21fa0f94633424c633ef5d4f69d713f5",
          "width" : 640
        }, {
          "height" : 320,
          "url" : "https://i.scdn.co/image/ddf0debf9857d12855f44287829ceca0e8fd4d62",
          "width" : 320
        }, {
          "height" : 160,
          "url" : "https://i.scdn.co/image/344732a5e3a423cd867dba2c26876191684f907d",
          "width" : 160
        } ],
        "name" : "Eluveitie",
        "popularity" : 58,
        "type" : "artist",
        "uri" : "spotify:artist:5X0N2k3qMnI8kSrGJT3kfT"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/7jmTilWYlKOuavFfmQAcu6"
        },
        "followers" : {
          "href" : null,
          "total" : 870411
        },
        "genres" : [ "adult standards", "mellow gold", "soft rock" ],
        "href" : "https://api.spotify.com/v1/artists/7jmTilWYlKOuavFfmQAcu6",
        "id" : "7jmTilWYlKOuavFfmQAcu6",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ba44985779aeae639d99c3c16c5b81de5ae4bea8",
          "width" : 640
        }, {
          "height" : 320,
          "url" : "https://i.scdn.co/image/a7257383a5352cf8907594b9e8b571cc29e3d87f",
          "width" : 320
        }, {
          "height" : 160,
          "url" : "https://i.scdn.co/image/bdf642e3340a6f9c53f49d525257568e7e97193e",
          "width" : 160
        } ],
        "name" : "Barbra Streisand",
        "popularity" : 69,
        "type" : "artist",
        "uri" : "spotify:artist:7jmTilWYlKOuavFfmQAcu6"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/5eAWCfyUhZtHHtBdNk56l1"
        },
        "followers" : {
          "href" : null,
          "total" : 6853372
        },
        "genres" : [ "alternative metal", "nu metal", "rap metal", "rock" ],
        "href" : "https://api.spotify.com/v1/artists/5eAWCfyUhZtHHtBdNk56l1",
        "id" : "5eAWCfyUhZtHHtBdNk56l1",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/a89dc04c6faef6658c7a8d02f444775c9024cbb2",
          "width" : 640
        }, {
          "height" : 320,
          "url" : "https://i.scdn.co/image/e5c92330ef4848ec70d4325a57bec3dfae5f3901",
          "width" : 320
        }, {
          "height" : 160,
          "url" : "https://i.scdn.co/image/3e756e39f3a3fc9f807aef3c74f6756bca0a19cb",
          "width" : 160
        } ],
        "name" : "System Of A Down",
        "popularity" : 80,
        "type" : "artist",
        "uri" : "spotify:artist:5eAWCfyUhZtHHtBdNk56l1"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/6qqNVTkY8uBg9cP3Jd7DAH"
        },
        "followers" : {
          "href" : null,
          "total" : 38170655
        },
        "genres" : [ "electropop", "pop" ],
        "href" : "https://api.spotify.com/v1/artists/6qqNVTkY8uBg9cP3Jd7DAH",
        "id" : "6qqNVTkY8uBg9cP3Jd7DAH",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/8b37b863c8772bebdeefece264ee2fcee804b98d",
          "width" : 640
        }, {
          "height" : 320,
          "url" : "https://i.scdn.co/image/0b909adbce5ff84ac8435e995ee946a9a593dbd1",
          "width" : 320
        }, {
          "height" : 160,
          "url" : "https://i.scdn.co/image/d8dec1d046f4b620602664f91093bc339dcda68b",
          "width" : 160
        } ],
        "name" : "Billie Eilish",
        "popularity" : 93,
        "type" : "artist",
        "uri" : "spotify:artist:6qqNVTkY8uBg9cP3Jd7DAH"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/5GtMEZEeFFsuHY8ad4kOxv"
        },
        "followers" : {
          "href" : null,
          "total" : 1204350
        },
        "genres" : [ "british soul", "soft rock" ],
        "href" : "https://api.spotify.com/v1/artists/5GtMEZEeFFsuHY8ad4kOxv",
        "id" : "5GtMEZEeFFsuHY8ad4kOxv",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/f87ba05c9d8fde9366c092730b169729b7fd2c93",
          "width" : 640
        }, {
          "height" : 320,
          "url" : "https://i.scdn.co/image/ebba3a05ad81a03384932978859d23f765bdaa48",
          "width" : 320
        }, {
          "height" : 160,
          "url" : "https://i.scdn.co/image/bfca74945c8860c8d680d34ae4546b79cec7d1a0",
          "width" : 160
        } ],
        "name" : "Seal",
        "popularity" : 67,
        "type" : "artist",
        "uri" : "spotify:artist:5GtMEZEeFFsuHY8ad4kOxv"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/3NyKjyguig68xw6kSpeDiW"
        },
        "followers" : {
          "href" : null,
          "total" : 25343
        },
        "genres" : [ "idol rock", "j-metal", "japanese power metal", "kawaii metal" ],
        "href" : "https://api.spotify.com/v1/artists/3NyKjyguig68xw6kSpeDiW",
        "id" : "3NyKjyguig68xw6kSpeDiW",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b2737e297aef73447965748f786f",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e027e297aef73447965748f786f",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d000048517e297aef73447965748f786f",
          "width" : 64
        } ],
        "name" : "Unlucky Morpheus",
        "popularity" : 42,
        "type" : "artist",
        "uri" : "spotify:artist:3NyKjyguig68xw6kSpeDiW"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/5HA5aLY3jJV7eimXWkRBBp"
        },
        "followers" : {
          "href" : null,
          "total" : 598223
        },
        "genres" : [ "dutch metal", "gothic metal", "gothic symphonic metal", "opera metal", "power metal", "symphonic metal" ],
        "href" : "https://api.spotify.com/v1/artists/5HA5aLY3jJV7eimXWkRBBp",
        "id" : "5HA5aLY3jJV7eimXWkRBBp",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/2a86c68fa2109840ad467e58326326a414c33bd1",
          "width" : 640
        }, {
          "height" : 320,
          "url" : "https://i.scdn.co/image/f92856918ff9e5b0be2f092d074cc297fff25f14",
          "width" : 320
        }, {
          "height" : 160,
          "url" : "https://i.scdn.co/image/091aaaaaa82ae559d2355bf6658f72db84491552",
          "width" : 160
        } ],
        "name" : "Epica",
        "popularity" : 60,
        "type" : "artist",
        "uri" : "spotify:artist:5HA5aLY3jJV7eimXWkRBBp"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/7KkqUt65v6LMtR369OQ6FB"
        },
        "followers" : {
          "href" : null,
          "total" : 81984
        },
        "genres" : [ "hollywood", "show tunes" ],
        "href" : "https://api.spotify.com/v1/artists/7KkqUt65v6LMtR369OQ6FB",
        "id" : "7KkqUt65v6LMtR369OQ6FB",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/f5db74a711c815ab78bb782b5e77da0082249493",
          "width" : 640
        }, {
          "height" : 320,
          "url" : "https://i.scdn.co/image/1e95b92f9c096ba2cbacf8cb4e8218033f3da9b8",
          "width" : 320
        }, {
          "height" : 160,
          "url" : "https://i.scdn.co/image/d4aa7be0e45f6ec23e6bb7f60f8511d5459d20c7",
          "width" : 160
        } ],
        "name" : "Jonathan Groff",
        "popularity" : 70,
        "type" : "artist",
        "uri" : "spotify:artist:7KkqUt65v6LMtR369OQ6FB"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/0d5h2QZDuhDnoVyFbdA4uG"
        },
        "followers" : {
          "href" : null,
          "total" : 9373
        },
        "genres" : [ ],
        "href" : "https://api.spotify.com/v1/artists/0d5h2QZDuhDnoVyFbdA4uG",
        "id" : "0d5h2QZDuhDnoVyFbdA4uG",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/8815db3d2b07d68b919712ace17dc538d9454a9f",
          "width" : 640
        }, {
          "height" : 320,
          "url" : "https://i.scdn.co/image/a1bbf4c3739c61b6953848b42621ccaf90c7fc13",
          "width" : 320
        }, {
          "height" : 160,
          "url" : "https://i.scdn.co/image/0eaf797fc8de63a5c9dabe65cd964ade39e496f7",
          "width" : 160
        } ],
        "name" : "Ednaldo Pereira",
        "popularity" : 27,
        "type" : "artist",
        "uri" : "spotify:artist:0d5h2QZDuhDnoVyFbdA4uG"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/6ILvHfw25OcSrWk3aWPxDW"
        },
        "followers" : {
          "href" : null,
          "total" : 4664
        },
        "genres" : [ ],
        "href" : "https://api.spotify.com/v1/artists/6ILvHfw25OcSrWk3aWPxDW",
        "id" : "6ILvHfw25OcSrWk3aWPxDW",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b273cb59c0a8d504a142cd2bcbb8",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e02cb59c0a8d504a142cd2bcbb8",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d00004851cb59c0a8d504a142cd2bcbb8",
          "width" : 64
        } ],
        "name" : "Grupo Y-no",
        "popularity" : 24,
        "type" : "artist",
        "uri" : "spotify:artist:6ILvHfw25OcSrWk3aWPxDW"
      } ],
      "total" : 40,
      "limit" : 20,
      "offset" : 0,
      "href" : "https://api.spotify.com/v1/me/top/artists",
      "previous" : null,
      "next" : "https://api.spotify.com/v1/me/top/artists?limit=20&offset=20"
    };
    const responseTracks = {
      "items" : [ {
        "album" : {
          "album_type" : "ALBUM",
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/36vknDs4OtlCZuloFIJAhN"
            },
            "href" : "https://api.spotify.com/v1/artists/36vknDs4OtlCZuloFIJAhN",
            "id" : "36vknDs4OtlCZuloFIJAhN",
            "name" : "Vocal Livre",
            "type" : "artist",
            "uri" : "spotify:artist:36vknDs4OtlCZuloFIJAhN"
          } ],
          "available_markets" : [ "AD", "AE", "AR", "AT", "AU", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "SA", "SE", "SG", "SK", "SV", "TH", "TN", "TR", "TW", "US", "UY", "VN", "ZA" ],
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/1CxVTJB1c5UeHDUbXmr0tQ"
          },
          "href" : "https://api.spotify.com/v1/albums/1CxVTJB1c5UeHDUbXmr0tQ",
          "id" : "1CxVTJB1c5UeHDUbXmr0tQ",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b273c7c8e5f6f3bc6515ca4cbd6f",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e02c7c8e5f6f3bc6515ca4cbd6f",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d00004851c7c8e5f6f3bc6515ca4cbd6f",
            "width" : 64
          } ],
          "name" : "Acústico",
          "release_date" : "2020-07-21",
          "release_date_precision" : "day",
          "total_tracks" : 10,
          "type" : "album",
          "uri" : "spotify:album:1CxVTJB1c5UeHDUbXmr0tQ"
        },
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/36vknDs4OtlCZuloFIJAhN"
          },
          "href" : "https://api.spotify.com/v1/artists/36vknDs4OtlCZuloFIJAhN",
          "id" : "36vknDs4OtlCZuloFIJAhN",
          "name" : "Vocal Livre",
          "type" : "artist",
          "uri" : "spotify:artist:36vknDs4OtlCZuloFIJAhN"
        } ],
        "available_markets" : [ "AD", "AE", "AR", "AT", "AU", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "SA", "SE", "SG", "SK", "SV", "TH", "TN", "TR", "TW", "US", "UY", "VN", "ZA" ],
        "disc_number" : 1,
        "duration_ms" : 324498,
        "explicit" : false,
        "external_ids" : {
          "isrc" : "BRY152000038"
        },
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/4wFLVXhWhQUePNQPFFeojy"
        },
        "href" : "https://api.spotify.com/v1/tracks/4wFLVXhWhQUePNQPFFeojy",
        "id" : "4wFLVXhWhQUePNQPFFeojy",
        "is_local" : false,
        "name" : "Bela História - Acústico",
        "popularity" : 40,
        "preview_url" : "https://p.scdn.co/mp3-preview/c4b1cb972325cfb08f74f3a5423ff12ab61c7b9e?cid=d2efaa241b0140e1b3cec365631430a7",
        "track_number" : 5,
        "type" : "track",
        "uri" : "spotify:track:4wFLVXhWhQUePNQPFFeojy"
      }, {
        "album" : {
          "album_type" : "ALBUM",
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
          "available_markets" : [ "AD", "AE", "AR", "AT", "AU", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "SA", "SE", "SG", "SK", "SV", "TH", "TN", "TR", "TW", "US", "UY", "VN", "ZA" ],
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/2J1e7x33Aejx7KFmVbgoGW"
          },
          "href" : "https://api.spotify.com/v1/albums/2J1e7x33Aejx7KFmVbgoGW",
          "id" : "2J1e7x33Aejx7KFmVbgoGW",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b273951115ee4a64529ba1d49787",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e02951115ee4a64529ba1d49787",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d00004851951115ee4a64529ba1d49787",
            "width" : 64
          } ],
          "name" : "Temple of Shadows",
          "release_date" : "2004-11-15",
          "release_date_precision" : "day",
          "total_tracks" : 13,
          "type" : "album",
          "uri" : "spotify:album:2J1e7x33Aejx7KFmVbgoGW"
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
        "available_markets" : [ "AD", "AE", "AR", "AT", "AU", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "SA", "SE", "SG", "SK", "SV", "TH", "TN", "TR", "TW", "US", "UY", "VN", "ZA" ],
        "disc_number" : 1,
        "duration_ms" : 54186,
        "explicit" : false,
        "external_ids" : {
          "isrc" : "BRBRI0500410"
        },
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/5eYkFRuIHGaZZXUnBbsF0D"
        },
        "href" : "https://api.spotify.com/v1/tracks/5eYkFRuIHGaZZXUnBbsF0D",
        "id" : "5eYkFRuIHGaZZXUnBbsF0D",
        "is_local" : false,
        "name" : "Deus Le Volt!",
        "popularity" : 33,
        "preview_url" : "https://p.scdn.co/mp3-preview/2482dd4b523629361040c032abb11513abde5cac?cid=d2efaa241b0140e1b3cec365631430a7",
        "track_number" : 1,
        "type" : "track",
        "uri" : "spotify:track:5eYkFRuIHGaZZXUnBbsF0D"
      }, {
        "album" : {
          "album_type" : "ALBUM",
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
          "available_markets" : [ "AD", "AE", "AR", "AT", "AU", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IL", "IS", "IT", "JO", "JP", "KW", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "SA", "SE", "SG", "SK", "SV", "TH", "TN", "TR", "TW", "US", "UY", "VN", "ZA" ],
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/5kaCxwkNOt2GrhR7egsJZp"
          },
          "href" : "https://api.spotify.com/v1/albums/5kaCxwkNOt2GrhR7egsJZp",
          "id" : "5kaCxwkNOt2GrhR7egsJZp",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b2736643b10c61b98d14ac7849db",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e026643b10c61b98d14ac7849db",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d000048516643b10c61b98d14ac7849db",
            "width" : 64
          } ],
          "name" : "Aqua",
          "release_date" : "2010-09-24",
          "release_date_precision" : "day",
          "total_tracks" : 10,
          "type" : "album",
          "uri" : "spotify:album:5kaCxwkNOt2GrhR7egsJZp"
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
        "available_markets" : [ "AD", "AE", "AR", "AT", "AU", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IL", "IS", "IT", "JO", "JP", "KW", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "SA", "SE", "SG", "SK", "SV", "TH", "TN", "TR", "TW", "US", "UY", "VN", "ZA" ],
        "disc_number" : 1,
        "duration_ms" : 59946,
        "explicit" : false,
        "external_ids" : {
          "isrc" : "BRRAK1000002"
        },
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/0b5abTO4J2BuQ6MNRN49TK"
        },
        "href" : "https://api.spotify.com/v1/tracks/0b5abTO4J2BuQ6MNRN49TK",
        "id" : "0b5abTO4J2BuQ6MNRN49TK",
        "is_local" : false,
        "name" : "Viderunt Te Aquae",
        "popularity" : 25,
        "preview_url" : "https://p.scdn.co/mp3-preview/c6720c22c8cb8a9e8a16d4fc9ad0beced4d7fc9a?cid=d2efaa241b0140e1b3cec365631430a7",
        "track_number" : 1,
        "type" : "track",
        "uri" : "spotify:track:0b5abTO4J2BuQ6MNRN49TK"
      }, {
        "album" : {
          "album_type" : "COMPILATION",
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
          "available_markets" : [ "AD", "AE", "AR", "AT", "AU", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "SA", "SE", "SG", "SK", "SV", "TH", "TN", "TR", "TW", "US", "UY", "VN", "ZA" ],
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/1woCvthHJakakroP6dXNxs"
          },
          "href" : "https://api.spotify.com/v1/albums/1woCvthHJakakroP6dXNxs",
          "id" : "1woCvthHJakakroP6dXNxs",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b273f3eaae22e1c6b26400073c05",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e02f3eaae22e1c6b26400073c05",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d00004851f3eaae22e1c6b26400073c05",
            "width" : 64
          } ],
          "name" : "Wicked (Original Broadway Cast Recording / Deluxe Edition)",
          "release_date" : "2013-01-01",
          "release_date_precision" : "day",
          "total_tracks" : 28,
          "type" : "album",
          "uri" : "spotify:album:1woCvthHJakakroP6dXNxs"
        },
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/3DgcBA7P0ji5co7Z1Gfp2Q"
          },
          "href" : "https://api.spotify.com/v1/artists/3DgcBA7P0ji5co7Z1Gfp2Q",
          "id" : "3DgcBA7P0ji5co7Z1Gfp2Q",
          "name" : "Kristin Chenoweth",
          "type" : "artist",
          "uri" : "spotify:artist:3DgcBA7P0ji5co7Z1Gfp2Q"
        }, {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/53KxkH27mKZgcCmtdKYBl7"
          },
          "href" : "https://api.spotify.com/v1/artists/53KxkH27mKZgcCmtdKYBl7",
          "id" : "53KxkH27mKZgcCmtdKYBl7",
          "name" : "Sean McCourt",
          "type" : "artist",
          "uri" : "spotify:artist:53KxkH27mKZgcCmtdKYBl7"
        }, {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/36XXapGsaRgnQEQkjPfTBl"
          },
          "href" : "https://api.spotify.com/v1/artists/36XXapGsaRgnQEQkjPfTBl",
          "id" : "36XXapGsaRgnQEQkjPfTBl",
          "name" : "Cristy Candler",
          "type" : "artist",
          "uri" : "spotify:artist:36XXapGsaRgnQEQkjPfTBl"
        }, {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/5LATQYuPWELZCDEdGYN5YH"
          },
          "href" : "https://api.spotify.com/v1/artists/5LATQYuPWELZCDEdGYN5YH",
          "id" : "5LATQYuPWELZCDEdGYN5YH",
          "name" : "Jan Neuberger",
          "type" : "artist",
          "uri" : "spotify:artist:5LATQYuPWELZCDEdGYN5YH"
        } ],
        "available_markets" : [ "AD", "AE", "AR", "AT", "AU", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "SA", "SE", "SG", "SK", "SV", "TH", "TN", "TR", "TW", "US", "UY", "VN", "ZA" ],
        "disc_number" : 1,
        "duration_ms" : 400533,
        "explicit" : false,
        "external_ids" : {
          "isrc" : "USUMC0300210"
        },
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/0UzApqRTAi3d2iZexmuP3s"
        },
        "href" : "https://api.spotify.com/v1/tracks/0UzApqRTAi3d2iZexmuP3s",
        "id" : "0UzApqRTAi3d2iZexmuP3s",
        "is_local" : false,
        "name" : "No One Mourns The Wicked - From \"Wicked\" Original Broadway Cast Recording/2003",
        "popularity" : 47,
        "preview_url" : "https://p.scdn.co/mp3-preview/0777e674f3bcb452c2a28bb17d9bf5dce51f26cb?cid=d2efaa241b0140e1b3cec365631430a7",
        "track_number" : 1,
        "type" : "track",
        "uri" : "spotify:track:0UzApqRTAi3d2iZexmuP3s"
      }, {
        "album" : {
          "album_type" : "ALBUM",
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
          "available_markets" : [ "AR", "BO", "BR", "CL", "CO", "CR", "DO", "EC", "GT", "HN", "MX", "NI", "PA", "PE", "PY", "SV", "UY" ],
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/1oepjRXwZG9sVaY8N865h2"
          },
          "href" : "https://api.spotify.com/v1/albums/1oepjRXwZG9sVaY8N865h2",
          "id" : "1oepjRXwZG9sVaY8N865h2",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b273354b2f39669a130fac277c93",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e02354b2f39669a130fac277c93",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d00004851354b2f39669a130fac277c93",
            "width" : 64
          } ],
          "name" : "Motion",
          "release_date" : "2013-09-10",
          "release_date_precision" : "day",
          "total_tracks" : 10,
          "type" : "album",
          "uri" : "spotify:album:1oepjRXwZG9sVaY8N865h2"
        },
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
        "available_markets" : [ "AR", "BO", "BR", "CL", "CO", "CR", "DO", "EC", "GT", "HN", "MX", "NI", "PA", "PE", "PY", "SV", "UY" ],
        "disc_number" : 1,
        "duration_ms" : 314880,
        "explicit" : false,
        "external_ids" : {
          "isrc" : "BREOX1100001"
        },
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/2dfUehZU3bGUEhNbnJCKtq"
        },
        "href" : "https://api.spotify.com/v1/tracks/2dfUehZU3bGUEhNbnJCKtq",
        "id" : "2dfUehZU3bGUEhNbnJCKtq",
        "is_local" : false,
        "name" : "Hipnotized",
        "popularity" : 15,
        "preview_url" : "https://p.scdn.co/mp3-preview/880d3b8744a2297617ff7fbf7f8b87a7d3eb8190?cid=d2efaa241b0140e1b3cec365631430a7",
        "track_number" : 1,
        "type" : "track",
        "uri" : "spotify:track:2dfUehZU3bGUEhNbnJCKtq"
      }, {
        "album" : {
          "album_type" : "ALBUM",
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
          "available_markets" : [ "AD", "AE", "AR", "AT", "AU", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IL", "IS", "IT", "JO", "JP", "KW", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "SA", "SE", "SG", "SK", "SV", "TH", "TN", "TR", "TW", "US", "UY", "VN", "ZA" ],
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/5kaCxwkNOt2GrhR7egsJZp"
          },
          "href" : "https://api.spotify.com/v1/albums/5kaCxwkNOt2GrhR7egsJZp",
          "id" : "5kaCxwkNOt2GrhR7egsJZp",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b2736643b10c61b98d14ac7849db",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e026643b10c61b98d14ac7849db",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d000048516643b10c61b98d14ac7849db",
            "width" : 64
          } ],
          "name" : "Aqua",
          "release_date" : "2010-09-24",
          "release_date_precision" : "day",
          "total_tracks" : 10,
          "type" : "album",
          "uri" : "spotify:album:5kaCxwkNOt2GrhR7egsJZp"
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
        "available_markets" : [ "AD", "AE", "AR", "AT", "AU", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IL", "IS", "IT", "JO", "JP", "KW", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "SA", "SE", "SG", "SK", "SV", "TH", "TN", "TR", "TW", "US", "UY", "VN", "ZA" ],
        "disc_number" : 1,
        "duration_ms" : 315493,
        "explicit" : false,
        "external_ids" : {
          "isrc" : "BRRAK1000001"
        },
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/2wfrXzC3XweEdqOZQX3ACM"
        },
        "href" : "https://api.spotify.com/v1/tracks/2wfrXzC3XweEdqOZQX3ACM",
        "id" : "2wfrXzC3XweEdqOZQX3ACM",
        "is_local" : false,
        "name" : "Monster in Her Eyes",
        "popularity" : 26,
        "preview_url" : "https://p.scdn.co/mp3-preview/879073eaea5e687f39594695c3634ab271b0f37c?cid=d2efaa241b0140e1b3cec365631430a7",
        "track_number" : 8,
        "type" : "track",
        "uri" : "spotify:track:2wfrXzC3XweEdqOZQX3ACM"
      }, {
        "album" : {
          "album_type" : "ALBUM",
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/0d5h2QZDuhDnoVyFbdA4uG"
            },
            "href" : "https://api.spotify.com/v1/artists/0d5h2QZDuhDnoVyFbdA4uG",
            "id" : "0d5h2QZDuhDnoVyFbdA4uG",
            "name" : "Ednaldo Pereira",
            "type" : "artist",
            "uri" : "spotify:artist:0d5h2QZDuhDnoVyFbdA4uG"
          } ],
          "available_markets" : [ "AD", "AE", "AR", "AT", "AU", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "SA", "SE", "SG", "SK", "SV", "TH", "TN", "TR", "TW", "US", "UY", "VN", "ZA" ],
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/7DWWrcQ1NxoOIy61ngxr7C"
          },
          "href" : "https://api.spotify.com/v1/albums/7DWWrcQ1NxoOIy61ngxr7C",
          "id" : "7DWWrcQ1NxoOIy61ngxr7C",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b27320d3361a7ccfc99399cb9ebc",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e0220d3361a7ccfc99399cb9ebc",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d0000485120d3361a7ccfc99399cb9ebc",
            "width" : 64
          } ],
          "name" : "Chance",
          "release_date" : "2010-06-20",
          "release_date_precision" : "day",
          "total_tracks" : 12,
          "type" : "album",
          "uri" : "spotify:album:7DWWrcQ1NxoOIy61ngxr7C"
        },
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/0d5h2QZDuhDnoVyFbdA4uG"
          },
          "href" : "https://api.spotify.com/v1/artists/0d5h2QZDuhDnoVyFbdA4uG",
          "id" : "0d5h2QZDuhDnoVyFbdA4uG",
          "name" : "Ednaldo Pereira",
          "type" : "artist",
          "uri" : "spotify:artist:0d5h2QZDuhDnoVyFbdA4uG"
        } ],
        "available_markets" : [ "AD", "AE", "AR", "AT", "AU", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "SA", "SE", "SG", "SK", "SV", "TH", "TN", "TR", "TW", "US", "UY", "VN", "ZA" ],
        "disc_number" : 1,
        "duration_ms" : 265198,
        "explicit" : false,
        "external_ids" : {
          "isrc" : "USEMI6132231"
        },
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/3O1OVOVN0wYVAJRqco9c3G"
        },
        "href" : "https://api.spotify.com/v1/tracks/3O1OVOVN0wYVAJRqco9c3G",
        "id" : "3O1OVOVN0wYVAJRqco9c3G",
        "is_local" : false,
        "name" : "Vale Nada Vale Tudo",
        "popularity" : 35,
        "preview_url" : "https://p.scdn.co/mp3-preview/d9cc29278856724f3efcb109e35b70cef1f427f2?cid=d2efaa241b0140e1b3cec365631430a7",
        "track_number" : 1,
        "type" : "track",
        "uri" : "spotify:track:3O1OVOVN0wYVAJRqco9c3G"
      }, {
        "album" : {
          "album_type" : "COMPILATION",
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
          "available_markets" : [ "AD", "AE", "AR", "AT", "AU", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "SA", "SE", "SG", "SK", "SV", "TH", "TN", "TR", "TW", "US", "UY", "VN", "ZA" ],
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/1woCvthHJakakroP6dXNxs"
          },
          "href" : "https://api.spotify.com/v1/albums/1woCvthHJakakroP6dXNxs",
          "id" : "1woCvthHJakakroP6dXNxs",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b273f3eaae22e1c6b26400073c05",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e02f3eaae22e1c6b26400073c05",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d00004851f3eaae22e1c6b26400073c05",
            "width" : 64
          } ],
          "name" : "Wicked (Original Broadway Cast Recording / Deluxe Edition)",
          "release_date" : "2013-01-01",
          "release_date_precision" : "day",
          "total_tracks" : 28,
          "type" : "album",
          "uri" : "spotify:album:1woCvthHJakakroP6dXNxs"
        },
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/3DgcBA7P0ji5co7Z1Gfp2Q"
          },
          "href" : "https://api.spotify.com/v1/artists/3DgcBA7P0ji5co7Z1Gfp2Q",
          "id" : "3DgcBA7P0ji5co7Z1Gfp2Q",
          "name" : "Kristin Chenoweth",
          "type" : "artist",
          "uri" : "spotify:artist:3DgcBA7P0ji5co7Z1Gfp2Q"
        } ],
        "available_markets" : [ "AD", "AE", "AR", "AT", "AU", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "SA", "SE", "SG", "SK", "SV", "TH", "TN", "TR", "TW", "US", "UY", "VN", "ZA" ],
        "disc_number" : 1,
        "duration_ms" : 86213,
        "explicit" : false,
        "external_ids" : {
          "isrc" : "USUMC0300212"
        },
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/446KBz5OadTvBfXPd3L3gJ"
        },
        "href" : "https://api.spotify.com/v1/tracks/446KBz5OadTvBfXPd3L3gJ",
        "id" : "446KBz5OadTvBfXPd3L3gJ",
        "is_local" : false,
        "name" : "Dear Old Shiz - From \"Wicked\" Original Broadway Cast Recording/2003",
        "popularity" : 43,
        "preview_url" : "https://p.scdn.co/mp3-preview/55136ee338c0afb01cdaede5ab6e042e40a7350f?cid=d2efaa241b0140e1b3cec365631430a7",
        "track_number" : 2,
        "type" : "track",
        "uri" : "spotify:track:446KBz5OadTvBfXPd3L3gJ"
      }, {
        "album" : {
          "album_type" : "COMPILATION",
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
          "available_markets" : [ "AD", "AE", "AR", "AT", "AU", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "SA", "SE", "SG", "SK", "SV", "TH", "TN", "TR", "TW", "US", "UY", "VN", "ZA" ],
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/1woCvthHJakakroP6dXNxs"
          },
          "href" : "https://api.spotify.com/v1/albums/1woCvthHJakakroP6dXNxs",
          "id" : "1woCvthHJakakroP6dXNxs",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b273f3eaae22e1c6b26400073c05",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e02f3eaae22e1c6b26400073c05",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d00004851f3eaae22e1c6b26400073c05",
            "width" : 64
          } ],
          "name" : "Wicked (Original Broadway Cast Recording / Deluxe Edition)",
          "release_date" : "2013-01-01",
          "release_date_precision" : "day",
          "total_tracks" : 28,
          "type" : "album",
          "uri" : "spotify:album:1woCvthHJakakroP6dXNxs"
        },
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/31qXl2kZWi81O4SU8Efvys"
          },
          "href" : "https://api.spotify.com/v1/artists/31qXl2kZWi81O4SU8Efvys",
          "id" : "31qXl2kZWi81O4SU8Efvys",
          "name" : "Carole Shelley",
          "type" : "artist",
          "uri" : "spotify:artist:31qXl2kZWi81O4SU8Efvys"
        }, {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/73Np75Wv2tju61Eo9Zw4IR"
          },
          "href" : "https://api.spotify.com/v1/artists/73Np75Wv2tju61Eo9Zw4IR",
          "id" : "73Np75Wv2tju61Eo9Zw4IR",
          "name" : "Idina Menzel",
          "type" : "artist",
          "uri" : "spotify:artist:73Np75Wv2tju61Eo9Zw4IR"
        } ],
        "available_markets" : [ "AD", "AE", "AR", "AT", "AU", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "SA", "SE", "SG", "SK", "SV", "TH", "TN", "TR", "TW", "US", "UY", "VN", "ZA" ],
        "disc_number" : 1,
        "duration_ms" : 309520,
        "explicit" : false,
        "external_ids" : {
          "isrc" : "USUMC0300213"
        },
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/7279cZz7RhBAmRHAPraTeV"
        },
        "href" : "https://api.spotify.com/v1/tracks/7279cZz7RhBAmRHAPraTeV",
        "id" : "7279cZz7RhBAmRHAPraTeV",
        "is_local" : false,
        "name" : "The Wizard And I - From \"Wicked\" Original Broadway Cast Recording/2003",
        "popularity" : 50,
        "preview_url" : "https://p.scdn.co/mp3-preview/e9083f3f8ad9d3743cca30f94a2adead0f595bfa?cid=d2efaa241b0140e1b3cec365631430a7",
        "track_number" : 3,
        "type" : "track",
        "uri" : "spotify:track:7279cZz7RhBAmRHAPraTeV"
      }, {
        "album" : {
          "album_type" : "ALBUM",
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
          "available_markets" : [ "AD", "AE", "AR", "AT", "AU", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IL", "IS", "IT", "JO", "JP", "KW", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "SA", "SE", "SG", "SK", "SV", "TH", "TN", "TR", "TW", "US", "UY", "VN", "ZA" ],
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/5kaCxwkNOt2GrhR7egsJZp"
          },
          "href" : "https://api.spotify.com/v1/albums/5kaCxwkNOt2GrhR7egsJZp",
          "id" : "5kaCxwkNOt2GrhR7egsJZp",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b2736643b10c61b98d14ac7849db",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e026643b10c61b98d14ac7849db",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d000048516643b10c61b98d14ac7849db",
            "width" : 64
          } ],
          "name" : "Aqua",
          "release_date" : "2010-09-24",
          "release_date_precision" : "day",
          "total_tracks" : 10,
          "type" : "album",
          "uri" : "spotify:album:5kaCxwkNOt2GrhR7egsJZp"
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
        "available_markets" : [ "AD", "AE", "AR", "AT", "AU", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IL", "IS", "IT", "JO", "JP", "KW", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "SA", "SE", "SG", "SK", "SV", "TH", "TN", "TR", "TW", "US", "UY", "VN", "ZA" ],
        "disc_number" : 1,
        "duration_ms" : 333786,
        "explicit" : false,
        "external_ids" : {
          "isrc" : "BRRAK1000006"
        },
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/12y2XJ1ndjSgsl75cHdUBh"
        },
        "href" : "https://api.spotify.com/v1/tracks/12y2XJ1ndjSgsl75cHdUBh",
        "id" : "12y2XJ1ndjSgsl75cHdUBh",
        "is_local" : false,
        "name" : "The Rage of the Waters",
        "popularity" : 25,
        "preview_url" : "https://p.scdn.co/mp3-preview/00bf82b0d1ab06d9336826c6e8af810062a976d0?cid=d2efaa241b0140e1b3cec365631430a7",
        "track_number" : 5,
        "type" : "track",
        "uri" : "spotify:track:12y2XJ1ndjSgsl75cHdUBh"
      }, {
        "album" : {
          "album_type" : "COMPILATION",
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
          "available_markets" : [ "AD", "AE", "AR", "AT", "AU", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "SA", "SE", "SG", "SK", "SV", "TH", "TN", "TR", "TW", "US", "UY", "VN", "ZA" ],
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/1woCvthHJakakroP6dXNxs"
          },
          "href" : "https://api.spotify.com/v1/albums/1woCvthHJakakroP6dXNxs",
          "id" : "1woCvthHJakakroP6dXNxs",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b273f3eaae22e1c6b26400073c05",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e02f3eaae22e1c6b26400073c05",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d00004851f3eaae22e1c6b26400073c05",
            "width" : 64
          } ],
          "name" : "Wicked (Original Broadway Cast Recording / Deluxe Edition)",
          "release_date" : "2013-01-01",
          "release_date_precision" : "day",
          "total_tracks" : 28,
          "type" : "album",
          "uri" : "spotify:album:1woCvthHJakakroP6dXNxs"
        },
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/5jd4uKyxRmjPtjo4dUExXe"
          },
          "href" : "https://api.spotify.com/v1/artists/5jd4uKyxRmjPtjo4dUExXe",
          "id" : "5jd4uKyxRmjPtjo4dUExXe",
          "name" : "William Youmans",
          "type" : "artist",
          "uri" : "spotify:artist:5jd4uKyxRmjPtjo4dUExXe"
        }, {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/73Np75Wv2tju61Eo9Zw4IR"
          },
          "href" : "https://api.spotify.com/v1/artists/73Np75Wv2tju61Eo9Zw4IR",
          "id" : "73Np75Wv2tju61Eo9Zw4IR",
          "name" : "Idina Menzel",
          "type" : "artist",
          "uri" : "spotify:artist:73Np75Wv2tju61Eo9Zw4IR"
        } ],
        "available_markets" : [ "AD", "AE", "AR", "AT", "AU", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "SA", "SE", "SG", "SK", "SV", "TH", "TN", "TR", "TW", "US", "UY", "VN", "ZA" ],
        "disc_number" : 1,
        "duration_ms" : 99186,
        "explicit" : false,
        "external_ids" : {
          "isrc" : "USUMC0300215"
        },
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/1H2ZgFkgOHssJE8y24r5V2"
        },
        "href" : "https://api.spotify.com/v1/tracks/1H2ZgFkgOHssJE8y24r5V2",
        "id" : "1H2ZgFkgOHssJE8y24r5V2",
        "is_local" : false,
        "name" : "Something Bad - From \"Wicked\" Original Broadway Cast Recording/2003",
        "popularity" : 43,
        "preview_url" : "https://p.scdn.co/mp3-preview/bde9b0241aa2dac4c9aedc62a9fc837ca6c2dc35?cid=d2efaa241b0140e1b3cec365631430a7",
        "track_number" : 5,
        "type" : "track",
        "uri" : "spotify:track:1H2ZgFkgOHssJE8y24r5V2"
      }, {
        "album" : {
          "album_type" : "ALBUM",
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/6qqNVTkY8uBg9cP3Jd7DAH"
            },
            "href" : "https://api.spotify.com/v1/artists/6qqNVTkY8uBg9cP3Jd7DAH",
            "id" : "6qqNVTkY8uBg9cP3Jd7DAH",
            "name" : "Billie Eilish",
            "type" : "artist",
            "uri" : "spotify:artist:6qqNVTkY8uBg9cP3Jd7DAH"
          } ],
          "available_markets" : [ "AD", "AE", "AR", "AT", "AU", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "SA", "SE", "SG", "SK", "SV", "TH", "TN", "TR", "TW", "US", "UY", "VN", "ZA" ],
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/0S0KGZnfBGSIssfF54WSJh"
          },
          "href" : "https://api.spotify.com/v1/albums/0S0KGZnfBGSIssfF54WSJh",
          "id" : "0S0KGZnfBGSIssfF54WSJh",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b27350a3147b4edd7701a876c6ce",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e0250a3147b4edd7701a876c6ce",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d0000485150a3147b4edd7701a876c6ce",
            "width" : 64
          } ],
          "name" : "WHEN WE ALL FALL ASLEEP, WHERE DO WE GO?",
          "release_date" : "2019-03-29",
          "release_date_precision" : "day",
          "total_tracks" : 14,
          "type" : "album",
          "uri" : "spotify:album:0S0KGZnfBGSIssfF54WSJh"
        },
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/6qqNVTkY8uBg9cP3Jd7DAH"
          },
          "href" : "https://api.spotify.com/v1/artists/6qqNVTkY8uBg9cP3Jd7DAH",
          "id" : "6qqNVTkY8uBg9cP3Jd7DAH",
          "name" : "Billie Eilish",
          "type" : "artist",
          "uri" : "spotify:artist:6qqNVTkY8uBg9cP3Jd7DAH"
        } ],
        "available_markets" : [ "AD", "AE", "AR", "AT", "AU", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "SA", "SE", "SG", "SK", "SV", "TH", "TN", "TR", "TW", "US", "UY", "VN", "ZA" ],
        "disc_number" : 1,
        "duration_ms" : 194087,
        "explicit" : false,
        "external_ids" : {
          "isrc" : "USUM71900764"
        },
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/2Fxmhks0bxGSBdJ92vM42m"
        },
        "href" : "https://api.spotify.com/v1/tracks/2Fxmhks0bxGSBdJ92vM42m",
        "id" : "2Fxmhks0bxGSBdJ92vM42m",
        "is_local" : false,
        "name" : "bad guy",
        "popularity" : 89,
        "preview_url" : "https://p.scdn.co/mp3-preview/11fadb5f777b56f8800d67365bc0b50bfe0d827a?cid=d2efaa241b0140e1b3cec365631430a7",
        "track_number" : 2,
        "type" : "track",
        "uri" : "spotify:track:2Fxmhks0bxGSBdJ92vM42m"
      }, {
        "album" : {
          "album_type" : "COMPILATION",
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
          "available_markets" : [ "AD", "AE", "AR", "AT", "AU", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "SA", "SE", "SG", "SK", "SV", "TH", "TN", "TR", "TW", "US", "UY", "VN", "ZA" ],
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/1woCvthHJakakroP6dXNxs"
          },
          "href" : "https://api.spotify.com/v1/albums/1woCvthHJakakroP6dXNxs",
          "id" : "1woCvthHJakakroP6dXNxs",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b273f3eaae22e1c6b26400073c05",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e02f3eaae22e1c6b26400073c05",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d00004851f3eaae22e1c6b26400073c05",
            "width" : 64
          } ],
          "name" : "Wicked (Original Broadway Cast Recording / Deluxe Edition)",
          "release_date" : "2013-01-01",
          "release_date_precision" : "day",
          "total_tracks" : 28,
          "type" : "album",
          "uri" : "spotify:album:1woCvthHJakakroP6dXNxs"
        },
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/3DgcBA7P0ji5co7Z1Gfp2Q"
          },
          "href" : "https://api.spotify.com/v1/artists/3DgcBA7P0ji5co7Z1Gfp2Q",
          "id" : "3DgcBA7P0ji5co7Z1Gfp2Q",
          "name" : "Kristin Chenoweth",
          "type" : "artist",
          "uri" : "spotify:artist:3DgcBA7P0ji5co7Z1Gfp2Q"
        }, {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/73Np75Wv2tju61Eo9Zw4IR"
          },
          "href" : "https://api.spotify.com/v1/artists/73Np75Wv2tju61Eo9Zw4IR",
          "id" : "73Np75Wv2tju61Eo9Zw4IR",
          "name" : "Idina Menzel",
          "type" : "artist",
          "uri" : "spotify:artist:73Np75Wv2tju61Eo9Zw4IR"
        } ],
        "available_markets" : [ "AD", "AE", "AR", "AT", "AU", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "SA", "SE", "SG", "SK", "SV", "TH", "TN", "TR", "TW", "US", "UY", "VN", "ZA" ],
        "disc_number" : 1,
        "duration_ms" : 212226,
        "explicit" : false,
        "external_ids" : {
          "isrc" : "USUMC0300214"
        },
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/2lNRPajwEfma5EEmsgAe1w"
        },
        "href" : "https://api.spotify.com/v1/tracks/2lNRPajwEfma5EEmsgAe1w",
        "id" : "2lNRPajwEfma5EEmsgAe1w",
        "is_local" : false,
        "name" : "What Is This Feeling? - From \"Wicked\" Original Broadway Cast Recording/2003",
        "popularity" : 51,
        "preview_url" : "https://p.scdn.co/mp3-preview/aa009274ebd9cb21663057e6397e1f25253b873d?cid=d2efaa241b0140e1b3cec365631430a7",
        "track_number" : 4,
        "type" : "track",
        "uri" : "spotify:track:2lNRPajwEfma5EEmsgAe1w"
      }, {
        "album" : {
          "album_type" : "ALBUM",
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
          "available_markets" : [ "AD", "AE", "AR", "AT", "AU", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IL", "IS", "IT", "JO", "JP", "KW", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "SA", "SE", "SG", "SK", "SV", "TH", "TN", "TR", "TW", "US", "UY", "VN", "ZA" ],
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/5kaCxwkNOt2GrhR7egsJZp"
          },
          "href" : "https://api.spotify.com/v1/albums/5kaCxwkNOt2GrhR7egsJZp",
          "id" : "5kaCxwkNOt2GrhR7egsJZp",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b2736643b10c61b98d14ac7849db",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e026643b10c61b98d14ac7849db",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d000048516643b10c61b98d14ac7849db",
            "width" : 64
          } ],
          "name" : "Aqua",
          "release_date" : "2010-09-24",
          "release_date_precision" : "day",
          "total_tracks" : 10,
          "type" : "album",
          "uri" : "spotify:album:5kaCxwkNOt2GrhR7egsJZp"
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
        "available_markets" : [ "AD", "AE", "AR", "AT", "AU", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IL", "IS", "IT", "JO", "JP", "KW", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "SA", "SE", "SG", "SK", "SV", "TH", "TN", "TR", "TW", "US", "UY", "VN", "ZA" ],
        "disc_number" : 1,
        "duration_ms" : 322986,
        "explicit" : false,
        "external_ids" : {
          "isrc" : "BRRAK1000007"
        },
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/4q3Zau2eHfyi5Ynt3UsjaZ"
        },
        "href" : "https://api.spotify.com/v1/tracks/4q3Zau2eHfyi5Ynt3UsjaZ",
        "id" : "4q3Zau2eHfyi5Ynt3UsjaZ",
        "is_local" : false,
        "name" : "Spirit of the Air",
        "popularity" : 25,
        "preview_url" : "https://p.scdn.co/mp3-preview/0cc9e5400ad94aeb69ef84d95772677fe502dffa?cid=d2efaa241b0140e1b3cec365631430a7",
        "track_number" : 6,
        "type" : "track",
        "uri" : "spotify:track:4q3Zau2eHfyi5Ynt3UsjaZ"
      }, {
        "album" : {
          "album_type" : "ALBUM",
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
          "available_markets" : [ "AD", "AE", "AR", "AT", "AU", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DZ", "EC", "EE", "EG", "FI", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IL", "IN", "IS", "JO", "KW", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PY", "QA", "RO", "SA", "SE", "SK", "SV", "TH", "TN", "TR", "TW", "US", "UY", "VN", "ZA" ],
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/0wYXPfOtXG9SxERXMbQSvM"
          },
          "href" : "https://api.spotify.com/v1/albums/0wYXPfOtXG9SxERXMbQSvM",
          "id" : "0wYXPfOtXG9SxERXMbQSvM",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b2734cfb876fb0ac1ccd393cadab",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e024cfb876fb0ac1ccd393cadab",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d000048514cfb876fb0ac1ccd393cadab",
            "width" : 64
          } ],
          "name" : "Holy Land",
          "release_date" : "1996",
          "release_date_precision" : "year",
          "total_tracks" : 10,
          "type" : "album",
          "uri" : "spotify:album:0wYXPfOtXG9SxERXMbQSvM"
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
        "available_markets" : [ "AD", "AE", "AR", "AT", "AU", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DZ", "EC", "EE", "EG", "FI", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IL", "IN", "IS", "JO", "KW", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PY", "QA", "RO", "SA", "SE", "SK", "SV", "TH", "TN", "TR", "TW", "US", "UY", "VN", "ZA" ],
        "disc_number" : 1,
        "duration_ms" : 637466,
        "explicit" : false,
        "external_ids" : {
          "isrc" : "BRBRI0500753"
        },
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/52yBMVXqmHW9YQoM4itTUJ"
        },
        "href" : "https://api.spotify.com/v1/tracks/52yBMVXqmHW9YQoM4itTUJ",
        "id" : "52yBMVXqmHW9YQoM4itTUJ",
        "is_local" : false,
        "name" : "Carolina IV",
        "popularity" : 35,
        "preview_url" : "https://p.scdn.co/mp3-preview/8f2a4a3e4ab9ed09b1a3269028f333ffde657b54?cid=d2efaa241b0140e1b3cec365631430a7",
        "track_number" : 4,
        "type" : "track",
        "uri" : "spotify:track:52yBMVXqmHW9YQoM4itTUJ"
      }, {
        "album" : {
          "album_type" : "ALBUM",
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/5X0N2k3qMnI8kSrGJT3kfT"
            },
            "href" : "https://api.spotify.com/v1/artists/5X0N2k3qMnI8kSrGJT3kfT",
            "id" : "5X0N2k3qMnI8kSrGJT3kfT",
            "name" : "Eluveitie",
            "type" : "artist",
            "uri" : "spotify:artist:5X0N2k3qMnI8kSrGJT3kfT"
          } ],
          "available_markets" : [ "AD", "AE", "AR", "AT", "AU", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "SA", "SE", "SG", "SK", "SV", "TH", "TN", "TR", "TW", "US", "UY", "VN", "ZA" ],
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/5hY8AfvL9ZoJPkluEvee9w"
          },
          "href" : "https://api.spotify.com/v1/albums/5hY8AfvL9ZoJPkluEvee9w",
          "id" : "5hY8AfvL9ZoJPkluEvee9w",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b27325ae6724fbf73d1a2877a220",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e0225ae6724fbf73d1a2877a220",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d0000485125ae6724fbf73d1a2877a220",
            "width" : 64
          } ],
          "name" : "Origins",
          "release_date" : "2014-08-01",
          "release_date_precision" : "day",
          "total_tracks" : 20,
          "type" : "album",
          "uri" : "spotify:album:5hY8AfvL9ZoJPkluEvee9w"
        },
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/5X0N2k3qMnI8kSrGJT3kfT"
          },
          "href" : "https://api.spotify.com/v1/artists/5X0N2k3qMnI8kSrGJT3kfT",
          "id" : "5X0N2k3qMnI8kSrGJT3kfT",
          "name" : "Eluveitie",
          "type" : "artist",
          "uri" : "spotify:artist:5X0N2k3qMnI8kSrGJT3kfT"
        } ],
        "available_markets" : [ "AD", "AE", "AR", "AT", "AU", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "SA", "SE", "SG", "SK", "SV", "TH", "TN", "TR", "TW", "US", "UY", "VN", "ZA" ],
        "disc_number" : 1,
        "duration_ms" : 57917,
        "explicit" : false,
        "external_ids" : {
          "isrc" : "DED831400745"
        },
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/5Zh04mpKDJ8Sq60fcaQsi2"
        },
        "href" : "https://api.spotify.com/v1/tracks/5Zh04mpKDJ8Sq60fcaQsi2",
        "id" : "5Zh04mpKDJ8Sq60fcaQsi2",
        "is_local" : false,
        "name" : "Nothing - Intermezzo",
        "popularity" : 25,
        "preview_url" : "https://p.scdn.co/mp3-preview/c0c6b3c7ab990a5c3cbbdc4f5a16a3d09a90fbb1?cid=d2efaa241b0140e1b3cec365631430a7",
        "track_number" : 6,
        "type" : "track",
        "uri" : "spotify:track:5Zh04mpKDJ8Sq60fcaQsi2"
      }, {
        "album" : {
          "album_type" : "ALBUM",
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
          "available_markets" : [ "AD", "AE", "AR", "AT", "AU", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IL", "IS", "IT", "JO", "JP", "KW", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "SA", "SE", "SG", "SK", "SV", "TH", "TN", "TR", "TW", "US", "UY", "VN", "ZA" ],
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/5kaCxwkNOt2GrhR7egsJZp"
          },
          "href" : "https://api.spotify.com/v1/albums/5kaCxwkNOt2GrhR7egsJZp",
          "id" : "5kaCxwkNOt2GrhR7egsJZp",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b2736643b10c61b98d14ac7849db",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e026643b10c61b98d14ac7849db",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d000048516643b10c61b98d14ac7849db",
            "width" : 64
          } ],
          "name" : "Aqua",
          "release_date" : "2010-09-24",
          "release_date_precision" : "day",
          "total_tracks" : 10,
          "type" : "album",
          "uri" : "spotify:album:5kaCxwkNOt2GrhR7egsJZp"
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
        "available_markets" : [ "AD", "AE", "AR", "AT", "AU", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IL", "IS", "IT", "JO", "JP", "KW", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "SA", "SE", "SG", "SK", "SV", "TH", "TN", "TR", "TW", "US", "UY", "VN", "ZA" ],
        "disc_number" : 1,
        "duration_ms" : 330400,
        "explicit" : false,
        "external_ids" : {
          "isrc" : "BRRAK1000008"
        },
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/5dLx9bI8DJ024tsLbLc0m0"
        },
        "href" : "https://api.spotify.com/v1/tracks/5dLx9bI8DJ024tsLbLc0m0",
        "id" : "5dLx9bI8DJ024tsLbLc0m0",
        "is_local" : false,
        "name" : "Hollow",
        "popularity" : 23,
        "preview_url" : "https://p.scdn.co/mp3-preview/1ed4fc8fe19a61d7e8ea8b03c21cd8d26ecb83db?cid=d2efaa241b0140e1b3cec365631430a7",
        "track_number" : 7,
        "type" : "track",
        "uri" : "spotify:track:5dLx9bI8DJ024tsLbLc0m0"
      }, {
        "album" : {
          "album_type" : "ALBUM",
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/0nmQIMXWTXfhgOBdNzhGOs"
            },
            "href" : "https://api.spotify.com/v1/artists/0nmQIMXWTXfhgOBdNzhGOs",
            "id" : "0nmQIMXWTXfhgOBdNzhGOs",
            "name" : "Avenged Sevenfold",
            "type" : "artist",
            "uri" : "spotify:artist:0nmQIMXWTXfhgOBdNzhGOs"
          } ],
          "available_markets" : [ "AD", "AE", "AR", "AT", "AU", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "SA", "SE", "SG", "SK", "SV", "TH", "TN", "TR", "TW", "US", "UY", "VN", "ZA" ],
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/0OJ2cB135AqvHEtfXifM5D"
          },
          "href" : "https://api.spotify.com/v1/albums/0OJ2cB135AqvHEtfXifM5D",
          "id" : "0OJ2cB135AqvHEtfXifM5D",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b2734843e0f824a00334e811279c",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e024843e0f824a00334e811279c",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d000048514843e0f824a00334e811279c",
            "width" : 64
          } ],
          "name" : "The Stage (Deluxe Edition)",
          "release_date" : "2017-12-22",
          "release_date_precision" : "day",
          "total_tracks" : 22,
          "type" : "album",
          "uri" : "spotify:album:0OJ2cB135AqvHEtfXifM5D"
        },
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/0nmQIMXWTXfhgOBdNzhGOs"
          },
          "href" : "https://api.spotify.com/v1/artists/0nmQIMXWTXfhgOBdNzhGOs",
          "id" : "0nmQIMXWTXfhgOBdNzhGOs",
          "name" : "Avenged Sevenfold",
          "type" : "artist",
          "uri" : "spotify:artist:0nmQIMXWTXfhgOBdNzhGOs"
        } ],
        "available_markets" : [ "AD", "AE", "AR", "AT", "AU", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "SA", "SE", "SG", "SK", "SV", "TH", "TN", "TR", "TW", "US", "UY", "VN", "ZA" ],
        "disc_number" : 1,
        "duration_ms" : 512024,
        "explicit" : false,
        "external_ids" : {
          "isrc" : "USUG11600830"
        },
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/69gBAQdpxvCsw34Bbf8MnD"
        },
        "href" : "https://api.spotify.com/v1/tracks/69gBAQdpxvCsw34Bbf8MnD",
        "id" : "69gBAQdpxvCsw34Bbf8MnD",
        "is_local" : false,
        "name" : "The Stage",
        "popularity" : 55,
        "preview_url" : "https://p.scdn.co/mp3-preview/3f41dd4215764e590346720281ea57bae3478601?cid=d2efaa241b0140e1b3cec365631430a7",
        "track_number" : 1,
        "type" : "track",
        "uri" : "spotify:track:69gBAQdpxvCsw34Bbf8MnD"
      }, {
        "album" : {
          "album_type" : "ALBUM",
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
          "available_markets" : [ "AD", "AE", "AR", "AT", "AU", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IL", "IS", "IT", "JO", "JP", "KW", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "SA", "SE", "SG", "SK", "SV", "TH", "TN", "TR", "TW", "US", "UY", "VN", "ZA" ],
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/5kaCxwkNOt2GrhR7egsJZp"
          },
          "href" : "https://api.spotify.com/v1/albums/5kaCxwkNOt2GrhR7egsJZp",
          "id" : "5kaCxwkNOt2GrhR7egsJZp",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b2736643b10c61b98d14ac7849db",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e026643b10c61b98d14ac7849db",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d000048516643b10c61b98d14ac7849db",
            "width" : 64
          } ],
          "name" : "Aqua",
          "release_date" : "2010-09-24",
          "release_date_precision" : "day",
          "total_tracks" : 10,
          "type" : "album",
          "uri" : "spotify:album:5kaCxwkNOt2GrhR7egsJZp"
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
        "available_markets" : [ "AD", "AE", "AR", "AT", "AU", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IL", "IS", "IT", "JO", "JP", "KW", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "SA", "SE", "SG", "SK", "SV", "TH", "TN", "TR", "TW", "US", "UY", "VN", "ZA" ],
        "disc_number" : 1,
        "duration_ms" : 292186,
        "explicit" : false,
        "external_ids" : {
          "isrc" : "BRRAK1000003"
        },
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/7IrQMwTjcVuf2rAflOWhGz"
        },
        "href" : "https://api.spotify.com/v1/tracks/7IrQMwTjcVuf2rAflOWhGz",
        "id" : "7IrQMwTjcVuf2rAflOWhGz",
        "is_local" : false,
        "name" : "Arising Thunder",
        "popularity" : 34,
        "preview_url" : "https://p.scdn.co/mp3-preview/7404b05482611dfcc930439ea003cd118ff0d239?cid=d2efaa241b0140e1b3cec365631430a7",
        "track_number" : 2,
        "type" : "track",
        "uri" : "spotify:track:7IrQMwTjcVuf2rAflOWhGz"
      }, {
        "album" : {
          "album_type" : "ALBUM",
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
          "available_markets" : [ "AR", "BO", "BR", "CL", "CO", "CR", "DO", "EC", "GT", "HN", "MX", "NI", "PA", "PE", "PY", "SV", "UY" ],
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/1oepjRXwZG9sVaY8N865h2"
          },
          "href" : "https://api.spotify.com/v1/albums/1oepjRXwZG9sVaY8N865h2",
          "id" : "1oepjRXwZG9sVaY8N865h2",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b273354b2f39669a130fac277c93",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e02354b2f39669a130fac277c93",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d00004851354b2f39669a130fac277c93",
            "width" : 64
          } ],
          "name" : "Motion",
          "release_date" : "2013-09-10",
          "release_date_precision" : "day",
          "total_tracks" : 10,
          "type" : "album",
          "uri" : "spotify:album:1oepjRXwZG9sVaY8N865h2"
        },
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
        "available_markets" : [ "AR", "BO", "BR", "CL", "CO", "CR", "DO", "EC", "GT", "HN", "MX", "NI", "PA", "PE", "PY", "SV", "UY" ],
        "disc_number" : 1,
        "duration_ms" : 239373,
        "explicit" : false,
        "external_ids" : {
          "isrc" : "BREOX1100002"
        },
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/0PEU2gabD62TPUuwF9BHeQ"
        },
        "href" : "https://api.spotify.com/v1/tracks/0PEU2gabD62TPUuwF9BHeQ",
        "id" : "0PEU2gabD62TPUuwF9BHeQ",
        "is_local" : false,
        "name" : "Living and Drifting",
        "popularity" : 21,
        "preview_url" : "https://p.scdn.co/mp3-preview/c3e6083bcee8ad7278d0c3eab2b78c9cc90fc9bd?cid=d2efaa241b0140e1b3cec365631430a7",
        "track_number" : 2,
        "type" : "track",
        "uri" : "spotify:track:0PEU2gabD62TPUuwF9BHeQ"
      } ],
      "total" : 50,
      "limit" : 20,
      "offset" : 0,
      "href" : "https://api.spotify.com/v1/me/top/tracks",
      "previous" : null,
      "next" : "https://api.spotify.com/v1/me/top/tracks?limit=20&offset=20"
    };
    const responseAlbum = {
      "albums" : {
        "href" : "https://api.spotify.com/v1/browse/new-releases?offset=0&limit=50",
        "items" : [ {
          "album_type" : "album",
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/5ZsFI1h6hIdQRw2ti0hz81"
            },
            "href" : "https://api.spotify.com/v1/artists/5ZsFI1h6hIdQRw2ti0hz81",
            "id" : "5ZsFI1h6hIdQRw2ti0hz81",
            "name" : "ZAYN",
            "type" : "artist",
            "uri" : "spotify:artist:5ZsFI1h6hIdQRw2ti0hz81"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/2yuQqhSklmfWgn8lmJNk5t"
          },
          "href" : "https://api.spotify.com/v1/albums/2yuQqhSklmfWgn8lmJNk5t",
          "id" : "2yuQqhSklmfWgn8lmJNk5t",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b273f160ff1c91caffd9e24cc736",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e02f160ff1c91caffd9e24cc736",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d00004851f160ff1c91caffd9e24cc736",
            "width" : 64
          } ],
          "name" : "Nobody Is Listening",
          "release_date" : "2021-01-15",
          "release_date_precision" : "day",
          "total_tracks" : 11,
          "type" : "album",
          "uri" : "spotify:album:2yuQqhSklmfWgn8lmJNk5t"
        }, {
          "album_type" : "single",
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/4MCBfE4596Uoi2O4DtmEMz"
            },
            "href" : "https://api.spotify.com/v1/artists/4MCBfE4596Uoi2O4DtmEMz",
            "id" : "4MCBfE4596Uoi2O4DtmEMz",
            "name" : "Juice WRLD",
            "type" : "artist",
            "uri" : "spotify:artist:4MCBfE4596Uoi2O4DtmEMz"
          }, {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/50co4Is1HCEo8bhOyUWKpn"
            },
            "href" : "https://api.spotify.com/v1/artists/50co4Is1HCEo8bhOyUWKpn",
            "id" : "50co4Is1HCEo8bhOyUWKpn",
            "name" : "Young Thug",
            "type" : "artist",
            "uri" : "spotify:artist:50co4Is1HCEo8bhOyUWKpn"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/5hUFZjxtqYvxm9FGUhHCdE"
          },
          "href" : "https://api.spotify.com/v1/albums/5hUFZjxtqYvxm9FGUhHCdE",
          "id" : "5hUFZjxtqYvxm9FGUhHCdE",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b2730bda1f6aa92d42f44d621db6",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e020bda1f6aa92d42f44d621db6",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d000048510bda1f6aa92d42f44d621db6",
            "width" : 64
          } ],
          "name" : "Bad Boy (with Young Thug)",
          "release_date" : "2021-01-15",
          "release_date_precision" : "day",
          "total_tracks" : 1,
          "type" : "album",
          "uri" : "spotify:album:5hUFZjxtqYvxm9FGUhHCdE"
        }, {
          "album_type" : "single",
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/6eU0jV2eEZ8XTM7EmlguK6"
            },
            "href" : "https://api.spotify.com/v1/artists/6eU0jV2eEZ8XTM7EmlguK6",
            "id" : "6eU0jV2eEZ8XTM7EmlguK6",
            "name" : "Black Pumas",
            "type" : "artist",
            "uri" : "spotify:artist:6eU0jV2eEZ8XTM7EmlguK6"
          } ],
          "available_markets" : [ "AE", "BH", "CY", "EG", "HK", "ID", "IL", "IN", "JO", "KW", "KZ", "LB", "MY", "OM", "PH", "PS", "QA", "SA", "SG", "TH", "TR", "TW", "VN", "ZA", "DZ", "MA", "TN", "AR", "BR", "CL", "PY", "UY", "BO", "DO", "CO", "EC", "PA", "PE", "CR", "GT", "HN", "MX", "NI", "SV" ],
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/6XiQMt2iIFMlE893eySiCK"
          },
          "href" : "https://api.spotify.com/v1/albums/6XiQMt2iIFMlE893eySiCK",
          "id" : "6XiQMt2iIFMlE893eySiCK",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b2738ad167201fd89e73e635cb84",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e028ad167201fd89e73e635cb84",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d000048518ad167201fd89e73e635cb84",
            "width" : 64
          } ],
          "name" : "Spotify Singles",
          "release_date" : "2021-01-20",
          "release_date_precision" : "day",
          "total_tracks" : 2,
          "type" : "album",
          "uri" : "spotify:album:6XiQMt2iIFMlE893eySiCK"
        }, {
          "album_type" : "single",
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/66CXWjxzNUsdJxJ2JdwvnR"
            },
            "href" : "https://api.spotify.com/v1/artists/66CXWjxzNUsdJxJ2JdwvnR",
            "id" : "66CXWjxzNUsdJxJ2JdwvnR",
            "name" : "Ariana Grande",
            "type" : "artist",
            "uri" : "spotify:artist:66CXWjxzNUsdJxJ2JdwvnR"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/11X2d5C6rFBFZZUOCJLPt9"
          },
          "href" : "https://api.spotify.com/v1/albums/11X2d5C6rFBFZZUOCJLPt9",
          "id" : "11X2d5C6rFBFZZUOCJLPt9",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b27343d04ae192008a5113862faf",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e0243d04ae192008a5113862faf",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d0000485143d04ae192008a5113862faf",
            "width" : 64
          } ],
          "name" : "34+35 (Remix)",
          "release_date" : "2021-01-15",
          "release_date_precision" : "day",
          "total_tracks" : 1,
          "type" : "album",
          "uri" : "spotify:album:11X2d5C6rFBFZZUOCJLPt9"
        }, {
          "album_type" : "single",
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/4r63FhuTkUYltbVAg5TQnk"
            },
            "href" : "https://api.spotify.com/v1/artists/4r63FhuTkUYltbVAg5TQnk",
            "id" : "4r63FhuTkUYltbVAg5TQnk",
            "name" : "DaBaby",
            "type" : "artist",
            "uri" : "spotify:artist:4r63FhuTkUYltbVAg5TQnk"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/6kaYDcX9dNmJE5OU71IUby"
          },
          "href" : "https://api.spotify.com/v1/albums/6kaYDcX9dNmJE5OU71IUby",
          "id" : "6kaYDcX9dNmJE5OU71IUby",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b2737b41da110df7023757e8f8fa",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e027b41da110df7023757e8f8fa",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d000048517b41da110df7023757e8f8fa",
            "width" : 64
          } ],
          "name" : "Masterpiece",
          "release_date" : "2021-01-15",
          "release_date_precision" : "day",
          "total_tracks" : 1,
          "type" : "album",
          "uri" : "spotify:album:6kaYDcX9dNmJE5OU71IUby"
        }, {
          "album_type" : "single",
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/00FQb4jTyendYWaN8pK0wa"
            },
            "href" : "https://api.spotify.com/v1/artists/00FQb4jTyendYWaN8pK0wa",
            "id" : "00FQb4jTyendYWaN8pK0wa",
            "name" : "Lana Del Rey",
            "type" : "artist",
            "uri" : "spotify:artist:00FQb4jTyendYWaN8pK0wa"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/5p5cFBRERDfiNJlfABACP0"
          },
          "href" : "https://api.spotify.com/v1/albums/5p5cFBRERDfiNJlfABACP0",
          "id" : "5p5cFBRERDfiNJlfABACP0",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b27365cbb09fc2622ff89467472e",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e0265cbb09fc2622ff89467472e",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d0000485165cbb09fc2622ff89467472e",
            "width" : 64
          } ],
          "name" : "Chemtrails Over The Country Club",
          "release_date" : "2021-01-11",
          "release_date_precision" : "day",
          "total_tracks" : 1,
          "type" : "album",
          "uri" : "spotify:album:5p5cFBRERDfiNJlfABACP0"
        }, {
          "album_type" : "single",
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/0C8ZW7ezQVs4URX5aX7Kqx"
            },
            "href" : "https://api.spotify.com/v1/artists/0C8ZW7ezQVs4URX5aX7Kqx",
            "id" : "0C8ZW7ezQVs4URX5aX7Kqx",
            "name" : "Selena Gomez",
            "type" : "artist",
            "uri" : "spotify:artist:0C8ZW7ezQVs4URX5aX7Kqx"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/5vGdWMt1oHMAKGiwkZ8H6E"
          },
          "href" : "https://api.spotify.com/v1/albums/5vGdWMt1oHMAKGiwkZ8H6E",
          "id" : "5vGdWMt1oHMAKGiwkZ8H6E",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b273774a20b1ddf6c80d506b47c0",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e02774a20b1ddf6c80d506b47c0",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d00004851774a20b1ddf6c80d506b47c0",
            "width" : 64
          } ],
          "name" : "De Una Vez",
          "release_date" : "2021-01-14",
          "release_date_precision" : "day",
          "total_tracks" : 1,
          "type" : "album",
          "uri" : "spotify:album:5vGdWMt1oHMAKGiwkZ8H6E"
        }, {
          "album_type" : "single",
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/1UTPBmNbXNTittyMJrNkvw"
            },
            "href" : "https://api.spotify.com/v1/artists/1UTPBmNbXNTittyMJrNkvw",
            "id" : "1UTPBmNbXNTittyMJrNkvw",
            "name" : "Blake Shelton",
            "type" : "artist",
            "uri" : "spotify:artist:1UTPBmNbXNTittyMJrNkvw"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/0fQJbMjhfuiiP9HAQtrJEX"
          },
          "href" : "https://api.spotify.com/v1/albums/0fQJbMjhfuiiP9HAQtrJEX",
          "id" : "0fQJbMjhfuiiP9HAQtrJEX",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b2739ca4f5db306988ac4b2afbb4",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e029ca4f5db306988ac4b2afbb4",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d000048519ca4f5db306988ac4b2afbb4",
            "width" : 64
          } ],
          "name" : "Minimum Wage",
          "release_date" : "2021-01-15",
          "release_date_precision" : "day",
          "total_tracks" : 1,
          "type" : "album",
          "uri" : "spotify:album:0fQJbMjhfuiiP9HAQtrJEX"
        }, {
          "album_type" : "single",
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/3gIRvgZssIb9aiirIg0nI3"
            },
            "href" : "https://api.spotify.com/v1/artists/3gIRvgZssIb9aiirIg0nI3",
            "id" : "3gIRvgZssIb9aiirIg0nI3",
            "name" : "Jeremy Zucker",
            "type" : "artist",
            "uri" : "spotify:artist:3gIRvgZssIb9aiirIg0nI3"
          }, {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/5JMLG56F1X5mFmWNmS0iAp"
            },
            "href" : "https://api.spotify.com/v1/artists/5JMLG56F1X5mFmWNmS0iAp",
            "id" : "5JMLG56F1X5mFmWNmS0iAp",
            "name" : "Chelsea Cutler",
            "type" : "artist",
            "uri" : "spotify:artist:5JMLG56F1X5mFmWNmS0iAp"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/5nAv0lNEyaR9IC0RR2UQiW"
          },
          "href" : "https://api.spotify.com/v1/albums/5nAv0lNEyaR9IC0RR2UQiW",
          "id" : "5nAv0lNEyaR9IC0RR2UQiW",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b273dccb079c492cf99e02e3255b",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e02dccb079c492cf99e02e3255b",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d00004851dccb079c492cf99e02e3255b",
            "width" : 64
          } ],
          "name" : "this is how you fall in love",
          "release_date" : "2021-01-15",
          "release_date_precision" : "day",
          "total_tracks" : 1,
          "type" : "album",
          "uri" : "spotify:album:5nAv0lNEyaR9IC0RR2UQiW"
        }, {
          "album_type" : "album",
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/3PyJHH2wyfQK3WZrk9rpmP"
            },
            "href" : "https://api.spotify.com/v1/artists/3PyJHH2wyfQK3WZrk9rpmP",
            "id" : "3PyJHH2wyfQK3WZrk9rpmP",
            "name" : "Ashnikko",
            "type" : "artist",
            "uri" : "spotify:artist:3PyJHH2wyfQK3WZrk9rpmP"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/438ToDoVaJH5aTIXXrlDyI"
          },
          "href" : "https://api.spotify.com/v1/albums/438ToDoVaJH5aTIXXrlDyI",
          "id" : "438ToDoVaJH5aTIXXrlDyI",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b27360f33dbda2db602235c60685",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e0260f33dbda2db602235c60685",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d0000485160f33dbda2db602235c60685",
            "width" : 64
          } ],
          "name" : "DEMIDEVIL",
          "release_date" : "2021-01-15",
          "release_date_precision" : "day",
          "total_tracks" : 10,
          "type" : "album",
          "uri" : "spotify:album:438ToDoVaJH5aTIXXrlDyI"
        }, {
          "album_type" : "single",
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/0Y5tJX1MQlPlqiwlOH1tJY"
            },
            "href" : "https://api.spotify.com/v1/artists/0Y5tJX1MQlPlqiwlOH1tJY",
            "id" : "0Y5tJX1MQlPlqiwlOH1tJY",
            "name" : "Travis Scott",
            "type" : "artist",
            "uri" : "spotify:artist:0Y5tJX1MQlPlqiwlOH1tJY"
          }, {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/2o08sCWF5yyo2G4DCiT7T9"
            },
            "href" : "https://api.spotify.com/v1/artists/2o08sCWF5yyo2G4DCiT7T9",
            "id" : "2o08sCWF5yyo2G4DCiT7T9",
            "name" : "HVME",
            "type" : "artist",
            "uri" : "spotify:artist:2o08sCWF5yyo2G4DCiT7T9"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/3SdFuYwyWoq7kuaHdTDcyD"
          },
          "href" : "https://api.spotify.com/v1/albums/3SdFuYwyWoq7kuaHdTDcyD",
          "id" : "3SdFuYwyWoq7kuaHdTDcyD",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b2739109b0425fb5b36284a24891",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e029109b0425fb5b36284a24891",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d000048519109b0425fb5b36284a24891",
            "width" : 64
          } ],
          "name" : "Goosebumps (Remix)",
          "release_date" : "2021-01-15",
          "release_date_precision" : "day",
          "total_tracks" : 1,
          "type" : "album",
          "uri" : "spotify:album:3SdFuYwyWoq7kuaHdTDcyD"
        }, {
          "album_type" : "album",
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/5xSx2FM8mQnrfgM1QsHniB"
            },
            "href" : "https://api.spotify.com/v1/artists/5xSx2FM8mQnrfgM1QsHniB",
            "id" : "5xSx2FM8mQnrfgM1QsHniB",
            "name" : "Danna Paola",
            "type" : "artist",
            "uri" : "spotify:artist:5xSx2FM8mQnrfgM1QsHniB"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/5y5Qud31YIPnxbVjzojvmK"
          },
          "href" : "https://api.spotify.com/v1/albums/5y5Qud31YIPnxbVjzojvmK",
          "id" : "5y5Qud31YIPnxbVjzojvmK",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b2735ac6151dc74caf0d0a617ef7",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e025ac6151dc74caf0d0a617ef7",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d000048515ac6151dc74caf0d0a617ef7",
            "width" : 64
          } ],
          "name" : "K.O.",
          "release_date" : "2021-01-13",
          "release_date_precision" : "day",
          "total_tracks" : 11,
          "type" : "album",
          "uri" : "spotify:album:5y5Qud31YIPnxbVjzojvmK"
        }, {
          "album_type" : "single",
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/08PvCOlef4xdOr20jFSTPd"
            },
            "href" : "https://api.spotify.com/v1/artists/08PvCOlef4xdOr20jFSTPd",
            "id" : "08PvCOlef4xdOr20jFSTPd",
            "name" : "Flo Milli",
            "type" : "artist",
            "uri" : "spotify:artist:08PvCOlef4xdOr20jFSTPd"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/6o4bP0wIOQVPgtaKOHO3af"
          },
          "href" : "https://api.spotify.com/v1/albums/6o4bP0wIOQVPgtaKOHO3af",
          "id" : "6o4bP0wIOQVPgtaKOHO3af",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b2733eee02e04b08d2c415ae63a5",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e023eee02e04b08d2c415ae63a5",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d000048513eee02e04b08d2c415ae63a5",
            "width" : 64
          } ],
          "name" : "Roaring 20s",
          "release_date" : "2021-01-15",
          "release_date_precision" : "day",
          "total_tracks" : 1,
          "type" : "album",
          "uri" : "spotify:album:6o4bP0wIOQVPgtaKOHO3af"
        }, {
          "album_type" : "single",
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/6wMr4zKPrrR0UVz08WtUWc"
            },
            "href" : "https://api.spotify.com/v1/artists/6wMr4zKPrrR0UVz08WtUWc",
            "id" : "6wMr4zKPrrR0UVz08WtUWc",
            "name" : "Black Coffee",
            "type" : "artist",
            "uri" : "spotify:artist:6wMr4zKPrrR0UVz08WtUWc"
          }, {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/5fMUXHkw8R8eOP2RNVYEZX"
            },
            "href" : "https://api.spotify.com/v1/artists/5fMUXHkw8R8eOP2RNVYEZX",
            "id" : "5fMUXHkw8R8eOP2RNVYEZX",
            "name" : "Diplo",
            "type" : "artist",
            "uri" : "spotify:artist:5fMUXHkw8R8eOP2RNVYEZX"
          }, {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/2vf4pRsEY6LpL5tKmqWb64"
            },
            "href" : "https://api.spotify.com/v1/artists/2vf4pRsEY6LpL5tKmqWb64",
            "id" : "2vf4pRsEY6LpL5tKmqWb64",
            "name" : "Elderbrook",
            "type" : "artist",
            "uri" : "spotify:artist:2vf4pRsEY6LpL5tKmqWb64"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TR", "TW", "UA", "US", "UY", "VN", "XK" ],
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/0GqBHBdVgx0H48cON75KE4"
          },
          "href" : "https://api.spotify.com/v1/albums/0GqBHBdVgx0H48cON75KE4",
          "id" : "0GqBHBdVgx0H48cON75KE4",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b27382fa7f9108beaf36bf5f815c",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e0282fa7f9108beaf36bf5f815c",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d0000485182fa7f9108beaf36bf5f815c",
            "width" : 64
          } ],
          "name" : "Never Gonna Forget (with Diplo feat. Elderbrook)",
          "release_date" : "2021-01-15",
          "release_date_precision" : "day",
          "total_tracks" : 1,
          "type" : "album",
          "uri" : "spotify:album:0GqBHBdVgx0H48cON75KE4"
        }, {
          "album_type" : "single",
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/6roFdX1y5BYSbp60OTJWMd"
            },
            "href" : "https://api.spotify.com/v1/artists/6roFdX1y5BYSbp60OTJWMd",
            "id" : "6roFdX1y5BYSbp60OTJWMd",
            "name" : "Tim McGraw",
            "type" : "artist",
            "uri" : "spotify:artist:6roFdX1y5BYSbp60OTJWMd"
          }, {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/3BEV5FcxOtkQJ7lLRKMh3V"
            },
            "href" : "https://api.spotify.com/v1/artists/3BEV5FcxOtkQJ7lLRKMh3V",
            "id" : "3BEV5FcxOtkQJ7lLRKMh3V",
            "name" : "Tyler Hubbard",
            "type" : "artist",
            "uri" : "spotify:artist:3BEV5FcxOtkQJ7lLRKMh3V"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/0r9cbjDibgfT9Zvj5PHiFw"
          },
          "href" : "https://api.spotify.com/v1/albums/0r9cbjDibgfT9Zvj5PHiFw",
          "id" : "0r9cbjDibgfT9Zvj5PHiFw",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b273882b55d6e66235a7a5bb070e",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e02882b55d6e66235a7a5bb070e",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d00004851882b55d6e66235a7a5bb070e",
            "width" : 64
          } ],
          "name" : "Undivided",
          "release_date" : "2021-01-13",
          "release_date_precision" : "day",
          "total_tracks" : 1,
          "type" : "album",
          "uri" : "spotify:album:0r9cbjDibgfT9Zvj5PHiFw"
        }, {
          "album_type" : "album",
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/2jnIB6XdLvnJUeNTy5A0J2"
            },
            "href" : "https://api.spotify.com/v1/artists/2jnIB6XdLvnJUeNTy5A0J2",
            "id" : "2jnIB6XdLvnJUeNTy5A0J2",
            "name" : "Why Don't We",
            "type" : "artist",
            "uri" : "spotify:artist:2jnIB6XdLvnJUeNTy5A0J2"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/0cVSrL39wn0PkBm9PFf6G2"
          },
          "href" : "https://api.spotify.com/v1/albums/0cVSrL39wn0PkBm9PFf6G2",
          "id" : "0cVSrL39wn0PkBm9PFf6G2",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b273a59fe305e5504a51fa413d29",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e02a59fe305e5504a51fa413d29",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d00004851a59fe305e5504a51fa413d29",
            "width" : 64
          } ],
          "name" : "The Good Times and The Bad Ones",
          "release_date" : "2021-01-15",
          "release_date_precision" : "day",
          "total_tracks" : 10,
          "type" : "album",
          "uri" : "spotify:album:0cVSrL39wn0PkBm9PFf6G2"
        }, {
          "album_type" : "album",
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/2Yhge9MsE7qKcV0eWsuuHM"
            },
            "href" : "https://api.spotify.com/v1/artists/2Yhge9MsE7qKcV0eWsuuHM",
            "id" : "2Yhge9MsE7qKcV0eWsuuHM",
            "name" : "Healy",
            "type" : "artist",
            "uri" : "spotify:artist:2Yhge9MsE7qKcV0eWsuuHM"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/0iE10xMwLrtzB0fS5Pq5Ic"
          },
          "href" : "https://api.spotify.com/v1/albums/0iE10xMwLrtzB0fS5Pq5Ic",
          "id" : "0iE10xMwLrtzB0fS5Pq5Ic",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b2736bc1528d0938deb117616d83",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e026bc1528d0938deb117616d83",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d000048516bc1528d0938deb117616d83",
            "width" : 64
          } ],
          "name" : "Tungsten",
          "release_date" : "2021-01-13",
          "release_date_precision" : "day",
          "total_tracks" : 13,
          "type" : "album",
          "uri" : "spotify:album:0iE10xMwLrtzB0fS5Pq5Ic"
        }, {
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
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/1i3pkaGXNV3kdn54InaVHF"
          },
          "href" : "https://api.spotify.com/v1/albums/1i3pkaGXNV3kdn54InaVHF",
          "id" : "1i3pkaGXNV3kdn54InaVHF",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b27324e6bf9f0974eb838955ff94",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e0224e6bf9f0974eb838955ff94",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d0000485124e6bf9f0974eb838955ff94",
            "width" : 64
          } ],
          "name" : "One Night In Miami... (Original Motion Picture Soundtrack)",
          "release_date" : "2021-01-15",
          "release_date_precision" : "day",
          "total_tracks" : 22,
          "type" : "album",
          "uri" : "spotify:album:1i3pkaGXNV3kdn54InaVHF"
        }, {
          "album_type" : "album",
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/7e1ICztHM2Sc4JNLxeMXYl"
            },
            "href" : "https://api.spotify.com/v1/artists/7e1ICztHM2Sc4JNLxeMXYl",
            "id" : "7e1ICztHM2Sc4JNLxeMXYl",
            "name" : "dvsn",
            "type" : "artist",
            "uri" : "spotify:artist:7e1ICztHM2Sc4JNLxeMXYl"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/1M0lODGuJBWpiSqlw43qWt"
          },
          "href" : "https://api.spotify.com/v1/albums/1M0lODGuJBWpiSqlw43qWt",
          "id" : "1M0lODGuJBWpiSqlw43qWt",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b273076d63822c9129ababfe5973",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e02076d63822c9129ababfe5973",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d00004851076d63822c9129ababfe5973",
            "width" : 64
          } ],
          "name" : "Amusing Her Feelings",
          "release_date" : "2021-01-15",
          "release_date_precision" : "day",
          "total_tracks" : 20,
          "type" : "album",
          "uri" : "spotify:album:1M0lODGuJBWpiSqlw43qWt"
        }, {
          "album_type" : "single",
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/03d2mJXSMtuPI0nIvLnhoS"
            },
            "href" : "https://api.spotify.com/v1/artists/03d2mJXSMtuPI0nIvLnhoS",
            "id" : "03d2mJXSMtuPI0nIvLnhoS",
            "name" : "Zoe Wees",
            "type" : "artist",
            "uri" : "spotify:artist:03d2mJXSMtuPI0nIvLnhoS"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/5boy0Dm6JWz7YP8yIWdiyg"
          },
          "href" : "https://api.spotify.com/v1/albums/5boy0Dm6JWz7YP8yIWdiyg",
          "id" : "5boy0Dm6JWz7YP8yIWdiyg",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b2733ef0781922e2dfb0679237ca",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e023ef0781922e2dfb0679237ca",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d000048513ef0781922e2dfb0679237ca",
            "width" : 64
          } ],
          "name" : "Girls Like Us",
          "release_date" : "2021-01-12",
          "release_date_precision" : "day",
          "total_tracks" : 2,
          "type" : "album",
          "uri" : "spotify:album:5boy0Dm6JWz7YP8yIWdiyg"
        }, {
          "album_type" : "single",
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/37eqxl8DyLd5sQN54wYJbE"
            },
            "href" : "https://api.spotify.com/v1/artists/37eqxl8DyLd5sQN54wYJbE",
            "id" : "37eqxl8DyLd5sQN54wYJbE",
            "name" : "Hiss Golden Messenger",
            "type" : "artist",
            "uri" : "spotify:artist:37eqxl8DyLd5sQN54wYJbE"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/20lfleUVkws7cTsMiPD1aF"
          },
          "href" : "https://api.spotify.com/v1/albums/20lfleUVkws7cTsMiPD1aF",
          "id" : "20lfleUVkws7cTsMiPD1aF",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b27368658578f5a8df7dfb183ef6",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e0268658578f5a8df7dfb183ef6",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d0000485168658578f5a8df7dfb183ef6",
            "width" : 64
          } ],
          "name" : "Sanctuary",
          "release_date" : "2021-01-13",
          "release_date_precision" : "day",
          "total_tracks" : 1,
          "type" : "album",
          "uri" : "spotify:album:20lfleUVkws7cTsMiPD1aF"
        }, {
          "album_type" : "single",
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/5F1aAS1duwlzExnPs3l2Xe"
            },
            "href" : "https://api.spotify.com/v1/artists/5F1aAS1duwlzExnPs3l2Xe",
            "id" : "5F1aAS1duwlzExnPs3l2Xe",
            "name" : "Pooh Shiesty",
            "type" : "artist",
            "uri" : "spotify:artist:5F1aAS1duwlzExnPs3l2Xe"
          } ],
          "available_markets" : [ ],
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/7qnJF4b38VaulakrF4s4Ff"
          },
          "href" : "https://api.spotify.com/v1/albums/7qnJF4b38VaulakrF4s4Ff",
          "id" : "7qnJF4b38VaulakrF4s4Ff",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b2730de4a30d5616daf16135fc3e",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e020de4a30d5616daf16135fc3e",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d000048510de4a30d5616daf16135fc3e",
            "width" : 64
          } ],
          "name" : "Guard Up",
          "release_date" : "2021-01-15",
          "release_date_precision" : "day",
          "total_tracks" : 1,
          "type" : "album",
          "uri" : "spotify:album:7qnJF4b38VaulakrF4s4Ff"
        }, {
          "album_type" : "single",
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/6eJa3zG1QZLRB3xgRuyxbm"
            },
            "href" : "https://api.spotify.com/v1/artists/6eJa3zG1QZLRB3xgRuyxbm",
            "id" : "6eJa3zG1QZLRB3xgRuyxbm",
            "name" : "Dayglow",
            "type" : "artist",
            "uri" : "spotify:artist:6eJa3zG1QZLRB3xgRuyxbm"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/4sRWmCgVULy1s2pMuw1uGY"
          },
          "href" : "https://api.spotify.com/v1/albums/4sRWmCgVULy1s2pMuw1uGY",
          "id" : "4sRWmCgVULy1s2pMuw1uGY",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b27368cb14565e0200dc6f0dfdcd",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e0268cb14565e0200dc6f0dfdcd",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d0000485168cb14565e0200dc6f0dfdcd",
            "width" : 64
          } ],
          "name" : "Close To You",
          "release_date" : "2021-01-11",
          "release_date_precision" : "day",
          "total_tracks" : 1,
          "type" : "album",
          "uri" : "spotify:album:4sRWmCgVULy1s2pMuw1uGY"
        }, {
          "album_type" : "single",
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/3JDG63cSaK3xgDnB2H55Xp"
            },
            "href" : "https://api.spotify.com/v1/artists/3JDG63cSaK3xgDnB2H55Xp",
            "id" : "3JDG63cSaK3xgDnB2H55Xp",
            "name" : "Audrey Mika",
            "type" : "artist",
            "uri" : "spotify:artist:3JDG63cSaK3xgDnB2H55Xp"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/7MDCdHrW6J1k5eK6mqXggt"
          },
          "href" : "https://api.spotify.com/v1/albums/7MDCdHrW6J1k5eK6mqXggt",
          "id" : "7MDCdHrW6J1k5eK6mqXggt",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b273e2dbc654f99226c67662cd3e",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e02e2dbc654f99226c67662cd3e",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d00004851e2dbc654f99226c67662cd3e",
            "width" : 64
          } ],
          "name" : "Excuses",
          "release_date" : "2021-01-15",
          "release_date_precision" : "day",
          "total_tracks" : 1,
          "type" : "album",
          "uri" : "spotify:album:7MDCdHrW6J1k5eK6mqXggt"
        }, {
          "album_type" : "single",
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/7jy3rLJdDQY21OgRLCZ9sD"
            },
            "href" : "https://api.spotify.com/v1/artists/7jy3rLJdDQY21OgRLCZ9sD",
            "id" : "7jy3rLJdDQY21OgRLCZ9sD",
            "name" : "Foo Fighters",
            "type" : "artist",
            "uri" : "spotify:artist:7jy3rLJdDQY21OgRLCZ9sD"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/3BsK8KLf8uwzdHmWS051vT"
          },
          "href" : "https://api.spotify.com/v1/albums/3BsK8KLf8uwzdHmWS051vT",
          "id" : "3BsK8KLf8uwzdHmWS051vT",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b27390b321f6484b49e9a9ba1f8d",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e0290b321f6484b49e9a9ba1f8d",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d0000485190b321f6484b49e9a9ba1f8d",
            "width" : 64
          } ],
          "name" : "Waiting On A War",
          "release_date" : "2021-01-14",
          "release_date_precision" : "day",
          "total_tracks" : 1,
          "type" : "album",
          "uri" : "spotify:album:3BsK8KLf8uwzdHmWS051vT"
        }, {
          "album_type" : "single",
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/73A3bLnfnz5BoQjb4gNCga"
            },
            "href" : "https://api.spotify.com/v1/artists/73A3bLnfnz5BoQjb4gNCga",
            "id" : "73A3bLnfnz5BoQjb4gNCga",
            "name" : "Bicep",
            "type" : "artist",
            "uri" : "spotify:artist:73A3bLnfnz5BoQjb4gNCga"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/2g86N6aADQwynCr0CRlWzQ"
          },
          "href" : "https://api.spotify.com/v1/albums/2g86N6aADQwynCr0CRlWzQ",
          "id" : "2g86N6aADQwynCr0CRlWzQ",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b2733742b76be144622e8046d946",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e023742b76be144622e8046d946",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d000048513742b76be144622e8046d946",
            "width" : 64
          } ],
          "name" : "Sundial",
          "release_date" : "2021-01-12",
          "release_date_precision" : "day",
          "total_tracks" : 4,
          "type" : "album",
          "uri" : "spotify:album:2g86N6aADQwynCr0CRlWzQ"
        }, {
          "album_type" : "single",
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/1mKtlPrXjWK6oIdk9cSOjs"
            },
            "href" : "https://api.spotify.com/v1/artists/1mKtlPrXjWK6oIdk9cSOjs",
            "id" : "1mKtlPrXjWK6oIdk9cSOjs",
            "name" : "Asiahn",
            "type" : "artist",
            "uri" : "spotify:artist:1mKtlPrXjWK6oIdk9cSOjs"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/6bZ7XNBJFwmpOdAp9xZkoX"
          },
          "href" : "https://api.spotify.com/v1/albums/6bZ7XNBJFwmpOdAp9xZkoX",
          "id" : "6bZ7XNBJFwmpOdAp9xZkoX",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b273be32f131c6ab9037a7dafe80",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e02be32f131c6ab9037a7dafe80",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d00004851be32f131c6ab9037a7dafe80",
            "width" : 64
          } ],
          "name" : "The Interlude",
          "release_date" : "2021-01-11",
          "release_date_precision" : "day",
          "total_tracks" : 5,
          "type" : "album",
          "uri" : "spotify:album:6bZ7XNBJFwmpOdAp9xZkoX"
        }, {
          "album_type" : "single",
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/1ryJB2bhfYjjIt8kqy4BoG"
            },
            "href" : "https://api.spotify.com/v1/artists/1ryJB2bhfYjjIt8kqy4BoG",
            "id" : "1ryJB2bhfYjjIt8kqy4BoG",
            "name" : "Seaforth",
            "type" : "artist",
            "uri" : "spotify:artist:1ryJB2bhfYjjIt8kqy4BoG"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/59PZ1sBuiJjiLLL5qCvoua"
          },
          "href" : "https://api.spotify.com/v1/albums/59PZ1sBuiJjiLLL5qCvoua",
          "id" : "59PZ1sBuiJjiLLL5qCvoua",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b2731e293c5d2ac58f37188d1fa0",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e021e293c5d2ac58f37188d1fa0",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d000048511e293c5d2ac58f37188d1fa0",
            "width" : 64
          } ],
          "name" : "Breakups",
          "release_date" : "2021-01-14",
          "release_date_precision" : "day",
          "total_tracks" : 1,
          "type" : "album",
          "uri" : "spotify:album:59PZ1sBuiJjiLLL5qCvoua"
        }, {
          "album_type" : "album",
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/1kNQXvepPjaPgUfeDAF2h6"
            },
            "href" : "https://api.spotify.com/v1/artists/1kNQXvepPjaPgUfeDAF2h6",
            "id" : "1kNQXvepPjaPgUfeDAF2h6",
            "name" : "You Me At Six",
            "type" : "artist",
            "uri" : "spotify:artist:1kNQXvepPjaPgUfeDAF2h6"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/1QjSCSvRARExE1aFFycrPz"
          },
          "href" : "https://api.spotify.com/v1/albums/1QjSCSvRARExE1aFFycrPz",
          "id" : "1QjSCSvRARExE1aFFycrPz",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b2737bc0d8d4747db80b67d6518e",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e027bc0d8d4747db80b67d6518e",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d000048517bc0d8d4747db80b67d6518e",
            "width" : 64
          } ],
          "name" : "SUCKAPUNCH",
          "release_date" : "2021-01-15",
          "release_date_precision" : "day",
          "total_tracks" : 11,
          "type" : "album",
          "uri" : "spotify:album:1QjSCSvRARExE1aFFycrPz"
        }, {
          "album_type" : "single",
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/2wX6xSig4Rig5kZU6ePlWe"
            },
            "href" : "https://api.spotify.com/v1/artists/2wX6xSig4Rig5kZU6ePlWe",
            "id" : "2wX6xSig4Rig5kZU6ePlWe",
            "name" : "KSHMR",
            "type" : "artist",
            "uri" : "spotify:artist:2wX6xSig4Rig5kZU6ePlWe"
          }, {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/24CzPFC4y3bM4AkUnZfuAU"
            },
            "href" : "https://api.spotify.com/v1/artists/24CzPFC4y3bM4AkUnZfuAU",
            "id" : "24CzPFC4y3bM4AkUnZfuAU",
            "name" : "Karra",
            "type" : "artist",
            "uri" : "spotify:artist:24CzPFC4y3bM4AkUnZfuAU"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/1FwicSx5OGhuVx68A6oH2s"
          },
          "href" : "https://api.spotify.com/v1/albums/1FwicSx5OGhuVx68A6oH2s",
          "id" : "1FwicSx5OGhuVx68A6oH2s",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b273da13398baef8f339131bbbac",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e02da13398baef8f339131bbbac",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d00004851da13398baef8f339131bbbac",
            "width" : 64
          } ],
          "name" : "The World We Left Behind (feat. KARRA)",
          "release_date" : "2021-01-15",
          "release_date_precision" : "day",
          "total_tracks" : 1,
          "type" : "album",
          "uri" : "spotify:album:1FwicSx5OGhuVx68A6oH2s"
        }, {
          "album_type" : "single",
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/66W9LaWS0DPdL7Sz8iYGYe"
            },
            "href" : "https://api.spotify.com/v1/artists/66W9LaWS0DPdL7Sz8iYGYe",
            "id" : "66W9LaWS0DPdL7Sz8iYGYe",
            "name" : "JP Saxe",
            "type" : "artist",
            "uri" : "spotify:artist:66W9LaWS0DPdL7Sz8iYGYe"
          }, {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/6WY7D3jk8zTrHtmkqqo5GI"
            },
            "href" : "https://api.spotify.com/v1/artists/6WY7D3jk8zTrHtmkqqo5GI",
            "id" : "6WY7D3jk8zTrHtmkqqo5GI",
            "name" : "Maren Morris",
            "type" : "artist",
            "uri" : "spotify:artist:6WY7D3jk8zTrHtmkqqo5GI"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/0a6mnIEhvLCsIKZNGRcjaK"
          },
          "href" : "https://api.spotify.com/v1/albums/0a6mnIEhvLCsIKZNGRcjaK",
          "id" : "0a6mnIEhvLCsIKZNGRcjaK",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b273b38f9b71870afe058b29a6f9",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e02b38f9b71870afe058b29a6f9",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d00004851b38f9b71870afe058b29a6f9",
            "width" : 64
          } ],
          "name" : "Line By Line",
          "release_date" : "2021-01-13",
          "release_date_precision" : "day",
          "total_tracks" : 1,
          "type" : "album",
          "uri" : "spotify:album:0a6mnIEhvLCsIKZNGRcjaK"
        }, {
          "album_type" : "single",
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/4e9TBaTlI3LVQz3tkTYC0I"
            },
            "href" : "https://api.spotify.com/v1/artists/4e9TBaTlI3LVQz3tkTYC0I",
            "id" : "4e9TBaTlI3LVQz3tkTYC0I",
            "name" : "Hailey Whitters",
            "type" : "artist",
            "uri" : "spotify:artist:4e9TBaTlI3LVQz3tkTYC0I"
          }, {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/77kULmXAQ6vWer7IIHdGzI"
            },
            "href" : "https://api.spotify.com/v1/artists/77kULmXAQ6vWer7IIHdGzI",
            "id" : "77kULmXAQ6vWer7IIHdGzI",
            "name" : "Jordan Davis",
            "type" : "artist",
            "uri" : "spotify:artist:77kULmXAQ6vWer7IIHdGzI"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/0OfKKdKlRJiZbJGRCZK37M"
          },
          "href" : "https://api.spotify.com/v1/albums/0OfKKdKlRJiZbJGRCZK37M",
          "id" : "0OfKKdKlRJiZbJGRCZK37M",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b273feeaeb6141b7510100e5bab6",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e02feeaeb6141b7510100e5bab6",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d00004851feeaeb6141b7510100e5bab6",
            "width" : 64
          } ],
          "name" : "The Ride (feat. Jordan Davis)",
          "release_date" : "2021-01-15",
          "release_date_precision" : "day",
          "total_tracks" : 1,
          "type" : "album",
          "uri" : "spotify:album:0OfKKdKlRJiZbJGRCZK37M"
        }, {
          "album_type" : "single",
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/1FgsVeOhRYuSw2ghkIXV0A"
            },
            "href" : "https://api.spotify.com/v1/artists/1FgsVeOhRYuSw2ghkIXV0A",
            "id" : "1FgsVeOhRYuSw2ghkIXV0A",
            "name" : "DREAMERS",
            "type" : "artist",
            "uri" : "spotify:artist:1FgsVeOhRYuSw2ghkIXV0A"
          }, {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/4a9NXVL2Qxsst3B8ezK7nO"
            },
            "href" : "https://api.spotify.com/v1/artists/4a9NXVL2Qxsst3B8ezK7nO",
            "id" : "4a9NXVL2Qxsst3B8ezK7nO",
            "name" : "American Teeth",
            "type" : "artist",
            "uri" : "spotify:artist:4a9NXVL2Qxsst3B8ezK7nO"
          }, {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/0Pb8ZfFfE2O0pvsFdwVUYl"
            },
            "href" : "https://api.spotify.com/v1/artists/0Pb8ZfFfE2O0pvsFdwVUYl",
            "id" : "0Pb8ZfFfE2O0pvsFdwVUYl",
            "name" : "Wes Period",
            "type" : "artist",
            "uri" : "spotify:artist:0Pb8ZfFfE2O0pvsFdwVUYl"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/40ThFvWq7GBsTdo4q374Tb"
          },
          "href" : "https://api.spotify.com/v1/albums/40ThFvWq7GBsTdo4q374Tb",
          "id" : "40ThFvWq7GBsTdo4q374Tb",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b27359551fbd718ab8cfe2c635de",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e0259551fbd718ab8cfe2c635de",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d0000485159551fbd718ab8cfe2c635de",
            "width" : 64
          } ],
          "name" : "Still Not Dead",
          "release_date" : "2021-01-15",
          "release_date_precision" : "day",
          "total_tracks" : 1,
          "type" : "album",
          "uri" : "spotify:album:40ThFvWq7GBsTdo4q374Tb"
        }, {
          "album_type" : "album",
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/4fT0S7A6usiJicipEVamYd"
            },
            "href" : "https://api.spotify.com/v1/artists/4fT0S7A6usiJicipEVamYd",
            "id" : "4fT0S7A6usiJicipEVamYd",
            "name" : "Everardo",
            "type" : "artist",
            "uri" : "spotify:artist:4fT0S7A6usiJicipEVamYd"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/7dGHrmcFma3RWQ8K0A8xR2"
          },
          "href" : "https://api.spotify.com/v1/albums/7dGHrmcFma3RWQ8K0A8xR2",
          "id" : "7dGHrmcFma3RWQ8K0A8xR2",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b27380e1855227eabd556662ebec",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e0280e1855227eabd556662ebec",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d0000485180e1855227eabd556662ebec",
            "width" : 64
          } ],
          "name" : "Malo y Bueno",
          "release_date" : "2021-01-10",
          "release_date_precision" : "day",
          "total_tracks" : 14,
          "type" : "album",
          "uri" : "spotify:album:7dGHrmcFma3RWQ8K0A8xR2"
        }, {
          "album_type" : "single",
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/1Ma3pJzPIrAyYPNRkp3SUF"
            },
            "href" : "https://api.spotify.com/v1/artists/1Ma3pJzPIrAyYPNRkp3SUF",
            "id" : "1Ma3pJzPIrAyYPNRkp3SUF",
            "name" : "Ross from Friends",
            "type" : "artist",
            "uri" : "spotify:artist:1Ma3pJzPIrAyYPNRkp3SUF"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/1H2xgpZ4h6MAAlRnZxGKjl"
          },
          "href" : "https://api.spotify.com/v1/albums/1H2xgpZ4h6MAAlRnZxGKjl",
          "id" : "1H2xgpZ4h6MAAlRnZxGKjl",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b273d98285248e97ec6446c063c6",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e02d98285248e97ec6446c063c6",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d00004851d98285248e97ec6446c063c6",
            "width" : 64
          } ],
          "name" : "Burner",
          "release_date" : "2021-01-14",
          "release_date_precision" : "day",
          "total_tracks" : 1,
          "type" : "album",
          "uri" : "spotify:album:1H2xgpZ4h6MAAlRnZxGKjl"
        }, {
          "album_type" : "single",
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/2l5DDUyyMSmNBLCSa0BIIX"
            },
            "href" : "https://api.spotify.com/v1/artists/2l5DDUyyMSmNBLCSa0BIIX",
            "id" : "2l5DDUyyMSmNBLCSa0BIIX",
            "name" : "Keedron Bryant",
            "type" : "artist",
            "uri" : "spotify:artist:2l5DDUyyMSmNBLCSa0BIIX"
          }, {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/06S3fr7xEES7e3QPXhu3ay"
            },
            "href" : "https://api.spotify.com/v1/artists/06S3fr7xEES7e3QPXhu3ay",
            "id" : "06S3fr7xEES7e3QPXhu3ay",
            "name" : "Symba",
            "type" : "artist",
            "uri" : "spotify:artist:06S3fr7xEES7e3QPXhu3ay"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/09pulMY06JHZrN23zR51H1"
          },
          "href" : "https://api.spotify.com/v1/albums/09pulMY06JHZrN23zR51H1",
          "id" : "09pulMY06JHZrN23zR51H1",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b2731e8a28f594b15f26208410b8",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e021e8a28f594b15f26208410b8",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d000048511e8a28f594b15f26208410b8",
            "width" : 64
          } ],
          "name" : "I Know I Been Changed (Music From The Motion Picture \"American Skin\") [feat. Gary Clark Jr.]",
          "release_date" : "2021-01-15",
          "release_date_precision" : "day",
          "total_tracks" : 1,
          "type" : "album",
          "uri" : "spotify:album:09pulMY06JHZrN23zR51H1"
        }, {
          "album_type" : "single",
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/0rpUnzu4JIoRkKkGvdcm7b"
            },
            "href" : "https://api.spotify.com/v1/artists/0rpUnzu4JIoRkKkGvdcm7b",
            "id" : "0rpUnzu4JIoRkKkGvdcm7b",
            "name" : "Lil Eazzyy",
            "type" : "artist",
            "uri" : "spotify:artist:0rpUnzu4JIoRkKkGvdcm7b"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/68E8KEIn6CawoxJetxyYRl"
          },
          "href" : "https://api.spotify.com/v1/albums/68E8KEIn6CawoxJetxyYRl",
          "id" : "68E8KEIn6CawoxJetxyYRl",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b2736de3a8d6dbc35d2973e9d99a",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e026de3a8d6dbc35d2973e9d99a",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d000048516de3a8d6dbc35d2973e9d99a",
            "width" : 64
          } ],
          "name" : "Onna Come Up (feat. G Herbo) [Remix]",
          "release_date" : "2021-01-15",
          "release_date_precision" : "day",
          "total_tracks" : 2,
          "type" : "album",
          "uri" : "spotify:album:68E8KEIn6CawoxJetxyYRl"
        }, {
          "album_type" : "single",
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/2ySHS7UojGu20XfUPaBlyu"
            },
            "href" : "https://api.spotify.com/v1/artists/2ySHS7UojGu20XfUPaBlyu",
            "id" : "2ySHS7UojGu20XfUPaBlyu",
            "name" : "Devin Dawson",
            "type" : "artist",
            "uri" : "spotify:artist:2ySHS7UojGu20XfUPaBlyu"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/125iPOINAQO7FJ4GbyZ332"
          },
          "href" : "https://api.spotify.com/v1/albums/125iPOINAQO7FJ4GbyZ332",
          "id" : "125iPOINAQO7FJ4GbyZ332",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b2732aeed1036278059ed4aeae4d",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e022aeed1036278059ed4aeae4d",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d000048512aeed1036278059ed4aeae4d",
            "width" : 64
          } ],
          "name" : "The Pink Slip EP",
          "release_date" : "2021-01-15",
          "release_date_precision" : "day",
          "total_tracks" : 6,
          "type" : "album",
          "uri" : "spotify:album:125iPOINAQO7FJ4GbyZ332"
        }, {
          "album_type" : "single",
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/34ABXKUj0gzq7R8vXjCaNj"
            },
            "href" : "https://api.spotify.com/v1/artists/34ABXKUj0gzq7R8vXjCaNj",
            "id" : "34ABXKUj0gzq7R8vXjCaNj",
            "name" : "Funkmaster Flex",
            "type" : "artist",
            "uri" : "spotify:artist:34ABXKUj0gzq7R8vXjCaNj"
          }, {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/14CHVeJGrR5xgUGQFV5BVM"
            },
            "href" : "https://api.spotify.com/v1/artists/14CHVeJGrR5xgUGQFV5BVM",
            "id" : "14CHVeJGrR5xgUGQFV5BVM",
            "name" : "Fivio Foreign",
            "type" : "artist",
            "uri" : "spotify:artist:14CHVeJGrR5xgUGQFV5BVM"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/1a9tWQRhRlPi4nZR7Ic3Xe"
          },
          "href" : "https://api.spotify.com/v1/albums/1a9tWQRhRlPi4nZR7Ic3Xe",
          "id" : "1a9tWQRhRlPi4nZR7Ic3Xe",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b27355977bc28f6712c4f2b5327e",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e0255977bc28f6712c4f2b5327e",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d0000485155977bc28f6712c4f2b5327e",
            "width" : 64
          } ],
          "name" : "Game Time",
          "release_date" : "2021-01-15",
          "release_date_precision" : "day",
          "total_tracks" : 1,
          "type" : "album",
          "uri" : "spotify:album:1a9tWQRhRlPi4nZR7Ic3Xe"
        }, {
          "album_type" : "single",
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/19I4tYiChJoxEO5EuviXpz"
            },
            "href" : "https://api.spotify.com/v1/artists/19I4tYiChJoxEO5EuviXpz",
            "id" : "19I4tYiChJoxEO5EuviXpz",
            "name" : "AFI",
            "type" : "artist",
            "uri" : "spotify:artist:19I4tYiChJoxEO5EuviXpz"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/4VSk5cWQF6BfFOLkaJB7kE"
          },
          "href" : "https://api.spotify.com/v1/albums/4VSk5cWQF6BfFOLkaJB7kE",
          "id" : "4VSk5cWQF6BfFOLkaJB7kE",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b273dc71ec9332716ebdbb36dd37",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e02dc71ec9332716ebdbb36dd37",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d00004851dc71ec9332716ebdbb36dd37",
            "width" : 64
          } ],
          "name" : "Twisted Tongues / Escape From Los Angeles",
          "release_date" : "2021-01-15",
          "release_date_precision" : "day",
          "total_tracks" : 2,
          "type" : "album",
          "uri" : "spotify:album:4VSk5cWQF6BfFOLkaJB7kE"
        }, {
          "album_type" : "album",
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/4mYY0UqYdvgdz60psupYBR"
            },
            "href" : "https://api.spotify.com/v1/artists/4mYY0UqYdvgdz60psupYBR",
            "id" : "4mYY0UqYdvgdz60psupYBR",
            "name" : "Buck Meek",
            "type" : "artist",
            "uri" : "spotify:artist:4mYY0UqYdvgdz60psupYBR"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/2XPFEnQ9PcyWPIrJJnAkrX"
          },
          "href" : "https://api.spotify.com/v1/albums/2XPFEnQ9PcyWPIrJJnAkrX",
          "id" : "2XPFEnQ9PcyWPIrJJnAkrX",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b273246adff1e53e5bf2c152e481",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e02246adff1e53e5bf2c152e481",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d00004851246adff1e53e5bf2c152e481",
            "width" : 64
          } ],
          "name" : "Two Saviors",
          "release_date" : "2021-01-15",
          "release_date_precision" : "day",
          "total_tracks" : 11,
          "type" : "album",
          "uri" : "spotify:album:2XPFEnQ9PcyWPIrJJnAkrX"
        }, {
          "album_type" : "album",
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/2vOqb0eO8aBj2dLpxlmscX"
            },
            "href" : "https://api.spotify.com/v1/artists/2vOqb0eO8aBj2dLpxlmscX",
            "id" : "2vOqb0eO8aBj2dLpxlmscX",
            "name" : "Angie Rose",
            "type" : "artist",
            "uri" : "spotify:artist:2vOqb0eO8aBj2dLpxlmscX"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/0qFgVCA6li9HqCDQhuept4"
          },
          "href" : "https://api.spotify.com/v1/albums/0qFgVCA6li9HqCDQhuept4",
          "id" : "0qFgVCA6li9HqCDQhuept4",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b273a568230a3667468ae17425b3",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e02a568230a3667468ae17425b3",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d00004851a568230a3667468ae17425b3",
            "width" : 64
          } ],
          "name" : "Unstoppable",
          "release_date" : "2021-01-15",
          "release_date_precision" : "day",
          "total_tracks" : 7,
          "type" : "album",
          "uri" : "spotify:album:0qFgVCA6li9HqCDQhuept4"
        }, {
          "album_type" : "single",
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/0ZrpamOxcZybMHGg1AYtHP"
            },
            "href" : "https://api.spotify.com/v1/artists/0ZrpamOxcZybMHGg1AYtHP",
            "id" : "0ZrpamOxcZybMHGg1AYtHP",
            "name" : "Robin Thicke",
            "type" : "artist",
            "uri" : "spotify:artist:0ZrpamOxcZybMHGg1AYtHP"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/2K2IuJRjrowXQNZmaMWl0Y"
          },
          "href" : "https://api.spotify.com/v1/albums/2K2IuJRjrowXQNZmaMWl0Y",
          "id" : "2K2IuJRjrowXQNZmaMWl0Y",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b273eebd96066857d3ffaf59163d",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e02eebd96066857d3ffaf59163d",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d00004851eebd96066857d3ffaf59163d",
            "width" : 64
          } ],
          "name" : "Beautiful",
          "release_date" : "2021-01-15",
          "release_date_precision" : "day",
          "total_tracks" : 1,
          "type" : "album",
          "uri" : "spotify:album:2K2IuJRjrowXQNZmaMWl0Y"
        }, {
          "album_type" : "single",
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/1pPmIToKXyGdsCF6LmqLmI"
            },
            "href" : "https://api.spotify.com/v1/artists/1pPmIToKXyGdsCF6LmqLmI",
            "id" : "1pPmIToKXyGdsCF6LmqLmI",
            "name" : "Rich The Kid",
            "type" : "artist",
            "uri" : "spotify:artist:1pPmIToKXyGdsCF6LmqLmI"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/7MDrd4q9pu1Yg6gVDazFx0"
          },
          "href" : "https://api.spotify.com/v1/albums/7MDrd4q9pu1Yg6gVDazFx0",
          "id" : "7MDrd4q9pu1Yg6gVDazFx0",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b273ef6ff8c9c3434aab8efa233d",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e02ef6ff8c9c3434aab8efa233d",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d00004851ef6ff8c9c3434aab8efa233d",
            "width" : 64
          } ],
          "name" : "Split",
          "release_date" : "2021-01-15",
          "release_date_precision" : "day",
          "total_tracks" : 1,
          "type" : "album",
          "uri" : "spotify:album:7MDrd4q9pu1Yg6gVDazFx0"
        }, {
          "album_type" : "single",
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/1c4rxrxy8eDLvMVL1DTiBe"
            },
            "href" : "https://api.spotify.com/v1/artists/1c4rxrxy8eDLvMVL1DTiBe",
            "id" : "1c4rxrxy8eDLvMVL1DTiBe",
            "name" : "Andra Day",
            "type" : "artist",
            "uri" : "spotify:artist:1c4rxrxy8eDLvMVL1DTiBe"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/7rhO7zOEFdz8v5tdSC6JZA"
          },
          "href" : "https://api.spotify.com/v1/albums/7rhO7zOEFdz8v5tdSC6JZA",
          "id" : "7rhO7zOEFdz8v5tdSC6JZA",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b273cdff439c20aa16a987ce406e",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e02cdff439c20aa16a987ce406e",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d00004851cdff439c20aa16a987ce406e",
            "width" : 64
          } ],
          "name" : "All of Me (Music from the Motion Picture \"The United States vs. Billie Holiday\")",
          "release_date" : "2021-01-12",
          "release_date_precision" : "day",
          "total_tracks" : 1,
          "type" : "album",
          "uri" : "spotify:album:7rhO7zOEFdz8v5tdSC6JZA"
        }, {
          "album_type" : "single",
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/4tususHNaR68xdgLstlGBA"
            },
            "href" : "https://api.spotify.com/v1/artists/4tususHNaR68xdgLstlGBA",
            "id" : "4tususHNaR68xdgLstlGBA",
            "name" : "Of Mice & Men",
            "type" : "artist",
            "uri" : "spotify:artist:4tususHNaR68xdgLstlGBA"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/2hiPqMWbwko9fxKd1JWUI1"
          },
          "href" : "https://api.spotify.com/v1/albums/2hiPqMWbwko9fxKd1JWUI1",
          "id" : "2hiPqMWbwko9fxKd1JWUI1",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b2730e1ea2f67845e296a5511bed",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e020e1ea2f67845e296a5511bed",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d000048510e1ea2f67845e296a5511bed",
            "width" : 64
          } ],
          "name" : "Obsolete",
          "release_date" : "2021-01-13",
          "release_date_precision" : "day",
          "total_tracks" : 1,
          "type" : "album",
          "uri" : "spotify:album:2hiPqMWbwko9fxKd1JWUI1"
        }, {
          "album_type" : "single",
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/6Qm9stX6XO1a4c7BXQDDgc"
            },
            "href" : "https://api.spotify.com/v1/artists/6Qm9stX6XO1a4c7BXQDDgc",
            "id" : "6Qm9stX6XO1a4c7BXQDDgc",
            "name" : "Fruit Bats",
            "type" : "artist",
            "uri" : "spotify:artist:6Qm9stX6XO1a4c7BXQDDgc"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/4SEnNV8uDJVi1244tnjeEc"
          },
          "href" : "https://api.spotify.com/v1/albums/4SEnNV8uDJVi1244tnjeEc",
          "id" : "4SEnNV8uDJVi1244tnjeEc",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b27326bbec85d3ecda0dbbf71c58",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e0226bbec85d3ecda0dbbf71c58",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d0000485126bbec85d3ecda0dbbf71c58",
            "width" : 64
          } ],
          "name" : "Holy Rose",
          "release_date" : "2021-01-12",
          "release_date_precision" : "day",
          "total_tracks" : 1,
          "type" : "album",
          "uri" : "spotify:album:4SEnNV8uDJVi1244tnjeEc"
        }, {
          "album_type" : "single",
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/7ibAWtDtmEfaVhc1FJ3Vl9"
            },
            "href" : "https://api.spotify.com/v1/artists/7ibAWtDtmEfaVhc1FJ3Vl9",
            "id" : "7ibAWtDtmEfaVhc1FJ3Vl9",
            "name" : "Eric Bellinger",
            "type" : "artist",
            "uri" : "spotify:artist:7ibAWtDtmEfaVhc1FJ3Vl9"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/5TZPCuD8f2tWPLqyvodyWn"
          },
          "href" : "https://api.spotify.com/v1/albums/5TZPCuD8f2tWPLqyvodyWn",
          "id" : "5TZPCuD8f2tWPLqyvodyWn",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b27394b5b26692c331e35ab5ecfd",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e0294b5b26692c331e35ab5ecfd",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d0000485194b5b26692c331e35ab5ecfd",
            "width" : 64
          } ],
          "name" : "Genius",
          "release_date" : "2020-10-01",
          "release_date_precision" : "day",
          "total_tracks" : 5,
          "type" : "album",
          "uri" : "spotify:album:5TZPCuD8f2tWPLqyvodyWn"
        }, {
          "album_type" : "single",
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/5iqStkZi6QmG8sgQZQrfGN"
            },
            "href" : "https://api.spotify.com/v1/artists/5iqStkZi6QmG8sgQZQrfGN",
            "id" : "5iqStkZi6QmG8sgQZQrfGN",
            "name" : "Danielle Bradbery",
            "type" : "artist",
            "uri" : "spotify:artist:5iqStkZi6QmG8sgQZQrfGN"
          }, {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/4kcnsS1aAB40FMcLD01gmI"
            },
            "href" : "https://api.spotify.com/v1/artists/4kcnsS1aAB40FMcLD01gmI",
            "id" : "4kcnsS1aAB40FMcLD01gmI",
            "name" : "KURT",
            "type" : "artist",
            "uri" : "spotify:artist:4kcnsS1aAB40FMcLD01gmI"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/41pi8PQFunXaqPy3xuVUlM"
          },
          "href" : "https://api.spotify.com/v1/albums/41pi8PQFunXaqPy3xuVUlM",
          "id" : "41pi8PQFunXaqPy3xuVUlM",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b2733c9dec9cdbadb1ffde8717fe",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e023c9dec9cdbadb1ffde8717fe",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d000048513c9dec9cdbadb1ffde8717fe",
            "width" : 64
          } ],
          "name" : "Never Have I Ever (Yo Nunca He... / Spanish Version)",
          "release_date" : "2021-01-15",
          "release_date_precision" : "day",
          "total_tracks" : 1,
          "type" : "album",
          "uri" : "spotify:album:41pi8PQFunXaqPy3xuVUlM"
        }, {
          "album_type" : "album",
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/1ZyUXvaBXUsIZ3JD6jYGkt"
            },
            "href" : "https://api.spotify.com/v1/artists/1ZyUXvaBXUsIZ3JD6jYGkt",
            "id" : "1ZyUXvaBXUsIZ3JD6jYGkt",
            "name" : "Nyck Caution",
            "type" : "artist",
            "uri" : "spotify:artist:1ZyUXvaBXUsIZ3JD6jYGkt"
          } ],
          "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/2BzBkJKGJa85HT4ECrIC7F"
          },
          "href" : "https://api.spotify.com/v1/albums/2BzBkJKGJa85HT4ECrIC7F",
          "id" : "2BzBkJKGJa85HT4ECrIC7F",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b273246296b91b679b73bf090f66",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e02246296b91b679b73bf090f66",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d00004851246296b91b679b73bf090f66",
            "width" : 64
          } ],
          "name" : "Anywhere But Here",
          "release_date" : "2021-01-15",
          "release_date_precision" : "day",
          "total_tracks" : 14,
          "type" : "album",
          "uri" : "spotify:album:2BzBkJKGJa85HT4ECrIC7F"
        } ],
        "limit" : 50,
        "next" : "https://api.spotify.com/v1/browse/new-releases?offset=50&limit=50",
        "offset" : 0,
        "previous" : null,
        "total" : 100
      }
    };
    const responsePlaylists = {
      "message" : "Escolhas do editor",
      "playlists" : {
        "href" : "https://api.spotify.com/v1/browse/featured-playlists?locale=pt&timestamp=2021-01-20T11%3A41%3A16&offset=0&limit=50",
        "items" : [ {
          "collaborative" : false,
          "description" : "The hits of tomorrow are on Spotify today. Cover: ZAYN",
          "external_urls" : {
            "spotify" : "https://open.spotify.com/playlist/37i9dQZF1DWUa8ZRTfalHk"
          },
          "href" : "https://api.spotify.com/v1/playlists/37i9dQZF1DWUa8ZRTfalHk",
          "id" : "37i9dQZF1DWUa8ZRTfalHk",
          "images" : [ {
            "height" : null,
            "url" : "https://i.scdn.co/image/ab67706f000000036e7a7e5c2e36793a6876cf29",
            "width" : null
          } ],
          "name" : "Pop Rising",
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
          "public" : null,
          "snapshot_id" : "MTYxMTExNjA5MCwwMDAwMDRlNTAwMDAwMTc3MWUwMDk1MzEwMDAwMDE3NzAzYjNhNzJh",
          "tracks" : {
            "href" : "https://api.spotify.com/v1/playlists/37i9dQZF1DWUa8ZRTfalHk/tracks",
            "total" : 87
          },
          "type" : "playlist",
          "uri" : "spotify:playlist:37i9dQZF1DWUa8ZRTfalHk"
        }, {
          "collaborative" : false,
          "description" : "Clock in from the comfort of your own home with 8 hours of music to carry you through the day.",
          "external_urls" : {
            "spotify" : "https://open.spotify.com/playlist/37i9dQZF1DWTLSN7iG21yC"
          },
          "href" : "https://api.spotify.com/v1/playlists/37i9dQZF1DWTLSN7iG21yC",
          "id" : "37i9dQZF1DWTLSN7iG21yC",
          "images" : [ {
            "height" : null,
            "url" : "https://i.scdn.co/image/ab67706f000000039ed927af72b644ee065cc980",
            "width" : null
          } ],
          "name" : "Work From Home",
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
          "public" : null,
          "snapshot_id" : "MTYwNDA3OTk3MSwwMDAwMDAyYzAwMDAwMTc1N2E5ZGVlNDEwMDAwMDE3MTBhOGIyNzFk",
          "tracks" : {
            "href" : "https://api.spotify.com/v1/playlists/37i9dQZF1DWTLSN7iG21yC/tracks",
            "total" : 145
          },
          "type" : "playlist",
          "uri" : "spotify:playlist:37i9dQZF1DWTLSN7iG21yC"
        }, {
          "collaborative" : false,
          "description" : "Timeless melodies from your favourite artists, both old and new.",
          "external_urls" : {
            "spotify" : "https://open.spotify.com/playlist/37i9dQZF1DWSXBu5naYCM9"
          },
          "href" : "https://api.spotify.com/v1/playlists/37i9dQZF1DWSXBu5naYCM9",
          "id" : "37i9dQZF1DWSXBu5naYCM9",
          "images" : [ {
            "height" : null,
            "url" : "https://i.scdn.co/image/ab67706f000000037e7d4311695c33ff9f92cd53",
            "width" : null
          } ],
          "name" : "A Perfect Day",
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
          "public" : null,
          "snapshot_id" : "MTYxMDU0ODk2NywwMDAwMDBhMzAwMDAwMTc2ZmMzMmY2ZGYwMDAwMDE3MTU5NTBiYjlj",
          "tracks" : {
            "href" : "https://api.spotify.com/v1/playlists/37i9dQZF1DWSXBu5naYCM9/tracks",
            "total" : 70
          },
          "type" : "playlist",
          "uri" : "spotify:playlist:37i9dQZF1DWSXBu5naYCM9"
        }, {
          "collaborative" : false,
          "description" : "Minimalism, electronica and modern classical to concentrate to.",
          "external_urls" : {
            "spotify" : "https://open.spotify.com/playlist/37i9dQZF1DX3PFzdbtx1Us"
          },
          "href" : "https://api.spotify.com/v1/playlists/37i9dQZF1DX3PFzdbtx1Us",
          "id" : "37i9dQZF1DX3PFzdbtx1Us",
          "images" : [ {
            "height" : null,
            "url" : "https://i.scdn.co/image/ab67706f000000033466e2ac76e504f4131af598",
            "width" : null
          } ],
          "name" : "Music For Concentration",
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
          "public" : null,
          "snapshot_id" : "MTU4NjM0MzA5MiwwMDAwMDA0MjAwMDAwMTcxNTk2YWExYTYwMDAwMDE3MTU5NmE4NDRj",
          "tracks" : {
            "href" : "https://api.spotify.com/v1/playlists/37i9dQZF1DX3PFzdbtx1Us/tracks",
            "total" : 90
          },
          "type" : "playlist",
          "uri" : "spotify:playlist:37i9dQZF1DX3PFzdbtx1Us"
        }, {
          "collaborative" : false,
          "description" : "Healy adds some of his favorite tracks to the mix, plus more incred new music to kick off 2021 ⚃ ⚄ ⚅",
          "external_urls" : {
            "spotify" : "https://open.spotify.com/playlist/37i9dQZF1DXdwmD5Q7Gxah"
          },
          "href" : "https://api.spotify.com/v1/playlists/37i9dQZF1DXdwmD5Q7Gxah",
          "id" : "37i9dQZF1DXdwmD5Q7Gxah",
          "images" : [ {
            "height" : null,
            "url" : "https://i.scdn.co/image/ab67706f000000031a63095d4ce2b63109230001",
            "width" : null
          } ],
          "name" : "Lorem",
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
          "public" : null,
          "snapshot_id" : "MTYxMTA3MzcxNywwMDAwMDIzNDAwMDAwMTc3MWI3YTA2NmYwMDAwMDE3NzAzMTc4YmFm",
          "tracks" : {
            "href" : "https://api.spotify.com/v1/playlists/37i9dQZF1DXdwmD5Q7Gxah/tracks",
            "total" : 123
          },
          "type" : "playlist",
          "uri" : "spotify:playlist:37i9dQZF1DXdwmD5Q7Gxah"
        }, {
          "collaborative" : false,
          "description" : "Discover the chill side of today's pop. Cover: Quinn XCII & Chelsea Cutler",
          "external_urls" : {
            "spotify" : "https://open.spotify.com/playlist/37i9dQZF1DX0MLFaUdXnjA"
          },
          "href" : "https://api.spotify.com/v1/playlists/37i9dQZF1DX0MLFaUdXnjA",
          "id" : "37i9dQZF1DX0MLFaUdXnjA",
          "images" : [ {
            "height" : null,
            "url" : "https://i.scdn.co/image/ab67706f000000039a0349befd74e22b11ae4784",
            "width" : null
          } ],
          "name" : "Chill Pop",
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
          "public" : null,
          "snapshot_id" : "MTYxMDczNjYwMCwwMDAwMDBhOTAwMDAwMTc3MDc2MjA0YzkwMDAwMDE3NjJjM2E2MTIw",
          "tracks" : {
            "href" : "https://api.spotify.com/v1/playlists/37i9dQZF1DX0MLFaUdXnjA/tracks",
            "total" : 85
          },
          "type" : "playlist",
          "uri" : "spotify:playlist:37i9dQZF1DX0MLFaUdXnjA"
        }, {
          "collaborative" : false,
          "description" : "Lounge and chill out music for your workday.",
          "external_urls" : {
            "spotify" : "https://open.spotify.com/playlist/37i9dQZF1DWT5lkChsPmpy"
          },
          "href" : "https://api.spotify.com/v1/playlists/37i9dQZF1DWT5lkChsPmpy",
          "id" : "37i9dQZF1DWT5lkChsPmpy",
          "images" : [ {
            "height" : null,
            "url" : "https://i.scdn.co/image/ab67706f00000003f1ecb8caee4c015b3f33058a",
            "width" : null
          } ],
          "name" : "Workday Lounge",
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
          "public" : null,
          "snapshot_id" : "MTYxMDcwOTE0NSwwMDAwMDA5NzAwMDAwMTc3MDViZjE4ODkwMDAwMDE2ZDE1M2I2MzE4",
          "tracks" : {
            "href" : "https://api.spotify.com/v1/playlists/37i9dQZF1DWT5lkChsPmpy/tracks",
            "total" : 131
          },
          "type" : "playlist",
          "uri" : "spotify:playlist:37i9dQZF1DWT5lkChsPmpy"
        }, {
          "collaborative" : false,
          "description" : "Embrace your secret favorites.",
          "external_urls" : {
            "spotify" : "https://open.spotify.com/playlist/37i9dQZF1DX4pUKG1kS0Ac"
          },
          "href" : "https://api.spotify.com/v1/playlists/37i9dQZF1DX4pUKG1kS0Ac",
          "id" : "37i9dQZF1DX4pUKG1kS0Ac",
          "images" : [ {
            "height" : null,
            "url" : "https://i.scdn.co/image/ab67706f000000034a2afca194d4819c57201bc3",
            "width" : null
          } ],
          "name" : "Guilty Pleasures",
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
          "public" : null,
          "snapshot_id" : "MTYxMTE0Mjg0OSwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
          "tracks" : {
            "href" : "https://api.spotify.com/v1/playlists/37i9dQZF1DX4pUKG1kS0Ac/tracks",
            "total" : 151
          },
          "type" : "playlist",
          "uri" : "spotify:playlist:37i9dQZF1DX4pUKG1kS0Ac"
        }, {
          "collaborative" : false,
          "description" : "A mega mix of 75 of your favorite songs from the last few years! Cover: Justin Bieber",
          "external_urls" : {
            "spotify" : "https://open.spotify.com/playlist/37i9dQZF1DXbYM3nMM0oPk"
          },
          "href" : "https://api.spotify.com/v1/playlists/37i9dQZF1DXbYM3nMM0oPk",
          "id" : "37i9dQZF1DXbYM3nMM0oPk",
          "images" : [ {
            "height" : null,
            "url" : "https://i.scdn.co/image/ab67706f00000003db11b346997ff5cc78298028",
            "width" : null
          } ],
          "name" : "Mega Hit Mix",
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
          "public" : null,
          "snapshot_id" : "MTYxMTE0Mjg3NiwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
          "tracks" : {
            "href" : "https://api.spotify.com/v1/playlists/37i9dQZF1DXbYM3nMM0oPk/tracks",
            "total" : 75
          },
          "type" : "playlist",
          "uri" : "spotify:playlist:37i9dQZF1DXbYM3nMM0oPk"
        }, {
          "collaborative" : false,
          "description" : "The world's biggest dance hits. Music from KSHMR & Karra, NERVO & Carla Monroe, Galantis and more!",
          "external_urls" : {
            "spotify" : "https://open.spotify.com/playlist/37i9dQZF1DX4dyzvuaRJ0n"
          },
          "href" : "https://api.spotify.com/v1/playlists/37i9dQZF1DX4dyzvuaRJ0n",
          "id" : "37i9dQZF1DX4dyzvuaRJ0n",
          "images" : [ {
            "height" : null,
            "url" : "https://i.scdn.co/image/ab67706f00000003f5bc9d45bd467c3d1b9639bf",
            "width" : null
          } ],
          "name" : "mint",
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
          "public" : null,
          "snapshot_id" : "MTYxMDY4NjkyMCwwMDAwMDQ3NDAwMDAwMTc3MDQ2YmY1OWUwMDAwMDE3NmZkZWI1NmI4",
          "tracks" : {
            "href" : "https://api.spotify.com/v1/playlists/37i9dQZF1DX4dyzvuaRJ0n/tracks",
            "total" : 85
          },
          "type" : "playlist",
          "uri" : "spotify:playlist:37i9dQZF1DX4dyzvuaRJ0n"
        }, {
          "collaborative" : false,
          "description" : "Boy bands, girl groups, britpop, grunge & a golden era for hip hop.",
          "external_urls" : {
            "spotify" : "https://open.spotify.com/playlist/37i9dQZF1DXbTxeAdrVG2l"
          },
          "href" : "https://api.spotify.com/v1/playlists/37i9dQZF1DXbTxeAdrVG2l",
          "id" : "37i9dQZF1DXbTxeAdrVG2l",
          "images" : [ {
            "height" : null,
            "url" : "https://i.scdn.co/image/ab67706f0000000371c0c284987e1850849f1fd5",
            "width" : null
          } ],
          "name" : "All Out 90s",
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
          "public" : null,
          "snapshot_id" : "MTYxMTE0Mjg3NiwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
          "tracks" : {
            "href" : "https://api.spotify.com/v1/playlists/37i9dQZF1DXbTxeAdrVG2l/tracks",
            "total" : 150
          },
          "type" : "playlist",
          "uri" : "spotify:playlist:37i9dQZF1DXbTxeAdrVG2l"
        }, {
          "collaborative" : false,
          "description" : "The best from the world of acoustic songs right now.",
          "external_urls" : {
            "spotify" : "https://open.spotify.com/playlist/37i9dQZF1DWY8U6Zq7nvbE"
          },
          "href" : "https://api.spotify.com/v1/playlists/37i9dQZF1DWY8U6Zq7nvbE",
          "id" : "37i9dQZF1DWY8U6Zq7nvbE",
          "images" : [ {
            "height" : null,
            "url" : "https://i.scdn.co/image/ab67706f00000003e11cc5beab79b66601a44903",
            "width" : null
          } ],
          "name" : "Hot Acoustics",
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
          "public" : null,
          "snapshot_id" : "MTYxMTE0Mjg1NSwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
          "tracks" : {
            "href" : "https://api.spotify.com/v1/playlists/37i9dQZF1DWY8U6Zq7nvbE/tracks",
            "total" : 100
          },
          "type" : "playlist",
          "uri" : "spotify:playlist:37i9dQZF1DWY8U6Zq7nvbE"
        } ],
        "limit" : 50,
        "next" : null,
        "offset" : 0,
        "previous" : null,
        "total" : 12
      }
    };

    spyOn(userService, 'getUserTopArtists').and.returnValue(of(responseArtist))
    spyOn(userService, 'getUserTopTracks').and.returnValue(of(responseTracks))
    spyOn(browseService, 'getNewAlbuns').and.returnValue(of(responseAlbum))
    spyOn(browseService, 'getFeaturedPlaylists').and.returnValue(of(responsePlaylists))

    component.getAllHomeData();

    fixture.detectChanges();

    expect(component.topArtists).toEqual(responseArtist.items);
    expect(component.topTracks).toEqual(responseTracks.items);
    expect(component.newAlbuns).toEqual(responseAlbum.albums.items);
    expect(component.featuredPlaylists).toEqual(responsePlaylists.playlists.items);
  });
});
