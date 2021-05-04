import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineBookStoreComponent } from './online-book-store.component';

describe('OnlineBookStoreComponent', () => {
  let component: OnlineBookStoreComponent;
  let fixture: ComponentFixture<OnlineBookStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlineBookStoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineBookStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
