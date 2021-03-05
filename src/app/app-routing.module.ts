import { KaraokeComponent } from './pages/karaoke/karaoke.component';
import { LibraryComponent } from './pages/library/library.component';
import { PlaylistComponent } from './pages/playlist/playlist.component';
import { AlbumComponent } from './pages/album/album.component';
import { ArtistComponent } from './pages/artist/artist.component';
import { SearchComponent } from './pages/search/search.component';
import { LoginCallbackComponent } from './pages/login/login-callback/login-callback.component';
import { LoginAuthenticateComponent } from './pages/login/login-authenticate/login-authenticate.component';
import { LoginGuardService } from './services/guardians/login-guard.service';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NaoLoginGuardService } from './services/guardians/nao-logino-guard.service';
import { SettingsComponent } from './pages/settings/settings.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [LoginGuardService]
  },
  {
    path: 'search',
    component: SearchComponent,
    canActivate: [LoginGuardService]
  },
  {
    path: 'library',
    component: LibraryComponent,
    canActivate: [LoginGuardService]
  },
  {
    path: 'artist/:id',
    component: ArtistComponent,
    canActivate: [LoginGuardService]
  },
  {
    path: 'album/:id',
    component: AlbumComponent,
    canActivate: [LoginGuardService]
  },
  {
    path: 'playlist/:id',
    component: PlaylistComponent,
    canActivate: [LoginGuardService]
  },
  {
    path: 'karaoke',
    component: KaraokeComponent,
    canActivate: [LoginGuardService]
  },
  {
    path: 'settings',
    component: SettingsComponent,
    canActivate: [LoginGuardService]
  },
  {
    path: 'login',
    component: LoginAuthenticateComponent,
    canActivate: [NaoLoginGuardService]
  },
  {
    path: 'login/callback',
    component: LoginCallbackComponent,
    canActivate: [NaoLoginGuardService]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
