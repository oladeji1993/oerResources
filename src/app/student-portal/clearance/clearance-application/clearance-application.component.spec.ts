import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearanceApplicationComponent } from './clearance-application.component';

describe('ClearanceApplicationComponent', () => {
  let component: ClearanceApplicationComponent;
  let fixture: ComponentFixture<ClearanceApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClearanceApplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClearanceApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
