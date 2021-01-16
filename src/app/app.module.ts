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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { PipesModule } from './pipes/pipes.module';
import { AlbumComponent } from './pages/album/album.component';
import { PlaylistComponent } from './pages/playlist/playlist.component';

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
    AlbumComponent,
    PlaylistComponent
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
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenVerificationInterceptorService, multi: true },
    PipesModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
