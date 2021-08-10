import { KaraokeComponent } from './pages/karaoke/karaoke.component';
import { PlayerComponent } from './components/player/player.component';
import { ShearchBoxComponent } from './components/shearch-box/shearch-box.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginCallbackComponent } from './pages/login/login-callback/login-callback.component';
import { LoginAuthenticateComponent } from './pages/login/login-authenticate/login-authenticate.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms/';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgProgressModule } from 'ngx-progressbar';
import { NgProgressHttpModule } from 'ngx-progressbar/http';
import { NgProgressRouterModule } from 'ngx-progressbar/router';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchComponent } from './pages/search/search.component';
import { TokenVerificationInterceptorService } from './services/interceptors/token-verification.interceptor';
import { ContentListComponent } from './components/content-list/content-list.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ArtistComponent } from './pages/artist/artist.component';
import { ShowComponent } from './pages/show/show.component';
import { PipesModule } from './pipes/pipes.module';
import { AlbumComponent } from './pages/album/album.component';
import { PlaylistComponent } from './pages/playlist/playlist.component';
import { LibraryComponent } from './pages/library/library.component';
import { PodcastsComponent } from './pages/podcasts/podcasts.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LanguageSwitcherComponent } from './components/language-switcher/language-switcher.component';
import { VolumeBoxComponent } from './components/volume-box/volume-box.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { YoutubePlayerComponent } from './components/youtube-player/youtube-player.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginAuthenticateComponent,
    LoginCallbackComponent,
    HomeComponent,
    HeaderComponent,
    ShearchBoxComponent,
    PlayerComponent,
    SearchComponent,
    ContentListComponent,
    ArtistComponent,
    ShowComponent,
    AlbumComponent,
    PlaylistComponent,
    LibraryComponent,
    PodcastsComponent,
    LanguageSwitcherComponent,
    KaraokeComponent,
    VolumeBoxComponent,
    SettingsComponent,
    YoutubePlayerComponent,
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    PipesModule,
    NgProgressModule,
    NgProgressHttpModule,
    NgProgressRouterModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenVerificationInterceptorService, multi: true },
    PipesModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// AOT compilation support
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}
