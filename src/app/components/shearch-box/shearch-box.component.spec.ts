import { AppModule } from './../../app.module';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ShearchBoxComponent } from './shearch-box.component';

describe('ShearchBoxComponent', () => {
  let component: ShearchBoxComponent;
  let fixture: ComponentFixture<ShearchBoxComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ShearchBoxComponent],
      imports: [AppModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShearchBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
