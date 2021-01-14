import { SearchComponent } from './pages/search/search.component';
import { LoginCallbackComponent } from './pages/login/login-callback/login-callback.component';
import { LoginAuthenticateComponent } from './pages/login/login-authenticate/login-authenticate.component';
import { LoginGuardService } from './services/login-guard.service';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NaoLoginGuardService } from './services/nao-logino-guard.service';

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
    path: 'login',
    component: LoginAuthenticateComponent,
    canActivate: [NaoLoginGuardService]
  },
  {
    path: 'login/callback',
    component: LoginCallbackComponent,
    canActivate: [NaoLoginGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
