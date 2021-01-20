import { AppModule } from './../../../app.module';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LoginAuthenticateComponent } from './login-authenticate.component';

describe('LoginAuthenticateComponent', () => {
  let component: LoginAuthenticateComponent;
  let fixture: ComponentFixture<LoginAuthenticateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginAuthenticateComponent ],
      imports: [AppModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginAuthenticateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should be redirect to spotify authorization poge', () => {
  //   expect(component.login()).toBeTruthy();
  // });
});
