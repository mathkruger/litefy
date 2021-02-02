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
});
