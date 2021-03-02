import { AppModule } from './../../app.module';
import {  ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ContentListComponent } from './content-list.component';

describe('ContentListComponent', () => {
  let component: ContentListComponent;
  let fixture: ComponentFixture<ContentListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ContentListComponent],
      imports: [AppModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('testing getRootItem method', () => {
    const mock = {
      item: 'value1',
      subitem: {
        item: 'value2'
      }
    };

    component.rootItem = 'subitem';
    const value = component.getRootItem(mock);
    expect(value).toEqual(mock.subitem);
  });
});
