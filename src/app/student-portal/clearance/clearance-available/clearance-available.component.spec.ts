import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearanceAvailableComponent } from './clearance-available.component';

describe('ClearanceAvailableComponent', () => {
  let component: ClearanceAvailableComponent;
  let fixture: ComponentFixture<ClearanceAvailableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClearanceAvailableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClearanceAvailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
