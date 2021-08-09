import { User } from './../../models/user';
import { AppModule } from './../../app.module';
import { waitForAsync, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { PodcastsComponent } from './podcasts.component';
import { SpotifyUserService } from 'src/app/services/spotify-user.service';
import { UserService } from 'src/app/services/user.service';
import { of } from 'rxjs';

describe('PodcastsComponent', () => {
  let component: PodcastsComponent;
  let fixture: ComponentFixture<PodcastsComponent>;
  let userService;
  let usuarioLogadoService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PodcastsComponent],
      imports: [AppModule]
    })
      .compileComponents();
  }));

  beforeEach(inject([SpotifyUserService, UserService], (s, l) => {
    userService = s;
    usuarioLogadoService = l;

    fixture = TestBed.createComponent(PodcastsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
