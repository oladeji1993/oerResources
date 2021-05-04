import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineBookStoreSingleComponent } from './online-book-store-single.component';

describe('OnlineBookStoreSingleComponent', () => {
  let component: OnlineBookStoreSingleComponent;
  let fixture: ComponentFixture<OnlineBookStoreSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlineBookStoreSingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineBookStoreSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
