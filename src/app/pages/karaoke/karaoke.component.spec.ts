/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { KaraokeComponent } from './karaoke.component';

describe('KaraokeComponent', () => {
  let component: KaraokeComponent;
  let fixture: ComponentFixture<KaraokeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ KaraokeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KaraokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
