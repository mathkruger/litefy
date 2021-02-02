import { User } from './../../models/user';
import { AppModule } from './../../app.module';
import { waitForAsync, ComponentFixture, TestBed, inject } from '@angular/core/testing';

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
});
