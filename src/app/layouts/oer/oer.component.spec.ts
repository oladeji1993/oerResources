import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OerComponent } from './oer.component';

describe('OerComponent', () => {
  let component: OerComponent;
  let fixture: ComponentFixture<OerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
