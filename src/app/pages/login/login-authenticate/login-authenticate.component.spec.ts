import { AppModule } from './../../../app.module';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { LoginAuthenticateComponent } from './login-authenticate.component';

describe('LoginAuthenticateComponent', () => {
  let component: LoginAuthenticateComponent;
  let fixture: ComponentFixture<LoginAuthenticateComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LoginAuthenticateComponent],
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
