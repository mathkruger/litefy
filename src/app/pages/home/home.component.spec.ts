import { SpotifyBrowseService } from './../../services/spotify-browse.service';
import { SpotifyUserService } from 'src/app/services/spotify-user.service';
import { AppModule } from './../../app.module';
import { ComponentFixture, inject, TestBed, waitForAsync } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let userService;
  let browseService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
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

  // it('should get all home information', () => {
  //   const responseArtist = {
  //     "items" : [ {
  //       "external_urls" : {
  //         "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
  //       },
  //       "followers" : {
  //         "href" : null,
  //         "total" : 294684
  //       },
  //       "genres" : [ "brazilian metal", "brazilian power metal", "brazilian progressive metal", "latin metal", "metal", "neo classical metal", "power metal", "progressive metal", "progressive power metal", "speed metal", "symphonic metal" ],
  //       "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
  //       "id" : "7IAXZaLTb6nkJr8RmVPn5y",
  //       "images" : [ {
  //         "height" : 640,
  //         "url" : "https://i.scdn.co/image/8a4db555cb1c768304fd6bf1a0a8795a3c84d540",
  //         "width" : 640
  //       }, {
  //         "height" : 320,
  //         "url" : "https://i.scdn.co/image/d771e2ab1c2abcf51cf16f5acb12d3c34ee1c81f",
  //         "width" : 320
  //       }, {
  //         "height" : 160,
  //         "url" : "https://i.scdn.co/image/e8bab2a73294ac559a578a54d90ff165c33faeea",
  //         "width" : 160
  //       } ],
  //       "name" : "Angra",
  //       "popularity" : 56,
  //       "type" : "artist",
  //       "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
  //     }, {
  //       "external_urls" : {
  //         "spotify" : "https://open.spotify.com/artist/0nmQIMXWTXfhgOBdNzhGOs"
  //       },
  //       "followers" : {
  //         "href" : null,
  //         "total" : 4423528
  //       },
  //       "genres" : [ "alternative metal", "nu metal" ],
  //       "href" : "https://api.spotify.com/v1/artists/0nmQIMXWTXfhgOBdNzhGOs",
  //       "id" : "0nmQIMXWTXfhgOBdNzhGOs",
  //       "images" : [ {
  //         "height" : 640,
  //         "url" : "https://i.scdn.co/image/e8469ef3c4e45f9574dc963a69043ac3f3e58d41",
  //         "width" : 640
  //       }, {
  //         "height" : 320,
  //         "url" : "https://i.scdn.co/image/73b9076ebae4987573b1c6dde101d4e1961d91a6",
  //         "width" : 320
  //       }, {
  //         "height" : 160,
  //         "url" : "https://i.scdn.co/image/50bb40412699a5e3c8a5a5752c1cd3fc9bfac687",
  //         "width" : 160
  //       } ],
  //       "name" : "Avenged Sevenfold",
  //       "popularity" : 77,
  //       "type" : "artist",
  //       "uri" : "spotify:artist:0nmQIMXWTXfhgOBdNzhGOs"
  //     }, {
  //       "external_urls" : {
  //         "spotify" : "https://open.spotify.com/artist/41zxOMwuASgUJp0c697KDm"
  //       },
  //       "followers" : {
  //         "href" : null,
  //         "total" : 37860
  //       },
  //       "genres" : [ "brazilian metal", "brazilian power metal", "brazilian progressive metal", "christian power metal", "neo classical metal", "power metal" ],
  //       "href" : "https://api.spotify.com/v1/artists/41zxOMwuASgUJp0c697KDm",
  //       "id" : "41zxOMwuASgUJp0c697KDm",
  //       "images" : [ {
  //         "height" : 640,
  //         "url" : "https://i.scdn.co/image/ab67616d0000b273f68141d8a50a0f994ea091b2",
  //         "width" : 640
  //       }, {
  //         "height" : 300,
  //         "url" : "https://i.scdn.co/image/ab67616d00001e02f68141d8a50a0f994ea091b2",
  //         "width" : 300
  //       }, {
  //         "height" : 64,
  //         "url" : "https://i.scdn.co/image/ab67616d00004851f68141d8a50a0f994ea091b2",
  //         "width" : 64
  //       } ],
  //       "name" : "Almah",
  //       "popularity" : 32,
  //       "type" : "artist",
  //       "uri" : "spotify:artist:41zxOMwuASgUJp0c697KDm"
  //     }, {
  //       "external_urls" : {
  //         "spotify" : "https://open.spotify.com/artist/36vknDs4OtlCZuloFIJAhN"
  //       },
  //       "followers" : {
  //         "href" : null,
  //         "total" : 103648
  //       },
  //       "genres" : [ "louvor" ],
  //       "href" : "https://api.spotify.com/v1/artists/36vknDs4OtlCZuloFIJAhN",
  //       "id" : "36vknDs4OtlCZuloFIJAhN",
  //       "images" : [ {
  //         "height" : 640,
  //         "url" : "https://i.scdn.co/image/ab67616d0000b27366d07b5a09b742f498561021",
  //         "width" : 640
  //       }, {
  //         "height" : 300,
  //         "url" : "https://i.scdn.co/image/ab67616d00001e0266d07b5a09b742f498561021",
  //         "width" : 300
  //       }, {
  //         "height" : 64,
  //         "url" : "https://i.scdn.co/image/ab67616d0000485166d07b5a09b742f498561021",
  //         "width" : 64
  //       } ],
  //       "name" : "Vocal Livre",
  //       "popularity" : 52,
  //       "type" : "artist",
  //       "uri" : "spotify:artist:36vknDs4OtlCZuloFIJAhN"
  //     }, {
  //       "external_urls" : {
  //         "spotify" : "https://open.spotify.com/artist/11soWXBxIfc2I4oyt0IXSy"
  //       },
  //       "followers" : {
  //         "href" : null,
  //         "total" : 2388
  //       },
  //       "genres" : [ ],
  //       "href" : "https://api.spotify.com/v1/artists/11soWXBxIfc2I4oyt0IXSy",
  //       "id" : "11soWXBxIfc2I4oyt0IXSy",
  //       "images" : [ {
  //         "height" : 640,
  //         "url" : "https://i.scdn.co/image/ab67616d0000b273f2247acea518646d0ab7e183",
  //         "width" : 640
  //       }, {
  //         "height" : 300,
  //         "url" : "https://i.scdn.co/image/ab67616d00001e02f2247acea518646d0ab7e183",
  //         "width" : 300
  //       }, {
  //         "height" : 64,
  //         "url" : "https://i.scdn.co/image/ab67616d00004851f2247acea518646d0ab7e183",
  //         "width" : 64
  //       } ],
  //       "name" : "Bethoveen Complete Works",
  //       "popularity" : 36,
  //       "type" : "artist",
  //       "uri" : "spotify:artist:11soWXBxIfc2I4oyt0IXSy"
  //     }, {
  //       "external_urls" : {
  //         "spotify" : "https://open.spotify.com/artist/2EMJULFeKwgKBeyybyQo9F"
  //       },
  //       "followers" : {
  //         "href" : null,
  //         "total" : 4624
  //       },
  //       "genres" : [ "asmr" ],
  //       "href" : "https://api.spotify.com/v1/artists/2EMJULFeKwgKBeyybyQo9F",
  //       "id" : "2EMJULFeKwgKBeyybyQo9F",
  //       "images" : [ {
  //         "height" : 640,
  //         "url" : "https://i.scdn.co/image/ab67616d0000b2736b29d9ae66ee3491b4f470c2",
  //         "width" : 640
  //       }, {
  //         "height" : 300,
  //         "url" : "https://i.scdn.co/image/ab67616d00001e026b29d9ae66ee3491b4f470c2",
  //         "width" : 300
  //       }, {
  //         "height" : 64,
  //         "url" : "https://i.scdn.co/image/ab67616d000048516b29d9ae66ee3491b4f470c2",
  //         "width" : 64
  //       } ],
  //       "name" : "Madi ASMR",
  //       "popularity" : 38,
  //       "type" : "artist",
  //       "uri" : "spotify:artist:2EMJULFeKwgKBeyybyQo9F"
  //     }, {
  //       "external_urls" : {
  //         "spotify" : "https://open.spotify.com/artist/0vI4MOCSTElG0Pm4iMcCDI"
  //       },
  //       "followers" : {
  //         "href" : null,
  //         "total" : 196
  //       },
  //       "genres" : [ "sound" ],
  //       "href" : "https://api.spotify.com/v1/artists/0vI4MOCSTElG0Pm4iMcCDI",
  //       "id" : "0vI4MOCSTElG0Pm4iMcCDI",
  //       "images" : [ {
  //         "height" : 640,
  //         "url" : "https://i.scdn.co/image/ab67616d0000b2731a6269894a47b7374274422e",
  //         "width" : 640
  //       }, {
  //         "height" : 300,
  //         "url" : "https://i.scdn.co/image/ab67616d00001e021a6269894a47b7374274422e",
  //         "width" : 300
  //       }, {
  //         "height" : 64,
  //         "url" : "https://i.scdn.co/image/ab67616d000048511a6269894a47b7374274422e",
  //         "width" : 64
  //       } ],
  //       "name" : "Rain Sounds Lab",
  //       "popularity" : 46,
  //       "type" : "artist",
  //       "uri" : "spotify:artist:0vI4MOCSTElG0Pm4iMcCDI"
  //     }, {
  //       "external_urls" : {
  //         "spotify" : "https://open.spotify.com/artist/1Yox196W7bzVNZI7RBaPnf"
  //       },
  //       "followers" : {
  //         "href" : null,
  //         "total" : 3104317
  //       },
  //       "genres" : [ "album rock", "alternative metal", "hard rock", "melodic thrash", "metal", "old school thrash", "rock", "speed metal", "thrash metal" ],
  //       "href" : "https://api.spotify.com/v1/artists/1Yox196W7bzVNZI7RBaPnf",
  //       "id" : "1Yox196W7bzVNZI7RBaPnf",
  //       "images" : [ {
  //         "height" : 640,
  //         "url" : "https://i.scdn.co/image/fdbf93704b51d1b96df59e762060ed45c420b6d6",
  //         "width" : 640
  //       }, {
  //         "height" : 320,
  //         "url" : "https://i.scdn.co/image/b2076bb69020633fc742777c392405361c29477a",
  //         "width" : 320
  //       }, {
  //         "height" : 160,
  //         "url" : "https://i.scdn.co/image/af5698fd011924d66bdeeb621c6ebce3f151c48b",
  //         "width" : 160
  //       } ],
  //       "name" : "Megadeth",
  //       "popularity" : 71,
  //       "type" : "artist",
  //       "uri" : "spotify:artist:1Yox196W7bzVNZI7RBaPnf"
  //     }, {
  //       "external_urls" : {
  //         "spotify" : "https://open.spotify.com/artist/3DgcBA7P0ji5co7Z1Gfp2Q"
  //       },
  //       "followers" : {
  //         "href" : null,
  //         "total" : 129647
  //       },
  //       "genres" : [ "broadway", "movie tunes", "show tunes" ],
  //       "href" : "https://api.spotify.com/v1/artists/3DgcBA7P0ji5co7Z1Gfp2Q",
  //       "id" : "3DgcBA7P0ji5co7Z1Gfp2Q",
  //       "images" : [ {
  //         "height" : 640,
  //         "url" : "https://i.scdn.co/image/7eacdeb33b66c51c9af3b54e04f101fd8f19066f",
  //         "width" : 640
  //       }, {
  //         "height" : 320,
  //         "url" : "https://i.scdn.co/image/9d9e29a55990bc8e5915c2b4c770184d0eba5a4f",
  //         "width" : 320
  //       }, {
  //         "height" : 160,
  //         "url" : "https://i.scdn.co/image/eadfe0071c6ffc87cbb53349a166fda3050009bf",
  //         "width" : 160
  //       } ],
  //       "name" : "Kristin Chenoweth",
  //       "popularity" : 62,
  //       "type" : "artist",
  //       "uri" : "spotify:artist:3DgcBA7P0ji5co7Z1Gfp2Q"
  //     }, {
  //       "external_urls" : {
  //         "spotify" : "https://open.spotify.com/artist/4DWX7u8BV0vZIQSpJQQDWU"
  //       },
  //       "followers" : {
  //         "href" : null,
  //         "total" : 805396
  //       },
  //       "genres" : [ "alternative metal", "nu metal", "post-grunge", "rock" ],
  //       "href" : "https://api.spotify.com/v1/artists/4DWX7u8BV0vZIQSpJQQDWU",
  //       "id" : "4DWX7u8BV0vZIQSpJQQDWU",
  //       "images" : [ {
  //         "height" : 640,
  //         "url" : "https://i.scdn.co/image/eb5ef3bc27e00034429c3dfca94fc8210f092c5a",
  //         "width" : 640
  //       }, {
  //         "height" : 320,
  //         "url" : "https://i.scdn.co/image/0d0ec6a5d1ce960dbeca68db9c5d51d163de9029",
  //         "width" : 320
  //       }, {
  //         "height" : 160,
  //         "url" : "https://i.scdn.co/image/ece9a5de764ea3b9c1584f31a4f455fe596380ae",
  //         "width" : 160
  //       } ],
  //       "name" : "Alter Bridge",
  //       "popularity" : 65,
  //       "type" : "artist",
  //       "uri" : "spotify:artist:4DWX7u8BV0vZIQSpJQQDWU"
  //     }, {
  //       "external_urls" : {
  //         "spotify" : "https://open.spotify.com/artist/5X0N2k3qMnI8kSrGJT3kfT"
  //       },
  //       "followers" : {
  //         "href" : null,
  //         "total" : 395301
  //       },
  //       "genres" : [ "bow pop", "celtic metal", "celtic rock", "folk metal", "hurdy-gurdy", "melodic death metal", "power metal", "swiss metal" ],
  //       "href" : "https://api.spotify.com/v1/artists/5X0N2k3qMnI8kSrGJT3kfT",
  //       "id" : "5X0N2k3qMnI8kSrGJT3kfT",
  //       "images" : [ {
  //         "height" : 640,
  //         "url" : "https://i.scdn.co/image/394e7c9e21fa0f94633424c633ef5d4f69d713f5",
  //         "width" : 640
  //       }, {
  //         "height" : 320,
  //         "url" : "https://i.scdn.co/image/ddf0debf9857d12855f44287829ceca0e8fd4d62",
  //         "width" : 320
  //       }, {
  //         "height" : 160,
  //         "url" : "https://i.scdn.co/image/344732a5e3a423cd867dba2c26876191684f907d",
  //         "width" : 160
  //       } ],
  //       "name" : "Eluveitie",
  //       "popularity" : 58,
  //       "type" : "artist",
  //       "uri" : "spotify:artist:5X0N2k3qMnI8kSrGJT3kfT"
  //     }, {
  //       "external_urls" : {
  //         "spotify" : "https://open.spotify.com/artist/7jmTilWYlKOuavFfmQAcu6"
  //       },
  //       "followers" : {
  //         "href" : null,
  //         "total" : 870411
  //       },
  //       "genres" : [ "adult standards", "mellow gold", "soft rock" ],
  //       "href" : "https://api.spotify.com/v1/artists/7jmTilWYlKOuavFfmQAcu6",
  //       "id" : "7jmTilWYlKOuavFfmQAcu6",
  //       "images" : [ {
  //         "height" : 640,
  //         "url" : "https://i.scdn.co/image/ba44985779aeae639d99c3c16c5b81de5ae4bea8",
  //         "width" : 640
  //       }, {
  //         "height" : 320,
  //         "url" : "https://i.scdn.co/image/a7257383a5352cf8907594b9e8b571cc29e3d87f",
  //         "width" : 320
  //       }, {
  //         "height" : 160,
  //         "url" : "https://i.scdn.co/image/bdf642e3340a6f9c53f49d525257568e7e97193e",
  //         "width" : 160
  //       } ],
  //       "name" : "Barbra Streisand",
  //       "popularity" : 69,
  //       "type" : "artist",
  //       "uri" : "spotify:artist:7jmTilWYlKOuavFfmQAcu6"
  //     }, {
  //       "external_urls" : {
  //         "spotify" : "https://open.spotify.com/artist/5eAWCfyUhZtHHtBdNk56l1"
  //       },
  //       "followers" : {
  //         "href" : null,
  //         "total" : 6853372
  //       },
  //       "genres" : [ "alternative metal", "nu metal", "rap metal", "rock" ],
  //       "href" : "https://api.spotify.com/v1/artists/5eAWCfyUhZtHHtBdNk56l1",
  //       "id" : "5eAWCfyUhZtHHtBdNk56l1",
  //       "images" : [ {
  //         "height" : 640,
  //         "url" : "https://i.scdn.co/image/a89dc04c6faef6658c7a8d02f444775c9024cbb2",
  //         "width" : 640
  //       }, {
  //         "height" : 320,
  //         "url" : "https://i.scdn.co/image/e5c92330ef4848ec70d4325a57bec3dfae5f3901",
  //         "width" : 320
  //       }, {
  //         "height" : 160,
  //         "url" : "https://i.scdn.co/image/3e756e39f3a3fc9f807aef3c74f6756bca0a19cb",
  //         "width" : 160
  //       } ],
  //       "name" : "System Of A Down",
  //       "popularity" : 80,
  //       "type" : "artist",
  //       "uri" : "spotify:artist:5eAWCfyUhZtHHtBdNk56l1"
  //     }, {
  //       "external_urls" : {
  //         "spotify" : "https://open.spotify.com/artist/6qqNVTkY8uBg9cP3Jd7DAH"
  //       },
  //       "followers" : {
  //         "href" : null,
  //         "total" : 38170655
  //       },
  //       "genres" : [ "electropop", "pop" ],
  //       "href" : "https://api.spotify.com/v1/artists/6qqNVTkY8uBg9cP3Jd7DAH",
  //       "id" : "6qqNVTkY8uBg9cP3Jd7DAH",
  //       "images" : [ {
  //         "height" : 640,
  //         "url" : "https://i.scdn.co/image/8b37b863c8772bebdeefece264ee2fcee804b98d",
  //         "width" : 640
  //       }, {
  //         "height" : 320,
  //         "url" : "https://i.scdn.co/image/0b909adbce5ff84ac8435e995ee946a9a593dbd1",
  //         "width" : 320
  //       }, {
  //         "height" : 160,
  //         "url" : "https://i.scdn.co/image/d8dec1d046f4b620602664f91093bc339dcda68b",
  //         "width" : 160
  //       } ],
  //       "name" : "Billie Eilish",
  //       "popularity" : 93,
  //       "type" : "artist",
  //       "uri" : "spotify:artist:6qqNVTkY8uBg9cP3Jd7DAH"
  //     }, {
  //       "external_urls" : {
  //         "spotify" : "https://open.spotify.com/artist/5GtMEZEeFFsuHY8ad4kOxv"
  //       },
  //       "followers" : {
  //         "href" : null,
  //         "total" : 1204350
  //       },
  //       "genres" : [ "british soul", "soft rock" ],
  //       "href" : "https://api.spotify.com/v1/artists/5GtMEZEeFFsuHY8ad4kOxv",
  //       "id" : "5GtMEZEeFFsuHY8ad4kOxv",
  //       "images" : [ {
  //         "height" : 640,
  //         "url" : "https://i.scdn.co/image/f87ba05c9d8fde9366c092730b169729b7fd2c93",
  //         "width" : 640
  //       }, {
  //         "height" : 320,
  //         "url" : "https://i.scdn.co/image/ebba3a05ad81a03384932978859d23f765bdaa48",
  //         "width" : 320
  //       }, {
  //         "height" : 160,
  //         "url" : "https://i.scdn.co/image/bfca74945c8860c8d680d34ae4546b79cec7d1a0",
  //         "width" : 160
  //       } ],
  //       "name" : "Seal",
  //       "popularity" : 67,
  //       "type" : "artist",
  //       "uri" : "spotify:artist:5GtMEZEeFFsuHY8ad4kOxv"
  //     }, {
  //       "external_urls" : {
  //         "spotify" : "https://open.spotify.com/artist/3NyKjyguig68xw6kSpeDiW"
  //       },
  //       "followers" : {
  //         "href" : null,
  //         "total" : 25343
  //       },
  //       "genres" : [ "idol rock", "j-metal", "japanese power metal", "kawaii metal" ],
  //       "href" : "https://api.spotify.com/v1/artists/3NyKjyguig68xw6kSpeDiW",
  //       "id" : "3NyKjyguig68xw6kSpeDiW",
  //       "images" : [ {
  //         "height" : 640,
  //         "url" : "https://i.scdn.co/image/ab67616d0000b2737e297aef73447965748f786f",
  //         "width" : 640
  //       }, {
  //         "height" : 300,
  //         "url" : "https://i.scdn.co/image/ab67616d00001e027e297aef73447965748f786f",
  //         "width" : 300
  //       }, {
  //         "height" : 64,
  //         "url" : "https://i.scdn.co/image/ab67616d000048517e297aef73447965748f786f",
  //         "width" : 64
  //       } ],
  //       "name" : "Unlucky Morpheus",
  //       "popularity" : 42,
  //       "type" : "artist",
  //       "uri" : "spotify:artist:3NyKjyguig68xw6kSpeDiW"
  //     }, {
  //       "external_urls" : {
  //         "spotify" : "https://open.spotify.com/artist/5HA5aLY3jJV7eimXWkRBBp"
  //       },
  //       "followers" : {
  //         "href" : null,
  //         "total" : 598223
  //       },
  //       "genres" : [ "dutch metal", "gothic metal", "gothic symphonic metal", "opera metal", "power metal", "symphonic metal" ],
  //       "href" : "https://api.spotify.com/v1/artists/5HA5aLY3jJV7eimXWkRBBp",
  //       "id" : "5HA5aLY3jJV7eimXWkRBBp",
  //       "images" : [ {
  //         "height" : 640,
  //         "url" : "https://i.scdn.co/image/2a86c68fa2109840ad467e58326326a414c33bd1",
  //         "width" : 640
  //       }, {
  //         "height" : 320,
  //         "url" : "https://i.scdn.co/image/f92856918ff9e5b0be2f092d074cc297fff25f14",
  //         "width" : 320
  //       }, {
  //         "height" : 160,
  //         "url" : "https://i.scdn.co/image/091aaaaaa82ae559d2355bf6658f72db84491552",
  //         "width" : 160
  //       } ],
  //       "name" : "Epica",
  //       "popularity" : 60,
  //       "type" : "artist",
  //       "uri" : "spotify:artist:5HA5aLY3jJV7eimXWkRBBp"
  //     }, {
  //       "external_urls" : {
  //         "spotify" : "https://open.spotify.com/artist/7KkqUt65v6LMtR369OQ6FB"
  //       },
  //       "followers" : {
  //         "href" : null,
  //         "total" : 81984
  //       },
  //       "genres" : [ "hollywood", "show tunes" ],
  //       "href" : "https://api.spotify.com/v1/artists/7KkqUt65v6LMtR369OQ6FB",
  //       "id" : "7KkqUt65v6LMtR369OQ6FB",
  //       "images" : [ {
  //         "height" : 640,
  //         "url" : "https://i.scdn.co/image/f5db74a711c815ab78bb782b5e77da0082249493",
  //         "width" : 640
  //       }, {
  //         "height" : 320,
  //         "url" : "https://i.scdn.co/image/1e95b92f9c096ba2cbacf8cb4e8218033f3da9b8",
  //         "width" : 320
  //       }, {
  //         "height" : 160,
  //         "url" : "https://i.scdn.co/image/d4aa7be0e45f6ec23e6bb7f60f8511d5459d20c7",
  //         "width" : 160
  //       } ],
  //       "name" : "Jonathan Groff",
  //       "popularity" : 70,
  //       "type" : "artist",
  //       "uri" : "spotify:artist:7KkqUt65v6LMtR369OQ6FB"
  //     }, {
  //       "external_urls" : {
  //         "spotify" : "https://open.spotify.com/artist/0d5h2QZDuhDnoVyFbdA4uG"
  //       },
  //       "followers" : {
  //         "href" : null,
  //         "total" : 9373
  //       },
  //       "genres" : [ ],
  //       "href" : "https://api.spotify.com/v1/artists/0d5h2QZDuhDnoVyFbdA4uG",
  //       "id" : "0d5h2QZDuhDnoVyFbdA4uG",
  //       "images" : [ {
  //         "height" : 640,
  //         "url" : "https://i.scdn.co/image/8815db3d2b07d68b919712ace17dc538d9454a9f",
  //         "width" : 640
  //       }, {
  //         "height" : 320,
  //         "url" : "https://i.scdn.co/image/a1bbf4c3739c61b6953848b42621ccaf90c7fc13",
  //         "width" : 320
  //       }, {
  //         "height" : 160,
  //         "url" : "https://i.scdn.co/image/0eaf797fc8de63a5c9dabe65cd964ade39e496f7",
  //         "width" : 160
  //       } ],
  //       "name" : "Ednaldo Pereira",
  //       "popularity" : 27,
  //       "type" : "artist",
  //       "uri" : "spotify:artist:0d5h2QZDuhDnoVyFbdA4uG"
  //     }, {
  //       "external_urls" : {
  //         "spotify" : "https://open.spotify.com/artist/6ILvHfw25OcSrWk3aWPxDW"
  //       },
  //       "followers" : {
  //         "href" : null,
  //         "total" : 4664
  //       },
  //       "genres" : [ ],
  //       "href" : "https://api.spotify.com/v1/artists/6ILvHfw25OcSrWk3aWPxDW",
  //       "id" : "6ILvHfw25OcSrWk3aWPxDW",
  //       "images" : [ {
  //         "height" : 640,
  //         "url" : "https://i.scdn.co/image/ab67616d0000b273cb59c0a8d504a142cd2bcbb8",
  //         "width" : 640
  //       }, {
  //         "height" : 300,
  //         "url" : "https://i.scdn.co/image/ab67616d00001e02cb59c0a8d504a142cd2bcbb8",
  //         "width" : 300
  //       }, {
  //         "height" : 64,
  //         "url" : "https://i.scdn.co/image/ab67616d00004851cb59c0a8d504a142cd2bcbb8",
  //         "width" : 64
  //       } ],
  //       "name" : "Grupo Y-no",
  //       "popularity" : 24,
  //       "type" : "artist",
  //       "uri" : "spotify:artist:6ILvHfw25OcSrWk3aWPxDW"
  //     } ],
  //     "total" : 40,
  //     "limit" : 20,
  //     "offset" : 0,
  //     "href" : "https://api.spotify.com/v1/me/top/artists",
  //     "previous" : null,
  //     "next" : "https://api.spotify.com/v1/me/top/artists?limit=20&offset=20"
  //   };
  //   const responseTracks = {
  //     "items" : [ {
  //       "album" : {
  //         "album_type" : "ALBUM",
  //         "artists" : [ {
  //           "external_urls" : {
  //             "spotify" : "https://open.spotify.com/artist/36vknDs4OtlCZuloFIJAhN"
  //           },
  //           "href" : "https://api.spotify.com/v1/artists/36vknDs4OtlCZuloFIJAhN",
  //           "id" : "36vknDs4OtlCZuloFIJAhN",
  //           "name" : "Vocal Livre",
  //           "type" : "artist",
  //           "uri" : "spotify:artist:36vknDs4OtlCZuloFIJAhN"
  //         } ],
  //         "available_markets" : [ "AD", "AE", "AR", "AT", "AU", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "SA", "SE", "SG", "SK", "SV", "TH", "TN", "TR", "TW", "US", "UY", "VN", "ZA" ],
  //         "external_urls" : {
  //           "spotify" : "https://open.spotify.com/album/1CxVTJB1c5UeHDUbXmr0tQ"
  //         },
  //         "href" : "https://api.spotify.com/v1/albums/1CxVTJB1c5UeHDUbXmr0tQ",
  //         "id" : "1CxVTJB1c5UeHDUbXmr0tQ",
  //         "images" : [ {
  //           "height" : 640,
  //           "url" : "https://i.scdn.co/image/ab67616d0000b273c7c8e5f6f3bc6515ca4cbd6f",
  //           "width" : 640
  //         }, {
  //           "height" : 300,
  //           "url" : "https://i.scdn.co/image/ab67616d00001e02c7c8e5f6f3bc6515ca4cbd6f",
  //           "width" : 300
  //         }, {
  //           "height" : 64,
  //           "url" : "https://i.scdn.co/image/ab67616d00004851c7c8e5f6f3bc6515ca4cbd6f",
  //           "width" : 64
  //         } ],
  //         "name" : "Acústico",
  //         "release_date" : "2020-07-21",
  //         "release_date_precision" : "day",
  //         "total_tracks" : 10,
  //         "type" : "album",
  //         "uri" : "spotify:album:1CxVTJB1c5UeHDUbXmr0tQ"
  //       },
  //       "artists" : [ {
  //         "external_urls" : {
  //           "spotify" : "https://open.spotify.com/artist/36vknDs4OtlCZuloFIJAhN"
  //         },
  //         "href" : "https://api.spotify.com/v1/artists/36vknDs4OtlCZuloFIJAhN",
  //         "id" : "36vknDs4OtlCZuloFIJAhN",
  //         "name" : "Vocal Livre",
  //         "type" : "artist",
  //         "uri" : "spotify:artist:36vknDs4OtlCZuloFIJAhN"
  //       } ],
  //       "available_markets" : [ "AD", "AE", "AR", "AT", "AU", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "SA", "SE", "SG", "SK", "SV", "TH", "TN", "TR", "TW", "US", "UY", "VN", "ZA" ],
  //       "disc_number" : 1,
  //       "duration_ms" : 324498,
  //       "explicit" : false,
  //       "external_ids" : {
  //         "isrc" : "BRY152000038"
  //       },
  //       "external_urls" : {
  //         "spotify" : "https://open.spotify.com/track/4wFLVXhWhQUePNQPFFeojy"
  //       },
  //       "href" : "https://api.spotify.com/v1/tracks/4wFLVXhWhQUePNQPFFeojy",
  //       "id" : "4wFLVXhWhQUePNQPFFeojy",
  //       "is_local" : false,
  //       "name" : "Bela História - Acústico",
  //       "popularity" : 40,
  //       "preview_url" : "https://p.scdn.co/mp3-preview/c4b1cb972325cfb08f74f3a5423ff12ab61c7b9e?cid=d2efaa241b0140e1b3cec365631430a7",
  //       "track_number" : 5,
  //       "type" : "track",
  //       "uri" : "spotify:track:4wFLVXhWhQUePNQPFFeojy"
  //     }, {
  //       "album" : {
  //         "album_type" : "ALBUM",
  //         "artists" : [ {
  //           "external_urls" : {
  //             "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
  //           },
  //           "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
  //           "id" : "7IAXZaLTb6nkJr8RmVPn5y",
  //           "name" : "Angra",
  //           "type" : "artist",
  //           "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
  //         } ],
  //         "available_markets" : [ "AD", "AE", "AR", "AT", "AU", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "SA", "SE", "SG", "SK", "SV", "TH", "TN", "TR", "TW", "US", "UY", "VN", "ZA" ],
  //         "external_urls" : {
  //           "spotify" : "https://open.spotify.com/album/2J1e7x33Aejx7KFmVbgoGW"
  //         },
  //         "href" : "https://api.spotify.com/v1/albums/2J1e7x33Aejx7KFmVbgoGW",
  //         "id" : "2J1e7x33Aejx7KFmVbgoGW",
  //         "images" : [ {
  //           "height" : 640,
  //           "url" : "https://i.scdn.co/image/ab67616d0000b273951115ee4a64529ba1d49787",
  //           "width" : 640
  //         }, {
  //           "height" : 300,
  //           "url" : "https://i.scdn.co/image/ab67616d00001e02951115ee4a64529ba1d49787",
  //           "width" : 300
  //         }, {
  //           "height" : 64,
  //           "url" : "https://i.scdn.co/image/ab67616d00004851951115ee4a64529ba1d49787",
  //           "width" : 64
  //         } ],
  //         "name" : "Temple of Shadows",
  //         "release_date" : "2004-11-15",
  //         "release_date_precision" : "day",
  //         "total_tracks" : 13,
  //         "type" : "album",
  //         "uri" : "spotify:album:2J1e7x33Aejx7KFmVbgoGW"
  //       },
  //       "artists" : [ {
  //         "external_urls" : {
  //           "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
  //         },
  //         "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
  //         "id" : "7IAXZaLTb6nkJr8RmVPn5y",
  //         "name" : "Angra",
  //         "type" : "artist",
  //         "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
  //       } ],
  //       "available_markets" : [ "AD", "AE", "AR", "AT", "AU", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "SA", "SE", "SG", "SK", "SV", "TH", "TN", "TR", "TW", "US", "UY", "VN", "ZA" ],
  //       "disc_number" : 1,
  //       "duration_ms" : 54186,
  //       "explicit" : false,
  //       "external_ids" : {
  //         "isrc" : "BRBRI0500410"
  //       },
  //       "external_urls" : {
  //         "spotify" : "https://open.spotify.com/track/5eYkFRuIHGaZZXUnBbsF0D"
  //       },
  //       "href" : "https://api.spotify.com/v1/tracks/5eYkFRuIHGaZZXUnBbsF0D",
  //       "id" : "5eYkFRuIHGaZZXUnBbsF0D",
  //       "is_local" : false,
  //       "name" : "Deus Le Volt!",
  //       "popularity" : 33,
  //       "preview_url" : "https://p.scdn.co/mp3-preview/2482dd4b523629361040c032abb11513abde5cac?cid=d2efaa241b0140e1b3cec365631430a7",
  //       "track_number" : 1,
  //       "type" : "track",
  //       "uri" : "spotify:track:5eYkFRuIHGaZZXUnBbsF0D"
  //     }, {
  //       "album" : {
  //         "album_type" : "ALBUM",
  //         "artists" : [ {
  //           "external_urls" : {
  //             "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
  //           },
  //           "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
  //           "id" : "7IAXZaLTb6nkJr8RmVPn5y",
  //           "name" : "Angra",
  //           "type" : "artist",
  //           "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
  //         } ],
  //         "available_markets" : [ "AD", "AE", "AR", "AT", "AU", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IL", "IS", "IT", "JO", "JP", "KW", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "SA", "SE", "SG", "SK", "SV", "TH", "TN", "TR", "TW", "US", "UY", "VN", "ZA" ],
  //         "external_urls" : {
  //           "spotify" : "https://open.spotify.com/album/5kaCxwkNOt2GrhR7egsJZp"
  //         },
  //         "href" : "https://api.spotify.com/v1/albums/5kaCxwkNOt2GrhR7egsJZp",
  //         "id" : "5kaCxwkNOt2GrhR7egsJZp",
  //         "images" : [ {
  //           "height" : 640,
  //           "url" : "https://i.scdn.co/image/ab67616d0000b2736643b10c61b98d14ac7849db",
  //           "width" : 640
  //         }, {
  //           "height" : 300,
  //           "url" : "https://i.scdn.co/image/ab67616d00001e026643b10c61b98d14ac7849db",
  //           "width" : 300
  //         }, {
  //           "height" : 64,
  //           "url" : "https://i.scdn.co/image/ab67616d000048516643b10c61b98d14ac7849db",
  //           "width" : 64
  //         } ],
  //         "name" : "Aqua",
  //         "release_date" : "2010-09-24",
  //         "release_date_precision" : "day",
  //         "total_tracks" : 10,
  //         "type" : "album",
  //         "uri" : "spotify:album:5kaCxwkNOt2GrhR7egsJZp"
  //       },
  //       "artists" : [ {
  //         "external_urls" : {
  //           "spotify" : "https://open.spotify.com/artist/7IAXZaLTb6nkJr8RmVPn5y"
  //         },
  //         "href" : "https://api.spotify.com/v1/artists/7IAXZaLTb6nkJr8RmVPn5y",
  //         "id" : "7IAXZaLTb6nkJr8RmVPn5y",
  //         "name" : "Angra",
  //         "type" : "artist",
  //         "uri" : "spotify:artist:7IAXZaLTb6nkJr8RmVPn5y"
  //       } ],
  //       "available_markets" : [ "AD", "AE", "AR", "AT", "AU", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IL", "IS", "IT", "JO", "JP", "KW", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "SA", "SE", "SG", "SK", "SV", "TH", "TN", "TR", "TW", "US", "UY", "VN", "ZA" ],
  //       "disc_number" : 1,
  //       "duration_ms" : 59946,
  //       "explicit" : false,
  //       "external_ids" : {
  //         "isrc" : "BRRAK1000002"
  //       },
  //       "external_urls" : {
  //         "spotify" : "https://open.spotify.com/track/0b5abTO4J2BuQ6MNRN49TK"
  //       },
  //       "href" : "https://api.spotify.com/v1/tracks/0b5abTO4J2BuQ6MNRN49TK",
  //       "id" : "0b5abTO4J2BuQ6MNRN49TK",
  //       "is_local" : false,
  //       "name" : "Viderunt Te Aquae",
  //       "popularity" : 25,
  //       "preview_url" : "https://p.scdn.co/mp3-preview/c6720c22c8cb8a9e8a16d4fc9ad0beced4d7fc9a?cid=d2efaa241b0140e1b3cec365631430a7",
  //       "track_number" : 1,
  //       "type" : "track",
  //       "uri" : "spotify:track:0b5abTO4J2BuQ6MNRN49TK"
  //     }, {
  //       "album" : {
  //         "album_type" : "COMPILATION",
  //         "artists" : [ {
  //           "external_urls" : {
  //             "spotify" : "https://open.spotify.com/artist/0LyfQWJT6nXafLPZqxe9Of"
  //           },
  //           "href" : "https://api.spotify.com/v1/artists/0LyfQWJT6nXafLPZqxe9Of",
  //           "id" : "0LyfQWJT6nXafLPZqxe9Of",
  //           "name" : "Vários intérpretes",
  //           "type" : "artist",
  //           "uri" : "spotify:artist:0LyfQWJT6nXafLPZqxe9Of"
  //         } ],
  //         "available_markets" : [ "AD", "AE", "AR", "AT", "AU", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "SA", "SE", "SG", "SK", "SV", "TH", "TN", "TR", "TW", "US", "UY", "VN", "ZA" ],
  //         "external_urls" : {
  //           "spotify" : "https://open.spotify.com/album/1woCvthHJakakroP6dXNxs"
  //         },
  //         "href" : "https://api.spotify.com/v1/albums/1woCvthHJakakroP6dXNxs",
  //         "id" : "1woCvthHJakakroP6dXNxs",
  //         "images" : [ {
  //           "height" : 640,
  //           "url" : "https://i.scdn.co/image/ab67616d0000b273f3eaae22e1c6b26400073c05",
  //           "width" : 640
  //         }, {
  //           "height" : 300,
  //           "url" : "https://i.scdn.co/image/ab67616d00001e02f3eaae22e1c6b26400073c05",
  //           "width" : 300
  //         }, {
  //           "height" : 64,
  //           "url" : "https://i.scdn.co/image/ab67616d00004851f3eaae22e1c6b26400073c05",
  //           "width" : 64
  //         } ],
  //         "name" : "Wicked (Original Broadway Cast Recording / Deluxe Edition)",
  //         "release_date" : "2013-01-01",
  //         "release_date_precision" : "day",
  //         "total_tracks" : 28,
  //         "type" : "album",
  //         "uri" : "spotify:album:1woCvthHJakakroP6dXNxs"
  //       },
  //       "artists" : [ {
  //         "external_urls" : {
  //           "spotify" : "https://open.spotify.com/artist/3DgcBA7P0ji5co7Z1Gfp2Q"
  //         },
  //         "href" : "https://api.spotify.com/v1/artists/3DgcBA7P0ji5co7Z1Gfp2Q",
  //         "id" : "3DgcBA7P0ji5co7Z1Gfp2Q",
  //         "name" : "Kristin Chenoweth",
  //         "type" : "artist",
  //         "uri" : "spotify:artist:3DgcBA7P0ji5co7Z1Gfp2Q"
  //       }, {
  //         "external_urls" : {
  //           "spotify" : "https://open.spotify.com/artist/53KxkH27mKZgcCmtdKYBl7"
  //         },
  //         "href" : "https://api.spotify.com/v1/artists/53KxkH27mKZgcCmtdKYBl7",
  //         "id" : "53KxkH27mKZgcCmtdKYBl7",
  //         "name" : "Sean McCourt",
  //         "type" : "artist",
  //         "uri" : "spotify:artist:53KxkH27mKZgcCmtdKYBl7"
  //       }, {
  //         "external_urls" : {
  //           "spotify" : "https://open.spotify.com/artist/36XXapGsaRgnQEQkjPfTBl"
  //         },
  //         "href" : "https://api.spotify.com/v1/artists/36XXapGsaRgnQEQkjPfTBl",
  //         "id" : "36XXapGsaRgnQEQkjPfTBl",
  //         "name" : "Cristy Candler",
  //         "type" : "artist",
  //         "uri" : "spotify:artist:36XXapGsaRgnQEQkjPfTBl"
  //       }, {
  //         "external_urls" : {
  //           "spotify" : "https://open.spotify.com/artist/5LATQYuPWELZCDEdGYN5YH"
  //         },
  //         "href" : "https://api.spotify.com/v1/artists/5LATQYuPWELZCDEdGYN5YH",
  //         "id" : "5LATQYuPWELZCDEdGYN5YH",
  //         "name" : "Jan Neuberger",
  //         "type" : "artist",
  //         "uri" : "spotify:artist:5LATQYuPWELZCDEdGYN5YH"
  //       } ],
  //       "available_markets" : [ "AD", "AE", "AR", "AT", "AU", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "SA", "SE", "SG", "SK", "SV", "TH", "TN", "TR", "TW", "US", "UY", "VN", "ZA" ],
  //       "disc_number" : 1,
  //       "duration_ms" : 400533,
  //       "explicit" : false,
  //       "external_ids" : {
  //         "isrc" : "USUMC0300210"
  //       },
  //       "external_urls" : {
  //         "spotify" : "https://open.spotify.com/track/0UzApqRTAi3d2iZexmuP3s"
  //       },
  //       "href" : "https://api.spotify.com/v1/tracks/0UzApqRTAi3d2iZexmuP3s",
  //       "id" : "0UzApqRTAi3d2iZexmuP3s",
  //       "is_local" : false,
  //       "name" : "No One Mourns The Wicked - From \"Wicked\" Original Broadway Cast Recording/2003",
  //       "popularity" : 47,
  //       "preview_url" : "https://p.scdn.co/mp3-preview/0777e674f3bcb452c2a28bb17d9bf5dce51f26cb?cid=d2efaa241b0140e1b3cec365631430a7",
  //       "track_number" : 1,

});
