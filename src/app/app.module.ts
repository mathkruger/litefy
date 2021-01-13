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

@NgModule({
  declarations: [
    AppComponent,
    LoginAuthenticateComponent,
    LoginCallbackComponent,
    HomeComponent,
    HeaderComponent,
    ShearchBoxComponent,
    PlayerComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
